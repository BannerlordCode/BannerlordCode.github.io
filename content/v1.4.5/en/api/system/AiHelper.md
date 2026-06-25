---
title: "AiHelper"
description: "Auto-generated class reference for AiHelper."
---
# AiHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class AiHelper`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/AiHelper.cs`

## Overview

`AiHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `AiHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty
`public static void GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty(MobileParty mobileParty, Settlement settlement, bool isTargetingPort, out MobileParty.NavigationType bestNavigationType, out float bestNavigationDistance, out bool isFromPort)`

**Purpose:** Reads and returns the best navigation type and adjusted distance of settlement for mobile party value held by the this instance.

```csharp
// Static call; no instance required
AiHelper.GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty(mobileParty, settlement, false, bestNavigationType, bestNavigationDistance, isFromPort);
```

### GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty
`public static void GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty(MobileParty mobileParty, MobileParty toMobileParty, out MobileParty.NavigationType bestNavigationType, out float bestNavigationDistance)`

**Purpose:** Reads and returns the best navigation type and distance of mobile party for mobile party value held by the this instance.

```csharp
// Static call; no instance required
AiHelper.GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty(mobileParty, toMobileParty, bestNavigationType, bestNavigationDistance);
```

## Usage Example

```csharp
AiHelper.Initialize();
```

## See Also

- [Area Index](../)