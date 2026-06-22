<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TraitLevelingHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TraitLevelingHelper

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class TraitLevelingHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/TraitLevelingHelper.cs`

## Overview

`TraitLevelingHelper` is a static utility class providing helper methods.

## Key Methods

### UpdateTraitXPAccordingToTraitLevels
```csharp
public static void UpdateTraitXPAccordingToTraitLevels()
```

### OnBattleWon
```csharp
public static void OnBattleWon(MapEvent mapEvent, float contribution)
```

### OnTroopsSacrificed
```csharp
public static void OnTroopsSacrificed()
```

### OnLordExecuted
```csharp
public static void OnLordExecuted()
```

### OnVillageRaided
```csharp
public static void OnVillageRaided()
```

### OnHostileAction
```csharp
public static void OnHostileAction(int amount)
```

### OnPartyTreatedWell
```csharp
public static void OnPartyTreatedWell()
```

### OnPartyStarved
```csharp
public static void OnPartyStarved()
```

### OnIssueFailed
```csharp
public static void OnIssueFailed(Hero targetHero, Tuple<TraitObject, int> effectedTraits)
```

### OnIssueSolvedThroughQuest
```csharp
public static void OnIssueSolvedThroughQuest(Hero targetHero, Tuple<TraitObject, int> effectedTraits)
```

### OnIssueSolvedThroughQuest
```csharp
public static void OnIssueSolvedThroughQuest(Hero targetHero, TraitObject trait, int xp)
```

### OnIssueSolvedThroughAlternativeSolution
```csharp
public static void OnIssueSolvedThroughAlternativeSolution(Hero targetHero, Tuple<TraitObject, int> effectedTraits)
```

### OnIssueSolvedThroughBetrayal
```csharp
public static void OnIssueSolvedThroughBetrayal(Hero targetHero, Tuple<TraitObject, int> effectedTraits)
```

### OnLordFreed
```csharp
public static void OnLordFreed(Hero targetHero)
```

### OnPersuasionDefection
```csharp
public static void OnPersuasionDefection(Hero targetHero)
```

### OnSiegeAftermathApplied
```csharp
public static void OnSiegeAftermathApplied(Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, TraitObject effectedTraits)
```

### OnIncidentResolved
```csharp
public static void OnIncidentResolved(TraitObject trait, int xpValue)
```

## Usage Example

```csharp
// Typical usage of TraitLevelingHelper (Helper)
TraitLevelingHelper./* static helper method */();;
```

## See Also

- [Complete Class Catalog](../catalog)