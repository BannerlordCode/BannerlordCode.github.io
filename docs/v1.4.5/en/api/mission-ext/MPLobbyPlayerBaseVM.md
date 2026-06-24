<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyPlayerBaseVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyPlayerBaseVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPlayerBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyPlayerBaseVM.cs`

## Overview

`MPLobbyPlayerBaseVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshSelectableGameTypes
`public void RefreshSelectableGameTypes(bool isRankedOnly, Action<string> onRefreshed, string initialGameTypeID = "")`

**Purpose:** Refreshes the display or cache of `selectable game types`.

### UpdatePlayerState
`public void UpdatePlayerState(AnotherPlayerData playerData)`

**Purpose:** Updates the state or data of `player state`.

### UpdateWith
`public virtual void UpdateWith(PlayerData playerData)`

**Purpose:** Updates the state or data of `with`.

### UpdateNameAndAvatar
`public void UpdateNameAndAvatar(bool forceUpdate = false)`

**Purpose:** Updates the state or data of `name and avatar`.

### OnStatusChanged
`public void OnStatusChanged(OnlineStatus status, bool isInGameStatusActive)`

**Purpose:** Called when the `status changed` event is raised.

### SetOnInvite
`public void SetOnInvite(Action<PlayerId> onInvite)`

**Purpose:** Sets the value or state of `on invite`.

### UpdateStats
`public async void UpdateStats(Action onDone)`

**Purpose:** Updates the state or data of `stats`.

### UpdateExperienceData
`public void UpdateExperienceData()`

**Purpose:** Updates the state or data of `experience data`.

### UpdateRating
`public async void UpdateRating(Action onDone)`

**Purpose:** Updates the state or data of `rating`.

### UpdateDisplayedRankInfo
`public void UpdateDisplayedRankInfo(string gameType)`

**Purpose:** Updates the state or data of `displayed rank info`.

### UpdateClanInfo
`public async void UpdateClanInfo()`

**Purpose:** Updates the state or data of `clan info`.

### FilterStatsForGameMode
`public void FilterStatsForGameMode(string gameModeCode)`

**Purpose:** Handles logic related to `filter stats for game mode`.

### RefreshCharacterVisual
`public unsafe void RefreshCharacterVisual()`

**Purpose:** Refreshes the display or cache of `character visual`.

### ExecuteSelectPlayer
`public void ExecuteSelectPlayer()`

**Purpose:** Executes the `select player` operation or workflow.

### ExecuteInviteToParty
`public void ExecuteInviteToParty()`

**Purpose:** Executes the `invite to party` operation or workflow.

### ExecuteInviteToClan
`public void ExecuteInviteToClan()`

**Purpose:** Executes the `invite to clan` operation or workflow.

### ExecuteKickFromParty
`public void ExecuteKickFromParty()`

**Purpose:** Executes the `kick from party` operation or workflow.

### ExecuteAcceptFriendRequest
`public void ExecuteAcceptFriendRequest()`

**Purpose:** Executes the `accept friend request` operation or workflow.

### ExecuteDeclineFriendRequest
`public void ExecuteDeclineFriendRequest()`

**Purpose:** Executes the `decline friend request` operation or workflow.

### ExecuteCancelPendingFriendRequest
`public void ExecuteCancelPendingFriendRequest()`

**Purpose:** Executes the `cancel pending friend request` operation or workflow.

### ExecuteRemoveFriend
`public void ExecuteRemoveFriend()`

**Purpose:** Executes the `remove friend` operation or workflow.

### ExecuteCopyBannerlordID
`public void ExecuteCopyBannerlordID()`

**Purpose:** Executes the `copy bannerlord i d` operation or workflow.

### ExecuteShowProfile
`public void ExecuteShowProfile()`

**Purpose:** Executes the `show profile` operation or workflow.

## Usage Example

```csharp
var value = new MPLobbyPlayerBaseVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)