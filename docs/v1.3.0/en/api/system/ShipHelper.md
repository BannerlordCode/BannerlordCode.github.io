<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShipHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ShipHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class ShipHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/ShipHelper.cs`

## Overview

`ShipHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `ShipHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetShipBanner
`public static Banner GetShipBanner(IShipOrigin shipOrigin, IAgent captain = null)`

**Purpose:** Gets the current value of `ship banner`.

### GetSailColors
`public static ValueTuple<uint, uint> GetSailColors(IShipOrigin shipOrigin, IAgent captain = null)`

**Purpose:** Gets the current value of `sail colors`.

### GetShipBanner
`public static Banner GetShipBanner(PartyBase party = null)`

**Purpose:** Gets the current value of `ship banner`.

### GetSailColors
`public static ValueTuple<uint, uint> GetSailColors(PartyBase party = null)`

**Purpose:** Gets the current value of `sail colors`.

## Usage Example

```csharp
ShipHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)