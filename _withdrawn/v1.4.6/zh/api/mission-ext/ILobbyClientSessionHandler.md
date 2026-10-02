---
title: "ILobbyClientSessionHandler"
description: "ILobbyClientSessionHandler：TaleWorlds.MountAndBlade.Diamond 的 public 接口；公开成员 59 个（方法 59、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/ILobbyClientSessionHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ILobbyClientSessionHandler

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public interface ILobbyClientSessionHandler`
**File:** `TaleWorlds.MountAndBlade.Diamond/ILobbyClientSessionHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ILobbyClientSessionHandler 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/ILobbyClientSessionHandler.cs。它是一个 public 接口，继承链为 ILobbyClientSessionHandler。public/protected 成员共 59 个：59 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ILobbyClientSessionHandler 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 ILobbyClientSessionHandler。成员构成以方法为主（方法 59/59，属性 0/59），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/ILobbyClientSessionHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnConnected` | `void OnConnected();` | 方法 |
| `OnCantConnect` | `void OnCantConnect();` | 方法 |
| `OnDisconnected` | `void OnDisconnected(TextObject feedback);` | 方法 |
| `OnPlayerDataReceived` | `void OnPlayerDataReceived(PlayerData playerData);` | 方法 |
| `OnPendingRejoin` | `void OnPendingRejoin();` | 方法 |
| `OnBattleResultReceived` | `void OnBattleResultReceived();` | 方法 |
| `OnBattleServerInformationReceived` | `void OnBattleServerInformationReceived(BattleServerInformationForClient battleServerInformation);` | 方法 |
| `OnBattleServerLost` | `void OnBattleServerLost();` | 方法 |
| `OnCancelJoiningBattle` | `void OnCancelJoiningBattle();` | 方法 |
| `OnRejoinRequestRejected` | `void OnRejoinRequestRejected();` | 方法 |
| `OnFindGameAnswer` | `void OnFindGameAnswer(bool successful, string[]selectedAndDisabledGameTypes, bool isRejoin);` | 方法 |
| `OnEnterBattleWithPartyAnswer` | `void OnEnterBattleWithPartyAnswer(string[]selectedGameTypes);` | 方法 |
| `OnWhisperMessageReceived` | `void OnWhisperMessageReceived(string fromPlayer, string toPlayer, string message);` | 方法 |
| `OnClanMessageReceived` | `void OnClanMessageReceived(string playerName, string message);` | 方法 |
| `OnPartyMessageReceived` | `void OnPartyMessageReceived(string playerName, string message);` | 方法 |
| `OnSystemMessageReceived` | `void OnSystemMessageReceived(string message);` | 方法 |
| `OnAdminMessageReceived` | `void OnAdminMessageReceived(string message);` | 方法 |
| `OnGameClientStateChange` | `void OnGameClientStateChange(LobbyClient.State oldState);` | 方法 |
| `OnCustomGameServerListReceived` | `void OnCustomGameServerListReceived(AvailableCustomGames customGameServerList);` | 方法 |
| `OnPartyInvitationReceived` | `void OnPartyInvitationReceived(string inviterPlayerName, PlayerId inviterPlayerId);` | 方法 |
| `OnPartyJoinRequestReceived` | `void OnPartyJoinRequestReceived(PlayerId playerId, PlayerId viaPlayerId, string viaFriendName);` | 方法 |
| `OnPartyInvitationInvalidated` | `void OnPartyInvitationInvalidated();` | 方法 |
| `OnPlayerInvitedToParty` | `void OnPlayerInvitedToParty(PlayerId playerId);` | 方法 |
| `OnPlayersAddedToParty` | `void OnPlayersAddedToParty([TupleElementNames(new string[]` | 方法 |
| `OnPlayerRemovedFromParty` | `void OnPlayerRemovedFromParty(PlayerId playerId, PartyRemoveReason reason);` | 方法 |
| `OnPlayerAssignedPartyLeader` | `void OnPlayerAssignedPartyLeader(PlayerId partyLeaderId);` | 方法 |
| `OnPlayerSuggestedToParty` | `void OnPlayerSuggestedToParty(PlayerId playerId, string playerName, PlayerId suggestingPlayerId, string suggestingPlayerName);` | 方法 |
| `OnServerStatusReceived` | `void OnServerStatusReceived(ServerStatus serverStatus);` | 方法 |
| `OnSigilChanged` | `void OnSigilChanged();` | 方法 |
| `OnFriendListReceived` | `void OnFriendListReceived(FriendInfo[]friends);` | 方法 |
| `OnRecentPlayerStatusesReceived` | `void OnRecentPlayerStatusesReceived(FriendInfo[]friends);` | 方法 |
| `OnNotificationsReceived` | `void OnNotificationsReceived(LobbyNotification[]notifications);` | 方法 |
| `OnClanInvitationReceived` | `void OnClanInvitationReceived(string clanName, string clanTag, bool isCreation);` | 方法 |
| `OnClanInvitationAnswered` | `void OnClanInvitationAnswered(PlayerId playerId, ClanCreationAnswer answer);` | 方法 |
| `OnClanCreationSuccessful` | `void OnClanCreationSuccessful();` | 方法 |
| `OnClanCreationFailed` | `void OnClanCreationFailed();` | 方法 |
| `OnClanCreationStarted` | `void OnClanCreationStarted();` | 方法 |
| `OnClanInfoChanged` | `void OnClanInfoChanged();` | 方法 |
| `OnPremadeGameEligibilityStatusReceived` | `void OnPremadeGameEligibilityStatusReceived(bool isEligible);` | 方法 |
| `OnPremadeGameCreated` | `void OnPremadeGameCreated();` | 方法 |
| `OnPremadeGameListReceived` | `void OnPremadeGameListReceived();` | 方法 |
| `OnPremadeGameCreationCancelled` | `void OnPremadeGameCreationCancelled();` | 方法 |
| `OnJoinPremadeGameRequested` | `void OnJoinPremadeGameRequested(string clanName, string clanSigilCode, Guid partyId, PlayerId[]challengerPlayerIDs, PlayerId challengerPartyLeaderID, PremadeGameType premadeGameType);` | 方法 |
| `OnJoinPremadeGameRequestSuccessful` | `void OnJoinPremadeGameRequestSuccessful();` | 方法 |
| `OnQuitFromMatchmakerGame` | `void OnQuitFromMatchmakerGame();` | 方法 |
| `OnMatchmakerGameOver` | `void OnMatchmakerGameOver(int oldExperience, int newExperience, List<string>badgesEarned, int lootGained, RankBarInfo oldRankBarInfo, RankBarInfo newRankBarInfo, BattleCancelReason battleCancelReason);` | 方法 |
| `OnRemovedFromMatchmakerGame` | `void OnRemovedFromMatchmakerGame(DisconnectType disconnectType);` | 方法 |
| `OnRejoinBattleRequestAnswered` | `void OnRejoinBattleRequestAnswered(bool isSuccessful);` | 方法 |
| `OnRegisterCustomGameServerResponse` | `void OnRegisterCustomGameServerResponse();` | 方法 |
| `OnCustomGameEnd` | `void OnCustomGameEnd();` | 方法 |
| `PlayerJoinGameResponseDataFromHost[]OnClientWantsToConnectCustomGame` | `PlayerJoinGameResponseDataFromHost[]OnClientWantsToConnectCustomGame(PlayerJoinGameData[]playerJoinData);` | 方法 |
| `OnClientQuitFromCustomGame` | `void OnClientQuitFromCustomGame(PlayerId playerId);` | 方法 |
| `OnJoinCustomGameResponse` | `void OnJoinCustomGameResponse(bool success, JoinGameData joinGameData, CustomGameJoinResponse failureReason, bool isAdmin);` | 方法 |
| `OnJoinCustomGameFailureResponse` | `void OnJoinCustomGameFailureResponse(CustomGameJoinResponse response);` | 方法 |
| `OnQuitFromCustomGame` | `void OnQuitFromCustomGame();` | 方法 |
| `OnRemovedFromCustomGame` | `void OnRemovedFromCustomGame(DisconnectType disconnectType);` | 方法 |
| `OnAnnouncementReceived` | `void OnAnnouncementReceived(Announcement announcement);` | 方法 |
| `Task` | `Task<bool>OnInviteToPlatformSession(PlayerId playerId);` | 方法 |
| `OnEnterCustomBattleWithPartyAnswer` | `void OnEnterCustomBattleWithPartyAnswer();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
