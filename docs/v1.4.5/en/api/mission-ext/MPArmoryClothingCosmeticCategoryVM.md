<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPArmoryClothingCosmeticCategoryVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPArmoryClothingCosmeticCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryClothingCosmeticCategoryVM : MPArmoryCosmeticCategoryBaseVM`
**Base:** `MPArmoryCosmeticCategoryBaseVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory/MPArmoryClothingCosmeticCategoryVM.cs`

## Overview

`MPArmoryClothingCosmeticCategoryVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### SetDefaultEquipments
`public void SetDefaultEquipments(Equipment equipment)`

**Purpose:** Sets the value or state of `default equipments`.

### ReplaceCosmeticWithDefaultItem
`public void ReplaceCosmeticWithDefaultItem(MPArmoryCosmeticClothingItemVM cosmetic, MPArmoryCosmeticsVM.ClothingCategory clothingCategory, MPHeroClass selectedClass, List<string> ownedCosmetics)`

**Purpose:** Handles logic related to `replace cosmetic with default item`.

### OnEquipmentRefreshed
`public void OnEquipmentRefreshed(EquipmentIndex equipmentIndex)`

**Purpose:** Called when the `equipment refreshed` event is raised.

## Usage Example

```csharp
var value = new MPArmoryClothingCosmeticCategoryVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)