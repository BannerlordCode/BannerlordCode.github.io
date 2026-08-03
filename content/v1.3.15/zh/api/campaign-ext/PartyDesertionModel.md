---
title: "PartyDesertionModel"
description: "选择因士气、工资或队伍规模而逃亡的兵员，计算单兵概率与低士气阈值，但不直接改写真实名册的可替换策略。"
---

# PartyDesertionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyDesertionModel : MBGameModel<PartyDesertionModel>`  
**Base:** `MBGameModel<PartyDesertionModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyDesertionModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyDesertionModel.cs`

## 一句话职责

它决定哪些普通兵员可能因士气、工资或队伍规模而逃亡，但不直接从活动队伍名册中删除他们。

## 心智模型

`PartyDesertionModel` 是 `MobileParty` 与 [DesertionCampaignBehavior](../DesertionCampaignBehavior/) 之间的选择层。每日队伍 tick 中，Behavior 从 `Campaign.Current.Models.PartyDesertionModel` 取得一个独立的 dummy `TroopRoster`。这个结果只描述要扣除的数量和伤兵数量；Behavior 随后才从真实 `MemberRoster` 扣除、广播逃兵事件，并在队伍没有成员时销毁队伍。

默认实现合并两种不同压力：低士气使用按兵种等级计算的概率，工资不足或超出队伍容量则选择一个确定的最大数量。选择过程跳过 Hero，分别处理伤兵和健康兵员，并从名册末尾向前扫描。因此模型必须返回“计划”而不是修改队伍：据点预测也会读取这个结果，同一计算可能在实际扣除前重复调用。

## 何时使用，何时不要用

- 想修改逃亡候选集合、低士气概率，或默认公式使用的士气阈值时，替换该模型。
- 需要展示下一次可能逃亡结果的诊断/预测时，从 `Campaign.Current.Models.PartyDesertionModel` 读取。
- 不要在模型方法里调用 `MemberRoster.AddToCounts` 或 `DestroyPartyAction`；这些写入属于 [DesertionCampaignBehavior](../DesertionCampaignBehavior/)。
- 不要把 `GetMoraleThresholdForTroopDesertion` 当成完整的逃亡开关；工资上限、容量溢出、队伍类型、海上状态、地图事件和普通成员数量由其他层检查。

## 依赖与消费者

#### 上游

- [Campaign](../../campaign/Campaign/) 与 [GameModels](../GameModels/) 持有注册后的策略实例。
- [MobileParty](../../campaign/MobileParty/) 提供士气、支付上限、队伍容量、工资、海上/活动状态和名册。
- [TroopRoster](../TroopRoster/) 与 `TroopRosterElement` 携带原始数量、伤兵数量、兵种等级和 dummy 扣除计划。
- [PartyMoraleModel](../PartyMoraleModel/) 提供默认概率公式读取的士气结果；[PartyWageModel](../PartyWageModel/) 提供支付压力使用的工资总额。

#### 下游

- [DesertionCampaignBehavior](../DesertionCampaignBehavior/) 在符合条件的每日队伍 tick 中调用模型，并把返回计划应用到真实名册。
- `SettlementHelper` 读取返回名册，用于估算驻军变化和据点效果。
- [CampaignEvents](../CampaignEvents/) 在真实名册修改后广播 `OnTroopsDeserted`。
- [DestroyPartyAction](../DestroyPartyAction/) 在 Behavior 发现成员数量归零后可能移除队伍。

## 成员与调用时机

| 成员 | 用途与时机 | 副作用边界 |
|---|---|---|
| `GetTroopsToDesert(MobileParty)` | 构造包含士气压力和工资/容量压力的 dummy 名册；在符合条件的每日 tick 与据点预测中调用。 | 不能修改 `mobileParty.MemberRoster`；返回名册只是计划。 |
| `GetDesertionChanceForTroop(MobileParty, in TroopRosterElement)` | 为士气驱动的选择计算某个非 Hero 名册元素的逃亡概率。 | 只返回数值；默认选择器负责提供确定性的种子随机数。 |
| `GetMoraleThresholdForTroopDesertion()` | 提供默认概率曲线使用的士气水平；vanilla 值为 10。 | 不修改士气，也不会单独触发逃亡。 |

## Vanilla 选择细节

原版 `GetTroopsToDesert` 先调用 `TroopRoster.CreateDummyTroopRoster()`，再合并两种上限：

1. 士气压力以普通成员数量和平均兵种等级 20 的概率曲线估算数量，再分别对伤兵和健康兵员按 `GetDesertionChanceForTroop` 选择。
2. 工资和容量压力比较队伍总成员数与 `PartySizeLimit`，也比较有效工资与 `PaymentLimit`。驻军欠薪时还可能增加最多五名健康成员；最终数量不超过普通成员数。这一路径不再使用概率，而是确定性选择。

默认选择器跳过 Hero，从名册末尾向前扫描，并用 `CampaignTime.Now`、名册索引和元素索引为士气概率生成随机种子。因此替换实现不能把返回值理解为归一化百分比，也不能假设名册排序变化后结果仍相同。

## 真实获取与查询示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;

Campaign campaign = Campaign.Current;
MobileParty party = MobileParty.MainParty;
PartyDesertionModel desertion = campaign.Models.PartyDesertionModel;

TroopRoster plan = desertion.GetTroopsToDesert(party);
int plannedLosses = plan.TotalManCount;

if (party.MemberRoster.Count > 0)
{
    TroopRosterElement element = party.MemberRoster.GetElementCopyAtIndex(0);
    float chance = desertion.GetDesertionChanceForTroop(party, in element);
    int moraleThreshold = desertion.GetMoraleThresholdForTroopDesertion();
}
```

这是只读预测，不会把 `plan` 应用到玩家队伍。原版 Behavior 会先检查队伍是否满足条件，真正的扣兵和逃亡事件派发只发生在 Behavior 中。

## 风险与排错边界

1. 如果返回真实的 `MemberRoster` 而不是独立扣除计划，调用方在即将修改的数据上迭代时可能扣错数量，尤其容易破坏伤兵数量。
2. 删除 Hero 或不保留 `WoundedNumber` 会改变逃亡语义，并可能破坏囚犯/成员统计。默认实现明确跳过 Hero，并在 dummy 名册中记录伤兵损失。
3. 模型结果可能同时被每日逃亡逻辑和据点预测查询。在计算阶段修改金币、食物、士气或名册，会造成重复状态变更。
4. 返回不受界定的概率不安全：默认选择器会把它与种子随机浮点数比较。士气分支应保持概率式返回契约。
5. 工资压力依赖 [PartyWageModel](../PartyWageModel/) 和队伍支付上限。同步修改两个策略却不检查共同边界，可能造成逃亡振荡或让支付分支永远不可达。
6. `DesertionCampaignBehavior` 只对活动、非海上、非解散、非地图事件中的领主队、商队和驻军应用结果，并且要求有普通成员。预测页不能声称所有队伍类型都会立即逃亡。
7. 模型没有 `SyncData`；需要保存的阈值或计数应放入独立的 [CampaignBehaviorBase](../CampaignBehaviorBase/) 存档契约，而不是模型实例。

## 导航

- [父级：campaign-ext](../)
- [模型家族手册](../models/)
- [同级：PartyMoraleModel](../PartyMoraleModel/) · [PartyWageModel](../PartyWageModel/) · [PartySizeLimitModel](../PartySizeLimitModel/)
- [消费者：DesertionCampaignBehavior](../DesertionCampaignBehavior/)
- [相关：MobileParty](../../campaign/MobileParty/) · [TroopRoster](../TroopRoster/) · [DestroyPartyAction](../DestroyPartyAction/)
