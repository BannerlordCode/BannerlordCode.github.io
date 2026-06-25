---
title: "MPArmoryCosmeticClothingItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPArmoryCosmeticClothingItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPArmoryCosmeticClothingItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryCosmeticClothingItemVM : MPArmoryCosmeticItemBaseVM`
**Base:** `MPArmoryCosmeticItemBaseVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem/MPArmoryCosmeticClothingItemVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new MPArmoryCosmeticClothingItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)