<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyClanMatchmakingRequestPopupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClanMatchmakingRequestPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanMatchmakingRequestPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanMatchmakingRequestPopupVM.cs`

## Overview

`MPLobbyClanMatchmakingRequestPopupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsClanMatch` | `public bool IsClanMatch { get; set; }` |
| `IsPracticeMatch` | `public bool IsPracticeMatch { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClanName` | `public string ClanName { get; set; }` |
| `WantsToJoinText` | `public string WantsToJoinText { get; set; }` |
| `DoYouAcceptText` | `public string DoYouAcceptText { get; set; }` |
| `ClanSigil` | `public BannerImageIdentifierVM ClanSigil { get; set; }` |
| `ChallengerPartyLeader` | `public MPLobbyPlayerBaseVM ChallengerPartyLeader { get; set; }` |
| `ChallengerPartyPlayers` | `public MBBindingList<MPLobbyPlayerBaseVM> ChallengerPartyPlayers { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OpenWith
`public void OpenWith(string clanName, string clanSigilCode, Guid partyId, PlayerId challengerPlayerIDs, PlayerId challengerPartyLeaderID, PremadeGameType premadeGameType)`

**Purpose:** Handles logic related to `open with`.

### Close
`public void Close()`

**Purpose:** Handles logic related to `close`.

### ExecuteAcceptMatchmaking
`public void ExecuteAcceptMatchmaking()`

**Purpose:** Executes the `accept matchmaking` operation or workflow.

### ExecuteDeclineMatchmaking
`public void ExecuteDeclineMatchmaking()`

**Purpose:** Executes the `decline matchmaking` operation or workflow.

## Usage Example

```csharp
var value = new MPLobbyClanMatchmakingRequestPopupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)