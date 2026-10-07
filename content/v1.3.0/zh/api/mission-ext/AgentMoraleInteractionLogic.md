---
title: "AgentMoraleInteractionLogic"
description: "友军伤亡/恐慌的士气扩散逻辑：BattleMoraleModel 算幅度、这里选人（4 米内最多 10 人，不足则回落到编队抽样），再把 ChangeMorale 落到每个人身上。"
---

# AgentMoraleInteractionLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentMoraleInteractionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AgentMoraleInteractionLogic.cs`（全文 211 行）

## 概述

`AgentMoraleInteractionLogic` 回答一个具体问题：**「我方/敌方掉了一个人（或有人崩溃）之后，周围的人士气怎么变」**。全文 211 行，2 个 public 覆写、3 个 private 辅助方法、8 个 private 常量/字段。

它的核心结构是**三层委派**：

1. [BattleMoraleModel](../BattleMoraleModel) 算「掉一个人最多掉多少士气、击杀方最多涨多少」（`CalculateMaxMoraleChangeDueToAgentIncapacitated` / `CalculateMaxMoraleChangeDueToAgentPanicked`）。
2. **本类选人**——决定**谁**受影响。
3. [BattleMoraleModel](../BattleMoraleModel) 再把「最大幅度」折算成具体人的实际增减（`CalculateMoraleChangeToCharacter`），本类把结果交给 `agent.ChangeMorale(delta)`（[AgentComponentExtensions](../AgentComponentExtensions) 的扩展方法）。

所以本类**不含任何士气数值公式**，它是一个「受影响者集合的求解器」。

## 心智模型

把它当成**「一次伤亡事件 → 一次有限扇形扩散」**的调度器。心智模型分四块。

**第一块：两个触发点，一个减一个加。**

- `OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`（`:19`）——**减士气 + 击杀方涨士气**。三重前置守卫：`affectedAgent == null || !affectedAgent.IsHuman || (agentState != AgentState.Killed && agentState != AgentState.Unconscious)` 任一成立就直接 `return`。
- `OnAgentFleeing(Agent affectedAgent)`（`:39`）——**只减士气，不涨**。守卫是 `affectedAgent == null || !affectedAgent.IsHuman`。派发时传 `affectorAgent = null`。

两者都在拿到 `[BattleMoraleModel](../BattleMoraleModel)` 的 `ValueTuple<float, float>` 后判 `if (item > 0f || item2 > 0f)` 才继续——**幅度全为 0 时什么也不做**。`OnAgentFleeing` 之后还有 70% 概率喊一声 `SkinVoiceManager.VoiceType.Debacle`（常量 `DebacleVoiceChance = 0.7f`）。

**第二块：选人规则有明确的优先级和回落链，这是本类的实质。** `ApplyMoraleEffectOnAgentIncapacitated`（`:59`）的顺序是：

对**减士气一方**（`_agentsToReceiveMoraleLoss`，上限 10）：
1. `Mission.GetNearbyAgents(affectedPos, 4f, cache)` —— 半径 4 米（常量 `MoraleEffectRadius = 4f`）。
2. `SelectRandomAgentsFromListToAgentSet(nearby, loss, 10, AffectedsAllyCondition)` —— **随机**挑选，不是全部。
3. 不足 10 人时回落到编队：`SelectRandomAgentsFromFormationToAgentSet(affectedAgent.Formation, loss, 10, FormationCondition)`。

对**涨士气一方**（`_agentsToReceiveMoraleGain`，上限 10）：
1. 如果 `affectorAgent` 本身满足五个条件（`IsActive()` / `IsHuman` / `IsAIControlled` / `IsEnemyOf(affectedAgent)`，且非 null），**先把它自己加进去**。
2. 不足 10 人时从**同一个 nearby 缓存**里挑敌人（`AffectedsEnemyCondition`）。
3. 仍不足 10 且 affector 非 null 且与 affected 距离平方 > `2.25f`（常量 `SquaredDistanceForSeparateAffectorQuery = 2.25f`，即 1.5 米）时，`Mission.GetNearbyAllyAgents(affectorPos, 4f, affectedAgent.Team, allyCache)` 再挑一遍（`AffectorsAllyCondition`）。
4. 仍不足 10 且 affector 有编队时，最后回落编队抽样（`FormationCondition`）。

**这段回落链是本页最需要记住的**：附近的人不够 → 抽样自己所在编队 → 所以**大军团里一个人倒下，整个编队都会受影响**。

**第三块：两个集合都是 `HashSet<Agent>`，而且是字段级的复用缓存。** `_agentsToReceiveMoraleGain` / `_agentsToReceiveMoraleLoss` 都是 `private readonly HashSet<Agent>`，每次 `ApplyMoraleEffectOnAgentIncapacitated` 开头 `Clear()` 一次。`HashSet` 的去重语义在这里是刚需——同一个人可能同时被「附近」和「编队」两条路径命中，只算一次。抽样器 `_randomAgentSelector` / `_randomFormationUnitSelector` 是 `MBFastRandomSelector<T>`（`TaleWorlds.Core`），容量常量 `RandomSelectorCapacity = 1024`。

**第四块：加减是对称的两段 `foreach`，且加法在后。**

```csharp
foreach (Agent agent in this._agentsToReceiveMoraleLoss)
{
    float delta = -MissionGameModels.Current.BattleMoraleModel.CalculateMoraleChangeToCharacter(agent, affectedSideMaxMoraleLoss);
    agent.ChangeMorale(delta);
}
foreach (Agent agent2 in this._agentsToReceiveMoraleGain)
{
    float delta2 = MissionGameModels.Current.BattleMoraleModel.CalculateMoraleChangeToCharacter(agent2, affectorSideMoraleMaxGain);
    agent2.ChangeMorale(delta2);
}
```

注意减法那段的 `delta` 前面有个**负号**。`ChangeMorale` 是 [AgentComponentExtensions](../AgentComponentExtensions) 的一档方法（会判 `CommonAIComponent != null`），所以**没有 `CommonAIComponent` 的单位会静默漏掉**。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AgentMoraleInteractionLogic()` | `public AgentMoraleInteractionLogic()` | 唯一构造器。函数体只有两句 `this._nearbyAgentsCache = new MBList<Agent>(); this._nearbyAllyAgentsCache = new MBList<Agent>();`。这两个缓存字段是 `readonly` 但**没有初始化器**，所以必须靠这个构造器赋初值——`new` 之后它们才是可用的 `MBList`。 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 伤亡触发的双向往返。先三重守卫（含 `agentState` 必须是 `Killed` 或 `Unconscious`），然后调 `BattleMoraleModel.CalculateMaxMoraleChangeDueToAgentIncapacitated(affectedAgent, agentState, affectorAgent, killingBlow)` 拿 `(loss, gain)`。**还会把马匹的攻击者归到骑手**：`affectorAgent = (affectorAgent.IsHuman ? affectorAgent : (affectorAgent.IsMount ? affectorAgent.RiderAgent : null));`。幅度非零时调 `ApplyMoraleEffectOnAgentIncapacitated(affectedAgent, affectorAgent, loss, gain, 4f)`。 |
| `OnAgentFleeing` | `public override void OnAgentFleeing(Agent affectedAgent)` | 恐慌触发的单向减士气。守卫只要 `affectedAgent == null || !affectedAgent.IsHuman`。用 `CalculateMaxMoraleChangeDueToAgentPanicked(affectedAgent)` 拿幅度，调同一个 `ApplyMoraleEffectOnAgentIncapacitated(affectedAgent, null, loss, gain, 4f)`——**affector 传 null，所以没有涨士气那一半**。最后 70% 概率 `MakeVoice(SkinVoiceManager.VoiceType.Debacle, ...)`。 |
| `ApplyMoraleEffectOnAgentIncapacitated` | `private void ApplyMoraleEffectOnAgentIncapacitated(Agent affectedAgent, Agent affectorAgent, float affectedSideMaxMoraleLoss, float affectorSideMoraleMaxGain, float effectRadius)` | **私有核心**，上面的选人优先级与回落链全在这里。外层还有一个 `if (affectedAgent != null && affectedAgent.IsHuman)` 的总守卫。末尾两段 `foreach` 落 `ChangeMorale`。`effectRadius` 由两个调用点都传 `4f`（与常量同值，但不引用常量）。 |
| `SelectRandomAgentsFromListToAgentSet` | `private void SelectRandomAgentsFromListToAgentSet(MBReadOnlyList<Agent> agentsList, HashSet<Agent> outputAgentsSet, int maxCountInSet, Predicate<Agent> conditions = null)` | 从一个列表里**随机**取最多 `maxCountInSet` 个满足 `conditions` 的元素放进 `HashSet`。用 `MBFastRandomSelector` 的 `SelectRandom(out item, conditions)` 循环直到集合满或抽干。`outputAgentsSet != null && agentsList != null` 双判空。 |
| `SelectRandomAgentsFromFormationToAgentSet` | `private void SelectRandomAgentsFromFormationToAgentSet(Formation formation, HashSet<Agent> outputAgentsSet, int maxCountInSet, Predicate<IFormationUnit> conditions = null)` | 回落抽样。三守卫：`outputAgentsSet != null && formation != null && formation.CountOfUnits > 0`。然后按 `CountOfDetachedUnits / CountOfUnits * 剩余名额` 决定要抽多少游离单位；不够则遍历 `formation.Arrangement.GetAllUnits()` 继续抽。`as Agent` 转型失败（单位不是 Agent）的会被跳过。 |

### 常量与字段（全部 private）

| 成员 | 值 | 用途 |
| --- | --- | --- |
| `DebacleVoiceChance` | `0.7f` | `OnAgentFleeing` 里喊话的概率 |
| `MoraleEffectRadius` | `4f` | 选人半径（但两个调用点是硬编码传 `4f`，没引用这个常量） |
| `MaxNumAgentsToGainMorale` | `10` | 涨士气人数上限（同样未被引用） |
| `MaxNumAgentsToLoseMorale` | `10` | 减士气人数上限（同样未被引用） |
| `SquaredDistanceForSeparateAffectorQuery` | `2.25f` | affector 与 affected 距离平方超过它才做第二次盟友范围查询 |
| `RandomSelectorCapacity` | `1024` | 两个 `MBFastRandomSelector` 的容量 |
| `_agentsToReceiveMoraleGain` / `_agentsToReceiveMoraleLoss` | `readonly HashSet<Agent>` | 本次事件的两个目标集合，每次调用前 `Clear()` |
| `_randomAgentSelector` / `_randomFormationUnitSelector` | `readonly MBFastRandomSelector<...>(1024)` | 两个随机抽样器 |
| `_nearbyAgentsCache` / `_nearbyAllyAgentsCache` | `readonly MBList<Agent>` | 两个范围查询的结果缓存，在构造器里赋初值 |

## 真实示例

挂上这个逻辑——它继承 [MissionLogic](../MissionLogic)，`BehaviorType` 恒为 `MissionBehaviorType.Logic`，用 `AddMissionBehavior` 加进任务：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic;

public class MoraleSetupBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType
    {
        get { return MissionBehaviorType.Other; }
    }

    public override void AfterStart()
    {
        base.AfterStart();
        this.Mission.AddMissionBehavior(new AgentMoraleInteractionLogic());
    }
}
```

观察一次伤亡的完整结果——注意 `ChangeMorale` 的目标可能是 10 个人而不是全部：

```csharp
using TaleWorlds.MountAndBlade;

public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
{
    base.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
    if (affectedAgent == null || !affectedAgent.IsHuman)
    {
        return;
    }
    Debug.Print("down: " + affectedAgent.Name + " by " + affectorAgent.Name, 0);
}
```

想改「掉一个人最多掉多少士气」，覆写 [BattleMoraleModel](../BattleMoraleModel) 而不是这个类——本类的三个常量全是 `private`，没有任何可配置的旋钮。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class GentleMoraleModel : MBGameModel<BattleMoraleModel>
{
    public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentIncapacitated(
        Agent affectedAgent, AgentState agentState, Agent affectorAgent, KillingBlow killingBlow)
    {
        ValueTuple<float, float> vanilla = this.BaseModel.CalculateMaxMoraleChangeDueToAgentIncapacitated(
            affectedAgent, agentState, affectorAgent, killingBlow);
        return new ValueTuple<float, float>(vanilla.Item1 * 0.5f, vanilla.Item2 * 0.5f);
    }
}
```

`BattleMoraleModel` 的这个方法是 `abstract` 的（否则官方三个实现不会都写 override），所以签名以官方派生类为准。

## 风险与边界

- **本类不含任何数值公式，全在 [BattleMoraleModel](../BattleMoraleModel)。** 想改幅度覆写模型，别动这里。
- **所有配置项都是 `private const`，没有公开旋钮。** 4 米、10 人、0.7 概率、2.25 距离全部硬编码且**未被引用为常量**（调用点传的是字面量 `4f` 和 `10`）。想改只能打补丁或整段重写。
- **`OnAgentRemoved` 只认 `AgentState.Killed` 和 `AgentState.Unconscious`。** `AgentState.None`（假死、未定）不触发。这个状态判定本身由 `Mission.GetAgentState` 决定（见 [AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel)）。
- **`OnAgentFleeing` 只减不涨。** 它传 `affectorAgent = null` 给私有核心，所以 `if (affectorAgent != null && ...)` 那一整块都不会进。
- **减士气不是「全部附近的人」。** 是**随机**最多 10 个。所以同样的战况两次结果可能不同——这是设计（`MBFastRandomSelector` 的存在本身就是为了避免全量遍历的成本）。
- **不足 10 人时回落到编队抽样。** 这意味着**大军团里一个人倒下，整个编队可能受影响**。这是本类最容易被误判的行为：看到「远处编队也在掉士气」时不是 bug。
- **`ChangeMorale` 会静默漏掉没有 `CommonAIComponent` 的单位。** [AgentComponentExtensions](../AgentComponentExtensions) 的一档方法会判 `CommonAIComponent != null`。所以**你的逻辑没被挂上时，这里表现为「士气完全不动」而不是报错**。
- **`ChangeMorale` 在遍历 `HashSet` 时执行。** 如果某个 `ChangeMorale` 的副作用反过来导致本逻辑再次触发（例如某个 `OnAgentRemoved` 链），本方法的两个集合已经 `Clear()` 过、正在被遍历，会得到不一致的结果。**不要从 `ChangeMorale` 的下游回调里重入本逻辑。**
- **两个缓存 `MBList` 靠构造器赋初值。** 字段是 `readonly` 且无初始化器，所以不能用对象初始化器或字段初始化；只有 `new AgentMoraleInteractionLogic()` 这条路能拿到非 null。
- **`SelectRandomAgentsFromFormationToAgentSet` 的 `as Agent` 会静默跳过非 Agent 单位。** 编队里若有非 Agent 的 `IFormationUnit`，它会被抽中后丢弃，名额被浪费。
- **命名空间是 `TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic`**，不是 `TaleWorlds.MountAndBlade`。这是一层 `Source` 子命名空间，需要 `using TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic;`。
- **私有辅助方法全部是 `private`。** 拆掉选人逻辑自己重写是唯一出路。

## 怎么用

### 怎么拿到它

**你 `new` 它，然后用 `Mission.AddMissionBehavior` 挂上去。** 构造器是 `public AgentMoraleInteractionLogic()`（`bannerlord-1.3.0/TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AgentMoraleInteractionLogic.cs:12`），函数体只有两句 `this._nearbyAgentsCache = new MBList<Agent>(); this._nearbyAllyAgentsCache = new MBList<Agent>();`（`:14-15`）——这两个字段是 `readonly` 且**没有字段初始化器**，所以构造器是它们唯一的赋初值途径。

挂载入口是 `Mission.AddMissionBehavior(MissionBehavior missionBehavior)`（`Mission.cs:4306`），它做四件事：把 behavior 塞进 `MissionBehaviors`（`:4308`）、**回填 `missionBehavior.Mission = this`**（`:4309`）、按 `BehaviorType` 分流（`:4310-4321`）、最后调 `OnCreated()`（`:4322`）。本类的 `BehaviorType` 来自基类 `MissionLogic` 的 `override`（`MissionLogic.cs:13-19`），恒为 `MissionBehaviorType.Logic`，所以它会落进 `this.MissionLogics` 那个分支（`Mission.cs:4320`）。

官方挂载点是 `BannerlordMissions.cs:159` 与 `:232`（以及 `SandBoxMissions.cs` 里的六处）——都是把 `new AgentMoraleInteractionLogic()` 直接塞进一个 `MissionBehavior[]` 数组，让整个任务一起创建。**你不需要自己写 `MissionBehavior` 外壳**：直接 `AddMissionBehavior` 一个新实例即可。

### 典型用法

挂上它，然后把「谁会被这次伤亡影响到」复现一份出来。这一步不是多余的：两个目标集合 `_agentsToReceiveMoraleLoss`（`:197`）与 `_agentsToReceiveMoraleGain`（`:194`）都是 `private HashSet<Agent>`，引擎不会回传给你，而 `OnAgentRemoved` 是在派发遍历里**同步结算完**的。

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public static class MoraleAudienceProbe
{
    public static void Attach(Mission mission)
    {
        // 构造器必须走，因为两个 MBList 缓存字段是 readonly 且无初始化器
        mission.AddMissionBehavior(new
            TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic.AgentMoraleInteractionLogic());
    }

    public static MBList<Agent> RecomputeAffected(Agent affectedAgent, out int cap)
    {
        MBList<Agent> nearby = new MBList<Agent>();

        // Mission.GetNearbyAgents(Vec2, float, MBList<Agent>)（Mission.cs:6614）
        // 注意它第一件事就是把你传进去的 list Clear 掉（Mission.cs:6616），所以别复用共享缓存
        Mission.Current.GetNearbyAgents(
            affectedAgent.GetWorldPosition().AsVec2,
            4f,
            nearby);

        // 4f 与 10 都是源码里的字面量：常量 MoraleEffectRadius / MaxNumAgentsToLoseMorale
        // 被声明了但源码从未引用它们，所以没有公开旋钮可以改这两个数
        cap = 10;
        return nearby;
    }
}
```

### 最容易踩的坑

**`OnAgentRemoved` 与 `OnAgentFleeing` 的派发顺序是相反的，所以「结算后处理」在这两条路径上不会看到同一份数据。** `Mission.OnAgentRemoved` 用正向 `foreach` 遍历 `MissionBehaviors` 派发（`Mission.cs:2582-2585`），而 `Mission.OnAgentFleeing` 是 `for (int i = this.MissionBehaviors.Count - 1; i >= 0; i--)` 倒序派发（`Mission.cs:6746-6749`）。后果：你用 `AddMissionBehavior` 把自己的 behavior 挂在这串的**末尾**（最常见的写法），那么在伤亡回调里它排在 `AgentMoraleInteractionLogic` **之后**跑、看到的是已被改过的士气；在恐慌回调里它却排在**之前**跑、看到的是改之前的士气。同一个 `PostProcessMorale()` 方法写在两条回调里，会得到不对称的结果，而你在读代码时完全看不出这个不对称。**唯一可靠的读法是在挂载顺序上做选择——把它放在末尾以保证伤亡路径上读到结算后的值，并明确接受恐慌路径读不到。**

## 跨版本提示

`AgentMoraleInteractionLogic` 的 211 行在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 里一致：两个 public 覆写、三个 private 方法、六个 `private const`、七个 `readonly` 字段，全部没变。

变化点全在 [BattleMoraleModel](../BattleMoraleModel) 上——它的抽象成员在这几个版本里增加过（联机、攻城专用模型），所以覆写它时**新版本会给你更多抽象方法要实现**。但本类的三个调用点（`CalculateMaxMoraleChangeDueToAgentIncapacitated` / `CalculateMaxMoraleChangeDueToAgentPanicked` / `CalculateMoraleChangeToCharacter`）签名是稳定的。

另外一个纯实践的跨版本点：`MBFastRandomSelector<T>` 在 `TaleWorlds.Core`，1.5.x 里它的 API 有小幅扩展。**本类不导出这个类型到自己的公共签名上**（只在 private 字段与 private 参数里出现），所以你不会因为它而编译失败。

结论：**这个类是稳定的运行时行为节点。想改行为请覆写模型，不要继承它。**

## 依赖关系

- 基类：[MissionLogic](../MissionLogic)（`BehaviorType` 恒为 `MissionBehaviorType.Logic`）→ [MissionBehavior](../../mission/MissionBehavior) 的 `OnAgentRemoved` 与 `OnAgentFleeing` 两个钩子
- 数值来源：[BattleMoraleModel](../BattleMoraleModel) 三个成员：`CalculateMaxMoraleChangeDueToAgentIncapacitated` / `CalculateMaxMoraleChangeDueToAgentPanicked` / `CalculateMoraleChangeToCharacter`
- 落点：[AgentComponentExtensions](../AgentComponentExtensions) 的 `ChangeMorale(this Agent, float)`，判 `CommonAIComponent != null`
- 范围查询：[Mission](../../mission/Mission) 的 `GetNearbyAgents(Vec2, float, MBList<Agent>)`（`:6614`）与 `GetNearbyAllyAgents(Vec2, float, Team, MBList<Agent>)`（`:6598`）
- 编队回落：[Formation](../../mission/Formation) 的 `CountOfUnits` / `CountOfDetachedUnits` / `DetachedUnits` / `Arrangement.GetAllUnits()`
- 数据类型：`MBFastRandomSelector<T>`、`MBList<T>`、`MBReadOnlyList<T>`（`TaleWorlds.Core` / `TaleWorlds.Library`）、`BasicMissionTimer` 之外的 `SkinVoiceManager.VoiceType`（`TaleWorlds.MountAndBlade`）
- 状态判定上游：[AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel) 决定 `agentState` 是 `Killed` 还是 `Unconscious`，本类据此决定是否触发
- 桶首页：[mission-ext API 分区](../)