---
title: "ShipStatModel"
description: "Auto-generated class reference for ShipStatModel."
---
# ShipStatModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ShipStatModel : MBGameModel<ShipStatModel>`
**Base:** `MBGameModel<ShipStatModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ShipStatModel.cs`

## Overview

`ShipStatModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ShipStatModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetShipFlagshipScore
`public abstract float GetShipFlagshipScore(Ship ship)`

**Purpose:** Reads and returns the `ship flagship score` value held by the current object.

```csharp
// Obtain an instance of ShipStatModel from the subsystem API first
ShipStatModel shipStatModel = ...;
var result = shipStatModel.GetShipFlagshipScore(ship);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ShipStatModel instance = ...;
```

## See Also

- [Area Index](../)