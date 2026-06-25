---
title: "ItemPickupModel"
description: "Auto-generated class reference for ItemPickupModel."
---
# ItemPickupModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ItemPickupModel : MBGameModel<ItemPickupModel>`
**Base:** `MBGameModel<ItemPickupModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/ItemPickupModel.cs`

## Overview

`ItemPickupModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ItemPickupModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetItemScoreForAgent
`public abstract float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent)`

**Purpose:** Reads and returns the `item score for agent` value held by the current object.

```csharp
// Obtain an instance of ItemPickupModel from the subsystem API first
ItemPickupModel itemPickupModel = ...;
var result = itemPickupModel.GetItemScoreForAgent(item, agent);
```

### IsItemAvailableForAgent
`public abstract bool IsItemAvailableForAgent(SpawnedItemEntity item, Agent agent, EquipmentIndex slotToPickUp)`

**Purpose:** Determines whether the current object is in the `item available for agent` state or condition.

```csharp
// Obtain an instance of ItemPickupModel from the subsystem API first
ItemPickupModel itemPickupModel = ...;
var result = itemPickupModel.IsItemAvailableForAgent(item, agent, slotToPickUp);
```

### IsAgentEquipmentSuitableForPickUpAvailability
`public abstract bool IsAgentEquipmentSuitableForPickUpAvailability(Agent agent)`

**Purpose:** Determines whether the current object is in the `agent equipment suitable for pick up availability` state or condition.

```csharp
// Obtain an instance of ItemPickupModel from the subsystem API first
ItemPickupModel itemPickupModel = ...;
var result = itemPickupModel.IsAgentEquipmentSuitableForPickUpAvailability(agent);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ItemPickupModel instance = ...;
```

## See Also

- [Area Index](../)