---
title: "LobbyClient"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LobbyClient`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LobbyClient

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyClient : Client<LobbyClient>`
**Base:** `Client<LobbyClient>`
**File:** `TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs`

## Overview

`LobbyClient` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerData` | `public PlayerData PlayerData { get; }` |
| `SupportedFeatures` | `public SupportedFeatures SupportedFeatures { get; }` |
| `ClanInfo` | `public ClanInfo ClanInfo { get; }` |
| `ClanHomeInfo` | `public ClanHomeInfo ClanHomeInfo { get; }` |
| `OwnedCosmetics` | `public IReadOnlyList<string> OwnedCosmetics { get; }` |
| `UsedCosmetics` | `public IReadOnlyDictionary<string, List<string>> UsedCosmetics { get; }` |
| `AvailableScenes` | `public AvailableScenes AvailableScenes { get; }` |
| `PlayerID` | `public PlayerId PlayerID { get; }` |
| `IsRefreshingPlayerData` | `public bool IsRefreshingPlayerData { get; }` |
| `CurrentState` | `public LobbyClient.State CurrentState { get; }` |
| `AliveCheckTimeInMiliSeconds` | `public override long AliveCheckTimeInMiliSeconds { get; }` |
| `AtLobby` | `public bool AtLobby { get; }` |
| `CanPerformLobbyActions` | `public bool CanPerformLobbyActions { get; }` |
| `Name` | `public string Name { get; }` |
| `LastBattleServerAddressForClient` | `public string LastBattleServerAddressForClient { get; }` |
| `LastBattleServerPortForClient` | `public ushort LastBattleServerPortForClient { get; }` |
| `LastBattleIsOfficial` | `public bool LastBattleIsOfficial { get; }` |
| `Connected` | `public bool Connected { get; }` |
| `IsIdle` | `public bool IsIdle { get; }` |
| `LoggedIn` | `public bool LoggedIn { get; }` |
| `IsInGame` | `public bool IsInGame { get; }` |
| `IsHostingCustomGame` | `public bool IsHostingCustomGame { get; }` |
| `IsMatchmakingAvailable` | `public bool IsMatchmakingAvailable { get; }` |
| `IsAbleToSearchForGame` | `public bool IsAbleToSearchForGame { get; }` |
| `PartySystemAvailable` | `public bool PartySystemAvailable { get; }` |
| `IsCustomBattleAvailable` | `public bool IsCustomBattleAvailable { get; }` |
| `LoadedUnofficialModules` | `public IReadOnlyList<ModuleInfoModel> LoadedUnofficialModules { get; }` |
| `HasUnofficialModulesLoaded` | `public bool HasUnofficialModulesLoaded { get; }` |
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
| `IsPartyFull` | `public bool IsPartyFull { get; }` |
| `CurrentMatchId` | `public string CurrentMatchId { get; }` |
| `IsInClan` | `public bool IsInClan { get; }` |
| `IsPartyInvitationPopupActive` | `public bool IsPartyInvitationPopupActive { get; }` |
| `IsPartyJoinRequestPopupActive` | `public bool IsPartyJoinRequestPopupActive { get; }` |
| `CanInvitePlayers` | `public bool CanInvitePlayers { get; }` |
| `CanSuggestPlayers` | `public bool CanSuggestPlayers { get; }` |
| `ClanID` | `public Guid ClanID { get; }` |
| `FriendIDs` | `public List<PlayerId> FriendIDs { get; }` |

## Key Methods

### Logout
`public void Logout(TextObject logOutReason)`

**Purpose:** Handles logic related to `logout`.

### SetLoadedModules
`public void SetLoadedModules(string moduleIDs)`

**Purpose:** Sets the value or state of `loaded modules`.

### GetCustomGameServerList
`public Task<AvailableCustomGames> GetCustomGameServerList()`

**Purpose:** Gets the current value of `custom game server list`.

### QuitFromCustomGame
`public void QuitFromCustomGame()`

**Purpose:** Handles logic related to `quit from custom game`.

### QuitFromMatchmakerGame
`public void QuitFromMatchmakerGame()`

**Purpose:** Handles logic related to `quit from matchmaker game`.

### RequestJoinCustomGame
`public Task<bool> RequestJoinCustomGame(CustomBattleId serverId, string password, bool isJoinAsAdmin = false)`

**Purpose:** Handles logic related to `request join custom game`.

### RequestJoinPlayerParty
`public Task<bool> RequestJoinPlayerParty(PlayerId targetPlayer, bool inviteRequest)`

**Purpose:** Handles logic related to `request join player party`.

### CancelFindGame
`public void CancelFindGame()`

**Purpose:** Checks whether the current object can `cel find game`.

### FindGame
`public void FindGame()`

**Purpose:** Handles logic related to `find game`.

### FindCustomGame
`public Task<bool> FindCustomGame(string selectedCustomGameTypes, bool? hasCrossplayPrivilege, string region)`

**Purpose:** Handles logic related to `find custom game`.

### Connect
`public Task<LobbyClientConnectResult> Connect(ILobbyClientSessionHandler lobbyClientSessionHandler, ILoginAccessProvider lobbyClientLoginAccessProvider, string overridenUserName, bool hasUserGeneratedContentPrivilege, PlatformInitParams initParams, Func<Task<bool>> preLoginTask)`

**Purpose:** Handles logic related to `connect`.

### KickPlayer
`public void KickPlayer(PlayerId id, bool banPlayer)`

**Purpose:** Handles logic related to `kick player`.

### ChangeRegion
`public void ChangeRegion(string region)`

**Purpose:** Handles logic related to `change region`.

### ChangeGameTypes
`public void ChangeGameTypes(string gameTypes)`

**Purpose:** Handles logic related to `change game types`.

### OnConnected
`public override void OnConnected()`

**Purpose:** Called when the `connected` event is raised.

### OnCantConnect
`public override void OnCantConnect()`

**Purpose:** Called when the `cant connect` event is raised.

### OnDisconnected
`public override void OnDisconnected()`

**Purpose:** Called when the `disconnected` event is raised.

### RemoveLobbyClientHandler
`public void RemoveLobbyClientHandler()`

**Purpose:** Removes `lobby client handler` from the current collection or state.

### SendWhisper
`public void SendWhisper(string playerName, string message)`

**Purpose:** Handles logic related to `send whisper`.

### FleeBattle
`public void FleeBattle()`

**Purpose:** Handles logic related to `flee battle`.

### SendPartyMessage
`public void SendPartyMessage(string message)`

**Purpose:** Handles logic related to `send party message`.

### RejoinBattle
`public void RejoinBattle()`

**Purpose:** Handles logic related to `rejoin battle`.

### OnBattleResultsSeen
`public void OnBattleResultsSeen()`

**Purpose:** Called when the `battle results seen` event is raised.

### AcceptClanInvitation
`public void AcceptClanInvitation()`

**Purpose:** Handles logic related to `accept clan invitation`.

### DeclineClanInvitation
`public void DeclineClanInvitation()`

**Purpose:** Handles logic related to `decline clan invitation`.

### MarkNotificationAsRead
`public void MarkNotificationAsRead(int notificationID)`

**Purpose:** Handles logic related to `mark notification as read`.

### AcceptClanCreationRequest
`public void AcceptClanCreationRequest()`

**Purpose:** Handles logic related to `accept clan creation request`.

### DeclineClanCreationRequest
`public void DeclineClanCreationRequest()`

**Purpose:** Handles logic related to `decline clan creation request`.

### PromoteToClanLeader
`public void PromoteToClanLeader(PlayerId playerId, bool dontUseNameForUnknownPlayer)`

**Purpose:** Handles logic related to `promote to clan leader`.

### KickFromClan
`public void KickFromClan(PlayerId playerId)`

**Purpose:** Handles logic related to `kick from clan`.

### ClanNameExists
`public Task<CheckClanParameterValidResult> ClanNameExists(string clanName)`

**Purpose:** Handles logic related to `clan name exists`.

### ClanTagExists
`public Task<CheckClanParameterValidResult> ClanTagExists(string clanTag)`

**Purpose:** Handles logic related to `clan tag exists`.

### GetClanHomeInfo
`public Task<ClanHomeInfo> GetClanHomeInfo()`

**Purpose:** Gets the current value of `clan home info`.

### JoinChannel
`public void JoinChannel(ChatChannelType channel)`

**Purpose:** Handles logic related to `join channel`.

### AssignAsClanOfficer
`public void AssignAsClanOfficer(PlayerId playerId, bool dontUseNameForUnknownPlayer)`

**Purpose:** Handles logic related to `assign as clan officer`.

### RemoveClanOfficerRoleForPlayer
`public void RemoveClanOfficerRoleForPlayer(PlayerId playerId)`

**Purpose:** Removes `clan officer role for player` from the current collection or state.

### LeaveChannel
`public void LeaveChannel(ChatChannelType channel)`

**Purpose:** Handles logic related to `leave channel`.

### GetClanLeaderboardInfo
`public Task<ClanLeaderboardInfo> GetClanLeaderboardInfo()`

**Purpose:** Gets the current value of `clan leaderboard info`.

### GetPlayerClanInfo
`public Task<ClanInfo> GetPlayerClanInfo(PlayerId playerId)`

**Purpose:** Gets the current value of `player clan info`.

### SendClanMessage
`public void SendClanMessage(string message)`

**Purpose:** Handles logic related to `send clan message`.

### GetPremadeGameList
`public Task<PremadeGameList> GetPremadeGameList()`

**Purpose:** Gets the current value of `premade game list`.

### GetAvailableScenes
`public Task<AvailableScenes> GetAvailableScenes()`

**Purpose:** Gets the current value of `available scenes`.

### GetLobbyNews
`public Task<PublishedLobbyNewsArticle > GetLobbyNews()`

**Purpose:** Gets the current value of `lobby news`.

### SetClanInformationText
`public void SetClanInformationText(string informationText)`

**Purpose:** Sets the value or state of `clan information text`.

### AddClanAnnouncement
`public void AddClanAnnouncement(string announcement)`

**Purpose:** Adds `clan announcement` to the current collection or state.

### EditClanAnnouncement
`public void EditClanAnnouncement(int announcementId, string text)`

**Purpose:** Handles logic related to `edit clan announcement`.

### RemoveClanAnnouncement
`public void RemoveClanAnnouncement(int announcementId)`

**Purpose:** Removes `clan announcement` from the current collection or state.

### ChangeClanFaction
`public void ChangeClanFaction(string faction)`

**Purpose:** Handles logic related to `change clan faction`.

### ChangeClanSigil
`public void ChangeClanSigil(string sigil)`

**Purpose:** Handles logic related to `change clan sigil`.

### DestroyClan
`public void DestroyClan()`

**Purpose:** Handles logic related to `destroy clan`.

### InviteToClan
`public void InviteToClan(PlayerId invitedPlayerId, bool dontUseNameForUnknownPlayer)`

**Purpose:** Handles logic related to `invite to clan`.

### CreatePremadeGame
`public void CreatePremadeGame(string name, string gameType, string mapName, string factionA, string factionB, string password, PremadeGameType premadeGameType)`

**Purpose:** Creates a new `premade game` instance or object.

### CancelCreatingPremadeGame
`public void CancelCreatingPremadeGame()`

**Purpose:** Checks whether the current object can `cel creating premade game`.

### RequestToJoinPremadeGame
`public void RequestToJoinPremadeGame(Guid gameId, string password)`

**Purpose:** Handles logic related to `request to join premade game`.

### AcceptJoinPremadeGameRequest
`public void AcceptJoinPremadeGameRequest(Guid partyId)`

**Purpose:** Handles logic related to `accept join premade game request`.

### DeclineJoinPremadeGameRequest
`public void DeclineJoinPremadeGameRequest(Guid partyId)`

**Purpose:** Handles logic related to `decline join premade game request`.

### InviteToParty
`public void InviteToParty(PlayerId playerId, bool dontUseNameForUnknownPlayer)`

**Purpose:** Handles logic related to `invite to party`.

### DisbandParty
`public void DisbandParty()`

**Purpose:** Handles logic related to `disband party`.

### KickPlayerFromParty
`public void KickPlayerFromParty(PlayerId playerId)`

**Purpose:** Handles logic related to `kick player from party`.

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string name)`

**Purpose:** Called when the `player name updated` event is raised.

### ToggleUseClanSigil
`public void ToggleUseClanSigil(bool isUsed)`

**Purpose:** Handles logic related to `toggle use clan sigil`.

### PromotePlayerToPartyLeader
`public void PromotePlayerToPartyLeader(PlayerId playerId)`

**Purpose:** Handles logic related to `promote player to party leader`.

### ChangeSigil
`public void ChangeSigil(string sigilId)`

**Purpose:** Handles logic related to `change sigil`.

### InviteToPlatformSession
`public Task<bool> InviteToPlatformSession(PlayerId playerId)`

**Purpose:** Handles logic related to `invite to platform session`.

### EndCustomGame
`public void EndCustomGame()`

**Purpose:** Handles logic related to `end custom game`.

### RegisterCustomGame
`public void RegisterCustomGame(string gameModule, string gameType, string serverName, int maxPlayerCount, string map, string uniqueMapId, string gamePassword, string adminPassword, int port)`

**Purpose:** Handles logic related to `register custom game`.

### UpdateCustomGameData
`public void UpdateCustomGameData(string newGameType, string newMap, int newCount)`

**Purpose:** Updates the state or data of `custom game data`.

### ResponseCustomGameClientConnection
`public void ResponseCustomGameClientConnection(PlayerJoinGameResponseDataFromHost playerJoinData)`

**Purpose:** Handles logic related to `response custom game client connection`.

### AcceptPartyInvitation
`public void AcceptPartyInvitation()`

**Purpose:** Handles logic related to `accept party invitation`.

### DeclinePartyInvitation
`public void DeclinePartyInvitation()`

**Purpose:** Handles logic related to `decline party invitation`.

### AcceptPartyJoinRequest
`public void AcceptPartyJoinRequest(PlayerId playerId)`

**Purpose:** Handles logic related to `accept party join request`.

### DeclinePartyJoinRequest
`public void DeclinePartyJoinRequest(PlayerId playerId, PartyJoinDeclineReason reason)`

**Purpose:** Handles logic related to `decline party join request`.

### UpdateCharacter
`public void UpdateCharacter(BodyProperties bodyProperties, bool isFemale)`

**Purpose:** Updates the state or data of `character`.

### UpdateShownBadgeId
`public Task<bool> UpdateShownBadgeId(string shownBadgeId)`

**Purpose:** Updates the state or data of `shown badge id`.

### GetAnotherPlayerState
`public Task<AnotherPlayerData> GetAnotherPlayerState(PlayerId playerId)`

**Purpose:** Gets the current value of `another player state`.

### GetAnotherPlayerData
`public Task<PlayerData> GetAnotherPlayerData(PlayerId playerID)`

**Purpose:** Gets the current value of `another player data`.

### GetPlayerCountInQueue
`public Task<MatchmakingQueueStats> GetPlayerCountInQueue()`

**Purpose:** Gets the current value of `player count in queue`.

### GetOtherPlayersState
`public Task<List<ValueTuple<PlayerId, AnotherPlayerData>>> GetOtherPlayersState(List<PlayerId> players)`

**Purpose:** Gets the current value of `other players state`.

### GetMatchmakingWaitTimes
`public Task<MatchmakingWaitTimeStats> GetMatchmakingWaitTimes()`

**Purpose:** Gets the current value of `matchmaking wait times`.

### GetPlayerBadges
`public Task<Badge > GetPlayerBadges()`

**Purpose:** Gets the current value of `player badges`.

### GetPlayerStats
`public Task<PlayerStatsBase > GetPlayerStats(PlayerId playerID)`

**Purpose:** Gets the current value of `player stats`.

### GetGameTypeRankInfo
`public Task<GameTypeRankInfo > GetGameTypeRankInfo(PlayerId playerID)`

**Purpose:** Gets the current value of `game type rank info`.

### GetRankedLeaderboardCount
`public Task<int> GetRankedLeaderboardCount(string gameType)`

**Purpose:** Gets the current value of `ranked leaderboard count`.

### GetRankedLeaderboard
`public Task<PlayerLeaderboardData > GetRankedLeaderboard(string gameType, int startIndex, int count)`

**Purpose:** Gets the current value of `ranked leaderboard`.

### SendCreateClanMessage
`public void SendCreateClanMessage(string clanName, string clanTag, string clanFaction, string clanSigil)`

**Purpose:** Handles logic related to `send create clan message`.

### CanLogin
`public Task<bool> CanLogin()`

**Purpose:** Checks whether the current object can `login`.

### GetFriendList
`public void GetFriendList()`

**Purpose:** Gets the current value of `friend list`.

### AddFriend
`public void AddFriend(PlayerId friendId, bool dontUseNameForUnknownPlayer)`

**Purpose:** Adds `friend` to the current collection or state.

### RemoveFriend
`public void RemoveFriend(PlayerId friendId)`

**Purpose:** Removes `friend` from the current collection or state.

### RespondToFriendRequest
`public void RespondToFriendRequest(PlayerId playerId, bool dontUseNameForUnknownPlayer, bool isAccepted, bool isBlocked = false)`

**Purpose:** Handles logic related to `respond to friend request`.

### ReportPlayer
`public void ReportPlayer(string gameId, PlayerId player, string playerName, PlayerReportType type, string message)`

**Purpose:** Handles logic related to `report player`.

### ChangeUsername
`public void ChangeUsername(string username)`

**Purpose:** Handles logic related to `change username`.

### AddFriendByUsernameAndId
`public void AddFriendByUsernameAndId(string username, int userId, bool dontUseNameForUnknownPlayer)`

**Purpose:** Adds `friend by username and id` to the current collection or state.

### DoesPlayerWithUsernameAndIdExist
`public Task<bool> DoesPlayerWithUsernameAndIdExist(string username, int userId)`

**Purpose:** Handles logic related to `does player with username and id exist`.

### IsPlayerClanLeader
`public bool IsPlayerClanLeader(PlayerId playerID)`

**Purpose:** Handles logic related to `is player clan leader`.

### IsPlayerClanOfficer
`public bool IsPlayerClanOfficer(PlayerId playerID)`

**Purpose:** Handles logic related to `is player clan officer`.

### UpdateUsedCosmeticItems
`public Task<bool> UpdateUsedCosmeticItems( { "cosmeticId", "isEquipped" })`

**Purpose:** Updates the state or data of `used cosmetic items`.

### BuyCosmetic
`public Task<ValueTuple<bool, int>> BuyCosmetic(string cosmeticId)`

**Purpose:** Handles logic related to `buy cosmetic`.

### GetCosmeticsInfo
`public Task<ValueTuple<bool, List<string>, Dictionary<string, List<string>>>> GetCosmeticsInfo()`

**Purpose:** Gets the current value of `cosmetics info`.

### GetDedicatedCustomServerAuthToken
`public Task<string> GetDedicatedCustomServerAuthToken()`

**Purpose:** Gets the current value of `dedicated custom server auth token`.

### GetOfficialServerProviderName
`public Task<string> GetOfficialServerProviderName()`

**Purpose:** Gets the current value of `official server provider name`.

### GetPlayerBannerlordID
`public Task<string> GetPlayerBannerlordID(PlayerId playerId)`

**Purpose:** Gets the current value of `player bannerlord i d`.

### IsKnownPlayer
`public bool IsKnownPlayer(PlayerId playerID)`

**Purpose:** Handles logic related to `is known player`.

### GetPingToServer
`public Task<long> GetPingToServer(string IpAddress)`

**Purpose:** Gets the current value of `ping to server`.

### SendPSPlayerJoinedToPlayerSessionMessage
`public Task<bool> SendPSPlayerJoinedToPlayerSessionMessage(ulong inviterPlayerId)`

**Purpose:** Handles logic related to `send p s player joined to player session message`.

### SendPlatformPlayerJoinedToPlayerSessionMessage
`public Task<bool> SendPlatformPlayerJoinedToPlayerSessionMessage(PlayerId inviterPlayerId)`

**Purpose:** Handles logic related to `send platform player joined to player session message`.

## Usage Example

```csharp
var value = new LobbyClient();
value.Logout(logOutReason);
```

## See Also

- [Complete Class Catalog](../catalog)