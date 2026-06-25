---
title: "DefaultItemPickupModel"
description: "Auto-generated class reference for DefaultItemPickupModel."
---
# DefaultItemPickupModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultItemPickupModel : ItemPickupModel`
**Base:** `ItemPickupModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultItemPickupModel.cs`

## Overview

`DefaultItemPickupModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultItemPickupModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetItemScoreForAgent
`public override float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent)`

**Purpose:** Reads and returns the `item score for agent` value held by the current object.

```csharp
// Obtain an instance of DefaultItemPickupModel from the subsystem API first
DefaultItemPickupModel defaultItemPickupModel = ...;
var result = defaultItemPickupModel.GetItemScoreForAgent(item, agent);
```

### IsItemAvailableForAgent
`public override bool IsItemAvailableForAgent(SpawnedItemEntity item, Agent agent, EquipmentIndex slotToPickUp)`

**Purpose:** Determines whether the current object is in the `item available for agent` state or condition.

```csharp
// Obtain an instance of DefaultItemPickupModel from the subsystem API first
DefaultItemPickupModel defaultItemPickupModel = ...;
var result = defaultItemPickupModel.IsItemAvailableForAgent(item, agent, slotToPickUp);
```

### IsAgentEquipmentSuitableForPickUpAvailability
`public override bool IsAgentEquipmentSuitableForPickUpAvailability(Agent agent)`

**Purpose:** Determines whether the current object is in the `agent equipment suitable for pick up availability` state or condition.

```csharp
// Obtain an instance of DefaultItemPickupModel from the subsystem API first
DefaultItemPickupModel defaultItemPickupModel = ...;
var result = defaultItemPickupModel.IsAgentEquipmentSuitableForPickUpAvailability(agent);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultItemPickupModel>(new MyDefaultItemPickupModel());
```

## See Also

- [Area Index](../)