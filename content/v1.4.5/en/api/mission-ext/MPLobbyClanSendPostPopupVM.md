---
title: "MPLobbyClanSendPostPopupVM"
description: "Auto-generated class reference for MPLobbyClanSendPostPopupVM."
---
# MPLobbyClanSendPostPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanSendPostPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanSendPostPopupVM.cs`

## Overview

`MPLobbyClanSendPostPopupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `PostData` | `public string PostData { get; set; }` |
| `SendText` | `public string SendText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClanSendPostPopupVM from the subsystem API first
MPLobbyClanSendPostPopupVM mPLobbyClanSendPostPopupVM = ...;
mPLobbyClanSendPostPopupVM.RefreshValues();
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** Runs the operation or workflow associated with open popup.

```csharp
// Obtain an instance of MPLobbyClanSendPostPopupVM from the subsystem API first
MPLobbyClanSendPostPopupVM mPLobbyClanSendPostPopupVM = ...;
mPLobbyClanSendPostPopupVM.ExecuteOpenPopup();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Runs the operation or workflow associated with close popup.

```csharp
// Obtain an instance of MPLobbyClanSendPostPopupVM from the subsystem API first
MPLobbyClanSendPostPopupVM mPLobbyClanSendPostPopupVM = ...;
mPLobbyClanSendPostPopupVM.ExecuteClosePopup();
```

### ExecuteSend
`public void ExecuteSend()`

**Purpose:** Runs the operation or workflow associated with send.

```csharp
// Obtain an instance of MPLobbyClanSendPostPopupVM from the subsystem API first
MPLobbyClanSendPostPopupVM mPLobbyClanSendPostPopupVM = ...;
mPLobbyClanSendPostPopupVM.ExecuteSend();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPLobbyClanSendPostPopupVM from the subsystem API first
MPLobbyClanSendPostPopupVM mPLobbyClanSendPostPopupVM = ...;
mPLobbyClanSendPostPopupVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyClanSendPostPopupVM from the subsystem API first
MPLobbyClanSendPostPopupVM mPLobbyClanSendPostPopupVM = ...;
mPLobbyClanSendPostPopupVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyClanSendPostPopupVM from the subsystem API first
MPLobbyClanSendPostPopupVM mPLobbyClanSendPostPopupVM = ...;
mPLobbyClanSendPostPopupVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClanSendPostPopupVM mPLobbyClanSendPostPopupVM = ...;
mPLobbyClanSendPostPopupVM.RefreshValues();
```

## See Also

- [Area Index](../)