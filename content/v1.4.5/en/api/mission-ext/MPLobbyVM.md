---
title: "MPLobbyVM"
description: "Auto-generated class reference for MPLobbyVM."
---
# MPLobbyVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyVM.cs`

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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.RefreshValues();
```

### CreateInputKeyVisuals
`public void CreateInputKeyVisuals(HotKey cancelInputKey, HotKey doneInputKey, HotKey previousInputKey, HotKey nextInputKey, HotKey firstInputKey, HotKey lastInputKey)`

**Purpose:** Constructs a new `input key visuals` entity and returns it to the caller.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.CreateInputKeyVisuals(cancelInputKey, doneInputKey, previousInputKey, nextInputKey, firstInputKey, lastInputKey);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnFinalize();
```

### OnActivate
`public void OnActivate()`

**Purpose:** Invoked when the `activate` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnActivate();
```

### OnDeactivate
`public void OnDeactivate()`

**Purpose:** Invoked when the `deactivate` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnDeactivate();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnTick(0);
```

### OnConfirm
`public void OnConfirm()`

**Purpose:** Invoked when the `confirm` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnConfirm();
```

### OnEscape
`public async void OnEscape()`

**Purpose:** Invoked when the `escape` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnEscape();
```

### HasAnyContextMenuOpen
`public bool HasAnyContextMenuOpen()`

**Purpose:** Determines whether the current object already holds `any context menu open`.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
var result = mPLobbyVM.HasAnyContextMenuOpen();
```

### ForceCloseContextMenus
`public void ForceCloseContextMenus()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.ForceCloseContextMenus();
```

### HasNoPopupOpen
`public bool HasNoPopupOpen()`

**Purpose:** Determines whether the current object already holds `no popup open`.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
var result = mPLobbyVM.HasNoPopupOpen();
```

### RequestExit
`public async Task RequestExit()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
var result = mPLobbyVM.RequestExit();
```

### ConnectionStateUpdated
`public void ConnectionStateUpdated(bool isAuthenticated)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.ConnectionStateUpdated(false);
```

### ShowOptionsChangedInquiry
`public void ShowOptionsChangedInquiry(Action onAccept = null, Action onDecline = null)`

**Purpose:** Displays the UI or element associated with `options changed inquiry`.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.ShowOptionsChangedInquiry(null, null);
```

### SetPage
`public void SetPage(LobbyPage lobbyPage, MPMatchmakingVM.MatchmakingSubPages matchmakingSubPage = MPMatchmakingVM.MatchmakingSubPages.Default)`

**Purpose:** Assigns a new value to `page` and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.SetPage(lobbyPage, mPMatchmakingVM.MatchmakingSubPages.Default);
```

### RefreshRecentGames
`public void RefreshRecentGames()`

**Purpose:** Keeps the display or cache of `recent games` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.RefreshRecentGames();
```

### OnDisconnected
`public void OnDisconnected()`

**Purpose:** Invoked when the `disconnected` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnDisconnected();
```

### OnServerStatusReceived
`public void OnServerStatusReceived(ServerStatus serverStatus)`

**Purpose:** Invoked when the `server status received` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnServerStatusReceived(serverStatus);
```

### OnRejoinBattleRequestAnswered
`public void OnRejoinBattleRequestAnswered(bool isSuccessful)`

**Purpose:** Invoked when the `rejoin battle request answered` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnRejoinBattleRequestAnswered(false);
```

### OnRequestedToSearchBattle
`public void OnRequestedToSearchBattle()`

**Purpose:** Invoked when the `requested to search battle` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnRequestedToSearchBattle();
```

### OnUpdateFindingGame
`public void OnUpdateFindingGame(MatchmakingWaitTimeStats matchmakingWaitTimeStats, string gameTypeInfo)`

**Purpose:** Invoked when the `update finding game` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnUpdateFindingGame(matchmakingWaitTimeStats, "example");
```

### OnPremadeGameCreated
`public void OnPremadeGameCreated()`

**Purpose:** Invoked when the `premade game created` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnPremadeGameCreated();
```

### OnRequestedToCancelSearchBattle
`public void OnRequestedToCancelSearchBattle()`

**Purpose:** Invoked when the `requested to cancel search battle` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnRequestedToCancelSearchBattle();
```

### OnPlayerRemovedFromParty
`public void OnPlayerRemovedFromParty(PlayerId playerId, PartyRemoveReason reason)`

**Purpose:** Invoked when the `player removed from party` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnPlayerRemovedFromParty(playerId, reason);
```

### OnPlayerAddedToParty
`public void OnPlayerAddedToParty(PlayerId playerId)`

**Purpose:** Invoked when the `player added to party` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnPlayerAddedToParty(playerId);
```

### OnPlayerAssignedPartyLeader
`public void OnPlayerAssignedPartyLeader(PlayerId newPartyLeaderId)`

**Purpose:** Invoked when the `player assigned party leader` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnPlayerAssignedPartyLeader(newPartyLeaderId);
```

### OnPlayerSuggestedToParty
`public void OnPlayerSuggestedToParty(PlayerId playerId, string playerName, PlayerId suggestingPlayerId, string suggestingPlayerName)`

**Purpose:** Invoked when the `player suggested to party` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnPlayerSuggestedToParty(playerId, "example", suggestingPlayerId, "example");
```

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**Purpose:** Invoked when the `player name updated` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnPlayerNameUpdated("example");
```

### OnSearchBattleCanceled
`public void OnSearchBattleCanceled()`

**Purpose:** Invoked when the `search battle canceled` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnSearchBattleCanceled();
```

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**Purpose:** Keeps the display or cache of `player data` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.RefreshPlayerData(playerData);
```

### RefreshSupportedFeatures
`public void RefreshSupportedFeatures()`

**Purpose:** Keeps the display or cache of `supported features` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.RefreshSupportedFeatures();
```

### OnNotificationsReceived
`public void OnNotificationsReceived(LobbyNotification notifications)`

**Purpose:** Invoked when the `notifications received` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnNotificationsReceived(notifications);
```

### OnSigilChanged
`public void OnSigilChanged(int iconID)`

**Purpose:** Invoked when the `sigil changed` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnSigilChanged(0);
```

### OnClanCreationFinished
`public void OnClanCreationFinished()`

**Purpose:** Invoked when the `clan creation finished` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnClanCreationFinished();
```

### OnEnableGenericAvatarsChanged
`public void OnEnableGenericAvatarsChanged()`

**Purpose:** Invoked when the `enable generic avatars changed` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnEnableGenericAvatarsChanged();
```

### OnEnableGenericNamesChanged
`public void OnEnableGenericNamesChanged()`

**Purpose:** Invoked when the `enable generic names changed` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnEnableGenericNamesChanged();
```

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**Purpose:** Invoked when the `friend list updated` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnFriendListUpdated(false);
```

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**Purpose:** Invoked when the `clan info changed` event is raised.

```csharp
// Obtain an instance of MPLobbyVM from the subsystem API first
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnClanInfoChanged();
```

### GetLocalizedGameTypesString
`public static string GetLocalizedGameTypesString(string gameTypes)`

**Purpose:** Reads and returns the `localized game types string` value held by the current object.

```csharp
// Static call; no instance required
MPLobbyVM.GetLocalizedGameTypesString("example");
```

### GetLocalizedRankName
`public static string GetLocalizedRankName(string rankID)`

**Purpose:** Reads and returns the `localized rank name` value held by the current object.

```csharp
// Static call; no instance required
MPLobbyVM.GetLocalizedRankName("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.RefreshValues();
```

## See Also

- [Area Index](../)