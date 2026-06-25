---
title: "MPArmoryHeroPerkSelectionVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPArmoryHeroPerkSelectionVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPArmoryHeroPerkSelectionVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryHeroPerkSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory/MPArmoryHeroPerkSelectionVM.cs`

## Overview

`MPArmoryHeroPerkSelectionVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentHeroClass` | `public MPHeroClass CurrentHeroClass { get; }` |
| `CurrentSelectedPerks` | `public List<IReadOnlyPerkObject> CurrentSelectedPerks { get; }` |
| `Perks` | `public MBBindingList<HeroPerkVM> Perks { get; set; }` |
| `GameModes` | `public SelectorVM<SelectorItemVM> GameModes { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshPerksListWithHero
`public void RefreshPerksListWithHero(MPHeroClass heroClass)`

**Purpose:** Refreshes the display or cache of `perks list with hero`.

## Usage Example

```csharp
var value = new MPArmoryHeroPerkSelectionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)