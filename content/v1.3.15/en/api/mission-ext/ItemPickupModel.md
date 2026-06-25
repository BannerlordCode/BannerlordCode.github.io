---
title: "ItemPickupModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemPickupModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemPickupModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ItemPickupModel : MBGameModel<ItemPickupModel>`
**Base:** `MBGameModel<ItemPickupModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/ItemPickupModel.cs`

## Overview

`ItemPickupModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ItemPickupModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetItemScoreForAgent
`public abstract float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent)`

**Purpose:** Gets the current value of `item score for agent`.

### IsItemAvailableForAgent
`public abstract bool IsItemAvailableForAgent(SpawnedItemEntity item, Agent agent, EquipmentIndex slotToPickUp)`

**Purpose:** Handles logic related to `is item available for agent`.

### IsAgentEquipmentSuitableForPickUpAvailability
`public abstract bool IsAgentEquipmentSuitableForPickUpAvailability(Agent agent)`

**Purpose:** Handles logic related to `is agent equipment suitable for pick up availability`.

## Usage Example

```csharp
var implementation = new CustomItemPickupModel();
```

## See Also

- [Complete Class Catalog](../catalog)