<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyFriendsVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyFriendsVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyFriendsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyFriendsVM.cs`

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

### OnPlayerInvitedToParty
`public void OnPlayerInvitedToParty(PlayerId playerId)`

**Purpose:** Called when the `player invited to party` event is raised.

### OnPlayerAddedToParty
`public void OnPlayerAddedToParty(PlayerId playerId)`

**Purpose:** Called when the `player added to party` event is raised.

### OnPlayerRemovedFromParty
`public void OnPlayerRemovedFromParty(PlayerId playerId)`

**Purpose:** Called when the `player removed from party` event is raised.

### UpdateCanInviteOtherPlayersToParty
`public void UpdateCanInviteOtherPlayersToParty()`

**Purpose:** Updates the state or data of `can invite other players to party`.

### UpdatePartyLeader
`public void UpdatePartyLeader()`

**Purpose:** Updates the state or data of `party leader`.

### OnFriendRequestNotificationsReceived
`public void OnFriendRequestNotificationsReceived(List<LobbyNotification> notifications)`

**Purpose:** Called when the `friend request notifications received` event is raised.

### GetAllFriends
`public MBBindingList<MPLobbyPlayerBaseVM> GetAllFriends()`

**Purpose:** Gets the current value of `all friends`.

### OnSupportedFeaturesRefreshed
`public void OnSupportedFeaturesRefreshed(SupportedFeatures supportedFeatures)`

**Purpose:** Called when the `supported features refreshed` event is raised.

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**Purpose:** Called when the `friend list updated` event is raised.

### SetToggleFriendListKey
`public void SetToggleFriendListKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `toggle friend list key`.

## Usage Example

```csharp
var value = new MPLobbyFriendsVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)