---
title: "MPLobbyPartyInvitationPopupVM"
description: "Auto-generated class reference for MPLobbyPartyInvitationPopupVM."
---
# MPLobbyPartyInvitationPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPartyInvitationPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyPartyInvitationPopupVM.cs`

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

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyPartyInvitationPopupVM from the subsystem API first
MPLobbyPartyInvitationPopupVM mPLobbyPartyInvitationPopupVM = ...;
mPLobbyPartyInvitationPopupVM.RefreshValues();
```

### OpenWith
`public void OpenWith(PlayerId invitingPlayerID)`

**Purpose:** **Purpose:** Opens the resource or UI associated with with.

```csharp
// Obtain an instance of MPLobbyPartyInvitationPopupVM from the subsystem API first
MPLobbyPartyInvitationPopupVM mPLobbyPartyInvitationPopupVM = ...;
mPLobbyPartyInvitationPopupVM.OpenWith(invitingPlayerID);
```

### Close
`public void Close()`

**Purpose:** **Purpose:** Closes the resource or UI represented by the this instance.

```csharp
// Obtain an instance of MPLobbyPartyInvitationPopupVM from the subsystem API first
MPLobbyPartyInvitationPopupVM mPLobbyPartyInvitationPopupVM = ...;
mPLobbyPartyInvitationPopupVM.Close();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of MPLobbyPartyInvitationPopupVM from the subsystem API first
MPLobbyPartyInvitationPopupVM mPLobbyPartyInvitationPopupVM = ...;
mPLobbyPartyInvitationPopupVM.OnTick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyPartyInvitationPopupVM mPLobbyPartyInvitationPopupVM = ...;
mPLobbyPartyInvitationPopupVM.RefreshValues();
```

## See Also

- [Area Index](../)