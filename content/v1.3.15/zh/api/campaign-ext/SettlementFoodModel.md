---
title: "SettlementFoodModel"
description: "计算城镇粮食库存每日变化与库存上限的可替换据点模型契约。"
---
# SettlementFoodModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementFoodModel : MBGameModel<SettlementFoodModel>`  
**Base:** `MBGameModel<SettlementFoodModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementFoodModel.cs`

## 一句话职责

`SettlementFoodModel` 定义城镇每天因繁荣、驻军、村庄、建筑、市场卖出物和事件而产生的粮食变化，以及库存上限相关参数；它返回解释结果，不直接写入 `Town.FoodStocks`。

## 心智模型

把它看成“城镇粮食账本的计算器”。`Town.FoodChange`、`Town.FoodChangeWithoutMarketStocks` 和 `Town.FoodChangeExplanation` 通过 `Campaign.Current.Models` 读取同一个模型，`Town.DailyTick` 随后才把结果加到库存并处理断粮状态。模型所在的是 Campaign Model 层，不是库存或交易 Action 层。

`includeMarketStocks` 是一个有实际语义的开关：关闭时排除 `Town.SoldItems` 中对粮食库存有贡献的卖出记录，适合比较“土地与建筑自身的产出”；`includeDescriptions` 只控制 `ExplainedNumber` 是否保留解释文本。二者都不会改变模型持有的世界状态。

## 依赖与消费链

| 类型/流程 | 关系 |
| --- | --- |
| [`GameModels`](../GameModels) / [`Campaign`](../../campaign/Campaign) | 在战役启动后提供注册好的模型实例。 |
| [`Town`](../../campaign/Town) | 提供繁荣、驻军、围城、绑定村庄、建筑和卖出记录；也消费返回的变化量。 |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | 繁荣变化会反馈到下一次粮食消耗计算。 |
| `GarrisonTroopsCampaignBehavior` / `IssueModel` | 处理驻军和问题造成的下游状态效果；模型只合并这些输入。 |

## 公共契约

| 成员 | 用途与时机 |
| --- | --- |
| `FoodStocksUpperLimit` | 非城堡的基础库存上限；`Town.FoodStocksUpperLimit()` 还会叠加城堡和建筑效果。 |
| `NumberOfProsperityToEatOneFood` | 把繁荣转换为每日粮食消耗的分母。 |
| `NumberOfMenOnGarrisonToEatOneFood` | 把驻军人数转换为每日粮食消耗的分母。 |
| `CastleFoodStockUpperLimitBonus` | 城堡库存上限的额外加成。 |
| `CalculateTownFoodStocksChange(Town, bool, bool)` | 返回本日粮食净变化；通常由城镇 tick 或 UI 解释面板调用。 |

## 真实获取路径

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

Town town = Settlement.All
    .Where(settlement => settlement.IsTown)
    .Select(settlement => settlement.Town)
    .FirstOrDefault(candidate => candidate != null);

if (town != null && Campaign.Current != null)
{
    SettlementFoodModel model = Campaign.Current.Models.SettlementFoodModel;
    float netChange = model.CalculateTownFoodStocksChange(town).ResultNumber;
    float structuralChange = model
        .CalculateTownFoodStocksChange(town, includeMarketStocks: false)
        .ResultNumber;
    int upperLimit = town.FoodStocksUpperLimit();
}
```

自定义规则应在 Campaign 启动阶段通过 `CampaignGameStarter.AddModel` 注册实现；运行中的 Behavior 只应读取结果或负责应用结果。

## 风险与版本边界

- `CalculateTownFoodStocksChange` 返回的是每日增量，不是新的库存值；重复加到 `FoodStocks` 会放大粮食产出。
- `Town.DailyTick` 在结果小于零时还会把库存归零并更新主人剩余粮食百分比；模型替换应保持负值含义，不要把断粮改成静默的正值。
- `FoodStocksUpperLimit` 不等于最终上限，城堡加成和建筑 `FoodStock` 效果在 `Town` 中另行合并。
- 在 Campaign 或 `GameModels` 尚未建立时读取模型会得到空引用；不要从 `OnSubModuleLoad` 直接查询城镇。
- 1.3.15 与 1.4.5 的契约名称一致，但公式和建筑/Perk 集合以目标游戏版本源码为准。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [默认实现：DefaultSettlementFoodModel](../DefaultSettlementFoodModel)
- [相关：SettlementProsperityModel](../SettlementProsperityModel) · [SettlementGarrisonModel](../SettlementGarrisonModel)
- [下游：Town](../../campaign/Town)

