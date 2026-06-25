---
title: "MPLobbyClassFilterVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyClassFilterVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClassFilterVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClassFilterVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyClassFilterVM.cs`

## Overview

`MPLobbyClassFilterVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedClassItem` | `public MPLobbyClassFilterClassItemVM SelectedClassItem { get; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `Factions` | `public MBBindingList<MPLobbyClassFilterFactionItemVM> Factions { get; set; }` |
| `ActiveClassGroups` | `public MBBindingList<MPLobbyClassFilterClassGroupItemVM> ActiveClassGroups { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new MPLobbyClassFilterVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)