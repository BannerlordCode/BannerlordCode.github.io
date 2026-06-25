---
title: "DefaultShipCostModel"
description: "Auto-generated class reference for DefaultShipCostModel."
---
# DefaultShipCostModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultShipCostModel : ShipCostModel`
**Base:** `ShipCostModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultShipCostModel.cs`

## Overview

`DefaultShipCostModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultShipCostModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetShipTradeValue
`public override float GetShipTradeValue(Ship ship, PartyBase seller, PartyBase buyer)`

**Purpose:** Reads and returns the `ship trade value` value held by the current object.

```csharp
// Obtain an instance of DefaultShipCostModel from the subsystem API first
DefaultShipCostModel defaultShipCostModel = ...;
var result = defaultShipCostModel.GetShipTradeValue(ship, seller, buyer);
```

### GetShipRepairCost
`public override float GetShipRepairCost(Ship ship, PartyBase owner)`

**Purpose:** Reads and returns the `ship repair cost` value held by the current object.

```csharp
// Obtain an instance of DefaultShipCostModel from the subsystem API first
DefaultShipCostModel defaultShipCostModel = ...;
var result = defaultShipCostModel.GetShipRepairCost(ship, owner);
```

### GetShipUpgradePieceCost
`public override int GetShipUpgradePieceCost(Ship ship, ShipUpgradePiece piece, PartyBase owner)`

**Purpose:** Reads and returns the `ship upgrade piece cost` value held by the current object.

```csharp
// Obtain an instance of DefaultShipCostModel from the subsystem API first
DefaultShipCostModel defaultShipCostModel = ...;
var result = defaultShipCostModel.GetShipUpgradePieceCost(ship, piece, owner);
```

### GetShipSellingPenalty
`public override float GetShipSellingPenalty()`

**Purpose:** Reads and returns the `ship selling penalty` value held by the current object.

```csharp
// Obtain an instance of DefaultShipCostModel from the subsystem API first
DefaultShipCostModel defaultShipCostModel = ...;
var result = defaultShipCostModel.GetShipSellingPenalty();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultShipCostModel>(new MyDefaultShipCostModel());
```

## See Also

- [Area Index](../)