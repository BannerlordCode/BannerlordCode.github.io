---
title: "MPLobbyFriendsVM"
description: "Auto-generated class reference for MPLobbyFriendsVM."
---
# MPLobbyFriendsVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyFriendsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyFriendsVM.cs`

## Overview

`MPLobbyFriendsVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsListEnabled` | `public bool IsListEnabled { get; set; }` |
| `IsPlayerActionsActive` | `public bool IsPlayerActionsActive { get; set; }` |
| `IsPartyAvailable` | `public bool IsPartyAvailable { get; set; }` |
| `IsPartyFull` | `public bool IsPartyFull { get; set; }` |
| `IsInParty` | `public bool IsInParty { get; set; }` |
| `Player` | `public MPLobbyPartyPlayerVM Player { get; set; }` |
| `PartyFriends` | `public MBBindingList<MPLobbyPartyPlayerVM> PartyFriends { get; set; }` |
| `PlayerActions` | `public MBBindingList<StringPairItemWithActionVM> PlayerActions { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `InGameText` | `public string InGameText { get; set; }` |
| `OnlineText` | `public string OnlineText { get; set; }` |
| `OfflineText` | `public string OfflineText { get; set; }` |
| `FriendListHint` | `public HintViewModel FriendListHint { get; set; }` |
| `FriendServices` | `public MBBindingList<MPLobbyFriendServiceVM> FriendServices { get; set; }` |
| `ActiveService` | `public MPLobbyFriendServiceVM ActiveService { get; set; }` |
| `TotalOnlineFriendCount` | `public int TotalOnlineFriendCount { get; set; }` |
| `NotificationCount` | `public int NotificationCount { get; set; }` |
| `HasNotification` | `public bool HasNotification { get; set; }` |
| `ToggleInputKey` | `public InputKeyItemVM ToggleInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyFriendsVM from the subsystem API first
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MPLobbyFriendsVM from the subsystem API first
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnFinalize();
```

### OnStateActivate
`public void OnStateActivate()`

**Purpose:** Invoked when the `state activate` event is raised.

```csharp
// Obtain an instance of MPLobbyFriendsVM from the subsystem API first
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnStateActivate();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of MPLobbyFriendsVM from the subsystem API first
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnTick(0);
```

### OnPlayerInvitedToParty
`public void OnPlayerInvitedToParty(PlayerId playerId)`

**Purpose:** Invoked when the `player invited to party` event is raised.

```csharp
// Obtain an instance of MPLobbyFriendsVM from the subsystem API first
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnPlayerInvitedToParty(playerId);
```

### OnPlayerAddedToParty
`public void OnPlayerAddedToParty(PlayerId playerId)`

**Purpose:** Invoked when the `player added to party` event is raised.

```csharp
// Obtain an instance of MPLobbyFriendsVM from the subsystem API first
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnPlayerAddedToParty(playerId);
```

### OnPlayerRemovedFromParty
`public void OnPlayerRemovedFromParty(PlayerId playerId)`

**Purpose:** Invoked when the `player removed from party` event is raised.

```csharp
// Obtain an instance of MPLobbyFriendsVM from the subsystem API first
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnPlayerRemovedFromParty(playerId);
```

### UpdateCanInviteOtherPlayersToParty
`public void UpdateCanInviteOtherPlayersToParty()`

**Purpose:** Recalculates and stores the latest representation of `can invite other players to party`.

```csharp
// Obtain an instance of MPLobbyFriendsVM from the subsystem API first
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.UpdateCanInviteOtherPlayersToParty();
```

### UpdatePartyLeader
`public void UpdatePartyLeader()`

**Purpose:** Recalculates and stores the latest representation of `party leader`.

```csharp
// Obtain an instance of MPLobbyFriendsVM from the subsystem API first
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.UpdatePartyLeader();
```

### OnFriendRequestNotificationsReceived
`public void OnFriendRequestNotificationsReceived(List<LobbyNotification> notifications)`

**Purpose:** Invoked when the `friend request notifications received` event is raised.

```csharp
// Obtain an instance of MPLobbyFriendsVM from the subsystem API first
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnFriendRequestNotificationsReceived(notifications);
```

### GetAllFriends
`public MBBindingList<MPLobbyPlayerBaseVM> GetAllFriends()`

**Purpose:** Reads and returns the `all friends` value held by the current object.

```csharp
// Obtain an instance of MPLobbyFriendsVM from the subsystem API first
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
var result = mPLobbyFriendsVM.GetAllFriends();
```

### OnSupportedFeaturesRefreshed
`public void OnSupportedFeaturesRefreshed(SupportedFeatures supportedFeatures)`

**Purpose:** Invoked when the `supported features refreshed` event is raised.

```csharp
// Obtain an instance of MPLobbyFriendsVM from the subsystem API first
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnSupportedFeaturesRefreshed(supportedFeatures);
```

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**Purpose:** Invoked when the `friend list updated` event is raised.

```csharp
// Obtain an instance of MPLobbyFriendsVM from the subsystem API first
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnFriendListUpdated(false);
```

### SetToggleFriendListKey
`public void SetToggleFriendListKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `toggle friend list key` and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyFriendsVM from the subsystem API first
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.SetToggleFriendListKey(hotkey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.RefreshValues();
```

## See Also

- [Area Index](../)