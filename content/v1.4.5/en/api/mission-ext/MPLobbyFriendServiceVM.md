---
title: "MPLobbyFriendServiceVM"
description: "Auto-generated class reference for MPLobbyFriendServiceVM."
---
# MPLobbyFriendServiceVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyFriendServiceVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyFriendServiceVM.cs`

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

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MPLobbyFriendServiceVM from the subsystem API first
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
var result = mPLobbyFriendServiceVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyFriendServiceVM from the subsystem API first
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
mPLobbyFriendServiceVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPLobbyFriendServiceVM from the subsystem API first
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
mPLobbyFriendServiceVM.OnFinalize();
```

### OnStateActivate
`public void OnStateActivate()`

**Purpose:** **Purpose:** Invoked when the state activate event is raised.

```csharp
// Obtain an instance of MPLobbyFriendServiceVM from the subsystem API first
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
mPLobbyFriendServiceVM.OnStateActivate();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of MPLobbyFriendServiceVM from the subsystem API first
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
mPLobbyFriendServiceVM.OnTick(0);
```

### ForceRefresh
`public void ForceRefresh()`

**Purpose:** **Purpose:** Executes the ForceRefresh logic.

```csharp
// Obtain an instance of MPLobbyFriendServiceVM from the subsystem API first
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
mPLobbyFriendServiceVM.ForceRefresh();
```

### UpdateCanInviteOtherPlayersToParty
`public void UpdateCanInviteOtherPlayersToParty()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of can invite other players to party.

```csharp
// Obtain an instance of MPLobbyFriendServiceVM from the subsystem API first
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
mPLobbyFriendServiceVM.UpdateCanInviteOtherPlayersToParty();
```

### OnFriendListUpdated
`public void OnFriendListUpdated(bool updateForced = false)`

**Purpose:** **Purpose:** Invoked when the friend list updated event is raised.

```csharp
// Obtain an instance of MPLobbyFriendServiceVM from the subsystem API first
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
mPLobbyFriendServiceVM.OnFriendListUpdated(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
mPLobbyFriendServiceVM.Compare(x, y);
```

## See Also

- [Area Index](../)