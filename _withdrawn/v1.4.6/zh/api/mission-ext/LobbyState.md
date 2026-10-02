---
title: "LobbyState"
description: "LobbyState：TaleWorlds.MountAndBlade 的 public 类，继承 GameState；公开成员 85 个（方法 74、属性 9、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyState.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LobbyState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public class LobbyState : GameState`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyState.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

LobbyState 位于 TaleWorlds.MountAndBlade.Multiplayer 模块，源文件 TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyState.cs。它是一个 public 类，实现/继承 GameState，继承链为 LobbyState → GameState → MBObjectBase。public/protected 成员共 85 个：74 方法、9 属性、1 事件、1 构造函数。 反编译器把该类型拆到了 2 个源文件，签名已合并。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LobbyState 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 LobbyState → GameState → MBObjectBase。成员构成以方法为主（方法 74/85，属性 9/85），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | 属性 |
| `IsMusicMenuState` | `public override bool IsMusicMenuState` | 属性 |
| `IsLoggingIn` | `public bool IsLoggingIn` | 属性 |
| `Handler` | `public ILobbyStateHandler Handler` | 属性 |
| `LobbyClient` | `public LobbyClient LobbyClient` | 属性 |
| `NewsManager` | `public NewsManager NewsManager` | 属性 |
| `Action` | `public event Action<GameServerEntry>ClientRefusedToJoinCustomServer;` | 事件 |
| `HasMultiplayerPrivilege` | `public bool? HasMultiplayerPrivilege` | 属性 |
| `HasCrossplayPrivilege` | `public bool? HasCrossplayPrivilege` | 属性 |
| `HasUserGeneratedContentPrivilege` | `public bool? HasUserGeneratedContentPrivilege` | 属性 |
| `LobbyState` | `public LobbyState()` | 构造函数 |
| `InitializeLogic` | `public void InitializeLogic(ILobbyStateHandler lobbyStateHandler)` | 方法 |
| `OnInitialize` | `protected override async void OnInitialize()` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `UpdateHasMultiplayerPrivilege` | `public async Task UpdateHasMultiplayerPrivilege()` | 方法 |
| `UpdateHasCrossplayPrivilege` | `public async Task UpdateHasCrossplayPrivilege()` | 方法 |
| `OnClientRefusedToJoinCustomServer` | `public void OnClientRefusedToJoinCustomServer(GameServerEntry serverEntry)` | 方法 |
| `UpdateHasUserGeneratedContentPrivilege` | `public async Task UpdateHasUserGeneratedContentPrivilege(bool showResolveUI)` | 方法 |
| `TryLogin` | `public async Task TryLogin()` | 方法 |
| `TryLogin` | `public async Task TryLogin(string userName, string password)` | 方法 |
| `HostGame` | `public void HostGame()` | 方法 |
| `CreatePremadeGame` | `public void CreatePremadeGame()` | 方法 |
| `ShowFeedback` | `public string ShowFeedback(string title, string message)` | 方法 |
| `ShowFeedback` | `public string ShowFeedback(InquiryData inquiryData)` | 方法 |
| `DismissFeedback` | `public void DismissFeedback(string messageId)` | 方法 |
| `OnPause` | `public void OnPause()` | 方法 |
| `OnResume` | `public void OnResume()` | 方法 |
| `OnRequestedToSearchBattle` | `public void OnRequestedToSearchBattle()` | 方法 |
| `OnUpdateFindingGame` | `public void OnUpdateFindingGame(MatchmakingWaitTimeStats matchmakingWaitTimeStats, string[]gameTypeInfo = null)` | 方法 |
| `OnRequestedToCancelSearchBattle` | `public void OnRequestedToCancelSearchBattle()` | 方法 |
| `OnCancelFindingGame` | `public void OnCancelFindingGame()` | 方法 |
| `OnDisconnected` | `public void OnDisconnected(TextObject feedback)` | 方法 |
| `OnPlayerDataReceived` | `public void OnPlayerDataReceived(PlayerData playerData)` | 方法 |
| `OnPendingRejoin` | `public void OnPendingRejoin()` | 方法 |
| `OnEnterBattleWithParty` | `public void OnEnterBattleWithParty(string[]selectedGameTypes)` | 方法 |
| `OnPartyInvitationReceived` | `public async void OnPartyInvitationReceived(string inviterPlayerName, PlayerId playerId)` | 方法 |
| `OnPartyJoinRequestReceived` | `public async void OnPartyJoinRequestReceived(PlayerId joiningPlayerId, PlayerId viaPlayerId, string viaFriendName)` | 方法 |
| `OnAdminMessageReceived` | `public void OnAdminMessageReceived(string message)` | 方法 |
| `OnPartyInvitationInvalidated` | `public void OnPartyInvitationInvalidated()` | 方法 |
| `OnPlayerInvitedToParty` | `public void OnPlayerInvitedToParty(PlayerId playerId)` | 方法 |
| `OnPlayerRemovedFromParty` | `public void OnPlayerRemovedFromParty(PlayerId playerId, PartyRemoveReason reason)` | 方法 |
| `OnPlayersAddedToParty` | `public void OnPlayersAddedToParty([TupleElementNames(new string[]` | 方法 |
| `OnGameClientStateChange` | `public void OnGameClientStateChange(LobbyClient.State state)` | 方法 |
| `SetConnectionState` | `public void SetConnectionState(bool isAuthenticated)` | 方法 |
| `OnActivateHome` | `public void OnActivateHome()` | 方法 |
| `OnActivateCustomServer` | `public void OnActivateCustomServer()` | 方法 |
| `OnActivateMatchmaking` | `public void OnActivateMatchmaking()` | 方法 |
| `OnActivateProfile` | `public void OnActivateProfile()` | 方法 |
| `OnClanInvitationReceived` | `public void OnClanInvitationReceived(string clanName, string clanTag, bool isCreation)` | 方法 |
| `OnClanInvitationAnswered` | `public void OnClanInvitationAnswered(PlayerId playerId, ClanCreationAnswer answer)` | 方法 |
| `OnClanCreationSuccessful` | `public void OnClanCreationSuccessful()` | 方法 |
| `OnClanCreationFailed` | `public void OnClanCreationFailed()` | 方法 |
| `OnClanCreationStarted` | `public void OnClanCreationStarted()` | 方法 |
| `OnClanInfoChanged` | `public void OnClanInfoChanged()` | 方法 |
| `OnPremadeGameEligibilityStatusReceived` | `public void OnPremadeGameEligibilityStatusReceived(bool isEligible)` | 方法 |
| `OnPremadeGameCreated` | `public void OnPremadeGameCreated()` | 方法 |
| `OnPremadeGameListReceived` | `public void OnPremadeGameListReceived()` | 方法 |
| `OnPremadeGameCreationCancelled` | `public void OnPremadeGameCreationCancelled()` | 方法 |
| `OnJoinPremadeGameRequested` | `public void OnJoinPremadeGameRequested(string clanName, string clanSigilCode, Guid partyId, PlayerId[]challengerPlayerIDs, PlayerId challengerPartyLeaderID, PremadeGameType premadeGameType)` | 方法 |
| `OnJoinPremadeGameRequestSuccessful` | `public void OnJoinPremadeGameRequestSuccessful()` | 方法 |
| `OnActivateArmory` | `public void OnActivateArmory()` | 方法 |
| `OnActivateOptions` | `public void OnActivateOptions()` | 方法 |
| `OnDeactivateOptions` | `public void OnDeactivateOptions()` | 方法 |
| `OnCustomGameServerListReceived` | `public void OnCustomGameServerListReceived(AvailableCustomGames customGameServerList)` | 方法 |
| `OnMatchmakerGameOver` | `public void OnMatchmakerGameOver(int oldExp, int newExp, List<string>badgesEarned, int lootGained, RankBarInfo oldRankBarInfo, RankBarInfo newRankBarInfo, BattleCancelReason battleCancelReason)` | 方法 |
| `OnBattleServerLost` | `public void OnBattleServerLost()` | 方法 |
| `OnRemovedFromMatchmakerGame` | `public void OnRemovedFromMatchmakerGame(DisconnectType disconnectType)` | 方法 |
| `OnRemovedFromCustomGame` | `public void OnRemovedFromCustomGame(DisconnectType disconnectType)` | 方法 |
| `OnPlayerAssignedPartyLeader` | `public void OnPlayerAssignedPartyLeader(PlayerId partyLeaderId)` | 方法 |
| `OnPlayerSuggestedToParty` | `public void OnPlayerSuggestedToParty(PlayerId playerId, string playerName, PlayerId suggestingPlayerId, string suggestingPlayerName)` | 方法 |
| `OnJoinCustomGameFailureResponse` | `public void OnJoinCustomGameFailureResponse(CustomGameJoinResponse response)` | 方法 |
| `OnServerStatusReceived` | `public void OnServerStatusReceived(ServerStatus serverStatus)` | 方法 |
| `OnFriendListReceived` | `public void OnFriendListReceived(FriendInfo[]friends)` | 方法 |
| `OnRecentPlayerStatusesReceived` | `public void OnRecentPlayerStatusesReceived(FriendInfo[]friends)` | 方法 |
| `OnBattleServerInformationReceived` | `public void OnBattleServerInformationReceived(BattleServerInformationForClient battleServerInformation)` | 方法 |
| `OnRejoinBattleRequestAnswered` | `public void OnRejoinBattleRequestAnswered(bool isSuccessful)` | 方法 |
| `OnNotificationsReceived` | `public void OnNotificationsReceived(LobbyNotification[]notifications)` | 方法 |
| `Task` | `public async Task<bool>OnInviteToPlatformSession(PlayerId playerId)` | 方法 |
| `OnPlatformRequestedMultiplayer` | `public async void OnPlatformRequestedMultiplayer()` | 方法 |
| `OnSessionInvitationAccepted` | `public async void OnSessionInvitationAccepted(SessionInvitationType targetGameType)` | 方法 |
| `List` | `public List<CustomServerAction>GetCustomActionsForServer(GameServerEntry gameServerEntry)` | 方法 |
| `RegisterForCustomServerAction` | `public void RegisterForCustomServerAction(Func<GameServerEntry, List<CustomServerAction>>action)` | 方法 |
| `UnregisterForCustomServerAction` | `public void UnregisterForCustomServerAction(Func<GameServerEntry, List<CustomServerAction>>action)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GameState](../../core-extra/GameState/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
