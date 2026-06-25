---
title: "DefaultShipStatModel"
description: "Auto-generated class reference for DefaultShipStatModel."
---
# DefaultShipStatModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultShipStatModel : ShipStatModel`
**Base:** `ShipStatModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultShipStatModel.cs`

## Overview

`DefaultShipStatModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultShipStatModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetShipTierf
`public override float GetShipTierf(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the ship tierf value held by the this instance.

```csharp
// Obtain an instance of DefaultShipStatModel from the subsystem API first
DefaultShipStatModel defaultShipStatModel = ...;
var result = defaultShipStatModel.GetShipTierf(ship);
```

### GetShipFlagshipScore
`public override float GetShipFlagshipScore(Ship ship)`

**Purpose:** **Purpose:** Reads and returns the ship flagship score value held by the this instance.

```csharp
// Obtain an instance of DefaultShipStatModel from the subsystem API first
DefaultShipStatModel defaultShipStatModel = ...;
var result = defaultShipStatModel.GetShipFlagshipScore(ship);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultShipStatModel>(new MyDefaultShipStatModel());
```

## See Also

- [Area Index](../)