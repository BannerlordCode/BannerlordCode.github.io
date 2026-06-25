---
title: "ShipHelper"
description: "Auto-generated class reference for ShipHelper."
---
# ShipHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class ShipHelper`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/ShipHelper.cs`

## Overview

`ShipHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `ShipHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetShipBanner
`public static Banner GetShipBanner(IShipOrigin shipOrigin, IAgent captain = null)`

**Purpose:** Reads and returns the ship banner value held by the this instance.

```csharp
// Static call; no instance required
ShipHelper.GetShipBanner(shipOrigin, null);
```

### GetShipBanner
`public static Banner GetShipBanner(PartyBase party = null)`

**Purpose:** Reads and returns the ship banner value held by the this instance.

```csharp
// Static call; no instance required
ShipHelper.GetShipBanner(null);
```

### GetOrderedNavalRaidShipsOfPlayerParty
`public static List<Ship> GetOrderedNavalRaidShipsOfPlayerParty()`

**Purpose:** Reads and returns the ordered naval raid ships of player party value held by the this instance.

```csharp
// Static call; no instance required
ShipHelper.GetOrderedNavalRaidShipsOfPlayerParty();
```

## Usage Example

```csharp
ShipHelper.Initialize();
```

## See Also

- [Area Index](../)