<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPHostGameOptionsVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPHostGameOptionsVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPHostGameOptionsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame/MPHostGameOptionsVM.cs`

## Overview

`MPHostGameOptionsVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GeneralOptions` | `public MBBindingList<GenericHostGameOptionDataVM> GeneralOptions { get; set; }` |
| `IsRefreshed` | `public bool IsRefreshed { get; set; }` |
| `IsInMission` | `public bool IsInMission { get; set; }` |

## Key Methods

### Compare
`public int Compare(GenericHostGameOptionDataVM x, GenericHostGameOptionDataVM y)`

**Purpose:** Handles logic related to `compare`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new MPHostGameOptionsVM();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)