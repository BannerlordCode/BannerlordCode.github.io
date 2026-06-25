---
title: "ShipCostModel"
description: "Auto-generated class reference for ShipCostModel."
---
# ShipCostModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ShipCostModel : MBGameModel<ShipCostModel>`
**Base:** `MBGameModel<ShipCostModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ShipCostModel.cs`

## Overview

`ShipCostModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ShipCostModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetShipTradeValue
`public abstract float GetShipTradeValue(Ship ship, PartyBase seller, PartyBase buyer)`

**Purpose:** Reads and returns the `ship trade value` value held by the current object.

```csharp
// Obtain an instance of ShipCostModel from the subsystem API first
ShipCostModel shipCostModel = ...;
var result = shipCostModel.GetShipTradeValue(ship, seller, buyer);
```

### GetShipRepairCost
`public abstract float GetShipRepairCost(Ship ship, PartyBase owner)`

**Purpose:** Reads and returns the `ship repair cost` value held by the current object.

```csharp
// Obtain an instance of ShipCostModel from the subsystem API first
ShipCostModel shipCostModel = ...;
var result = shipCostModel.GetShipRepairCost(ship, owner);
```

### GetShipUpgradePieceCost
`public abstract int GetShipUpgradePieceCost(Ship ship, ShipUpgradePiece piece, PartyBase owner)`

**Purpose:** Reads and returns the `ship upgrade piece cost` value held by the current object.

```csharp
// Obtain an instance of ShipCostModel from the subsystem API first
ShipCostModel shipCostModel = ...;
var result = shipCostModel.GetShipUpgradePieceCost(ship, piece, owner);
```

### GetShipSellingPenalty
`public abstract float GetShipSellingPenalty()`

**Purpose:** Reads and returns the `ship selling penalty` value held by the current object.

```csharp
// Obtain an instance of ShipCostModel from the subsystem API first
ShipCostModel shipCostModel = ...;
var result = shipCostModel.GetShipSellingPenalty();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ShipCostModel instance = ...;
```

## See Also

- [Area Index](../)