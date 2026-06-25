---
title: "MPLobbyVM"
description: "MPLobbyVM 的自动生成类参考。"
---
# MPLobbyVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyVM.cs`

## 概述

`MPLobbyVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentPage` | `public LobbyPage CurrentPage { get; }` |
| `DisallowedPages` | `public List<LobbyPage> DisallowedPages { get; }` |
| `IsLoggedIn` | `public bool IsLoggedIn { get; set; }` |
| `BrightnessPopup` | `public BrightnessOptionVM BrightnessPopup { get; set; }` |
| `ExposurePopup` | `public ExposureOptionVM ExposurePopup { get; set; }` |
| `IsArmoryActive` | `public bool IsArmoryActive { get; set; }` |
| `IsSearchGameRequested` | `public bool IsSearchGameRequested { get; set; }` |
| `IsInParty` | `public bool IsInParty { get; set; }` |
| `IsSearchingGame` | `public bool IsSearchingGame { get; set; }` |
| `IsMatchmakingEnabled` | `public bool IsMatchmakingEnabled { get; set; }` |
| `IsCustomGameFindEnabled` | `public bool IsCustomGameFindEnabled { get; set; }` |
| `IsPartyLeader` | `public bool IsPartyLeader { get; set; }` |
| `BlockerState` | `public MPLobbyBlockerStateVM BlockerState { get; set; }` |
| `Menu` | `public MPLobbyMenuVM Menu { get; set; }` |
| `Login` | `public MPAuthenticationVM Login { get; set; }` |
| `Rejoin` | `public MPLobbyRejoinVM Rejoin { get; set; }` |
| `Friends` | `public MPLobbyFriendsVM Friends { get; set; }` |
| `Home` | `public MPLobbyHomeVM Home { get; set; }` |
| `Matchmaking` | `public MPMatchmakingVM Matchmaking { get; set; }` |
| `Armory` | `public MPArmoryVM Armory { get; set; }` |
| `GameSearch` | `public MPLobbyGameSearchVM GameSearch { get; set; }` |
| `PlayerProfile` | `public MPLobbyPlayerProfileVM PlayerProfile { get; set; }` |
| `AfterBattlePopup` | `public MPAfterBattlePopupVM AfterBattlePopup { get; set; }` |
| `PartyInvitationPopup` | `public MPLobbyPartyInvitationPopupVM PartyInvitationPopup { get; set; }` |
| `PartyJoinRequestPopup` | `public MPLobbyPartyJoinRequestPopupVM PartyJoinRequestPopup { get; set; }` |
| `InformationPopup` | `public MPLobbyInformationPopup InformationPopup { get; set; }` |
| `QueryPopup` | `public MPLobbyQueryPopupVM QueryPopup { get; set; }` |
| `PartyPlayerSuggestionPopup` | `public MPLobbyPartyPlayerSuggestionPopupVM PartyPlayerSuggestionPopup { get; set; }` |
| `Options` | `public MPOptionsVM Options { get; set; }` |
| `Profile` | `public MPLobbyProfileVM Profile { get; set; }` |
| `Clan` | `public MPLobbyClanVM Clan { get; set; }` |
| `ClanCreationPopup` | `public MPLobbyClanCreationPopupVM ClanCreationPopup { get; set; }` |
| `ClanCreationInformationPopup` | `public MPLobbyClanCreationInformationVM ClanCreationInformationPopup { get; set; }` |
| `ClanInvitationPopup` | `public MPLobbyClanInvitationPopupVM ClanInvitationPopup { get; set; }` |
| `ClanMatchmakingRequestPopup` | `public MPLobbyClanMatchmakingRequestPopupVM ClanMatchmakingRequestPopup { get; set; }` |
| `ClanInviteFriendsPopup` | `public MPLobbyClanInviteFriendsPopupVM ClanInviteFriendsPopup { get; set; }` |
| `ClanLeaderboardPopup` | `public MPLobbyClanLeaderboardVM ClanLeaderboardPopup { get; set; }` |
| `CosmeticObtainPopup` | `public MPCosmeticObtainPopupVM CosmeticObtainPopup { get; set; }` |
| `BannerlordIDAddFriendPopup` | `public MPLobbyBannerlordIDAddFriendPopupVM BannerlordIDAddFriendPopup { get; set; }` |
| `BannerlordIDChangePopup` | `public MPLobbyBannerlordIDChangePopup BannerlordIDChangePopup { get; set; }` |
| `BadgeProgressionInformation` | `public MPLobbyBadgeProgressInformationVM BadgeProgressionInformation { get; set; }` |
| `BadgeSelectionPopup` | `public MPLobbyBadgeSelectionPopupVM BadgeSelectionPopup { get; set; }` |
| `ChangeSigilPopup` | `public MPLobbyHomeChangeSigilPopupVM ChangeSigilPopup { get; set; }` |
| `RecentGames` | `public MPLobbyRecentGamesVM RecentGames { get; set; }` |
| `RankProgressInformation` | `public MPLobbyRankProgressInformationVM RankProgressInformation { get; set; }` |
| `RankLeaderboard` | `public MPLobbyRankLeaderboardVM RankLeaderboard { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.RefreshValues();
```

### CreateInputKeyVisuals
`public void CreateInputKeyVisuals(HotKey cancelInputKey, HotKey doneInputKey, HotKey previousInputKey, HotKey nextInputKey, HotKey firstInputKey, HotKey lastInputKey)`

**用途 / Purpose:** 构建一个新的 「input key visuals」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.CreateInputKeyVisuals(cancelInputKey, doneInputKey, previousInputKey, nextInputKey, firstInputKey, lastInputKey);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnFinalize();
```

### OnActivate
`public void OnActivate()`

**用途 / Purpose:** 在 「activate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnActivate();
```

### OnDeactivate
`public void OnDeactivate()`

**用途 / Purpose:** 在 「deactivate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnDeactivate();
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnTick(0);
```

### OnConfirm
`public void OnConfirm()`

**用途 / Purpose:** 在 「confirm」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnConfirm();
```

### OnEscape
`public async void OnEscape()`

**用途 / Purpose:** 在 「escape」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnEscape();
```

### HasAnyContextMenuOpen
`public bool HasAnyContextMenuOpen()`

**用途 / Purpose:** 判断当前对象是否已经持有 「any context menu open」。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
var result = mPLobbyVM.HasAnyContextMenuOpen();
```

### ForceCloseContextMenus
`public void ForceCloseContextMenus()`

**用途 / Purpose:** 处理与 「force close context menus」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.ForceCloseContextMenus();
```

### HasNoPopupOpen
`public bool HasNoPopupOpen()`

**用途 / Purpose:** 判断当前对象是否已经持有 「no popup open」。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
var result = mPLobbyVM.HasNoPopupOpen();
```

### RequestExit
`public async Task RequestExit()`

**用途 / Purpose:** 处理与 「request exit」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
var result = mPLobbyVM.RequestExit();
```

### ConnectionStateUpdated
`public void ConnectionStateUpdated(bool isAuthenticated)`

**用途 / Purpose:** 响应 「connection state updated」 事件并执行相关处理。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.ConnectionStateUpdated(false);
```

### ShowOptionsChangedInquiry
`public void ShowOptionsChangedInquiry(Action onAccept = null, Action onDecline = null)`

**用途 / Purpose:** 显示「options changed inquiry」对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.ShowOptionsChangedInquiry(null, null);
```

### SetPage
`public void SetPage(LobbyPage lobbyPage, MPMatchmakingVM.MatchmakingSubPages matchmakingSubPage = MPMatchmakingVM.MatchmakingSubPages.Default)`

**用途 / Purpose:** 为 「page」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.SetPage(lobbyPage, mPMatchmakingVM.MatchmakingSubPages.Default);
```

### RefreshRecentGames
`public void RefreshRecentGames()`

**用途 / Purpose:** 使 「recent games」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.RefreshRecentGames();
```

### OnDisconnected
`public void OnDisconnected()`

**用途 / Purpose:** 在 「disconnected」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnDisconnected();
```

### OnServerStatusReceived
`public void OnServerStatusReceived(ServerStatus serverStatus)`

**用途 / Purpose:** 在 「server status received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnServerStatusReceived(serverStatus);
```

### OnRejoinBattleRequestAnswered
`public void OnRejoinBattleRequestAnswered(bool isSuccessful)`

**用途 / Purpose:** 在 「rejoin battle request answered」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnRejoinBattleRequestAnswered(false);
```

### OnRequestedToSearchBattle
`public void OnRequestedToSearchBattle()`

**用途 / Purpose:** 在 「requested to search battle」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnRequestedToSearchBattle();
```

### OnUpdateFindingGame
`public void OnUpdateFindingGame(MatchmakingWaitTimeStats matchmakingWaitTimeStats, string gameTypeInfo)`

**用途 / Purpose:** 在 「update finding game」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnUpdateFindingGame(matchmakingWaitTimeStats, "example");
```

### OnPremadeGameCreated
`public void OnPremadeGameCreated()`

**用途 / Purpose:** 在 「premade game created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnPremadeGameCreated();
```

### OnRequestedToCancelSearchBattle
`public void OnRequestedToCancelSearchBattle()`

**用途 / Purpose:** 在 「requested to cancel search battle」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnRequestedToCancelSearchBattle();
```

### OnPlayerRemovedFromParty
`public void OnPlayerRemovedFromParty(PlayerId playerId, PartyRemoveReason reason)`

**用途 / Purpose:** 在 「player removed from party」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnPlayerRemovedFromParty(playerId, reason);
```

### OnPlayerAddedToParty
`public void OnPlayerAddedToParty(PlayerId playerId)`

**用途 / Purpose:** 在 「player added to party」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnPlayerAddedToParty(playerId);
```

### OnPlayerAssignedPartyLeader
`public void OnPlayerAssignedPartyLeader(PlayerId newPartyLeaderId)`

**用途 / Purpose:** 在 「player assigned party leader」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnPlayerAssignedPartyLeader(newPartyLeaderId);
```

### OnPlayerSuggestedToParty
`public void OnPlayerSuggestedToParty(PlayerId playerId, string playerName, PlayerId suggestingPlayerId, string suggestingPlayerName)`

**用途 / Purpose:** 在 「player suggested to party」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnPlayerSuggestedToParty(playerId, "example", suggestingPlayerId, "example");
```

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**用途 / Purpose:** 在 「player name updated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnPlayerNameUpdated("example");
```

### OnSearchBattleCanceled
`public void OnSearchBattleCanceled()`

**用途 / Purpose:** 在 「search battle canceled」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnSearchBattleCanceled();
```

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**用途 / Purpose:** 使 「player data」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.RefreshPlayerData(playerData);
```

### RefreshSupportedFeatures
`public void RefreshSupportedFeatures()`

**用途 / Purpose:** 使 「supported features」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.RefreshSupportedFeatures();
```

### OnNotificationsReceived
`public void OnNotificationsReceived(LobbyNotification notifications)`

**用途 / Purpose:** 在 「notifications received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnNotificationsReceived(notifications);
```

### OnSigilChanged
`public void OnSigilChanged(int iconID)`

**用途 / Purpose:** 在 「sigil changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnSigilChanged(0);
```

### OnClanCreationFinished
`public void OnClanCreationFinished()`

**用途 / Purpose:** 在 「clan creation finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnClanCreationFinished();
```

### OnEnableGenericAvatarsChanged
`public void OnEnableGenericAvatarsChanged()`

**用途 / Purpose:** 在 「enable generic avatars changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnEnableGenericAvatarsChanged();
```

### OnEnableGenericNamesChanged
`public void OnEnableGenericNamesChanged()`

**用途 / Purpose:** 在 「enable generic names changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnEnableGenericNamesChanged();
```

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**用途 / Purpose:** 在 「friend list updated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnFriendListUpdated(false);
```

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**用途 / Purpose:** 在 「clan info changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyVM 实例
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.OnClanInfoChanged();
```

### GetLocalizedGameTypesString
`public static string GetLocalizedGameTypesString(string gameTypes)`

**用途 / Purpose:** 读取并返回当前对象中 「localized game types string」 的结果。

```csharp
// 静态调用，不需要实例
MPLobbyVM.GetLocalizedGameTypesString("example");
```

### GetLocalizedRankName
`public static string GetLocalizedRankName(string rankID)`

**用途 / Purpose:** 读取并返回当前对象中 「localized rank name」 的结果。

```csharp
// 静态调用，不需要实例
MPLobbyVM.GetLocalizedRankName("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyVM mPLobbyVM = ...;
mPLobbyVM.RefreshValues();
```

## 参见

- [本区域目录](../)