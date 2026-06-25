---
title: "MPLobbyPartyJoinRequestPopupVM"
description: "Auto-generated class reference for MPLobbyPartyJoinRequestPopupVM."
---
# MPLobbyPartyJoinRequestPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPartyJoinRequestPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyPartyJoinRequestPopupVM.cs`

## Overview

`MPLobbyPartyJoinRequestPopupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `AcceptJoinRequestText` | `public string AcceptJoinRequestText { get; set; }` |
| `JoiningPlayerText` | `public string JoiningPlayerText { get; set; }` |
| `JoiningPlayer` | `public MPLobbyPlayerBaseVM JoiningPlayer { get; set; }` |
| `RemainingAnswerDuration` | `public float RemainingAnswerDuration { get; set; }` |
| `MaxAnswerDuration` | `public float MaxAnswerDuration { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyPartyJoinRequestPopupVM from the subsystem API first
MPLobbyPartyJoinRequestPopupVM mPLobbyPartyJoinRequestPopupVM = ...;
mPLobbyPartyJoinRequestPopupVM.RefreshValues();
```

### OpenWith
`public void OpenWith(PlayerId joiningPlayer, PlayerId viaPlayerId, string viaPlayerName)`

**Purpose:** **Purpose:** Opens the resource or UI associated with with.

```csharp
// Obtain an instance of MPLobbyPartyJoinRequestPopupVM from the subsystem API first
MPLobbyPartyJoinRequestPopupVM mPLobbyPartyJoinRequestPopupVM = ...;
mPLobbyPartyJoinRequestPopupVM.OpenWith(joiningPlayer, viaPlayerId, "example");
```

### OpenWithNewParty
`public void OpenWithNewParty(PlayerId joiningPlayer)`

**Purpose:** **Purpose:** Opens the resource or UI associated with with new party.

```csharp
// Obtain an instance of MPLobbyPartyJoinRequestPopupVM from the subsystem API first
MPLobbyPartyJoinRequestPopupVM mPLobbyPartyJoinRequestPopupVM = ...;
mPLobbyPartyJoinRequestPopupVM.OpenWithNewParty(joiningPlayer);
```

### Close
`public void Close()`

**Purpose:** **Purpose:** Closes the resource or UI represented by the this instance.

```csharp
// Obtain an instance of MPLobbyPartyJoinRequestPopupVM from the subsystem API first
MPLobbyPartyJoinRequestPopupVM mPLobbyPartyJoinRequestPopupVM = ...;
mPLobbyPartyJoinRequestPopupVM.Close();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of MPLobbyPartyJoinRequestPopupVM from the subsystem API first
MPLobbyPartyJoinRequestPopupVM mPLobbyPartyJoinRequestPopupVM = ...;
mPLobbyPartyJoinRequestPopupVM.OnTick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyPartyJoinRequestPopupVM mPLobbyPartyJoinRequestPopupVM = ...;
mPLobbyPartyJoinRequestPopupVM.RefreshValues();
```

## See Also

- [Area Index](../)