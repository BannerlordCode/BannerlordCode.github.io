---
title: "MPLobbyPartyInvitationPopupVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyPartyInvitationPopupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyPartyInvitationPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPartyInvitationPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyPartyInvitationPopupVM.cs`

## Overview

`MPLobbyPartyInvitationPopupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Message` | `public string Message { get; set; }` |
| `InvitingPlayer` | `public MPLobbyPlayerBaseVM InvitingPlayer { get; set; }` |
| `RemainingAnswerDuration` | `public float RemainingAnswerDuration { get; set; }` |
| `MaxAnswerDuration` | `public float MaxAnswerDuration { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OpenWith
`public void OpenWith(PlayerId invitingPlayerID)`

**Purpose:** Handles logic related to `open with`.

### Close
`public void Close()`

**Purpose:** Handles logic related to `close`.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

## Usage Example

```csharp
var value = new MPLobbyPartyInvitationPopupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)