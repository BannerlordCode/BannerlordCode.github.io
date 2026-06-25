---
title: "MPLobbyQueryPopupVM"
description: "Auto-generated class reference for MPLobbyQueryPopupVM."
---
# MPLobbyQueryPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyQueryPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup/MPLobbyQueryPopupVM.cs`

## Overview

`MPLobbyQueryPopupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsInquiry` | `public bool IsInquiry { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Message` | `public string Message { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyQueryPopupVM from the subsystem API first
MPLobbyQueryPopupVM mPLobbyQueryPopupVM = ...;
mPLobbyQueryPopupVM.RefreshValues();
```

### ShowMessage
`public void ShowMessage(TextObject title, TextObject message)`

**Purpose:** Displays the UI or element associated with message.

```csharp
// Obtain an instance of MPLobbyQueryPopupVM from the subsystem API first
MPLobbyQueryPopupVM mPLobbyQueryPopupVM = ...;
mPLobbyQueryPopupVM.ShowMessage(title, message);
```

### ShowInquiry
`public void ShowInquiry(TextObject title, TextObject message, Action onAccepted, Action onDeclined)`

**Purpose:** Displays the UI or element associated with inquiry.

```csharp
// Obtain an instance of MPLobbyQueryPopupVM from the subsystem API first
MPLobbyQueryPopupVM mPLobbyQueryPopupVM = ...;
mPLobbyQueryPopupVM.ShowInquiry(title, message, onAccepted, onDeclined);
```

### ExecuteAccept
`public void ExecuteAccept()`

**Purpose:** Runs the operation or workflow associated with accept.

```csharp
// Obtain an instance of MPLobbyQueryPopupVM from the subsystem API first
MPLobbyQueryPopupVM mPLobbyQueryPopupVM = ...;
mPLobbyQueryPopupVM.ExecuteAccept();
```

### ExecuteDecline
`public void ExecuteDecline()`

**Purpose:** Runs the operation or workflow associated with decline.

```csharp
// Obtain an instance of MPLobbyQueryPopupVM from the subsystem API first
MPLobbyQueryPopupVM mPLobbyQueryPopupVM = ...;
mPLobbyQueryPopupVM.ExecuteDecline();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyQueryPopupVM from the subsystem API first
MPLobbyQueryPopupVM mPLobbyQueryPopupVM = ...;
mPLobbyQueryPopupVM.SetDoneInputKey(hotkey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyQueryPopupVM from the subsystem API first
MPLobbyQueryPopupVM mPLobbyQueryPopupVM = ...;
mPLobbyQueryPopupVM.SetCancelInputKey(hotkey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyQueryPopupVM mPLobbyQueryPopupVM = ...;
mPLobbyQueryPopupVM.RefreshValues();
```

## See Also

- [Area Index](../)