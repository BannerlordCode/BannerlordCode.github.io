---
title: "LobbyState"
description: "Auto-generated class reference for LobbyState."
---
# LobbyState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade.Multiplayer.2
**Type:** `public class LobbyState : GameState `
**Base:** GameState
**Source:** TaleWorlds.MountAndBlade.Multiplayer.2/TaleWorlds/MountAndBlade/LobbyState.cs

## Overview

Auto-generated stub for `LobbyState`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### InitializeLogic
`public void InitializeLogic(ILobbyStateHandler lobbyStateHandler)`

### OnInitialize
`protected override async void OnInitialize()`

### OnActivate
`protected override void OnActivate()`

### OnFinalize
`protected override void OnFinalize()`

### OnTick
`protected override void OnTick(float dt)`

### UpdateHasMultiplayerPrivilege
`public async Task UpdateHasMultiplayerPrivilege()`

### UpdateHasCrossplayPrivilege
`public async Task UpdateHasCrossplayPrivilege()`

### OnClientRefusedToJoinCustomServer
`public void OnClientRefusedToJoinCustomServer(GameServerEntry serverEntry)`

### UpdateHasUserGeneratedContentPrivilege
`public async Task UpdateHasUserGeneratedContentPrivilege(bool showResolveUI)`

### TryLogin
`public async Task TryLogin()`

### HostGame
`public void HostGame()`

### CreatePremadeGame
`public void CreatePremadeGame()`

### ShowFeedback
`public string ShowFeedback(string title,string message)`

### DismissFeedback
`public void DismissFeedback(string messageId)`

### OnPause
`public void OnPause()`

### OnResume
`public void OnResume()`

### OnRequestedToSearchBattle
`public void OnRequestedToSearchBattle()`

### OnUpdateFindingGame
`public void OnUpdateFindingGame(MatchmakingWaitTimeStats matchmakingWaitTimeStats,string[] gameTypeInfo = null)`

### OnRequestedToCancelSearchBattle
`public void OnRequestedToCancelSearchBattle()`

### OnCancelFindingGame
`public void OnCancelFindingGame()`

### OnDisconnected
`public void OnDisconnected(TextObject feedback)`

### OnPlayerDataReceived
`public void OnPlayerDataReceived(PlayerData playerData)`

### OnPendingRejoin
`public void OnPendingRejoin()`

### OnEnterBattleWithParty
`public void OnEnterBattleWithParty(string[] selectedGameTypes)`

### OnPartyInvitationReceived
`public async void OnPartyInvitationReceived(string inviterPlayerName,PlayerId playerId)`

### OnPartyJoinRequestReceived
`public async void OnPartyJoinRequestReceived(PlayerId joiningPlayerId,PlayerId viaPlayerId,string viaFriendName)`

### OnAdminMessageReceived
`public void OnAdminMessageReceived(string message)`

### OnPartyInvitationInvalidated
`public void OnPartyInvitationInvalidated()`

### OnPlayerInvitedToParty
`public void OnPlayerInvitedToParty(PlayerId playerId)`

### OnPlayerRemovedFromParty
`public void OnPlayerRemovedFromParty(PlayerId playerId,PartyRemoveReason reason)`

### OnPlayersAddedToParty
`public void OnPlayersAddedToParty([TupleElementNames(new string[] { "PlayerId","PlayerName","IsPartyLeader" })] List<ValueTuple<PlayerId,string,bool>> addedPlayers,[TupleElementNames(new string[] { "PlayerId","PlayerName" })] List<ValueTuple<PlayerId,string>> invitedPlayers)`

### OnGameClientStateChange
`public void OnGameClientStateChange(LobbyClient.State state)`

### SetConnectionState
`public void SetConnectionState(bool isAuthenticated)`

### OnActivateHome
`public void OnActivateHome()`

### OnActivateCustomServer
`public void OnActivateCustomServer()`

### OnActivateMatchmaking
`public void OnActivateMatchmaking()`

### OnActivateProfile
`public void OnActivateProfile()`

### OnClanInvitationReceived
`public void OnClanInvitationReceived(string clanName,string clanTag,bool isCreation)`

### OnClanInvitationAnswered
`public void OnClanInvitationAnswered(PlayerId playerId,ClanCreationAnswer answer)`

### OnClanCreationSuccessful
`public void OnClanCreationSuccessful()`

### OnClanCreationFailed
`public void OnClanCreationFailed()`

### OnClanCreationStarted
`public void OnClanCreationStarted()`

### OnClanInfoChanged
`public void OnClanInfoChanged()`

### OnPremadeGameEligibilityStatusReceived
`public void OnPremadeGameEligibilityStatusReceived(bool isEligible)`

### OnPremadeGameCreated
`public void OnPremadeGameCreated()`

### OnPremadeGameListReceived
`public void OnPremadeGameListReceived()`

### OnPremadeGameCreationCancelled
`public void OnPremadeGameCreationCancelled()`

### OnJoinPremadeGameRequested
`public void OnJoinPremadeGameRequested(string clanName,string clanSigilCode,Guid partyId,PlayerId[] challengerPlayerIDs,PlayerId challengerPartyLeaderID,PremadeGameType premadeGameType)`

### OnJoinPremadeGameRequestSuccessful
`public void OnJoinPremadeGameRequestSuccessful()`

### OnActivateArmory
`public void OnActivateArmory()`

### OnActivateOptions
`public void OnActivateOptions()`

### OnDeactivateOptions
`public void OnDeactivateOptions()`

### OnCustomGameServerListReceived
`public void OnCustomGameServerListReceived(AvailableCustomGames customGameServerList)`

### OnMatchmakerGameOver
`public void OnMatchmakerGameOver(int oldExp,int newExp,List<string> badgesEarned,int lootGained,RankBarInfo oldRankBarInfo,RankBarInfo newRankBarInfo,BattleCancelReason battleCancelReason)`

### OnBattleServerLost
`public void OnBattleServerLost()`

### OnRemovedFromMatchmakerGame
`public void OnRemovedFromMatchmakerGame(DisconnectType disconnectType)`

### OnRemovedFromCustomGame
`public void OnRemovedFromCustomGame(DisconnectType disconnectType)`

### OnPlayerAssignedPartyLeader
`public void OnPlayerAssignedPartyLeader(PlayerId partyLeaderId)`

### OnPlayerSuggestedToParty
`public void OnPlayerSuggestedToParty(PlayerId playerId,string playerName,PlayerId suggestingPlayerId,string suggestingPlayerName)`

### OnJoinCustomGameFailureResponse
`public void OnJoinCustomGameFailureResponse(CustomGameJoinResponse response)`

### OnServerStatusReceived
`public void OnServerStatusReceived(ServerStatus serverStatus)`

### OnFriendListReceived
`public void OnFriendListReceived(FriendInfo[] friends)`

### OnRecentPlayerStatusesReceived
`public void OnRecentPlayerStatusesReceived(FriendInfo[] friends)`

### OnBattleServerInformationReceived
`public void OnBattleServerInformationReceived(BattleServerInformationForClient battleServerInformation)`

### OnRejoinBattleRequestAnswered
`public void OnRejoinBattleRequestAnswered(bool isSuccessful)`

### OnNotificationsReceived
`public void OnNotificationsReceived(LobbyNotification[] notifications)`

### OnInviteToPlatformSession
`public async Task<bool> OnInviteToPlatformSession(PlayerId playerId)`

### OnPlatformRequestedMultiplayer
`public async void OnPlatformRequestedMultiplayer()`

### OnSessionInvitationAccepted
`public async void OnSessionInvitationAccepted(SessionInvitationType targetGameType)`

### GetActionsForCustomServer
`public List<CustomServerAction> GetActionsForCustomServer(GameServerEntry gameServerEntry)`

### RegisterForCustomServerAction
`public void RegisterForCustomServerAction(Func<GameServerEntry,List<CustomServerAction>> action)`

### UnregisterForCustomServerAction
`public void UnregisterForCustomServerAction(Func<GameServerEntry,List<CustomServerAction>> action)`

### GetActionsForPremadeServer
`public List<PremadeServerAction> GetActionsForPremadeServer(PremadeGameEntry serverEntry)`

### RegisterForPremadeServerAction
`public void RegisterForPremadeServerAction(Func<PremadeGameEntry,List<PremadeServerAction>> action)`

### UnregisterForPremadeServerAction
`public void UnregisterForPremadeServerAction(Func<PremadeGameEntry,List<PremadeServerAction>> action)`

## See Also

- [Section index](../)
