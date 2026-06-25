---
title: "MPLobbyBannerlordIDAddFriendPopupVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyBannerlordIDAddFriendPopupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyBannerlordIDAddFriendPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBannerlordIDAddFriendPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyBannerlordIDAddFriendPopupVM.cs`

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

**Purpose:** Executes the `open popup` operation or workflow.

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Executes the `close popup` operation or workflow.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteTryAddFriend
`public async void ExecuteTryAddFriend()`

**Purpose:** Executes the `try add friend` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

## Usage Example

```csharp
var value = new MPLobbyBannerlordIDAddFriendPopupVM();
value.ExecuteOpenPopup();
```

## See Also

- [Complete Class Catalog](../catalog)