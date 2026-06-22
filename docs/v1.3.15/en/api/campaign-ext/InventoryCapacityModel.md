<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryCapacityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryCapacityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class InventoryCapacityModel : MBGameModel<InventoryCapacityModel>`
**Base:** `MBGameModel<InventoryCapacityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/InventoryCapacityModel.cs`

## Overview

`InventoryCapacityModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<InventoryCapacityModel>(new MyInventoryCapacityModel())` to change how it computes.

## Key Methods

### CalculateInventoryCapacity
```csharp
public abstract ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false, int additionalManOnFoot = 0, int additionalSpareMounts = 0, int additionalPackAnimals = 0, bool includeFollowers = false)
```

### GetItemAverageWeight
```csharp
public abstract int GetItemAverageWeight()
```

### GetItemEffectiveWeight
```csharp
public abstract float GetItemEffectiveWeight(EquipmentElement equipmentElement, MobileParty mobileParty, bool isCurrentlyAtSea, out TextObject description)
```

### CalculateTotalWeightCarried
```csharp
public abstract ExplainedNumber CalculateTotalWeightCarried(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false)
```

## Usage Example

```csharp
// Typical usage of InventoryCapacityModel (Model)
Game.Current.ReplaceModel<InventoryCapacityModel>(new MyInventoryCapacityModel());
```

## See Also

- [Complete Class Catalog](../catalog)