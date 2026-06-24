<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BooleanHostGameOptionDataVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BooleanHostGameOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BooleanHostGameOptionDataVM : GenericHostGameOptionDataVM`
**Base:** `GenericHostGameOptionDataVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions/BooleanHostGameOptionDataVM.cs`

## Overview

`BooleanHostGameOptionDataVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Key Methods

### RefreshData
`public override void RefreshData()`

**Purpose:** Refreshes the display or cache of `data`.

## Usage Example

```csharp
var value = new BooleanHostGameOptionDataVM();
value.RefreshData();
```

## See Also

- [Complete Class Catalog](../catalog)