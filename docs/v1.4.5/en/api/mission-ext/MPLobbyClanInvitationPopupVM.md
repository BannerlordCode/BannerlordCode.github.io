<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyClanInvitationPopupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClanInvitationPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanInvitationPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanInvitationPopupVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### Open
`public void Open(string clanName, string clanTag, bool isCreation)`

**Purpose:** Handles logic related to `open`.

### Close
`public void Close()`

**Purpose:** Handles logic related to `close`.

### UpdateConfirmation
`public void UpdateConfirmation(PlayerId playerId, ClanCreationAnswer answer)`

**Purpose:** Updates the state or data of `confirmation`.

## Usage Example

```csharp
var value = new MPLobbyClanInvitationPopupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)