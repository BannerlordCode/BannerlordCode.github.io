---
title: "LobbyClient"
description: "LobbyClient 的自动生成类参考。"
---
# LobbyClient

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade.Diamond
**Type:** `public class LobbyClient : Client `
**Base:** Client
**Source:** TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs

## 概述

`LobbyClient` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Logout
`public void Logout(TextObject logOutReason) `

### SetLoadedModules
`public void SetLoadedModules(string[] moduleIDs) `

### GetCustomGameServerList
`public async Task<AvailableCustomGames> GetCustomGameServerList() `

### QuitFromCustomGame
`public void QuitFromCustomGame() `

### QuitFromMatchmakerGame
`public void QuitFromMatchmakerGame() `

### RequestJoinCustomGame
`public async Task<bool> RequestJoinCustomGame(CustomBattleId serverId,CustomGameJoinType joinType,string password) `

### RequestJoinPlayerParty
`public async Task<bool> RequestJoinPlayerParty(PlayerId targetPlayer,bool inviteRequest) `

### CancelFindGame
`public void CancelFindGame() `

### FindGame
`public void FindGame() `

### FindCustomGame
`public async Task<bool> FindCustomGame(string[] selectedCustomGameTypes,bool? hasCrossplayPrivilege,string region) `

### Connect
`public async Task<LobbyClientConnectResult> Connect(ILobbyClientSessionHandler lobbyClientSessionHandler,ILoginAccessProvider lobbyClientLoginAccessProvider,string overridenUserName,bool hasUserGeneratedContentPrivilege,PlatformInitParams initParams,Func<Task<bool>> preLoginTask) `

### KickPlayer
`public void KickPlayer(PlayerId id,bool banPlayer) `

### ChangeRegion
`public async Task<bool> ChangeRegion(string region) `

### ChangeGameTypes
`public async Task<bool> ChangeGameTypes(string[] gameTypes) `

### OnConnected
`public override void OnConnected() `

### OnCantConnect
`public override void OnCantConnect() `

### OnDisconnected
`public override void OnDisconnected() `

### RemoveLobbyClientHandler
`public void RemoveLobbyClientHandler() `

### SendWhisper
`public void SendWhisper(string playerName,string message) `

### FleeBattle
`public void FleeBattle() `

### SendPartyMessage
`public void SendPartyMessage(string message) `

### OnTick
`protected override void OnTick() `

### RejoinBattle
`public void RejoinBattle() `

### OnBattleResultsSeen
`public void OnBattleResultsSeen() `

### AcceptClanInvitation
`public async Task<bool> AcceptClanInvitation() `

### DeclineClanInvitation
`public void DeclineClanInvitation() `

### MarkNotificationAsRead
`public void MarkNotificationAsRead(int notificationID) `

### AcceptClanCreationRequest
`public void AcceptClanCreationRequest() `

### DeclineClanCreationRequest
`public void DeclineClanCreationRequest() `

### PromoteToClanLeader
`public async Task<bool> PromoteToClanLeader(PlayerId playerId,bool dontUseNameForUnknownPlayer) `

### KickFromClan
`public void KickFromClan(PlayerId playerId) `

### ClanNameExists
`public async Task<CheckClanParameterValidResult> ClanNameExists(string clanName) `

### ClanTagExists
`public async Task<CheckClanParameterValidResult> ClanTagExists(string clanTag) `

### GetClanHomeInfo
`public async Task<ClanHomeInfo> GetClanHomeInfo() `

### AssignAsClanOfficer
`public void AssignAsClanOfficer(PlayerId playerId,bool dontUseNameForUnknownPlayer) `

### RemoveClanOfficerRoleForPlayer
`public void RemoveClanOfficerRoleForPlayer(PlayerId playerId) `

### GetClanLeaderboardInfo
`public async Task<ClanLeaderboardInfo> GetClanLeaderboardInfo() `

### GetPlayerClanInfo
`public async Task<ClanInfo> GetPlayerClanInfo(PlayerId playerId) `

### SendClanMessage
`public void SendClanMessage(string message) `

### GetPremadeGameList
`public async Task<PremadeGameList> GetPremadeGameList() `

### GetAvailableScenes
`public async Task<AvailableScenes> GetAvailableScenes() `

### GetLobbyNews
`public async Task<PublishedLobbyNewsArticle[]> GetLobbyNews() `

### SetClanInformationText
`public async Task<bool> SetClanInformationText(string informationText) `

### AddClanAnnouncement
`public async Task<bool> AddClanAnnouncement(string announcement) `

### EditClanAnnouncement
`public void EditClanAnnouncement(int announcementId,string text) `

### RemoveClanAnnouncement
`public void RemoveClanAnnouncement(int announcementId) `

### ChangeClanFaction
`public async Task<bool> ChangeClanFaction(string faction) `

### ChangeClanSigil
`public async Task<bool> ChangeClanSigil(string sigil) `

### DestroyClan
`public void DestroyClan() `

### InviteToClan
`public void InviteToClan(PlayerId invitedPlayerId,bool dontUseNameForUnknownPlayer) `

### CreatePremadeGame
`public async void CreatePremadeGame(string name,string gameType,string mapName,string factionA,string factionB,string password,PremadeGameType premadeGameType,string spectatorPassword,int maxSpectatorCount) `

### CancelCreatingPremadeGame
`public void CancelCreatingPremadeGame() `

### RequestToJoinPremadeGame
`public void RequestToJoinPremadeGame(Guid gameId,string password) `

### AcceptJoinPremadeGameRequest
`public void AcceptJoinPremadeGameRequest(Guid partyId) `

### DeclineJoinPremadeGameRequest
`public void DeclineJoinPremadeGameRequest(Guid partyId) `

### InviteToParty
`public void InviteToParty(PlayerId playerId,bool dontUseNameForUnknownPlayer) `

### DisbandParty
`public void DisbandParty() `

### KickPlayerFromParty
`public void KickPlayerFromParty(PlayerId playerId) `

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string name) `

### ToggleUseClanSigil
`public void ToggleUseClanSigil(bool isUsed) `

### PromotePlayerToPartyLeader
`public void PromotePlayerToPartyLeader(PlayerId playerId) `

### ChangeSigil
`public async Task<bool> ChangeSigil(string sigilId) `

### InviteToPlatformSession
`public async Task<bool> InviteToPlatformSession(PlayerId playerId) `

### EndCustomGame
`public async void EndCustomGame() `

### RegisterCustomGame
`public async void RegisterCustomGame(string gameModule,string gameType,string serverName,int maxPlayerCount,string map,string uniqueMapId,string gamePassword,string adminPassword,string spectatorPassword,int port,int maxSpectatorCount,bool enableSpectators = false) `

### UpdateCustomGameData
`public void UpdateCustomGameData(string newGameType,string newMap,int newCount) `

### ResponseCustomGameClientConnection
`public void ResponseCustomGameClientConnection(PlayerJoinGameResponseDataFromHost[] playerJoinData) `

### AcceptPartyInvitation
`public void AcceptPartyInvitation() `

### DeclinePartyInvitation
`public void DeclinePartyInvitation() `

### AcceptPartyJoinRequest
`public void AcceptPartyJoinRequest(PlayerId playerId) `

### DeclinePartyJoinRequest
`public void DeclinePartyJoinRequest(PlayerId playerId,PartyJoinDeclineReason reason) `

### UpdateCharacter
`public async Task<bool> UpdateCharacter(BodyProperties bodyProperties,bool isFemale) `

### UpdateShownBadgeId
`public async Task<bool> UpdateShownBadgeId(string shownBadgeId) `

### GetAnotherPlayerState
`public async Task<AnotherPlayerData> GetAnotherPlayerState(PlayerId playerId) `

### GetAnotherPlayerData
`public async Task<PlayerData> GetAnotherPlayerData(PlayerId playerID) `

### GetPlayerCountInQueue
`public async Task<MatchmakingQueueStats> GetPlayerCountInQueue() `

### GetOtherPlayersState
`public async Task<List<ValueTuple<PlayerId,AnotherPlayerData>>> GetOtherPlayersState(List<PlayerId> players) `

### GetMatchmakingWaitTimes
`public async Task<MatchmakingWaitTimeStats> GetMatchmakingWaitTimes() `

### GetPlayerBadges
`public async Task<Badge[]> GetPlayerBadges() `

### GetPlayerStats
`public async Task<PlayerStatsBase[]> GetPlayerStats(PlayerId playerID) `

### GetGameTypeRankInfo
`public async Task<GameTypeRankInfo[]> GetGameTypeRankInfo(PlayerId playerID) `

### GetRankedLeaderboardCount
`public async Task<int> GetRankedLeaderboardCount(string gameType) `

### GetRankedLeaderboard
`public async Task<PlayerLeaderboardData[]> GetRankedLeaderboard(string gameType,int startIndex,int count) `

### SendCreateClanMessage
`public void SendCreateClanMessage(string clanName,string clanTag,string clanFaction,string clanSigil) `

### GetFriendList
`public void GetFriendList() `

### AddFriend
`public void AddFriend(PlayerId friendId,bool dontUseNameForUnknownPlayer) `

### RemoveFriend
`public void RemoveFriend(PlayerId friendId) `

### RespondToFriendRequest
`public void RespondToFriendRequest(PlayerId playerId,bool dontUseNameForUnknownPlayer,bool isAccepted,bool isBlocked = false) `

### ReportPlayer
`public void ReportPlayer(string gameId,PlayerId player,string playerName,PlayerReportType type,string message) `

### ChangeUsername
`public async Task<bool> ChangeUsername(string username) `

### AddFriendByUsernameAndId
`public void AddFriendByUsernameAndId(string username,int userId,bool dontUseNameForUnknownPlayer) `

### DoesPlayerWithUsernameAndIdExist
`public async Task<bool> DoesPlayerWithUsernameAndIdExist(string username,int userId) `

### IsPlayerClanLeader
`public bool IsPlayerClanLeader(PlayerId playerID) `

### IsPlayerClanOfficer
`public bool IsPlayerClanOfficer(PlayerId playerID) `

### UpdateUsedCosmeticItems
`public async Task<bool> UpdateUsedCosmeticItems([TupleElementNames(new string[] { "cosmeticId","isEquipped" })] Dictionary<string,List<ValueTuple<string,bool>>> usedCosmetics) `

### BuyCosmetic
`public async Task<ValueTuple<bool,int>> BuyCosmetic(string cosmeticId) `

### GetCosmeticsInfo
`public async Task<ValueTuple<bool,List<string>,Dictionary<string,List<string>>>> GetCosmeticsInfo() `

### GetDedicatedCustomServerAuthToken
`public async Task<string> GetDedicatedCustomServerAuthToken() `

### GetOfficialServerProviderName
`public async Task<string> GetOfficialServerProviderName() `

### GetPlayerBannerlordID
`public async Task<string> GetPlayerBannerlordID(PlayerId playerId) `

### IsKnownPlayer
`public bool IsKnownPlayer(PlayerId playerID) `

### GetPingToServer
`public async Task<long> GetPingToServer(string IpAddress) `

### SendPSPlayerJoinedToPlayerSessionMessage
`public async Task<bool> SendPSPlayerJoinedToPlayerSessionMessage(ulong inviterPlayerId) `

### SendPlatformPlayerJoinedToPlayerSessionMessage
`public async Task<bool> SendPlatformPlayerJoinedToPlayerSessionMessage(PlayerId inviterPlayerId) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
