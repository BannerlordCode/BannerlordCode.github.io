---
title: "DefaultClanTierModel"
description: "DefaultClanTierModel 的自动生成类参考。"
---
# DefaultClanTierModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanTierModel : ClanTierModel`
**Base:** `ClanTierModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanTierModel.cs`

## 概述

`DefaultClanTierModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultClanTierModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinClanTier` | `public override int MinClanTier { get; }` |
| `MaxClanTier` | `public override int MaxClanTier { get; }` |
| `MercenaryEligibleTier` | `public override int MercenaryEligibleTier { get; }` |
| `VassalEligibleTier` | `public override int VassalEligibleTier { get; }` |
| `BannerEligibleTier` | `public override int BannerEligibleTier { get; }` |
| `RebelClanStartingTier` | `public override int RebelClanStartingTier { get; }` |
| `CompanionToLordClanStartingTier` | `public override int CompanionToLordClanStartingTier { get; }` |

## 主要方法

### CalculateInitialRenown
`public override int CalculateInitialRenown(Clan clan)`

**用途 / Purpose:** 计算initial renown的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanTierModel 实例
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.CalculateInitialRenown(clan);
```

### CalculateInitialInfluence
`public override int CalculateInitialInfluence(Clan clan)`

**用途 / Purpose:** 计算initial influence的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanTierModel 实例
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.CalculateInitialInfluence(clan);
```

### CalculateTier
`public override int CalculateTier(Clan clan)`

**用途 / Purpose:** 计算tier的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanTierModel 实例
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.CalculateTier(clan);
```

### HasUpcomingTier
`public override ValueTuple<ExplainedNumber, bool> HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false)`

**用途 / Purpose:** 判断当前对象是否已经持有 upcoming tier。

```csharp
// 先通过子系统 API 拿到 DefaultClanTierModel 实例
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.HasUpcomingTier(clan, extraExplanation, false);
```

### GetRequiredRenownForTier
`public override int GetRequiredRenownForTier(int tier)`

**用途 / Purpose:** 读取并返回当前对象中 required renown for tier 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanTierModel 实例
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.GetRequiredRenownForTier(0);
```

### GetPartyLimitForTier
`public override int GetPartyLimitForTier(Clan clan, int clanTierToCheck)`

**用途 / Purpose:** 读取并返回当前对象中 party limit for tier 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanTierModel 实例
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.GetPartyLimitForTier(clan, 0);
```

### GetCompanionLimit
`public override int GetCompanionLimit(Clan clan)`

**用途 / Purpose:** 读取并返回当前对象中 companion limit 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanTierModel 实例
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.GetCompanionLimit(clan);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultClanTierModel>(new MyDefaultClanTierModel());
```

## 参见

- [本区域目录](../)