---
title: "MPArmoryCosmeticCategoryBaseVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPArmoryCosmeticCategoryBaseVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPArmoryCosmeticCategoryBaseVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPArmoryCosmeticCategoryBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory/MPArmoryCosmeticCategoryBaseVM.cs`

## Overview

`MPArmoryCosmeticCategoryBaseVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CosmeticTypeName` | `public string CosmeticTypeName { get; set; }` |
| `CosmeticCategoryName` | `public string CosmeticCategoryName { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `AvailableCosmetics` | `public MBBindingList<MPArmoryCosmeticItemBaseVM> AvailableCosmetics { get; set; }` |

## Key Methods

### MPArmoryCosmeticCategoryBaseVM
`public unsafe MPArmoryCosmeticCategoryBaseVM(CosmeticType cosmeticType)`

**Purpose:** Handles logic related to `m p armory cosmetic category base v m`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Sort
`public void Sort(MPArmoryCosmeticsVM.CosmeticItemComparer comparer)`

**Purpose:** Handles logic related to `sort`.

## Usage Example

```csharp
var implementation = new CustomMPArmoryCosmeticCategoryBaseVM();
```

## See Also

- [Complete Class Catalog](../catalog)