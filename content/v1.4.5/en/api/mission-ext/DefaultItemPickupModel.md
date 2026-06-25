---
title: "DefaultItemPickupModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultItemPickupModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultItemPickupModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultItemPickupModel : ItemPickupModel`
**Base:** `ItemPickupModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultItemPickupModel.cs`

## Overview

`DefaultItemPickupModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultItemPickupModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetItemScoreForAgent
`public override float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent)`

**Purpose:** Gets the current value of `item score for agent`.

### IsItemAvailableForAgent
`public override bool IsItemAvailableForAgent(SpawnedItemEntity item, Agent agent, EquipmentIndex slotToPickUp)`

**Purpose:** Handles logic related to `is item available for agent`.

### IsAgentEquipmentSuitableForPickUpAvailability
`public override bool IsAgentEquipmentSuitableForPickUpAvailability(Agent agent)`

**Purpose:** Handles logic related to `is agent equipment suitable for pick up availability`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultItemPickupModel>(new MyDefaultItemPickupModel());
```

## See Also

- [Complete Class Catalog](../catalog)