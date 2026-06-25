---
title: "SettlementHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class SettlementHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/SettlementHelper.cs`

## Overview

`SettlementHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `SettlementHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetRandomStuff
`public static string GetRandomStuff(bool isFemale)`

**Purpose:** Gets the current value of `random stuff`.

### FindNearestSettlementToSettlement
`public static Settlement FindNearestSettlementToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** Handles logic related to `find nearest settlement to settlement`.

### FindNearestSettlementToMobileParty
`public static Settlement FindNearestSettlementToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** Handles logic related to `find nearest settlement to mobile party`.

### FindNearestSettlementToPoint
`public static Settlement FindNearestSettlementToPoint(in CampaignVec2 point, Func<Settlement, bool> condition = null)`

**Purpose:** Handles logic related to `find nearest settlement to point`.

### FindNearestHideoutToSettlement
`public static Hideout FindNearestHideoutToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** Handles logic related to `find nearest hideout to settlement`.

### FindNearestHideoutToMobileParty
`public static Hideout FindNearestHideoutToMobileParty(MobileParty fromMobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** Handles logic related to `find nearest hideout to mobile party`.

### FindNearestTownToSettlement
`public static Town FindNearestTownToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** Handles logic related to `find nearest town to settlement`.

### FindNearestTownToMobileParty
`public static Town FindNearestTownToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** Handles logic related to `find nearest town to mobile party`.

### FindNextSettlementAroundMobileParty
`public static int FindNextSettlementAroundMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, float maxDistance, int lastIndex, Func<Settlement, bool> condition = null)`

**Purpose:** Handles logic related to `find next settlement around mobile party`.

### FindNearestCastleToSettlement
`public static Settlement FindNearestCastleToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** Handles logic related to `find nearest castle to settlement`.

### FindNearestCastleToMobileParty
`public static Settlement FindNearestCastleToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** Handles logic related to `find nearest castle to mobile party`.

### FindNearestFortificationToSettlement
`public static Settlement FindNearestFortificationToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** Handles logic related to `find nearest fortification to settlement`.

### FindNearestFortificationToMobileParty
`public static Settlement FindNearestFortificationToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** Handles logic related to `find nearest fortification to mobile party`.

### FindFurthestFortificationToSettlement
`public static Settlement FindFurthestFortificationToSettlement(MBReadOnlyList<Town> candidates, MobileParty.NavigationType navCapabilities, Settlement fromSettlement, out float furthestDistance)`

**Purpose:** Handles logic related to `find furthest fortification to settlement`.

### FindNearestVillageToSettlement
`public static Village FindNearestVillageToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** Handles logic related to `find nearest village to settlement`.

### FindNearestVillageToMobileParty
`public static Village FindNearestVillageToMobileParty(MobileParty fromParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

**Purpose:** Handles logic related to `find nearest village to mobile party`.

### FindRandomSettlement
`public static Settlement FindRandomSettlement(Func<Settlement, bool> condition = null)`

**Purpose:** Handles logic related to `find random settlement`.

### FindRandomHideout
`public static Settlement FindRandomHideout(Func<Settlement, bool> condition = null)`

**Purpose:** Handles logic related to `find random hideout`.

### TakeEnemyVillagersOutsideSettlements
`public static void TakeEnemyVillagersOutsideSettlements(Settlement settlementWhichChangedFaction)`

**Purpose:** Handles logic related to `take enemy villagers outside settlements`.

### GetRandomTown
`public static Settlement GetRandomTown(Clan fromFaction = null)`

**Purpose:** Gets the current value of `random town`.

### GetBestSettlementToSpawnAround
`public static Settlement GetBestSettlementToSpawnAround(Hero hero)`

**Purpose:** Gets the current value of `best settlement to spawn around`.

### GetAllHeroesOfSettlement
`public static IEnumerable<Hero> GetAllHeroesOfSettlement(Settlement settlement, bool includePrisoners)`

**Purpose:** Gets the current value of `all heroes of settlement`.

### IsGarrisonStarving
`public static bool IsGarrisonStarving(Settlement settlement)`

**Purpose:** Handles logic related to `is garrison starving`.

### SpawnNotablesIfNeeded
`public static void SpawnNotablesIfNeeded(Settlement settlement)`

**Purpose:** Handles logic related to `spawn notables if needed`.

### GetGarrisonChangeExplainedNumber
`public static ExplainedNumber GetGarrisonChangeExplainedNumber(Town town)`

**Purpose:** Gets the current value of `garrison change explained number`.

### GetNeighborScoreForConsideringClan
`public static float GetNeighborScoreForConsideringClan(Settlement settlement, Clan consideringClan)`

**Purpose:** Gets the current value of `neighbor score for considering clan`.

## Usage Example

```csharp
SettlementHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)