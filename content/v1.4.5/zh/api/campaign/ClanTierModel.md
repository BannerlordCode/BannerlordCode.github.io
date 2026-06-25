---
title: "ClanTierModel"
description: "ClanTierModel 的自动生成类参考。"
---
# ClanTierModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanTierModel : MBGameModel<ClanTierModel>`
**Base:** `MBGameModel<ClanTierModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ClanTierModel.cs`

## 概述

`ClanTierModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ClanTierModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinClanTier` | `public abstract int MinClanTier { get; }` |
| `MaxClanTier` | `public abstract int MaxClanTier { get; }` |
| `MercenaryEligibleTier` | `public abstract int MercenaryEligibleTier { get; }` |
| `VassalEligibleTier` | `public abstract int VassalEligibleTier { get; }` |
| `BannerEligibleTier` | `public abstract int BannerEligibleTier { get; }` |
| `RebelClanStartingTier` | `public abstract int RebelClanStartingTier { get; }` |
| `CompanionToLordClanStartingTier` | `public abstract int CompanionToLordClanStartingTier { get; }` |

## 主要方法

### CalculateInitialRenown
`public abstract int CalculateInitialRenown(Clan clan)`

**用途 / Purpose:** 计算initial renown的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ClanTierModel 实例
ClanTierModel clanTierModel = ...;
var result = clanTierModel.CalculateInitialRenown(clan);
```

### CalculateInitialInfluence
`public abstract int CalculateInitialInfluence(Clan clan)`

**用途 / Purpose:** 计算initial influence的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ClanTierModel 实例
ClanTierModel clanTierModel = ...;
var result = clanTierModel.CalculateInitialInfluence(clan);
```

### CalculateTier
`public abstract int CalculateTier(Clan clan)`

**用途 / Purpose:** 计算tier的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ClanTierModel 实例
ClanTierModel clanTierModel = ...;
var result = clanTierModel.CalculateTier(clan);
```

### GetRequiredRenownForTier
`public abstract int GetRequiredRenownForTier(int tier)`

**用途 / Purpose:** 读取并返回当前对象中 required renown for tier 的结果。

```csharp
// 先通过子系统 API 拿到 ClanTierModel 实例
ClanTierModel clanTierModel = ...;
var result = clanTierModel.GetRequiredRenownForTier(0);
```

### GetPartyLimitForTier
`public abstract int GetPartyLimitForTier(Clan clan, int clanTierToCheck)`

**用途 / Purpose:** 读取并返回当前对象中 party limit for tier 的结果。

```csharp
// 先通过子系统 API 拿到 ClanTierModel 实例
ClanTierModel clanTierModel = ...;
var result = clanTierModel.GetPartyLimitForTier(clan, 0);
```

### GetCompanionLimit
`public abstract int GetCompanionLimit(Clan clan)`

**用途 / Purpose:** 读取并返回当前对象中 companion limit 的结果。

```csharp
// 先通过子系统 API 拿到 ClanTierModel 实例
ClanTierModel clanTierModel = ...;
var result = clanTierModel.GetCompanionLimit(clan);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ClanTierModel instance = ...;
```

## 参见

- [本区域目录](../)