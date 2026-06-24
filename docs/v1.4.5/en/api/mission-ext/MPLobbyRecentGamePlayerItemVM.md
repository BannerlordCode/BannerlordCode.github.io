<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyRecentGamePlayerItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyRecentGamePlayerItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRecentGamePlayerItemVM : MPLobbyPlayerBaseVM`
**Base:** `MPLobbyPlayerBaseVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRecentGamePlayerItemVM.cs`

## Overview

`MPLobbyRecentGamePlayerItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `KillCount` | `public int KillCount { get; set; }` |
| `DeathCount` | `public int DeathCount { get; set; }` |
| `AssistCount` | `public int AssistCount { get; set; }` |

## Key Methods

### MPLobbyRecentGamePlayerItemVM
`public unsafe MPLobbyRecentGamePlayerItemVM(PlayerId playerId, MatchHistoryData matchOfThePlayer, Action<MPLobbyRecentGamePlayerItemVM> onActivatePlayerActions)`

**Purpose:** Handles logic related to `m p lobby recent game player item v m`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new MPLobbyRecentGamePlayerItemVM();
value.MPLobbyRecentGamePlayerItemVM(playerId, matchOfThePlayer, onActivatePlayerActions);
```

## See Also

- [Complete Class Catalog](../catalog)