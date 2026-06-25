---
title: "MPLobbyPartyJoinRequestPopupVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyPartyJoinRequestPopupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyPartyJoinRequestPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPartyJoinRequestPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyPartyJoinRequestPopupVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OpenWith
`public void OpenWith(PlayerId joiningPlayer, PlayerId viaPlayerId, string viaPlayerName)`

**Purpose:** Handles logic related to `open with`.

### OpenWithNewParty
`public void OpenWithNewParty(PlayerId joiningPlayer)`

**Purpose:** Handles logic related to `open with new party`.

### Close
`public void Close()`

**Purpose:** Handles logic related to `close`.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

## Usage Example

```csharp
var value = new MPLobbyPartyJoinRequestPopupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)