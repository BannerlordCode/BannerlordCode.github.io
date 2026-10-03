---
title: "Mission"
description: "任务本体：当前任务由静态 Mission.Current 指向，Teams 是嵌套的 TeamCollection（其 Add(Team) 只打印警告、什么都不做，真正入口是 Add(BattleSideEnum, ...)），RemoveTimeSpeedRequest 找不到 id 会 RemoveAt(-1) 直接抛异常，CurrentTime 读的是每帧刷新的缓存。"
---

# Mission

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class Mission : DotNetObject, IMission`
**Base:** `DotNetObject`（native 包装基类）；实现 `IMission`
**File:** `TaleWorlds.MountAndBlade/Mission.cs`（8503 行 / 328 KB；类型本体约 7900 行，其余是 11 个嵌套类型、12 个嵌套枚举与 2 个委托）

## 概述

`Mission` 是一场任务/战斗/对话/商队的全部运行时状态。当前任务由 `public static Mission Current` 指向——它的 setter 是 **private**，mod 只能读、不能造。「一个进程同时只有一个 Current」是所有 `Mission.Current.xxx` 简写能成立的前提，也是它们在任务切换瞬间最危险的原因。

任务持有五大块东西：**行为列表**（`List<MissionBehavior> MissionBehaviors` 只读暴露、`List<MissionLogic> MissionLogics` 同理）、**队伍集合**（`Mission.TeamCollection Teams`，嵌套类，继承 `List<Team>`）、**单位集合**（`AgentReadOnlyList Agents` / `AllAgents` / `AgentReadOnlyList` 类型的 `MissilesList` / `CorpseAgentInfos`）、**场景对象**（`ActiveMissionObjects` / `MissionObjects` / `Boundaries`）、以及**时间与状态**（`CurrentTime` / `Mode` / `CurrentState` / `MainAgent`）。

生命周期用嵌套枚举 `Mission.State` 表达，五个值依次是 `NewlyCreated` → `Initializing` → `Continuing` → `EndingNextFrame` → `Over`。`Mission.AfterStart()` 在跑完所有 `MissionBehavior.OnBehaviorInitialize` / `EarlyStart` / `AfterStart` 之后把 `CurrentState` 置为 `Continuing`；`EndMission()` 把 `MissionEnded = true` 且 `CurrentState = EndingNextFrame`；`EndMissionInternal()` 收尾后置 `Over` 并调 `FreeResources()` / `FinalizeMission()`。`IsMissionEnding` 就是 `CurrentState != Mission.State.Over && this.MissionEnded`。

## 心智模型

把 `Mission` 想成**「一个静态入口 + 三张名单 + 一个状态机」**。真正需要记住的只有四件事。

**第一件：`CurrentTime` 是缓存值，不是真时钟。** getter 就一句 `return this._cachedMissionTime;`，而 `_cachedMissionTime` 只在 `internal void UpdateMissionTimeCache(float curTime)`（一个 `[MBCallback]`）里被赋值。也就是说**它在引擎每帧回调时刷新一次**，你在任意时刻读到的都是「上一帧的引擎时间」。用它在 `MissionBehavior.OnMissionTick` 里做 delta 计算是对的，用它做亚帧精度判定就会偏。

**第二件：`Teams` 是嵌套类型，而且有一个假的 `Add`。** `Mission.TeamCollection` 继承 `List<Team>`，因此它同时有两个 `Add`：

```csharp
public new void Add(Team t)
{
    MBDebug.ShowWarning("Pre-created Team can not be added to TeamCollection!");
}

public Team Add(BattleSideEnum side, uint color = 4294967295U, uint color2 = 4294967295U, Banner banner = null, bool isPlayerGeneral = true, bool isPlayerSergeant = false, bool isSettingRelations = true)
```

**第一个只打一条警告、什么都不做**（`new` 修饰符把它藏住了，编译器仍会选中最匹配的）。真正能加队伍的是第二个，它会 `AddNative()` 建 native 队、按 `side` 落到 `Attacker` / `AttackerAlly` / `Defender` / `DefenderAlly`、遍历全部 `MissionBehaviors` 调 `OnAddTeam(team)`、设关系、调 `AdjustPlayerTeams()`、再调 `AfterAddTeam(team)`。写 `teams.Add(someTeam)` 不会报错，只是队伍凭空消失。

**第三件：行为列表是只读暴露的，只能通过三个方法改。** `MissionBehaviors` 与 `MissionLogics` 都是 `get;`（无 setter），增删必须走 `AddMissionBehavior` / `RemoveMissionBehavior`——它们额外负责写 `missionBehavior.Mission`、按 `BehaviorType` 分流、以及触发 `OnCreated` / `OnRemoveBehavior`。绕过它们直接 `mission.MissionBehaviors.Add(...)` 能改到列表，但 `Mission` 引用不会被赋值、行为也不会收到 `OnCreated`。

**第四件：有一个真实会抛异常的 API。** `RemoveTimeSpeedRequest(int timeSpeedRequestID)` 的实现是：

```csharp
int index = -1;
for (int i = 0; i < this._timeSpeedRequests.Count; i++)
{
    if (this._timeSpeedRequests[i].RequestID == timeSpeedRequestID) { index = i; }
}
this._timeSpeedRequests.RemoveAt(index);
```

**没有 `break`**（取最后一个匹配），而且 **id 不存在时 `index` 保持 -1，`RemoveAt(-1)` 抛 `ArgumentOutOfRangeException`**。同文件里还有个 `AssertTimeSpeedRequestDoesntExist`，但它带 `[Conditional("_RGL_KEEP_ASSERTS")]`，**发布构建会被整条编译掉**。所以这是「调试时安静、发布时炸」的典型。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Current` | `public static Mission Current { get; private set; }` | 当前任务。setter private，mod 读得到造不了。任务切换瞬间它会先变，指向半初始化的新任务。 |
| `MainAgent` | `public Agent MainAgent { get; set; }` | 主控单位。setter 会发 `OnMainAgentChanged(oldAgent)`，并在 `!GameNetwork.IsClient` 时同步写 `MainAgentServer`。 |
| `MainAgentServer` | `public Agent MainAgentServer { get; set; }` | 服务器视角的主控单位。客户端上 `MainAgent` 可能是别人控制的，`MainAgentServer` 才是权威。 |
| `CurrentTime` | `public float CurrentTime` | 读 `_cachedMissionTime`。该字段只在 `[MBCallback] internal void UpdateMissionTimeCache(float curTime)` 里更新，**每帧一次**。 |
| `Mode` | `public MissionMode Mode` | 读 `_missionMode`。只由 `SetMissionMode` 改。 |
| `SetMissionMode` | `public void SetMissionMode(MissionMode newMode, bool atStart)` | 模式真的变化**且** `CurrentState != State.Over` 时，才遍历 `MissionBehaviors` 调 `OnMissionModeChange(旧值, atStart)` 并通知 `IMissionListener`。同值调用是完整 no-op。 |
| `CurrentState` | `public Mission.State CurrentState { get; private set; }` | 五态机：`NewlyCreated` / `Initializing` / `Continuing` / `EndingNextFrame` / `Over`。 |
| `EndMission` | `public void EndMission()` | `[UsedImplicitly] [MBCallback(null, false)]`。方法体只有四行：`_missionEndTime = -1f; NextCheckTimeEndMission = -1f; MissionEnded = true; CurrentState = State.EndingNextFrame;`。**真正的清理由下一帧的 `EndMissionInternal()` 做。** |
| `IsMissionEnding` | `public bool IsMissionEnding` | `CurrentState != Mission.State.Over && this.MissionEnded`。 |
| `MissionBehaviors` | `public List<MissionBehavior> MissionBehaviors { get; }` | **只读暴露的活列表**。每帧回调都倒序遍历它。改动请走 `AddMissionBehavior` / `RemoveMissionBehavior`。 |
| `MissionLogics` | `public List<MissionLogic> MissionLogics { get; }` | 同上的 `MissionLogic` 子集。部分回调（如 `OnEndMissionRequest`）只遍历它。 |
| `AddMissionBehavior` | `public void AddMissionBehavior(MissionBehavior missionBehavior)` | 登记 + 写 `Mission` + 按 `BehaviorType` 分流 + 调 `OnCreated()`。 |
| `RemoveMissionBehavior` | `public void RemoveMissionBehavior(MissionBehavior missionBehavior)` | 先 `OnRemoveBehavior()`，再按 `BehaviorType` 分流移除（非法类型会 `Debug.FailedAssert("Invalid behavior type")`），最后 `Mission = null`。 |
| `GetMissionBehavior<T>` | `public T GetMissionBehavior<T>() where T : class, IMissionBehavior` | 正序 `as T` 扫描 `MissionBehaviors`，返回第一个命中，扫不到返回 `default(T)`。 |
| `HasMissionBehavior<T>` | `public bool HasMissionBehavior<T>() where T : MissionBehavior` | `return this.GetMissionBehavior<T>() != null;` |
| `Teams` | `public Mission.TeamCollection Teams { get; private set; }` | 嵌套类，继承 `List<Team>`。`AttackerTeam` / `DefenderTeam` / `AttackerAllyTeam` / `DefenderAllyTeam` / `PlayerTeam` / `PlayerEnemyTeam` / `PlayerAllyTeam` / `SpectatorTeam` 全是它的转发属性。 |
| `TeamCollection.Add(Team)` | `public new void Add(Team t)` | **只打 `MBDebug.ShowWarning("Pre-created Team can not be added to TeamCollection!")`，什么都不做。** |
| `TeamCollection.Add(BattleSideEnum, …)` | `public Team Add(BattleSideEnum side, uint color = 4294967295U, uint color2 = 4294967295U, Banner banner = null, bool isPlayerGeneral = true, bool isPlayerSergeant = false, bool isSettingRelations = true)` | 唯一有效的加队伍入口。默认颜色 `4294967295U` = `uint.MaxValue`。 |
| `Agents` / `AllAgents` | `public AgentReadOnlyList Agents` / `AllAgents` | `Agents` 是存活单位，`AllAgents` 含已死待清理的。两者都是 `MBReadOnlyList<Agent>`（继承自 `List<Agent>`），可按下标取。 |
| `ActiveMissionObjects` / `MissionObjects` | `public MBReadOnlyList<MissionObject> ActiveMissionObjects` / `MissionObjects` | 前者是场景里已激活的对象（可 `ActivateMissionObject` / `DeactivateMissionObject` 切换），后者是全部。 |
| `SpawnTroop` | `public Agent SpawnTroop(IAgentOriginBase troopOrigin, bool isPlayerSide, bool hasFormation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, bool forceDismounted, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, ItemObject bannerItem = null, FormationClass formationIndex = FormationClass.NumberOfAllFormations, bool useTroopClassForSpawn = false)` | 生成士兵的正规入口。内部构造 `AgentBuildData`，按 `hasFormation` 决定要不要挂编队，玩家角色会强制 `spawnWithHorse = true`。 |
| `SpawnAgent` | `public Agent SpawnAgent(AgentBuildData agentBuildData, bool spawnFromAgentVisuals = false)` | 更底层入口。`agentBuildData.AgentCharacter == null` 时直接 `throw new MBNullParameterException("npcCharacterObject")`。 |
| `SpawnMonster` | `public Agent SpawnMonster(ItemRosterElement rosterElement, ItemRosterElement harnessRosterElement, in Vec3 initialPosition, in Vec2 initialDirection, int forcedAgentIndex = -1)` | 生成马匹。两个重载分别收 `ItemRosterElement` 与 `EquipmentElement`。 |
| `ReplaceBotWithPlayer` | `public Agent ReplaceBotWithPlayer(Agent botAgent, MissionPeer missionPeer)` | 联网接手：把 bot 换成真人玩家。 |
| `GetNearbyEnemyAgents` / `GetNearbyAllyAgents` / `GetNearbyAgents` | `public MBList<Agent> GetNearbyEnemyAgents(Vec2 center, float radius, Team team, MBList<Agent> agents)` | **三个方法的第一行都是 `agents.Clear();`**，然后调用方再 `return agents;`。传入的列表被清空后复用，返回的就是它。 |
| `GetClosestEnemyAgent` / `GetClosestAllyAgent` | `public Agent GetClosestEnemyAgent(Team team, Vec3 position, float radius)` | 返回单个最近单位，找不到返回 null。 |
| `AddTimeSpeedRequest` / `RemoveTimeSpeedRequest` / `GetRequestedTimeSpeed` | `public void AddTimeSpeedRequest(Mission.TimeSpeedRequest request)` | 请求时间倍速。`TimeSpeedRequest(float requestedTime, int requestID)`——**参数顺序是先时间后 id**。`RemoveTimeSpeedRequest` 找不到 id 时会 `RemoveAt(-1)` **抛异常**。 |
| `OnTick` | `public void OnTick(float dt, float realDt, bool updateCamera, bool doAsyncAITick)` | 每帧总入口。第一句是 `ApplyGeneratedCombatLogs()`，然后若 `InputManager == null` 就补一个 `EmptyInputContext`，再依次跑待处理 tick 动作。 |
| `IsFastForward` | `public bool IsFastForward { get; private set; }` | setter 除了赋值还调 `MBAPI.IMBMission.OnFastForwardStateChanged(this.Pointer, this._isFastForward)`。 |
| `PauseAITick` | `public bool PauseAITick` | setter 只调 `MBAPI.IMBMission.SetPauseAITick(this.Pointer, value);` |
| `AfterStart` | `public void AfterStart()` | 启动编排：清空 `_activeAgents` / `_allAgents` / `_tickActions`，两轮子模块回调夹着 `OnBehaviorInitialize`，再 `EarlyStart`，初始化 spawn path 与部署计划，再 `AfterStart`，最后 `MissionObject.AfterMissionStart()` 与天气效果，`CurrentState = Continuing`。 |
| `MaxRuntimeMissionObjects` | `public const int MaxRuntimeMissionObjects = 4095;` | 运行期 mission object id 上限。相邻还有 `MaxNavMeshId = 1000000`、`MaxDamage = 2000`、`_nextDynamicNavMeshIdStart = 1000050`。 |
| `IsFriendlyMission` / `DisableDying` / `ForceNoFriendlyFire` | `public bool IsFriendlyMission = true;` | **public 可写字段**，不是属性。作弊式的任务级开关（`KillCheats` 等静态方法会改它们）。 |
| `MissilesList` / `CorpseAgentInfos` | `public MBReadOnlyList<Mission.Missile> MissilesList` / `MBReadOnlyList<Mission.CorpseAgentInfo> CorpseAgentInfos` | 投射物与尸体账本，都只读暴露但**只有 `AddDynamicEntityInfo` 一类内部方法能写**。 |

## 真实示例

第一种：挂一个行为并在合适的回调里干活。这是 mod 与任务交互的标准形状，官方行为全都这样写：

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public class MyMissionLogic : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        Mission mission = Mission.Current;
        Agent player = mission.MainAgent;
        if (player == null || player.Team == null)
        {
            return;
        }
        // GetNearbyEnemyAgents 会先 Clear 传入的列表，所以缓存一份复用
        mission.GetNearbyEnemyAgents(player.Position.AsVec2, 20f, player.Team, this._scratch);
        Debug.Print("enemies nearby: " + this._scratch.Count
            + " state=" + mission.CurrentState
            + " time=" + mission.CurrentTime, 0);
    }

    public override void OnDeploymentFinished()
    {
        base.OnDeploymentFinished();
        this.Mission.MainAgent.IsItemUseDisabled = false;
    }

    private readonly MBList<Agent> _scratch = new MBList<Agent>();
}
```

第二种：注册与反注册行为。注意 `MissionBehaviorType.Other` 会让它进 `_otherMissionBehaviors`，`Logic` 必须继承 `MissionLogic`——这段代码本身就是 `MissionLogic`，所以不需要单独 Add。

```csharp
public class MyBootstrap : MissionLogic
{
    public override void OnAfterMissionCreated()
    {
        base.OnAfterMissionCreated();
        this.Mission.AddMissionBehavior(new MyProximityWatcher());
    }

    // OnEndMission 在 MissionBehavior 上是 protected virtual，只能用 protected override
    protected override void OnEndMission()
    {
        base.OnEndMission();
        MyProximityWatcher watcher = this.Mission.GetMissionBehavior<MyProximityWatcher>();
        if (watcher != null)
        {
            // RemoveMissionBehavior 内部会先调 OnRemoveBehavior，再把 Mission 置 null
            this.Mission.RemoveMissionBehavior(watcher);
        }
    }
}

public class MyProximityWatcher : MissionBehavior
{
    public override MissionBehaviorType BehaviorType
    {
        get { return MissionBehaviorType.Other; }
    }

    public override void OnMissionTick(float dt)
    {
        Agent main = this.Mission.MainAgent;
        if (main == null)
        {
            return;
        }
        Debug.Print("main hp " + main.Health, 0);
    }
}
```

第三种：加一支队伍。**这里必须用 `Add(BattleSideEnum, ...)`，`Add(Team)` 是假的**：

```csharp
Mission mission = Mission.Current;

Team ally = mission.Teams.Add(
    BattleSideEnum.Attacker,                       // side：Attacker / Defender
    0x0000FFFFu,                                   // color，注意是 ABGR
    0x000000FFu,                                   // color2
    null,                                          // banner
    false,                                         // isPlayerGeneral
    false,                                         // isPlayerSergeant
    true);                                         // isSettingRelations

// 这个重载只打警告、不做事：
// mission.Teams.Add(ally);  -> "Pre-created Team can not be added to TeamCollection!"

// 读队伍（转发属性）
Team attacker = mission.AttackerTeam;
Team defender = mission.DefenderTeam;
Debug.Print("ally side=" + ally.Side + " attacker side=" + attacker.Side, 0);
```

第四种：时间倍速请求。注意 `TimeSpeedRequest` 的参数顺序，以及 `RemoveTimeSpeedRequest` 的异常行为：

```csharp
Mission mission = Mission.Current;

// 构造：(float requestedTime, int requestID) —— 时间在前、id 在后
var request = new Mission.TimeSpeedRequest(2.0f, 4711);
mission.AddTimeSpeedRequest(request);

// 读：返回 false 时 requestedTime 被置 0f
if (mission.GetRequestedTimeSpeed(4711, out float speed))
{
    Debug.Print("time speed " + speed, 0);
}

// 删：id 不存在会 RemoveAt(-1) 抛 ArgumentOutOfRangeException，先用读接口确认
if (mission.GetRequestedTimeSpeed(4711, out _))
{
    mission.RemoveTimeSpeedRequest(4711);
}
```

## 风险与边界

- **`Mission.Current` 的 setter 是 private。** mod 读得到、造不了、也换不了。任务切换过程中它会先指向新任务，此时任务可能处于 `NewlyCreated` / `Initializing`，`MainAgent` 为 null、`Agents` 为空。任何 `Mission.Current.xxx` 的静态写法都要判空。
- **`Teams.Add(Team)` 是假的。** 只打 `MBDebug.ShowWarning`，队伍不会进列表。必须用 `Add(BattleSideEnum, ...)`。
- **`RemoveTimeSpeedRequest` 找不到 id 会抛 `ArgumentOutOfRangeException`。** 循环里没有 `break`（取最后一个匹配），且 `index` 初值 -1 直接进 `RemoveAt`。配套的 `AssertTimeSpeedRequestDoesntExist` 带 `[Conditional("_RGL_KEEP_ASSERTS")]`，**发布构建里整条被编译掉**。
- **`TimeSpeedRequest` 参数顺序是 `(float requestedTime, int requestID)`**——时间和 id 反着，容易传错。
- **`CurrentTime` 是每帧刷新的缓存。** 只在 `[MBCallback] UpdateMissionTimeCache` 里更新。同一帧内多次读值相同；亚帧精度判定会偏。
- **`MissionBehaviors` / `MissionLogics` 是只读暴露的活列表。** 直接 `Add` 能改到列表，但 `Mission` 引用不会被赋值、`OnCreated` 不会触发——这类行为会静默半失效。
- **`GetMissionBehavior<T>` 扫不到返回 `default(T)`。** 不抛异常。引用类型即 null。
- **`SetMissionMode` 在同值调用时是完全 no-op。** 传相同的 `newMode` 不会触发任何 `OnMissionModeChange`。
- **`SetMissionMode` 在 `CurrentState == Over` 时也不通知。** 任务收尾阶段改模式是静默的。
- **三个 `GetNearby*Agents` 都会先 `Clear()` 传入的列表。** 把一个你自己还要用的列表传进去会被清空；返回值就是传入的那个对象，不是副本。
- **`EndMission()` 不是立即结束。** 它只置四个字段，真正的清理在下一帧的私有 `EndMissionInternal()` 里做——那里会遍历所有行为调 `OnEndMissionInternal`、对每个 `Agent` 调 `OnRemove()` / `OnDelete()` / `Clear()`、`Teams.Clear()`、对每个 `MissionObject` 调 `OnEndMission()`、最后 `FreeResources()` + `FinalizeMission()`。所以 `EndMission()` 之后那一帧内对象仍然活着。
- **`SpawnAgent` 在角色为空时抛 `MBNullParameterException`。** 具体是 `if (agentCharacter == null) throw new MBNullParameterException("npcCharacterObject");`。
- **`SpawnTroop` 对玩家角色强制 `spawnWithHorse = true`**（`if (troop.IsPlayerCharacter && !forceDismounted) spawnWithHorse = true;`）。想给玩家单位下马必须显式传 `forceDismounted: true`。
- **`IsFriendlyMission` / `DisableDying` / `ForceNoFriendlyFire` 是 public 可写字段**，不是属性，也没有副作用通知。改了不会自动广播，跨网络时只在本地生效。
- **`MainAgentServer` 与 `MainAgent` 在客户端上不同。** `MainAgent` 的 setter 带 `if (!GameNetwork.IsClient)` 才写 `MainAgentServer`——客户端上它不会自动跟随。
- **`GetRequestTimeSpeed` 类接口返回 false 时 `out` 参数被置 0f**，不是保持原值。
- **三个 `const` 是硬上限。** `MaxRuntimeMissionObjects = 4095`、`MaxNavMeshId = 1000000`、`MaxDamage = 2000`。动态生成大量 mission object 或超高伤害时它们是天花板。
- **`Mission` 是 sealed。** 扩展只能靠 [MissionLogic](../../mission-ext/MissionLogic) / [MissionBehavior](../MissionBehavior)。
- **`CurrentState` 的 setter 是 private。** 想改状态只能走 `EndMission()` 或等引擎推进。

## 跨版本提示

`Mission` 是 API 里第二大的类型（8503 行 / 385 个 public 成员），跨 1.3 → 1.5 的变化以「加方法」为主。升级时最该盯的四处：

一是 **`State` 枚举**。现在是 5 个值。若后续版本插入新状态（如加载中、暂停），写 `if (mission.CurrentState == Mission.State.Continuing)` 的代码不会崩，但**依赖「非 Over 即运行中」的假设会失效**——用 `IsMissionEnding` 这类封装好的属性更稳。

二是 **`MissionBehavior` 钩子集合**。任务每帧遍历 `MissionBehaviors`，新增钩子意味着多一次虚调用。任务里挂了上百个行为时这笔开销是可测量的。

三是 **邻近查询的返回类型**。`GetNearbyEnemyAgents` 这族返回 `MBList<Agent>` 并复用调用方传入的列表。如果某版本改成返回新列表或不复用，你的「缓存列表」写法仍然能跑（只是失去优化）；如果改成不 `Clear()` 就填充，你的代码会出现重复元素。改这块时值得 diff 方法体。

四是 **`TeamCollection.Add(Team)` 那个假重载**。它用 `new` 隐藏了基类方法，靠 `MBDebug.ShowWarning` 提示。`new` 修饰符在版本间很容易被误改（去掉 `new` 就变成编译错误，改成不同行为则静默）。如果你依赖「加队伍后遍历能拿到」，请只走 `Add(BattleSideEnum, ...)`。

生成相关的 `SpawnTroop` / `SpawnAgent` / `SpawnMonster` / `ReplaceBotWithPlayer` 签名在多人大改动的版本里会追加参数（海战、跨服对战都加过）。**用命名参数调用它们**能显著降低升级时的编译面。

## 依赖关系

- 静态入口：[GameState](../../core-extra/GameState) 负责在任务栈切换时写 `Mission.Current`；`TaleWorlds.MountAndBlade/MissionState.cs` 是启动编排的另一半（调 `OnMissionScreenPreLoad` 与 `OnAfterMissionCreated`），它没有独立收录的页面，启动顺序直接看本页 `AfterStart` 一节
- 行为系统：[MissionBehavior](../MissionBehavior) 是所有回调的基类，[MissionLogic](../../mission-ext/MissionLogic) 是 `Logic` 分支，[MissionBehaviorType](../../mission-ext/MissionBehaviorType) 决定分流，[IMissionBehavior](../../mission-ext/IMissionBehavior) 是空标记接口（`GetMissionBehavior<T>` 的泛型约束）
- 队伍：[Team](../../mission-ext/Team) 由嵌套的 `Mission.TeamCollection` 承载；[MBTeam](../../mission-ext/MBTeam) 是 native 侧句柄；[OrderController](../../mission-ext/OrderController) 是 `TransferUnits` / `SplitFormation` 的实际执行者
- 单位：[Agent](../Agent) 由 `SpawnTroop` / `SpawnAgent` / `SpawnMonster` 产生；[AgentBuildData](../../mission-ext/AgentBuildData) 是生成参数载体；[AgentReadOnlyList](../../mission-ext/AgentReadOnlyList) / [AgentList](../../mission-ext/AgentList) 是容器
- 编队：[Formation](../Formation) 通过 `Agent.Formation` 与任务相连；[FormationSpawnData](../../mission/FormationSpawnData) / [SpawnPathData](../../mission-ext/SpawnPathData) / [BattleSideSpawnPathSelector](../../mission-ext/BattleSideSpawnPathSelector) 描述出生路径
- 场景：[MBBoundaryCollection](../../mission-ext/MBBoundaryCollection)（嵌套类，实现 `IDictionary<string, ICollection<Vec2>>`）管边界，[MissionObject](../../mission-ext/MissionObject) 家族管场景对象，[MissionObjectId](../../mission-ext/MissionObjectId) 是 id 类型
- 投射物与尸体：嵌套的 `Mission.Missile`（继承 `MBMissile`）、[MissileCollisionReaction](../../mission-ext/MissileCollisionReaction)、嵌套的 `Mission.CorpseAgentInfo`、`Mission.DynamicallyCreatedEntity`
- 网络：[MissionNetwork](../../mission-ext/MissionNetwork) / [MissionPeer](../../mission-ext/MissionPeer) / [MissionRepresentativeBase](../../mission-ext/MissionRepresentativeBase) 是多人链路
- 核心枚举：[MissionMode](../../core-extra/MissionMode)、[BattleSideEnum](../../core-extra/BattleSideEnum)、[TeamSideEnum](../../core-extra/TeamSideEnum)、[TerrainType](../../core-extra/TerrainType)、[FormationClass](../../core-extra/FormationClass)、[MissionInitializerRecord](../../core-extra/MissionInitializerRecord)
- 引擎侧：[Scene](../../engine/Scene)、[WorldPosition](../../engine/WorldPosition)、[GameEntity](../../engine/GameEntity)、[SoundEventParameter](../../engine/SoundEventParameter)、[WeakGameEntity](../../engine/WeakGameEntity)
- 桶首页：[mission API 分区](../)