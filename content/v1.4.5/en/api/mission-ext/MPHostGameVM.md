---
title: "MPHostGameVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPHostGameVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPHostGameVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPHostGameVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame/MPHostGameVM.cs`

## Overview

`MPHostGameVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HostGameOptions` | `public MPHostGameOptionsVM HostGameOptions { get; set; }` |
| `CreateText` | `public string CreateText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteStart
`public void ExecuteStart()`

**Purpose:** Executes the `start` operation or workflow.

## Usage Example

```csharp
var value = new MPHostGameVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)