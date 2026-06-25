---
title: "DefaultFleetManagementModel"
description: "Auto-generated class reference for DefaultFleetManagementModel."
---
# DefaultFleetManagementModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultFleetManagementModel : FleetManagementModel`
**Base:** `FleetManagementModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultFleetManagementModel.cs`

## Overview

`DefaultFleetManagementModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultFleetManagementModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumTroopCountRequiredToSendShips` | `public override int MinimumTroopCountRequiredToSendShips { get; }` |

## Key Methods

### CanSendShipToPlayerClan
`public override bool CanSendShipToPlayerClan(Ship ship, int playerShipsCount, int troopsCountToSend, out TextObject hint)`

**Purpose:** Checks whether the this instance meets the preconditions for send ship to player clan.

```csharp
// Obtain an instance of DefaultFleetManagementModel from the subsystem API first
DefaultFleetManagementModel defaultFleetManagementModel = ...;
var result = defaultFleetManagementModel.CanSendShipToPlayerClan(ship, 0, 0, hint);
```

### CanTroopsReturn
`public override bool CanTroopsReturn()`

**Purpose:** Checks whether the this instance meets the preconditions for troops return.

```csharp
// Obtain an instance of DefaultFleetManagementModel from the subsystem API first
DefaultFleetManagementModel defaultFleetManagementModel = ...;
var result = defaultFleetManagementModel.CanTroopsReturn();
```

### GetReturnTimeForTroops
`public override CampaignTime GetReturnTimeForTroops(Ship ship)`

**Purpose:** Reads and returns the return time for troops value held by the this instance.

```csharp
// Obtain an instance of DefaultFleetManagementModel from the subsystem API first
DefaultFleetManagementModel defaultFleetManagementModel = ...;
var result = defaultFleetManagementModel.GetReturnTimeForTroops(ship);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultFleetManagementModel>(new MyDefaultFleetManagementModel());
```

## See Also

- [Area Index](../)