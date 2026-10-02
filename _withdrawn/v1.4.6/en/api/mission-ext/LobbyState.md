---
title: "LobbyState"
description: "LobbyState: a public class in TaleWorlds.MountAndBlade, inheriting GameState; 85 exposed members (74 methods, 9 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LobbyState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public class LobbyState : GameState`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyState.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LobbyState lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is LobbyState → GameState → MBObjectBase. It exposes 85 public/protected members: 74 methods, 9 properties, 1 events, 1 constructors. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LobbyState lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain LobbyState → GameState → MBObjectBase. The surface is method-led (methods 74/85, properties 9/85), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `IsMusicMenuState` | `public override bool IsMusicMenuState` | property |
| `IsLoggingIn` | `public bool IsLoggingIn` | property |
| `Handler` | `public ILobbyStateHandler Handler` | property |
| `LobbyClient` | `public LobbyClient LobbyClient` | property |
| `NewsManager` | `public NewsManager NewsManager` | property |
| `Action` | `public event Action<GameServerEntry>ClientRefusedToJoinCustomServer;` | event |
| `HasMultiplayerPrivilege` | `public bool? HasMultiplayerPrivilege` | property |
| `HasCrossplayPrivilege` | `public bool? HasCrossplayPrivilege` | property |
| `HasUserGeneratedContentPrivilege` | `public bool? HasUserGeneratedContentPrivilege` | property |
| `LobbyState` | `public LobbyState()` | constructor |
| `InitializeLogic` | `public void InitializeLogic(ILobbyStateHandler lobbyStateHandler)` | method |
| `OnInitialize` | `protected override async void OnInitialize()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `UpdateHasMultiplayerPrivilege` | `public async Task UpdateHasMultiplayerPrivilege()` | method |
| `UpdateHasCrossplayPrivilege` | `public async Task UpdateHasCrossplayPrivilege()` | method |
| `OnClientRefusedToJoinCustomServer` | `public void OnClientRefusedToJoinCustomServer(GameServerEntry serverEntry)` | method |
| `UpdateHasUserGeneratedContentPrivilege` | `public async Task UpdateHasUserGeneratedContentPrivilege(bool showResolveUI)` | method |
| `TryLogin` | `public async Task TryLogin()` | method |
| `TryLogin` | `public async Task TryLogin(string userName, string password)` | method |
| `HostGame` | `public void HostGame()` | method |
| `CreatePremadeGame` | `public void CreatePremadeGame()` | method |
| `ShowFeedback` | `public string ShowFeedback(string title, string message)` | method |
| `ShowFeedback` | `public string ShowFeedback(InquiryData inquiryData)` | method |
| `DismissFeedback` | `public void DismissFeedback(string messageId)` | method |
| `OnPause` | `public void OnPause()` | method |
| `OnResume` | `public void OnResume()` | method |
| `OnRequestedToSearchBattle` | `public void OnRequestedToSearchBattle()` | method |
| `OnUpdateFindingGame` | `public void OnUpdateFindingGame(MatchmakingWaitTimeStats matchmakingWaitTimeStats, string[]gameTypeInfo = null)` | method |
| `OnRequestedToCancelSearchBattle` | `public void OnRequestedToCancelSearchBattle()` | method |
| `OnCancelFindingGame` | `public void OnCancelFindingGame()` | method |
| `OnDisconnected` | `public void OnDisconnected(TextObject feedback)` | method |
| `OnPlayerDataReceived` | `public void OnPlayerDataReceived(PlayerData playerData)` | method |
| `OnPendingRejoin` | `public void OnPendingRejoin()` | method |
| `OnEnterBattleWithParty` | `public void OnEnterBattleWithParty(string[]selectedGameTypes)` | method |
| `OnPartyInvitationReceived` | `public async void OnPartyInvitationReceived(string inviterPlayerName, PlayerId playerId)` | method |
| `OnPartyJoinRequestReceived` | `public async void OnPartyJoinRequestReceived(PlayerId joiningPlayerId, PlayerId viaPlayerId, string viaFriendName)` | method |
| `OnAdminMessageReceived` | `public void OnAdminMessageReceived(string message)` | method |
| `OnPartyInvitationInvalidated` | `public void OnPartyInvitationInvalidated()` | method |
| `OnPlayerInvitedToParty` | `public void OnPlayerInvitedToParty(PlayerId playerId)` | method |
| `OnPlayerRemovedFromParty` | `public void OnPlayerRemovedFromParty(PlayerId playerId, PartyRemoveReason reason)` | method |
| `OnPlayersAddedToParty` | `public void OnPlayersAddedToParty([TupleElementNames(new string[]` | method |
| `OnGameClientStateChange` | `public void OnGameClientStateChange(LobbyClient.State state)` | method |
| `SetConnectionState` | `public void SetConnectionState(bool isAuthenticated)` | method |
| `OnActivateHome` | `public void OnActivateHome()` | method |
| `OnActivateCustomServer` | `public void OnActivateCustomServer()` | method |
| `OnActivateMatchmaking` | `public void OnActivateMatchmaking()` | method |
| `OnActivateProfile` | `public void OnActivateProfile()` | method |
| `OnClanInvitationReceived` | `public void OnClanInvitationReceived(string clanName, string clanTag, bool isCreation)` | method |
| `OnClanInvitationAnswered` | `public void OnClanInvitationAnswered(PlayerId playerId, ClanCreationAnswer answer)` | method |
| `OnClanCreationSuccessful` | `public void OnClanCreationSuccessful()` | method |
| `OnClanCreationFailed` | `public void OnClanCreationFailed()` | method |
| `OnClanCreationStarted` | `public void OnClanCreationStarted()` | method |
| `OnClanInfoChanged` | `public void OnClanInfoChanged()` | method |
| `OnPremadeGameEligibilityStatusReceived` | `public void OnPremadeGameEligibilityStatusReceived(bool isEligible)` | method |
| `OnPremadeGameCreated` | `public void OnPremadeGameCreated()` | method |
| `OnPremadeGameListReceived` | `public void OnPremadeGameListReceived()` | method |
| `OnPremadeGameCreationCancelled` | `public void OnPremadeGameCreationCancelled()` | method |
| `OnJoinPremadeGameRequested` | `public void OnJoinPremadeGameRequested(string clanName, string clanSigilCode, Guid partyId, PlayerId[]challengerPlayerIDs, PlayerId challengerPartyLeaderID, PremadeGameType premadeGameType)` | method |
| `OnJoinPremadeGameRequestSuccessful` | `public void OnJoinPremadeGameRequestSuccessful()` | method |
| `OnActivateArmory` | `public void OnActivateArmory()` | method |
| `OnActivateOptions` | `public void OnActivateOptions()` | method |
| `OnDeactivateOptions` | `public void OnDeactivateOptions()` | method |
| `OnCustomGameServerListReceived` | `public void OnCustomGameServerListReceived(AvailableCustomGames customGameServerList)` | method |
| `OnMatchmakerGameOver` | `public void OnMatchmakerGameOver(int oldExp, int newExp, List<string>badgesEarned, int lootGained, RankBarInfo oldRankBarInfo, RankBarInfo newRankBarInfo, BattleCancelReason battleCancelReason)` | method |
| `OnBattleServerLost` | `public void OnBattleServerLost()` | method |
| `OnRemovedFromMatchmakerGame` | `public void OnRemovedFromMatchmakerGame(DisconnectType disconnectType)` | method |
| `OnRemovedFromCustomGame` | `public void OnRemovedFromCustomGame(DisconnectType disconnectType)` | method |
| `OnPlayerAssignedPartyLeader` | `public void OnPlayerAssignedPartyLeader(PlayerId partyLeaderId)` | method |
| `OnPlayerSuggestedToParty` | `public void OnPlayerSuggestedToParty(PlayerId playerId, string playerName, PlayerId suggestingPlayerId, string suggestingPlayerName)` | method |
| `OnJoinCustomGameFailureResponse` | `public void OnJoinCustomGameFailureResponse(CustomGameJoinResponse response)` | method |
| `OnServerStatusReceived` | `public void OnServerStatusReceived(ServerStatus serverStatus)` | method |
| `OnFriendListReceived` | `public void OnFriendListReceived(FriendInfo[]friends)` | method |
| `OnRecentPlayerStatusesReceived` | `public void OnRecentPlayerStatusesReceived(FriendInfo[]friends)` | method |
| `OnBattleServerInformationReceived` | `public void OnBattleServerInformationReceived(BattleServerInformationForClient battleServerInformation)` | method |
| `OnRejoinBattleRequestAnswered` | `public void OnRejoinBattleRequestAnswered(bool isSuccessful)` | method |
| `OnNotificationsReceived` | `public void OnNotificationsReceived(LobbyNotification[]notifications)` | method |
| `Task` | `public async Task<bool>OnInviteToPlatformSession(PlayerId playerId)` | method |
| `OnPlatformRequestedMultiplayer` | `public async void OnPlatformRequestedMultiplayer()` | method |
| `OnSessionInvitationAccepted` | `public async void OnSessionInvitationAccepted(SessionInvitationType targetGameType)` | method |
| `List` | `public List<CustomServerAction>GetCustomActionsForServer(GameServerEntry gameServerEntry)` | method |
| `RegisterForCustomServerAction` | `public void RegisterForCustomServerAction(Func<GameServerEntry, List<CustomServerAction>>action)` | method |
| `UnregisterForCustomServerAction` | `public void UnregisterForCustomServerAction(Func<GameServerEntry, List<CustomServerAction>>action)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameState](../../core-extra/GameState/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
