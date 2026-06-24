<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AllianceModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AllianceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AllianceModel : MBGameModel<AllianceModel>`
**Base:** `MBGameModel<AllianceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs`

## Overview

`AllianceModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `AllianceModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxDurationOfAlliance` | `public abstract CampaignTime MaxDurationOfAlliance { get; }` |
| `MaxDurationOfWarParticipation` | `public abstract CampaignTime MaxDurationOfWarParticipation { get; }` |
| `MaxNumberOfAlliances` | `public abstract int MaxNumberOfAlliances { get; }` |
| `DurationForOffers` | `public abstract CampaignTime DurationForOffers { get; }` |

## Key Methods

### GetCallToWarCost
`public abstract int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Gets the current value of `call to war cost`.

### GetScoreOfStartingAlliance
`public abstract ExplainedNumber GetScoreOfStartingAlliance(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, IFaction evaluatingFaction, out TextObject explanation, bool includeDescription = false)`

**Purpose:** Gets the current value of `score of starting alliance`.

### GetScoreOfCallingToWar
`public abstract float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**Purpose:** Gets the current value of `score of calling to war`.

### GetScoreOfJoiningWar
`public abstract float GetScoreOfJoiningWar(Kingdom offeringKingdom, Kingdom kingdomToOfferToJoinWarWith, Kingdom kingdomToOfferToJoinWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**Purpose:** Gets the current value of `score of joining war`.

### GetInfluenceCostOfProposingStartingAlliance
`public abstract int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)`

**Purpose:** Gets the current value of `influence cost of proposing starting alliance`.

### GetInfluenceCostOfCallingToWar
`public abstract int GetInfluenceCostOfCallingToWar(Clan proposingClan)`

**Purpose:** Gets the current value of `influence cost of calling to war`.

## Usage Example

```csharp
var implementation = new CustomAllianceModel();
```

## See Also

- [Complete Class Catalog](../catalog)