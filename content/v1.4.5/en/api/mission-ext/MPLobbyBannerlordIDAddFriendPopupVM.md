---
title: "MPLobbyBannerlordIDAddFriendPopupVM"
description: "Auto-generated class reference for MPLobbyBannerlordIDAddFriendPopupVM."
---
# MPLobbyBannerlordIDAddFriendPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBannerlordIDAddFriendPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyBannerlordIDAddFriendPopupVM.cs`

## Overview

`MPLobbyBannerlordIDAddFriendPopupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `AddText` | `public string AddText { get; set; }` |
| `ErrorText` | `public string ErrorText { get; set; }` |
| `BannerlordIDInputText` | `public string BannerlordIDInputText { get; set; }` |

## Key Methods

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with open popup.

```csharp
// Obtain an instance of MPLobbyBannerlordIDAddFriendPopupVM from the subsystem API first
MPLobbyBannerlordIDAddFriendPopupVM mPLobbyBannerlordIDAddFriendPopupVM = ...;
mPLobbyBannerlordIDAddFriendPopupVM.ExecuteOpenPopup();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close popup.

```csharp
// Obtain an instance of MPLobbyBannerlordIDAddFriendPopupVM from the subsystem API first
MPLobbyBannerlordIDAddFriendPopupVM mPLobbyBannerlordIDAddFriendPopupVM = ...;
mPLobbyBannerlordIDAddFriendPopupVM.ExecuteClosePopup();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyBannerlordIDAddFriendPopupVM from the subsystem API first
MPLobbyBannerlordIDAddFriendPopupVM mPLobbyBannerlordIDAddFriendPopupVM = ...;
mPLobbyBannerlordIDAddFriendPopupVM.RefreshValues();
```

### ExecuteTryAddFriend
`public async void ExecuteTryAddFriend()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with try add friend.

```csharp
// Obtain an instance of MPLobbyBannerlordIDAddFriendPopupVM from the subsystem API first
MPLobbyBannerlordIDAddFriendPopupVM mPLobbyBannerlordIDAddFriendPopupVM = ...;
mPLobbyBannerlordIDAddFriendPopupVM.ExecuteTryAddFriend();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPLobbyBannerlordIDAddFriendPopupVM from the subsystem API first
MPLobbyBannerlordIDAddFriendPopupVM mPLobbyBannerlordIDAddFriendPopupVM = ...;
mPLobbyBannerlordIDAddFriendPopupVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyBannerlordIDAddFriendPopupVM from the subsystem API first
MPLobbyBannerlordIDAddFriendPopupVM mPLobbyBannerlordIDAddFriendPopupVM = ...;
mPLobbyBannerlordIDAddFriendPopupVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyBannerlordIDAddFriendPopupVM from the subsystem API first
MPLobbyBannerlordIDAddFriendPopupVM mPLobbyBannerlordIDAddFriendPopupVM = ...;
mPLobbyBannerlordIDAddFriendPopupVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyBannerlordIDAddFriendPopupVM mPLobbyBannerlordIDAddFriendPopupVM = ...;
mPLobbyBannerlordIDAddFriendPopupVM.ExecuteOpenPopup();
```

## See Also

- [Area Index](../)