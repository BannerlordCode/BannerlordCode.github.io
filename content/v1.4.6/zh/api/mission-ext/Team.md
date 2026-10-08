---
title: "Team"
description: "非 sealed 但实际无法被 mod 派生的战斗队伍：一侧十个 Formation 的容器，加上一整套命令控制器、队伍 AI 与敌我关系，敌我判定最终落到原生结构 MBTeam 上。"
---
# Team

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class Team : IMissionTeam`
**Source:** `TaleWorlds.MountAndBlade/Team.cs`

## 概述

`Team` 是战斗里的一方（或一方之下的盟友）。它把四样东西收在一起：**十个 Formation 槽位**（`FormationsIncludingSpecialAndEmpty` 十个，`FormationsIncludingEmpty` 只有前八个，剔掉了 General 与 Bodyguard）、**成员 Agent 列表**（`TeamAgents` 全量、`ActiveAgents` 在场）、**命令通道**（两个 `OrderController` 加事件）、以及**队伍 AI**（`TeamAI`、`QuerySystem`、`DetachmentManager`）。

它实现 `TaleWorlds.Core` 里的 `IMissionTeam`，而那个接口只要求一个成员：`BattleSideEnum Side { get; }`。所以 mod 想拿到「以 `IMissionTeam` 形式」的对象时，实际拿到的就是这个类。

**这个类不是 sealed，但它实际上派生不出来。** 1.4.6 的 `Team.cs` 里 `virtual`、`abstract`、`protected` 三个关键字的出现次数是 **0**——没有任何可覆盖的成员。而唯一的公开构造函数 `Team(MBTeam mbTeam, BattleSideEnum side, Mission mission, uint color = uint.MaxValue, uint color2 = uint.MaxValue, Banner banner = null)` 要求一个 `MBTeam`，而 `MBTeam` 是个 `public struct`，它的构造函数是 `internal MBTeam(Mission mission, int index)`。也就是说：**mod 代码拿不出一个合法的 `MBTeam`**，只能拿到 `MBTeam.InvalidTeam`（`new MBTeam(null, -1)`）。构造函数本身还会检查 `if (this != Team._invalid)` 才调 `Initialize()`，所以那个哨兵实例是刻意绕开初始化的。

## 心智模型

**先认 `Side`，再认 `TeamSide`。** `Side` 是构造时定死的 `BattleSideEnum`（`Attacker` / `Defender` / `None`），`IsAttacker` 与 `IsDefender` 都是它的直接比较。`TeamSide` 则是每访问一次现算的三态：`IsPlayerTeam` 为真 → `PlayerTeam`；`IsPlayerAlly` 为假 → `EnemyTeam`；否则 `PlayerAllyTeam`。而 `IsPlayerTeam` 与 `IsPlayerAlly` 都要求 `Mission != null`——**脱离任务上下文读这两个属性会静默得到 false，进而把 `TeamSide` 算成 `EnemyTeam`**。

**哨兵值是 `Team.Invalid`，不是 null。** 它是懒初始化的静态属性，内部 `new Team(MBTeam.InvalidTeam, BattleSideEnum.None, null, uint.MaxValue, uint.MaxValue, null)`，并因为 `this != Team._invalid` 的判断而跳过 `Initialize()`——所以它的 `FormationsIncludingSpecialAndEmpty`、`QuerySystem` 全是 null。配对使用 `IsValid`（转发 `MBTeam.IsValid`，本质是 `Index >= 0`）判真假。`Team.Invalid` 有个 `internal set`，mod 读得到、改不了。

**Formation 的数量与索引是硬编码的 10。** `Initialize()` 里 `for (int i = 0; i < 10; i++)` 建十个 `Formation`，全部进 `FormationsIncludingSpecialAndEmpty`，只有 `i < 8` 的另外进 `FormationsIncludingEmpty`。`GetFormation(FormationClass formationIndex)` 是**裸索引** `FormationsIncludingSpecialAndEmpty[(int)formationIndex]`，没有边界检查。而 `FormationClass.Unset` 与 `FormationClass.NumberOfAllFormations` 的数值都是 **10**，正好越界——传这两个值会抛。

**`DoesFirstFormationClassContainSecond` 是个位运算，而 `FormationClass` 不是 Flags 枚举。** 方法体只有一句 `return (f1 & f2) == f2;`。但 `TaleWorlds.Core` 里的 `FormationClass` 没有 `[Flags]` 特性，数值是 `Infantry=0, Ranged=1, Cavalry=2, HorseArcher=3, Skirmisher=4, HeavyInfantry=5, LightCavalry=6, HeavyCavalry=7, General=8, Bodyguard=9, Unset=10`，中间还夹着几个与相邻成员同值的哨兵（`NumberOfDefaultFormations`=4、`NumberOfRegularFormations`=8、`NumberOfAllFormations`=10）。于是在这个枚举上按位与得到的是**巧合**：`(General, General)` 为真、`(Ranged, Cavalry)` 为假，但 `(Unset, General)` 是 `10 & 8 == 8`，**返回 true**。判断「阵型 A 是否包含阵型 B」不要用它。

**敌我关系存在原生结构里。** `IsEnemyOf` / `IsFriendOf` 都转发给 `this.MBTeam`。`IsFriendOf(otherTeam)` 的定义是 `this == otherTeam || !this.MBTeam.IsEnemyOf(otherTeam)`——**自己跟自己永远算友军**。`SetIsEnemyOf` 除了写原生结构，还在 `GameNetwork.IsServerOrRecorder` 时广播一条 `TeamSetIsEnemyOf` 网络消息，所以友军关系是**联机同步的**，本地单方面改会在下一次同步时被覆盖。

**`FactionsAtWarWith` 那种缓存问题在 `Team` 上不存在，但有另外两处缓存要留意。** 一是 `CachedEnemyDataForFleeing`：它由 `UpdateCachedEnemyDataForFleeing()` 填充，方法开头用 `IsEmpty<ValueTuple<float, WorldPosition, int, Vec2, Vec2, bool>>()` 判断「已经填过了就什么都不做」，而 `Tick(float dt)` 的第一件事就是这个缓存非空则 `Clear()`——**每 tick 清空，靠调用方重新填**，谁不调它谁就读到空列表。二是 `OrderController` 的数量：`Initialize()` 只建两个（`MasterOrderController` 与 `PlayerOrderController`），`GetOrderControllerOf(Agent)` 会在缺的时候现场再建一个并挂上事件，而 `Reset()` 会把索引 2 及以后的全部摘掉。

**回放模式下大半成员是 null。** `Initialize()`、以及`Reset()`、`Clear()` 里都有 `if (!GameNetwork.IsReplay)` 的整段跳过。所以在 `GameNetwork.IsReplay` 为真时构造出来的队伍，`QuerySystem`、`DetachmentManager`、两个 OrderController 都不存在。

**位置查询有三种，返回值语义各不相同。** `GetAveragePosition()` 与 `GetAveragePositionOfEnemies()` 在集合为空时返回 `Vec2.Invalid`；`GetMedianPosition(Vec2 averagePosition)` 找不到最近的人时返回 `WorldPosition.Invalid`；`GetWeightedAverageOfEnemies(Vec2 basePoint)` 按距离平方倒数加权，没有敌人时返回 `Vec2.Invalid`。四个都要判哨兵值。

## 关键成员

### 阵营与身份

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Side` | `public BattleSideEnum Side { get; }` | 构造时定死的一侧。这也是 `IMissionTeam` 唯一要求的成员 |
| `TeamSide` | `public TeamSideEnum TeamSide` | 现算三态：玩家队 / 玩家盟友 / 敌方。**依赖 `Mission` 非 null** |
| `IsPlayerTeam` | `public bool IsPlayerTeam` | `Mission != null && Mission.PlayerTeam == this` |
| `IsPlayerAlly` | `public bool IsPlayerAlly` | `Mission != null && Mission.PlayerTeam != null && Mission.PlayerTeam.Side == this.Side` |
| `IsAttacker` / `IsDefender` | 各自 `public bool` | `Side` 的直接比较 |
| `Mission` | `public Mission Mission { get; }` | 所属任务。`Team.Invalid` 上是 null |
| `MBTeam` | `public readonly MBTeam MBTeam` | 原生队伍结构。`IsEnemyOf` 的真正落点 |
| `TeamIndex` | `public int TeamIndex` | 转发 `MBTeam.Index`，即原生层编号 |
| `IsValid` | `public bool IsValid` | 转发 `MBTeam.IsValid`，本质是 `Index >= 0` |
| `Invalid` | `public static Team Invalid` | 哨兵队伍。懒构造，**跳过 `Initialize()`**，成员大多为 null。setter 是 internal |
| `Color` / `Color2` | 各自 `public uint { get; private set; }` | 两段队伍主色 |
| `Banner` | `public Banner Banner { get; }` | 队伍旗帜 |

### 阵型与成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `FormationsIncludingSpecialAndEmpty` | `public MBList<Formation> FormationsIncludingSpecialAndEmpty { get; private set; }` | 全部十个阵型槽（含 General/Bodyguard 与空槽） |
| `FormationsIncludingEmpty` | `public MBList<Formation> FormationsIncludingEmpty { get; private set; }` | 前八个阵型槽（不含 General/Bodyguard）。AI 与编队逻辑主要用它 |
| `GetFormation` | `public Formation GetFormation(FormationClass formationIndex)` | `FormationsIncludingSpecialAndEmpty[(int)formationIndex]`，**裸索引无边界检查** |
| `GetFormationCount` | `public int GetFormationCount()` | 数 `FormationsIncludingEmpty` 里 `CountOfUnits > 0` 的个数 |
| `GetAIControlledFormationCount` | `public int GetAIControlledFormationCount()` | 上一条再加一个 `IsAIControlled` 过滤 |
| `HasAnyFormationsIncludingSpecialThatIsNotEmpty` | `public bool HasAnyFormationsIncludingSpecialThatIsNotEmpty()` | 十个槽里任意一个有兵就为真 |
| `TeamAgents` | `public MBReadOnlyList<Agent> TeamAgents` | 本队全部 Agent（含已阵亡与已离场） |
| `ActiveAgents` | `public MBReadOnlyList<Agent> ActiveAgents` | 本队当前在场的 Agent |
| `AddAgentToTeam` | `public void AddAgentToTeam(Agent unit)` | 同时加进 `TeamAgents` 与 `ActiveAgents` |
| `RemoveAgentFromTeam` | `public void RemoveAgentFromTeam(Agent unit)` | 从两个列表里同时移除 |
| `DeactivateAgent` | `public void DeactivateAgent(Agent agent)` | **只从 `ActiveAgents` 移除**，`TeamAgents` 保留 |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | 通知各阵型 AI。非客户端与非回放时才做 |
| `Leader` | `public Agent Leader` | 本队领头人。玩家在本队时直接返回 `Agent.Main`，否则从 `ActiveAgents` 里挑 |
| `HasBots` | `public bool HasBots` | `ActiveAgents` 里存在既非坐骑、又非玩家操控的 Agent |
| `Heroes` | `public IEnumerable<Agent> Heroes` | 本队的英雄 Agent，惰性枚举 |
| `GeneralsFormation` / `BodyGuardFormation` | 各自 `public Formation { get; set; }` | 将军阵与卫队阵的句柄。**可写** |
| `GeneralAgent` | `public Agent GeneralAgent { get; set; }` | 将军 Agent。**可写** |

### 命令通道

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MasterOrderController` | `public OrderController MasterOrderController` | 命令控制器列表的第 0 项 |
| `PlayerOrderController` | `public OrderController PlayerOrderController` | 命令控制器列表的第 1 项 |
| `GetOrderControllerOf` | `public OrderController GetOrderControllerOf(Agent agent)` | 按 `Owner` 找控制器，找不到就现场建一个并挂事件 |
| `SetCustomOrderController` | `public void SetCustomOrderController(OrderController, OrderController)` | 换掉两个默认控制器（参数依次是新的主命令控制器、新的玩家命令控制器），并把旧控制器的委托转交给新控制器 |
| `OnOrderIssued` | `public event OnOrderIssuedDelegate OnOrderIssued` | 命令下达时触发 |
| `OnFormationsChanged` | `public event Action<Team, Formation> OnFormationsChanged` | 阵型变化 |
| `OnFormationsChangedInDeployment` | `public event Action<Team> OnFormationsChangedInDeployment` | 部署阶段阵型变化 |
| `OnFormationAIActiveBehaviorChanged` | `public event Action<Formation> OnFormationAIActiveBehaviorChanged` | 阵型 AI 的当前行为切换 |
| `TriggerOnFormationsChanged` | `public void TriggerOnFormationsChanged(Formation formation)` | 手动触发 `OnFormationsChanged` |
| `TriggerOnFormationsChangedInDeployment` | `public void TriggerOnFormationsChangedInDeployment()` | 手动触发 `OnFormationsChangedInDeployment` |
| `OnOrderIssuedDelegate` | `public delegate void OnOrderIssuedDelegate(OrderType orderType, MBReadOnlyList<Formation> appliedFormations, OrderController orderController, params object[] delegateParams)` | 委托签名，定义在 `TaleWorlds.MountAndBlade/OnOrderIssuedDelegate.cs` |
| `AssignPlayerAsSergeantOfFormation` | `public void AssignPlayerAsSergeantOfFormation(MissionPeer peer, FormationClass formationClass)` | 把玩家指定为某阵型的军士长 |

### 敌我关系

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `IsEnemyOf` | `public bool IsEnemyOf(Team otherTeam)` | 转发 `MBTeam.IsEnemyOf` |
| `IsFriendOf` | `public bool IsFriendOf(Team otherTeam)` | `this == otherTeam || !MBTeam.IsEnemyOf(otherTeam)`。**自己对自己恒为 true** |
| `SetIsEnemyOf` | `public void SetIsEnemyOf(Team otherTeam, bool)` | 写原生结构；服务端或录制态下额外广播 `TeamSetIsEnemyOf` 网络消息 |
| `HasAnyEnemyTeamsWithAgents` | `public bool HasAnyEnemyTeamsWithAgents(bool)` | 是否还有敌人活着。布尔参数为真时只看无坐骑的 |
| `GetAveragePositionOfEnemies` | `public Vec2 GetAveragePositionOfEnemies()` | 全部敌方 Agent 的位置均值，空时返回 `Vec2.Invalid` |
| `GetWeightedAverageOfEnemies` | `public Vec2 GetWeightedAverageOfEnemies(Vec2 basePoint)` | 按到 `basePoint` 距离平方倒数加权的敌方中心，空时返回 `Vec2.Invalid` |
| `CachedEnemyDataForFleeing` | `public MBReadOnlyList<ValueTuple<float, WorldPosition, int, Vec2, Vec2, bool>> CachedEnemyDataForFleeing` | 逃跑 AI 用的敌方数据缓存。**`Tick` 每帧清空，靠 `UpdateCachedEnemyDataForFleeing` 重填** |
| `UpdateCachedEnemyDataForFleeing` | `public void UpdateCachedEnemyDataForFleeing()` | 只在缓存为空时填充。敌人按阵型聚合，单人阵型起止点相同 |

### 位置与自身统计

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GetAveragePosition` | `public Vec2 GetAveragePosition()` | 本队 `ActiveAgents` 位置均值，空时返回 `Vec2.Invalid` |
| `GetMedianPosition` | `public WorldPosition GetMedianPosition(Vec2 averagePosition)` | 离给定参考点最近的 Agent 的世界坐标，无人时返回 `WorldPosition.Invalid` |
| `MoraleChangeFactor` | `public float MoraleChangeFactor { get; private set; }` | 士气变化系数。构造函数末尾置 1f，**没有公开的写入口** |
| `IsPlayerGeneral` / `IsPlayerSergeant` | 各自 `public bool { get; private set; }` | 玩家的将/士角色标记 |
| `SetPlayerRole` | `public void SetPlayerRole(bool, bool)` | 同时改将军与军士两个标记，并按「是否玩家队且是否玩家将军」重刷各阵型的 AI 控制状态 |
| `HasTeamAi` | `public bool HasTeamAi` | `TeamAI != null` |

### 队伍 AI 与战术

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `TeamAI` | `public TeamAIComponent TeamAI { get; private set; }` | 队伍 AI 组件。未加时为 null |
| `AddTeamAI` | `public void AddTeamAI(TeamAIComponent, bool)` | 装上队伍 AI：初始化 detachments、建任务专属行为、重置战术，并对每个有兵的阵型 tick 一次。第二个参数为真时强制不受 AI 控制 |
| `DelegateCommandToAI` | `public void DelegateCommandToAI()` | 把 `FormationsIncludingEmpty` 里所有阵型交给 AI |
| `AddTacticOption` | `public void AddTacticOption(TacticComponent tacticOption)` | 加一条可用战术。`HasTeamAi` 为假时静默跳过 |
| `RemoveTacticOption` | `public void RemoveTacticOption(Type tacticType)` | 按类型移除。同样有 `HasTeamAi` 守卫 |
| `ClearTacticOptions` | `public void ClearTacticOptions()` | 清空战术。同样有守卫 |
| `ResetTactic` | `public void ResetTactic()` | 重置为默认战术。同样有守卫 |
| `QuerySystem` | `public TeamQuerySystem QuerySystem { get; private set; }` | 队伍级查询系统。回放模式下为 null |
| `DetachmentManager` | `public DetachmentManager DetachmentManager { get; private set; }` | 分遣队管理器。回放模式下为 null |
| `DisableDetachmentTicking` | `public void DisableDetachmentTicking()` | 关掉分遣队 tick。**不可逆**（私有标志置 false，没有再打开的公开方法） |
| `RearrangeFormationsAccordingToFilter` | `public void RearrangeFormationsAccordingToFilter(List<ValueTuple<Formation, int, TroopTraitsMask, List<Agent>>> MassTransferData)` | 按「源阵型 / 人数 / 特质掩码 / 要转移的 Agent」批量重排阵型 |

### 阵型分类的静态工具

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `DoesFirstFormationClassContainSecond` | `public static bool DoesFirstFormationClassContainSecond(FormationClass f1, FormationClass f2)` | `(f1 & f2) == f2`。**`FormationClass` 不是 Flags 枚举，结果是巧合** |
| `GetFormationFormationClass` | `public static FormationClass GetFormationFormationClass(Formation f)` | 由阵型的 `QuerySystem` 判定：骑射 → `HorseArcher`，骑兵 → `Cavalry`，非远程 → `Infantry`，其余 `Ranged` |
| `GetPlayerTeamFormationClass` | `public static FormationClass GetPlayerTeamFormationClass(Agent mainAgent)` | 由玩家的坐骑与远程缓存判定，优先级与上一条不同 |

### 生命周期

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Team(...)` | `public Team(MBTeam mbTeam, BattleSideEnum side, Mission mission, uint color = 4294967295U, uint color2 = 4294967295U, Banner banner = null)` | 唯一公开构造函数。`mbTeam` 的构造是 internal，mod 拿不出合法值 |
| `Tick` | `public void Tick(float dt)` | 队伍每帧推进。由引擎调用，mod 不要手动调 |
| `Reset` | `public void Reset()` | 重置阵型、清掉索引 2 及以后的 OrderController、重建 `QuerySystem`、清空两个 Agent 列表 |
| `Clear` | `public void Clear()` | 先退订各阵型 AI 的行为变化事件，再调 `Reset()` |
| `OnMissionEnded` | `public void OnMissionEnded()` | 转发给 `TeamAI`（有守卫） |
| `ToString` | `public override string ToString()` | 直接转发 `MBTeam.ToString()` |

## 怎么用

### 怎么拿到它

`Team` 是 `TaleWorlds.MountAndBlade/Team.cs:14` 的 `public class Team : IMissionTeam`，1121 行、79 个公开成员——**但它实际上派生不出来**：文件里 `virtual`、`abstract`、`protected` 的出现次数是 **0**，没有任何可覆盖的成员。

它的实例**不是你自己 new 的**。唯一的公开构造器被 `Mission` 调用（`Mission` 持有每个参战方的 `Team`），以及 `public static Team Invalid`（`:818`）这个哨兵。

**`Invalid` 值得单独说**：它的 getter（`:819-829`）懒构造 `new Team(MBTeam.InvalidTeam, BattleSideEnum.None, null, uint.MaxValue, uint.MaxValue, null)` 并缓存到 `_invalid`，**而构造器因为 `this != Team._invalid` 的判断跳过了 `Initialize()`**。所以这个哨兵实例**大部分成员是 null**——`FormationsIncludingEmpty`（`:47`）、`FormationsIncludingSpecialAndEmpty`（`:52`）、`TeamAI`（`:57`）都没建。

判别方法只有 `public bool IsValid`（`:837`），getter 是 `return this.MBTeam.IsValid;`（`:839`）。

读取入口：`Side`（`:38`，只有 getter）、`Mission`（`:42`）、`IsPlayerTeam`（`:61`）、`IsPlayerAlly`（`:71`）。

四个事件：`OnFormationsChanged`（`:19`）、`OnOrderIssued`（`:24`）、`OnFormationAIActiveBehaviorChanged`（`:29`）、`OnFormationsChangedInDeployment`（`:34`）。

### 典型用法

```csharp
using TaleWorlds.MountAndBlade;

// 拿当前队伍：先判 IsValid，因为 Invalid 哨兵的成员大多是 null（Team.cs:837）
Team.TeamCollection teams = Mission.Current.Teams;       // Mission.cs:1615，{ get; private set; }
Team t = teams[BattleSideEnum.Attacker];
if (t == null || !t.IsValid) { return; }

BattleSideEnum side = t.Side;                         // :38
Mission mission = t.Mission;                          // :42
bool isPlayer = t.IsPlayerTeam;                       // :61

// 十个阵型槽位；FormationsIncludingSpecialAndEmpty 是完整的十个
MBList<Formation> all = t.FormationsIncludingSpecialAndEmpty;   // :52
MBList<Formation> real = t.FormationsIncludingEmpty;            // :47，只有前八个（去掉 General 与 Bodyguard）
Formation infantry = t.GetFormation(FormationClass.Infantry);   // :696，按阵型类取

// 监听阵型变化（Action<Team, Formation>，注意退订要传同一个委托实例）
System.Action<Team, Formation> handler = OnFormationsChanged;
t.OnFormationsChanged += handler;                      // :19，声明是 Action<Team, Formation>
t.OnFormationsChanged -= handler;                      // :19，同一实例才能退订
```

### 最容易踩的坑

**不判 `IsValid` 就读 `FormationsIncludingSpecialAndEmpty`。** 因为 `Team.Invalid`（`:818`）跳过了 `private void Initialize()`（`:293`），而 `Initialize()` 正是建 `FormationsIncludingSpecialAndEmpty = new MBList<Formation>(10)`（`:300`）和其余子系统的地方。**十个 `Formation` 槽位建在 `Initialize()` 里，不在构造器里**——所以哨兵队伍上这些属性全是 null，第一句 `all.Count` 就是空引用，而报错完全看不出「你拿到的是哨兵」。

第二个坑是**回放模式下同样的问题发生在正常队伍上**。`Initialize()`（`:293`）、`Reset()`（`:328`）、`Clear()`（`:352`）里都有 `if (!GameNetwork.IsReplay)` 的整段跳过（`:298`、`:330`、`:354`）。所以 `GameNetwork.IsReplay` 为真时构造出来的队伍，`QuerySystem`、`DetachmentManager`、两个 `OrderController` 都不存在——**`IsValid` 返回 true 但成员仍然是 null**。排查回放崩溃时不能只看 `IsValid`。

第三，`Team` 的 `virtual` / `abstract` / `protected` 出现次数是 **0**。**不要试图派生它来做行为定制**——编译期能过（因为成员不是 sealed 的），但你覆写不了任何东西；想在战斗里改变队伍行为，正确位置是 `MissionBehavior` 或 `Formation`。

## 真实示例

战斗过程中统计某一方四个常规阵型的人数。挂 `MissionBehavior`，用 `OnAgentRemoved` 与 `OnAgentTeamChanged` 增量更新，不要在 `OnMissionTick` 里每帧全量遍历：

```csharp
public class FormationBalanceReport : MissionBehavior
{
    public override MissionBehaviorType BehaviorType
    {
        get { return MissionBehaviorType.Other; }
    }

    public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)
    {
        Report(newTeam);
    }

    private void Report(Team team)
    {
        if (team == null || !team.IsValid || team.Mission == null)
        {
            return;
        }

        MBList<Formation> formations = team.FormationsIncludingEmpty;
        for (int i = 0; i < formations.Count; i++)
        {
            Formation formation = formations[i];
            if (formation != null && formation.CountOfUnits > 0)
            {
                Debug.Print(team.TeamIndex + " " + formation.FormationClass
                    + " units=" + formation.CountOfUnits
                    + " ai=" + formation.IsAIControlled, 0);
            }
        }
    }
}
```

判定敌我并取中心点。四个位置查询都要判哨兵值，`IsFriendOf` 对自己返回 true：

```csharp
Team playerTeam = Mission.Current.PlayerTeam;
Team enemyTeam = Mission.Current.PlayerEnemyTeam;

if (playerTeam != null && enemyTeam != null && playerTeam.IsEnemyOf(enemyTeam))
{
    Vec2 center = enemyTeam.GetAveragePositionOfEnemies();
    if (center != Vec2.Invalid)
    {
        Debug.Print("enemy center " + center
            + " side=" + enemyTeam.Side
            + " teamSide=" + enemyTeam.TeamSide
            + " formations=" + enemyTeam.GetFormationCount(), 0);
    }

    bool stillFighting = playerTeam.HasAnyEnemyTeamsWithAgents(true);
    Debug.Print("cavalry-less enemies left: " + stillFighting, 0);
}
```

按 `FormationClass` 取阵型时避开越界值。`Unset` 与 `NumberOfAllFormations` 的数值都是 10，而 `FormationsIncludingSpecialAndEmpty` 只有十项：

```csharp
Team team = Mission.Current.AttackerTeam;
if (team == null)
{
    return;
}

FormationClass wanted = FormationClass.Cavalry;
Formation cavalry = team.GetFormation(wanted);
if (cavalry != null && cavalry.CountOfUnits > 0)
{
    WorldPosition anchor = cavalry.CachedMedianPosition;
    if (!anchor.IsValid)
    {
        Debug.Print("cavalry anchor invalid", 0);
    }
}
```

## 风险与边界

- **不是 sealed，但派生不出来**：`Team.cs` 里 `virtual` / `abstract` / `protected` 出现次数为 0，没有可覆盖点；唯一公开构造函数要求 `MBTeam`，而它的构造函数是 `internal`。这是本批次五个类型里唯一一个「签名上可继承、实际上不可继承」的。
- **`Team.Invalid` 的成员大多是 null**：哨兵实例靠 `if (this != Team._invalid)` 跳过了 `Initialize()`，`FormationsIncludingSpecialAndEmpty`、`QuerySystem`、`DetachmentManager` 都没建。读之前必须 `IsValid`。
- **`GetFormation` 是裸索引**：`FormationsIncludingSpecialAndEmpty[(int)formationIndex]`，没有边界检查。`FormationClass.Unset` 与 `NumberOfAllFormations` 数值都是 10，**越界抛异常**。
- **`DoesFirstFormationClassContainSecond` 不可信**：它在非 Flags 的 `FormationClass` 上做位与，`(Unset, General)` 会返回 true。
- **`TeamSide` 依赖 `Mission`**：`Mission` 为 null 时 `IsPlayerTeam` 与 `IsPlayerAlly` 都为假，`TeamSide` 退化成 `EnemyTeam`——离场对象会被误判成敌人。
- **回放模式下大半成员是 null**：`Initialize()` / `Reset()` / `Clear()` 整段被 `if (!GameNetwork.IsReplay)` 跳过。
- **`CachedEnemyDataForFleeing` 每帧被清空**：`Tick` 开头就 `Clear()`，必须显式调 `UpdateCachedEnemyDataForFleeing()` 才有内容；该方法自己又用 `IsEmpty` 挡重复填充。
- **位置查询返回哨兵值而非异常**：`Vec2.Invalid` 与 `WorldPosition.Invalid` 都要显式判。
- **`IsFriendOf` 对自己为真**：`this == otherTeam` 是短路在最前面的。
- **友军关系是网络同步的**：`SetIsEnemyOf` 在服务端或录制态会广播 `TeamSetIsEnemyOf`，本地单方面改会被下一次同步覆盖。
- **`DeactivateAgent` 只动一半**：只从 `ActiveAgents` 移除，`TeamAgents` 保留。想彻底移除用 `RemoveAgentFromTeam`。
- **`DisableDetachmentTicking` 不可逆**：置的是私有标志，没有公开的恢复方法。
- **`MoraleChangeFactor` 没有公开写入口**：构造函数置 1f 后只有 getter。
- **不要手动调 `Tick(float dt)`**：那是引擎每帧推进队伍的入口，手动调会与主循环重复推进。
- **`GeneralsFormation` / `BodyGuardFormation` / `GeneralAgent` 可写**：但写错会让「将军阵」与实际阵型槽脱节，`GetFormationCount` 一类统计不会因此修正。

## 依赖关系

- 战斗根：[Mission](../../mission/Mission) —— `Mission` 成员、玩家队与各具名队伍的来源，`TeamSide` / `IsPlayerTeam` 都要读它。
- 阵型：[Formation](../../mission/Formation) —— `FormationsIncludingEmpty` 与 `FormationsIncludingSpecialAndEmpty` 的元素类型。
- 成员：[Agent](../../mission/Agent) —— `TeamAgents` / `ActiveAgents` / `Leader` / `GeneralAgent` 的元素类型。
- 扩展挂载：[MissionBehavior](../../mission/MissionBehavior) —— 战斗内逻辑的挂载点。
- 原生绑定：`MBTeam`（`TaleWorlds.MountAndBlade/MBTeam.cs`）、`BattleSideEnum`、`TeamSideEnum`、`FormationClass`（均属 `TaleWorlds.Core`，尚未撰写页，现为纯文本）。
- 队友与命令：`TeamQuerySystem` · `DetachmentManager` · `OrderController` · `TeamAIComponent` · `TacticComponent` · `TroopTraitsMask`（同桶内类型，尚未撰写页）。
- 桶导览：[mission-ext 桶导览](../) · 架构：[模块地图](../../../architecture/module-map)

## 导航

- 同桶：[`../OrderController`](../OrderController) · [`../MissionObject`](../MissionObject) · [`../ArrangementOrder`](../ArrangementOrder)
- 父索引：[`../_index`](../_index)
