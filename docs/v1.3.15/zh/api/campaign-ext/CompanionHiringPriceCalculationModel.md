<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CompanionHiringPriceCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CompanionHiringPriceCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CompanionHiringPriceCalculationModel : MBGameModel<CompanionHiringPriceCalculationModel>`
**Base:** `MBGameModel<CompanionHiringPriceCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CompanionHiringPriceCalculationModel.cs`

## 概述

`CompanionHiringPriceCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CompanionHiringPriceCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCompanionHiringPrice
`public abstract int GetCompanionHiringPrice(Hero companion)`

**用途 / Purpose:** 获取 `companion hiring price` 的当前值。

## 使用示例

```csharp
var implementation = new CustomCompanionHiringPriceCalculationModel();
```

## 参见

- [完整类目录](../catalog)