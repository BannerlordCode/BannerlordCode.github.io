---
title: "GenericHostGameOptionDataVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenericHostGameOptionDataVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GenericHostGameOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GenericHostGameOptionDataVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions/GenericHostGameOptionDataVM.cs`

## Overview

`GenericHostGameOptionDataVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OptionType` | `public OptionType OptionType { get; set; }` |
| `PreferredIndex` | `public int PreferredIndex { get; set; }` |
| `Index` | `public int Index { get; set; }` |
| `Category` | `public int Category { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshData
`public abstract void RefreshData()`

**Purpose:** Refreshes the display or cache of `data`.

## Usage Example

```csharp
var implementation = new CustomGenericHostGameOptionDataVM();
```

## See Also

- [Complete Class Catalog](../catalog)