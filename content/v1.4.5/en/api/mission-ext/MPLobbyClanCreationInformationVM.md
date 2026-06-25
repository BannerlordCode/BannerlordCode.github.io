---
title: "MPLobbyClanCreationInformationVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyClanCreationInformationVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClanCreationInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanCreationInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanCreationInformationVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### RefreshWith
`public void RefreshWith(ClanHomeInfo info)`

**Purpose:** Refreshes the display or cache of `with`.

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**Purpose:** Called when the `friend list updated` event is raised.

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated()`

**Purpose:** Called when the `player name updated` event is raised.

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** Executes the `open popup` operation or workflow.

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Executes the `close popup` operation or workflow.

## Usage Example

```csharp
var value = new MPLobbyClanCreationInformationVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)