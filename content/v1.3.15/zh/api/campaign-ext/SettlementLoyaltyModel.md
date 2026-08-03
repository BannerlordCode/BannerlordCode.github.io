---
title: "SettlementLoyaltyModel"
description: "解释城镇忠诚度日变化、税收效果和叛乱阈值的可替换策略。"
---
# SettlementLoyaltyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>`  
**Base:** `MBGameModel<SettlementLoyaltyModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementLoyaltyModel.cs`

## One-line job

`SettlementLoyaltyModel` 计算并解释城镇每日忠诚度变化，以及税收、民兵和叛乱系统共用的忠诚度阈值。它预测状态，不直接赋值 `Town.Loyalty`。

## Mental Model

`Town.LoyaltyChange` 和 `LoyaltyChangeExplanation` 都是模型驱动的只读视图。每日 Settlement 行为在战役时钟推进时消费数值并写入状态；繁荣模型读取高/低忠诚效果，民兵模型读取 rebellious 阈值，税收模型读取税收修正。因此一个阈值的改变会影响多个下游系统，不能只在本页局部理解。

```text
Town + culture + governor + security + policies
        -> Campaign.Current.Models.SettlementLoyaltyModel
        -> CalculateLoyaltyChange / thresholds
        -> settlement daily behavior -> Town.Loyalty
        -> prosperity / militia / tax / rebellion
```

要显示预测或替换规则时使用 Model；要改变所有权、开启叛乱或写状态时使用 Action/Behavior。不要在 `CalculateLoyaltyChange` 内调用状态变更 Action，也不要从 UI 直接写 Loyalty，否则预览和 tick 会递归触发副作用。

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供 Model 注册表和战役时钟。 |
| [`Town`](../../campaign/Town) | 提供忠诚、治安、繁荣、总督和城镇上下文。 |
| [`SettlementSecurityModel`](../SettlementSecurityModel) | 提供参与忠诚公式的治安变化。 |
| [`CampaignEvents`](../CampaignEvents) | 提供 tick 与城镇生命周期钩子。 |

### Downstream

| Type | Relation |
| --- | --- |
| [`Town`](../../campaign/Town) | 暴露忠诚变化及解释。 |
| `DefaultSettlementProsperityModel` | 使用忠诚阈值和高/低忠诚效果。 |
| `DefaultSettlementMilitiaModel` | 使用 rebellious 阈值和民兵增益。 |
| `DefaultSettlementTaxModel` | 使用高/低忠诚税收效果。 |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `CalculateLoyaltyChange` | 返回可解释的每日忠诚变化。 | 城镇 tick、UI 预览 |
| `RebellionStartLoyaltyThreshold` | 叛乱检查的资格阈值。 | 每日叛乱评估 |
| `RebelliousStateStartLoyaltyThreshold` | rebellious 状态效果阈值。 | 民兵和城镇状态 |
| `ThresholdForProsperityBoost` / `ThresholdForProsperityPenalty` | 把忠诚接入繁荣计算。 | 每日经济模型 |
| `CalculateGoldGainDueToHighLoyalty` | 向税收解释添加高忠诚收益。 | 税收预览和财务 tick |

## Real access path

```csharp
public ExplainedNumber ExplainTownLoyalty(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return new ExplainedNumber(0f);
    }
    return Campaign.Current.Models.SettlementLoyaltyModel
        .CalculateLoyaltyChange(town, includeDescriptions: true);
}
```

这与 `Town.LoyaltyChangeExplanation` 的真实路径一致。`ResultNumber` 只用于显示或后续官方 settlement 流程，不应在这里写回 Town。

## 风险与调试顺序

1. 同时检查繁荣、民兵和税收页面，因为它们共享阈值。
2. 禁止在模型查询期间触发 Action，避免 UI 预览造成真实叛乱或所有权变更。
3. 没有活动战役时 Model 注册表不可用。
4. 保留无总督、文化不同和治安异常等 vanilla 分支。
5. Loyalty 属于 Town/Settlement 的保存状态，不属于无状态的 Model；不要把 Saveable 字段加到模型中。

## Navigation

- [Campaign-ext models family](../models/)
- [Town](../../campaign/Town)
- [SettlementSecurityModel](../SettlementSecurityModel)
- [SettlementProsperityModel](../SettlementProsperityModel)
- [CampaignEvents](../CampaignEvents)
