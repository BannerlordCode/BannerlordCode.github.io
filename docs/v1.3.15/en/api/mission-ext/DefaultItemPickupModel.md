<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultItemPickupModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultItemPickupModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultItemPickupModel : ItemPickupModel`
**Base:** `ItemPickupModel`
**File:** `TaleWorlds.MountAndBlade/DefaultItemPickupModel.cs`

## Overview

`DefaultItemPickupModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultItemPickupModel>(new MyDefaultItemPickupModel())` to change how it computes.

## Key Methods

### GetItemScoreForAgent
```csharp
public override float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent)
```

### IsItemAvailableForAgent
```csharp
public override bool IsItemAvailableForAgent(SpawnedItemEntity item, Agent agent, EquipmentIndex slotToPickUp)
```

### IsAgentEquipmentSuitableForPickUpAvailability
```csharp
public override bool IsAgentEquipmentSuitableForPickUpAvailability(Agent agent)
```

## Usage Example

```csharp
// Typical usage of DefaultItemPickupModel (Model)
Game.Current.ReplaceModel<DefaultItemPickupModel>(new MyDefaultItemPickupModel());
```

## See Also

- [Complete Class Catalog](../catalog)