---
title: "CraftingItemViewModel"
description: "Auto-generated class reference for CraftingItemViewModel."
---
# CraftingItemViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class CraftingItemViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/CraftingItemViewModel.cs`

## Overview

`CraftingItemViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.

## Mental Model

Treat `CraftingItemViewModel` as a ViewModel-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `UsedPieces` | `public string UsedPieces { get; set; }` |
| `WeaponClass` | `public int WeaponClass { get; set; }` |

## Key Methods

### GetWeaponClass
`public WeaponClass GetWeaponClass()`

**Purpose:** Reads and returns the weapon class value held by the this instance.

```csharp
// Obtain an instance of CraftingItemViewModel from the subsystem API first
CraftingItemViewModel craftingItemViewModel = ...;
var result = craftingItemViewModel.GetWeaponClass();
```

### SetCraftingData
`public void SetCraftingData(WeaponClass weaponClass, WeaponDesignElement craftingPieces)`

**Purpose:** Assigns a new value to crafting data and updates the object's internal state.

```csharp
// Obtain an instance of CraftingItemViewModel from the subsystem API first
CraftingItemViewModel craftingItemViewModel = ...;
craftingItemViewModel.SetCraftingData(weaponClass, craftingPieces);
```

## Usage Example

```csharp
// Bind the instance as the view-model of a movie or view
CraftingItemViewModel vm = ...;
movie.SetViewModel(vm);
```

## See Also

- [Area Index](../)