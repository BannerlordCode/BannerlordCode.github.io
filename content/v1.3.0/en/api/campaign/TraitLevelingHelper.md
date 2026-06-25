---
title: "TraitLevelingHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TraitLevelingHelper`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TraitLevelingHelper

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class TraitLevelingHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/TraitLevelingHelper.cs`

## Overview

`TraitLevelingHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `TraitLevelingHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### UpdateTraitXPAccordingToTraitLevels
`public static void UpdateTraitXPAccordingToTraitLevels()`

**Purpose:** Updates the state or data of `trait x p according to trait levels`.

### OnBattleWon
`public static void OnBattleWon(MapEvent mapEvent, float contribution)`

**Purpose:** Called when the `battle won` event is raised.

### OnTroopsSacrificed
`public static void OnTroopsSacrificed()`

**Purpose:** Called when the `troops sacrificed` event is raised.

### OnLordExecuted
`public static void OnLordExecuted()`

**Purpose:** Called when the `lord executed` event is raised.

### OnVillageRaided
`public static void OnVillageRaided()`

**Purpose:** Called when the `village raided` event is raised.

### OnHostileAction
`public static void OnHostileAction(int amount)`

**Purpose:** Called when the `hostile action` event is raised.

### OnPartyTreatedWell
`public static void OnPartyTreatedWell()`

**Purpose:** Called when the `party treated well` event is raised.

### OnPartyStarved
`public static void OnPartyStarved()`

**Purpose:** Called when the `party starved` event is raised.

### OnIssueFailed
`public static void OnIssueFailed(Hero targetHero, Tuple<TraitObject, int> effectedTraits)`

**Purpose:** Called when the `issue failed` event is raised.

### OnIssueSolvedThroughQuest
`public static void OnIssueSolvedThroughQuest(Hero targetHero, Tuple<TraitObject, int> effectedTraits)`

**Purpose:** Called when the `issue solved through quest` event is raised.

### OnIssueSolvedThroughQuest
`public static void OnIssueSolvedThroughQuest(Hero targetHero, TraitObject trait, int xp)`

**Purpose:** Called when the `issue solved through quest` event is raised.

### OnIssueSolvedThroughAlternativeSolution
`public static void OnIssueSolvedThroughAlternativeSolution(Hero targetHero, Tuple<TraitObject, int> effectedTraits)`

**Purpose:** Called when the `issue solved through alternative solution` event is raised.

### OnIssueSolvedThroughBetrayal
`public static void OnIssueSolvedThroughBetrayal(Hero targetHero, Tuple<TraitObject, int> effectedTraits)`

**Purpose:** Called when the `issue solved through betrayal` event is raised.

### OnLordFreed
`public static void OnLordFreed(Hero targetHero)`

**Purpose:** Called when the `lord freed` event is raised.

### OnPersuasionDefection
`public static void OnPersuasionDefection(Hero targetHero)`

**Purpose:** Called when the `persuasion defection` event is raised.

### OnSiegeAftermathApplied
`public static void OnSiegeAftermathApplied(Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, TraitObject effectedTraits)`

**Purpose:** Called when the `siege aftermath applied` event is raised.

### OnIncidentResolved
`public static void OnIncidentResolved(TraitObject trait, int xpValue)`

**Purpose:** Called when the `incident resolved` event is raised.

## Usage Example

```csharp
TraitLevelingHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)