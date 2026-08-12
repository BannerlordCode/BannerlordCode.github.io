---
title: "PartyDesertionModel"
description: "选择因士气、欠薪或超出队伍容量而逃亡的兵员，计算单兵逃亡概率与低士气阈值，但不直接改写真实名册的可替换策略。"
---

# PartyDesertionModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class PartyDesertionModel : MBGameModel<PartyDesertionModel>`  
**基类:** `MBGameModel<PartyDesertionModel>`  
**源文件路径:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\PartyDesertionModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyDesertionModel.cs`

## 一句话职责

它决定哪些普通兵员可能因士气、工资或队伍规模而逃亡，但只返回独立的作战计划，不从活动队伍名册中删除任何单位。真正的扣兵、事件广播以及空队伍销毁由 `DesertionCampaignBehavior` 在符合条件的每日 tick 中完成。

## 心智模型

`PartyDesertionModel` 是 `MobileParty` 与 [DesertionCampaignBehavior](../DesertionCampaignBehavior/) 之间的“选择层”。每日队伍 tick 里，Behavior 调用 `Campaign.Current.Models.PartyDesertionModel.GetTroopsToDesert(party)`，拿到一个独立的 dummy `TroopRoster`。这个结果只描述要扣除的健康兵员数和伤兵数；Behavior 随后才从真实 `MemberRoster` 减去、广播 `OnTroopsDeserted`，并在队伍成员归零时调用 `DestroyPartyAction`。

计算链是：队伍士气、支付上限、队伍容量、工资与伤病状态先进入 `GetTroopsToDesert`，它内部合并两类压力——低士气的随机概率选择，以及欠薪/超编的确定性选择——再返回 dummy 名册。据点预测（`SettlementHelper`）也会读取这个结果去估算驻军损失，因此模型可能被“真实扣兵之前”的查询重复调用。这与 [PartySpeedModel](../PartySpeedModel/) 不同：速度模型改变的是所有消费者看到的地图速度，逃亡模型改变的是谁在每日结算时离开。

使用这个模型，是为了修改逃亡候选集合、单兵概率或默认公式使用的士气阈值。如果目标是真正扣兵、广播事件或销毁空队伍，应使用 [DesertionCampaignBehavior](../DesertionCampaignBehavior/) 与对应 `*Action`；不要在模型方法里调用 `MemberRoster.AddToCounts` 或 `DestroyPartyAction`。模型返回的是“计划”，把它当成即时写入会在调用方即将迭代的数据上造成重复扣减。

### 生命周期与注册

`Campaign.Current.Models` 持有当前实例。默认实例是 `DefaultPartyDesertionModel`，游戏启动器在战役初始化时通过 `IGameStarter.AddModel`（`GameModels`）注册它；自定义模型必须在战役系统开始查询前完成注册。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 可能为 `null`，不能在静态字段初始化或菜单构造函数里无条件读取它。模型本身没有 `SyncData`，需要跨存档保存的阈值或计数应放进独立的 [CampaignBehaviorBase](../CampaignBehaviorBase/) 存档契约。

## 何时使用，何时不要用

- 想修改逃亡候选集合、低士气概率，或默认公式使用的士气阈值时，替换该模型。
- 需要展示下一次可能逃亡结果的诊断/预测时，从 `Campaign.Current.Models.PartyDesertionModel` 读取。
- 不要在模型方法里调用 `MemberRoster.AddToCounts`、`DestroyPartyAction` 或转移金币；这些写入属于 [DesertionCampaignBehavior](../DesertionCampaignBehavior/) 与 [PartyWageModel](../PartyWageModel/) 等层。
- 不要把 `GetMoraleThresholdForTroopDesertion` 当成完整的逃亡开关；工资上限、容量溢出、队伍类型、海上状态、地图事件和普通成员数量由其他层检查。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign/) | 提供活动战役、`Models` 注册表，以及 `AverageWage` 等默认实现需要的全局量。 |
| [`MobileParty`](../../campaign/MobileParty/) | 提供士气、支付上限、队伍容量、工资、海上/活动状态、解散文档与 `MemberRoster`。 |
| [`TroopRoster`](../TroopRoster/) / `TroopRosterElement` | 携带原始数量、伤兵数量、兵种等级，并承载 dummy 扣除计划。 |
| [`PartyMoraleModel`](../PartyMoraleModel/) | 提供 `MobileParty.Morale`，即默认概率公式读取的士气输入。 |
| [`PartyWageModel`](../PartyWageModel/) | 提供 `GetTotalWage`，用于工资压力分支的支付对比。 |
| [`PartySizeLimitModel`](../PartySizeLimitModel/) | 提供 `PartySizeLimit`，用于容量溢出分支。 |
| [`Settlement`](../../campaign/Settlement/) / [`Town`](../../campaign/Town/) | 据点驻军（`GarrisonParty`）是主要消费者之一，预测路径从这里进入模型。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`DesertionCampaignBehavior`](../DesertionCampaignBehavior/) | 在符合条件的每日 tick 中调用模型，并把返回计划应用到真实名册。 |
| [`SettlementHelper`](../SettlementHelper/) | 读取 `GetTroopsToDesert(garrisonParty).TotalManCount`，估算驻军变化。 |
| [`CampaignEvents`](../CampaignEvents/) | 真实名册修改后由 `OnTroopsDeserted` 广播逃兵事件。 |
| [`DestroyPartyAction`](../DestroyPartyAction/) | 在 Behavior 发现成员数量归零后可能移除队伍。 |

### Action、事件与存档边界

模型结果本身没有存档字段，也不派发事件。合法的扣兵走 [DesertionCampaignBehavior](../DesertionCampaignBehavior/) 内部的 `MemberRoster.AddToCounts`，事件派发走 `CampaignEventDispatcher.Instance.OnTroopsDeserted`，队伍销毁走 `DestroyPartyAction.Apply`。自定义模型应在相同输入下保持确定性，避免与重放的战役 tick 不一致。

## 成员契约

| 成员 | 主题 | 用途与调用时机 | 副作用边界 |
| --- | --- | --- | --- |
| `GetTroopsToDesert(MobileParty)` | 计算类 | 构造一个合并了“士气压力”与“工资/容量压力”的 dummy `TroopRoster`；在符合条件的每日 tick（[`DesertionCampaignBehavior.DailyTickParty`](../DesertionCampaignBehavior/)）与据点预测（[`SettlementHelper`](../SettlementHelper/)）中调用。 | 不能修改 `mobileParty.MemberRoster`；返回名册只是计划，调用方负责应用。 |
| `GetDesertionChanceForTroop(MobileParty, in TroopRosterElement)` | 计算类 | 为士气驱动的选择计算某个非 Hero 名册元素的逃亡概率（0~1）；默认实现只依赖 `party.Morale` 与 `troopRosterElement.Character.Level`。 | 只返回数值；确定性种子随机由默认选择器（`RandomFloatWithSeed`）提供，模型本身不掷骰。 |
| `GetMoraleThresholdForTroopDesertion()` | 配置类 | 提供默认概率曲线使用的士气水平；vanilla 返回 `10`。 | 不修改士气，也不会单独触发逃亡。 |

## Vanilla 选择细节

原版 `GetTroopsToDesert` 先调用 `TroopRoster.CreateDummyTroopRoster()`，再合并两个上限，相关常量：`MaxAcceptableDesertionCountForNormal = 20`、`MoraleThresholdForParty = 10`、`AverageTroopLevel = 20`。

1. **士气压力**：以普通成员数乘以 `CalculateDesertionChanceFromTroopLevel(morale, 20)`（平均兵种等级取 20）估算数量，再对伤兵和健康兵员按 `GetDesertionChanceForTroop` 做概率选择。
2. **工资与容量压力**：比较 `NumberOfAllMembers - 已计划数量 - PartySizeLimit`（容量溢出）与 `TotalWage - PaymentLimit`（欠薪）。欠薪分支最多选 `min(20, ...)`，容量分支取溢出的 `0.25` 倍；驻军且 `HasUnpaidWages > 0` 时再额外最多加 `min(健康成员数, 5)`；最终数量不超过 `TotalRegulars`。这一路径使用 `useProbability: false`，即确定性选择。

默认选择器跳过 Hero（`Character.HeroObject == null`），从名册末尾向前扫描，并用 `CampaignTime.Now.ToHours`、`名册索引 * 100 + 元素索引` 为士气概率生成随机种子（`RandomFloatWithSeed`）。因此替换实现不能把返回值理解为归一化百分比，也不能假设名册排序变化后结果仍相同。

## 真实获取与查询示例

以下代码只查询当前战役中已经注册的模型，顺序与 [DesertionCampaignBehavior](../DesertionCampaignBehavior/) 完全一致：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;

public int PredictDesertionLoss(MobileParty party)
{
    if (Campaign.Current == null || party == null || party.MemberRoster.Count == 0)
    {
        return 0;
    }

    PartyDesertionModel desertion = Campaign.Current.Models.PartyDesertionModel;
    TroopRoster plan = desertion.GetTroopsToDesert(party);

    int plannedLoss = plan.TotalManCount;
    if (plannedLoss > 0)
    {
        TroopRosterElement element = party.MemberRoster.GetElementCopyAtIndex(0);
        float chance = desertion.GetDesertionChanceForTroop(party, in element);
        int moraleThreshold = desertion.GetMoraleThresholdForTroopDesertion();
        // chance 仅用于诊断展示；真正扣兵由 DesertionCampaignBehavior 执行。
    }

    return plannedLoss;
}
```

这是只读预测，不会把 `plan` 应用到玩家队伍。真正的扣兵与逃亡事件派发只发生在 [DesertionCampaignBehavior](../DesertionCampaignBehavior/) 内部。

## 替换模型时的安全做法

如果只想增加一个有限修正，保留原模型作为 delegate，并让三个抽象成员仍然成对工作：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;

public sealed class ModPartyDesertionModel : PartyDesertionModel
{
    private readonly PartyDesertionModel _vanilla;

    public ModPartyDesertionModel(PartyDesertionModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override int GetMoraleThresholdForTroopDesertion()
    {
        return _vanilla.GetMoraleThresholdForTroopDesertion();
    }

    public override float GetDesertionChanceForTroop(MobileParty mobileParty, in TroopRosterElement troopRosterElement)
    {
        return _vanilla.GetDesertionChanceForTroop(mobileParty, in troopRosterElement);
    }

    public override TroopRoster GetTroopsToDesert(MobileParty mobileParty)
    {
        TroopRoster plan = _vanilla.GetTroopsToDesert(mobileParty);
        // 在返回前对 plan 做有界修正；不要在这里写真实名册。
        return plan;
    }
}
```

实际注册时应在 `CampaignGameStarter` 的模型注册阶段保存 vanilla delegate；不要在模型已经替换后再次通过 `Campaign.Current.Models.PartyDesertionModel` 查找自己，否则会递归。若要让替换覆盖工资、容量与海上等版本相关规则，优先委托当前版本的 vanilla model，再加自己的有界修正。

## 风险与排错边界

1. 如果返回真实的 `MemberRoster` 而不是独立的扣除计划，调用方在即将修改的数据上迭代时可能扣错数量，尤其容易破坏伤兵数量（`WoundedNumber`）。
2. 删除 Hero 或不保留 `WoundedNumber` 会改变逃亡语义，并可能破坏囚犯/成员统计。默认实现明确跳过 Hero，并在 dummy 名册中记录伤兵损失。
3. 模型结果可能同时被每日逃亡逻辑和据点预测查询。在计算阶段修改金币、食物、士气或名册，会造成重复状态变更。
4. 返回不受界定的概率不安全：默认选择器会把它与种子随机浮点数比较。士气分支应保持概率式返回契约（0~1）。
5. 工资压力依赖 [PartyWageModel](../PartyWageModel/) 与队伍支付上限。同步修改两个策略却不检查共同边界，可能造成逃亡振荡或让支付分支永远不可达。
6. [DesertionCampaignBehavior](../DesertionCampaignBehavior/) 只在 `IsActive && !IsCurrentlyAtSea && !IsDisbanding && MapEvent == null && (IsLordParty || IsCaravan || IsGarrison) && TotalRegulars > 0` 时应用结果。预测页不能声称所有队伍类型都会立即逃亡。
7. 模型没有 `SyncData`；需要保存的阈值或计数应放入独立的 `CampaignBehaviorBase` 存档契约，而不是模型实例。

## 版本与导航

v1.3.15 与 v1.4.5 的接口完全相同（`GetTroopsToDesert` / `GetDesertionChanceForTroop` / `GetMoraleThresholdForTroopDesertion`），默认实现常量也为 `10` / `20` / `20`。跨版本实现应委托当前版本的 vanilla model，而不是把旧公式复制到新版本——海上状态、工资与容量周边逻辑在不同版本可能有细微差异。

- [父级：Campaign 扩展 API](../)
- [模型家族手册](../models/)
- [↔ PartyMoraleModel](../PartyMoraleModel/) · [PartyWageModel](../PartyWageModel/) · [PartySizeLimitModel](../PartySizeLimitModel/) · [PartySpeedModel](../PartySpeedModel/)
- [消费者：DesertionCampaignBehavior](../DesertionCampaignBehavior/)
- [相关：MobileParty](../../campaign/MobileParty/) · [TroopRoster](../TroopRoster/) · [TroopRosterElement](../TroopRosterElement/) · [DestroyPartyAction](../DestroyPartyAction/) · [CampaignEvents](../CampaignEvents/) · [SettlementHelper](../SettlementHelper/)
