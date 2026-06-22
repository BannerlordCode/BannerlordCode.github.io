<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultInventoryCapacityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultInventoryCapacityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultInventoryCapacityModel : InventoryCapacityModel`
**Base:** `InventoryCapacityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultInventoryCapacityModel.cs`

## Overview

`DefaultInventoryCapacityModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultInventoryCapacityModel>(new MyDefaultInventoryCapacityModel())` to change how it computes.

## Key Methods

### GetItemAverageWeight
```csharp
public override int GetItemAverageWeight()
```

### GetItemEffectiveWeight
```csharp
public override float GetItemEffectiveWeight(EquipmentElement equipmentElement, MobileParty mobileParty, bool isCurrentlyAtSea, out TextObject description)
```

### CalculateInventoryCapacity
```csharp
public override ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false, int additionalTroops = 0, int additionalSpareMounts = 0, int additionalPackAnimals = 0, bool includeFollowers = false)
```

### CalculateTotalWeightCarried
```csharp
public override ExplainedNumber CalculateTotalWeightCarried(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false)
```

## Usage Example

```csharp
// Typical usage of DefaultInventoryCapacityModel (Model)
Game.Current.ReplaceModel<DefaultInventoryCapacityModel>(new MyDefaultInventoryCapacityModel());
```

## See Also

- [Complete Class Catalog](../catalog)