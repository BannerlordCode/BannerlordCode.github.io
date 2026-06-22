<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CrimeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CrimeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CrimeModel : MBGameModel<CrimeModel>`
**Base:** `MBGameModel<CrimeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs`

## 概述

`CrimeModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CrimeModel>(new MyCrimeModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `DeclareWarCrimeRatingThreshold` | `public abstract float DeclareWarCrimeRatingThreshold { get; }` |

## 主要方法

### GetMaxCrimeRating
```csharp
public abstract float GetMaxCrimeRating()
```

### GetMinAcceptableCrimeRating
```csharp
public abstract float GetMinAcceptableCrimeRating(IFaction faction)
```

### GetCrimeRatingAfterPunishment
```csharp
public abstract float GetCrimeRatingAfterPunishment()
```

### DoesPlayerHaveAnyCrimeRating
```csharp
public abstract bool DoesPlayerHaveAnyCrimeRating(IFaction faction)
```

### IsPlayerCrimeRatingSevere
```csharp
public abstract bool IsPlayerCrimeRatingSevere(IFaction faction)
```

### IsPlayerCrimeRatingModerate
```csharp
public abstract bool IsPlayerCrimeRatingModerate(IFaction faction)
```

### IsPlayerCrimeRatingMild
```csharp
public abstract bool IsPlayerCrimeRatingMild(IFaction faction)
```

### GetCost
```csharp
public abstract float GetCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod, float minimumCrimeRating)
```

### GetDailyCrimeRatingChange
```csharp
public abstract ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)
```

## 使用示例

```csharp
// CrimeModel (Model) 的典型用法
Game.Current.ReplaceModel<CrimeModel>(new MyCrimeModel());
```

## 参见

- [完整类目录](../catalog)