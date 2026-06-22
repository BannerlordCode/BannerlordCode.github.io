<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanTierModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanTierModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanTierModel : MBGameModel<ClanTierModel>`
**Base:** `MBGameModel<ClanTierModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanTierModel.cs`

## 概述

`ClanTierModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<ClanTierModel>(new MyClanTierModel())` 注册，以改变其计算逻辑。

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
```csharp
public abstract int CalculateInitialRenown(Clan clan)
```

### CalculateInitialInfluence
```csharp
public abstract int CalculateInitialInfluence(Clan clan)
```

### CalculateTier
```csharp
public abstract int CalculateTier(Clan clan)
```

### HasUpcomingTier
```csharp
public abstract ValueTuple<ExplainedNumber, bool> HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false)
```

### GetRequiredRenownForTier
```csharp
public abstract int GetRequiredRenownForTier(int tier)
```

### GetPartyLimitForTier
```csharp
public abstract int GetPartyLimitForTier(Clan clan, int clanTierToCheck)
```

### GetCompanionLimit
```csharp
public abstract int GetCompanionLimit(Clan clan)
```

## 使用示例

```csharp
// ClanTierModel (Model) 的典型用法
Game.Current.ReplaceModel<ClanTierModel>(new MyClanTierModel());
```

## 参见

- [完整类目录](../catalog)