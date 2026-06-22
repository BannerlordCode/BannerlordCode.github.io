<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AllianceModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AllianceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AllianceModel : MBGameModel<AllianceModel>`
**Base:** `MBGameModel<AllianceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs`

## 概述

`AllianceModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<AllianceModel>(new MyAllianceModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxDurationOfAlliance` | `public abstract CampaignTime MaxDurationOfAlliance { get; }` |
| `MaxDurationOfWarParticipation` | `public abstract CampaignTime MaxDurationOfWarParticipation { get; }` |
| `MaxNumberOfAlliances` | `public abstract int MaxNumberOfAlliances { get; }` |
| `DurationForOffers` | `public abstract CampaignTime DurationForOffers { get; }` |

## 主要方法

### GetCallToWarCost
```csharp
public abstract int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)
```

### GetScoreOfStartingAlliance
```csharp
public abstract ExplainedNumber GetScoreOfStartingAlliance(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, IFaction evaluatingFaction, out TextObject explanation, bool includeDescription = false)
```

### GetScoreOfCallingToWar
```csharp
public abstract float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)
```

### GetScoreOfJoiningWar
```csharp
public abstract float GetScoreOfJoiningWar(Kingdom offeringKingdom, Kingdom kingdomToOfferToJoinWarWith, Kingdom kingdomToOfferToJoinWarAgainst, IFaction evaluatingFaction, out TextObject reason)
```

### GetInfluenceCostOfProposingStartingAlliance
```csharp
public abstract int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)
```

### GetInfluenceCostOfCallingToWar
```csharp
public abstract int GetInfluenceCostOfCallingToWar(Clan proposingClan)
```

## 使用示例

```csharp
// AllianceModel (Model) 的典型用法
Game.Current.ReplaceModel<AllianceModel>(new MyAllianceModel());
```

## 参见

- [完整类目录](../catalog)