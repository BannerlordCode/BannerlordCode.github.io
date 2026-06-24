<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultCrimeModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultCrimeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCrimeModel : CrimeModel`
**Base:** `CrimeModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultCrimeModel.cs`

## 概述

`DefaultCrimeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultCrimeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### DoesPlayerHaveAnyCrimeRating
`public override bool DoesPlayerHaveAnyCrimeRating(IFaction faction)`

**用途 / Purpose:** 处理 `does player have any crime rating` 相关逻辑。

### IsPlayerCrimeRatingSevere
`public override bool IsPlayerCrimeRatingSevere(IFaction faction)`

**用途 / Purpose:** 处理 `is player crime rating severe` 相关逻辑。

### IsPlayerCrimeRatingModerate
`public override bool IsPlayerCrimeRatingModerate(IFaction faction)`

**用途 / Purpose:** 处理 `is player crime rating moderate` 相关逻辑。

### IsPlayerCrimeRatingMild
`public override bool IsPlayerCrimeRatingMild(IFaction faction)`

**用途 / Purpose:** 处理 `is player crime rating mild` 相关逻辑。

### GetCost
`public override float GetCost(IFaction faction, PaymentMethod paymentMethod, float minimumCrimeRating)`

**用途 / Purpose:** 获取 `cost` 的当前值。

### GetDailyCrimeRatingChange
`public override ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)`

**用途 / Purpose:** 获取 `daily crime rating change` 的当前值。

### GetMaxCrimeRating
`public override float GetMaxCrimeRating()`

**用途 / Purpose:** 获取 `max crime rating` 的当前值。

### GetMinAcceptableCrimeRating
`public override float GetMinAcceptableCrimeRating(IFaction faction)`

**用途 / Purpose:** 获取 `min acceptable crime rating` 的当前值。

### GetCrimeRatingAfterPunishment
`public override float GetCrimeRatingAfterPunishment()`

**用途 / Purpose:** 获取 `crime rating after punishment` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultCrimeModel>(new MyDefaultCrimeModel());
```

## 参见

- [完整类目录](../catalog)