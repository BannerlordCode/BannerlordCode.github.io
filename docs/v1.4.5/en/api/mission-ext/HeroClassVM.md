<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroClassVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HeroClassVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HeroClassVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/HeroClassVM.cs`

## Overview

`HeroClassVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedPerks` | `public List<IReadOnlyPerkObject> SelectedPerks { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Perks` | `public MBBindingList<HeroPerkVM> Perks { get; set; }` |
| `CultureId` | `public string CultureId { get; set; }` |
| `TroopTypeId` | `public string TroopTypeId { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IconType` | `public string IconType { get; set; }` |
| `Gold` | `public int Gold { get; set; }` |
| `NumOfTroops` | `public int NumOfTroops { get; set; }` |
| `IsGoldEnabled` | `public bool IsGoldEnabled { get; set; }` |
| `IsNumOfTroopsEnabled` | `public bool IsNumOfTroopsEnabled { get; set; }` |
| `CultureColor` | `public Color CultureColor { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### UpdateEnabled
`public void UpdateEnabled()`

**Purpose:** Updates the state or data of `enabled`.

### OnSelect
`public void OnSelect()`

**Purpose:** Called when the `select` event is raised.

## Usage Example

```csharp
var value = new HeroClassVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)