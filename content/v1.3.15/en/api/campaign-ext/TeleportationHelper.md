---
title: "TeleportationHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeleportationHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TeleportationHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class TeleportationHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/TeleportationHelper.cs`

## Overview

`TeleportationHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `TeleportationHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetHoursLeftForTeleportingHeroToReachItsDestination
`public static float GetHoursLeftForTeleportingHeroToReachItsDestination(Hero teleportingHero)`

**Purpose:** Gets the current value of `hours left for teleporting hero to reach its destination`.

## Usage Example

```csharp
TeleportationHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)