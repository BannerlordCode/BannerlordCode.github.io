---
title: "MPLobbyInformationPopup"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyInformationPopup`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyInformationPopup

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyInformationPopup : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup/MPLobbyInformationPopup.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### ShowInformation
`public void ShowInformation(TextObject title, TextObject message)`

**Purpose:** Handles logic related to `show information`.

### ShowInformation
`public void ShowInformation(string title, string message)`

**Purpose:** Handles logic related to `show information`.

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** Executes the `close` operation or workflow.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `done input key`.

## Usage Example

```csharp
var value = new MPLobbyInformationPopup();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)