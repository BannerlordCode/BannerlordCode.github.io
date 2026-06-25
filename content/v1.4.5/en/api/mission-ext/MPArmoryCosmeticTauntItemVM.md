---
title: "MPArmoryCosmeticTauntItemVM"
description: "Auto-generated class reference for MPArmoryCosmeticTauntItemVM."
---
# MPArmoryCosmeticTauntItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryCosmeticTauntItemVM : MPArmoryCosmeticItemBaseVM`
**Base:** `MPArmoryCosmeticItemBaseVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem/MPArmoryCosmeticTauntItemVM.cs`

## Overview

`MPArmoryCosmeticTauntItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TauntCategory` | `public MPArmoryCosmeticsVM.TauntCategoryFlag TauntCategory { get; set; }` |
| `TauntCosmeticElement` | `public TauntCosmeticElement TauntCosmeticElement { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `RequiresOnFoot` | `public bool RequiresOnFoot { get; set; }` |
| `PreviewAnimationRatio` | `public float PreviewAnimationRatio { get; set; }` |
| `SelectSlotText` | `public string SelectSlotText { get; set; }` |
| `CancelEquipText` | `public string CancelEquipText { get; set; }` |
| `TauntID` | `public string TauntID { get; set; }` |
| `TauntUsages` | `public MBBindingList<StringItemWithEnabledAndHintVM> TauntUsages { get; set; }` |
| `BlocksMovementOnUsageHint` | `public HintViewModel BlocksMovementOnUsageHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPArmoryCosmeticTauntItemVM from the subsystem API first
MPArmoryCosmeticTauntItemVM mPArmoryCosmeticTauntItemVM = ...;
mPArmoryCosmeticTauntItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPArmoryCosmeticTauntItemVM mPArmoryCosmeticTauntItemVM = ...;
mPArmoryCosmeticTauntItemVM.RefreshValues();
```

## See Also

- [Area Index](../)