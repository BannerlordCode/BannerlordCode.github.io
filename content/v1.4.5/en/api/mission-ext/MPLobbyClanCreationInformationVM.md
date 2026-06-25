---
title: "MPLobbyClanCreationInformationVM"
description: "Auto-generated class reference for MPLobbyClanCreationInformationVM."
---
# MPLobbyClanCreationInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanCreationInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanCreationInformationVM.cs`

## Overview

`MPLobbyClanCreationInformationVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CanCreateClan` | `public bool CanCreateClan { get; set; }` |
| `DoesHaveEnoughPlayersToCreateClan` | `public bool DoesHaveEnoughPlayersToCreateClan { get; set; }` |
| `CurrentPlayerCount` | `public int CurrentPlayerCount { get; set; }` |
| `RequiredPlayerCount` | `public int RequiredPlayerCount { get; set; }` |
| `CreateClanText` | `public string CreateClanText { get; set; }` |
| `CreateClanDescriptionText` | `public string CreateClanDescriptionText { get; set; }` |
| `DontHaveEnoughPlayersInPartyText` | `public string DontHaveEnoughPlayersInPartyText { get; set; }` |
| `PartyMemberCountText` | `public string PartyMemberCountText { get; set; }` |
| `PlayerText` | `public string PlayerText { get; set; }` |
| `CreateYourClanText` | `public string CreateYourClanText { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `PartyMembers` | `public MBBindingList<MPLobbyClanMemberItemVM> PartyMembers { get; set; }` |
| `CantCreateHint` | `public HintViewModel CantCreateHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClanCreationInformationVM from the subsystem API first
MPLobbyClanCreationInformationVM mPLobbyClanCreationInformationVM = ...;
mPLobbyClanCreationInformationVM.RefreshValues();
```

### RefreshWith
`public void RefreshWith(ClanHomeInfo info)`

**Purpose:** **Purpose:** Keeps the display or cache of with in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClanCreationInformationVM from the subsystem API first
MPLobbyClanCreationInformationVM mPLobbyClanCreationInformationVM = ...;
mPLobbyClanCreationInformationVM.RefreshWith(info);
```

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**Purpose:** **Purpose:** Invoked when the friend list updated event is raised.

```csharp
// Obtain an instance of MPLobbyClanCreationInformationVM from the subsystem API first
MPLobbyClanCreationInformationVM mPLobbyClanCreationInformationVM = ...;
mPLobbyClanCreationInformationVM.OnFriendListUpdated(false);
```

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated()`

**Purpose:** **Purpose:** Invoked when the player name updated event is raised.

```csharp
// Obtain an instance of MPLobbyClanCreationInformationVM from the subsystem API first
MPLobbyClanCreationInformationVM mPLobbyClanCreationInformationVM = ...;
mPLobbyClanCreationInformationVM.OnPlayerNameUpdated();
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with open popup.

```csharp
// Obtain an instance of MPLobbyClanCreationInformationVM from the subsystem API first
MPLobbyClanCreationInformationVM mPLobbyClanCreationInformationVM = ...;
mPLobbyClanCreationInformationVM.ExecuteOpenPopup();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close popup.

```csharp
// Obtain an instance of MPLobbyClanCreationInformationVM from the subsystem API first
MPLobbyClanCreationInformationVM mPLobbyClanCreationInformationVM = ...;
mPLobbyClanCreationInformationVM.ExecuteClosePopup();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClanCreationInformationVM mPLobbyClanCreationInformationVM = ...;
mPLobbyClanCreationInformationVM.RefreshValues();
```

## See Also

- [Area Index](../)