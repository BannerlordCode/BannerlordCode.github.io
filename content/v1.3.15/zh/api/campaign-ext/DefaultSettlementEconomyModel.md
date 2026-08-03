---
title: "DefaultSettlementEconomyModel"
description: "默认据点市场供需平滑、需求预算和城镇金库漂移的源码驱动实现。"
---
# DefaultSettlementEconomyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementEconomyModel : SettlementEconomyModel`  
**Base:** [`SettlementEconomyModel`](../SettlementEconomyModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementEconomyModel.cs`（1.4.5 权威源码；1.3.15 同名实现）

## 一句话职责

`DefaultSettlementEconomyModel` 把城镇繁荣、物品类别属性、市场库存和价格指数转换为需求、供给/需求平滑值、消费预算以及金库增量。它只提供计算，不扣除 `ItemRoster` 中的物品，也不直接改变 `Town.Gold`。

## 心智模型

`ItemConsumptionBehavior` 每日调用该 Model：先估计类别需求，再用预算消费库存、更新销售记录和金库；`TownMarketData` 也用它把购买价值转换为需求、把旧供需与本日供需合并。模型因此是纯策略层，市场数据和金币变更属于下游 Behavior。

核心参数是稳定的市场反馈：供给按 `85%` 旧值与 `15%` 本日值平滑，需求同样平滑；需求由繁荣和类别 `BaseDemand` 构成，超过 `3000` 的繁荣才提供 `LuxuryDemand`；每日预算再乘类别价格指数的 `0.3` 次幂。

## 依赖与消费链

| 类型/流程 | 关系 |
| --- | --- |
| [`SettlementEconomyModel`](../SettlementEconomyModel) / [`GameModels`](../GameModels) | 提供抽象契约和注册后的访问入口。 |
| [`Town`](../../campaign/Town) / `TownMarketData` | 提供繁荣、金币、供需、库存和价格指数。 |
| `ItemCategory` / [`ItemObject`](../../core-extra/ItemObject) | 提供需求系数、类别价值和物品价格。 |
| `ItemConsumptionBehavior` | 把模型结果应用为库存消费、销售记录和城镇金币变化。 |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | 繁荣每日变化会反馈到下一次需求计算。 |

## 默认公式

| 成员 | 1.4.5 行为 |
| --- | --- |
| `GetSupplyDemandForCategory` | `supply = oldSupply * 0.85 + dailySupply * 0.15`；需求同样平滑；供给最小为 `0.1f`。 |
| `GetDailyDemandForCategory` | `max(0, prosperity) * BaseDemand + max(0, prosperity - 3000) * LuxuryDemand`；无基础需求类别回退为 `prosperity * 0.01`。 |
| `GetTownGoldChange` | 目标金币为 `10000 + prosperity * 12`，返回目标与当前金币差额的 `25%`。 |
| `CalculateDailySettlementBudgetForItemCategory` | `demand * pow(priceIndex, 0.3)`。 |
| `GetDemandChangeFromValue` | 返回购买价值的 `15%`。 |
| `GetEstimatedDemandForCategory` | 委托当前注册经济 Model 的 `GetDailyDemandForCategory(town, category, 1000)`。 |

最后一个方法故意通过抽象入口再次查询每日需求，以保留替换模型对估计需求的影响；如果派生类从该入口递归调用自己，会造成栈溢出，必须改为调用 `base` 或直接复用明确公式。

## 真实获取与替换

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

if (Campaign.Current != null)
{
    SettlementEconomyModel model = Campaign.Current.Models.SettlementEconomyModel;
    Town town = Town.AllTowns.FirstOrDefault();
    ItemCategory category = ItemCategories.All.FirstOrDefault();
    if (town != null && category != null)
    {
        float demand = model.GetDailyDemandForCategory(town, category);
        float budget = model.CalculateDailySettlementBudgetForItemCategory(town, demand, category);
        int goldDelta = model.GetTownGoldChange(town);
    }
}
```

若要定制，可继承默认类并在 `InitializeGameStarter` 中 `gameStarter.AddModel(new ModSettlementEconomyModel())`。不要把 `GetTownGoldChange` 的返回值当作已经执行的交易，也不要在 Model 中调用 `ChangeGold` 或从名册删除物品。

## 风险与版本边界

- 需求、预算和金币是三个不同单位；把需求直接当金币会破坏消费量和市场价格。
- `GetEstimatedDemandForCategory` 通过 `Campaign.Current.Models.SettlementEconomyModel` 回调，替换它时必须避免递归。
- 供需平滑参数和 `3000` 豪华需求阈值影响所有城镇；局部调参也会改变商队和消费 Behavior 的长期反馈。
- 金库目标公式在每日 tick 中反复执行；返回无界值会快速制造或销毁金币。
- 市场和金库状态由据点/Behavior 保存，Model 不应增加自己的存档字段；本页公式以 1.4.5 source 为准。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [接口契约：SettlementEconomyModel](../SettlementEconomyModel)
- [相关：SettlementProsperityModel](../SettlementProsperityModel) · [SettlementFoodModel](../SettlementFoodModel)
- [下游：Town](../../campaign/Town)
