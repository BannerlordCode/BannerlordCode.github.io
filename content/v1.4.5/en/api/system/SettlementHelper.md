---
title: "SettlementHelper"
description: "Auto-generated class reference for SettlementHelper."
---
# SettlementHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class SettlementHelper`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/SettlementHelper.cs`

## Overview

`SettlementHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `SettlementHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetRandomStuff
`public static string GetRandomStuff(bool isFemale)`

**Purpose:** **Purpose:** Reads and returns the random stuff value held by the this instance.

```csharp
// Static call; no instance required
SettlementHelper.GetRandomStuff(false);
```

### FindNearestSettlementToSettlement
`public static Settlement FindNearestSettlementToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** **Purpose:** Looks up the matching nearest settlement to settlement in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindNearestSettlementToSettlement(fromSettlement, navCapabilities, func<Settlement, false);
```

### FindNearestSettlementToMobileParty
`public static Settlement FindNearestSettlementToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** **Purpose:** Looks up the matching nearest settlement to mobile party in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindNearestSettlementToMobileParty(mobileParty, navCapabilities, func<Settlement, false);
```

### FindNearestSettlementToPoint
`public static Settlement FindNearestSettlementToPoint(in CampaignVec2 point, Func<Settlement, bool> condition = null)`

**Purpose:** **Purpose:** Looks up the matching nearest settlement to point in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindNearestSettlementToPoint(point, func<Settlement, false);
```

### FindNearestHideoutToSettlement
`public static Hideout FindNearestHideoutToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** **Purpose:** Looks up the matching nearest hideout to settlement in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindNearestHideoutToSettlement(fromSettlement, navCapabilities, func<Settlement, false);
```

### FindNearestHideoutToMobileParty
`public static Hideout FindNearestHideoutToMobileParty(MobileParty fromMobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** **Purpose:** Looks up the matching nearest hideout to mobile party in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindNearestHideoutToMobileParty(fromMobileParty, navCapabilities, func<Settlement, false);
```

### FindNearestTownToSettlement
`public static Town FindNearestTownToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** **Purpose:** Looks up the matching nearest town to settlement in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindNearestTownToSettlement(fromSettlement, navCapabilities, func<Settlement, false);
```

### FindNearestTownToMobileParty
`public static Town FindNearestTownToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** **Purpose:** Looks up the matching nearest town to mobile party in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindNearestTownToMobileParty(mobileParty, navCapabilities, func<Settlement, false);
```

### FindNextSettlementAroundMobileParty
`public static int FindNextSettlementAroundMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, float maxDistance, int lastIndex, Func<Settlement, bool> condition = null)`

**Purpose:** **Purpose:** Looks up the matching next settlement around mobile party in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindNextSettlementAroundMobileParty(mobileParty, navCapabilities, 0, 0, func<Settlement, false);
```

### FindNearestCastleToSettlement
`public static Settlement FindNearestCastleToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** **Purpose:** Looks up the matching nearest castle to settlement in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindNearestCastleToSettlement(fromSettlement, navCapabilities, func<Settlement, false);
```

### FindNearestCastleToMobileParty
`public static Settlement FindNearestCastleToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** **Purpose:** Looks up the matching nearest castle to mobile party in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindNearestCastleToMobileParty(mobileParty, navCapabilities, func<Settlement, false);
```

### FindNearestFortificationToSettlement
`public static Settlement FindNearestFortificationToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** **Purpose:** Looks up the matching nearest fortification to settlement in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindNearestFortificationToSettlement(fromSettlement, navCapabilities, func<Settlement, false);
```

### FindNearestFortificationToMobileParty
`public static Settlement FindNearestFortificationToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** **Purpose:** Looks up the matching nearest fortification to mobile party in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindNearestFortificationToMobileParty(mobileParty, navCapabilities, func<Settlement, false);
```

### FindFurthestFortificationToSettlement
`public static Settlement FindFurthestFortificationToSettlement(MBReadOnlyList<Town> candidates, MobileParty.NavigationType navCapabilities, Settlement fromSettlement, out float furthestDistance)`

**Purpose:** **Purpose:** Looks up the matching furthest fortification to settlement in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindFurthestFortificationToSettlement(candidates, navCapabilities, fromSettlement, furthestDistance);
```

### FindNearestVillageToSettlement
`public static Village FindNearestVillageToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** **Purpose:** Looks up the matching nearest village to settlement in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindNearestVillageToSettlement(fromSettlement, navCapabilities, func<Settlement, false);
```

### FindNearestVillageToMobileParty
`public static Village FindNearestVillageToMobileParty(MobileParty fromParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** **Purpose:** Looks up the matching nearest village to mobile party in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindNearestVillageToMobileParty(fromParty, navCapabilities, func<Settlement, false);
```

### FindRandomSettlement
`public static Settlement FindRandomSettlement(Func<Settlement, bool> condition = null)`

**Purpose:** **Purpose:** Looks up the matching random settlement in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindRandomSettlement(func<Settlement, false);
```

### FindRandomHideout
`public static Settlement FindRandomHideout(Func<Settlement, bool> condition = null)`

**Purpose:** **Purpose:** Looks up the matching random hideout in the current collection or scope.

```csharp
// Static call; no instance required
SettlementHelper.FindRandomHideout(func<Settlement, false);
```

### TakeEnemyVillagersOutsideSettlements
`public static void TakeEnemyVillagersOutsideSettlements(Settlement settlementWhichChangedFaction)`

**Purpose:** **Purpose:** Executes the TakeEnemyVillagersOutsideSettlements logic.

```csharp
// Static call; no instance required
SettlementHelper.TakeEnemyVillagersOutsideSettlements(settlementWhichChangedFaction);
```

### GetRandomTown
`public static Settlement GetRandomTown(Clan fromFaction = null)`

**Purpose:** **Purpose:** Reads and returns the random town value held by the this instance.

```csharp
// Static call; no instance required
SettlementHelper.GetRandomTown(null);
```

### GetBestSettlementToSpawnAround
`public static Settlement GetBestSettlementToSpawnAround(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the best settlement to spawn around value held by the this instance.

```csharp
// Static call; no instance required
SettlementHelper.GetBestSettlementToSpawnAround(hero);
```

### GetAllHeroesOfSettlement
`public static IEnumerable<Hero> GetAllHeroesOfSettlement(Settlement settlement, bool includePrisoners)`

**Purpose:** **Purpose:** Reads and returns the all heroes of settlement value held by the this instance.

```csharp
// Static call; no instance required
SettlementHelper.GetAllHeroesOfSettlement(settlement, false);
```

### IsGarrisonStarving
`public static bool IsGarrisonStarving(Settlement settlement)`

**Purpose:** **Purpose:** Determines whether the this instance is in the garrison starving state or condition.

```csharp
// Static call; no instance required
SettlementHelper.IsGarrisonStarving(settlement);
```

### SpawnNotablesIfNeeded
`public static void SpawnNotablesIfNeeded(Settlement settlement)`

**Purpose:** **Purpose:** Executes the SpawnNotablesIfNeeded logic.

```csharp
// Static call; no instance required
SettlementHelper.SpawnNotablesIfNeeded(settlement);
```

### GetGarrisonChangeExplainedNumber
`public static ExplainedNumber GetGarrisonChangeExplainedNumber(Town town)`

**Purpose:** **Purpose:** Reads and returns the garrison change explained number value held by the this instance.

```csharp
// Static call; no instance required
SettlementHelper.GetGarrisonChangeExplainedNumber(town);
```

### GetNeighborScoreForConsideringClan
`public static float GetNeighborScoreForConsideringClan(Settlement settlement, Clan consideringClan)`

**Purpose:** **Purpose:** Reads and returns the neighbor score for considering clan value held by the this instance.

```csharp
// Static call; no instance required
SettlementHelper.GetNeighborScoreForConsideringClan(settlement, consideringClan);
```

## Usage Example

```csharp
SettlementHelper.Initialize();
```

## See Also

- [Area Index](../)