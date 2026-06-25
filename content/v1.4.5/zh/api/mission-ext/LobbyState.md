---
title: "LobbyState"
description: "LobbyState 的自动生成类参考。"
---
# LobbyState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyState : GameState`
**Base:** `GameState`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/LobbyState.cs`

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

**用途 / Purpose:** 为 「logic」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.InitializeLogic(lobbyStateHandler);
```

### UpdateHasMultiplayerPrivilege
`public async Task UpdateHasMultiplayerPrivilege()`

**用途 / Purpose:** 重新计算并更新 「has multiplayer privilege」 的最新表示。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
var result = lobbyState.UpdateHasMultiplayerPrivilege();
```

### UpdateHasCrossplayPrivilege
`public async Task UpdateHasCrossplayPrivilege()`

**用途 / Purpose:** 重新计算并更新 「has crossplay privilege」 的最新表示。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
var result = lobbyState.UpdateHasCrossplayPrivilege();
```

### OnClientRefusedToJoinCustomServer
`public void OnClientRefusedToJoinCustomServer(GameServerEntry serverEntry)`

**用途 / Purpose:** 在 「client refused to join custom server」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnClientRefusedToJoinCustomServer(serverEntry);
```

### UpdateHasUserGeneratedContentPrivilege
`public async Task UpdateHasUserGeneratedContentPrivilege(bool showResolveUI)`

**用途 / Purpose:** 重新计算并更新 「has user generated content privilege」 的最新表示。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
var result = lobbyState.UpdateHasUserGeneratedContentPrivilege(false);
```

### TryLogin
`public async Task TryLogin()`

**用途 / Purpose:** 尝试获取 「login」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
var result = lobbyState.TryLogin();
```

### TryLogin
`public async Task TryLogin(string userName, string password)`

**用途 / Purpose:** 尝试获取 「login」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
var result = lobbyState.TryLogin("example", "example");
```

### HostGame
`public void HostGame()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.HostGame();
```

### CreatePremadeGame
`public void CreatePremadeGame()`

**用途 / Purpose:** 构建一个新的 「premade game」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.CreatePremadeGame();
```

### ShowFeedback
`public string ShowFeedback(string title, string message)`

**用途 / Purpose:** 显示「feedback」对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
var result = lobbyState.ShowFeedback("example", "example");
```

### ShowFeedback
`public string ShowFeedback(InquiryData inquiryData)`

**用途 / Purpose:** 显示「feedback」对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
var result = lobbyState.ShowFeedback(inquiryData);
```

### DismissFeedback
`public void DismissFeedback(string messageId)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.DismissFeedback("example");
```

### OnPause
`public void OnPause()`

**用途 / Purpose:** 在 「pause」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnPause();
```

### OnResume
`public void OnResume()`

**用途 / Purpose:** 在 「resume」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnResume();
```

### OnRequestedToSearchBattle
`public void OnRequestedToSearchBattle()`

**用途 / Purpose:** 在 「requested to search battle」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnRequestedToSearchBattle();
```

### OnUpdateFindingGame
`public void OnUpdateFindingGame(MatchmakingWaitTimeStats matchmakingWaitTimeStats, string gameTypeInfo = null)`

**用途 / Purpose:** 在 「update finding game」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnUpdateFindingGame(matchmakingWaitTimeStats, "example");
```

### OnRequestedToCancelSearchBattle
`public void OnRequestedToCancelSearchBattle()`

**用途 / Purpose:** 在 「requested to cancel search battle」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnRequestedToCancelSearchBattle();
```

### OnCancelFindingGame
`public void OnCancelFindingGame()`

**用途 / Purpose:** 在 「cancel finding game」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnCancelFindingGame();
```

### OnDisconnected
`public void OnDisconnected(TextObject feedback)`

**用途 / Purpose:** 在 「disconnected」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnDisconnected(feedback);
```

### OnPlayerDataReceived
`public void OnPlayerDataReceived(PlayerData playerData)`

**用途 / Purpose:** 在 「player data received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnPlayerDataReceived(playerData);
```

### OnPendingRejoin
`public void OnPendingRejoin()`

**用途 / Purpose:** 在 「pending rejoin」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnPendingRejoin();
```

### OnEnterBattleWithParty
`public void OnEnterBattleWithParty(string selectedGameTypes)`

**用途 / Purpose:** 在 「enter battle with party」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnEnterBattleWithParty("example");
```

### OnPartyInvitationReceived
`public async void OnPartyInvitationReceived(string inviterPlayerName, PlayerId playerId)`

**用途 / Purpose:** 在 「party invitation received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnPartyInvitationReceived("example", playerId);
```

### OnPartyJoinRequestReceived
`public async void OnPartyJoinRequestReceived(PlayerId joiningPlayerId, PlayerId viaPlayerId, string viaFriendName)`

**用途 / Purpose:** 在 「party join request received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnPartyJoinRequestReceived(joiningPlayerId, viaPlayerId, "example");
```

### OnAdminMessageReceived
`public void OnAdminMessageReceived(string message)`

**用途 / Purpose:** 在 「admin message received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnAdminMessageReceived("example");
```

### OnPartyInvitationInvalidated
`public void OnPartyInvitationInvalidated()`

**用途 / Purpose:** 在 「party invitation invalidated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnPartyInvitationInvalidated();
```

### OnPlayerInvitedToParty
`public void OnPlayerInvitedToParty(PlayerId playerId)`

**用途 / Purpose:** 在 「player invited to party」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnPlayerInvitedToParty(playerId);
```

### OnPlayerRemovedFromParty
`public void OnPlayerRemovedFromParty(PlayerId playerId, PartyRemoveReason reason)`

**用途 / Purpose:** 在 「player removed from party」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnPlayerRemovedFromParty(playerId, reason);
```

### OnPlayersAddedToParty
`public void OnPlayersAddedToParty(List<(PlayerId PlayerId, string PlayerName, bool IsPartyLeader)> addedPlayers, List<(PlayerId PlayerId, string PlayerName)> invitedPlayers)`

**用途 / Purpose:** 在 「players added to party」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnPlayersAddedToParty(playerId, "example", false, playerId, "example");
```

### OnGameClientStateChange
`public void OnGameClientStateChange(State state)`

**用途 / Purpose:** 在 「game client state change」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnGameClientStateChange(state);
```

### SetConnectionState
`public void SetConnectionState(bool isAuthenticated)`

**用途 / Purpose:** 为 「connection state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.SetConnectionState(false);
```

### OnActivateHome
`public void OnActivateHome()`

**用途 / Purpose:** 在 「activate home」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnActivateHome();
```

### OnActivateCustomServer
`public void OnActivateCustomServer()`

**用途 / Purpose:** 在 「activate custom server」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnActivateCustomServer();
```

### OnActivateMatchmaking
`public void OnActivateMatchmaking()`

**用途 / Purpose:** 在 「activate matchmaking」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnActivateMatchmaking();
```

### OnActivateProfile
`public void OnActivateProfile()`

**用途 / Purpose:** 在 「activate profile」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnActivateProfile();
```

### OnClanInvitationReceived
`public void OnClanInvitationReceived(string clanName, string clanTag, bool isCreation)`

**用途 / Purpose:** 在 「clan invitation received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnClanInvitationReceived("example", "example", false);
```

### OnClanInvitationAnswered
`public void OnClanInvitationAnswered(PlayerId playerId, ClanCreationAnswer answer)`

**用途 / Purpose:** 在 「clan invitation answered」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnClanInvitationAnswered(playerId, answer);
```

### OnClanCreationSuccessful
`public void OnClanCreationSuccessful()`

**用途 / Purpose:** 在 「clan creation successful」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnClanCreationSuccessful();
```

### OnClanCreationFailed
`public void OnClanCreationFailed()`

**用途 / Purpose:** 在 「clan creation failed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnClanCreationFailed();
```

### OnClanCreationStarted
`public void OnClanCreationStarted()`

**用途 / Purpose:** 在 「clan creation started」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnClanCreationStarted();
```

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**用途 / Purpose:** 在 「clan info changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnClanInfoChanged();
```

### OnPremadeGameEligibilityStatusReceived
`public void OnPremadeGameEligibilityStatusReceived(bool isEligible)`

**用途 / Purpose:** 在 「premade game eligibility status received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnPremadeGameEligibilityStatusReceived(false);
```

### OnPremadeGameCreated
`public void OnPremadeGameCreated()`

**用途 / Purpose:** 在 「premade game created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnPremadeGameCreated();
```

### OnPremadeGameListReceived
`public void OnPremadeGameListReceived()`

**用途 / Purpose:** 在 「premade game list received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnPremadeGameListReceived();
```

### OnPremadeGameCreationCancelled
`public void OnPremadeGameCreationCancelled()`

**用途 / Purpose:** 在 「premade game creation cancelled」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnPremadeGameCreationCancelled();
```

### OnJoinPremadeGameRequested
`public void OnJoinPremadeGameRequested(string clanName, string clanSigilCode, Guid partyId, PlayerId challengerPlayerIDs, PlayerId challengerPartyLeaderID, PremadeGameType premadeGameType)`

**用途 / Purpose:** 在 「join premade game requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnJoinPremadeGameRequested("example", "example", partyId, challengerPlayerIDs, challengerPartyLeaderID, premadeGameType);
```

### OnJoinPremadeGameRequestSuccessful
`public void OnJoinPremadeGameRequestSuccessful()`

**用途 / Purpose:** 在 「join premade game request successful」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnJoinPremadeGameRequestSuccessful();
```

### OnActivateArmory
`public void OnActivateArmory()`

**用途 / Purpose:** 在 「activate armory」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnActivateArmory();
```

### OnActivateOptions
`public void OnActivateOptions()`

**用途 / Purpose:** 在 「activate options」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnActivateOptions();
```

### OnDeactivateOptions
`public void OnDeactivateOptions()`

**用途 / Purpose:** 在 「deactivate options」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnDeactivateOptions();
```

### OnCustomGameServerListReceived
`public void OnCustomGameServerListReceived(AvailableCustomGames customGameServerList)`

**用途 / Purpose:** 在 「custom game server list received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnCustomGameServerListReceived(customGameServerList);
```

### OnMatchmakerGameOver
`public void OnMatchmakerGameOver(int oldExp, int newExp, List<string> badgesEarned, int lootGained, RankBarInfo oldRankBarInfo, RankBarInfo newRankBarInfo, BattleCancelReason battleCancelReason)`

**用途 / Purpose:** 在 「matchmaker game over」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnMatchmakerGameOver(0, 0, badgesEarned, 0, oldRankBarInfo, newRankBarInfo, battleCancelReason);
```

### OnBattleServerLost
`public void OnBattleServerLost()`

**用途 / Purpose:** 在 「battle server lost」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnBattleServerLost();
```

### OnRemovedFromMatchmakerGame
`public void OnRemovedFromMatchmakerGame(DisconnectType disconnectType)`

**用途 / Purpose:** 在 「removed from matchmaker game」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnRemovedFromMatchmakerGame(disconnectType);
```

### OnRemovedFromCustomGame
`public void OnRemovedFromCustomGame(DisconnectType disconnectType)`

**用途 / Purpose:** 在 「removed from custom game」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnRemovedFromCustomGame(disconnectType);
```

### OnPlayerAssignedPartyLeader
`public void OnPlayerAssignedPartyLeader(PlayerId partyLeaderId)`

**用途 / Purpose:** 在 「player assigned party leader」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnPlayerAssignedPartyLeader(partyLeaderId);
```

### OnPlayerSuggestedToParty
`public void OnPlayerSuggestedToParty(PlayerId playerId, string playerName, PlayerId suggestingPlayerId, string suggestingPlayerName)`

**用途 / Purpose:** 在 「player suggested to party」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnPlayerSuggestedToParty(playerId, "example", suggestingPlayerId, "example");
```

### OnJoinCustomGameFailureResponse
`public void OnJoinCustomGameFailureResponse(CustomGameJoinResponse response)`

**用途 / Purpose:** 在 「join custom game failure response」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnJoinCustomGameFailureResponse(response);
```

### OnServerStatusReceived
`public void OnServerStatusReceived(ServerStatus serverStatus)`

**用途 / Purpose:** 在 「server status received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnServerStatusReceived(serverStatus);
```

### OnFriendListReceived
`public void OnFriendListReceived(FriendInfo friends)`

**用途 / Purpose:** 在 「friend list received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnFriendListReceived(friends);
```

### OnRecentPlayerStatusesReceived
`public void OnRecentPlayerStatusesReceived(FriendInfo friends)`

**用途 / Purpose:** 在 「recent player statuses received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnRecentPlayerStatusesReceived(friends);
```

### OnBattleServerInformationReceived
`public void OnBattleServerInformationReceived(BattleServerInformationForClient battleServerInformation)`

**用途 / Purpose:** 在 「battle server information received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnBattleServerInformationReceived(battleServerInformation);
```

### OnRejoinBattleRequestAnswered
`public void OnRejoinBattleRequestAnswered(bool isSuccessful)`

**用途 / Purpose:** 在 「rejoin battle request answered」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnRejoinBattleRequestAnswered(false);
```

### OnNotificationsReceived
`public void OnNotificationsReceived(LobbyNotification notifications)`

**用途 / Purpose:** 在 「notifications received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnNotificationsReceived(notifications);
```

### OnInviteToPlatformSession
`public async Task<bool> OnInviteToPlatformSession(PlayerId playerId)`

**用途 / Purpose:** 在 「invite to platform session」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
var result = lobbyState.OnInviteToPlatformSession(playerId);
```

### OnPlatformRequestedMultiplayer
`public async void OnPlatformRequestedMultiplayer()`

**用途 / Purpose:** 在 「platform requested multiplayer」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnPlatformRequestedMultiplayer();
```

### OnSessionInvitationAccepted
`public async void OnSessionInvitationAccepted(SessionInvitationType targetGameType)`

**用途 / Purpose:** 在 「session invitation accepted」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.OnSessionInvitationAccepted(targetGameType);
```

### GetCustomActionsForServer
`public List<CustomServerAction> GetCustomActionsForServer(GameServerEntry gameServerEntry)`

**用途 / Purpose:** 读取并返回当前对象中 「custom actions for server」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
var result = lobbyState.GetCustomActionsForServer(gameServerEntry);
```

### RegisterForCustomServerAction
`public void RegisterForCustomServerAction(Func<GameServerEntry, List<CustomServerAction>> action)`

**用途 / Purpose:** 将「for custom server action」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.RegisterForCustomServerAction(func<GameServerEntry, action);
```

### UnregisterForCustomServerAction
`public void UnregisterForCustomServerAction(Func<GameServerEntry, List<CustomServerAction>> action)`

**用途 / Purpose:** 从当前系统中注销「for custom server action」。

```csharp
// 先通过子系统 API 拿到 LobbyState 实例
LobbyState lobbyState = ...;
lobbyState.UnregisterForCustomServerAction(func<GameServerEntry, action);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LobbyState lobbyState = ...;
lobbyState.InitializeLogic(lobbyStateHandler);
```

## 参见

- [本区域目录](../)