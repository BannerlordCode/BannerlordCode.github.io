---
title: "LobbyClient"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LobbyClient`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LobbyClient

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyClient : Client<LobbyClient>`
**Base:** `Client<LobbyClient>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs`

## 概述

`LobbyClient` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerData` | `public PlayerData PlayerData { get; }` |
| `SupportedFeatures` | `public SupportedFeatures SupportedFeatures { get; }` |
| `ClanInfo` | `public ClanInfo ClanInfo { get; }` |
| `ClanHomeInfo` | `public ClanHomeInfo ClanHomeInfo { get; }` |
| `AvailableScenes` | `public AvailableScenes AvailableScenes { get; }` |
| `IsRefreshingPlayerData` | `public bool IsRefreshingPlayerData { get; }` |
| `CurrentState` | `public State CurrentState { get; }` |
| `AliveCheckTimeInMiliSeconds` | `public override long AliveCheckTimeInMiliSeconds { get; }` |
| `CanPerformLobbyActions` | `public bool CanPerformLobbyActions { get; }` |
| `LastBattleServerAddressForClient` | `public string LastBattleServerAddressForClient { get; }` |
| `LastBattleServerPortForClient` | `public ushort LastBattleServerPortForClient { get; }` |
| `LastBattleIsOfficial` | `public bool LastBattleIsOfficial { get; }` |
| `Connected` | `public bool Connected { get; }` |
| `LoggedIn` | `public bool LoggedIn { get; }` |
| `IsInGame` | `public bool IsInGame { get; }` |
| `IsAbleToSearchForGame` | `public bool IsAbleToSearchForGame { get; }` |
| `HasUserGeneratedContentPrivilege` | `public bool HasUserGeneratedContentPrivilege { get; }` |
| `IsPartyLeader` | `public bool IsPartyLeader { get; }` |
| `IsClanLeader` | `public bool IsClanLeader { get; }` |
| `IsClanOfficer` | `public bool IsClanOfficer { get; }` |
| `IsEligibleToCreatePremadeGame` | `public bool IsEligibleToCreatePremadeGame { get; }` |
| `CustomBattleId` | `public CustomBattleId CustomBattleId { get; }` |
| `CustomGameType` | `public string CustomGameType { get; }` |
| `CustomGameScene` | `public string CustomGameScene { get; }` |
| `AvailableCustomGames` | `public AvailableCustomGames AvailableCustomGames { get; }` |
| `AvailablePremadeGames` | `public PremadeGameList AvailablePremadeGames { get; }` |
| `PlayersInParty` | `public List<PartyPlayerInLobbyClient> PlayersInParty { get; }` |
| `PlayersInClan` | `public List<ClanPlayer> PlayersInClan { get; }` |
| `PlayerInfosInClan` | `public List<ClanPlayerInfo> PlayerInfosInClan { get; }` |
| `FriendInfos` | `public FriendInfo FriendInfos { get; }` |
| `IsInParty` | `public bool IsInParty { get; }` |
| `CurrentMatchId` | `public string CurrentMatchId { get; }` |
| `IsPartyInvitationPopupActive` | `public bool IsPartyInvitationPopupActive { get; }` |
| `IsPartyJoinRequestPopupActive` | `public bool IsPartyJoinRequestPopupActive { get; }` |
| `CanInvitePlayers` | `public bool CanInvitePlayers { get; }` |
| `CanSuggestPlayers` | `public bool CanSuggestPlayers { get; }` |
| `ClanID` | `public Guid ClanID { get; }` |
| `FriendIDs` | `public List<PlayerId> FriendIDs { get; }` |

## 主要方法

### Logout
`public void Logout(TextObject logOutReason)`

**用途 / Purpose:** 处理 `logout` 相关逻辑。

### SetLoadedModules
`public void SetLoadedModules(string moduleIDs)`

**用途 / Purpose:** 设置 `loaded modules` 的值或状态。

### GetCustomGameServerList
`public async Task<AvailableCustomGames> GetCustomGameServerList()`

**用途 / Purpose:** 获取 `custom game server list` 的当前值。

### QuitFromCustomGame
`public void QuitFromCustomGame()`

**用途 / Purpose:** 处理 `quit from custom game` 相关逻辑。

### QuitFromMatchmakerGame
`public void QuitFromMatchmakerGame()`

**用途 / Purpose:** 处理 `quit from matchmaker game` 相关逻辑。

### RequestJoinCustomGame
`public async Task<bool> RequestJoinCustomGame(CustomBattleId serverId, string password, bool isJoinAsAdmin = false)`

**用途 / Purpose:** 处理 `request join custom game` 相关逻辑。

### RequestJoinPlayerParty
`public async Task<bool> RequestJoinPlayerParty(PlayerId targetPlayer, bool inviteRequest)`

**用途 / Purpose:** 处理 `request join player party` 相关逻辑。

### CancelFindGame
`public void CancelFindGame()`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel find game`。

### FindGame
`public void FindGame()`

**用途 / Purpose:** 处理 `find game` 相关逻辑。

### FindCustomGame
`public async Task<bool> FindCustomGame(string selectedCustomGameTypes, bool? hasCrossplayPrivilege, string region)`

**用途 / Purpose:** 处理 `find custom game` 相关逻辑。

### Connect
`public async Task<LobbyClientConnectResult> Connect(ILobbyClientSessionHandler lobbyClientSessionHandler, ILoginAccessProvider lobbyClientLoginAccessProvider, string overridenUserName, bool hasUserGeneratedContentPrivilege, PlatformInitParams initParams, Func<Task<bool>> preLoginTask)`

**用途 / Purpose:** 处理 `connect` 相关逻辑。

### KickPlayer
`public void KickPlayer(PlayerId id, bool banPlayer)`

**用途 / Purpose:** 处理 `kick player` 相关逻辑。

### ChangeRegion
`public void ChangeRegion(string region)`

**用途 / Purpose:** 处理 `change region` 相关逻辑。

### ChangeGameTypes
`public void ChangeGameTypes(string gameTypes)`

**用途 / Purpose:** 处理 `change game types` 相关逻辑。

### OnConnected
`public override void OnConnected()`

**用途 / Purpose:** 当 `connected` 事件触发时调用此方法。

### OnCantConnect
`public override void OnCantConnect()`

**用途 / Purpose:** 当 `cant connect` 事件触发时调用此方法。

### OnDisconnected
`public override void OnDisconnected()`

**用途 / Purpose:** 当 `disconnected` 事件触发时调用此方法。

### RemoveLobbyClientHandler
`public void RemoveLobbyClientHandler()`

**用途 / Purpose:** 从当前集合/状态中移除 `lobby client handler`。

### SendWhisper
`public void SendWhisper(string playerName, string message)`

**用途 / Purpose:** 处理 `send whisper` 相关逻辑。

### FleeBattle
`public void FleeBattle()`

**用途 / Purpose:** 处理 `flee battle` 相关逻辑。

### SendPartyMessage
`public void SendPartyMessage(string message)`

**用途 / Purpose:** 处理 `send party message` 相关逻辑。

### RejoinBattle
`public void RejoinBattle()`

**用途 / Purpose:** 处理 `rejoin battle` 相关逻辑。

### OnBattleResultsSeen
`public void OnBattleResultsSeen()`

**用途 / Purpose:** 当 `battle results seen` 事件触发时调用此方法。

### AcceptClanInvitation
`public void AcceptClanInvitation()`

**用途 / Purpose:** 处理 `accept clan invitation` 相关逻辑。

### DeclineClanInvitation
`public void DeclineClanInvitation()`

**用途 / Purpose:** 处理 `decline clan invitation` 相关逻辑。

### MarkNotificationAsRead
`public void MarkNotificationAsRead(int notificationID)`

**用途 / Purpose:** 处理 `mark notification as read` 相关逻辑。

### AcceptClanCreationRequest
`public void AcceptClanCreationRequest()`

**用途 / Purpose:** 处理 `accept clan creation request` 相关逻辑。

### DeclineClanCreationRequest
`public void DeclineClanCreationRequest()`

**用途 / Purpose:** 处理 `decline clan creation request` 相关逻辑。

### PromoteToClanLeader
`public void PromoteToClanLeader(PlayerId playerId, bool dontUseNameForUnknownPlayer)`

**用途 / Purpose:** 处理 `promote to clan leader` 相关逻辑。

### KickFromClan
`public void KickFromClan(PlayerId playerId)`

**用途 / Purpose:** 处理 `kick from clan` 相关逻辑。

### ClanNameExists
`public async Task<CheckClanParameterValidResult> ClanNameExists(string clanName)`

**用途 / Purpose:** 处理 `clan name exists` 相关逻辑。

### ClanTagExists
`public async Task<CheckClanParameterValidResult> ClanTagExists(string clanTag)`

**用途 / Purpose:** 处理 `clan tag exists` 相关逻辑。

### GetClanHomeInfo
`public async Task<ClanHomeInfo> GetClanHomeInfo()`

**用途 / Purpose:** 获取 `clan home info` 的当前值。

### AssignAsClanOfficer
`public void AssignAsClanOfficer(PlayerId playerId, bool dontUseNameForUnknownPlayer)`

**用途 / Purpose:** 处理 `assign as clan officer` 相关逻辑。

### RemoveClanOfficerRoleForPlayer
`public void RemoveClanOfficerRoleForPlayer(PlayerId playerId)`

**用途 / Purpose:** 从当前集合/状态中移除 `clan officer role for player`。

### GetClanLeaderboardInfo
`public async Task<ClanLeaderboardInfo> GetClanLeaderboardInfo()`

**用途 / Purpose:** 获取 `clan leaderboard info` 的当前值。

### GetPlayerClanInfo
`public async Task<ClanInfo> GetPlayerClanInfo(PlayerId playerId)`

**用途 / Purpose:** 获取 `player clan info` 的当前值。

### SendClanMessage
`public void SendClanMessage(string message)`

**用途 / Purpose:** 处理 `send clan message` 相关逻辑。

### GetPremadeGameList
`public async Task<PremadeGameList> GetPremadeGameList()`

**用途 / Purpose:** 获取 `premade game list` 的当前值。

### GetAvailableScenes
`public async Task<AvailableScenes> GetAvailableScenes()`

**用途 / Purpose:** 获取 `available scenes` 的当前值。

### GetLobbyNews
`public async Task<PublishedLobbyNewsArticle > GetLobbyNews()`

**用途 / Purpose:** 获取 `lobby news` 的当前值。

### SetClanInformationText
`public void SetClanInformationText(string informationText)`

**用途 / Purpose:** 设置 `clan information text` 的值或状态。

### AddClanAnnouncement
`public void AddClanAnnouncement(string announcement)`

**用途 / Purpose:** 向当前集合/状态中添加 `clan announcement`。

### EditClanAnnouncement
`public void EditClanAnnouncement(int announcementId, string text)`

**用途 / Purpose:** 处理 `edit clan announcement` 相关逻辑。

### RemoveClanAnnouncement
`public void RemoveClanAnnouncement(int announcementId)`

**用途 / Purpose:** 从当前集合/状态中移除 `clan announcement`。

### ChangeClanFaction
`public void ChangeClanFaction(string faction)`

**用途 / Purpose:** 处理 `change clan faction` 相关逻辑。

### ChangeClanSigil
`public void ChangeClanSigil(string sigil)`

**用途 / Purpose:** 处理 `change clan sigil` 相关逻辑。

### DestroyClan
`public void DestroyClan()`

**用途 / Purpose:** 处理 `destroy clan` 相关逻辑。

### InviteToClan
`public void InviteToClan(PlayerId invitedPlayerId, bool dontUseNameForUnknownPlayer)`

**用途 / Purpose:** 处理 `invite to clan` 相关逻辑。

### CreatePremadeGame
`public async void CreatePremadeGame(string name, string gameType, string mapName, string factionA, string factionB, string password, PremadeGameType premadeGameType)`

**用途 / Purpose:** 创建一个 `premade game` 实例或对象。

### CancelCreatingPremadeGame
`public void CancelCreatingPremadeGame()`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel creating premade game`。

### RequestToJoinPremadeGame
`public void RequestToJoinPremadeGame(Guid gameId, string password)`

**用途 / Purpose:** 处理 `request to join premade game` 相关逻辑。

### AcceptJoinPremadeGameRequest
`public void AcceptJoinPremadeGameRequest(Guid partyId)`

**用途 / Purpose:** 处理 `accept join premade game request` 相关逻辑。

### DeclineJoinPremadeGameRequest
`public void DeclineJoinPremadeGameRequest(Guid partyId)`

**用途 / Purpose:** 处理 `decline join premade game request` 相关逻辑。

### InviteToParty
`public void InviteToParty(PlayerId playerId, bool dontUseNameForUnknownPlayer)`

**用途 / Purpose:** 处理 `invite to party` 相关逻辑。

### DisbandParty
`public void DisbandParty()`

**用途 / Purpose:** 处理 `disband party` 相关逻辑。

### KickPlayerFromParty
`public void KickPlayerFromParty(PlayerId playerId)`

**用途 / Purpose:** 处理 `kick player from party` 相关逻辑。

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string name)`

**用途 / Purpose:** 当 `player name updated` 事件触发时调用此方法。

### ToggleUseClanSigil
`public void ToggleUseClanSigil(bool isUsed)`

**用途 / Purpose:** 处理 `toggle use clan sigil` 相关逻辑。

### PromotePlayerToPartyLeader
`public void PromotePlayerToPartyLeader(PlayerId playerId)`

**用途 / Purpose:** 处理 `promote player to party leader` 相关逻辑。

### ChangeSigil
`public void ChangeSigil(string sigilId)`

**用途 / Purpose:** 处理 `change sigil` 相关逻辑。

### InviteToPlatformSession
`public async Task<bool> InviteToPlatformSession(PlayerId playerId)`

**用途 / Purpose:** 处理 `invite to platform session` 相关逻辑。

### EndCustomGame
`public async void EndCustomGame()`

**用途 / Purpose:** 处理 `end custom game` 相关逻辑。

### RegisterCustomGame
`public async void RegisterCustomGame(string gameModule, string gameType, string serverName, int maxPlayerCount, string map, string uniqueMapId, string gamePassword, string adminPassword, int port)`

**用途 / Purpose:** 处理 `register custom game` 相关逻辑。

### UpdateCustomGameData
`public void UpdateCustomGameData(string newGameType, string newMap, int newCount)`

**用途 / Purpose:** 更新 `custom game data` 的状态或数据。

### ResponseCustomGameClientConnection
`public void ResponseCustomGameClientConnection(PlayerJoinGameResponseDataFromHost playerJoinData)`

**用途 / Purpose:** 处理 `response custom game client connection` 相关逻辑。

### AcceptPartyInvitation
`public void AcceptPartyInvitation()`

**用途 / Purpose:** 处理 `accept party invitation` 相关逻辑。

### DeclinePartyInvitation
`public void DeclinePartyInvitation()`

**用途 / Purpose:** 处理 `decline party invitation` 相关逻辑。

### AcceptPartyJoinRequest
`public void AcceptPartyJoinRequest(PlayerId playerId)`

**用途 / Purpose:** 处理 `accept party join request` 相关逻辑。

### DeclinePartyJoinRequest
`public void DeclinePartyJoinRequest(PlayerId playerId, PartyJoinDeclineReason reason)`

**用途 / Purpose:** 处理 `decline party join request` 相关逻辑。

### UpdateCharacter
`public void UpdateCharacter(BodyProperties bodyProperties, bool isFemale)`

**用途 / Purpose:** 更新 `character` 的状态或数据。

### UpdateShownBadgeId
`public async Task<bool> UpdateShownBadgeId(string shownBadgeId)`

**用途 / Purpose:** 更新 `shown badge id` 的状态或数据。

### GetAnotherPlayerState
`public async Task<AnotherPlayerData> GetAnotherPlayerState(PlayerId playerId)`

**用途 / Purpose:** 获取 `another player state` 的当前值。

### GetAnotherPlayerData
`public async Task<PlayerData> GetAnotherPlayerData(PlayerId playerID)`

**用途 / Purpose:** 获取 `another player data` 的当前值。

### GetPlayerCountInQueue
`public async Task<MatchmakingQueueStats> GetPlayerCountInQueue()`

**用途 / Purpose:** 获取 `player count in queue` 的当前值。

### GetMatchmakingWaitTimes
`public async Task<MatchmakingWaitTimeStats> GetMatchmakingWaitTimes()`

**用途 / Purpose:** 获取 `matchmaking wait times` 的当前值。

### GetPlayerBadges
`public async Task<Badge > GetPlayerBadges()`

**用途 / Purpose:** 获取 `player badges` 的当前值。

### GetPlayerStats
`public async Task<PlayerStatsBase > GetPlayerStats(PlayerId playerID)`

**用途 / Purpose:** 获取 `player stats` 的当前值。

### GetGameTypeRankInfo
`public async Task<GameTypeRankInfo > GetGameTypeRankInfo(PlayerId playerID)`

**用途 / Purpose:** 获取 `game type rank info` 的当前值。

### GetRankedLeaderboardCount
`public async Task<int> GetRankedLeaderboardCount(string gameType)`

**用途 / Purpose:** 获取 `ranked leaderboard count` 的当前值。

### GetRankedLeaderboard
`public async Task<PlayerLeaderboardData > GetRankedLeaderboard(string gameType, int startIndex, int count)`

**用途 / Purpose:** 获取 `ranked leaderboard` 的当前值。

### SendCreateClanMessage
`public void SendCreateClanMessage(string clanName, string clanTag, string clanFaction, string clanSigil)`

**用途 / Purpose:** 处理 `send create clan message` 相关逻辑。

### GetFriendList
`public void GetFriendList()`

**用途 / Purpose:** 获取 `friend list` 的当前值。

### AddFriend
`public void AddFriend(PlayerId friendId, bool dontUseNameForUnknownPlayer)`

**用途 / Purpose:** 向当前集合/状态中添加 `friend`。

### RemoveFriend
`public void RemoveFriend(PlayerId friendId)`

**用途 / Purpose:** 从当前集合/状态中移除 `friend`。

### RespondToFriendRequest
`public void RespondToFriendRequest(PlayerId playerId, bool dontUseNameForUnknownPlayer, bool isAccepted, bool isBlocked = false)`

**用途 / Purpose:** 处理 `respond to friend request` 相关逻辑。

### ReportPlayer
`public void ReportPlayer(string gameId, PlayerId player, string playerName, PlayerReportType type, string message)`

**用途 / Purpose:** 处理 `report player` 相关逻辑。

### ChangeUsername
`public void ChangeUsername(string username)`

**用途 / Purpose:** 处理 `change username` 相关逻辑。

### AddFriendByUsernameAndId
`public void AddFriendByUsernameAndId(string username, int userId, bool dontUseNameForUnknownPlayer)`

**用途 / Purpose:** 向当前集合/状态中添加 `friend by username and id`。

### DoesPlayerWithUsernameAndIdExist
`public async Task<bool> DoesPlayerWithUsernameAndIdExist(string username, int userId)`

**用途 / Purpose:** 处理 `does player with username and id exist` 相关逻辑。

### IsPlayerClanLeader
`public bool IsPlayerClanLeader(PlayerId playerID)`

**用途 / Purpose:** 处理 `is player clan leader` 相关逻辑。

### IsPlayerClanOfficer
`public bool IsPlayerClanOfficer(PlayerId playerID)`

**用途 / Purpose:** 处理 `is player clan officer` 相关逻辑。

### UpdateUsedCosmeticItems
`public async Task<bool> UpdateUsedCosmeticItems(Dictionary<string, List<(string cosmeticId, bool isEquipped)>> usedCosmetics)`

**用途 / Purpose:** 更新 `used cosmetic items` 的状态或数据。

### GetDedicatedCustomServerAuthToken
`public async Task<string> GetDedicatedCustomServerAuthToken()`

**用途 / Purpose:** 获取 `dedicated custom server auth token` 的当前值。

### GetOfficialServerProviderName
`public async Task<string> GetOfficialServerProviderName()`

**用途 / Purpose:** 获取 `official server provider name` 的当前值。

### GetPlayerBannerlordID
`public async Task<string> GetPlayerBannerlordID(PlayerId playerId)`

**用途 / Purpose:** 获取 `player bannerlord i d` 的当前值。

### IsKnownPlayer
`public bool IsKnownPlayer(PlayerId playerID)`

**用途 / Purpose:** 处理 `is known player` 相关逻辑。

### GetPingToServer
`public async Task<long> GetPingToServer(string IpAddress)`

**用途 / Purpose:** 获取 `ping to server` 的当前值。

### SendPSPlayerJoinedToPlayerSessionMessage
`public async Task<bool> SendPSPlayerJoinedToPlayerSessionMessage(ulong inviterPlayerId)`

**用途 / Purpose:** 处理 `send p s player joined to player session message` 相关逻辑。

### SendPlatformPlayerJoinedToPlayerSessionMessage
`public async Task<bool> SendPlatformPlayerJoinedToPlayerSessionMessage(PlayerId inviterPlayerId)`

**用途 / Purpose:** 处理 `send platform player joined to player session message` 相关逻辑。

## 使用示例

```csharp
var value = new LobbyClient();
value.Logout(logOutReason);
```

## 参见

- [完整类目录](../catalog)