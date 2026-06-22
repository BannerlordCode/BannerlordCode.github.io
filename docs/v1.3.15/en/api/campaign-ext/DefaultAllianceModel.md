<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultAllianceModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultAllianceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAllianceModel : AllianceModel`
**Base:** `AllianceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs`

## Overview

`DefaultAllianceModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultAllianceModel>(new MyDefaultAllianceModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxDurationOfAlliance` | `public override CampaignTime MaxDurationOfAlliance { get; }` |
| `MaxDurationOfWarParticipation` | `public override CampaignTime MaxDurationOfWarParticipation { get; }` |
| `MaxNumberOfAlliances` | `public override int MaxNumberOfAlliances { get; }` |
| `DurationForOffers` | `public override CampaignTime DurationForOffers { get; }` |

## Key Methods

### GetCallToWarCost
```csharp
public override int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)
```

### GetScoreOfStartingAlliance
```csharp
public override ExplainedNumber GetScoreOfStartingAlliance(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, IFaction evaluatingFaction, out TextObject explanationText, bool includeDescription = false)
```

### GetInfluenceCostOfProposingStartingAlliance
```csharp
public override int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)
```

### GetScoreOfCallingToWar
```csharp
public override float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)
```

### GetScoreOfJoiningWar
```csharp
public override float GetScoreOfJoiningWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)
```

### GetInfluenceCostOfCallingToWar
```csharp
public override int GetInfluenceCostOfCallingToWar(Clan proposingClan)
```

## Usage Example

```csharp
// Typical usage of DefaultAllianceModel (Model)
Game.Current.ReplaceModel<DefaultAllianceModel>(new MyDefaultAllianceModel());
```

## See Also

- [Complete Class Catalog](../catalog)