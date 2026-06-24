<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyFriendGroupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyFriendGroupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyFriendGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyFriendGroupVM.cs`

## Overview

`MPLobbyFriendGroupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `GroupType` | `public FriendGroupType GroupType { get; set; }` |
| `FriendList` | `public MBBindingList<MPLobbyFriendItemVM> FriendList { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### ClearFriends
`public void ClearFriends()`

**Purpose:** Handles logic related to `clear friends`.

### AddFriend
`public void AddFriend(MPLobbyFriendItemVM player)`

**Purpose:** Adds `friend` to the current collection or state.

### RemoveFriend
`public void RemoveFriend(MPLobbyFriendItemVM player)`

**Purpose:** Removes `friend` from the current collection or state.

## Usage Example

```csharp
var value = new MPLobbyFriendGroupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)