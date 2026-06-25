---
title: "LobbyState"
description: "Auto-generated class reference for LobbyState."
---
# LobbyState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyState : GameState`
**Base:** `GameState`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/LobbyState.cs`

## Overview

`LobbyState` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsLoggingIn` | `public bool IsLoggingIn { get; }` |
| `Handler` | `public ILobbyStateHandler Handler { get; }` |
| `NewsManager` | `public NewsManager NewsManager { get; }` |
| `HasMultiplayerPrivilege` | `public bool? HasMultiplayerPrivilege { get; }` |
| `HasCrossplayPrivilege` | `public bool? HasCrossplayPrivilege { get; }` |
| `HasUserGeneratedContentPrivilege` | `public bool? HasUserGeneratedContentPrivilege { get; }` |

## Key Methods

### InitializeLogic
`public void InitializeLogic(ILobbyStateHandler lobbyStateHandler)`

**Purpose:** Prepares the resources, state, or bindings required by `logic`.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.InitializeLogic(lobbyStateHandler);
```

### UpdateHasMultiplayerPrivilege
`public async Task UpdateHasMultiplayerPrivilege()`

**Purpose:** Recalculates and stores the latest representation of `has multiplayer privilege`.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
var result = lobbyState.UpdateHasMultiplayerPrivilege();
```

### UpdateHasCrossplayPrivilege
`public async Task UpdateHasCrossplayPrivilege()`

**Purpose:** Recalculates and stores the latest representation of `has crossplay privilege`.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
var result = lobbyState.UpdateHasCrossplayPrivilege();
```

### OnClientRefusedToJoinCustomServer
`public void OnClientRefusedToJoinCustomServer(GameServerEntry serverEntry)`

**Purpose:** Invoked when the `client refused to join custom server` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnClientRefusedToJoinCustomServer(serverEntry);
```

### UpdateHasUserGeneratedContentPrivilege
`public async Task UpdateHasUserGeneratedContentPrivilege(bool showResolveUI)`

**Purpose:** Recalculates and stores the latest representation of `has user generated content privilege`.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
var result = lobbyState.UpdateHasUserGeneratedContentPrivilege(false);
```

### TryLogin
`public async Task TryLogin()`

**Purpose:** Attempts to retrieve `login`, usually returning success through an out parameter.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
var result = lobbyState.TryLogin();
```

### TryLogin
`public async Task TryLogin(string userName, string password)`

**Purpose:** Attempts to retrieve `login`, usually returning success through an out parameter.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
var result = lobbyState.TryLogin("example", "example");
```

### HostGame
`public void HostGame()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.HostGame();
```

### CreatePremadeGame
`public void CreatePremadeGame()`

**Purpose:** Constructs a new `premade game` entity and returns it to the caller.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.CreatePremadeGame();
```

### ShowFeedback
`public string ShowFeedback(string title, string message)`

**Purpose:** Displays the UI or element associated with `feedback`.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
var result = lobbyState.ShowFeedback("example", "example");
```

### ShowFeedback
`public string ShowFeedback(InquiryData inquiryData)`

**Purpose:** Displays the UI or element associated with `feedback`.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
var result = lobbyState.ShowFeedback(inquiryData);
```

### DismissFeedback
`public void DismissFeedback(string messageId)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.DismissFeedback("example");
```

### OnPause
`public void OnPause()`

**Purpose:** Invoked when the `pause` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnPause();
```

### OnResume
`public void OnResume()`

**Purpose:** Invoked when the `resume` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnResume();
```

### OnRequestedToSearchBattle
`public void OnRequestedToSearchBattle()`

**Purpose:** Invoked when the `requested to search battle` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnRequestedToSearchBattle();
```

### OnUpdateFindingGame
`public void OnUpdateFindingGame(MatchmakingWaitTimeStats matchmakingWaitTimeStats, string gameTypeInfo = null)`

**Purpose:** Invoked when the `update finding game` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnUpdateFindingGame(matchmakingWaitTimeStats, "example");
```

### OnRequestedToCancelSearchBattle
`public void OnRequestedToCancelSearchBattle()`

**Purpose:** Invoked when the `requested to cancel search battle` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnRequestedToCancelSearchBattle();
```

### OnCancelFindingGame
`public void OnCancelFindingGame()`

**Purpose:** Invoked when the `cancel finding game` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnCancelFindingGame();
```

### OnDisconnected
`public void OnDisconnected(TextObject feedback)`

**Purpose:** Invoked when the `disconnected` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnDisconnected(feedback);
```

### OnPlayerDataReceived
`public void OnPlayerDataReceived(PlayerData playerData)`

**Purpose:** Invoked when the `player data received` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnPlayerDataReceived(playerData);
```

### OnPendingRejoin
`public void OnPendingRejoin()`

**Purpose:** Invoked when the `pending rejoin` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnPendingRejoin();
```

### OnEnterBattleWithParty
`public void OnEnterBattleWithParty(string selectedGameTypes)`

**Purpose:** Invoked when the `enter battle with party` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnEnterBattleWithParty("example");
```

### OnPartyInvitationReceived
`public async void OnPartyInvitationReceived(string inviterPlayerName, PlayerId playerId)`

**Purpose:** Invoked when the `party invitation received` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnPartyInvitationReceived("example", playerId);
```

### OnPartyJoinRequestReceived
`public async void OnPartyJoinRequestReceived(PlayerId joiningPlayerId, PlayerId viaPlayerId, string viaFriendName)`

**Purpose:** Invoked when the `party join request received` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnPartyJoinRequestReceived(joiningPlayerId, viaPlayerId, "example");
```

### OnAdminMessageReceived
`public void OnAdminMessageReceived(string message)`

**Purpose:** Invoked when the `admin message received` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnAdminMessageReceived("example");
```

### OnPartyInvitationInvalidated
`public void OnPartyInvitationInvalidated()`

**Purpose:** Invoked when the `party invitation invalidated` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnPartyInvitationInvalidated();
```

### OnPlayerInvitedToParty
`public void OnPlayerInvitedToParty(PlayerId playerId)`

**Purpose:** Invoked when the `player invited to party` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnPlayerInvitedToParty(playerId);
```

### OnPlayerRemovedFromParty
`public void OnPlayerRemovedFromParty(PlayerId playerId, PartyRemoveReason reason)`

**Purpose:** Invoked when the `player removed from party` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnPlayerRemovedFromParty(playerId, reason);
```

### OnPlayersAddedToParty
`public void OnPlayersAddedToParty(List<(PlayerId PlayerId, string PlayerName, bool IsPartyLeader)> addedPlayers, List<(PlayerId PlayerId, string PlayerName)> invitedPlayers)`

**Purpose:** Invoked when the `players added to party` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnPlayersAddedToParty(playerId, "example", false, playerId, "example");
```

### OnGameClientStateChange
`public void OnGameClientStateChange(State state)`

**Purpose:** Invoked when the `game client state change` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnGameClientStateChange(state);
```

### SetConnectionState
`public void SetConnectionState(bool isAuthenticated)`

**Purpose:** Assigns a new value to `connection state` and updates the object's internal state.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.SetConnectionState(false);
```

### OnActivateHome
`public void OnActivateHome()`

**Purpose:** Invoked when the `activate home` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnActivateHome();
```

### OnActivateCustomServer
`public void OnActivateCustomServer()`

**Purpose:** Invoked when the `activate custom server` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnActivateCustomServer();
```

### OnActivateMatchmaking
`public void OnActivateMatchmaking()`

**Purpose:** Invoked when the `activate matchmaking` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnActivateMatchmaking();
```

### OnActivateProfile
`public void OnActivateProfile()`

**Purpose:** Invoked when the `activate profile` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnActivateProfile();
```

### OnClanInvitationReceived
`public void OnClanInvitationReceived(string clanName, string clanTag, bool isCreation)`

**Purpose:** Invoked when the `clan invitation received` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnClanInvitationReceived("example", "example", false);
```

### OnClanInvitationAnswered
`public void OnClanInvitationAnswered(PlayerId playerId, ClanCreationAnswer answer)`

**Purpose:** Invoked when the `clan invitation answered` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnClanInvitationAnswered(playerId, answer);
```

### OnClanCreationSuccessful
`public void OnClanCreationSuccessful()`

**Purpose:** Invoked when the `clan creation successful` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnClanCreationSuccessful();
```

### OnClanCreationFailed
`public void OnClanCreationFailed()`

**Purpose:** Invoked when the `clan creation failed` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnClanCreationFailed();
```

### OnClanCreationStarted
`public void OnClanCreationStarted()`

**Purpose:** Invoked when the `clan creation started` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnClanCreationStarted();
```

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**Purpose:** Invoked when the `clan info changed` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnClanInfoChanged();
```

### OnPremadeGameEligibilityStatusReceived
`public void OnPremadeGameEligibilityStatusReceived(bool isEligible)`

**Purpose:** Invoked when the `premade game eligibility status received` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnPremadeGameEligibilityStatusReceived(false);
```

### OnPremadeGameCreated
`public void OnPremadeGameCreated()`

**Purpose:** Invoked when the `premade game created` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnPremadeGameCreated();
```

### OnPremadeGameListReceived
`public void OnPremadeGameListReceived()`

**Purpose:** Invoked when the `premade game list received` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnPremadeGameListReceived();
```

### OnPremadeGameCreationCancelled
`public void OnPremadeGameCreationCancelled()`

**Purpose:** Invoked when the `premade game creation cancelled` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnPremadeGameCreationCancelled();
```

### OnJoinPremadeGameRequested
`public void OnJoinPremadeGameRequested(string clanName, string clanSigilCode, Guid partyId, PlayerId challengerPlayerIDs, PlayerId challengerPartyLeaderID, PremadeGameType premadeGameType)`

**Purpose:** Invoked when the `join premade game requested` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnJoinPremadeGameRequested("example", "example", partyId, challengerPlayerIDs, challengerPartyLeaderID, premadeGameType);
```

### OnJoinPremadeGameRequestSuccessful
`public void OnJoinPremadeGameRequestSuccessful()`

**Purpose:** Invoked when the `join premade game request successful` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnJoinPremadeGameRequestSuccessful();
```

### OnActivateArmory
`public void OnActivateArmory()`

**Purpose:** Invoked when the `activate armory` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnActivateArmory();
```

### OnActivateOptions
`public void OnActivateOptions()`

**Purpose:** Invoked when the `activate options` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnActivateOptions();
```

### OnDeactivateOptions
`public void OnDeactivateOptions()`

**Purpose:** Invoked when the `deactivate options` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnDeactivateOptions();
```

### OnCustomGameServerListReceived
`public void OnCustomGameServerListReceived(AvailableCustomGames customGameServerList)`

**Purpose:** Invoked when the `custom game server list received` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnCustomGameServerListReceived(customGameServerList);
```

### OnMatchmakerGameOver
`public void OnMatchmakerGameOver(int oldExp, int newExp, List<string> badgesEarned, int lootGained, RankBarInfo oldRankBarInfo, RankBarInfo newRankBarInfo, BattleCancelReason battleCancelReason)`

**Purpose:** Invoked when the `matchmaker game over` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnMatchmakerGameOver(0, 0, badgesEarned, 0, oldRankBarInfo, newRankBarInfo, battleCancelReason);
```

### OnBattleServerLost
`public void OnBattleServerLost()`

**Purpose:** Invoked when the `battle server lost` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnBattleServerLost();
```

### OnRemovedFromMatchmakerGame
`public void OnRemovedFromMatchmakerGame(DisconnectType disconnectType)`

**Purpose:** Invoked when the `removed from matchmaker game` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnRemovedFromMatchmakerGame(disconnectType);
```

### OnRemovedFromCustomGame
`public void OnRemovedFromCustomGame(DisconnectType disconnectType)`

**Purpose:** Invoked when the `removed from custom game` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnRemovedFromCustomGame(disconnectType);
```

### OnPlayerAssignedPartyLeader
`public void OnPlayerAssignedPartyLeader(PlayerId partyLeaderId)`

**Purpose:** Invoked when the `player assigned party leader` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnPlayerAssignedPartyLeader(partyLeaderId);
```

### OnPlayerSuggestedToParty
`public void OnPlayerSuggestedToParty(PlayerId playerId, string playerName, PlayerId suggestingPlayerId, string suggestingPlayerName)`

**Purpose:** Invoked when the `player suggested to party` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnPlayerSuggestedToParty(playerId, "example", suggestingPlayerId, "example");
```

### OnJoinCustomGameFailureResponse
`public void OnJoinCustomGameFailureResponse(CustomGameJoinResponse response)`

**Purpose:** Invoked when the `join custom game failure response` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnJoinCustomGameFailureResponse(response);
```

### OnServerStatusReceived
`public void OnServerStatusReceived(ServerStatus serverStatus)`

**Purpose:** Invoked when the `server status received` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnServerStatusReceived(serverStatus);
```

### OnFriendListReceived
`public void OnFriendListReceived(FriendInfo friends)`

**Purpose:** Invoked when the `friend list received` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnFriendListReceived(friends);
```

### OnRecentPlayerStatusesReceived
`public void OnRecentPlayerStatusesReceived(FriendInfo friends)`

**Purpose:** Invoked when the `recent player statuses received` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnRecentPlayerStatusesReceived(friends);
```

### OnBattleServerInformationReceived
`public void OnBattleServerInformationReceived(BattleServerInformationForClient battleServerInformation)`

**Purpose:** Invoked when the `battle server information received` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnBattleServerInformationReceived(battleServerInformation);
```

### OnRejoinBattleRequestAnswered
`public void OnRejoinBattleRequestAnswered(bool isSuccessful)`

**Purpose:** Invoked when the `rejoin battle request answered` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnRejoinBattleRequestAnswered(false);
```

### OnNotificationsReceived
`public void OnNotificationsReceived(LobbyNotification notifications)`

**Purpose:** Invoked when the `notifications received` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnNotificationsReceived(notifications);
```

### OnInviteToPlatformSession
`public async Task<bool> OnInviteToPlatformSession(PlayerId playerId)`

**Purpose:** Invoked when the `invite to platform session` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
var result = lobbyState.OnInviteToPlatformSession(playerId);
```

### OnPlatformRequestedMultiplayer
`public async void OnPlatformRequestedMultiplayer()`

**Purpose:** Invoked when the `platform requested multiplayer` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnPlatformRequestedMultiplayer();
```

### OnSessionInvitationAccepted
`public async void OnSessionInvitationAccepted(SessionInvitationType targetGameType)`

**Purpose:** Invoked when the `session invitation accepted` event is raised.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.OnSessionInvitationAccepted(targetGameType);
```

### GetCustomActionsForServer
`public List<CustomServerAction> GetCustomActionsForServer(GameServerEntry gameServerEntry)`

**Purpose:** Reads and returns the `custom actions for server` value held by the current object.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
var result = lobbyState.GetCustomActionsForServer(gameServerEntry);
```

### RegisterForCustomServerAction
`public void RegisterForCustomServerAction(Func<GameServerEntry, List<CustomServerAction>> action)`

**Purpose:** Registers `for custom server action` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.RegisterForCustomServerAction(func<GameServerEntry, action);
```

### UnregisterForCustomServerAction
`public void UnregisterForCustomServerAction(Func<GameServerEntry, List<CustomServerAction>> action)`

**Purpose:** Unregisters `for custom server action` from the current system.

```csharp
// Obtain an instance of LobbyState from the subsystem API first
LobbyState lobbyState = ...;
lobbyState.UnregisterForCustomServerAction(func<GameServerEntry, action);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LobbyState lobbyState = ...;
lobbyState.InitializeLogic(lobbyStateHandler);
```

## See Also

- [Area Index](../)