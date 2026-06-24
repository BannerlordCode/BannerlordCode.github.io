<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemCollectionElementViewModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemCollectionElementViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class ItemCollectionElementViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection/ItemCollectionElementViewModel.cs`

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

**Purpose:** Handles logic related to `fill from`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var vm = new ItemCollectionElementViewModel();
movie.SetViewModel(vm);
```

## See Also

- [Complete Class Catalog](../catalog)