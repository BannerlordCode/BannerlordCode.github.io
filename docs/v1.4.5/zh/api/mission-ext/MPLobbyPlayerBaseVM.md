<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyPlayerBaseVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyPlayerBaseVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPlayerBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyPlayerBaseVM.cs`

## 概述

`MPLobbyPlayerBaseVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentOnlineStatus` | `public OnlineStatus CurrentOnlineStatus { get; }` |
| `ProvidedID` | `public PlayerId ProvidedID { get; set; }` |
| `PlayerData` | `public PlayerData PlayerData { get; }` |
| `State` | `public AnotherPlayerState State { get; }` |
| `TimeSinceLastStateUpdate` | `public float TimeSinceLastStateUpdate { get; }` |
| `PlayerStats` | `public PlayerStatsBase PlayerStats { get; }` |
| `RankInfo` | `public GameTypeRankInfo RankInfo { get; }` |
| `RankInfoGameTypeID` | `public string RankInfoGameTypeID { get; }` |
| `CanCopyID` | `public bool CanCopyID { get; set; }` |
| `ShowLevel` | `public bool ShowLevel { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasNotification` | `public bool HasNotification { get; set; }` |
| `IsFriendRequest` | `public bool IsFriendRequest { get; set; }` |
| `IsPendingRequest` | `public bool IsPendingRequest { get; set; }` |
| `CanRemove` | `public bool CanRemove { get; set; }` |
| `CanBeInvited` | `public bool CanBeInvited { get; set; }` |
| `CanInviteToParty` | `public bool CanInviteToParty { get; set; }` |
| `CanInviteToClan` | `public bool CanInviteToClan { get; set; }` |
| `IsSigilChangeInformationEnabled` | `public bool IsSigilChangeInformationEnabled { get; set; }` |
| `IsRankInfoLoading` | `public bool IsRankInfoLoading { get; set; }` |
| `IsRankInfoCasual` | `public bool IsRankInfoCasual { get; set; }` |
| `IsClanInfoSupported` | `public bool IsClanInfoSupported { get; set; }` |
| `IsBannerlordIDSupported` | `public bool IsBannerlordIDSupported { get; set; }` |
| `Level` | `public int Level { get; set; }` |
| `Rating` | `public int Rating { get; set; }` |
| `Loot` | `public int Loot { get; set; }` |
| `ExperienceRatio` | `public int ExperienceRatio { get; set; }` |
| `RatingRatio` | `public int RatingRatio { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `StateText` | `public string StateText { get; set; }` |
| `LevelText` | `public string LevelText { get; set; }` |
| `LevelTitleText` | `public string LevelTitleText { get; set; }` |
| `RatingText` | `public string RatingText { get; set; }` |
| `GameTypeText` | `public string GameTypeText { get; set; }` |
| `RatingID` | `public string RatingID { get; set; }` |
| `ClanName` | `public string ClanName { get; set; }` |
| `ClanTag` | `public string ClanTag { get; set; }` |
| `ChangeText` | `public string ChangeText { get; set; }` |
| `ClanInfoTitleText` | `public string ClanInfoTitleText { get; set; }` |
| `BadgeInfoTitleText` | `public string BadgeInfoTitleText { get; set; }` |
| `AvatarInfoTitleText` | `public string AvatarInfoTitleText { get; set; }` |
| `ExperienceText` | `public string ExperienceText { get; set; }` |
| `RankText` | `public string RankText { get; set; }` |
| `BannerlordID` | `public string BannerlordID { get; set; }` |
| `SelectedBadgeID` | `public string SelectedBadgeID { get; set; }` |
| `NameHint` | `public HintViewModel NameHint { get; set; }` |
| `InviteToPartyHint` | `public HintViewModel InviteToPartyHint { get; set; }` |
| `RemoveFriendHint` | `public HintViewModel RemoveFriendHint { get; set; }` |
| `AcceptFriendRequestHint` | `public HintViewModel AcceptFriendRequestHint { get; set; }` |
| `DeclineFriendRequestHint` | `public HintViewModel DeclineFriendRequestHint { get; set; }` |
| `CancelFriendRequestHint` | `public HintViewModel CancelFriendRequestHint { get; set; }` |
| `InviteToClanHint` | `public HintViewModel InviteToClanHint { get; set; }` |
| `ChangeBannerlordIDHint` | `public HintViewModel ChangeBannerlordIDHint { get; set; }` |
| `CopyBannerlordIDHint` | `public HintViewModel CopyBannerlordIDHint { get; set; }` |
| `AddFriendWithBannerlordIDHint` | `public HintViewModel AddFriendWithBannerlordIDHint { get; set; }` |
| `ExperienceHint` | `public HintViewModel ExperienceHint { get; set; }` |
| `RatingHint` | `public HintViewModel RatingHint { get; set; }` |
| `LootHint` | `public HintViewModel LootHint { get; set; }` |
| `SkirmishRatingHint` | `public HintViewModel SkirmishRatingHint { get; set; }` |
| `CaptainRatingHint` | `public HintViewModel CaptainRatingHint { get; set; }` |
| `ClanLeaderboardHint` | `public HintViewModel ClanLeaderboardHint { get; set; }` |
| `Avatar` | `public PlayerAvatarImageIdentifierVM Avatar { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `Sigil` | `public MPLobbySigilItemVM Sigil { get; set; }` |
| `ShownBadge` | `public MPLobbyBadgeItemVM ShownBadge { get; set; }` |
| `CharacterVisual` | `public CharacterViewModel CharacterVisual { get; set; }` |
| `DisplayedStats` | `public MBBindingList<MPLobbyPlayerStatItemVM> DisplayedStats { get; set; }` |
| `GameTypes` | `public MBBindingList<MPLobbyGameTypeVM> GameTypes { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshSelectableGameTypes
`public void RefreshSelectableGameTypes(bool isRankedOnly, Action<string> onRefreshed, string initialGameTypeID = "")`

**用途 / Purpose:** 刷新 `selectable game types` 的显示或缓存。

### UpdatePlayerState
`public void UpdatePlayerState(AnotherPlayerData playerData)`

**用途 / Purpose:** 更新 `player state` 的状态或数据。

### UpdateWith
`public virtual void UpdateWith(PlayerData playerData)`

**用途 / Purpose:** 更新 `with` 的状态或数据。

### UpdateNameAndAvatar
`public void UpdateNameAndAvatar(bool forceUpdate = false)`

**用途 / Purpose:** 更新 `name and avatar` 的状态或数据。

### OnStatusChanged
`public void OnStatusChanged(OnlineStatus status, bool isInGameStatusActive)`

**用途 / Purpose:** 当 `status changed` 事件触发时调用此方法。

### SetOnInvite
`public void SetOnInvite(Action<PlayerId> onInvite)`

**用途 / Purpose:** 设置 `on invite` 的值或状态。

### UpdateStats
`public async void UpdateStats(Action onDone)`

**用途 / Purpose:** 更新 `stats` 的状态或数据。

### UpdateExperienceData
`public void UpdateExperienceData()`

**用途 / Purpose:** 更新 `experience data` 的状态或数据。

### UpdateRating
`public async void UpdateRating(Action onDone)`

**用途 / Purpose:** 更新 `rating` 的状态或数据。

### UpdateDisplayedRankInfo
`public void UpdateDisplayedRankInfo(string gameType)`

**用途 / Purpose:** 更新 `displayed rank info` 的状态或数据。

### UpdateClanInfo
`public async void UpdateClanInfo()`

**用途 / Purpose:** 更新 `clan info` 的状态或数据。

### FilterStatsForGameMode
`public void FilterStatsForGameMode(string gameModeCode)`

**用途 / Purpose:** 处理 `filter stats for game mode` 相关逻辑。

### RefreshCharacterVisual
`public unsafe void RefreshCharacterVisual()`

**用途 / Purpose:** 刷新 `character visual` 的显示或缓存。

### ExecuteSelectPlayer
`public void ExecuteSelectPlayer()`

**用途 / Purpose:** 执行 `select player` 操作或流程。

### ExecuteInviteToParty
`public void ExecuteInviteToParty()`

**用途 / Purpose:** 执行 `invite to party` 操作或流程。

### ExecuteInviteToClan
`public void ExecuteInviteToClan()`

**用途 / Purpose:** 执行 `invite to clan` 操作或流程。

### ExecuteKickFromParty
`public void ExecuteKickFromParty()`

**用途 / Purpose:** 执行 `kick from party` 操作或流程。

### ExecuteAcceptFriendRequest
`public void ExecuteAcceptFriendRequest()`

**用途 / Purpose:** 执行 `accept friend request` 操作或流程。

### ExecuteDeclineFriendRequest
`public void ExecuteDeclineFriendRequest()`

**用途 / Purpose:** 执行 `decline friend request` 操作或流程。

### ExecuteCancelPendingFriendRequest
`public void ExecuteCancelPendingFriendRequest()`

**用途 / Purpose:** 执行 `cancel pending friend request` 操作或流程。

### ExecuteRemoveFriend
`public void ExecuteRemoveFriend()`

**用途 / Purpose:** 执行 `remove friend` 操作或流程。

### ExecuteCopyBannerlordID
`public void ExecuteCopyBannerlordID()`

**用途 / Purpose:** 执行 `copy bannerlord i d` 操作或流程。

### ExecuteShowProfile
`public void ExecuteShowProfile()`

**用途 / Purpose:** 执行 `show profile` 操作或流程。

## 使用示例

```csharp
var value = new MPLobbyPlayerBaseVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)