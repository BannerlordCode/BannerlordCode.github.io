---
title: "ILobbyStateHandler"
description: "ILobbyStateHandler: a public interface in TaleWorlds.MountAndBlade; 56 exposed members (56 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/ILobbyStateHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ILobbyStateHandler

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public interface ILobbyStateHandler`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/ILobbyStateHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ILobbyStateHandler lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/ILobbyStateHandler.cs. It is a public interface; the inheritance chain is ILobbyStateHandler. It exposes 56 public/protected members: 56 methods. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ILobbyStateHandler lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain ILobbyStateHandler. The surface is method-led (methods 56/56, properties 0/56), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/ILobbyStateHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SetConnectionState` | `void SetConnectionState(bool isAuthenticated);` | method |
| `ShowFeedback` | `string ShowFeedback(string title, string feedbackText);` | method |
| `ShowFeedback` | `string ShowFeedback(InquiryData inquiryData);` | method |
| `DismissFeedback` | `void DismissFeedback(string id);` | method |
| `OnPause` | `void OnPause();` | method |
| `OnResume` | `void OnResume();` | method |
| `OnDisconnected` | `void OnDisconnected();` | method |
| `OnRequestedToSearchBattle` | `void OnRequestedToSearchBattle();` | method |
| `OnUpdateFindingGame` | `void OnUpdateFindingGame(MatchmakingWaitTimeStats matchmakingWaitTimeStats, string[]gameTypeInfo);` | method |
| `OnRequestedToCancelSearchBattle` | `void OnRequestedToCancelSearchBattle();` | method |
| `OnSearchBattleCanceled` | `void OnSearchBattleCanceled();` | method |
| `OnPlayerDataReceived` | `void OnPlayerDataReceived(PlayerData playerData);` | method |
| `OnPendingRejoin` | `void OnPendingRejoin();` | method |
| `OnEnterBattleWithParty` | `void OnEnterBattleWithParty(string[]selectedGameTypes);` | method |
| `OnPartyInvitationReceived` | `void OnPartyInvitationReceived(PlayerId playerId);` | method |
| `OnPartyJoinRequestReceived` | `void OnPartyJoinRequestReceived(PlayerId joingPlayerId, PlayerId viaPlayerId, string viaPlayerName, bool newParty);` | method |
| `OnPartyInvitationInvalidated` | `void OnPartyInvitationInvalidated();` | method |
| `OnPlayerInvitedToParty` | `void OnPlayerInvitedToParty(PlayerId playerId);` | method |
| `OnPlayerAddedToParty` | `void OnPlayerAddedToParty(PlayerId playerId, string playerName, bool isPartyLeader);` | method |
| `OnPlayerRemovedFromParty` | `void OnPlayerRemovedFromParty(PlayerId playerId, PartyRemoveReason reason);` | method |
| `OnPlayerNameUpdated` | `void OnPlayerNameUpdated(string newName);` | method |
| `OnGameClientStateChange` | `void OnGameClientStateChange(LobbyClient.State state);` | method |
| `OnAdminMessageReceived` | `void OnAdminMessageReceived(string message);` | method |
| `OnActivateHome` | `void OnActivateHome();` | method |
| `OnActivateCustomServer` | `void OnActivateCustomServer();` | method |
| `OnActivateMatchmaking` | `void OnActivateMatchmaking();` | method |
| `OnActivateArmory` | `void OnActivateArmory();` | method |
| `OnActivateOptions` | `void OnActivateOptions();` | method |
| `OnDeactivateOptions` | `void OnDeactivateOptions();` | method |
| `OnCustomGameServerListReceived` | `void OnCustomGameServerListReceived(AvailableCustomGames customGameServerList);` | method |
| `OnMatchmakerGameOver` | `void OnMatchmakerGameOver(int oldExperience, int newExperience, List<string>badgesEarned, int lootGained, RankBarInfo oldRankBarInfo, RankBarInfo newRankBarInfo, BattleCancelReason battleCancelReason);` | method |
| `OnBattleServerLost` | `void OnBattleServerLost();` | method |
| `OnRemovedFromMatchmakerGame` | `void OnRemovedFromMatchmakerGame(DisconnectType disconnectType);` | method |
| `OnRemovedFromCustomGame` | `void OnRemovedFromCustomGame(DisconnectType disconnectType);` | method |
| `OnPlayerAssignedPartyLeader` | `void OnPlayerAssignedPartyLeader(PlayerId partyLeaderId);` | method |
| `OnPlayerSuggestedToParty` | `void OnPlayerSuggestedToParty(PlayerId playerId, string playerName, PlayerId suggestingPlayerId, string suggestingPlayerName);` | method |
| `OnJoinCustomGameFailureResponse` | `void OnJoinCustomGameFailureResponse(CustomGameJoinResponse response);` | method |
| `OnRejoinBattleRequestAnswered` | `void OnRejoinBattleRequestAnswered(bool isSuccessful);` | method |
| `OnServerStatusReceived` | `void OnServerStatusReceived(ServerStatus serverStatus);` | method |
| `OnBattleServerInformationReceived` | `void OnBattleServerInformationReceived(BattleServerInformationForClient battleServerInformation);` | method |
| `OnActivateProfile` | `void OnActivateProfile();` | method |
| `OnClanInvitationReceived` | `void OnClanInvitationReceived(string clanName, string clanTag, bool isCreation);` | method |
| `OnClanInvitationAnswered` | `void OnClanInvitationAnswered(PlayerId playerId, ClanCreationAnswer answer);` | method |
| `OnClanCreationSuccessful` | `void OnClanCreationSuccessful();` | method |
| `OnClanCreationFailed` | `void OnClanCreationFailed();` | method |
| `OnClanCreationStarted` | `void OnClanCreationStarted();` | method |
| `OnClanInfoChanged` | `void OnClanInfoChanged();` | method |
| `OnPremadeGameEligibilityStatusReceived` | `void OnPremadeGameEligibilityStatusReceived(bool isEligible);` | method |
| `OnPremadeGameCreated` | `void OnPremadeGameCreated();` | method |
| `OnPremadeGameListReceived` | `void OnPremadeGameListReceived();` | method |
| `OnPremadeGameCreationCancelled` | `void OnPremadeGameCreationCancelled();` | method |
| `OnJoinPremadeGameRequested` | `void OnJoinPremadeGameRequested(string clanName, string clanSigilCode, Guid partyId, PlayerId[]challengerPlayerIDs, PlayerId challengerPartyLeaderID, PremadeGameType premadeGameType);` | method |
| `OnJoinPremadeGameRequestSuccessful` | `void OnJoinPremadeGameRequestSuccessful();` | method |
| `OnSigilChanged` | `void OnSigilChanged();` | method |
| `OnNotificationsReceived` | `void OnNotificationsReceived(LobbyNotification[]notifications);` | method |
| `OnFriendListUpdated` | `void OnFriendListUpdated();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
