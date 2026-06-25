---
title: "DefaultAgeModel"
description: "DefaultAgeModel 的自动生成类参考。"
---
# DefaultAgeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAgeModel : AgeModel`
**Base:** `AgeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs`

## 概述

`DefaultAgeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultAgeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BecomeInfantAge` | `public override int BecomeInfantAge { get; }` |
| `BecomeChildAge` | `public override int BecomeChildAge { get; }` |
| `BecomeTeenagerAge` | `public override int BecomeTeenagerAge { get; }` |
| `HeroComesOfAge` | `public override int HeroComesOfAge { get; }` |
| `MiddleAdultHoodAge` | `public override int MiddleAdultHoodAge { get; }` |
| `BecomeOldAge` | `public override int BecomeOldAge { get; }` |
| `MaxAge` | `public override int MaxAge { get; }` |

## 主要方法

### GetAgeLimitForLocation
`public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")`

**用途 / Purpose:** 读取并返回当前对象中 age limit for location 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAgeModel 实例
DefaultAgeModel defaultAgeModel = ...;
defaultAgeModel.GetAgeLimitForLocation(character, minimumAge, maximumAge, "example");
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultAgeModel>(new MyDefaultAgeModel());
```

## 参见

- [本区域目录](../)