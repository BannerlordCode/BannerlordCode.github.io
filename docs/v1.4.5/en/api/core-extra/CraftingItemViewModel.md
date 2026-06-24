<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingItemViewModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingItemViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class CraftingItemViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection/CraftingItemViewModel.cs`

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

**Purpose:** Gets the current value of `weapon class`.

### SetCraftingData
`public void SetCraftingData(WeaponClass weaponClass, WeaponDesignElement craftingPieces)`

**Purpose:** Sets the value or state of `crafting data`.

## Usage Example

```csharp
var vm = new CraftingItemViewModel();
movie.SetViewModel(vm);
```

## See Also

- [Complete Class Catalog](../catalog)