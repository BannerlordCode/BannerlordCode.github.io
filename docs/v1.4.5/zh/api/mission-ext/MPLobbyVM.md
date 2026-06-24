<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### CreateInputKeyVisuals
`public void CreateInputKeyVisuals(HotKey cancelInputKey, HotKey doneInputKey, HotKey previousInputKey, HotKey nextInputKey, HotKey firstInputKey, HotKey lastInputKey)`

**用途 / Purpose:** 创建一个 `input key visuals` 实例或对象。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnActivate
`public void OnActivate()`

**用途 / Purpose:** 当 `activate` 事件触发时调用此方法。

### OnDeactivate
`public void OnDeactivate()`

**用途 / Purpose:** 当 `deactivate` 事件触发时调用此方法。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### OnConfirm
`public void OnConfirm()`

**用途 / Purpose:** 当 `confirm` 事件触发时调用此方法。

### OnEscape
`public async void OnEscape()`

**用途 / Purpose:** 当 `escape` 事件触发时调用此方法。

### HasAnyContextMenuOpen
`public bool HasAnyContextMenuOpen()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `any context menu open`。

### ForceCloseContextMenus
`public void ForceCloseContextMenus()`

**用途 / Purpose:** 处理 `force close context menus` 相关逻辑。

### HasNoPopupOpen
`public bool HasNoPopupOpen()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `no popup open`。

### RequestExit
`public async Task RequestExit()`

**用途 / Purpose:** 处理 `request exit` 相关逻辑。

### ConnectionStateUpdated
`public void ConnectionStateUpdated(bool isAuthenticated)`

**用途 / Purpose:** 处理 `connection state updated` 相关逻辑。

### ShowOptionsChangedInquiry
`public void ShowOptionsChangedInquiry(Action onAccept = null, Action onDecline = null)`

**用途 / Purpose:** 处理 `show options changed inquiry` 相关逻辑。

### SetPage
`public void SetPage(LobbyPage lobbyPage, MPMatchmakingVM.MatchmakingSubPages matchmakingSubPage = MPMatchmakingVM.MatchmakingSubPages.Default)`

**用途 / Purpose:** 设置 `page` 的值或状态。

### RefreshRecentGames
`public void RefreshRecentGames()`

**用途 / Purpose:** 刷新 `recent games` 的显示或缓存。

### OnDisconnected
`public void OnDisconnected()`

**用途 / Purpose:** 当 `disconnected` 事件触发时调用此方法。

### OnServerStatusReceived
`public void OnServerStatusReceived(ServerStatus serverStatus)`

**用途 / Purpose:** 当 `server status received` 事件触发时调用此方法。

### OnRejoinBattleRequestAnswered
`public void OnRejoinBattleRequestAnswered(bool isSuccessful)`

**用途 / Purpose:** 当 `rejoin battle request answered` 事件触发时调用此方法。

### OnRequestedToSearchBattle
`public void OnRequestedToSearchBattle()`

**用途 / Purpose:** 当 `requested to search battle` 事件触发时调用此方法。

### OnUpdateFindingGame
`public void OnUpdateFindingGame(MatchmakingWaitTimeStats matchmakingWaitTimeStats, string gameTypeInfo)`

**用途 / Purpose:** 当 `update finding game` 事件触发时调用此方法。

### OnPremadeGameCreated
`public void OnPremadeGameCreated()`

**用途 / Purpose:** 当 `premade game created` 事件触发时调用此方法。

### OnRequestedToCancelSearchBattle
`public void OnRequestedToCancelSearchBattle()`

**用途 / Purpose:** 当 `requested to cancel search battle` 事件触发时调用此方法。

### OnPlayerRemovedFromParty
`public void OnPlayerRemovedFromParty(PlayerId playerId, PartyRemoveReason reason)`

**用途 / Purpose:** 当 `player removed from party` 事件触发时调用此方法。

### OnPlayerAddedToParty
`public void OnPlayerAddedToParty(PlayerId playerId)`

**用途 / Purpose:** 当 `player added to party` 事件触发时调用此方法。

### OnPlayerAssignedPartyLeader
`public void OnPlayerAssignedPartyLeader(PlayerId newPartyLeaderId)`

**用途 / Purpose:** 当 `player assigned party leader` 事件触发时调用此方法。

### OnPlayerSuggestedToParty
`public void OnPlayerSuggestedToParty(PlayerId playerId, string playerName, PlayerId suggestingPlayerId, string suggestingPlayerName)`

**用途 / Purpose:** 当 `player suggested to party` 事件触发时调用此方法。

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**用途 / Purpose:** 当 `player name updated` 事件触发时调用此方法。

### OnSearchBattleCanceled
`public void OnSearchBattleCanceled()`

**用途 / Purpose:** 当 `search battle canceled` 事件触发时调用此方法。

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**用途 / Purpose:** 刷新 `player data` 的显示或缓存。

### RefreshSupportedFeatures
`public void RefreshSupportedFeatures()`

**用途 / Purpose:** 刷新 `supported features` 的显示或缓存。

### OnNotificationsReceived
`public void OnNotificationsReceived(LobbyNotification notifications)`

**用途 / Purpose:** 当 `notifications received` 事件触发时调用此方法。

### OnSigilChanged
`public void OnSigilChanged(int iconID)`

**用途 / Purpose:** 当 `sigil changed` 事件触发时调用此方法。

### OnClanCreationFinished
`public void OnClanCreationFinished()`

**用途 / Purpose:** 当 `clan creation finished` 事件触发时调用此方法。

### OnEnableGenericAvatarsChanged
`public void OnEnableGenericAvatarsChanged()`

**用途 / Purpose:** 当 `enable generic avatars changed` 事件触发时调用此方法。

### OnEnableGenericNamesChanged
`public void OnEnableGenericNamesChanged()`

**用途 / Purpose:** 当 `enable generic names changed` 事件触发时调用此方法。

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**用途 / Purpose:** 当 `friend list updated` 事件触发时调用此方法。

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**用途 / Purpose:** 当 `clan info changed` 事件触发时调用此方法。

### GetLocalizedGameTypesString
`public static string GetLocalizedGameTypesString(string gameTypes)`

**用途 / Purpose:** 获取 `localized game types string` 的当前值。

### GetLocalizedRankName
`public static string GetLocalizedRankName(string rankID)`

**用途 / Purpose:** 获取 `localized rank name` 的当前值。

## 使用示例

```csharp
var value = new MPLobbyVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)