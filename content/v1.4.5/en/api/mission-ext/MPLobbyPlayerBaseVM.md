---
title: "MPLobbyPlayerBaseVM"
description: "Auto-generated class reference for MPLobbyPlayerBaseVM."
---
# MPLobbyPlayerBaseVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPlayerBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyPlayerBaseVM.cs`

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

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.RefreshValues();
```

### RefreshSelectableGameTypes
`public void RefreshSelectableGameTypes(bool isRankedOnly, Action<string> onRefreshed, string initialGameTypeID = "")`

**Purpose:** Keeps the display or cache of selectable game types in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.RefreshSelectableGameTypes(false, onRefreshed, "example");
```

### UpdatePlayerState
`public void UpdatePlayerState(AnotherPlayerData playerData)`

**Purpose:** Recalculates and stores the latest representation of player state.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.UpdatePlayerState(playerData);
```

### UpdateWith
`public virtual void UpdateWith(PlayerData playerData)`

**Purpose:** Recalculates and stores the latest representation of with.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.UpdateWith(playerData);
```

### UpdateNameAndAvatar
`public void UpdateNameAndAvatar(bool forceUpdate = false)`

**Purpose:** Recalculates and stores the latest representation of name and avatar.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.UpdateNameAndAvatar(false);
```

### OnStatusChanged
`public void OnStatusChanged(OnlineStatus status, bool isInGameStatusActive)`

**Purpose:** Invoked when the status changed event is raised.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.OnStatusChanged(status, false);
```

### SetOnInvite
`public void SetOnInvite(Action<PlayerId> onInvite)`

**Purpose:** Assigns a new value to on invite and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.SetOnInvite(onInvite);
```

### UpdateStats
`public async void UpdateStats(Action onDone)`

**Purpose:** Recalculates and stores the latest representation of stats.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.UpdateStats(onDone);
```

### UpdateExperienceData
`public void UpdateExperienceData()`

**Purpose:** Recalculates and stores the latest representation of experience data.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.UpdateExperienceData();
```

### UpdateRating
`public async void UpdateRating(Action onDone)`

**Purpose:** Recalculates and stores the latest representation of rating.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.UpdateRating(onDone);
```

### UpdateDisplayedRankInfo
`public void UpdateDisplayedRankInfo(string gameType)`

**Purpose:** Recalculates and stores the latest representation of displayed rank info.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.UpdateDisplayedRankInfo("example");
```

### UpdateClanInfo
`public async void UpdateClanInfo()`

**Purpose:** Recalculates and stores the latest representation of clan info.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.UpdateClanInfo();
```

### FilterStatsForGameMode
`public void FilterStatsForGameMode(string gameModeCode)`

**Purpose:** Executes the FilterStatsForGameMode logic.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.FilterStatsForGameMode("example");
```

### RefreshCharacterVisual
`public unsafe void RefreshCharacterVisual()`

**Purpose:** Keeps the display or cache of character visual in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.RefreshCharacterVisual();
```

### ExecuteSelectPlayer
`public void ExecuteSelectPlayer()`

**Purpose:** Runs the operation or workflow associated with select player.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteSelectPlayer();
```

### ExecuteInviteToParty
`public void ExecuteInviteToParty()`

**Purpose:** Runs the operation or workflow associated with invite to party.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteInviteToParty();
```

### ExecuteInviteToClan
`public void ExecuteInviteToClan()`

**Purpose:** Runs the operation or workflow associated with invite to clan.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteInviteToClan();
```

### ExecuteKickFromParty
`public void ExecuteKickFromParty()`

**Purpose:** Runs the operation or workflow associated with kick from party.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteKickFromParty();
```

### ExecuteAcceptFriendRequest
`public void ExecuteAcceptFriendRequest()`

**Purpose:** Runs the operation or workflow associated with accept friend request.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteAcceptFriendRequest();
```

### ExecuteDeclineFriendRequest
`public void ExecuteDeclineFriendRequest()`

**Purpose:** Runs the operation or workflow associated with decline friend request.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteDeclineFriendRequest();
```

### ExecuteCancelPendingFriendRequest
`public void ExecuteCancelPendingFriendRequest()`

**Purpose:** Runs the operation or workflow associated with cancel pending friend request.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteCancelPendingFriendRequest();
```

### ExecuteRemoveFriend
`public void ExecuteRemoveFriend()`

**Purpose:** Runs the operation or workflow associated with remove friend.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteRemoveFriend();
```

### ExecuteCopyBannerlordID
`public void ExecuteCopyBannerlordID()`

**Purpose:** Runs the operation or workflow associated with copy bannerlord i d.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteCopyBannerlordID();
```

### ExecuteShowProfile
`public void ExecuteShowProfile()`

**Purpose:** Runs the operation or workflow associated with show profile.

```csharp
// Obtain an instance of MPLobbyPlayerBaseVM from the subsystem API first
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.ExecuteShowProfile();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyPlayerBaseVM mPLobbyPlayerBaseVM = ...;
mPLobbyPlayerBaseVM.RefreshValues();
```

## See Also

- [Area Index](../)