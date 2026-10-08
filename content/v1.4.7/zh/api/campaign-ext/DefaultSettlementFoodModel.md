---
title: "DefaultSettlementFoodModel"
description: "聚落食物模型的默认实现：原版数值（库存上限 300、每 40 繁荣度消耗 1 食物）与完整的每日食物净变化计算逻辑，包含村庄生产、驻军消耗、市场交易、政策与 perk 修正。"
---
# DefaultSettlementFoodModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class DefaultSettlementFoodModel : SettlementFoodModel`
**基类：** `SettlementFoodModel`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs`（声明见第 15 行）

## 概述

`DefaultSettlementFoodModel` 是 `SettlementFoodModel` 契约的原版实现。它定义了游戏默认的食物经济参数——城镇库存上限 300、城堡额外 150、每 40 繁荣度消耗 1 食物、每 20 驻军消耗 1 食物——并通过 `CalculateTownFoodChangeInternal` 方法将这些参数组合成每日食物净变化的完整计算。计算涵盖村庄生产、驻军消耗、市场交易、建筑效果、政策修正、perk 加成和 issue 效果。

## 心智模型

**算法结构**：`CalculateTownFoodStocksChange` 是契约入口，直接委托给 private 的 `CalculateTownFoodChangeInternal`（`DefaultSettlementFoodModel.cs:64`）。内部方法构建两个 `ExplainedNumber` 累加器：一个收集正面贡献（村庄生产、市场购买、土地基础产出），另一个收集负面贡献（繁荣度消耗、驻军消耗）。最终结果 = 正面 - 负面 + issue 修正。

**数值设计**：四个常量属性（`FoodStocksUpperLimit`=300、`NumberOfProsperityToEatOneFood`=40、`NumberOfMenOnGarrisonToEatOneFood`=20、`CastleFoodStockUpperLimitBonus`=150）是食物经济的基础参数。它们被 `Town` 类直接读取用于库存上限计算（`Town.cs:420`、`Town.cs:423`），也被 `SettlementHelper` 用于食物短缺判断（`SettlementHelper.cs:610`）。

**修正层级**：计算按固定顺序叠加修正——基础产出 → 村庄 hearth 等级 → 建筑效果 → 政策（狩猎权）→ perk（美食家、围城医疗）→ issue 效果。理解这个顺序对 mod 覆写至关重要：后注册的修正会叠加在先注册的之上。

## 怎么用

**继承与覆写**：
- 只调数值：覆写四个常量属性，保留 `CalculateTownFoodStocksChange` 默认实现。
- 改算法：覆写 `CalculateTownFoodStocksChange`，可选择调用 `base` 后追加修正，或完全重写。
- 注册：`gameStarter.AddModel<SettlementFoodModel>(new DefaultSettlementFoodModel())` 是原版注册方式（`SandBoxManager.cs:295`）。mod 替换时改为注册自己的实例。

**真实坑**：
- **围城状态分支**：`CalculateTownFoodChangeInternal` 在围城时走不同分支——跳过村庄生产和土地产出，改为添加 `DirtyFighting` perk 修正。覆写时需保留此分支逻辑。
- **市场物品过滤**：`includeMarketStocks` 为 `true` 时遍历 `town.SoldItems`，只累加 `ItemCategory.Property.BonusToFoodStocks` 类别的物品。自定义物品需正确设置 `Category.Properties` 才能被计入。
- **ExplainedNumber 累加器**：`Add` 方法的第二个参数是描述文本 key。传 `null` 表示不显示来源。UI 调用时 `includeDescriptions=true` 会填充这些文本。
- **issue 效果**：`GetSettlementFoodChangeDueToIssues` 通过 `IssueModel` 查询聚落相关的 issue 效果。自定义 issue 需正确注册 `DefaultIssueEffects.SettlementFood` 才能生效。

**使用点**（真实调用方）：
- `SandBoxManager.cs:295` — 原版注册 `AddModel<SettlementFoodModel>(new DefaultSettlementFoodModel())`
- `Town.cs:225` — `FoodChange` 属性调用 `CalculateTownFoodStocksChange(this, true, false)`
- `Town.cs:235` — `FoodChangeWithoutMarket` 属性调用 `CalculateTownFoodStocksChange(this, false, false)`
- `Town.cs:245` — `FoodChangeWithDescriptions` 属性调用 `CalculateTownFoodStocksChange(this, true, true)`
- `Town.cs:420` — 库存上限计算读取 `FoodStocksUpperLimit`
- `Town.cs:423` — 城堡加成读取 `CastleFoodStockUpperLimitBonus`
- `GarrisonTroopsCampaignBehavior.cs:325` — 驻军行为读取模型实例
- `SettlementHelper.cs:610` — 食物短缺判断读取 `NumberOfProsperityToEatOneFood`
- `TownManagementVM.cs:121` — UI 面板调用 `CalculateTownFoodStocksChange` 显示预测

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `int FoodStocksUpperLimit { get; }` | 返回 300。城镇食物库存的硬上限。`Town.cs:420` 在计算库存百分比时读取。`DefaultSettlementFoodModel.cs:19` |
| `int NumberOfProsperityToEatOneFood { get; }` | 返回 40。每 40 繁荣度每天消耗 1 食物。值越大消耗越慢。`DefaultSettlementFoodModel.cs:29` |
| `int NumberOfMenOnGarrisonToEatOneFood { get; }` | 返回 20。每 20 驻军每天消耗 1 食物。`DefaultSettlementFoodModel.cs:39` |
| `int CastleFoodStockUpperLimitBonus { get; }` | 返回 150。城堡的额外库存上限。`Town.cs:423` 在 `IsCastle` 时加到基础上限。`DefaultSettlementFoodModel.cs:49` |
| `ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks, bool includeDescriptions)` | 契约入口。直接委托给 `CalculateTownFoodChangeInternal`。`DefaultSettlementFoodModel.cs:58` |
| `ExplainedNumber CalculateTownFoodChangeInternal(Town town, bool includeMarketStocks, bool includeDescriptions)` | private。核心算法：构建正面累加器（村庄生产、市场购买、土地产出）和负面累加器（繁荣度消耗、驻军消耗），叠加建筑、政策、perk 修正，最后减去负面并添加 issue 效果。`DefaultSettlementFoodModel.cs:64` |
| `void GetSettlementFoodChangeDueToIssues(Town town, ref ExplainedNumber explainedNumber)` | private static。通过 `IssueModel.GetIssueEffectsOfSettlement` 查询 `DefaultIssueEffects.SettlementFood` 效果并累加到结果。`DefaultSettlementFoodModel.cs:124` |

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public class HardcoreFoodModel : DefaultSettlementFoodModel
{
    public override int FoodStocksUpperLimit => 150;
    public override int NumberOfProsperityToEatOneFood => 20;

    public override ExplainedNumber CalculateTownFoodStocksChange(
        Town town, bool includeMarketStocks = true, bool includeDescriptions = false)
    {
        ExplainedNumber baseResult = base.CalculateTownFoodStocksChange(
            town, includeMarketStocks, includeDescriptions);
        // 围城时额外消耗 5 食物
        if (town.IsUnderSiege)
        {
            baseResult.Add(-5f, null, null);
        }
        return baseResult;
    }
}
```

## 参见

- ↔ 契约：[SettlementFoodModel](../SettlementFoodModel)
- ↔ 同桶模型：[SettlementMilitiaModel](../SettlementMilitiaModel) · [SettlementSecurityModel](../SettlementSecurityModel)
- ↔ 基类机制：[MBObjectBase](../MBObjectBase) · [MBObjectManager](../MBObjectManager)
- ↔ 战役入口：[Campaign](../../campaign/Campaign) · [CampaignGameStarter](../../campaign/CampaignGameStarter)

## 导航
- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
