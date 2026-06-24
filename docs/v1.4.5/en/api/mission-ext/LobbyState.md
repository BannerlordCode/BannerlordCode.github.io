<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LobbyState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LobbyState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyState : GameState`
**Base:** `GameState`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/LobbyState.cs`

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

**Purpose:** Initializes the state, resources, or bindings for `logic`.

### UpdateHasMultiplayerPrivilege
`public async Task UpdateHasMultiplayerPrivilege()`

**Purpose:** Updates the state or data of `has multiplayer privilege`.

### UpdateHasCrossplayPrivilege
`public async Task UpdateHasCrossplayPrivilege()`

**Purpose:** Updates the state or data of `has crossplay privilege`.

### OnClientRefusedToJoinCustomServer
`public void OnClientRefusedToJoinCustomServer(GameServerEntry serverEntry)`

**Purpose:** Called when the `client refused to join custom server` event is raised.

### UpdateHasUserGeneratedContentPrivilege
`public async Task UpdateHasUserGeneratedContentPrivilege(bool showResolveUI)`

**Purpose:** Updates the state or data of `has user generated content privilege`.

### TryLogin
`public async Task TryLogin()`

**Purpose:** Attempts to get `login`, usually returning the result in an out parameter.

### TryLogin
`public async Task TryLogin(string userName, string password)`

**Purpose:** Attempts to get `login`, usually returning the result in an out parameter.

### HostGame
`public void HostGame()`

**Purpose:** Handles logic related to `host game`.

### CreatePremadeGame
`public void CreatePremadeGame()`

**Purpose:** Creates a new `premade game` instance or object.

### ShowFeedback
`public string ShowFeedback(string title, string message)`

**Purpose:** Handles logic related to `show feedback`.

### ShowFeedback
`public string ShowFeedback(InquiryData inquiryData)`

**Purpose:** Handles logic related to `show feedback`.

### DismissFeedback
`public void DismissFeedback(string messageId)`

**Purpose:** Handles logic related to `dismiss feedback`.

### OnPause
`public void OnPause()`

**Purpose:** Called when the `pause` event is raised.

### OnResume
`public void OnResume()`

**Purpose:** Called when the `resume` event is raised.

### OnRequestedToSearchBattle
`public void OnRequestedToSearchBattle()`

**Purpose:** Called when the `requested to search battle` event is raised.

### OnUpdateFindingGame
`public void OnUpdateFindingGame(MatchmakingWaitTimeStats matchmakingWaitTimeStats, string gameTypeInfo = null)`

**Purpose:** Called when the `update finding game` event is raised.

### OnRequestedToCancelSearchBattle
`public void OnRequestedToCancelSearchBattle()`

**Purpose:** Called when the `requested to cancel search battle` event is raised.

### OnCancelFindingGame
`public void OnCancelFindingGame()`

**Purpose:** Called when the `cancel finding game` event is raised.

### OnDisconnected
`public void OnDisconnected(TextObject feedback)`

**Purpose:** Called when the `disconnected` event is raised.

### OnPlayerDataReceived
`public void OnPlayerDataReceived(PlayerData playerData)`

**Purpose:** Called when the `player data received` event is raised.

### OnPendingRejoin
`public void OnPendingRejoin()`

**Purpose:** Called when the `pending rejoin` event is raised.

### OnEnterBattleWithParty
`public void OnEnterBattleWithParty(string selectedGameTypes)`

**Purpose:** Called when the `enter battle with party` event is raised.

### OnPartyInvitationReceived
`public async void OnPartyInvitationReceived(string inviterPlayerName, PlayerId playerId)`

**Purpose:** Called when the `party invitation received` event is raised.

### OnPartyJoinRequestReceived
`public async void OnPartyJoinRequestReceived(PlayerId joiningPlayerId, PlayerId viaPlayerId, string viaFriendName)`

**Purpose:** Called when the `party join request received` event is raised.

### OnAdminMessageReceived
`public void OnAdminMessageReceived(string message)`

**Purpose:** Called when the `admin message received` event is raised.

### OnPartyInvitationInvalidated
`public void OnPartyInvitationInvalidated()`

**Purpose:** Called when the `party invitation invalidated` event is raised.

### OnPlayerInvitedToParty
`public void OnPlayerInvitedToParty(PlayerId playerId)`

**Purpose:** Called when the `player invited to party` event is raised.

### OnPlayerRemovedFromParty
`public void OnPlayerRemovedFromParty(PlayerId playerId, PartyRemoveReason reason)`

**Purpose:** Called when the `player removed from party` event is raised.

### OnPlayersAddedToParty
`public void OnPlayersAddedToParty(List<(PlayerId PlayerId, string PlayerName, bool IsPartyLeader)> addedPlayers, List<(PlayerId PlayerId, string PlayerName)> invitedPlayers)`

**Purpose:** Called when the `players added to party` event is raised.

### OnGameClientStateChange
`public void OnGameClientStateChange(State state)`

**Purpose:** Called when the `game client state change` event is raised.

### SetConnectionState
`public void SetConnectionState(bool isAuthenticated)`

**Purpose:** Sets the value or state of `connection state`.

### OnActivateHome
`public void OnActivateHome()`

**Purpose:** Called when the `activate home` event is raised.

### OnActivateCustomServer
`public void OnActivateCustomServer()`

**Purpose:** Called when the `activate custom server` event is raised.

### OnActivateMatchmaking
`public void OnActivateMatchmaking()`

**Purpose:** Called when the `activate matchmaking` event is raised.

### OnActivateProfile
`public void OnActivateProfile()`

**Purpose:** Called when the `activate profile` event is raised.

### OnClanInvitationReceived
`public void OnClanInvitationReceived(string clanName, string clanTag, bool isCreation)`

**Purpose:** Called when the `clan invitation received` event is raised.

### OnClanInvitationAnswered
`public void OnClanInvitationAnswered(PlayerId playerId, ClanCreationAnswer answer)`

**Purpose:** Called when the `clan invitation answered` event is raised.

### OnClanCreationSuccessful
`public void OnClanCreationSuccessful()`

**Purpose:** Called when the `clan creation successful` event is raised.

### OnClanCreationFailed
`public void OnClanCreationFailed()`

**Purpose:** Called when the `clan creation failed` event is raised.

### OnClanCreationStarted
`public void OnClanCreationStarted()`

**Purpose:** Called when the `clan creation started` event is raised.

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**Purpose:** Called when the `clan info changed` event is raised.

### OnPremadeGameEligibilityStatusReceived
`public void OnPremadeGameEligibilityStatusReceived(bool isEligible)`

**Purpose:** Called when the `premade game eligibility status received` event is raised.

### OnPremadeGameCreated
`public void OnPremadeGameCreated()`

**Purpose:** Called when the `premade game created` event is raised.

### OnPremadeGameListReceived
`public void OnPremadeGameListReceived()`

**Purpose:** Called when the `premade game list received` event is raised.

### OnPremadeGameCreationCancelled
`public void OnPremadeGameCreationCancelled()`

**Purpose:** Called when the `premade game creation cancelled` event is raised.

### OnJoinPremadeGameRequested
`public void OnJoinPremadeGameRequested(string clanName, string clanSigilCode, Guid partyId, PlayerId challengerPlayerIDs, PlayerId challengerPartyLeaderID, PremadeGameType premadeGameType)`

**Purpose:** Called when the `join premade game requested` event is raised.

### OnJoinPremadeGameRequestSuccessful
`public void OnJoinPremadeGameRequestSuccessful()`

**Purpose:** Called when the `join premade game request successful` event is raised.

### OnActivateArmory
`public void OnActivateArmory()`

**Purpose:** Called when the `activate armory` event is raised.

### OnActivateOptions
`public void OnActivateOptions()`

**Purpose:** Called when the `activate options` event is raised.

### OnDeactivateOptions
`public void OnDeactivateOptions()`

**Purpose:** Called when the `deactivate options` event is raised.

### OnCustomGameServerListReceived
`public void OnCustomGameServerListReceived(AvailableCustomGames customGameServerList)`

**Purpose:** Called when the `custom game server list received` event is raised.

### OnMatchmakerGameOver
`public void OnMatchmakerGameOver(int oldExp, int newExp, List<string> badgesEarned, int lootGained, RankBarInfo oldRankBarInfo, RankBarInfo newRankBarInfo, BattleCancelReason battleCancelReason)`

**Purpose:** Called when the `matchmaker game over` event is raised.

### OnBattleServerLost
`public void OnBattleServerLost()`

**Purpose:** Called when the `battle server lost` event is raised.

### OnRemovedFromMatchmakerGame
`public void OnRemovedFromMatchmakerGame(DisconnectType disconnectType)`

**Purpose:** Called when the `removed from matchmaker game` event is raised.

### OnRemovedFromCustomGame
`public void OnRemovedFromCustomGame(DisconnectType disconnectType)`

**Purpose:** Called when the `removed from custom game` event is raised.

### OnPlayerAssignedPartyLeader
`public void OnPlayerAssignedPartyLeader(PlayerId partyLeaderId)`

**Purpose:** Called when the `player assigned party leader` event is raised.

### OnPlayerSuggestedToParty
`public void OnPlayerSuggestedToParty(PlayerId playerId, string playerName, PlayerId suggestingPlayerId, string suggestingPlayerName)`

**Purpose:** Called when the `player suggested to party` event is raised.

### OnJoinCustomGameFailureResponse
`public void OnJoinCustomGameFailureResponse(CustomGameJoinResponse response)`

**Purpose:** Called when the `join custom game failure response` event is raised.

### OnServerStatusReceived
`public void OnServerStatusReceived(ServerStatus serverStatus)`

**Purpose:** Called when the `server status received` event is raised.

### OnFriendListReceived
`public void OnFriendListReceived(FriendInfo friends)`

**Purpose:** Called when the `friend list received` event is raised.

### OnRecentPlayerStatusesReceived
`public void OnRecentPlayerStatusesReceived(FriendInfo friends)`

**Purpose:** Called when the `recent player statuses received` event is raised.

### OnBattleServerInformationReceived
`public void OnBattleServerInformationReceived(BattleServerInformationForClient battleServerInformation)`

**Purpose:** Called when the `battle server information received` event is raised.

### OnRejoinBattleRequestAnswered
`public void OnRejoinBattleRequestAnswered(bool isSuccessful)`

**Purpose:** Called when the `rejoin battle request answered` event is raised.

### OnNotificationsReceived
`public void OnNotificationsReceived(LobbyNotification notifications)`

**Purpose:** Called when the `notifications received` event is raised.

### OnInviteToPlatformSession
`public async Task<bool> OnInviteToPlatformSession(PlayerId playerId)`

**Purpose:** Called when the `invite to platform session` event is raised.

### OnPlatformRequestedMultiplayer
`public async void OnPlatformRequestedMultiplayer()`

**Purpose:** Called when the `platform requested multiplayer` event is raised.

### OnSessionInvitationAccepted
`public async void OnSessionInvitationAccepted(SessionInvitationType targetGameType)`

**Purpose:** Called when the `session invitation accepted` event is raised.

### GetCustomActionsForServer
`public List<CustomServerAction> GetCustomActionsForServer(GameServerEntry gameServerEntry)`

**Purpose:** Gets the current value of `custom actions for server`.

### RegisterForCustomServerAction
`public void RegisterForCustomServerAction(Func<GameServerEntry, List<CustomServerAction>> action)`

**Purpose:** Handles logic related to `register for custom server action`.

### UnregisterForCustomServerAction
`public void UnregisterForCustomServerAction(Func<GameServerEntry, List<CustomServerAction>> action)`

**Purpose:** Handles logic related to `unregister for custom server action`.

## Usage Example

```csharp
var value = new LobbyState();
value.InitializeLogic(lobbyStateHandler);
```

## See Also

- [Complete Class Catalog](../catalog)