<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DCSHelperMapItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DCSHelperMapItemVM

**Namespace:** TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DCSHelperMapItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/DCSHelperMapItemVM.cs`

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

**Purpose:** Executes the `toggle selection` operation or workflow.

### RefreshLocalMapData
`public void RefreshLocalMapData()`

**Purpose:** Refreshes the display or cache of `local map data`.

## Usage Example

```csharp
var value = new DCSHelperMapItemVM();
value.ExecuteToggleSelection();
```

## See Also

- [Complete Class Catalog](../catalog)