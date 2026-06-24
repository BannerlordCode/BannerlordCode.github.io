<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementTaxModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSettlementTaxModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementTaxModel : SettlementTaxModel`
**Base:** `SettlementTaxModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementTaxModel.cs`

## 概述

`DefaultSettlementTaxModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementTaxModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTownTaxRatio
`public override float GetTownTaxRatio(Town town)`

**用途 / Purpose:** 获取 `town tax ratio` 的当前值。

### GetVillageTaxRatio
`public override float GetVillageTaxRatio(Village village)`

**用途 / Purpose:** 获取 `village tax ratio` 的当前值。

### GetTownCommissionChangeBasedOnSecurity
`public override float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)`

**用途 / Purpose:** 获取 `town commission change based on security` 的当前值。

### CalculateTownTax
`public override ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate town tax` 相关逻辑。

### CalculateVillageTaxFromIncome
`public override int CalculateVillageTaxFromIncome(Village village, int marketIncome)`

**用途 / Purpose:** 处理 `calculate village tax from income` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSettlementTaxModel>(new MyDefaultSettlementTaxModel());
```

## 参见

- [完整类目录](../catalog)