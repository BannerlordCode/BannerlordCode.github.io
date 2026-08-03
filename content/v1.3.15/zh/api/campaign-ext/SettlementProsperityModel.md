---
title: "SettlementProsperityModel"
description: "根据城镇经济输入计算繁荣度和村庄 hearth 变化的策略。"
---
# SettlementProsperityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementProsperityModel : MBGameModel<SettlementProsperityModel>`  
**Base:** `MBGameModel<SettlementProsperityModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementProsperityModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementProsperityModel.cs`

## One-line job

`SettlementProsperityModel` 解释城镇每日繁荣度和村庄 hearth 变化，返回 `ExplainedNumber`；保存状态由 settlement 行为负责。

## Mental Model

繁荣度和 hearth 是库存状态，不是即时价格。`Town.ProsperityChange` 与 `Village.HearthChange` 在战役 tick 和 UI 解释中查询 Model。默认公式读取食物、忠诚、治安、生产、劫掠和附属村庄。替换实现只能计算，不能在计算过程中写回数值。

```text
Town / Village + food + loyalty + security + production
       -> SettlementProsperityModel -> delta + explanation
       -> settlement behavior 写入保存状态
```

## Dependencies

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动 Model 注册表。 |
| [`Town`](../../campaign/Town) / [`Village`](../../campaign/Village) | 暴露繁荣/hearth 和解释属性。 |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | 提供忠诚阈值和效果。 |
| [`SettlementSecurityModel`](../SettlementSecurityModel) | 提供治安输入。 |
| `SettlementEconomyModel` | 提供生产和需求上下文。 |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `CalculateProsperityChange` | 计算城镇每日繁荣变化。 | settlement tick、UI |
| `CalculateHearthChange` | 计算村庄每日 hearth 变化。 | village tick、UI |

## Real access path

```csharp
public ExplainedNumber ExplainTownProsperity(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return new ExplainedNumber(0f);
    }
    return Campaign.Current.Models.SettlementProsperityModel
        .CalculateProsperityChange(town, includeDescriptions: true);
}
```

这就是 `Town.ProsperityChangeExplanation` 的调用路径；每日行为稍后才会写入保存状态。

## 风险与调试顺序

1. 不要从回调中写 `town.Prosperity` 或 `village.Hearth`。
2. 忠诚/治安阈值变化要和对应 Model 一起检查。
3. 保留饥荒和无附属村庄分支，避免新城镇返回 NaN。
4. 繁荣会影响后续需求，失控的因素会破坏经济。
5. 繁荣/hearth 属于 settlement 存档，不属于无状态 Model。

## Navigation

- [Campaign-ext models family](../models/)
- [Town](../../campaign/Town)
- [Village](../../campaign/Village)
- [SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [Models 家族手册](../models/)
