---
title: "FleetManagementModel"
description: "Auto-generated class reference for FleetManagementModel."
---
# FleetManagementModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class FleetManagementModel : MBGameModel<FleetManagementModel>`
**Base:** `MBGameModel<FleetManagementModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/FleetManagementModel.cs`

## Overview

`FleetManagementModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `FleetManagementModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumTroopCountRequiredToSendShips` | `public abstract int MinimumTroopCountRequiredToSendShips { get; }` |

## Key Methods

### CanTroopsReturn
`public abstract bool CanTroopsReturn()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for troops return.

```csharp
// Obtain an instance of FleetManagementModel from the subsystem API first
FleetManagementModel fleetManagementModel = ...;
var result = fleetManagementModel.CanTroopsReturn();
```

### GetReturnTimeForTroops
`public abstract CampaignTime GetReturnTimeForTroops(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the return time for troops value held by the this instance.

```csharp
// Obtain an instance of FleetManagementModel from the subsystem API first
FleetManagementModel fleetManagementModel = ...;
var result = fleetManagementModel.GetReturnTimeForTroops(ship);
```

### CanSendShipToPlayerClan
`public abstract bool CanSendShipToPlayerClan(Ship ship, int playerShipsCount, int troopsCountToSend, out TextObject hint)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for send ship to player clan.

```csharp
// Obtain an instance of FleetManagementModel from the subsystem API first
FleetManagementModel fleetManagementModel = ...;
var result = fleetManagementModel.CanSendShipToPlayerClan(ship, 0, 0, hint);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
FleetManagementModel instance = ...;
```

## See Also

- [Area Index](../)