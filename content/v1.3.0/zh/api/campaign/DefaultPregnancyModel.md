---
title: "DefaultPregnancyModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPregnancyModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPregnancyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPregnancyModel : PregnancyModel`
**Base:** `PregnancyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPregnancyModel.cs`

## 概述

`DefaultPregnancyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPregnancyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PregnancyDurationInDays` | `public override float PregnancyDurationInDays { get; }` |
| `MaternalMortalityProbabilityInLabor` | `public override float MaternalMortalityProbabilityInLabor { get; }` |
| `StillbirthProbability` | `public override float StillbirthProbability { get; }` |
| `DeliveringFemaleOffspringProbability` | `public override float DeliveringFemaleOffspringProbability { get; }` |
| `DeliveringTwinsProbability` | `public override float DeliveringTwinsProbability { get; }` |

## 主要方法

### GetDailyChanceOfPregnancyForHero
`public override float GetDailyChanceOfPregnancyForHero(Hero hero)`

**用途 / Purpose:** 获取 `daily chance of pregnancy for hero` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPregnancyModel>(new MyDefaultPregnancyModel());
```

## 参见

- [完整类目录](../catalog)