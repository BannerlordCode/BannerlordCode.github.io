<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanTierModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ClanTierModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanTierModel : MBGameModel<ClanTierModel>`
**Base:** `MBGameModel<ClanTierModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanTierModel.cs`

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

**用途 / Purpose:** 处理 `calculate initial renown` 相关逻辑。

### CalculateInitialInfluence
`public abstract int CalculateInitialInfluence(Clan clan)`

**用途 / Purpose:** 处理 `calculate initial influence` 相关逻辑。

### CalculateTier
`public abstract int CalculateTier(Clan clan)`

**用途 / Purpose:** 处理 `calculate tier` 相关逻辑。

### HasUpcomingTier
`public abstract ValueTuple<ExplainedNumber, bool> HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `upcoming tier`。

### GetRequiredRenownForTier
`public abstract int GetRequiredRenownForTier(int tier)`

**用途 / Purpose:** 获取 `required renown for tier` 的当前值。

### GetPartyLimitForTier
`public abstract int GetPartyLimitForTier(Clan clan, int clanTierToCheck)`

**用途 / Purpose:** 获取 `party limit for tier` 的当前值。

### GetCompanionLimit
`public abstract int GetCompanionLimit(Clan clan)`

**用途 / Purpose:** 获取 `companion limit` 的当前值。

## 使用示例

```csharp
var implementation = new CustomClanTierModel();
```

## 参见

- [完整类目录](../catalog)