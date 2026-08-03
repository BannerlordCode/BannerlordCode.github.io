---
title: "SettlementEconomyModel"
description: "为据点市场需求、供给、预算和城镇金库变化提供可替换的经济策略契约。"
---
# SettlementEconomyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementEconomyModel : MBGameModel<SettlementEconomyModel>`  
**Base:** `MBGameModel<SettlementEconomyModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs`  
**Default:** [`DefaultSettlementEconomyModel`](../DefaultSettlementEconomyModel)

## 一句话职责

`SettlementEconomyModel` 预测物品类别的需求、供给、每日市场预算和城镇金库变化。它被经济 Behavior、市场数据和贸易流程查询，但不自己增删物品，也不直接加减城镇金币。

## 心智模型

这是市场模拟的策略边界：`TownMarketData` 保存每类物品的供给/需求/库存数据，`ItemConsumptionBehavior` 读取本 Model 的预算和需求后才扣库存、更新销售记录并改变城镇金币。繁荣、商品价值和库存是输入，不是该 Model 所拥有的状态。替换实现必须保持供给/需求单位一致，并为新城镇、缺失类别和零供给返回有界结果。

```text
Town + ItemCategory + market data + prosperity
        -> SettlementEconomyModel
        -> demand / supply / budget / gold delta
        -> ItemConsumptionBehavior / TownMarketData apply changes
```

## 依赖与消费链

| 类型/流程 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) / [`GameModels`](../GameModels) | 持有已注册的经济 Model。 |
| [`Town`](../../campaign/Town) | 提供繁荣、金币和市场上下文。 |
| [`ItemObject`](../../core-extra/ItemObject) / `ItemCategory` | 提供商品类别、价值和需求属性。 |
| `TownMarketData` / `ItemConsumptionBehavior` | 保存供需状态并把预算结果转成库存和金币变更。 |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | 繁荣变化会在后续市场 tick 影响需求。 |

## 公共契约

| 成员 | 实际职责 | 典型时机 |
| --- | --- | --- |
| `GetEstimatedDemandForCategory` | 用当前城镇与 `ItemData` 估计类别需求；默认实现委托每日需求并加 `1000` prosperity。 | 供需刷新 |
| `GetDailyDemandForCategory` | 根据 `BaseDemand`、`LuxuryDemand`、繁荣和额外繁荣返回需求。 | 每日消费 |
| `GetDemandChangeFromValue` | 把购买价值转换为需求变化。 | 市场记录 |
| `GetSupplyDemandForCategory` | 将旧供需与本日供给/需求合并。 | 市场更新 |
| `GetTownGoldChange` | 计算城镇金库向目标值漂移的金币增量。 | 每日消费 |
| `CalculateDailySettlementBudgetForItemCategory` | 将需求和类别价格指数转换为本日消费预算。 | 消费和商队流程 |

## 真实获取路径

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

SettlementEconomyModel model = Campaign.Current.Models.SettlementEconomyModel;
Town town = Town.AllTowns[0];
ItemCategory category = ItemCategories.All[0];
float demand = model.GetDailyDemandForCategory(town, category);
float budget = model.CalculateDailySettlementBudgetForItemCategory(town, demand, category);
int goldDelta = model.GetTownGoldChange(town);
```

这些值是经济 Behavior 的输入。不要从 Model 中调用 `town.ChangeGold`、直接修改 `ItemRoster` 或写 `TownMarketData`；这样会让查询、UI 预览和每日消费重复应用状态。

## 风险与版本边界

- 需求是数量/类别单位，不是金币；预算才是消费金额，不能互换。
- 默认供需更新使用 `0.85 * old + 0.15 * daily`，并把供给下限压到 `0.1f`；改变平滑因子会改变整个市场的滞后性。
- 默认豪华需求只对繁荣超过 `3000` 的部分生效，类别没有 `BaseDemand` 时仍有 `0.01 * prosperity` 的回退。
- 金库目标为 `10000 + prosperity * 12`，默认每 tick 取差额的四分之一；无界替换会在每日结算中创造或吞噬大量金币。
- 市场数据和据点状态由 Behavior/Save 系统保存，Model 应保持无状态；本页以 1.4.5 source 为权威，部署到 1.3.15 前复核目标安装包。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [默认实现：DefaultSettlementEconomyModel](../DefaultSettlementEconomyModel)
- [相关：SettlementProsperityModel](../SettlementProsperityModel) · [Town](../../campaign/Town)
- [市场边界：SettlementFoodModel](../SettlementFoodModel)
