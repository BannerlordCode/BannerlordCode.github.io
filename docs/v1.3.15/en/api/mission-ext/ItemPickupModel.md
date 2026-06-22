<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemPickupModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemPickupModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ItemPickupModel : MBGameModel<ItemPickupModel>`
**Base:** `MBGameModel<ItemPickupModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/ItemPickupModel.cs`

## Overview

`ItemPickupModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<ItemPickupModel>(new MyItemPickupModel())` to change how it computes.

## Key Methods

### GetItemScoreForAgent
```csharp
public abstract float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent)
```

### IsItemAvailableForAgent
```csharp
public abstract bool IsItemAvailableForAgent(SpawnedItemEntity item, Agent agent, EquipmentIndex slotToPickUp)
```

### IsAgentEquipmentSuitableForPickUpAvailability
```csharp
public abstract bool IsAgentEquipmentSuitableForPickUpAvailability(Agent agent)
```

## Usage Example

```csharp
// Typical usage of ItemPickupModel (Model)
Game.Current.ReplaceModel<ItemPickupModel>(new MyItemPickupModel());
```

## See Also

- [Complete Class Catalog](../catalog)