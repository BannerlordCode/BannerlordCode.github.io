<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AllianceModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AllianceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AllianceModel : MBGameModel<AllianceModel>`
**Base:** `MBGameModel<AllianceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs`

## Overview

`AllianceModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<AllianceModel>(new MyAllianceModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxDurationOfAlliance` | `public abstract CampaignTime MaxDurationOfAlliance { get; }` |
| `MaxDurationOfWarParticipation` | `public abstract CampaignTime MaxDurationOfWarParticipation { get; }` |
| `MaxNumberOfAlliances` | `public abstract int MaxNumberOfAlliances { get; }` |
| `DurationForOffers` | `public abstract CampaignTime DurationForOffers { get; }` |

## Key Methods

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

## Usage Example

```csharp
// Typical usage of AllianceModel (Model)
Game.Current.ReplaceModel<AllianceModel>(new MyAllianceModel());
```

## See Also

- [Complete Class Catalog](../catalog)