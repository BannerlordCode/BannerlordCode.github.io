<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementEconomyModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementEconomyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementEconomyModel : MBGameModel<SettlementEconomyModel>`
**Base:** `MBGameModel<SettlementEconomyModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementEconomyModel.cs`

## 概述

`SettlementEconomyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SettlementEconomyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEstimatedDemandForCategory
`public abstract float GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category)`

**用途 / Purpose:** 获取 `estimated demand for category` 的当前值。

### GetDailyDemandForCategory
`public abstract float GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity = 0)`

**用途 / Purpose:** 获取 `daily demand for category` 的当前值。

### GetDemandChangeFromValue
`public abstract float GetDemandChangeFromValue(float purchaseValue)`

**用途 / Purpose:** 获取 `demand change from value` 的当前值。

### GetTownGoldChange
`public abstract int GetTownGoldChange(Town town)`

**用途 / Purpose:** 获取 `town gold change` 的当前值。

### CalculateDailySettlementBudgetForItemCategory
`public abstract float CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category)`

**用途 / Purpose:** 处理 `calculate daily settlement budget for item category` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomSettlementEconomyModel();
```

## 参见

- [完整类目录](../catalog)