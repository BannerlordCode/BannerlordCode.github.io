---
title: "DCSHelperMapItemVM"
description: "Auto-generated class reference for DCSHelperMapItemVM."
---
# DCSHelperMapItemVM

**Namespace:** TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DCSHelperMapItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/DCSHelperMapItemVM.cs`

## Overview

`DCSHelperMapItemVM` lives in `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `ExistsLocally` | `public bool ExistsLocally { get; set; }` |
| `IsCautionSpriteVisible` | `public bool IsCautionSpriteVisible { get; set; }` |
| `CurrentlyPlaying` | `public bool CurrentlyPlaying { get; set; }` |
| `CurrentlyPlayingText` | `public string CurrentlyPlayingText { get; set; }` |
| `MapName` | `public string MapName { get; set; }` |
| `MapPathClean` | `public string MapPathClean { get; set; }` |
| `LocalMapHint` | `public BasicTooltipViewModel LocalMapHint { get; set; }` |

## Key Methods

### ExecuteToggleSelection
`public void ExecuteToggleSelection()`

**Purpose:** Runs the operation or workflow associated with toggle selection.

```csharp
// Obtain an instance of DCSHelperMapItemVM from the subsystem API first
DCSHelperMapItemVM dCSHelperMapItemVM = ...;
dCSHelperMapItemVM.ExecuteToggleSelection();
```

### RefreshLocalMapData
`public void RefreshLocalMapData()`

**Purpose:** Keeps the display or cache of local map data in sync with the underlying state.

```csharp
// Obtain an instance of DCSHelperMapItemVM from the subsystem API first
DCSHelperMapItemVM dCSHelperMapItemVM = ...;
dCSHelperMapItemVM.RefreshLocalMapData();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DCSHelperMapItemVM dCSHelperMapItemVM = ...;
dCSHelperMapItemVM.ExecuteToggleSelection();
```

## See Also

- [Area Index](../)