---
title: "LobbyState"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LobbyState`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LobbyState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyState : GameState`
**Base:** `GameState`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/LobbyState.cs`

## 概述

`LobbyState` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsLoggingIn` | `public bool IsLoggingIn { get; }` |
| `Handler` | `public ILobbyStateHandler Handler { get; }` |
| `NewsManager` | `public NewsManager NewsManager { get; }` |
| `HasMultiplayerPrivilege` | `public bool? HasMultiplayerPrivilege { get; }` |
| `HasCrossplayPrivilege` | `public bool? HasCrossplayPrivilege { get; }` |
| `HasUserGeneratedContentPrivilege` | `public bool? HasUserGeneratedContentPrivilege { get; }` |

## 主要方法

### InitializeLogic
`public void InitializeLogic(ILobbyStateHandler lobbyStateHandler)`

**用途 / Purpose:** 初始化 `logic` 的状态、资源或绑定。

### UpdateHasMultiplayerPrivilege
`public async Task UpdateHasMultiplayerPrivilege()`

**用途 / Purpose:** 更新 `has multiplayer privilege` 的状态或数据。

### UpdateHasCrossplayPrivilege
`public async Task UpdateHasCrossplayPrivilege()`

**用途 / Purpose:** 更新 `has crossplay privilege` 的状态或数据。

### OnClientRefusedToJoinCustomServer
`public void OnClientRefusedToJoinCustomServer(GameServerEntry serverEntry)`

**用途 / Purpose:** 当 `client refused to join custom server` 事件触发时调用此方法。

### UpdateHasUserGeneratedContentPrivilege
`public async Task UpdateHasUserGeneratedContentPrivilege(bool showResolveUI)`

**用途 / Purpose:** 更新 `has user generated content privilege` 的状态或数据。

### TryLogin
`public async Task TryLogin()`

**用途 / Purpose:** 尝试获取 `login`，通常以 out 参数返回结果。

### TryLogin
`public async Task TryLogin(string userName, string password)`

**用途 / Purpose:** 尝试获取 `login`，通常以 out 参数返回结果。

### HostGame
`public void HostGame()`

**用途 / Purpose:** 处理 `host game` 相关逻辑。

### CreatePremadeGame
`public void CreatePremadeGame()`

**用途 / Purpose:** 创建一个 `premade game` 实例或对象。

### ShowFeedback
`public string ShowFeedback(string title, string message)`

**用途 / Purpose:** 处理 `show feedback` 相关逻辑。

### ShowFeedback
`public string ShowFeedback(InquiryData inquiryData)`

**用途 / Purpose:** 处理 `show feedback` 相关逻辑。

### DismissFeedback
`public void DismissFeedback(string messageId)`

**用途 / Purpose:** 处理 `dismiss feedback` 相关逻辑。

### OnPause
`public void OnPause()`

**用途 / Purpose:** 当 `pause` 事件触发时调用此方法。

### OnResume
`public void OnResume()`

**用途 / Purpose:** 当 `resume` 事件触发时调用此方法。

### OnRequestedToSearchBattle
`public void OnRequestedToSearchBattle()`

**用途 / Purpose:** 当 `requested to search battle` 事件触发时调用此方法。

### OnUpdateFindingGame
`public void OnUpdateFindingGame(MatchmakingWaitTimeStats matchmakingWaitTimeStats, string gameTypeInfo = null)`

**用途 / Purpose:** 当 `update finding game` 事件触发时调用此方法。

### OnRequestedToCancelSearchBattle
`public void OnRequestedToCancelSearchBattle()`

**用途 / Purpose:** 当 `requested to cancel search battle` 事件触发时调用此方法。

### OnCancelFindingGame
`public void OnCancelFindingGame()`

**用途 / Purpose:** 当 `cancel finding game` 事件触发时调用此方法。

### OnDisconnected
`public void OnDisconnected(TextObject feedback)`

**用途 / Purpose:** 当 `disconnected` 事件触发时调用此方法。

### OnPlayerDataReceived
`public void OnPlayerDataReceived(PlayerData playerData)`

**用途 / Purpose:** 当 `player data received` 事件触发时调用此方法。

### OnPendingRejoin
`public void OnPendingRejoin()`

**用途 / Purpose:** 当 `pending rejoin` 事件触发时调用此方法。

### OnEnterBattleWithParty
`public void OnEnterBattleWithParty(string selectedGameTypes)`

**用途 / Purpose:** 当 `enter battle with party` 事件触发时调用此方法。

### OnPartyInvitationReceived
`public async void OnPartyInvitationReceived(string inviterPlayerName, PlayerId playerId)`

**用途 / Purpose:** 当 `party invitation received` 事件触发时调用此方法。

### OnPartyJoinRequestReceived
`public async void OnPartyJoinRequestReceived(PlayerId joiningPlayerId, PlayerId viaPlayerId, string viaFriendName)`

**用途 / Purpose:** 当 `party join request received` 事件触发时调用此方法。

### OnAdminMessageReceived
`public void OnAdminMessageReceived(string message)`

**用途 / Purpose:** 当 `admin message received` 事件触发时调用此方法。

### OnPartyInvitationInvalidated
`public void OnPartyInvitationInvalidated()`

**用途 / Purpose:** 当 `party invitation invalidated` 事件触发时调用此方法。

### OnPlayerInvitedToParty
`public void OnPlayerInvitedToParty(PlayerId playerId)`

**用途 / Purpose:** 当 `player invited to party` 事件触发时调用此方法。

### OnPlayerRemovedFromParty
`public void OnPlayerRemovedFromParty(PlayerId playerId, PartyRemoveReason reason)`

**用途 / Purpose:** 当 `player removed from party` 事件触发时调用此方法。

### OnPlayersAddedToParty
`public void OnPlayersAddedToParty(List<(PlayerId PlayerId, string PlayerName, bool IsPartyLeader)> addedPlayers, List<(PlayerId PlayerId, string PlayerName)> invitedPlayers)`

**用途 / Purpose:** 当 `players added to party` 事件触发时调用此方法。

### OnGameClientStateChange
`public void OnGameClientStateChange(State state)`

**用途 / Purpose:** 当 `game client state change` 事件触发时调用此方法。

### SetConnectionState
`public void SetConnectionState(bool isAuthenticated)`

**用途 / Purpose:** 设置 `connection state` 的值或状态。

### OnActivateHome
`public void OnActivateHome()`

**用途 / Purpose:** 当 `activate home` 事件触发时调用此方法。

### OnActivateCustomServer
`public void OnActivateCustomServer()`

**用途 / Purpose:** 当 `activate custom server` 事件触发时调用此方法。

### OnActivateMatchmaking
`public void OnActivateMatchmaking()`

**用途 / Purpose:** 当 `activate matchmaking` 事件触发时调用此方法。

### OnActivateProfile
`public void OnActivateProfile()`

**用途 / Purpose:** 当 `activate profile` 事件触发时调用此方法。

### OnClanInvitationReceived
`public void OnClanInvitationReceived(string clanName, string clanTag, bool isCreation)`

**用途 / Purpose:** 当 `clan invitation received` 事件触发时调用此方法。

### OnClanInvitationAnswered
`public void OnClanInvitationAnswered(PlayerId playerId, ClanCreationAnswer answer)`

**用途 / Purpose:** 当 `clan invitation answered` 事件触发时调用此方法。

### OnClanCreationSuccessful
`public void OnClanCreationSuccessful()`

**用途 / Purpose:** 当 `clan creation successful` 事件触发时调用此方法。

### OnClanCreationFailed
`public void OnClanCreationFailed()`

**用途 / Purpose:** 当 `clan creation failed` 事件触发时调用此方法。

### OnClanCreationStarted
`public void OnClanCreationStarted()`

**用途 / Purpose:** 当 `clan creation started` 事件触发时调用此方法。

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**用途 / Purpose:** 当 `clan info changed` 事件触发时调用此方法。

### OnPremadeGameEligibilityStatusReceived
`public void OnPremadeGameEligibilityStatusReceived(bool isEligible)`

**用途 / Purpose:** 当 `premade game eligibility status received` 事件触发时调用此方法。

### OnPremadeGameCreated
`public void OnPremadeGameCreated()`

**用途 / Purpose:** 当 `premade game created` 事件触发时调用此方法。

### OnPremadeGameListReceived
`public void OnPremadeGameListReceived()`

**用途 / Purpose:** 当 `premade game list received` 事件触发时调用此方法。

### OnPremadeGameCreationCancelled
`public void OnPremadeGameCreationCancelled()`

**用途 / Purpose:** 当 `premade game creation cancelled` 事件触发时调用此方法。

### OnJoinPremadeGameRequested
`public void OnJoinPremadeGameRequested(string clanName, string clanSigilCode, Guid partyId, PlayerId challengerPlayerIDs, PlayerId challengerPartyLeaderID, PremadeGameType premadeGameType)`

**用途 / Purpose:** 当 `join premade game requested` 事件触发时调用此方法。

### OnJoinPremadeGameRequestSuccessful
`public void OnJoinPremadeGameRequestSuccessful()`

**用途 / Purpose:** 当 `join premade game request successful` 事件触发时调用此方法。

### OnActivateArmory
`public void OnActivateArmory()`

**用途 / Purpose:** 当 `activate armory` 事件触发时调用此方法。

### OnActivateOptions
`public void OnActivateOptions()`

**用途 / Purpose:** 当 `activate options` 事件触发时调用此方法。

### OnDeactivateOptions
`public void OnDeactivateOptions()`

**用途 / Purpose:** 当 `deactivate options` 事件触发时调用此方法。

### OnCustomGameServerListReceived
`public void OnCustomGameServerListReceived(AvailableCustomGames customGameServerList)`

**用途 / Purpose:** 当 `custom game server list received` 事件触发时调用此方法。

### OnMatchmakerGameOver
`public void OnMatchmakerGameOver(int oldExp, int newExp, List<string> badgesEarned, int lootGained, RankBarInfo oldRankBarInfo, RankBarInfo newRankBarInfo, BattleCancelReason battleCancelReason)`

**用途 / Purpose:** 当 `matchmaker game over` 事件触发时调用此方法。

### OnBattleServerLost
`public void OnBattleServerLost()`

**用途 / Purpose:** 当 `battle server lost` 事件触发时调用此方法。

### OnRemovedFromMatchmakerGame
`public void OnRemovedFromMatchmakerGame(DisconnectType disconnectType)`

**用途 / Purpose:** 当 `removed from matchmaker game` 事件触发时调用此方法。

### OnRemovedFromCustomGame
`public void OnRemovedFromCustomGame(DisconnectType disconnectType)`

**用途 / Purpose:** 当 `removed from custom game` 事件触发时调用此方法。

### OnPlayerAssignedPartyLeader
`public void OnPlayerAssignedPartyLeader(PlayerId partyLeaderId)`

**用途 / Purpose:** 当 `player assigned party leader` 事件触发时调用此方法。

### OnPlayerSuggestedToParty
`public void OnPlayerSuggestedToParty(PlayerId playerId, string playerName, PlayerId suggestingPlayerId, string suggestingPlayerName)`

**用途 / Purpose:** 当 `player suggested to party` 事件触发时调用此方法。

### OnJoinCustomGameFailureResponse
`public void OnJoinCustomGameFailureResponse(CustomGameJoinResponse response)`

**用途 / Purpose:** 当 `join custom game failure response` 事件触发时调用此方法。

### OnServerStatusReceived
`public void OnServerStatusReceived(ServerStatus serverStatus)`

**用途 / Purpose:** 当 `server status received` 事件触发时调用此方法。

### OnFriendListReceived
`public void OnFriendListReceived(FriendInfo friends)`

**用途 / Purpose:** 当 `friend list received` 事件触发时调用此方法。

### OnRecentPlayerStatusesReceived
`public void OnRecentPlayerStatusesReceived(FriendInfo friends)`

**用途 / Purpose:** 当 `recent player statuses received` 事件触发时调用此方法。

### OnBattleServerInformationReceived
`public void OnBattleServerInformationReceived(BattleServerInformationForClient battleServerInformation)`

**用途 / Purpose:** 当 `battle server information received` 事件触发时调用此方法。

### OnRejoinBattleRequestAnswered
`public void OnRejoinBattleRequestAnswered(bool isSuccessful)`

**用途 / Purpose:** 当 `rejoin battle request answered` 事件触发时调用此方法。

### OnNotificationsReceived
`public void OnNotificationsReceived(LobbyNotification notifications)`

**用途 / Purpose:** 当 `notifications received` 事件触发时调用此方法。

### OnInviteToPlatformSession
`public async Task<bool> OnInviteToPlatformSession(PlayerId playerId)`

**用途 / Purpose:** 当 `invite to platform session` 事件触发时调用此方法。

### OnPlatformRequestedMultiplayer
`public async void OnPlatformRequestedMultiplayer()`

**用途 / Purpose:** 当 `platform requested multiplayer` 事件触发时调用此方法。

### OnSessionInvitationAccepted
`public async void OnSessionInvitationAccepted(SessionInvitationType targetGameType)`

**用途 / Purpose:** 当 `session invitation accepted` 事件触发时调用此方法。

### GetCustomActionsForServer
`public List<CustomServerAction> GetCustomActionsForServer(GameServerEntry gameServerEntry)`

**用途 / Purpose:** 获取 `custom actions for server` 的当前值。

### RegisterForCustomServerAction
`public void RegisterForCustomServerAction(Func<GameServerEntry, List<CustomServerAction>> action)`

**用途 / Purpose:** 处理 `register for custom server action` 相关逻辑。

### UnregisterForCustomServerAction
`public void UnregisterForCustomServerAction(Func<GameServerEntry, List<CustomServerAction>> action)`

**用途 / Purpose:** 处理 `unregister for custom server action` 相关逻辑。

## 使用示例

```csharp
var value = new LobbyState();
value.InitializeLogic(lobbyStateHandler);
```

## 参见

- [完整类目录](../catalog)