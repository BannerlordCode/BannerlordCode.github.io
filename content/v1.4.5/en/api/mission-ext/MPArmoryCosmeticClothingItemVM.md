---
title: "MPArmoryCosmeticClothingItemVM"
description: "Auto-generated class reference for MPArmoryCosmeticClothingItemVM."
---
# MPArmoryCosmeticClothingItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryCosmeticClothingItemVM : MPArmoryCosmeticItemBaseVM`
**Base:** `MPArmoryCosmeticItemBaseVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem/MPArmoryCosmeticClothingItemVM.cs`

## Overview

`MPArmoryCosmeticClothingItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EquipmentElement` | `public EquipmentElement EquipmentElement { get; }` |
| `ClothingCategory` | `public MPArmoryCosmeticsVM.ClothingCategory ClothingCategory { get; }` |
| `ClothingCosmeticElement` | `public ClothingCosmeticElement ClothingCosmeticElement { get; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPArmoryCosmeticClothingItemVM from the subsystem API first
MPArmoryCosmeticClothingItemVM mPArmoryCosmeticClothingItemVM = ...;
mPArmoryCosmeticClothingItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPArmoryCosmeticClothingItemVM mPArmoryCosmeticClothingItemVM = ...;
mPArmoryCosmeticClothingItemVM.RefreshValues();
```

## See Also

- [Area Index](../)