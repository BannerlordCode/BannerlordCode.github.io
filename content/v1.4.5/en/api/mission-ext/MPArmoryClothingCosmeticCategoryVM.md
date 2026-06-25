---
title: "MPArmoryClothingCosmeticCategoryVM"
description: "Auto-generated class reference for MPArmoryClothingCosmeticCategoryVM."
---
# MPArmoryClothingCosmeticCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryClothingCosmeticCategoryVM : MPArmoryCosmeticCategoryBaseVM`
**Base:** `MPArmoryCosmeticCategoryBaseVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory/MPArmoryClothingCosmeticCategoryVM.cs`

## Overview

`MPArmoryClothingCosmeticCategoryVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPArmoryClothingCosmeticCategoryVM from the subsystem API first
MPArmoryClothingCosmeticCategoryVM mPArmoryClothingCosmeticCategoryVM = ...;
mPArmoryClothingCosmeticCategoryVM.RefreshValues();
```

### SetDefaultEquipments
`public void SetDefaultEquipments(Equipment equipment)`

**Purpose:** Assigns a new value to default equipments and updates the object's internal state.

```csharp
// Obtain an instance of MPArmoryClothingCosmeticCategoryVM from the subsystem API first
MPArmoryClothingCosmeticCategoryVM mPArmoryClothingCosmeticCategoryVM = ...;
mPArmoryClothingCosmeticCategoryVM.SetDefaultEquipments(equipment);
```

### ReplaceCosmeticWithDefaultItem
`public void ReplaceCosmeticWithDefaultItem(MPArmoryCosmeticClothingItemVM cosmetic, MPArmoryCosmeticsVM.ClothingCategory clothingCategory, MPHeroClass selectedClass, List<string> ownedCosmetics)`

**Purpose:** Executes the ReplaceCosmeticWithDefaultItem logic.

```csharp
// Obtain an instance of MPArmoryClothingCosmeticCategoryVM from the subsystem API first
MPArmoryClothingCosmeticCategoryVM mPArmoryClothingCosmeticCategoryVM = ...;
mPArmoryClothingCosmeticCategoryVM.ReplaceCosmeticWithDefaultItem(cosmetic, clothingCategory, selectedClass, ownedCosmetics);
```

### OnEquipmentRefreshed
`public void OnEquipmentRefreshed(EquipmentIndex equipmentIndex)`

**Purpose:** Invoked when the equipment refreshed event is raised.

```csharp
// Obtain an instance of MPArmoryClothingCosmeticCategoryVM from the subsystem API first
MPArmoryClothingCosmeticCategoryVM mPArmoryClothingCosmeticCategoryVM = ...;
mPArmoryClothingCosmeticCategoryVM.OnEquipmentRefreshed(equipmentIndex);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPArmoryClothingCosmeticCategoryVM mPArmoryClothingCosmeticCategoryVM = ...;
mPArmoryClothingCosmeticCategoryVM.RefreshValues();
```

## See Also

- [Area Index](../)