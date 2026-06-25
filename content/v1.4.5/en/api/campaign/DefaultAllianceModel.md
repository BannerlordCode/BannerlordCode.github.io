---
title: "DefaultAllianceModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultAllianceModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultAllianceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAllianceModel : AllianceModel`
**Base:** `AllianceModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultAllianceModel.cs`

## Overview

`DefaultAllianceModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultAllianceModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCallToWarCost
`public override int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Gets the current value of `call to war cost`.

### GetScoreOfStartingAlliance
`public override ExplainedNumber GetScoreOfStartingAlliance(Kingdom querierKingdom, Kingdom queriedKingdom, out TextObject explanationText, bool includeDescription = false)`

**Purpose:** Gets the current value of `score of starting alliance`.

### GetSupportScoreOfStartingAllianceForClan
`public override float GetSupportScoreOfStartingAllianceForClan(Kingdom querierKingdom, Kingdom queriedKingdom, Clan evaluatingClan, out TextObject explanationText, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `support score of starting alliance for clan`.

### CanMakeAlliance
`public override bool CanMakeAlliance(Kingdom kingdom, Kingdom targetKingdom, IFaction evaluatingFaction, out TextObject reason, bool includeReason = false)`

**Purpose:** Checks whether the current object can `make alliance`.

### GetInfluenceCostOfProposingStartingAlliance
`public override int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)`

**Purpose:** Gets the current value of `influence cost of proposing starting alliance`.

### GetScoreOfCallingToWar
`public override float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**Purpose:** Gets the current value of `score of calling to war`.

### GetScoreOfJoiningWar
`public override float GetScoreOfJoiningWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**Purpose:** Gets the current value of `score of joining war`.

### GetInfluenceCostOfCallingToWar
`public override int GetInfluenceCostOfCallingToWar(Clan proposingClan)`

**Purpose:** Gets the current value of `influence cost of calling to war`.

### GetAllianceFactorForDeclaringWar
`public override float GetAllianceFactorForDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar)`

**Purpose:** Gets the current value of `alliance factor for declaring war`.

### GetAllianceFactorForDeclaringPeace
`public override float GetAllianceFactorForDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**Purpose:** Gets the current value of `alliance factor for declaring peace`.

### GetProposerClanForAllianceDecision
`public override Clan GetProposerClanForAllianceDecision(Kingdom proposerKingdom, Kingdom proposedKingdom)`

**Purpose:** Gets the current value of `proposer clan for alliance decision`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultAllianceModel>(new MyDefaultAllianceModel());
```

## See Also

- [Complete Class Catalog](../catalog)