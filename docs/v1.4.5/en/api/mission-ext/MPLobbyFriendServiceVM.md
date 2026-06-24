<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyFriendServiceVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyFriendServiceVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyFriendServiceVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyFriendServiceVM.cs`

## Overview

`MPLobbyFriendServiceVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInGameStatusActive` | `public bool IsInGameStatusActive { get; set; }` |
| `InGameFriends` | `public MPLobbyFriendGroupVM InGameFriends { get; set; }` |
| `OnlineFriends` | `public MPLobbyFriendGroupVM OnlineFriends { get; set; }` |
| `OfflineFriends` | `public MPLobbyFriendGroupVM OfflineFriends { get; set; }` |
| `InGameText` | `public string InGameText { get; set; }` |
| `OnlineText` | `public string OnlineText { get; set; }` |
| `OfflineText` | `public string OfflineText { get; set; }` |
| `ServiceName` | `public string ServiceName { get; set; }` |
| `FriendRequests` | `public MPLobbyFriendGroupVM FriendRequests { get; set; }` |
| `GotAnyFriendRequests` | `public bool GotAnyFriendRequests { get; set; }` |
| `PendingRequests` | `public MPLobbyFriendGroupVM PendingRequests { get; set; }` |
| `GotAnyPendingRequests` | `public bool GotAnyPendingRequests { get; set; }` |
| `ServiceNameHint` | `public HintViewModel ServiceNameHint { get; set; }` |

## Key Methods

### Compare
`public int Compare(MPLobbyPlayerBaseVM x, MPLobbyPlayerBaseVM y)`

**Purpose:** Handles logic related to `compare`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnStateActivate
`public void OnStateActivate()`

**Purpose:** Called when the `state activate` event is raised.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### ForceRefresh
`public void ForceRefresh()`

**Purpose:** Handles logic related to `force refresh`.

### UpdateCanInviteOtherPlayersToParty
`public void UpdateCanInviteOtherPlayersToParty()`

**Purpose:** Updates the state or data of `can invite other players to party`.

### OnFriendListUpdated
`public void OnFriendListUpdated(bool updateForced = false)`

**Purpose:** Called when the `friend list updated` event is raised.

## Usage Example

```csharp
var value = new MPLobbyFriendServiceVM();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)