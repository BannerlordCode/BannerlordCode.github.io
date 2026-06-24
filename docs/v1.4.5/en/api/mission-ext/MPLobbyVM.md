<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyVM.cs`

## Overview

`MPLobbyVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentPage` | `public LobbyPage CurrentPage { get; }` |
| `DisallowedPages` | `public List<LobbyPage> DisallowedPages { get; }` |
| `IsLoggedIn` | `public bool IsLoggedIn { get; set; }` |
| `BrightnessPopup` | `public BrightnessOptionVM BrightnessPopup { get; set; }` |
| `ExposurePopup` | `public ExposureOptionVM ExposurePopup { get; set; }` |
| `IsArmoryActive` | `public bool IsArmoryActive { get; set; }` |
| `IsSearchGameRequested` | `public bool IsSearchGameRequested { get; set; }` |
| `IsInParty` | `public bool IsInParty { get; set; }` |
| `IsSearchingGame` | `public bool IsSearchingGame { get; set; }` |
| `IsMatchmakingEnabled` | `public bool IsMatchmakingEnabled { get; set; }` |
| `IsCustomGameFindEnabled` | `public bool IsCustomGameFindEnabled { get; set; }` |
| `IsPartyLeader` | `public bool IsPartyLeader { get; set; }` |
| `BlockerState` | `public MPLobbyBlockerStateVM BlockerState { get; set; }` |
| `Menu` | `public MPLobbyMenuVM Menu { get; set; }` |
| `Login` | `public MPAuthenticationVM Login { get; set; }` |
| `Rejoin` | `public MPLobbyRejoinVM Rejoin { get; set; }` |
| `Friends` | `public MPLobbyFriendsVM Friends { get; set; }` |
| `Home` | `public MPLobbyHomeVM Home { get; set; }` |
| `Matchmaking` | `public MPMatchmakingVM Matchmaking { get; set; }` |
| `Armory` | `public MPArmoryVM Armory { get; set; }` |
| `GameSearch` | `public MPLobbyGameSearchVM GameSearch { get; set; }` |
| `PlayerProfile` | `public MPLobbyPlayerProfileVM PlayerProfile { get; set; }` |
| `AfterBattlePopup` | `public MPAfterBattlePopupVM AfterBattlePopup { get; set; }` |
| `PartyInvitationPopup` | `public MPLobbyPartyInvitationPopupVM PartyInvitationPopup { get; set; }` |
| `PartyJoinRequestPopup` | `public MPLobbyPartyJoinRequestPopupVM PartyJoinRequestPopup { get; set; }` |
| `InformationPopup` | `public MPLobbyInformationPopup InformationPopup { get; set; }` |
| `QueryPopup` | `public MPLobbyQueryPopupVM QueryPopup { get; set; }` |
| `PartyPlayerSuggestionPopup` | `public MPLobbyPartyPlayerSuggestionPopupVM PartyPlayerSuggestionPopup { get; set; }` |
| `Options` | `public MPOptionsVM Options { get; set; }` |
| `Profile` | `public MPLobbyProfileVM Profile { get; set; }` |
| `Clan` | `public MPLobbyClanVM Clan { get; set; }` |
| `ClanCreationPopup` | `public MPLobbyClanCreationPopupVM ClanCreationPopup { get; set; }` |
| `ClanCreationInformationPopup` | `public MPLobbyClanCreationInformationVM ClanCreationInformationPopup { get; set; }` |
| `ClanInvitationPopup` | `public MPLobbyClanInvitationPopupVM ClanInvitationPopup { get; set; }` |
| `ClanMatchmakingRequestPopup` | `public MPLobbyClanMatchmakingRequestPopupVM ClanMatchmakingRequestPopup { get; set; }` |
| `ClanInviteFriendsPopup` | `public MPLobbyClanInviteFriendsPopupVM ClanInviteFriendsPopup { get; set; }` |
| `ClanLeaderboardPopup` | `public MPLobbyClanLeaderboardVM ClanLeaderboardPopup { get; set; }` |
| `CosmeticObtainPopup` | `public MPCosmeticObtainPopupVM CosmeticObtainPopup { get; set; }` |
| `BannerlordIDAddFriendPopup` | `public MPLobbyBannerlordIDAddFriendPopupVM BannerlordIDAddFriendPopup { get; set; }` |
| `BannerlordIDChangePopup` | `public MPLobbyBannerlordIDChangePopup BannerlordIDChangePopup { get; set; }` |
| `BadgeProgressionInformation` | `public MPLobbyBadgeProgressInformationVM BadgeProgressionInformation { get; set; }` |
| `BadgeSelectionPopup` | `public MPLobbyBadgeSelectionPopupVM BadgeSelectionPopup { get; set; }` |
| `ChangeSigilPopup` | `public MPLobbyHomeChangeSigilPopupVM ChangeSigilPopup { get; set; }` |
| `RecentGames` | `public MPLobbyRecentGamesVM RecentGames { get; set; }` |
| `RankProgressInformation` | `public MPLobbyRankProgressInformationVM RankProgressInformation { get; set; }` |
| `RankLeaderboard` | `public MPLobbyRankLeaderboardVM RankLeaderboard { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### CreateInputKeyVisuals
`public void CreateInputKeyVisuals(HotKey cancelInputKey, HotKey doneInputKey, HotKey previousInputKey, HotKey nextInputKey, HotKey firstInputKey, HotKey lastInputKey)`

**Purpose:** Creates a new `input key visuals` instance or object.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnActivate
`public void OnActivate()`

**Purpose:** Called when the `activate` event is raised.

### OnDeactivate
`public void OnDeactivate()`

**Purpose:** Called when the `deactivate` event is raised.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### OnConfirm
`public void OnConfirm()`

**Purpose:** Called when the `confirm` event is raised.

### OnEscape
`public async void OnEscape()`

**Purpose:** Called when the `escape` event is raised.

### HasAnyContextMenuOpen
`public bool HasAnyContextMenuOpen()`

**Purpose:** Checks whether the current object has/contains `any context menu open`.

### ForceCloseContextMenus
`public void ForceCloseContextMenus()`

**Purpose:** Handles logic related to `force close context menus`.

### HasNoPopupOpen
`public bool HasNoPopupOpen()`

**Purpose:** Checks whether the current object has/contains `no popup open`.

### RequestExit
`public async Task RequestExit()`

**Purpose:** Handles logic related to `request exit`.

### ConnectionStateUpdated
`public void ConnectionStateUpdated(bool isAuthenticated)`

**Purpose:** Handles logic related to `connection state updated`.

### ShowOptionsChangedInquiry
`public void ShowOptionsChangedInquiry(Action onAccept = null, Action onDecline = null)`

**Purpose:** Handles logic related to `show options changed inquiry`.

### SetPage
`public void SetPage(LobbyPage lobbyPage, MPMatchmakingVM.MatchmakingSubPages matchmakingSubPage = MPMatchmakingVM.MatchmakingSubPages.Default)`

**Purpose:** Sets the value or state of `page`.

### RefreshRecentGames
`public void RefreshRecentGames()`

**Purpose:** Refreshes the display or cache of `recent games`.

### OnDisconnected
`public void OnDisconnected()`

**Purpose:** Called when the `disconnected` event is raised.

### OnServerStatusReceived
`public void OnServerStatusReceived(ServerStatus serverStatus)`

**Purpose:** Called when the `server status received` event is raised.

### OnRejoinBattleRequestAnswered
`public void OnRejoinBattleRequestAnswered(bool isSuccessful)`

**Purpose:** Called when the `rejoin battle request answered` event is raised.

### OnRequestedToSearchBattle
`public void OnRequestedToSearchBattle()`

**Purpose:** Called when the `requested to search battle` event is raised.

### OnUpdateFindingGame
`public void OnUpdateFindingGame(MatchmakingWaitTimeStats matchmakingWaitTimeStats, string gameTypeInfo)`

**Purpose:** Called when the `update finding game` event is raised.

### OnPremadeGameCreated
`public void OnPremadeGameCreated()`

**Purpose:** Called when the `premade game created` event is raised.

### OnRequestedToCancelSearchBattle
`public void OnRequestedToCancelSearchBattle()`

**Purpose:** Called when the `requested to cancel search battle` event is raised.

### OnPlayerRemovedFromParty
`public void OnPlayerRemovedFromParty(PlayerId playerId, PartyRemoveReason reason)`

**Purpose:** Called when the `player removed from party` event is raised.

### OnPlayerAddedToParty
`public void OnPlayerAddedToParty(PlayerId playerId)`

**Purpose:** Called when the `player added to party` event is raised.

### OnPlayerAssignedPartyLeader
`public void OnPlayerAssignedPartyLeader(PlayerId newPartyLeaderId)`

**Purpose:** Called when the `player assigned party leader` event is raised.

### OnPlayerSuggestedToParty
`public void OnPlayerSuggestedToParty(PlayerId playerId, string playerName, PlayerId suggestingPlayerId, string suggestingPlayerName)`

**Purpose:** Called when the `player suggested to party` event is raised.

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**Purpose:** Called when the `player name updated` event is raised.

### OnSearchBattleCanceled
`public void OnSearchBattleCanceled()`

**Purpose:** Called when the `search battle canceled` event is raised.

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**Purpose:** Refreshes the display or cache of `player data`.

### RefreshSupportedFeatures
`public void RefreshSupportedFeatures()`

**Purpose:** Refreshes the display or cache of `supported features`.

### OnNotificationsReceived
`public void OnNotificationsReceived(LobbyNotification notifications)`

**Purpose:** Called when the `notifications received` event is raised.

### OnSigilChanged
`public void OnSigilChanged(int iconID)`

**Purpose:** Called when the `sigil changed` event is raised.

### OnClanCreationFinished
`public void OnClanCreationFinished()`

**Purpose:** Called when the `clan creation finished` event is raised.

### OnEnableGenericAvatarsChanged
`public void OnEnableGenericAvatarsChanged()`

**Purpose:** Called when the `enable generic avatars changed` event is raised.

### OnEnableGenericNamesChanged
`public void OnEnableGenericNamesChanged()`

**Purpose:** Called when the `enable generic names changed` event is raised.

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**Purpose:** Called when the `friend list updated` event is raised.

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**Purpose:** Called when the `clan info changed` event is raised.

### GetLocalizedGameTypesString
`public static string GetLocalizedGameTypesString(string gameTypes)`

**Purpose:** Gets the current value of `localized game types string`.

### GetLocalizedRankName
`public static string GetLocalizedRankName(string rankID)`

**Purpose:** Gets the current value of `localized rank name`.

## Usage Example

```csharp
var value = new MPLobbyVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)