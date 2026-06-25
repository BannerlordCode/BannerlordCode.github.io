---
title: "MPLobbyClanInvitationPopupVM"
description: "Auto-generated class reference for MPLobbyClanInvitationPopupVM."
---
# MPLobbyClanInvitationPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanInvitationPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanInvitationPopupVM.cs`

## Overview

`MPLobbyClanInvitationPopupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsCreation` | `public bool IsCreation { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClanNameAndTag` | `public string ClanNameAndTag { get; set; }` |
| `InviteReceivedText` | `public string InviteReceivedText { get; set; }` |
| `WithPlayersText` | `public string WithPlayersText { get; set; }` |
| `WantToJoinText` | `public string WantToJoinText { get; set; }` |
| `PartyMembersList` | `public MBBindingList<MPLobbyClanMemberItemVM> PartyMembersList { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClanInvitationPopupVM from the subsystem API first
MPLobbyClanInvitationPopupVM mPLobbyClanInvitationPopupVM = ...;
mPLobbyClanInvitationPopupVM.RefreshValues();
```

### Open
`public void Open(string clanName, string clanTag, bool isCreation)`

**Purpose:** Opens the resource or UI represented by the this instance.

```csharp
// Obtain an instance of MPLobbyClanInvitationPopupVM from the subsystem API first
MPLobbyClanInvitationPopupVM mPLobbyClanInvitationPopupVM = ...;
mPLobbyClanInvitationPopupVM.Open("example", "example", false);
```

### Close
`public void Close()`

**Purpose:** Closes the resource or UI represented by the this instance.

```csharp
// Obtain an instance of MPLobbyClanInvitationPopupVM from the subsystem API first
MPLobbyClanInvitationPopupVM mPLobbyClanInvitationPopupVM = ...;
mPLobbyClanInvitationPopupVM.Close();
```

### UpdateConfirmation
`public void UpdateConfirmation(PlayerId playerId, ClanCreationAnswer answer)`

**Purpose:** Recalculates and stores the latest representation of confirmation.

```csharp
// Obtain an instance of MPLobbyClanInvitationPopupVM from the subsystem API first
MPLobbyClanInvitationPopupVM mPLobbyClanInvitationPopupVM = ...;
mPLobbyClanInvitationPopupVM.UpdateConfirmation(playerId, answer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClanInvitationPopupVM mPLobbyClanInvitationPopupVM = ...;
mPLobbyClanInvitationPopupVM.RefreshValues();
```

## See Also

- [Area Index](../)