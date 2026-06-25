---
title: "MPLobbyPlayerBaseVM"
description: "MPLobbyPlayerBaseVM 的自动生成类参考。"
---
# MPLobbyPlayerBaseVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPlayerBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyPlayerBaseVM.cs`

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

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.RefreshValues();
```

### RefreshSelectableGameTypes
`public void RefreshSelectableGameTypes(bool isRankedOnly, Action<string> onRefreshed, string initialGameTypeID = "")`

**用途 / Purpose:** 使 selectable game types 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.RefreshSelectableGameTypes(false, onRefreshed, "example");
```

### UpdatePlayerState
`public void UpdatePlayerState(AnotherPlayerData playerData)`

**用途 / Purpose:** 重新计算并更新 player state 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.UpdatePlayerState(playerData);
```

### UpdateWith
`public virtual void UpdateWith(PlayerData playerData)`

**用途 / Purpose:** 重新计算并更新 with 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.UpdateWith(playerData);
```

### UpdateNameAndAvatar
`public void UpdateNameAndAvatar(bool forceUpdate = false)`

**用途 / Purpose:** 重新计算并更新 name and avatar 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.UpdateNameAndAvatar(false);
```

### OnStatusChanged
`public void OnStatusChanged(OnlineStatus status, bool isInGameStatusActive)`

**用途 / Purpose:** 在 status changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.OnStatusChanged(status, false);
```

### SetOnInvite
`public void SetOnInvite(Action<PlayerId> onInvite)`

**用途 / Purpose:** 为 on invite 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.SetOnInvite(onInvite);
```

### UpdateStats
`public async void UpdateStats(Action onDone)`

**用途 / Purpose:** 重新计算并更新 stats 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.UpdateStats(onDone);
```

### UpdateExperienceData
`public void UpdateExperienceData()`

**用途 / Purpose:** 重新计算并更新 experience data 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.UpdateExperienceData();
```

### UpdateRating
`public async void UpdateRating(Action onDone)`

**用途 / Purpose:** 重新计算并更新 rating 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.UpdateRating(onDone);
```

### UpdateDisplayedRankInfo
`public void UpdateDisplayedRankInfo(string gameType)`

**用途 / Purpose:** 重新计算并更新 displayed rank info 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.UpdateDisplayedRankInfo("example");
```

### UpdateClanInfo
`public async void UpdateClanInfo()`

**用途 / Purpose:** 重新计算并更新 clan info 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.UpdateClanInfo();
```

### FilterStatsForGameMode
`public void FilterStatsForGameMode(string gameModeCode)`

**用途 / Purpose:** 调用 FilterStatsForGameMode 对应的操作。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.FilterStatsForGameMode("example");
```

### RefreshCharacterVisual
`public unsafe void RefreshCharacterVisual()`

**用途 / Purpose:** 使 character visual 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.RefreshCharacterVisual();
```

### ExecuteSelectPlayer
`public void ExecuteSelectPlayer()`

**用途 / Purpose:** 执行 select player 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteSelectPlayer();
```

### ExecuteInviteToParty
`public void ExecuteInviteToParty()`

**用途 / Purpose:** 执行 invite to party 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteInviteToParty();
```

### ExecuteInviteToClan
`public void ExecuteInviteToClan()`

**用途 / Purpose:** 执行 invite to clan 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteInviteToClan();
```

### ExecuteKickFromParty
`public void ExecuteKickFromParty()`

**用途 / Purpose:** 执行 kick from party 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteKickFromParty();
```

### ExecuteAcceptFriendRequest
`public void ExecuteAcceptFriendRequest()`

**用途 / Purpose:** 执行 accept friend request 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteAcceptFriendRequest();
```

### ExecuteDeclineFriendRequest
`public void ExecuteDeclineFriendRequest()`

**用途 / Purpose:** 执行 decline friend request 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteDeclineFriendRequest();
```

### ExecuteCancelPendingFriendRequest
`public void ExecuteCancelPendingFriendRequest()`

**用途 / Purpose:** 执行 cancel pending friend request 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteCancelPendingFriendRequest();
```

### ExecuteRemoveFriend
`public void ExecuteRemoveFriend()`

**用途 / Purpose:** 执行 remove friend 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteRemoveFriend();
```

### ExecuteCopyBannerlordID
`public void ExecuteCopyBannerlordID()`

**用途 / Purpose:** 执行 copy bannerlord i d 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteCopyBannerlordID();
```

### ExecuteShowProfile
`public void ExecuteShowProfile()`

**用途 / Purpose:** 执行 show profile 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerBaseVM 实例
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteShowProfile();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.RefreshValues();
```

## 参见

- [本区域目录](../)