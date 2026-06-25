---
title: "MPArmoryCosmeticCategoryBaseVM"
description: "Auto-generated class reference for MPArmoryCosmeticCategoryBaseVM."
---
# MPArmoryCosmeticCategoryBaseVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPArmoryCosmeticCategoryBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory/MPArmoryCosmeticCategoryBaseVM.cs`

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

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MPArmoryCosmeticCategoryBaseVM from the subsystem API first
MPArmoryCosmeticCategoryBaseVM mPArmoryCosmeticCategoryBaseVM = ...;
var result = mPArmoryCosmeticCategoryBaseVM.MPArmoryCosmeticCategoryBaseVM(cosmeticType);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPArmoryCosmeticCategoryBaseVM from the subsystem API first
MPArmoryCosmeticCategoryBaseVM mPArmoryCosmeticCategoryBaseVM = ...;
mPArmoryCosmeticCategoryBaseVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MPArmoryCosmeticCategoryBaseVM from the subsystem API first
MPArmoryCosmeticCategoryBaseVM mPArmoryCosmeticCategoryBaseVM = ...;
mPArmoryCosmeticCategoryBaseVM.OnFinalize();
```

### Sort
`public void Sort(MPArmoryCosmeticsVM.CosmeticItemComparer comparer)`

**Purpose:** Sorts the content inside the current object.

```csharp
// Obtain an instance of MPArmoryCosmeticCategoryBaseVM from the subsystem API first
MPArmoryCosmeticCategoryBaseVM mPArmoryCosmeticCategoryBaseVM = ...;
mPArmoryCosmeticCategoryBaseVM.Sort(comparer);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MPArmoryCosmeticCategoryBaseVM instance = ...;
```

## See Also

- [Area Index](../)