---
title: "Mission"
description: "战斗/对话场景的运行时容器：持有场景、队伍、Agent、投射物、行为与逻辑，并驱动 Tick。既是 MISSION 层的中心，也是与 Campaign 层交汇的地方。"
---

# Mission

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade（MISSION 层）
**Type:** `public sealed class Mission : DotNetObject, IMission`
**Base:** `DotNetObject`（引擎侧对象绑定）、实现 `IMission`
**Source:** `bannerlord-1.5.3/TaleWorlds.MountAndBlade/Mission.cs`

## 概述

`Mission` 是一个正在进行的**场景实例**：地图战斗、攻城、对话、单人小场景、编辑场景，全都是它。它持有场景 `Scene`、双方队伍（`Teams`）、全部 `Agent`、投射物、任务物件、`MissionBehavior` 与 `MissionLogic`，并提供 380 多个 public 成员来操作它们。它**不是**战役状态容器——大地图上的英雄、聚落、队伍属于 [Campaign](../../campaign/Campaign)；进入任务时战役 tick 暂停、任务 tick 接管，任务结束后把结果写回战役。

## 心智模型

三层：

- **实体层**：`Scene`、`Teams`（`AttackerTeam` / `DefenderTeam` / `PlayerTeam` / `SpectatorTeam` 等）、`AllAgents` / `Agents`、`MissionObjects` / `ActiveMissionObjects`、`MissilesList`、`MountsWithoutRiders`、`Boundaries`。
- **行为层**：`MissionBehaviors`（每个实例一个生命周期的逻辑）与 `MissionLogics`（可切换的规则逻辑，如「攻城武器可用性」）。两者都通过 `AddMissionBehavior` / `GetMissionBehavior<T>()` / `HasMissionBehavior<T>()` 管理。
- **驱动层**：`OnTick(dt, realDt, updateCamera, doAsyncAITick)` 是主循环入口，由 [MissionState](../MissionState) 调用；`MissionTimeTracker` 记录任务时间；`CurrentState`（`NewlyCreated` → `Initializing` → `Continuing` → `EndingNextFrame` → `Over`）标记生命周期阶段。

**常见误用与坑**

1. **`Mission.Current` 在任务外为 null**。它由 `MissionState` 设置，`MissionState.OnFinalize` 会置回 null。任何跨任务缓存都会失效。
2. **在 `MissionBehavior` 构造函数里访问 `Mission.Current`**：此时任务还在 `Initializing`，场景与 Agent 可能尚未生成。放到 `MissionScreenOver`/`MissionBehaviorAddedEvent` 或 `OnMissionBehaviorInitialize` 之后。
3. **在 `Tick` 里做重活**：`OnTick` 每帧调用，1.5.3 里还有 `TickAgentsAndTeamsAsync` / `TickAgentsAndTeamsImp` 两条 AI 路径。帧预算敏感。
4. **混淆 `dt` 与 `realDt`**：`OnTick(float dt, float realDt, ...)` 第一个是任务时间增量，第二个是真实时间增量。暂停时 `dt` 为 0。
5. **`RetreatMission` / `SurrenderMission` 的副作用**：会触发整条胜负判定链，直接改战役结果。mod 里慎用。
6. **`Mission` 是 `sealed`**：不能继承。要扩展就写 `MissionBehavior` 或 `MissionLogic`。

## 怎么用

### 怎么拿到它

**不要自己 `new`**。唯一的构造点是 `MissionState.CreateMission`（`MissionState.cs:264`）里的 `new Mission(rec, this, needsMemoryCleanup)`（`:266`），而它又只被 `MissionState.HandleOpenNew`（`:270`）调用。对外的入口是静态工厂 `public static Mission OpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors = true, bool needsMemoryCleanup = true)`（`MissionState.cs:320`），它做四件事：`Game.Current.OnMissionIsStarting(...)`（`:327`）→ `GameStateManager.CreateState<MissionState>()`（`:328`）→ `HandleOpenNew`（`:329`）→ `PushState(missionState, 0)`（`:330`）。

`Mission.Current` 是在 `Initialize()` 里第一次被赋值的（`Mission.cs:608`），而 `Initialize()` 由 `MissionState.LoadMission` 调（`MissionState.cs:260`）。所以 `OpenNew` 返回的那一刻 `Mission.Current` **还可能是上一个任务的实例**；要当前任务用 `MissionState.Current.CurrentMission`。销毁时 `OnMissionStateFinalize` 把它置 null（`Mission.cs:1142`）。

注册 behavior 有两条等价入口：`HandleOpenNew` 传给 `handler` 委托返回的集合会被 `AddBehaviorsToMission` 分类后交给 `CurrentMission.InitializeStartingBehaviors(logics, others, networks)`（`MissionState.cs:299-306`）；或者自己 `Mission.AddMissionBehavior`（`Mission.cs:4542`），它会回填 `missionBehavior.Mission = this`（`:4545`）、按 `BehaviorType` 分流进 `MissionLogics` 或 `_otherMissionBehaviors`（`:4546-4557`），最后调 `OnCreated()`（`:4558`）。

模块级的挂钩点是 `MBSubModuleBase.OnMissionBehaviorInitialize(Mission)`（`MBSubModuleBase.cs:127`），由 `Mission.AfterStart` 在所有已有 behavior 的 `OnBehaviorInitialize` 之后广播（`Mission.cs:3562-3569`）。

### 典型用法

```csharp
// 1) 开一个任务：在 InitializeMissionBehaviorsDelegate 里交出你的 behavior
Mission mission = MissionState.OpenNew(
    missionName: "mymod_duel",
    rec: new MissionInitializerRecord(mapName, "day", "mymod_battle_ground"),
    handler: m => new MissionBehavior[]
    {
        new MyDuelLogic(),        // : MissionLogic
        new MyRespawnHandler(),  // : MissionBehavior
    });

// 2) 任务跑起来后拿当前实例（不要用 Mission.Current，OpenNew 之后它还没更新）
Mission cur = MissionState.Current.CurrentMission;
Team enemy = Mission.GetTeam(TeamSideEnum.Enemy);

// 3) 模块级挂钩：在 OnMissionBehaviorInitialize 里往已有任务里插 behavior
public override void OnMissionBehaviorInitialize(Mission mission)
{
    base.OnMissionBehaviorInitialize(mission);
    if (!mission.HasMissionBehavior<MyRespawnHandler>())
        mission.AddMissionBehavior(new MyRespawnHandler());
}

// 4) 用完要自己摘掉（引擎在 OnMissionStateFinalize 里会全部清，但提前摘更安全）
mission.RemoveMissionBehavior(myHandler);   // 会先调 OnRemoveBehavior，Mission.cs:4578
```

### 最容易踩的坑

在 `MBSubModuleBase.OnMissionBehaviorInitialize` 里无条件 `AddMissionBehavior`，又不先查重。这个回调每个任务都会广播一遍（`Mission.cs:3566-3569`），而 `AddMissionBehavior` 不会做重复检测——它直接 `MissionBehaviors.Add`（`:4544`）。后果是同一个 handler 实例被挂上多次、每次 tick 都跑多份；更麻烦的是它在 `OnMissionBehaviorInitialize` 时 `MissionBehaviors` 里的对象已经被 `OnBehaviorInitialize` 过一轮（`:3562-3565`），你后加的那个只会被调 `OnCreated`、永远不会收到那一次的 `OnBehaviorInitialize`，状态初始化顺序直接错乱。查重用 `Mission.HasMissionBehavior<T>()`（`:2505`）或 `GetMissionBehavior<T>()`（`:4562`），先查再加。

## 成员与调用时机

**全局与状态**

- `static Mission Current`：当前任务，任务外为 null。
- `Mission.State CurrentState`：生命周期阶段。`NewlyCreated`/`Initializing` 阶段不要假设 Agent 已就位。
- `bool MissionEnded` / `bool MissionIsEnding` / `float GetMissionEndTimeInSeconds()` / `GetMissionEndTimerValue()`：结束状态与倒计时。
- `float CurrentTime`、`MissionTimeTracker`：任务内时间（用于回放与同步）。
- `MissionResult MissionResult`：结算结果，任务结束后读取。

**队伍与战场判定**

- `TeamCollection Teams` 与便捷属性 `AttackerTeam`、`DefenderTeam`、`AttackerAllyTeam`、`DefenderAllyTeam`、`PlayerTeam`、`PlayerEnemyTeam`、`PlayerAllyTeam`、`SpectatorTeam`。
- `bool IsFieldBattle` / `IsSiegeBattle` / `IsSallyOutBattle` / `IsNavalBattle` / `IsNavalRaidBattle`：战场类型判定，写分支逻辑前先问它。
- `BattleSideEnum RetreatSide`：撤退方。

**行为与逻辑**

- `void AddMissionBehavior(MissionBehavior)`：注册行为。**同时进入 `MissionBehaviors` 列表**。
- `T GetMissionBehavior<T>() where T : class, IMissionBehavior`：按类型取第一个匹配。
- `bool HasMissionBehavior<T>()`：判断是否存在。
- `void RemoveMissionBehavior(MissionBehavior)`：移除。
- `void InitializeStartingBehaviors(MissionLogic[], MissionBehavior[], MissionNetwork[])`：批量注入起始行为。
- `List<MissionBehavior> MissionBehaviors` / `List<MissionLogic> MissionLogics`：只读引用列表（属性本身可读，元素需自行判空）。

**实体操作**

- `Agent SpawnTroop(...)` / `SpawnTroopWithAgentBuildData(...)` / `SpawnAgent(AgentBuildData, ...)` / `SpawnMonster(...)`：生成单位。参数极多（`IAgentOriginBase` 来源、是否玩家侧、编队、坐骑、初始位置朝向、强化波次），完整重载以源码为准。
- `Agent GetClosestEnemyAgent(Team, Vec3, float)` / `GetClosestAllyAgent(...)` / `int GetNearbyEnemyAgentCount(Team, Vec2, float)` / `bool HasAnyAgentsOfSideInRange(...)`：空间查询。
- `Agent FindAgentWithIndex(int)` / `AgentReadOnlyList AllAgents` / `Agents`：按索引或集合遍历。
- `GameEntity SpawnWeaponWithNewEntity(...)` / `SpawnWeaponAsDropFromAgentAux(...)` / `SpawnWeaponAsDropFromMissionIndex(...)`：投射物与掉落物生成。
- `MissionObject SpawnWeaponAsDropFromMission(int, MissionObject, ...)`：命中判定里生成掉落。

**相机与视野**

- `MatrixFrame GetCameraFrame()` / `SetCameraFrame(ref MatrixFrame, float, ...)`：读写相机。
- `void SetCustomCameraFovMultiplier(float)` / `SetCustomCameraFixedDistance(float)` / `SetCustomCameraLocalOffset(Vec3)` / `SetCustomCameraIgnoreCollision(bool)`：定制相机。
- `bool IsPositionInsideBoundaries(Vec2)` / `IsPositionInsideHardBoundaries(Vec2)`：地图边界判定，AI 与投射物逻辑常用。

**结束流程**

- `void RetreatMission()`：一方撤退，按当前战斗状态结算。
- `void SurrenderMission()`：投降。
- `void EndMission()`：强制结束（不结算胜负）。
- `void OnEndMissionResult()`：结算完成后的回调钩子。

## 真实示例

```csharp
// 在自己的 MissionBehavior 里读任务状态与队伍
public class MyMissionLogic : MissionLogic
{
    // MissionBehavior 提供 OnPreMissionTick / OnMissionTick / OnFixedMissionTick 等帧回调
    public override void OnPreMissionTick(float dt)
    {
        Mission mission = Mission.Current;
        if (mission == null || mission.CurrentState != Mission.State.Continuing) return;

        if (mission.IsSiegeBattle)
        {
            int alive = mission.GetMemberCountOfSide(BattleSideEnum.Defender);
            if (alive == 0) mission.EndMission();
        }
    }

    // MissionLogic 的战斗结束回调是 OnBattleEnded（无参）
    public override void OnBattleEnded()
    {
        // 回到战役层后再读 Campaign
        if (Campaign.Current != null)
            Debug.Print("battle ended");
    }
}
```

## 风险与边界

- **生命周期强绑定**：任务结束会清空场景与 Agent。在 `MissionEnded` 之后访问 `Agent` 是未定义行为。
- **同步与 AI 双线程**：`TickAgentsAndTeamsAsync` 名字里的 Async 表示 AI 计算可异步，但主循环仍需 `WaitAsyncTasks()` 语义上的同步点。自定义异步逻辑要注意与主线程的数据竞争。
- **回放录制**：`MissionState.RecordMission` 为真时进入录制模式，回放会重放 tick 序列。任何依赖真实时间或外部状态的逻辑在回放里会错乱。
- **性能**：`AllAgents` 全量遍历 + 射线检测（`RayCastForClosestAgent`）在百人规模下开销显著。放在低频逻辑里用。
- **跨域方向**：Mission 在 MountAndBlade 层，可以引用 Core，但**不能**引用 CampaignSystem 的实体方法以外的界面类型。要弹结算界面，让 [ScreenManager](../../gui/ScreenManager) 侧的模块监听结束事件。
- **不可继承**：`sealed` 决定了唯一的扩展方式是 `MissionBehavior` / `MissionLogic`。

## 依赖关系

- [MissionState](../MissionState) — 游戏状态机宿主，创建并驱动本类，是任务侧的生命周期管理者
- [Campaign](../../campaign/Campaign) — 战役层；任务前后由它提供世界数据与结算上下文
- [ScreenBase](../../gui/ScreenBase) — 任务内界面（`MissionScreen`）的基类，任务期间压在顶层
- [ScreenManager](../../gui/ScreenManager) — 管理任务界面与其他界面的栈序