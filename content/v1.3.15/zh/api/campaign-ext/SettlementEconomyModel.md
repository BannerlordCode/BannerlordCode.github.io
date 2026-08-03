---
title: "SettlementEconomyModel"
description: "为城镇经济行为提供需求、供给、预算和金库变化策略。"
---
# SettlementEconomyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementEconomyModel : MBGameModel<SettlementEconomyModel>`  
**Base:** `MBGameModel<SettlementEconomyModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementEconomyModel.cs`

## One-line job

`SettlementEconomyModel` 预测物品类别的需求、供给、每日市场预算和城镇金库变化。它不直接添加物品或金币。

## Mental Model

这是市场模拟的策略边界。`TownMarketData` 和 `ItemConsumptionBehavior` 读取需求/预算后，才通过自己的行为修改库存和金库。繁荣、生产和物品价值是输入，不属于本 Model 的写入职责。替换实现必须保持供需单位一致，并为新市场处理零供给分支。

```text
Town + ItemCategory + inventory + prosperity
       -> SettlementEconomyModel
       -> demand / supply / budget / gold delta
       -> ItemConsumptionBehavior / TownMarketData 执行变更
```

## Dependencies

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 持有注册的经济 Model。 |
| [`Town`](../../campaign/Town) / `TownMarketData` | 提供市场状态和价格。 |
| [`ItemObject`](../../core-extra/ItemObject) / `ItemCategory` | 标识货物和值。 |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | 繁荣变化会影响每日需求。 |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `GetEstimatedDemandForCategory` | 从物品数据估算需求。 | 市场预览 |
| `GetDailyDemandForCategory` | 返回每日类别需求。 | 消费 tick |
| `GetSupplyDemandForCategory` | 根据旧值和每日变化更新供需。 | 市场更新 |
| `GetTownGoldChange` | 计算城镇金库变化。 | 消费行为 |
| `CalculateDailySettlementBudgetForItemCategory` | 限制类别每日支出。 | 商队和消费 |

## Real access path

```csharp
public float DailyFoodDemand(Town town, ItemCategory category)
{
    return Campaign.Current.Models.SettlementEconomyModel
        .GetDailyDemandForCategory(town, category);
}
```

`ItemConsumptionBehavior` 使用这些值后才移除物品或改变金库；不要在 Model 内执行相同写入。

## 风险与调试顺序

1. 区分需求数量和金币金额，保持符号约定。
2. 预算必须有界，否则每日会无限创造或消耗金库。
3. 新市场的缺货和零供给必须返回稳定结果。
4. 不要从预算查询递归调用繁荣写入流程。
5. 经济状态由市场/settlement 行为保存，不由 Model 保存。

## Navigation

- [Campaign-ext models family](../models/)
- [Town](../../campaign/Town)
- [ItemObject](../../core-extra/ItemObject)
- [SettlementProsperityModel](../SettlementProsperityModel)
- [PartyWageModel](../PartyWageModel)
