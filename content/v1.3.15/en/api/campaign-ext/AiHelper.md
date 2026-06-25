---
title: "AiHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AiHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AiHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class AiHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/AiHelper.cs`

## Overview

`AiHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `AiHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty
`public static void GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty(MobileParty mobileParty, Settlement settlement, bool isTargetingPort, out MobileParty.NavigationType bestNavigationType, out float bestNavigationDistance, out bool isFromPort)`

**Purpose:** Gets the current value of `best navigation type and adjusted distance of settlement for mobile party`.

### GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty
`public static void GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty(MobileParty mobileParty, MobileParty toMobileParty, out MobileParty.NavigationType bestNavigationType, out float bestNavigationDistance)`

**Purpose:** Gets the current value of `best navigation type and distance of mobile party for mobile party`.

## Usage Example

```csharp
AiHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)