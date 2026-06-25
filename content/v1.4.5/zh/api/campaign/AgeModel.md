---
title: "AgeModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgeModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AgeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AgeModel : MBGameModel<AgeModel>`
**Base:** `MBGameModel<AgeModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AgeModel.cs`

## 概述

`AgeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `AgeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BecomeInfantAge` | `public abstract int BecomeInfantAge { get; }` |
| `BecomeChildAge` | `public abstract int BecomeChildAge { get; }` |
| `BecomeTeenagerAge` | `public abstract int BecomeTeenagerAge { get; }` |
| `HeroComesOfAge` | `public abstract int HeroComesOfAge { get; }` |
| `BecomeOldAge` | `public abstract int BecomeOldAge { get; }` |
| `MiddleAdultHoodAge` | `public abstract int MiddleAdultHoodAge { get; }` |
| `MaxAge` | `public abstract int MaxAge { get; }` |

## 主要方法

### GetAgeLimitForLocation
`public abstract void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")`

**用途 / Purpose:** 获取 `age limit for location` 的当前值。

## 使用示例

```csharp
var implementation = new CustomAgeModel();
```

## 参见

- [完整类目录](../catalog)