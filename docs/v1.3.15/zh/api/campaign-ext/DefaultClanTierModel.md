<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultClanTierModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultClanTierModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanTierModel : ClanTierModel`
**Base:** `ClanTierModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanTierModel.cs`

## 概述

`DefaultClanTierModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultClanTierModel>(new MyDefaultClanTierModel())` 注册，以改变其计算逻辑。

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
```csharp
public override int CalculateInitialRenown(Clan clan)
```

### CalculateInitialInfluence
```csharp
public override int CalculateInitialInfluence(Clan clan)
```

### CalculateTier
```csharp
public override int CalculateTier(Clan clan)
```

### HasUpcomingTier
```csharp
public override ValueTuple<ExplainedNumber, bool> HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false)
```

### GetRequiredRenownForTier
```csharp
public override int GetRequiredRenownForTier(int tier)
```

### GetPartyLimitForTier
```csharp
public override int GetPartyLimitForTier(Clan clan, int clanTierToCheck)
```

### GetCompanionLimit
```csharp
public override int GetCompanionLimit(Clan clan)
```

## 使用示例

```csharp
// DefaultClanTierModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultClanTierModel>(new MyDefaultClanTierModel());
```

## 参见

- [完整类目录](../catalog)