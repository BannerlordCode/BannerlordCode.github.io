---
title: "TraitLevelingHelper"
description: "Auto-generated class reference for TraitLevelingHelper."
---
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

**Purpose:** Recalculates and stores the latest representation of `trait x p according to trait levels`.

```csharp
// Static call; no instance required
TraitLevelingHelper.UpdateTraitXPAccordingToTraitLevels();
```

### OnBattleWon
`public static void OnBattleWon(MapEvent mapEvent, float contribution)`

**Purpose:** Invoked when the `battle won` event is raised.

```csharp
// Static call; no instance required
TraitLevelingHelper.OnBattleWon(mapEvent, 0);
```

### OnTroopsSacrificed
`public static void OnTroopsSacrificed()`

**Purpose:** Invoked when the `troops sacrificed` event is raised.

```csharp
// Static call; no instance required
TraitLevelingHelper.OnTroopsSacrificed();
```

### OnLordExecuted
`public static void OnLordExecuted()`

**Purpose:** Invoked when the `lord executed` event is raised.

```csharp
// Static call; no instance required
TraitLevelingHelper.OnLordExecuted();
```

### OnVillageRaided
`public static void OnVillageRaided()`

**Purpose:** Invoked when the `village raided` event is raised.

```csharp
// Static call; no instance required
TraitLevelingHelper.OnVillageRaided();
```

### OnHostileAction
`public static void OnHostileAction(int amount)`

**Purpose:** Invoked when the `hostile action` event is raised.

```csharp
// Static call; no instance required
TraitLevelingHelper.OnHostileAction(0);
```

### OnPartyTreatedWell
`public static void OnPartyTreatedWell()`

**Purpose:** Invoked when the `party treated well` event is raised.

```csharp
// Static call; no instance required
TraitLevelingHelper.OnPartyTreatedWell();
```

### OnPartyStarved
`public static void OnPartyStarved()`

**Purpose:** Invoked when the `party starved` event is raised.

```csharp
// Static call; no instance required
TraitLevelingHelper.OnPartyStarved();
```

### OnIssueFailed
`public static void OnIssueFailed(Hero targetHero, Tuple<TraitObject, int> effectedTraits)`

**Purpose:** Invoked when the `issue failed` event is raised.

```csharp
// Static call; no instance required
TraitLevelingHelper.OnIssueFailed(targetHero, tuple<TraitObject, 0);
```

### OnIssueSolvedThroughQuest
`public static void OnIssueSolvedThroughQuest(Hero targetHero, Tuple<TraitObject, int> effectedTraits)`

**Purpose:** Invoked when the `issue solved through quest` event is raised.

```csharp
// Static call; no instance required
TraitLevelingHelper.OnIssueSolvedThroughQuest(targetHero, tuple<TraitObject, 0);
```

### OnIssueSolvedThroughQuest
`public static void OnIssueSolvedThroughQuest(Hero targetHero, TraitObject trait, int xp)`

**Purpose:** Invoked when the `issue solved through quest` event is raised.

```csharp
// Static call; no instance required
TraitLevelingHelper.OnIssueSolvedThroughQuest(targetHero, trait, 0);
```

### OnIssueSolvedThroughAlternativeSolution
`public static void OnIssueSolvedThroughAlternativeSolution(Hero targetHero, Tuple<TraitObject, int> effectedTraits)`

**Purpose:** Invoked when the `issue solved through alternative solution` event is raised.

```csharp
// Static call; no instance required
TraitLevelingHelper.OnIssueSolvedThroughAlternativeSolution(targetHero, tuple<TraitObject, 0);
```

### OnIssueSolvedThroughBetrayal
`public static void OnIssueSolvedThroughBetrayal(Hero targetHero, Tuple<TraitObject, int> effectedTraits)`

**Purpose:** Invoked when the `issue solved through betrayal` event is raised.

```csharp
// Static call; no instance required
TraitLevelingHelper.OnIssueSolvedThroughBetrayal(targetHero, tuple<TraitObject, 0);
```

### OnLordFreed
`public static void OnLordFreed(Hero targetHero)`

**Purpose:** Invoked when the `lord freed` event is raised.

```csharp
// Static call; no instance required
TraitLevelingHelper.OnLordFreed(targetHero);
```

### OnPersuasionDefection
`public static void OnPersuasionDefection(Hero targetHero)`

**Purpose:** Invoked when the `persuasion defection` event is raised.

```csharp
// Static call; no instance required
TraitLevelingHelper.OnPersuasionDefection(targetHero);
```

### OnSiegeAftermathApplied
`public static void OnSiegeAftermathApplied(Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, TraitObject effectedTraits)`

**Purpose:** Invoked when the `siege aftermath applied` event is raised.

```csharp
// Static call; no instance required
TraitLevelingHelper.OnSiegeAftermathApplied(settlement, aftermathType, effectedTraits);
```

### OnIncidentResolved
`public static void OnIncidentResolved(TraitObject trait, int xpValue)`

**Purpose:** Invoked when the `incident resolved` event is raised.

```csharp
// Static call; no instance required
TraitLevelingHelper.OnIncidentResolved(trait, 0);
```

## Usage Example

```csharp
TraitLevelingHelper.Initialize();
```

## See Also

- [Area Index](../)