<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultClanTierModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `calculate initial renown` 相关逻辑。

### CalculateInitialInfluence
`public override int CalculateInitialInfluence(Clan clan)`

**用途 / Purpose:** 处理 `calculate initial influence` 相关逻辑。

### CalculateTier
`public override int CalculateTier(Clan clan)`

**用途 / Purpose:** 处理 `calculate tier` 相关逻辑。

### HasUpcomingTier
`public override ValueTuple<ExplainedNumber, bool> HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `upcoming tier`。

### GetRequiredRenownForTier
`public override int GetRequiredRenownForTier(int tier)`

**用途 / Purpose:** 获取 `required renown for tier` 的当前值。

### GetPartyLimitForTier
`public override int GetPartyLimitForTier(Clan clan, int clanTierToCheck)`

**用途 / Purpose:** 获取 `party limit for tier` 的当前值。

### GetCompanionLimit
`public override int GetCompanionLimit(Clan clan)`

**用途 / Purpose:** 获取 `companion limit` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultClanTierModel>(new MyDefaultClanTierModel());
```

## 参见

- [完整类目录](../catalog)