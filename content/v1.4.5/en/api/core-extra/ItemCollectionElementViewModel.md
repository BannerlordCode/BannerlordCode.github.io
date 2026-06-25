---
title: "ItemCollectionElementViewModel"
description: "Auto-generated class reference for ItemCollectionElementViewModel."
---
# ItemCollectionElementViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class ItemCollectionElementViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection/ItemCollectionElementViewModel.cs`

## Overview

`ItemCollectionElementViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.

## Mental Model

Treat `ItemCollectionElementViewModel` as a ViewModel-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringId` | `public string StringId { get; set; }` |
| `Ammo` | `public int Ammo { get; set; }` |
| `AverageUnitCost` | `public int AverageUnitCost { get; set; }` |
| `ItemModifierId` | `public string ItemModifierId { get; set; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |
| `InitialPanRotation` | `public float InitialPanRotation { get; set; }` |

## Key Methods

### FillFrom
`public void FillFrom(EquipmentElement item, Banner banner = null)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ItemCollectionElementViewModel from the subsystem API first
ItemCollectionElementViewModel itemCollectionElementViewModel = ...;
itemCollectionElementViewModel.FillFrom(item, null);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of ItemCollectionElementViewModel from the subsystem API first
ItemCollectionElementViewModel itemCollectionElementViewModel = ...;
itemCollectionElementViewModel.OnFinalize();
```

## Usage Example

```csharp
// Bind the instance as the view-model of a movie or view
ItemCollectionElementViewModel vm = ...;
movie.SetViewModel(vm);
```

## See Also

- [Area Index](../)