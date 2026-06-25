---
title: "MPArmoryClassStatsVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPArmoryClassStatsVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPArmoryClassStatsVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryClassStatsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory/MPArmoryClassStatsVM.cs`

## Overview

`MPArmoryClassStatsVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FactionDescription` | `public string FactionDescription { get; set; }` |
| `FactionName` | `public string FactionName { get; set; }` |
| `FlavorText` | `public string FlavorText { get; set; }` |
| `Cost` | `public int Cost { get; set; }` |
| `CostHint` | `public HintViewModel CostHint { get; set; }` |
| `HeroInformation` | `public HeroInformationVM HeroInformation { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshWith
`public void RefreshWith(MPHeroClass heroClass)`

**Purpose:** Refreshes the display or cache of `with`.

## Usage Example

```csharp
var value = new MPArmoryClassStatsVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)