---
title: "HeroInformationVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroInformationVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HeroInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HeroInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/HeroInformationVM.cs`

## Overview

`HeroInformationVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HeroClass` | `public MPHeroClass HeroClass { get; }` |
| `ArmySizeHint` | `public HintViewModel ArmySizeHint { get; set; }` |
| `MovementSpeedHint` | `public HintViewModel MovementSpeedHint { get; set; }` |
| `HitPointsHint` | `public HintViewModel HitPointsHint { get; set; }` |
| `ArmorHint` | `public HintViewModel ArmorHint { get; set; }` |
| `Item1` | `public ShallowItemVM Item1 { get; set; }` |
| `Item2` | `public ShallowItemVM Item2 { get; set; }` |
| `Item3` | `public ShallowItemVM Item3 { get; set; }` |
| `Item4` | `public ShallowItemVM Item4 { get; set; }` |
| `ItemHorse` | `public ShallowItemVM ItemHorse { get; set; }` |
| `ItemSelected` | `public ShallowItemVM ItemSelected { get; set; }` |
| `Information` | `public string Information { get; set; }` |
| `EquipmentText` | `public string EquipmentText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `MovementSpeed` | `public int MovementSpeed { get; set; }` |
| `ArmySize` | `public int ArmySize { get; set; }` |
| `HitPoints` | `public int HitPoints { get; set; }` |
| `Armor` | `public int Armor { get; set; }` |
| `IsArmyAvailable` | `public bool IsArmyAvailable { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshWith
`public void RefreshWith(MPHeroClass heroClass, List<IReadOnlyPerkObject> perks)`

**Purpose:** Refreshes the display or cache of `with`.

### UpdateHighlightedItem
`public void UpdateHighlightedItem(ShallowItemVM item)`

**Purpose:** Updates the state or data of `highlighted item`.

## Usage Example

```csharp
var value = new HeroInformationVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)