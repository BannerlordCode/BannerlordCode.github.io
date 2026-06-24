<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroDeathProbabilityCalculationModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HeroDeathProbabilityCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeroDeathProbabilityCalculationModel : MBGameModel<HeroDeathProbabilityCalculationModel>`
**Base:** `MBGameModel<HeroDeathProbabilityCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroDeathProbabilityCalculationModel.cs`

## 概述

`HeroDeathProbabilityCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `HeroDeathProbabilityCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateHeroDeathProbability
`public abstract float CalculateHeroDeathProbability(Hero hero)`

**用途 / Purpose:** 处理 `calculate hero death probability` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomHeroDeathProbabilityCalculationModel();
```

## 参见

- [完整类目录](../catalog)