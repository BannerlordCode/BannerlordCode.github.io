---
title: "DefaultSettlementFoodModel"
description: "Bannerlord 默认城镇粮食收支、驻军消耗、村庄供给与库存上限规则。"
---
# DefaultSettlementFoodModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementFoodModel : SettlementFoodModel`  
**Base:** [`SettlementFoodModel`](../SettlementFoodModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs`（1.4.5 权威实现）

## 一句话职责

`DefaultSettlementFoodModel` 将城镇繁荣、驻军人数、绑定村庄状态、建筑、政策、Perk、围城状态和市场粮食卖出记录合成为每日粮食净变化。

## 心智模型

默认实现计算两本账：`bonuses` 是粮食来源，`bonuses2` 是繁荣和驻军等消耗，最终再合并问题效果。非围城时，城镇从周边土地和绑定村庄获得基础供给；围城时这条供给路径关闭，只保留围城相关的规则和可售粮食记录。`Town.DailyTick` 才把结果写到 `FoodStocks`，所以这个类不是补粮 Action。

默认常量也决定了许多 UI 解释：粮食库存基础上限为 `300`，繁荣每 `40` 点消耗一份粮食，驻军每 `20` 人消耗一份，城堡库存上限额外增加 `150`。

## 依赖

| 类型/流程 | 关系 |
| --- | --- |
| [`SettlementFoodModel`](../SettlementFoodModel) / [`GameModels`](../GameModels) | 抽象契约与注册/替换入口。 |
| [`Town`](../../campaign/Town) | 读取 `FoodChange`、库存上限，并在每日 tick 中写回库存。 |
| `Village` / `BuildingEffectEnum` | 提供绑定村庄炉灶、粮食生产和库存/消耗建筑效果。 |
| `PerkHelper` / `DefaultPolicies.HuntingRights` | 在围城、驻军和政策条件满足时添加解释项。 |
| `IssueModel` | 通过 `DefaultIssueEffects.SettlementFood` 注入问题效果。 |

## 默认规则

| 成员/阶段 | 1.4.5 行为 |
| --- | --- |
| `FoodStocksUpperLimit` | 返回 `300`；`CastleFoodStockUpperLimitBonus` 返回 `150`。 |
| 繁荣与驻军消耗 | 分别为 `town.Prosperity / 40` 与 `garrisonMembers / 20`；围城时相关 Steward/Medicine Perk 可改变解释值。 |
| 非围城供给 | 城镇基础为 `15`、城堡/村庄路径使用相应基础值；绑定村庄正常状态按 `(hearth + 1) * 6` 增加，并叠加粮食生产建筑。 |
| 围城供给 | 不计算周边土地和绑定村庄供给，而使用围城相关 Perk；卖出类别带 `BonusToFoodStores` 的物品仍可进入库存加成。 |
| 其他效果 | Hunting Rights 政策增加 `2`；建筑粮食消耗、问题效果和相应 Perk 通过 `ExplainedNumber` 合并。 |

## 真实获取与替换

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

Town town = Settlement.All
    .Where(settlement => settlement.IsTown)
    .Select(settlement => settlement.Town)
    .FirstOrDefault(candidate => candidate != null);

if (town != null)
{
    SettlementFoodModel model = Campaign.Current.Models.SettlementFoodModel;
    float explainedChange = model
        .CalculateTownFoodStocksChange(town, includeDescriptions: true)
        .ResultNumber;
    int capacity = town.FoodStocksUpperLimit();
}
```

要改默认规则，继承 `DefaultSettlementFoodModel` 或 `SettlementFoodModel`，在 `InitializeGameStarter` 中用 `gameStarter.AddModel(new MySettlementFoodModel())` 注册；不要在模型中直接改 `town.FoodStocks` 或调用补给 Action。

## 风险与版本边界

- `includeMarketStocks` 读取的是 `Town.SoldItems`，它反映已发生的市场行为；不要在每帧预览中把带市场记录的结果当成确定的每日产出。
- 围城分支会关闭村庄和土地供给；若自定义实现无条件加上村庄粮食，围城粮食压力会失真并连带改变忠诚、繁荣和民兵。
- `Town.DailyTick` 会在断粮时更新 `RemainingFoodPercentage`；保持结果可解释且不要把库存直接 clamp 到上限以外。
- 该类只计算，不负责保存粮食状态；在模型里添加持久字段会引入不必要的存档兼容面。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [接口契约：SettlementFoodModel](../SettlementFoodModel)
- [相关：SettlementProsperityModel](../SettlementProsperityModel) · [SettlementGarrisonModel](../SettlementGarrisonModel)
- [下游：Town](../../campaign/Town)

