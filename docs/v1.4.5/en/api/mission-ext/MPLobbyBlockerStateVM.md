<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyBlockerStateVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyBlockerStateVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBlockerStateVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyBlockerStateVM.cs`

## Overview

`MPLobbyBlockerStateVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Description` | `public string Description { get; set; }` |

## Key Methods

### OnLobbyStateIsBlocker
`public void OnLobbyStateIsBlocker(TextObject description)`

**Purpose:** Called when the `lobby state is blocker` event is raised.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnLobbyStateNotBlocker
`public void OnLobbyStateNotBlocker()`

**Purpose:** Called when the `lobby state not blocker` event is raised.

## Usage Example

```csharp
var value = new MPLobbyBlockerStateVM();
value.OnLobbyStateIsBlocker(description);
```

## See Also

- [Complete Class Catalog](../catalog)