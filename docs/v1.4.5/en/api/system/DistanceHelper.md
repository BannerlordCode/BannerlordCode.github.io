<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DistanceHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DistanceHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class DistanceHelper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/DistanceHelper.cs`

## Overview

`DistanceHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `DistanceHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### FindClosestDistanceFromSettlementToSettlement
`public static float FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out bool isFromPort, out bool isTargetingPort, out float landRatio)`

**Purpose:** Handles logic related to `find closest distance from settlement to settlement`.

### FindClosestDistanceFromSettlementToSettlement
`public static float FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities)`

**Purpose:** Handles logic related to `find closest distance from settlement to settlement`.

### FindClosestDistanceFromSettlementToSettlement
`public static float FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out float landRatio)`

**Purpose:** Handles logic related to `find closest distance from settlement to settlement`.

### FindClosestDistanceFromMobilePartyToSettlement
`public static float FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out bool isTargetingPort, out float landRatio)`

**Purpose:** Handles logic related to `find closest distance from mobile party to settlement`.

### FindClosestDistanceFromMobilePartyToSettlement
`public static float FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities)`

**Purpose:** Handles logic related to `find closest distance from mobile party to settlement`.

### FindClosestDistanceFromMobilePartyToSettlement
`public static float FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out float landRatio)`

**Purpose:** Handles logic related to `find closest distance from mobile party to settlement`.

### FindClosestDistanceFromMobilePartyToSettlement
`public static bool FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities, float maxDistance, out float distance, out float landRatio)`

**Purpose:** Handles logic related to `find closest distance from mobile party to settlement`.

### FindClosestDistanceFromSettlementToSettlement
`public static bool FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities, float maxDistance, out float distance, out float landRatio)`

**Purpose:** Handles logic related to `find closest distance from settlement to settlement`.

### FindClosestDistanceFromMobilePartyToMobileParty
`public static bool FindClosestDistanceFromMobilePartyToMobileParty(MobileParty from, MobileParty to, MobileParty.NavigationType navigationType, float maxDistance, out float distance, out float landRatio)`

**Purpose:** Handles logic related to `find closest distance from mobile party to mobile party`.

### FindClosestDistanceFromMobilePartyToMobileParty
`public static float FindClosestDistanceFromMobilePartyToMobileParty(MobileParty from, MobileParty to, MobileParty.NavigationType navigationType)`

**Purpose:** Handles logic related to `find closest distance from mobile party to mobile party`.

### FindClosestDistanceFromMobilePartyToMobileParty
`public static float FindClosestDistanceFromMobilePartyToMobileParty(MobileParty from, MobileParty to, MobileParty.NavigationType navigationType, out float landRatio)`

**Purpose:** Handles logic related to `find closest distance from mobile party to mobile party`.

### FindClosestDistanceFromSettlementToPoint
`public static float FindClosestDistanceFromSettlementToPoint(Settlement fromSettlement, CampaignVec2 point, MobileParty.NavigationType navCapabilities, out bool isFromPort)`

**Purpose:** Handles logic related to `find closest distance from settlement to point`.

### FindClosestDistanceFromMapPointToSettlement
`public static float FindClosestDistanceFromMapPointToSettlement(IMapPoint mapPoint, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out bool isTargetingPort, out float landRatio)`

**Purpose:** Handles logic related to `find closest distance from map point to settlement`.

### FindClosestDistanceFromSettlementToPoint
`public static float FindClosestDistanceFromSettlementToPoint(Settlement fromSettlement, CampaignVec2 point, MobileParty.NavigationType navCapabilities, out float landRatio)`

**Purpose:** Handles logic related to `find closest distance from settlement to point`.

### FindClosestDistanceFromMobilePartyToPoint
`public static float FindClosestDistanceFromMobilePartyToPoint(MobileParty fromMobileParty, CampaignVec2 point, MobileParty.NavigationType navCapabilities)`

**Purpose:** Handles logic related to `find closest distance from mobile party to point`.

### FindClosestDistanceFromMobilePartyToPoint
`public static float FindClosestDistanceFromMobilePartyToPoint(MobileParty fromMobileParty, CampaignVec2 point, MobileParty.NavigationType navCapabilities, out float landRatio)`

**Purpose:** Handles logic related to `find closest distance from mobile party to point`.

### FindClosestDistanceFromMapPointToSettlement
`public static float FindClosestDistanceFromMapPointToSettlement(IMapPoint mapPoint, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out float landRatio)`

**Purpose:** Handles logic related to `find closest distance from map point to settlement`.

### GetDistanceBetweenMobilePartyToMobileParty
`public static float GetDistanceBetweenMobilePartyToMobileParty(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio)`

**Purpose:** Gets the current value of `distance between mobile party to mobile party`.

## Usage Example

```csharp
DistanceHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)