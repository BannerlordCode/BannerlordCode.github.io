---
title: "MPLobbyFriendGroupVM"
description: "Auto-generated class reference for MPLobbyFriendGroupVM."
---
# MPLobbyFriendGroupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyFriendGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyFriendGroupVM.cs`

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

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyFriendGroupVM from the subsystem API first
MPLobbyFriendGroupVM mPLobbyFriendGroupVM = ...;
mPLobbyFriendGroupVM.RefreshValues();
```

### Tick
`public void Tick()`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MPLobbyFriendGroupVM from the subsystem API first
MPLobbyFriendGroupVM mPLobbyFriendGroupVM = ...;
mPLobbyFriendGroupVM.Tick();
```

### ClearFriends
`public void ClearFriends()`

**Purpose:** Removes all friends from the this instance.

```csharp
// Obtain an instance of MPLobbyFriendGroupVM from the subsystem API first
MPLobbyFriendGroupVM mPLobbyFriendGroupVM = ...;
mPLobbyFriendGroupVM.ClearFriends();
```

### AddFriend
`public void AddFriend(MPLobbyFriendItemVM player)`

**Purpose:** Adds friend to the current collection or state.

```csharp
// Obtain an instance of MPLobbyFriendGroupVM from the subsystem API first
MPLobbyFriendGroupVM mPLobbyFriendGroupVM = ...;
mPLobbyFriendGroupVM.AddFriend(player);
```

### RemoveFriend
`public void RemoveFriend(MPLobbyFriendItemVM player)`

**Purpose:** Removes friend from the current collection or state.

```csharp
// Obtain an instance of MPLobbyFriendGroupVM from the subsystem API first
MPLobbyFriendGroupVM mPLobbyFriendGroupVM = ...;
mPLobbyFriendGroupVM.RemoveFriend(player);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyFriendGroupVM mPLobbyFriendGroupVM = ...;
mPLobbyFriendGroupVM.RefreshValues();
```

## See Also

- [Area Index](../)