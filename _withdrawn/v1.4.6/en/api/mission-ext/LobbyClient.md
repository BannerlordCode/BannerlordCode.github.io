---
title: "LobbyClient"
description: "LobbyClient: a public class in TaleWorlds.MountAndBlade.Diamond, inheriting Client<LobbyClient>; 160 exposed members (104 methods, 53 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LobbyClient

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class LobbyClient : Client<LobbyClient>`
**File:** `TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LobbyClient lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs. It is a public class, implementing/inheriting Client<LobbyClient>; the inheritance chain is LobbyClient → Client → DiamondClientApplicationObject. It exposes 160 public/protected members: 104 methods, 53 properties, 1 fields, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LobbyClient lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain LobbyClient → Client → DiamondClientApplicationObject. The surface is method-led (methods 104/160, properties 53/160), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlayerData` | `public PlayerData PlayerData` | property |
| `SupportedFeatures` | `public SupportedFeatures SupportedFeatures` | property |
| `ClanInfo` | `public ClanInfo ClanInfo` | property |
| `ClanHomeInfo` | `public ClanHomeInfo ClanHomeInfo` | property |
| `IReadOnlyList` | `public IReadOnlyList<string>OwnedCosmetics` | property |
| `List` | `public IReadOnlyDictionary<string, List<string>>UsedCosmetics` | property |
| `AvailableScenes` | `public AvailableScenes AvailableScenes` | property |
| `PlayerID` | `public PlayerId PlayerID` | property |
| `IsRefreshingPlayerData` | `public bool IsRefreshingPlayerData` | property |
| `CurrentState` | `public LobbyClient.State CurrentState` | property |
| `AliveCheckTimeInMiliSeconds` | `public override long AliveCheckTimeInMiliSeconds` | property |
| `AtLobby` | `public bool AtLobby` | property |
| `CanPerformLobbyActions` | `public bool CanPerformLobbyActions` | property |
| `Name` | `public string Name` | property |
| `LastBattleServerAddressForClient` | `public string LastBattleServerAddressForClient` | property |
| `LastBattleServerPortForClient` | `public ushort LastBattleServerPortForClient` | property |
| `LastBattleIsOfficial` | `public bool LastBattleIsOfficial` | property |
| `Connected` | `public bool Connected` | property |
| `IsIdle` | `public bool IsIdle` | property |
| `Logout` | `public void Logout(TextObject logOutReason)` | method |
| `LoggedIn` | `public bool LoggedIn` | property |
| `IsInGame` | `public bool IsInGame` | property |
| `IsHostingCustomGame` | `public bool IsHostingCustomGame` | property |
| `IsMatchmakingAvailable` | `public bool IsMatchmakingAvailable` | property |
| `IsAbleToSearchForGame` | `public bool IsAbleToSearchForGame` | property |
| `PartySystemAvailable` | `public bool PartySystemAvailable` | property |
| `IsCustomBattleAvailable` | `public bool IsCustomBattleAvailable` | property |
| `IReadOnlyList` | `public IReadOnlyList<ModuleInfoModel>LoadedUnofficialModules` | property |
| `HasUnofficialModulesLoaded` | `public bool HasUnofficialModulesLoaded` | property |
| `HasUserGeneratedContentPrivilege` | `public bool HasUserGeneratedContentPrivilege` | property |
| `IsPartyLeader` | `public bool IsPartyLeader` | property |
| `IsClanLeader` | `public bool IsClanLeader` | property |
| `IsClanOfficer` | `public bool IsClanOfficer` | property |
| `IsEligibleToCreatePremadeGame` | `public bool IsEligibleToCreatePremadeGame` | property |
| `CustomBattleId` | `public CustomBattleId CustomBattleId` | property |
| `CustomGameType` | `public string CustomGameType` | property |
| `CustomGameScene` | `public string CustomGameScene` | property |
| `AvailableCustomGames` | `public AvailableCustomGames AvailableCustomGames` | property |
| `AvailablePremadeGames` | `public PremadeGameList AvailablePremadeGames` | property |
| `List` | `public List<PartyPlayerInLobbyClient>PlayersInParty` | property |
| `List` | `public List<ClanPlayer>PlayersInClan` | property |
| `List` | `public List<ClanPlayerInfo>PlayerInfosInClan` | property |
| `FriendInfo[]FriendInfos` | `public FriendInfo[]FriendInfos` | property |
| `IsInParty` | `public bool IsInParty` | property |
| `IsPartyFull` | `public bool IsPartyFull` | property |
| `CurrentMatchId` | `public string CurrentMatchId` | property |
| `IsInClan` | `public bool IsInClan` | property |
| `IsPartyInvitationPopupActive` | `public bool IsPartyInvitationPopupActive` | property |
| `IsPartyJoinRequestPopupActive` | `public bool IsPartyJoinRequestPopupActive` | property |
| `CanInvitePlayers` | `public bool CanInvitePlayers` | property |
| `CanSuggestPlayers` | `public bool CanSuggestPlayers` | property |
| `ClanID` | `public Guid ClanID` | property |
| `List` | `public List<PlayerId>FriendIDs` | property |
| `LobbyClient` | `public LobbyClient(DiamondClientApplication diamondClientApplication, IClientSessionProvider<LobbyClient>sessionProvider) : base(diamondClientApplication, sessionProvider, false)` | constructor |
| `SetLoadedModules` | `public void SetLoadedModules(string[]moduleIDs)` | method |
| `Task` | `public async Task<AvailableCustomGames>GetCustomGameServerList()` | method |
| `QuitFromCustomGame` | `public void QuitFromCustomGame()` | method |
| `QuitFromMatchmakerGame` | `public void QuitFromMatchmakerGame()` | method |
| `Task` | `public async Task<bool>RequestJoinCustomGame(CustomBattleId serverId, string password, bool isJoinAsAdmin = false)` | method |
| `Task` | `public async Task<bool>RequestJoinPlayerParty(PlayerId targetPlayer, bool inviteRequest)` | method |
| `CancelFindGame` | `public void CancelFindGame()` | method |
| `FindGame` | `public void FindGame()` | method |
| `Task` | `public async Task<bool>FindCustomGame(string[]selectedCustomGameTypes, bool? hasCrossplayPrivilege, string region)` | method |
| `Task` | `public async Task<LobbyClientConnectResult>Connect(ILobbyClientSessionHandler lobbyClientSessionHandler, ILoginAccessProvider lobbyClientLoginAccessProvider, string overridenUserName, bool hasUserGeneratedContentPrivilege, PlatformInitParams initParams, Func<Task<bool>>preLoginTask)` | method |
| `KickPlayer` | `public void KickPlayer(PlayerId id, bool banPlayer)` | method |
| `ChangeRegion` | `public void ChangeRegion(string region)` | method |
| `ChangeGameTypes` | `public void ChangeGameTypes(string[]gameTypes)` | method |
| `OnConnected` | `public override void OnConnected()` | method |
| `OnCantConnect` | `public override void OnCantConnect()` | method |
| `OnDisconnected` | `public override void OnDisconnected()` | method |
| `RemoveLobbyClientHandler` | `public void RemoveLobbyClientHandler()` | method |
| `SendWhisper` | `public void SendWhisper(string playerName, string message)` | method |
| `FleeBattle` | `public void FleeBattle()` | method |
| `SendPartyMessage` | `public void SendPartyMessage(string message)` | method |
| `OnTick` | `protected override void OnTick()` | method |
| `RejoinBattle` | `public void RejoinBattle()` | method |
| `OnBattleResultsSeen` | `public void OnBattleResultsSeen()` | method |
| `AcceptClanInvitation` | `public void AcceptClanInvitation()` | method |
| `DeclineClanInvitation` | `public void DeclineClanInvitation()` | method |
| `MarkNotificationAsRead` | `public void MarkNotificationAsRead(int notificationID)` | method |
| `AcceptClanCreationRequest` | `public void AcceptClanCreationRequest()` | method |
| `DeclineClanCreationRequest` | `public void DeclineClanCreationRequest()` | method |
| `PromoteToClanLeader` | `public void PromoteToClanLeader(PlayerId playerId, bool dontUseNameForUnknownPlayer)` | method |
| `KickFromClan` | `public void KickFromClan(PlayerId playerId)` | method |
| `Task` | `public async Task<CheckClanParameterValidResult>ClanNameExists(string clanName)` | method |
| `Task` | `public async Task<CheckClanParameterValidResult>ClanTagExists(string clanTag)` | method |
| `Task` | `public async Task<ClanHomeInfo>GetClanHomeInfo()` | method |
| `AssignAsClanOfficer` | `public void AssignAsClanOfficer(PlayerId playerId, bool dontUseNameForUnknownPlayer)` | method |
| `RemoveClanOfficerRoleForPlayer` | `public void RemoveClanOfficerRoleForPlayer(PlayerId playerId)` | method |
| `Task` | `public async Task<ClanLeaderboardInfo>GetClanLeaderboardInfo()` | method |
| `Task` | `public async Task<ClanInfo>GetPlayerClanInfo(PlayerId playerId)` | method |
| `SendClanMessage` | `public void SendClanMessage(string message)` | method |
| `Task` | `public async Task<PremadeGameList>GetPremadeGameList()` | method |
| `Task` | `public async Task<AvailableScenes>GetAvailableScenes()` | method |
| `Task` | `public async Task<PublishedLobbyNewsArticle[]>GetLobbyNews()` | method |
| `SetClanInformationText` | `public void SetClanInformationText(string informationText)` | method |
| `AddClanAnnouncement` | `public void AddClanAnnouncement(string announcement)` | method |
| `EditClanAnnouncement` | `public void EditClanAnnouncement(int announcementId, string text)` | method |
| `RemoveClanAnnouncement` | `public void RemoveClanAnnouncement(int announcementId)` | method |
| `ChangeClanFaction` | `public void ChangeClanFaction(string faction)` | method |
| `ChangeClanSigil` | `public void ChangeClanSigil(string sigil)` | method |
| `DestroyClan` | `public void DestroyClan()` | method |
| `InviteToClan` | `public void InviteToClan(PlayerId invitedPlayerId, bool dontUseNameForUnknownPlayer)` | method |
| `CreatePremadeGame` | `public async void CreatePremadeGame(string name, string gameType, string mapName, string factionA, string factionB, string password, PremadeGameType premadeGameType)` | method |
| `CancelCreatingPremadeGame` | `public void CancelCreatingPremadeGame()` | method |
| `RequestToJoinPremadeGame` | `public void RequestToJoinPremadeGame(Guid gameId, string password)` | method |
| `AcceptJoinPremadeGameRequest` | `public void AcceptJoinPremadeGameRequest(Guid partyId)` | method |
| `DeclineJoinPremadeGameRequest` | `public void DeclineJoinPremadeGameRequest(Guid partyId)` | method |
| `InviteToParty` | `public void InviteToParty(PlayerId playerId, bool dontUseNameForUnknownPlayer)` | method |
| `DisbandParty` | `public void DisbandParty()` | method |
| `KickPlayerFromParty` | `public void KickPlayerFromParty(PlayerId playerId)` | method |
| `OnPlayerNameUpdated` | `public void OnPlayerNameUpdated(string name)` | method |
| `ToggleUseClanSigil` | `public void ToggleUseClanSigil(bool isUsed)` | method |
| `PromotePlayerToPartyLeader` | `public void PromotePlayerToPartyLeader(PlayerId playerId)` | method |
| `ChangeSigil` | `public void ChangeSigil(string sigilId)` | method |
| `Task` | `public async Task<bool>InviteToPlatformSession(PlayerId playerId)` | method |
| `EndCustomGame` | `public async void EndCustomGame()` | method |
| `RegisterCustomGame` | `public async void RegisterCustomGame(string gameModule, string gameType, string serverName, int maxPlayerCount, string map, string uniqueMapId, string gamePassword, string adminPassword, int port)` | method |
| `UpdateCustomGameData` | `public void UpdateCustomGameData(string newGameType, string newMap, int newCount)` | method |
| `ResponseCustomGameClientConnection` | `public void ResponseCustomGameClientConnection(PlayerJoinGameResponseDataFromHost[]playerJoinData)` | method |
| `AcceptPartyInvitation` | `public void AcceptPartyInvitation()` | method |
| `DeclinePartyInvitation` | `public void DeclinePartyInvitation()` | method |
| `AcceptPartyJoinRequest` | `public void AcceptPartyJoinRequest(PlayerId playerId)` | method |
| `DeclinePartyJoinRequest` | `public void DeclinePartyJoinRequest(PlayerId playerId, PartyJoinDeclineReason reason)` | method |
| `UpdateCharacter` | `public void UpdateCharacter(BodyProperties bodyProperties, bool isFemale)` | method |
| `Task` | `public async Task<bool>UpdateShownBadgeId(string shownBadgeId)` | method |
| `Task` | `public async Task<AnotherPlayerData>GetAnotherPlayerState(PlayerId playerId)` | method |
| `Task` | `public async Task<PlayerData>GetAnotherPlayerData(PlayerId playerID)` | method |
| `Task` | `public async Task<MatchmakingQueueStats>GetPlayerCountInQueue()` | method |
| `AnotherPlayerData>>>GetOtherPlayersState` | `public async Task<List<ValueTuple<PlayerId, AnotherPlayerData>>>GetOtherPlayersState(List<PlayerId>players)` | method |
| `Task` | `public async Task<MatchmakingWaitTimeStats>GetMatchmakingWaitTimes()` | method |
| `Task` | `public async Task<Badge[]>GetPlayerBadges()` | method |
| `Task` | `public async Task<PlayerStatsBase[]>GetPlayerStats(PlayerId playerID)` | method |
| `Task` | `public async Task<GameTypeRankInfo[]>GetGameTypeRankInfo(PlayerId playerID)` | method |
| `Task` | `public async Task<int>GetRankedLeaderboardCount(string gameType)` | method |
| `Task` | `public async Task<PlayerLeaderboardData[]>GetRankedLeaderboard(string gameType, int startIndex, int count)` | method |
| `SendCreateClanMessage` | `public void SendCreateClanMessage(string clanName, string clanTag, string clanFaction, string clanSigil)` | method |
| `GetFriendList` | `public void GetFriendList()` | method |
| `AddFriend` | `public void AddFriend(PlayerId friendId, bool dontUseNameForUnknownPlayer)` | method |
| `RemoveFriend` | `public void RemoveFriend(PlayerId friendId)` | method |
| `RespondToFriendRequest` | `public void RespondToFriendRequest(PlayerId playerId, bool dontUseNameForUnknownPlayer, bool isAccepted, bool isBlocked = false)` | method |
| `ReportPlayer` | `public void ReportPlayer(string gameId, PlayerId player, string playerName, PlayerReportType type, string message)` | method |
| `ChangeUsername` | `public void ChangeUsername(string username)` | method |
| `AddFriendByUsernameAndId` | `public void AddFriendByUsernameAndId(string username, int userId, bool dontUseNameForUnknownPlayer)` | method |
| `Task` | `public async Task<bool>DoesPlayerWithUsernameAndIdExist(string username, int userId)` | method |
| `IsPlayerClanLeader` | `public bool IsPlayerClanLeader(PlayerId playerID)` | method |
| `IsPlayerClanOfficer` | `public bool IsPlayerClanOfficer(PlayerId playerID)` | method |
| `Task` | `public async Task<bool>UpdateUsedCosmeticItems([TupleElementNames(new string[]` | method |
| `int>>BuyCosmetic` | `public async Task<ValueTuple<bool, int>>BuyCosmetic(string cosmeticId)` | method |
| `List` | `public async Task<ValueTuple<bool, List<string>, Dictionary<string, List<string>>>>GetCosmeticsInfo()` | method |
| `Task` | `public async Task<string>GetDedicatedCustomServerAuthToken()` | method |
| `Task` | `public async Task<string>GetOfficialServerProviderName()` | method |
| `Task` | `public async Task<string>GetPlayerBannerlordID(PlayerId playerId)` | method |
| `IsKnownPlayer` | `public bool IsKnownPlayer(PlayerId playerID)` | method |
| `Task` | `public async Task<long>GetPingToServer(string IpAddress)` | method |
| `Task` | `public async Task<bool>SendPSPlayerJoinedToPlayerSessionMessage(ulong inviterPlayerId)` | method |
| `Task` | `public async Task<bool>SendPlatformPlayerJoinedToPlayerSessionMessage(PlayerId inviterPlayerId)` | method |
| `TestRegionCode` | `public const string TestRegionCode` | field |
| `State` | `public enum State` | property |
| `State` | `public enum State` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Client](../../engine/Client__1/)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
