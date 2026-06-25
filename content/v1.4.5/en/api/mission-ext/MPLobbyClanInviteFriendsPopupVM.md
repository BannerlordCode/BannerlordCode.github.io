---
title: "MPLobbyClanInviteFriendsPopupVM"
description: "Auto-generated class reference for MPLobbyClanInviteFriendsPopupVM."
---
# MPLobbyClanInviteFriendsPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanInviteFriendsPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanInviteFriendsPopupVM.cs`

## Overview

`MPLobbyClanInviteFriendsPopupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `InviteText` | `public string InviteText { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `SelectPlayersText` | `public string SelectPlayersText { get; set; }` |
| `OnlineFriends` | `public MBBindingList<MPLobbyPlayerBaseVM> OnlineFriends { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClanInviteFriendsPopupVM from the subsystem API first
MPLobbyClanInviteFriendsPopupVM mPLobbyClanInviteFriendsPopupVM = ...;
mPLobbyClanInviteFriendsPopupVM.RefreshValues();
```

### Open
`public void Open()`

**Purpose:** Opens the resource or UI represented by the this instance.

```csharp
// Obtain an instance of MPLobbyClanInviteFriendsPopupVM from the subsystem API first
MPLobbyClanInviteFriendsPopupVM mPLobbyClanInviteFriendsPopupVM = ...;
mPLobbyClanInviteFriendsPopupVM.Open();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Runs the operation or workflow associated with close popup.

```csharp
// Obtain an instance of MPLobbyClanInviteFriendsPopupVM from the subsystem API first
MPLobbyClanInviteFriendsPopupVM mPLobbyClanInviteFriendsPopupVM = ...;
mPLobbyClanInviteFriendsPopupVM.ExecuteClosePopup();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClanInviteFriendsPopupVM mPLobbyClanInviteFriendsPopupVM = ...;
mPLobbyClanInviteFriendsPopupVM.RefreshValues();
```

## See Also

- [Area Index](../)