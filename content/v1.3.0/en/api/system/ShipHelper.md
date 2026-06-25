---
title: "ShipHelper"
description: "Auto-generated class reference for ShipHelper."
---
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

**Purpose:** Reads and returns the `ship banner` value held by the current object.

```csharp
// Static call; no instance required
ShipHelper.GetShipBanner(shipOrigin, null);
```

### GetSailColors
`public static ValueTuple<uint, uint> GetSailColors(IShipOrigin shipOrigin, IAgent captain = null)`

**Purpose:** Reads and returns the `sail colors` value held by the current object.

```csharp
// Static call; no instance required
ShipHelper.GetSailColors(shipOrigin, null);
```

### GetShipBanner
`public static Banner GetShipBanner(PartyBase party = null)`

**Purpose:** Reads and returns the `ship banner` value held by the current object.

```csharp
// Static call; no instance required
ShipHelper.GetShipBanner(null);
```

### GetSailColors
`public static ValueTuple<uint, uint> GetSailColors(PartyBase party = null)`

**Purpose:** Reads and returns the `sail colors` value held by the current object.

```csharp
// Static call; no instance required
ShipHelper.GetSailColors(null);
```

## Usage Example

```csharp
ShipHelper.Initialize();
```

## See Also

- [Area Index](../)