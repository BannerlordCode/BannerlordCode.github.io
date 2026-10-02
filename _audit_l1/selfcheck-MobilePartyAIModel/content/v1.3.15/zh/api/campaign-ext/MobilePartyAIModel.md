---
title: "MobilePartyAIModel"
description: "决定地图上每支队伍在思考时该不该攻击、该不该躲避、巡逻与防守半径多大、主动行为选哪个的可替换 AI 判定模型。"
---
# MobilePartyAIModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class MobilePartyAIModel : MBGameModel<MobilePartyAIModel>`  
**基类:** `MBGameModel<MobilePartyAIModel>`  
**源文件:** `C:\WorkSpace\Bannerlord\bannerlord-1.3.15\TaleWorlds.CampaignSystem\ComponentInterfaces\MobilePartyAIModel.cs`  
**默认实现:** `C:\WorkSpace\Bannerlord\bannerlord-1.3.15\TaleWorlds.CampaignSystem\GameComponents\DefaultMobilePartyAIModel.cs`

## 一句话职责

它决定地图上每支队伍在思考时“该不该攻击、该不该躲避、巡逻与防守的半径多大、主动行为选哪个”；它不移动队伍、不改编制，也不直接写行为——只是把判定与半径交给 AI 思考循环去消费。

## 心智模型

这是地图 AI 的“决策规则层”，夹在队伍状态与 AI 思考循环之间。`MobilePartyAi` 与各个 `Ai*Behavior` 在每支队伍按 `AiCheckInterval` 节流的思考 tick 里，先问这个模型“该不该攻击/躲避这队”“巡逻半径是多少”，再用结论去设置 `MobileParty` 的短期/默认行为。模型本身是无状态的查询：它读取 `MobileParty`、`Settlement`、`Campaign` 的当前状态后给出判定或半径，从不修改它们。

计算链是：`MobilePartyAi` 每 tick 调 `ShouldPartyCheckInitiativeBehavior` 判断是否值得评估主动性；若值得，再调 `GetBestInitiativeBehavior` 综合周围敌友队伍算出最佳主动行为、目标、分数与平均敌向向量；与此同时巡逻、防守、逃跑行为分别读取 `GetPatrolRadius`、`SettlementDefending*`、`FleeToNearby*` 这些半径与阈值。半径类属性大多是“天数 × 速度 × 小时数”的系数（巡逻/防守），或是依赖 `EncounterModel` 实时算出的世界距离（逃跑）。

使用这个模型，是为了改变所有 AI 消费者看到的行为判定与半径，而不是为了移动或重组队伍。如果目标是真正改变队伍位置、编制或行为落点，应使用 `MobileParty` 的公开 API、Roster API，或 `MobileParty.Ai` / `SetPartyAiAction`；不要在这些判定回调里写 `Position`、招募单位、传送或转账，那会把一个只读查询变成每次 tick 都重复执行的副作用。自定义实现应保持纯判定、保持确定性，避免与重放的战役 tick 不一致。

### 生命周期与注册

`Campaign.Current.Models` 持有当前实例，属性名即 `MobilePartyAIModel`。游戏通过 `GameModels` 在战役初始化时由 `GetGameModel<MobilePartyAIModel>()` 解析注册；默认实现 `DefaultMobilePartyAIModel` 由启动器在战役系统开始查询前注入。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 为 `null`，不能在静态字段初始化或菜单构造函数里无条件读取它。替换模型时也要在战役初始化阶段完成注册，且应保留 vanilla 实例作为 delegate，避免从已替换的 `Campaign.Current.Models.MobilePartyAIModel` 再取自己造成递归。

## 何时用 / 何时不要用

**何时用：**

- 想调整全地图 AI 的攻击/躲避倾向、巡逻与防守半径、主动行为阈值（例如让商队更胆小、让巡逻队覆盖更广）。
- 在自己的 AI 扩展里只读查询“某队是否应考虑攻击/躲避另一队”，或“某巡逻点对应的世界半径是多少”。

**何时不要用：**

- 不要为了移动队伍或改变编制去改这些返回值/字段。移动用 `MobileParty` 的位置/速度 API，编制用 Roster API，行为落点用 `MobileParty.Ai` / `SetPartyAiAction`。
- 不要在 `ShouldConsiderAttacking`、`ShouldConsiderAvoiding`、`GetBestInitiativeBehavior` 等模型方法里写招募、传送、金币等世界变更副作用——它们是纯判定。
- 不要手动每帧调用 `GetBestInitiativeBehavior`；它已由 AI 思考循环按 `AiCheckInterval` 节流调用，重复调用既冗余又昂贵。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役与 `Models` 注册表，模型经 `Campaign.Current.Models.MobilePartyAIModel` 获取。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供队伍速度、位置、士气、海陆状态、`Army`、默认/短期行为等全部判定输入。 |
| [`Settlement`](../../campaign/Settlement) | 提供巡逻/防守目标定居点类型（匪窝、城堡、村庄）与港口位置。 |
| [`EncounterModel`](../EncounterModel) | 提供 `GetEncounterJoiningRadius`、`NeededMaximumDistanceForEncounteringMobileParty`，半径类属性依赖它计算。 |
| [`MilitaryPowerModel`](../MilitaryPowerModel) | `GetContextForPosition` 在攻城强度估算时被调用。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`AiPartyThinkBehavior`](../AiPartyThinkBehavior) | 主动行为思考主循环，调用 `ShouldPartyCheckInitiativeBehavior` 与 `GetBestInitiativeBehavior`。 |
| [`AiPatrollingBehavior`](../AiPatrollingBehavior) | 巡逻行为，调用 `GetPatrolRadius` 刷新巡逻范围。 |
| [`AiMilitaryBehavior`](../AiMilitaryBehavior) | 军事行为，依赖主动行为判定。 |
| [`AiVisitSettlementBehavior`](../AiVisitSettlementBehavior) | 访问定居点行为，使用 `FleeToNearbySettlementRadius` 搜索。 |
| [`MapEvent`](../../campaign/MapEvent) | 遭遇建立时读取队伍敌我状态，与主动分数计算联动。 |

### Action、事件与存档边界

模型本身不存档、不派发事件，也没有自己的缓存字段。所有半径与判定均为运行时从当前状态算出。合法的队伍行为落点走 `MobileParty.Ai` / `SetPartyAiAction`，编制变更走 Roster API；模型替换必须在战役初始化（`CampaignGameStarter` 注册阶段）完成，不能在战斗/任务运行中热替换，否则会让不同队伍看到的判定规则不一致。自定义实现应在相同输入下保持确定性，避免与重放的战役 tick 冲突。

## 成员契约

### 配置 / 半径类（只读属性）

| 成员 | 默认实现 | 用途 | 调用时机与副作用 |
| --- | --- | --- | --- |
| `AiCheckInterval` | `0.25f` | AI 重新评估的时间间隔（天）。 | `MobilePartyAi` 用它给每支队伍的思考和随机重算节流；不要返回 `0` 或负数，否则会每帧重算或永不重算。 |
| `FleeToNearbyPartyRadius` | 由 `EncounterModel.GetEncounterJoiningRadius × EstimatedMaximumLordPartySpeedExceptPlayer × AiCheckInterval × 1.5` 实时算出 | “逃离邻近敌方队伍”的世界搜索距离。 | 逃跑行为在搜索附近威胁时使用；是依赖 `EncounterModel` 的计算值，不是常量。 |
| `FleeToNearbySettlementRadius` | `FleeToNearbyPartyRadius × 2` | 搜索可逃往邻近定居点的距离。 | 与上一属性成对，用于“逃向定居点”的搜索范围。 |
| `HideoutPatrolDistanceAsDays` | `0.5f` | 巡逻匪窝的半径系数（天数 × 速度 × 小时数）。 | `GetPatrolRadius` 内部用于匪窝目标；返回天数，不是世界单位。 |
| `FortificationPatrolDistanceAsDays` | `0.3f`（v1.3.15）／`0.5f`（v1.4.5） | 巡逻城堡/防御点的半径系数（天数）。 | `GetPatrolRadius` 内部用于 `IsFortification` 目标。 |
| `VillagePatrolDistanceAsDays` | `0.25f` | 巡逻村庄的半径系数（天数）。 | `GetPatrolRadius` 内部用于 `IsVillage` 目标。 |
| `SettlementDefendingWaitingPositionRadius` | `3f` | 防守队伍等待位置的半径。 | `MobilePartyAi` 计算防守等待点时直接读取；不应返回负数。 |
| `SettlementDefendingNearbyPartyCheckRadius` | `SettlementDefendingWaitingPositionRadius × 3` | 防守时检查附近敌方队伍的范围。 | `MobilePartyAi` 搜索附近威胁以决定防御；依赖上一属性。 |
| `NeededFoodsInDaysThresholdForSiege` | `12f` | 围城所需的最低食物天数阈值。 | 攻城决策判断补给是否充足；只读。 |
| `NeededFoodsInDaysThresholdForRaid` | `8f` | 突袭所需的最低食物天数阈值。 | 突袭决策判断补给是否充足；只读。 |

> 注：半径类属性中 `Hideout/ Fortification/ VillagePatrolDistanceAsDays` 与 `SettlementDefending*` 是“天数 × 速度”系数，会乘以 `mobileParty._lastCalculatedSpeed × CampaignTime.HoursInDay` 得到世界距离；`FleeToNearby*` 则是依赖 `EncounterModel` 的实时世界距离。

### 决策类（方法）

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)` → `bool` | 判断 `party` 是否应考虑攻击 `targetParty`：目标非主队或主队可攻击、双方海陆状态一致（或可经有港口的据点攻击）、且当前士气允许攻击。 | `GetBestInitiativeBehavior` 在计算攻击分数时内部调用；也可在外层决策只读查询。纯判定，无副作用。 |
| `ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)` → `bool` | 判断 `party` 是否应考虑躲避 `targetParty`：目标有攻击性且非木筏、或是驻军、且士气允许被攻击。 | 计算躲避分数时调用；纯判定，无副作用。 |
| `GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)` → `float` | 根据 `mobileParty.TargetSettlement` 的类型与队伍速度返回巡逻半径（世界单位）；无目标定居点时返回 `0`。 | 巡逻行为（`AiPatrollingBehavior`）刷新巡逻范围时调用；内部读取 `TargetSettlement`、`_lastCalculatedSpeed`，巡逻队再乘 `0.5`。 |
| `ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)` → `bool` | 该队伍本 tick 是否值得评估主动行为：排除驻军/民兵/匪帮/无主领主队、排除主队与正在围城者、排除军队里被附着的队伍。 | `MobilePartyAi` 每 tick 先调它，返回 `true` 才调 `GetBestInitiativeBehavior`；纯判定。 |
| `GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)` → `void` | 综合周围敌友队伍，算出最佳主动行为（`EngageParty`/`FleeToPoint` 等）、目标、分数与平均敌向向量。 | `MobilePartyAi` 在上一方法返回 `true` 时调用，是 AI 主动性核心；会做两次 `MobileParty.StartFindingLocatablesAroundPosition` 空间查询并估算力量，成本高。 |

默认实现的可观察规则包括：攻击分数受双方力量比、距离、士气、阵营关系与是否围城影响；躲避分数在目标更近、我方更弱时升高；巡逻半径随目标定居点类型与队伍速度变化；所有判定都先要求双方处于一致的海/陆状态（除非经有港口的据点攻击）。跨版本实现应委托当前版本的 vanilla 模型，而不是把旧公式复制到新版。

## 真实读取路径

以下代码只查询当前战役中已经注册的模型，用于判断“我方队伍是否应躲避某威胁并尝试逃向邻近据点”：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

public bool ShouldMyPartyFlee(MobileParty me, MobileParty threat)
{
    if (Campaign.Current == null || me == null || threat == null)
    {
        return false;
    }

    MobilePartyAIModel ai = Campaign.Current.Models.MobilePartyAIModel;

    // 先问模型“是否应考虑躲避”，再检查威胁是否落在“逃离邻近队伍半径”内
    bool considerAvoid = ai.ShouldConsiderAvoiding(me, threat);
    float fleeRadius = ai.FleeToNearbyPartyRadius;

    return considerAvoid && me.Position.Distance(threat.Position) <= fleeRadius;
}
```

这段适合 UI 提示或调试；普通 AI 不应自己再调一次 `GetBestInitiativeBehavior`，那由思考循环按 `AiCheckInterval` 节流完成。

## 替换模型时的安全做法

如果只想微调巡逻/防守半径或攻击倾向，保留 vanilla 作为 delegate，让所有判定仍成对执行：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

public sealed class ModMobilePartyAIModel : MobilePartyAIModel
{
    private readonly MobilePartyAIModel _vanilla;

    public ModMobilePartyAIModel(MobilePartyAIModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override float AiCheckInterval => _vanilla.AiCheckInterval;
    public override float FleeToNearbyPartyRadius => _vanilla.FleeToNearbyPartyRadius;
    public override float FleeToNearbySettlementRadius => _vanilla.FleeToNearbySettlementRadius;
    public override float HideoutPatrolDistanceAsDays => _vanilla.HideoutPatrolDistanceAsDays * 1.5f;
    public override float FortificationPatrolDistanceAsDays => _vanilla.FortificationPatrolDistanceAsDays;
    public override float VillagePatrolDistanceAsDays => _vanilla.VillagePatrolDistanceAsDays;
    public override float SettlementDefendingNearbyPartyCheckRadius => _vanilla.SettlementDefendingNearbyPartyCheckRadius;
    public override float SettlementDefendingWaitingPositionRadius => _vanilla.SettlementDefendingWaitingPositionRadius;
    public override float NeededFoodsInDaysThresholdForSiege => _vanilla.NeededFoodsInDaysThresholdForSiege;
    public override float NeededFoodsInDaysThresholdForRaid => _vanilla.NeededFoodsInDaysThresholdForRaid;

    public override bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)
        => _vanilla.ShouldConsiderAttacking(party, targetParty);

    public override bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)
        => _vanilla.ShouldConsiderAvoiding(party, targetParty);

    public override float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)
        => _vanilla.GetPatrolRadius(mobileParty, patrolPoint);

    public override bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)
        => _vanilla.ShouldPartyCheckInitiativeBehavior(mobileParty);

    public override void GetBestInitiativeBehavior(
        MobileParty mobileParty,
        out AiBehavior bestInitiativeBehavior,
        out MobileParty bestInitiativeTargetParty,
        out float bestInitiativeBehaviorScore,
        out Vec2 averageEnemyVec)
    {
        _vanilla.GetBestInitiativeBehavior(
            mobileParty, out bestInitiativeBehavior, out bestInitiativeTargetParty,
            out bestInitiativeBehaviorScore, out averageEnemyVec);
    }
}
```

实际注册时应在战役初始化的模型注册阶段保存 vanilla delegate；不要在模型已经替换后再次通过 `Campaign.Current.Models.MobilePartyAIModel` 查找自己，否则会递归。若要让替换覆盖新版本的海陆/港口规则，优先委托当前版本默认模型，再叠加自己的有界修正。

## 风险与调试顺序

1. **战役尚未存在：** `Campaign.Current` 在标题界面和早期模块加载阶段为 `null`；延迟到战役启动钩子再获取模型。
2. **替换时机错误：** 必须通过 `GameModels` / `CampaignGameStarter` 在战役初始化时注册；运行时热替换会让不同队伍看到不同规则，且从已替换实例再取自己会递归。
3. **半径返回 0：** `GetPatrolRadius` 在 `TargetSettlement` 为 `null` 时返回 `0`，调用方必须处理“无巡逻目标”情形，不要假设恒为正。
4. **在判定回调里改世界：** 招募、传送、金币转移必须在行为、`Roster` API 或 `Action` 中执行，不能放进 `ShouldConsider*` / `GetBestInitiativeBehavior` 这类判定回调。
5. **高频调用成本：** `GetBestInitiativeBehavior` 内部对周围队伍做两次 `Locatable` 搜索并估算力量，开销大；严格按 `AiCheckInterval` 节流，不要每帧主动调用。
6. **海陆状态不一致：** `ShouldConsiderAttacking` 要求双方海陆一致（除非经有港口据点攻击），跨海攻击判定会返回 `false`；自定义实现要保留该约束，否则会出现海上异常遭遇。

## 版本与导航

v1.3.15 的接口包含上述 10 个只读属性与 5 个抽象方法。v1.4.5 在此基础上**新增**了 `FortificationPortPatrolDistanceAsDays` 属性（港口防御点巡逻半径系数）与 `GetSettlementNearbyThreatAndAllyCheckRadius(Settlement settlement, bool isPort)` 方法（计算据点附近威胁/盟友检查半径），并把 `FortificationPatrolDistanceAsDays` 的默认值从 `0.3f` 改为 `0.5f`。跨版本实现应委托当前版本的 vanilla model，而不是把旧公式复制到新版本（详见 [版本差异](../../../architecture/version-delta)）。

- [队伍模型目录](../models/)
- [↑ 父级：Campaign 扩展 API](../)
- [↔ PartySpeedModel](../PartySpeedModel)
- [↔ PartyWageModel](../PartyWageModel)
- [↔ PartyNavigationModel](../PartyNavigationModel)
- [↔ EncounterModel](../EncounterModel)
- [↔ MilitaryPowerModel](../MilitaryPowerModel)
- [MobileParty](../../campaign/MobileParty)
- [Settlement](../../campaign/Settlement)
- [战役系统指南](../../../guide/campaign-system)
