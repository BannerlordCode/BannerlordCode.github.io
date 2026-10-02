---
title: "LobbyClient"
description: "LobbyClient：TaleWorlds.MountAndBlade.Diamond 的 public 类，继承 Client<LobbyClient>；公开成员 160 个（方法 104、属性 53、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LobbyClient

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class LobbyClient : Client<LobbyClient>`
**File:** `TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

LobbyClient 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs。它是一个 public 类，实现/继承 Client<LobbyClient>，继承链为 LobbyClient → Client → DiamondClientApplicationObject。public/protected 成员共 160 个：104 方法、53 属性、1 字段、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LobbyClient 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 LobbyClient → Client → DiamondClientApplicationObject。成员构成以方法为主（方法 104/160，属性 53/160），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerData` | `public PlayerData PlayerData` | 属性 |
| `SupportedFeatures` | `public SupportedFeatures SupportedFeatures` | 属性 |
| `ClanInfo` | `public ClanInfo ClanInfo` | 属性 |
| `ClanHomeInfo` | `public ClanHomeInfo ClanHomeInfo` | 属性 |
| `IReadOnlyList` | `public IReadOnlyList<string>OwnedCosmetics` | 属性 |
| `List` | `public IReadOnlyDictionary<string, List<string>>UsedCosmetics` | 属性 |
| `AvailableScenes` | `public AvailableScenes AvailableScenes` | 属性 |
| `PlayerID` | `public PlayerId PlayerID` | 属性 |
| `IsRefreshingPlayerData` | `public bool IsRefreshingPlayerData` | 属性 |
| `CurrentState` | `public LobbyClient.State CurrentState` | 属性 |
| `AliveCheckTimeInMiliSeconds` | `public override long AliveCheckTimeInMiliSeconds` | 属性 |
| `AtLobby` | `public bool AtLobby` | 属性 |
| `CanPerformLobbyActions` | `public bool CanPerformLobbyActions` | 属性 |
| `Name` | `public string Name` | 属性 |
| `LastBattleServerAddressForClient` | `public string LastBattleServerAddressForClient` | 属性 |
| `LastBattleServerPortForClient` | `public ushort LastBattleServerPortForClient` | 属性 |
| `LastBattleIsOfficial` | `public bool LastBattleIsOfficial` | 属性 |
| `Connected` | `public bool Connected` | 属性 |
| `IsIdle` | `public bool IsIdle` | 属性 |
| `Logout` | `public void Logout(TextObject logOutReason)` | 方法 |
| `LoggedIn` | `public bool LoggedIn` | 属性 |
| `IsInGame` | `public bool IsInGame` | 属性 |
| `IsHostingCustomGame` | `public bool IsHostingCustomGame` | 属性 |
| `IsMatchmakingAvailable` | `public bool IsMatchmakingAvailable` | 属性 |
| `IsAbleToSearchForGame` | `public bool IsAbleToSearchForGame` | 属性 |
| `PartySystemAvailable` | `public bool PartySystemAvailable` | 属性 |
| `IsCustomBattleAvailable` | `public bool IsCustomBattleAvailable` | 属性 |
| `IReadOnlyList` | `public IReadOnlyList<ModuleInfoModel>LoadedUnofficialModules` | 属性 |
| `HasUnofficialModulesLoaded` | `public bool HasUnofficialModulesLoaded` | 属性 |
| `HasUserGeneratedContentPrivilege` | `public bool HasUserGeneratedContentPrivilege` | 属性 |
| `IsPartyLeader` | `public bool IsPartyLeader` | 属性 |
| `IsClanLeader` | `public bool IsClanLeader` | 属性 |
| `IsClanOfficer` | `public bool IsClanOfficer` | 属性 |
| `IsEligibleToCreatePremadeGame` | `public bool IsEligibleToCreatePremadeGame` | 属性 |
| `CustomBattleId` | `public CustomBattleId CustomBattleId` | 属性 |
| `CustomGameType` | `public string CustomGameType` | 属性 |
| `CustomGameScene` | `public string CustomGameScene` | 属性 |
| `AvailableCustomGames` | `public AvailableCustomGames AvailableCustomGames` | 属性 |
| `AvailablePremadeGames` | `public PremadeGameList AvailablePremadeGames` | 属性 |
| `List` | `public List<PartyPlayerInLobbyClient>PlayersInParty` | 属性 |
| `List` | `public List<ClanPlayer>PlayersInClan` | 属性 |
| `List` | `public List<ClanPlayerInfo>PlayerInfosInClan` | 属性 |
| `FriendInfo[]FriendInfos` | `public FriendInfo[]FriendInfos` | 属性 |
| `IsInParty` | `public bool IsInParty` | 属性 |
| `IsPartyFull` | `public bool IsPartyFull` | 属性 |
| `CurrentMatchId` | `public string CurrentMatchId` | 属性 |
| `IsInClan` | `public bool IsInClan` | 属性 |
| `IsPartyInvitationPopupActive` | `public bool IsPartyInvitationPopupActive` | 属性 |
| `IsPartyJoinRequestPopupActive` | `public bool IsPartyJoinRequestPopupActive` | 属性 |
| `CanInvitePlayers` | `public bool CanInvitePlayers` | 属性 |
| `CanSuggestPlayers` | `public bool CanSuggestPlayers` | 属性 |
| `ClanID` | `public Guid ClanID` | 属性 |
| `List` | `public List<PlayerId>FriendIDs` | 属性 |
| `LobbyClient` | `public LobbyClient(DiamondClientApplication diamondClientApplication, IClientSessionProvider<LobbyClient>sessionProvider) : base(diamondClientApplication, sessionProvider, false)` | 构造函数 |
| `SetLoadedModules` | `public void SetLoadedModules(string[]moduleIDs)` | 方法 |
| `Task` | `public async Task<AvailableCustomGames>GetCustomGameServerList()` | 方法 |
| `QuitFromCustomGame` | `public void QuitFromCustomGame()` | 方法 |
| `QuitFromMatchmakerGame` | `public void QuitFromMatchmakerGame()` | 方法 |
| `Task` | `public async Task<bool>RequestJoinCustomGame(CustomBattleId serverId, string password, bool isJoinAsAdmin = false)` | 方法 |
| `Task` | `public async Task<bool>RequestJoinPlayerParty(PlayerId targetPlayer, bool inviteRequest)` | 方法 |
| `CancelFindGame` | `public void CancelFindGame()` | 方法 |
| `FindGame` | `public void FindGame()` | 方法 |
| `Task` | `public async Task<bool>FindCustomGame(string[]selectedCustomGameTypes, bool? hasCrossplayPrivilege, string region)` | 方法 |
| `Task` | `public async Task<LobbyClientConnectResult>Connect(ILobbyClientSessionHandler lobbyClientSessionHandler, ILoginAccessProvider lobbyClientLoginAccessProvider, string overridenUserName, bool hasUserGeneratedContentPrivilege, PlatformInitParams initParams, Func<Task<bool>>preLoginTask)` | 方法 |
| `KickPlayer` | `public void KickPlayer(PlayerId id, bool banPlayer)` | 方法 |
| `ChangeRegion` | `public void ChangeRegion(string region)` | 方法 |
| `ChangeGameTypes` | `public void ChangeGameTypes(string[]gameTypes)` | 方法 |
| `OnConnected` | `public override void OnConnected()` | 方法 |
| `OnCantConnect` | `public override void OnCantConnect()` | 方法 |
| `OnDisconnected` | `public override void OnDisconnected()` | 方法 |
| `RemoveLobbyClientHandler` | `public void RemoveLobbyClientHandler()` | 方法 |
| `SendWhisper` | `public void SendWhisper(string playerName, string message)` | 方法 |
| `FleeBattle` | `public void FleeBattle()` | 方法 |
| `SendPartyMessage` | `public void SendPartyMessage(string message)` | 方法 |
| `OnTick` | `protected override void OnTick()` | 方法 |
| `RejoinBattle` | `public void RejoinBattle()` | 方法 |
| `OnBattleResultsSeen` | `public void OnBattleResultsSeen()` | 方法 |
| `AcceptClanInvitation` | `public void AcceptClanInvitation()` | 方法 |
| `DeclineClanInvitation` | `public void DeclineClanInvitation()` | 方法 |
| `MarkNotificationAsRead` | `public void MarkNotificationAsRead(int notificationID)` | 方法 |
| `AcceptClanCreationRequest` | `public void AcceptClanCreationRequest()` | 方法 |
| `DeclineClanCreationRequest` | `public void DeclineClanCreationRequest()` | 方法 |
| `PromoteToClanLeader` | `public void PromoteToClanLeader(PlayerId playerId, bool dontUseNameForUnknownPlayer)` | 方法 |
| `KickFromClan` | `public void KickFromClan(PlayerId playerId)` | 方法 |
| `Task` | `public async Task<CheckClanParameterValidResult>ClanNameExists(string clanName)` | 方法 |
| `Task` | `public async Task<CheckClanParameterValidResult>ClanTagExists(string clanTag)` | 方法 |
| `Task` | `public async Task<ClanHomeInfo>GetClanHomeInfo()` | 方法 |
| `AssignAsClanOfficer` | `public void AssignAsClanOfficer(PlayerId playerId, bool dontUseNameForUnknownPlayer)` | 方法 |
| `RemoveClanOfficerRoleForPlayer` | `public void RemoveClanOfficerRoleForPlayer(PlayerId playerId)` | 方法 |
| `Task` | `public async Task<ClanLeaderboardInfo>GetClanLeaderboardInfo()` | 方法 |
| `Task` | `public async Task<ClanInfo>GetPlayerClanInfo(PlayerId playerId)` | 方法 |
| `SendClanMessage` | `public void SendClanMessage(string message)` | 方法 |
| `Task` | `public async Task<PremadeGameList>GetPremadeGameList()` | 方法 |
| `Task` | `public async Task<AvailableScenes>GetAvailableScenes()` | 方法 |
| `Task` | `public async Task<PublishedLobbyNewsArticle[]>GetLobbyNews()` | 方法 |
| `SetClanInformationText` | `public void SetClanInformationText(string informationText)` | 方法 |
| `AddClanAnnouncement` | `public void AddClanAnnouncement(string announcement)` | 方法 |
| `EditClanAnnouncement` | `public void EditClanAnnouncement(int announcementId, string text)` | 方法 |
| `RemoveClanAnnouncement` | `public void RemoveClanAnnouncement(int announcementId)` | 方法 |
| `ChangeClanFaction` | `public void ChangeClanFaction(string faction)` | 方法 |
| `ChangeClanSigil` | `public void ChangeClanSigil(string sigil)` | 方法 |
| `DestroyClan` | `public void DestroyClan()` | 方法 |
| `InviteToClan` | `public void InviteToClan(PlayerId invitedPlayerId, bool dontUseNameForUnknownPlayer)` | 方法 |
| `CreatePremadeGame` | `public async void CreatePremadeGame(string name, string gameType, string mapName, string factionA, string factionB, string password, PremadeGameType premadeGameType)` | 方法 |
| `CancelCreatingPremadeGame` | `public void CancelCreatingPremadeGame()` | 方法 |
| `RequestToJoinPremadeGame` | `public void RequestToJoinPremadeGame(Guid gameId, string password)` | 方法 |
| `AcceptJoinPremadeGameRequest` | `public void AcceptJoinPremadeGameRequest(Guid partyId)` | 方法 |
| `DeclineJoinPremadeGameRequest` | `public void DeclineJoinPremadeGameRequest(Guid partyId)` | 方法 |
| `InviteToParty` | `public void InviteToParty(PlayerId playerId, bool dontUseNameForUnknownPlayer)` | 方法 |
| `DisbandParty` | `public void DisbandParty()` | 方法 |
| `KickPlayerFromParty` | `public void KickPlayerFromParty(PlayerId playerId)` | 方法 |
| `OnPlayerNameUpdated` | `public void OnPlayerNameUpdated(string name)` | 方法 |
| `ToggleUseClanSigil` | `public void ToggleUseClanSigil(bool isUsed)` | 方法 |
| `PromotePlayerToPartyLeader` | `public void PromotePlayerToPartyLeader(PlayerId playerId)` | 方法 |
| `ChangeSigil` | `public void ChangeSigil(string sigilId)` | 方法 |
| `Task` | `public async Task<bool>InviteToPlatformSession(PlayerId playerId)` | 方法 |
| `EndCustomGame` | `public async void EndCustomGame()` | 方法 |
| `RegisterCustomGame` | `public async void RegisterCustomGame(string gameModule, string gameType, string serverName, int maxPlayerCount, string map, string uniqueMapId, string gamePassword, string adminPassword, int port)` | 方法 |
| `UpdateCustomGameData` | `public void UpdateCustomGameData(string newGameType, string newMap, int newCount)` | 方法 |
| `ResponseCustomGameClientConnection` | `public void ResponseCustomGameClientConnection(PlayerJoinGameResponseDataFromHost[]playerJoinData)` | 方法 |
| `AcceptPartyInvitation` | `public void AcceptPartyInvitation()` | 方法 |
| `DeclinePartyInvitation` | `public void DeclinePartyInvitation()` | 方法 |
| `AcceptPartyJoinRequest` | `public void AcceptPartyJoinRequest(PlayerId playerId)` | 方法 |
| `DeclinePartyJoinRequest` | `public void DeclinePartyJoinRequest(PlayerId playerId, PartyJoinDeclineReason reason)` | 方法 |
| `UpdateCharacter` | `public void UpdateCharacter(BodyProperties bodyProperties, bool isFemale)` | 方法 |
| `Task` | `public async Task<bool>UpdateShownBadgeId(string shownBadgeId)` | 方法 |
| `Task` | `public async Task<AnotherPlayerData>GetAnotherPlayerState(PlayerId playerId)` | 方法 |
| `Task` | `public async Task<PlayerData>GetAnotherPlayerData(PlayerId playerID)` | 方法 |
| `Task` | `public async Task<MatchmakingQueueStats>GetPlayerCountInQueue()` | 方法 |
| `AnotherPlayerData>>>GetOtherPlayersState` | `public async Task<List<ValueTuple<PlayerId, AnotherPlayerData>>>GetOtherPlayersState(List<PlayerId>players)` | 方法 |
| `Task` | `public async Task<MatchmakingWaitTimeStats>GetMatchmakingWaitTimes()` | 方法 |
| `Task` | `public async Task<Badge[]>GetPlayerBadges()` | 方法 |
| `Task` | `public async Task<PlayerStatsBase[]>GetPlayerStats(PlayerId playerID)` | 方法 |
| `Task` | `public async Task<GameTypeRankInfo[]>GetGameTypeRankInfo(PlayerId playerID)` | 方法 |
| `Task` | `public async Task<int>GetRankedLeaderboardCount(string gameType)` | 方法 |
| `Task` | `public async Task<PlayerLeaderboardData[]>GetRankedLeaderboard(string gameType, int startIndex, int count)` | 方法 |
| `SendCreateClanMessage` | `public void SendCreateClanMessage(string clanName, string clanTag, string clanFaction, string clanSigil)` | 方法 |
| `GetFriendList` | `public void GetFriendList()` | 方法 |
| `AddFriend` | `public void AddFriend(PlayerId friendId, bool dontUseNameForUnknownPlayer)` | 方法 |
| `RemoveFriend` | `public void RemoveFriend(PlayerId friendId)` | 方法 |
| `RespondToFriendRequest` | `public void RespondToFriendRequest(PlayerId playerId, bool dontUseNameForUnknownPlayer, bool isAccepted, bool isBlocked = false)` | 方法 |
| `ReportPlayer` | `public void ReportPlayer(string gameId, PlayerId player, string playerName, PlayerReportType type, string message)` | 方法 |
| `ChangeUsername` | `public void ChangeUsername(string username)` | 方法 |
| `AddFriendByUsernameAndId` | `public void AddFriendByUsernameAndId(string username, int userId, bool dontUseNameForUnknownPlayer)` | 方法 |
| `Task` | `public async Task<bool>DoesPlayerWithUsernameAndIdExist(string username, int userId)` | 方法 |
| `IsPlayerClanLeader` | `public bool IsPlayerClanLeader(PlayerId playerID)` | 方法 |
| `IsPlayerClanOfficer` | `public bool IsPlayerClanOfficer(PlayerId playerID)` | 方法 |
| `Task` | `public async Task<bool>UpdateUsedCosmeticItems([TupleElementNames(new string[]` | 方法 |
| `int>>BuyCosmetic` | `public async Task<ValueTuple<bool, int>>BuyCosmetic(string cosmeticId)` | 方法 |
| `List` | `public async Task<ValueTuple<bool, List<string>, Dictionary<string, List<string>>>>GetCosmeticsInfo()` | 方法 |
| `Task` | `public async Task<string>GetDedicatedCustomServerAuthToken()` | 方法 |
| `Task` | `public async Task<string>GetOfficialServerProviderName()` | 方法 |
| `Task` | `public async Task<string>GetPlayerBannerlordID(PlayerId playerId)` | 方法 |
| `IsKnownPlayer` | `public bool IsKnownPlayer(PlayerId playerID)` | 方法 |
| `Task` | `public async Task<long>GetPingToServer(string IpAddress)` | 方法 |
| `Task` | `public async Task<bool>SendPSPlayerJoinedToPlayerSessionMessage(ulong inviterPlayerId)` | 方法 |
| `Task` | `public async Task<bool>SendPlatformPlayerJoinedToPlayerSessionMessage(PlayerId inviterPlayerId)` | 方法 |
| `TestRegionCode` | `public const string TestRegionCode` | 字段 |
| `State` | `public enum State` | 属性 |
| `State` | `public enum State` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 Client](../../engine/Client__1/)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
