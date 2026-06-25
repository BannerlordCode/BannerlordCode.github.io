---
title: "DistanceHelper"
description: "Auto-generated class reference for DistanceHelper."
---
# DistanceHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class DistanceHelper`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/DistanceHelper.cs`

## Overview

`DistanceHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `DistanceHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### FindClosestDistanceFromSettlementToSettlement
`public static float FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out bool isFromPort, out bool isTargetingPort, out float landRatio)`

**Purpose:** **Purpose:** Looks up the matching closest distance from settlement to settlement in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromSettlementToSettlement(fromSettlement, toSettlement, navCapabilities, isFromPort, isTargetingPort, landRatio);
```

### FindClosestDistanceFromSettlementToSettlement
`public static float FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities)`

**Purpose:** **Purpose:** Looks up the matching closest distance from settlement to settlement in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromSettlementToSettlement(fromSettlement, toSettlement, navCapabilities);
```

### FindClosestDistanceFromSettlementToSettlement
`public static float FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out float landRatio)`

**Purpose:** **Purpose:** Looks up the matching closest distance from settlement to settlement in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromSettlementToSettlement(fromSettlement, toSettlement, navCapabilities, landRatio);
```

### FindClosestDistanceFromMobilePartyToSettlement
`public static float FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out bool isTargetingPort, out float landRatio)`

**Purpose:** **Purpose:** Looks up the matching closest distance from mobile party to settlement in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromMobilePartyToSettlement(fromMobileParty, toSettlement, navCapabilities, isTargetingPort, landRatio);
```

### FindClosestDistanceFromMobilePartyToSettlement
`public static float FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities)`

**Purpose:** **Purpose:** Looks up the matching closest distance from mobile party to settlement in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromMobilePartyToSettlement(fromMobileParty, toSettlement, navCapabilities);
```

### FindClosestDistanceFromMobilePartyToSettlement
`public static float FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out float landRatio)`

**Purpose:** **Purpose:** Looks up the matching closest distance from mobile party to settlement in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromMobilePartyToSettlement(fromMobileParty, toSettlement, navCapabilities, landRatio);
```

### FindClosestDistanceFromMobilePartyToSettlement
`public static bool FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities, float maxDistance, out float distance, out float landRatio)`

**Purpose:** **Purpose:** Looks up the matching closest distance from mobile party to settlement in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromMobilePartyToSettlement(fromMobileParty, toSettlement, navCapabilities, 0, distance, landRatio);
```

### FindClosestDistanceFromSettlementToSettlement
`public static bool FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities, float maxDistance, out float distance, out float landRatio)`

**Purpose:** **Purpose:** Looks up the matching closest distance from settlement to settlement in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromSettlementToSettlement(fromSettlement, toSettlement, navCapabilities, 0, distance, landRatio);
```

### FindClosestDistanceFromMobilePartyToMobileParty
`public static bool FindClosestDistanceFromMobilePartyToMobileParty(MobileParty from, MobileParty to, MobileParty.NavigationType navigationType, float maxDistance, out float distance, out float landRatio)`

**Purpose:** **Purpose:** Looks up the matching closest distance from mobile party to mobile party in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromMobilePartyToMobileParty(from, to, navigationType, 0, distance, landRatio);
```

### FindClosestDistanceFromMobilePartyToMobileParty
`public static float FindClosestDistanceFromMobilePartyToMobileParty(MobileParty from, MobileParty to, MobileParty.NavigationType navigationType)`

**Purpose:** **Purpose:** Looks up the matching closest distance from mobile party to mobile party in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromMobilePartyToMobileParty(from, to, navigationType);
```

### FindClosestDistanceFromMobilePartyToMobileParty
`public static float FindClosestDistanceFromMobilePartyToMobileParty(MobileParty from, MobileParty to, MobileParty.NavigationType navigationType, out float landRatio)`

**Purpose:** **Purpose:** Looks up the matching closest distance from mobile party to mobile party in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromMobilePartyToMobileParty(from, to, navigationType, landRatio);
```

### FindClosestDistanceFromSettlementToPoint
`public static float FindClosestDistanceFromSettlementToPoint(Settlement fromSettlement, CampaignVec2 point, MobileParty.NavigationType navCapabilities, out bool isFromPort)`

**Purpose:** **Purpose:** Looks up the matching closest distance from settlement to point in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromSettlementToPoint(fromSettlement, point, navCapabilities, isFromPort);
```

### FindClosestDistanceFromMapPointToSettlement
`public static float FindClosestDistanceFromMapPointToSettlement(IMapPoint mapPoint, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out bool isTargetingPort, out float landRatio)`

**Purpose:** **Purpose:** Looks up the matching closest distance from map point to settlement in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromMapPointToSettlement(mapPoint, toSettlement, navCapabilities, isTargetingPort, landRatio);
```

### FindClosestDistanceFromSettlementToPoint
`public static float FindClosestDistanceFromSettlementToPoint(Settlement fromSettlement, CampaignVec2 point, MobileParty.NavigationType navCapabilities, out float landRatio)`

**Purpose:** **Purpose:** Looks up the matching closest distance from settlement to point in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromSettlementToPoint(fromSettlement, point, navCapabilities, landRatio);
```

### FindClosestDistanceFromMobilePartyToPoint
`public static float FindClosestDistanceFromMobilePartyToPoint(MobileParty fromMobileParty, CampaignVec2 point, MobileParty.NavigationType navCapabilities)`

**Purpose:** **Purpose:** Looks up the matching closest distance from mobile party to point in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromMobilePartyToPoint(fromMobileParty, point, navCapabilities);
```

### FindClosestDistanceFromMobilePartyToPoint
`public static float FindClosestDistanceFromMobilePartyToPoint(MobileParty fromMobileParty, CampaignVec2 point, MobileParty.NavigationType navCapabilities, out float landRatio)`

**Purpose:** **Purpose:** Looks up the matching closest distance from mobile party to point in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromMobilePartyToPoint(fromMobileParty, point, navCapabilities, landRatio);
```

### FindClosestDistanceFromMapPointToSettlement
`public static float FindClosestDistanceFromMapPointToSettlement(IMapPoint mapPoint, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out float landRatio)`

**Purpose:** **Purpose:** Looks up the matching closest distance from map point to settlement in the current collection or scope.

```csharp
// Static call; no instance required
DistanceHelper.FindClosestDistanceFromMapPointToSettlement(mapPoint, toSettlement, navCapabilities, landRatio);
```

### GetDistanceBetweenMobilePartyToMobileParty
`public static float GetDistanceBetweenMobilePartyToMobileParty(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio)`

**Purpose:** **Purpose:** Reads and returns the distance between mobile party to mobile party value held by the this instance.

```csharp
// Static call; no instance required
DistanceHelper.GetDistanceBetweenMobilePartyToMobileParty(fromMobileParty, toMobileParty, customCapability, landRatio);
```

## Usage Example

```csharp
DistanceHelper.Initialize();
```

## See Also

- [Area Index](../)