---
title: "MPLobbyInformationPopup"
description: "Auto-generated class reference for MPLobbyInformationPopup."
---
# MPLobbyInformationPopup

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyInformationPopup : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup/MPLobbyInformationPopup.cs`

## Overview

`MPLobbyInformationPopup` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Message` | `public string Message { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyInformationPopup from the subsystem API first
MPLobbyInformationPopup mPLobbyInformationPopup = ...;
mPLobbyInformationPopup.RefreshValues();
```

### ShowInformation
`public void ShowInformation(TextObject title, TextObject message)`

**Purpose:** Displays the UI or element associated with `information`.

```csharp
// Obtain an instance of MPLobbyInformationPopup from the subsystem API first
MPLobbyInformationPopup mPLobbyInformationPopup = ...;
mPLobbyInformationPopup.ShowInformation(title, message);
```

### ShowInformation
`public void ShowInformation(string title, string message)`

**Purpose:** Displays the UI or element associated with `information`.

```csharp
// Obtain an instance of MPLobbyInformationPopup from the subsystem API first
MPLobbyInformationPopup mPLobbyInformationPopup = ...;
mPLobbyInformationPopup.ShowInformation("example", "example");
```

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** Runs the operation or workflow associated with `close`.

```csharp
// Obtain an instance of MPLobbyInformationPopup from the subsystem API first
MPLobbyInformationPopup mPLobbyInformationPopup = ...;
mPLobbyInformationPopup.ExecuteClose();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `done input key` and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyInformationPopup from the subsystem API first
MPLobbyInformationPopup mPLobbyInformationPopup = ...;
mPLobbyInformationPopup.SetDoneInputKey(hotkey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyInformationPopup mPLobbyInformationPopup = ...;
mPLobbyInformationPopup.RefreshValues();
```

## See Also

- [Area Index](../)