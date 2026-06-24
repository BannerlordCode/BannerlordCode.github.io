<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CrimeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CrimeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CrimeModel : MBGameModel<CrimeModel>`
**Base:** `MBGameModel<CrimeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs`

## 概述

`CrimeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CrimeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `DeclareWarCrimeRatingThreshold` | `public abstract float DeclareWarCrimeRatingThreshold { get; }` |

## 主要方法

### GetMaxCrimeRating
`public abstract float GetMaxCrimeRating()`

**用途 / Purpose:** 获取 `max crime rating` 的当前值。

### GetMinAcceptableCrimeRating
`public abstract float GetMinAcceptableCrimeRating(IFaction faction)`

**用途 / Purpose:** 获取 `min acceptable crime rating` 的当前值。

### GetCrimeRatingAfterPunishment
`public abstract float GetCrimeRatingAfterPunishment()`

**用途 / Purpose:** 获取 `crime rating after punishment` 的当前值。

### DoesPlayerHaveAnyCrimeRating
`public abstract bool DoesPlayerHaveAnyCrimeRating(IFaction faction)`

**用途 / Purpose:** 处理 `does player have any crime rating` 相关逻辑。

### IsPlayerCrimeRatingSevere
`public abstract bool IsPlayerCrimeRatingSevere(IFaction faction)`

**用途 / Purpose:** 处理 `is player crime rating severe` 相关逻辑。

### IsPlayerCrimeRatingModerate
`public abstract bool IsPlayerCrimeRatingModerate(IFaction faction)`

**用途 / Purpose:** 处理 `is player crime rating moderate` 相关逻辑。

### IsPlayerCrimeRatingMild
`public abstract bool IsPlayerCrimeRatingMild(IFaction faction)`

**用途 / Purpose:** 处理 `is player crime rating mild` 相关逻辑。

### GetCost
`public abstract float GetCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod, float minimumCrimeRating)`

**用途 / Purpose:** 获取 `cost` 的当前值。

### GetDailyCrimeRatingChange
`public abstract ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)`

**用途 / Purpose:** 获取 `daily crime rating change` 的当前值。

## 使用示例

```csharp
var implementation = new CustomCrimeModel();
```

## 参见

- [完整类目录](../catalog)