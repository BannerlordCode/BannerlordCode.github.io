---
title: "ILobbyStateHandler"
description: "ILobbyStateHandler：TaleWorlds.MountAndBlade 的 public 接口；公开成员 56 个（方法 56、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/ILobbyStateHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ILobbyStateHandler

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public interface ILobbyStateHandler`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/ILobbyStateHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ILobbyStateHandler 位于 TaleWorlds.MountAndBlade.Multiplayer 模块，源文件 TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/ILobbyStateHandler.cs。它是一个 public 接口，继承链为 ILobbyStateHandler。public/protected 成员共 56 个：56 方法。 反编译器把该类型拆到了 2 个源文件，签名已合并。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ILobbyStateHandler 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 ILobbyStateHandler。成员构成以方法为主（方法 56/56，属性 0/56），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/ILobbyStateHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetConnectionState` | `void SetConnectionState(bool isAuthenticated);` | 方法 |
| `ShowFeedback` | `string ShowFeedback(string title, string feedbackText);` | 方法 |
| `ShowFeedback` | `string ShowFeedback(InquiryData inquiryData);` | 方法 |
| `DismissFeedback` | `void DismissFeedback(string id);` | 方法 |
| `OnPause` | `void OnPause();` | 方法 |
| `OnResume` | `void OnResume();` | 方法 |
| `OnDisconnected` | `void OnDisconnected();` | 方法 |
| `OnRequestedToSearchBattle` | `void OnRequestedToSearchBattle();` | 方法 |
| `OnUpdateFindingGame` | `void OnUpdateFindingGame(MatchmakingWaitTimeStats matchmakingWaitTimeStats, string[]gameTypeInfo);` | 方法 |
| `OnRequestedToCancelSearchBattle` | `void OnRequestedToCancelSearchBattle();` | 方法 |
| `OnSearchBattleCanceled` | `void OnSearchBattleCanceled();` | 方法 |
| `OnPlayerDataReceived` | `void OnPlayerDataReceived(PlayerData playerData);` | 方法 |
| `OnPendingRejoin` | `void OnPendingRejoin();` | 方法 |
| `OnEnterBattleWithParty` | `void OnEnterBattleWithParty(string[]selectedGameTypes);` | 方法 |
| `OnPartyInvitationReceived` | `void OnPartyInvitationReceived(PlayerId playerId);` | 方法 |
| `OnPartyJoinRequestReceived` | `void OnPartyJoinRequestReceived(PlayerId joingPlayerId, PlayerId viaPlayerId, string viaPlayerName, bool newParty);` | 方法 |
| `OnPartyInvitationInvalidated` | `void OnPartyInvitationInvalidated();` | 方法 |
| `OnPlayerInvitedToParty` | `void OnPlayerInvitedToParty(PlayerId playerId);` | 方法 |
| `OnPlayerAddedToParty` | `void OnPlayerAddedToParty(PlayerId playerId, string playerName, bool isPartyLeader);` | 方法 |
| `OnPlayerRemovedFromParty` | `void OnPlayerRemovedFromParty(PlayerId playerId, PartyRemoveReason reason);` | 方法 |
| `OnPlayerNameUpdated` | `void OnPlayerNameUpdated(string newName);` | 方法 |
| `OnGameClientStateChange` | `void OnGameClientStateChange(LobbyClient.State state);` | 方法 |
| `OnAdminMessageReceived` | `void OnAdminMessageReceived(string message);` | 方法 |
| `OnActivateHome` | `void OnActivateHome();` | 方法 |
| `OnActivateCustomServer` | `void OnActivateCustomServer();` | 方法 |
| `OnActivateMatchmaking` | `void OnActivateMatchmaking();` | 方法 |
| `OnActivateArmory` | `void OnActivateArmory();` | 方法 |
| `OnActivateOptions` | `void OnActivateOptions();` | 方法 |
| `OnDeactivateOptions` | `void OnDeactivateOptions();` | 方法 |
| `OnCustomGameServerListReceived` | `void OnCustomGameServerListReceived(AvailableCustomGames customGameServerList);` | 方法 |
| `OnMatchmakerGameOver` | `void OnMatchmakerGameOver(int oldExperience, int newExperience, List<string>badgesEarned, int lootGained, RankBarInfo oldRankBarInfo, RankBarInfo newRankBarInfo, BattleCancelReason battleCancelReason);` | 方法 |
| `OnBattleServerLost` | `void OnBattleServerLost();` | 方法 |
| `OnRemovedFromMatchmakerGame` | `void OnRemovedFromMatchmakerGame(DisconnectType disconnectType);` | 方法 |
| `OnRemovedFromCustomGame` | `void OnRemovedFromCustomGame(DisconnectType disconnectType);` | 方法 |
| `OnPlayerAssignedPartyLeader` | `void OnPlayerAssignedPartyLeader(PlayerId partyLeaderId);` | 方法 |
| `OnPlayerSuggestedToParty` | `void OnPlayerSuggestedToParty(PlayerId playerId, string playerName, PlayerId suggestingPlayerId, string suggestingPlayerName);` | 方法 |
| `OnJoinCustomGameFailureResponse` | `void OnJoinCustomGameFailureResponse(CustomGameJoinResponse response);` | 方法 |
| `OnRejoinBattleRequestAnswered` | `void OnRejoinBattleRequestAnswered(bool isSuccessful);` | 方法 |
| `OnServerStatusReceived` | `void OnServerStatusReceived(ServerStatus serverStatus);` | 方法 |
| `OnBattleServerInformationReceived` | `void OnBattleServerInformationReceived(BattleServerInformationForClient battleServerInformation);` | 方法 |
| `OnActivateProfile` | `void OnActivateProfile();` | 方法 |
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
| `OnSigilChanged` | `void OnSigilChanged();` | 方法 |
| `OnNotificationsReceived` | `void OnNotificationsReceived(LobbyNotification[]notifications);` | 方法 |
| `OnFriendListUpdated` | `void OnFriendListUpdated();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
