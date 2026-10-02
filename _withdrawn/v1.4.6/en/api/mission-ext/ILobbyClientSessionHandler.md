---
title: "ILobbyClientSessionHandler"
description: "ILobbyClientSessionHandler: a public interface in TaleWorlds.MountAndBlade.Diamond; 59 exposed members (59 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/ILobbyClientSessionHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ILobbyClientSessionHandler

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public interface ILobbyClientSessionHandler`
**File:** `TaleWorlds.MountAndBlade.Diamond/ILobbyClientSessionHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ILobbyClientSessionHandler lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/ILobbyClientSessionHandler.cs. It is a public interface; the inheritance chain is ILobbyClientSessionHandler. It exposes 59 public/protected members: 59 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ILobbyClientSessionHandler lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain ILobbyClientSessionHandler. The surface is method-led (methods 59/59, properties 0/59), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/ILobbyClientSessionHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnConnected` | `void OnConnected();` | method |
| `OnCantConnect` | `void OnCantConnect();` | method |
| `OnDisconnected` | `void OnDisconnected(TextObject feedback);` | method |
| `OnPlayerDataReceived` | `void OnPlayerDataReceived(PlayerData playerData);` | method |
| `OnPendingRejoin` | `void OnPendingRejoin();` | method |
| `OnBattleResultReceived` | `void OnBattleResultReceived();` | method |
| `OnBattleServerInformationReceived` | `void OnBattleServerInformationReceived(BattleServerInformationForClient battleServerInformation);` | method |
| `OnBattleServerLost` | `void OnBattleServerLost();` | method |
| `OnCancelJoiningBattle` | `void OnCancelJoiningBattle();` | method |
| `OnRejoinRequestRejected` | `void OnRejoinRequestRejected();` | method |
| `OnFindGameAnswer` | `void OnFindGameAnswer(bool successful, string[]selectedAndDisabledGameTypes, bool isRejoin);` | method |
| `OnEnterBattleWithPartyAnswer` | `void OnEnterBattleWithPartyAnswer(string[]selectedGameTypes);` | method |
| `OnWhisperMessageReceived` | `void OnWhisperMessageReceived(string fromPlayer, string toPlayer, string message);` | method |
| `OnClanMessageReceived` | `void OnClanMessageReceived(string playerName, string message);` | method |
| `OnPartyMessageReceived` | `void OnPartyMessageReceived(string playerName, string message);` | method |
| `OnSystemMessageReceived` | `void OnSystemMessageReceived(string message);` | method |
| `OnAdminMessageReceived` | `void OnAdminMessageReceived(string message);` | method |
| `OnGameClientStateChange` | `void OnGameClientStateChange(LobbyClient.State oldState);` | method |
| `OnCustomGameServerListReceived` | `void OnCustomGameServerListReceived(AvailableCustomGames customGameServerList);` | method |
| `OnPartyInvitationReceived` | `void OnPartyInvitationReceived(string inviterPlayerName, PlayerId inviterPlayerId);` | method |
| `OnPartyJoinRequestReceived` | `void OnPartyJoinRequestReceived(PlayerId playerId, PlayerId viaPlayerId, string viaFriendName);` | method |
| `OnPartyInvitationInvalidated` | `void OnPartyInvitationInvalidated();` | method |
| `OnPlayerInvitedToParty` | `void OnPlayerInvitedToParty(PlayerId playerId);` | method |
| `OnPlayersAddedToParty` | `void OnPlayersAddedToParty([TupleElementNames(new string[]` | method |
| `OnPlayerRemovedFromParty` | `void OnPlayerRemovedFromParty(PlayerId playerId, PartyRemoveReason reason);` | method |
| `OnPlayerAssignedPartyLeader` | `void OnPlayerAssignedPartyLeader(PlayerId partyLeaderId);` | method |
| `OnPlayerSuggestedToParty` | `void OnPlayerSuggestedToParty(PlayerId playerId, string playerName, PlayerId suggestingPlayerId, string suggestingPlayerName);` | method |
| `OnServerStatusReceived` | `void OnServerStatusReceived(ServerStatus serverStatus);` | method |
| `OnSigilChanged` | `void OnSigilChanged();` | method |
| `OnFriendListReceived` | `void OnFriendListReceived(FriendInfo[]friends);` | method |
| `OnRecentPlayerStatusesReceived` | `void OnRecentPlayerStatusesReceived(FriendInfo[]friends);` | method |
| `OnNotificationsReceived` | `void OnNotificationsReceived(LobbyNotification[]notifications);` | method |
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
| `OnQuitFromMatchmakerGame` | `void OnQuitFromMatchmakerGame();` | method |
| `OnMatchmakerGameOver` | `void OnMatchmakerGameOver(int oldExperience, int newExperience, List<string>badgesEarned, int lootGained, RankBarInfo oldRankBarInfo, RankBarInfo newRankBarInfo, BattleCancelReason battleCancelReason);` | method |
| `OnRemovedFromMatchmakerGame` | `void OnRemovedFromMatchmakerGame(DisconnectType disconnectType);` | method |
| `OnRejoinBattleRequestAnswered` | `void OnRejoinBattleRequestAnswered(bool isSuccessful);` | method |
| `OnRegisterCustomGameServerResponse` | `void OnRegisterCustomGameServerResponse();` | method |
| `OnCustomGameEnd` | `void OnCustomGameEnd();` | method |
| `PlayerJoinGameResponseDataFromHost[]OnClientWantsToConnectCustomGame` | `PlayerJoinGameResponseDataFromHost[]OnClientWantsToConnectCustomGame(PlayerJoinGameData[]playerJoinData);` | method |
| `OnClientQuitFromCustomGame` | `void OnClientQuitFromCustomGame(PlayerId playerId);` | method |
| `OnJoinCustomGameResponse` | `void OnJoinCustomGameResponse(bool success, JoinGameData joinGameData, CustomGameJoinResponse failureReason, bool isAdmin);` | method |
| `OnJoinCustomGameFailureResponse` | `void OnJoinCustomGameFailureResponse(CustomGameJoinResponse response);` | method |
| `OnQuitFromCustomGame` | `void OnQuitFromCustomGame();` | method |
| `OnRemovedFromCustomGame` | `void OnRemovedFromCustomGame(DisconnectType disconnectType);` | method |
| `OnAnnouncementReceived` | `void OnAnnouncementReceived(Announcement announcement);` | method |
| `Task` | `Task<bool>OnInviteToPlatformSession(PlayerId playerId);` | method |
| `OnEnterCustomBattleWithPartyAnswer` | `void OnEnterCustomBattleWithPartyAnswer();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
