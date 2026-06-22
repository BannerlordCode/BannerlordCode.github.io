<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultCrimeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCrimeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCrimeModel : CrimeModel`
**Base:** `CrimeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCrimeModel.cs`

## 概述

`DefaultCrimeModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultCrimeModel>(new MyDefaultCrimeModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `DeclareWarCrimeRatingThreshold` | `public override float DeclareWarCrimeRatingThreshold { get; }` |

## 主要方法

### DoesPlayerHaveAnyCrimeRating
```csharp
public override bool DoesPlayerHaveAnyCrimeRating(IFaction faction)
```

### IsPlayerCrimeRatingSevere
```csharp
public override bool IsPlayerCrimeRatingSevere(IFaction faction)
```

### IsPlayerCrimeRatingModerate
```csharp
public override bool IsPlayerCrimeRatingModerate(IFaction faction)
```

### IsPlayerCrimeRatingMild
```csharp
public override bool IsPlayerCrimeRatingMild(IFaction faction)
```

### GetCost
```csharp
public override float GetCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod, float minimumCrimeRating)
```

### GetDailyCrimeRatingChange
```csharp
public override ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)
```

### GetMaxCrimeRating
```csharp
public override float GetMaxCrimeRating()
```

### GetMinAcceptableCrimeRating
```csharp
public override float GetMinAcceptableCrimeRating(IFaction faction)
```

### GetCrimeRatingAfterPunishment
```csharp
public override float GetCrimeRatingAfterPunishment()
```

## 使用示例

```csharp
// DefaultCrimeModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultCrimeModel>(new MyDefaultCrimeModel());
```

## 参见

- [完整类目录](../catalog)