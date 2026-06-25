---
title: "LobbyClient"
description: "Auto-generated class reference for LobbyClient."
---
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

**Purpose:** Executes the Logout logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.Logout(logOutReason);
```

### SetLoadedModules
`public void SetLoadedModules(string moduleIDs)`

**Purpose:** Assigns a new value to loaded modules and updates the object's internal state.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.SetLoadedModules("example");
```

### GetCustomGameServerList
`public Task<AvailableCustomGames> GetCustomGameServerList()`

**Purpose:** Reads and returns the custom game server list value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetCustomGameServerList();
```

### QuitFromCustomGame
`public void QuitFromCustomGame()`

**Purpose:** Executes the QuitFromCustomGame logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.QuitFromCustomGame();
```

### QuitFromMatchmakerGame
`public void QuitFromMatchmakerGame()`

**Purpose:** Executes the QuitFromMatchmakerGame logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.QuitFromMatchmakerGame();
```

### RequestJoinCustomGame
`public Task<bool> RequestJoinCustomGame(CustomBattleId serverId, string password, bool isJoinAsAdmin = false)`

**Purpose:** Executes the RequestJoinCustomGame logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.RequestJoinCustomGame(serverId, "example", false);
```

### RequestJoinPlayerParty
`public Task<bool> RequestJoinPlayerParty(PlayerId targetPlayer, bool inviteRequest)`

**Purpose:** Executes the RequestJoinPlayerParty logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.RequestJoinPlayerParty(targetPlayer, false);
```

### CancelFindGame
`public void CancelFindGame()`

**Purpose:** Checks whether the this instance meets the preconditions for cel find game.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.CancelFindGame();
```

### FindGame
`public void FindGame()`

**Purpose:** Looks up the matching game in the current collection or scope.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.FindGame();
```

### FindCustomGame
`public Task<bool> FindCustomGame(string selectedCustomGameTypes, bool? hasCrossplayPrivilege, string region)`

**Purpose:** Looks up the matching custom game in the current collection or scope.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.FindCustomGame("example", false, "example");
```

### Connect
`public Task<LobbyClientConnectResult> Connect(ILobbyClientSessionHandler lobbyClientSessionHandler, ILoginAccessProvider lobbyClientLoginAccessProvider, string overridenUserName, bool hasUserGeneratedContentPrivilege, PlatformInitParams initParams, Func<Task<bool>> preLoginTask)`

**Purpose:** Executes the Connect logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.Connect(lobbyClientSessionHandler, lobbyClientLoginAccessProvider, "example", false, initParams, preLoginTask);
```

### KickPlayer
`public void KickPlayer(PlayerId id, bool banPlayer)`

**Purpose:** Executes the KickPlayer logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.KickPlayer(id, false);
```

### ChangeRegion
`public void ChangeRegion(string region)`

**Purpose:** Executes the ChangeRegion logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.ChangeRegion("example");
```

### ChangeGameTypes
`public void ChangeGameTypes(string gameTypes)`

**Purpose:** Executes the ChangeGameTypes logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.ChangeGameTypes("example");
```

### OnConnected
`public override void OnConnected()`

**Purpose:** Invoked when the connected event is raised.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.OnConnected();
```

### OnCantConnect
`public override void OnCantConnect()`

**Purpose:** Invoked when the cant connect event is raised.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.OnCantConnect();
```

### OnDisconnected
`public override void OnDisconnected()`

**Purpose:** Invoked when the disconnected event is raised.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.OnDisconnected();
```

### RemoveLobbyClientHandler
`public void RemoveLobbyClientHandler()`

**Purpose:** Removes lobby client handler from the current collection or state.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.RemoveLobbyClientHandler();
```

### SendWhisper
`public void SendWhisper(string playerName, string message)`

**Purpose:** Executes the SendWhisper logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.SendWhisper("example", "example");
```

### FleeBattle
`public void FleeBattle()`

**Purpose:** Executes the FleeBattle logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.FleeBattle();
```

### SendPartyMessage
`public void SendPartyMessage(string message)`

**Purpose:** Executes the SendPartyMessage logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.SendPartyMessage("example");
```

### RejoinBattle
`public void RejoinBattle()`

**Purpose:** Executes the RejoinBattle logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.RejoinBattle();
```

### OnBattleResultsSeen
`public void OnBattleResultsSeen()`

**Purpose:** Invoked when the battle results seen event is raised.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.OnBattleResultsSeen();
```

### AcceptClanInvitation
`public void AcceptClanInvitation()`

**Purpose:** Executes the AcceptClanInvitation logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.AcceptClanInvitation();
```

### DeclineClanInvitation
`public void DeclineClanInvitation()`

**Purpose:** Executes the DeclineClanInvitation logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.DeclineClanInvitation();
```

### MarkNotificationAsRead
`public void MarkNotificationAsRead(int notificationID)`

**Purpose:** Executes the MarkNotificationAsRead logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.MarkNotificationAsRead(0);
```

### AcceptClanCreationRequest
`public void AcceptClanCreationRequest()`

**Purpose:** Executes the AcceptClanCreationRequest logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.AcceptClanCreationRequest();
```

### DeclineClanCreationRequest
`public void DeclineClanCreationRequest()`

**Purpose:** Executes the DeclineClanCreationRequest logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.DeclineClanCreationRequest();
```

### PromoteToClanLeader
`public void PromoteToClanLeader(PlayerId playerId, bool dontUseNameForUnknownPlayer)`

**Purpose:** Executes the PromoteToClanLeader logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.PromoteToClanLeader(playerId, false);
```

### KickFromClan
`public void KickFromClan(PlayerId playerId)`

**Purpose:** Executes the KickFromClan logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.KickFromClan(playerId);
```

### ClanNameExists
`public Task<CheckClanParameterValidResult> ClanNameExists(string clanName)`

**Purpose:** Executes the ClanNameExists logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.ClanNameExists("example");
```

### ClanTagExists
`public Task<CheckClanParameterValidResult> ClanTagExists(string clanTag)`

**Purpose:** Executes the ClanTagExists logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.ClanTagExists("example");
```

### GetClanHomeInfo
`public Task<ClanHomeInfo> GetClanHomeInfo()`

**Purpose:** Reads and returns the clan home info value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetClanHomeInfo();
```

### JoinChannel
`public void JoinChannel(ChatChannelType channel)`

**Purpose:** Joins several channel items into a single whole.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.JoinChannel(channel);
```

### AssignAsClanOfficer
`public void AssignAsClanOfficer(PlayerId playerId, bool dontUseNameForUnknownPlayer)`

**Purpose:** Executes the AssignAsClanOfficer logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.AssignAsClanOfficer(playerId, false);
```

### RemoveClanOfficerRoleForPlayer
`public void RemoveClanOfficerRoleForPlayer(PlayerId playerId)`

**Purpose:** Removes clan officer role for player from the current collection or state.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.RemoveClanOfficerRoleForPlayer(playerId);
```

### LeaveChannel
`public void LeaveChannel(ChatChannelType channel)`

**Purpose:** Executes the LeaveChannel logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.LeaveChannel(channel);
```

### GetClanLeaderboardInfo
`public Task<ClanLeaderboardInfo> GetClanLeaderboardInfo()`

**Purpose:** Reads and returns the clan leaderboard info value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetClanLeaderboardInfo();
```

### GetPlayerClanInfo
`public Task<ClanInfo> GetPlayerClanInfo(PlayerId playerId)`

**Purpose:** Reads and returns the player clan info value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetPlayerClanInfo(playerId);
```

### SendClanMessage
`public void SendClanMessage(string message)`

**Purpose:** Executes the SendClanMessage logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.SendClanMessage("example");
```

### GetPremadeGameList
`public Task<PremadeGameList> GetPremadeGameList()`

**Purpose:** Reads and returns the premade game list value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetPremadeGameList();
```

### GetAvailableScenes
`public Task<AvailableScenes> GetAvailableScenes()`

**Purpose:** Reads and returns the available scenes value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetAvailableScenes();
```

### GetLobbyNews
`public Task<PublishedLobbyNewsArticle > GetLobbyNews()`

**Purpose:** Reads and returns the lobby news value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetLobbyNews();
```

### SetClanInformationText
`public void SetClanInformationText(string informationText)`

**Purpose:** Assigns a new value to clan information text and updates the object's internal state.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.SetClanInformationText("example");
```

### AddClanAnnouncement
`public void AddClanAnnouncement(string announcement)`

**Purpose:** Adds clan announcement to the current collection or state.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.AddClanAnnouncement("example");
```

### EditClanAnnouncement
`public void EditClanAnnouncement(int announcementId, string text)`

**Purpose:** Executes the EditClanAnnouncement logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.EditClanAnnouncement(0, "example");
```

### RemoveClanAnnouncement
`public void RemoveClanAnnouncement(int announcementId)`

**Purpose:** Removes clan announcement from the current collection or state.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.RemoveClanAnnouncement(0);
```

### ChangeClanFaction
`public void ChangeClanFaction(string faction)`

**Purpose:** Executes the ChangeClanFaction logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.ChangeClanFaction("example");
```

### ChangeClanSigil
`public void ChangeClanSigil(string sigil)`

**Purpose:** Executes the ChangeClanSigil logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.ChangeClanSigil("example");
```

### DestroyClan
`public void DestroyClan()`

**Purpose:** Executes the DestroyClan logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.DestroyClan();
```

### InviteToClan
`public void InviteToClan(PlayerId invitedPlayerId, bool dontUseNameForUnknownPlayer)`

**Purpose:** Executes the InviteToClan logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.InviteToClan(invitedPlayerId, false);
```

### CreatePremadeGame
`public void CreatePremadeGame(string name, string gameType, string mapName, string factionA, string factionB, string password, PremadeGameType premadeGameType)`

**Purpose:** Constructs a new premade game entity and returns it to the caller.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.CreatePremadeGame("example", "example", "example", "example", "example", "example", premadeGameType);
```

### CancelCreatingPremadeGame
`public void CancelCreatingPremadeGame()`

**Purpose:** Checks whether the this instance meets the preconditions for cel creating premade game.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.CancelCreatingPremadeGame();
```

### RequestToJoinPremadeGame
`public void RequestToJoinPremadeGame(Guid gameId, string password)`

**Purpose:** Executes the RequestToJoinPremadeGame logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.RequestToJoinPremadeGame(gameId, "example");
```

### AcceptJoinPremadeGameRequest
`public void AcceptJoinPremadeGameRequest(Guid partyId)`

**Purpose:** Executes the AcceptJoinPremadeGameRequest logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.AcceptJoinPremadeGameRequest(partyId);
```

### DeclineJoinPremadeGameRequest
`public void DeclineJoinPremadeGameRequest(Guid partyId)`

**Purpose:** Executes the DeclineJoinPremadeGameRequest logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.DeclineJoinPremadeGameRequest(partyId);
```

### InviteToParty
`public void InviteToParty(PlayerId playerId, bool dontUseNameForUnknownPlayer)`

**Purpose:** Executes the InviteToParty logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.InviteToParty(playerId, false);
```

### DisbandParty
`public void DisbandParty()`

**Purpose:** Executes the DisbandParty logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.DisbandParty();
```

### KickPlayerFromParty
`public void KickPlayerFromParty(PlayerId playerId)`

**Purpose:** Executes the KickPlayerFromParty logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.KickPlayerFromParty(playerId);
```

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string name)`

**Purpose:** Invoked when the player name updated event is raised.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.OnPlayerNameUpdated("example");
```

### ToggleUseClanSigil
`public void ToggleUseClanSigil(bool isUsed)`

**Purpose:** Executes the ToggleUseClanSigil logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.ToggleUseClanSigil(false);
```

### PromotePlayerToPartyLeader
`public void PromotePlayerToPartyLeader(PlayerId playerId)`

**Purpose:** Executes the PromotePlayerToPartyLeader logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.PromotePlayerToPartyLeader(playerId);
```

### ChangeSigil
`public void ChangeSigil(string sigilId)`

**Purpose:** Executes the ChangeSigil logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.ChangeSigil("example");
```

### InviteToPlatformSession
`public Task<bool> InviteToPlatformSession(PlayerId playerId)`

**Purpose:** Executes the InviteToPlatformSession logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.InviteToPlatformSession(playerId);
```

### EndCustomGame
`public void EndCustomGame()`

**Purpose:** Executes the EndCustomGame logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.EndCustomGame();
```

### RegisterCustomGame
`public void RegisterCustomGame(string gameModule, string gameType, string serverName, int maxPlayerCount, string map, string uniqueMapId, string gamePassword, string adminPassword, int port)`

**Purpose:** Registers custom game with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.RegisterCustomGame("example", "example", "example", 0, "example", "example", "example", "example", 0);
```

### UpdateCustomGameData
`public void UpdateCustomGameData(string newGameType, string newMap, int newCount)`

**Purpose:** Recalculates and stores the latest representation of custom game data.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.UpdateCustomGameData("example", "example", 0);
```

### ResponseCustomGameClientConnection
`public void ResponseCustomGameClientConnection(PlayerJoinGameResponseDataFromHost playerJoinData)`

**Purpose:** Executes the ResponseCustomGameClientConnection logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.ResponseCustomGameClientConnection(playerJoinData);
```

### AcceptPartyInvitation
`public void AcceptPartyInvitation()`

**Purpose:** Executes the AcceptPartyInvitation logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.AcceptPartyInvitation();
```

### DeclinePartyInvitation
`public void DeclinePartyInvitation()`

**Purpose:** Executes the DeclinePartyInvitation logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.DeclinePartyInvitation();
```

### AcceptPartyJoinRequest
`public void AcceptPartyJoinRequest(PlayerId playerId)`

**Purpose:** Executes the AcceptPartyJoinRequest logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.AcceptPartyJoinRequest(playerId);
```

### DeclinePartyJoinRequest
`public void DeclinePartyJoinRequest(PlayerId playerId, PartyJoinDeclineReason reason)`

**Purpose:** Executes the DeclinePartyJoinRequest logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.DeclinePartyJoinRequest(playerId, reason);
```

### UpdateCharacter
`public void UpdateCharacter(BodyProperties bodyProperties, bool isFemale)`

**Purpose:** Recalculates and stores the latest representation of character.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.UpdateCharacter(bodyProperties, false);
```

### UpdateShownBadgeId
`public Task<bool> UpdateShownBadgeId(string shownBadgeId)`

**Purpose:** Recalculates and stores the latest representation of shown badge id.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.UpdateShownBadgeId("example");
```

### GetAnotherPlayerState
`public Task<AnotherPlayerData> GetAnotherPlayerState(PlayerId playerId)`

**Purpose:** Reads and returns the another player state value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetAnotherPlayerState(playerId);
```

### GetAnotherPlayerData
`public Task<PlayerData> GetAnotherPlayerData(PlayerId playerID)`

**Purpose:** Reads and returns the another player data value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetAnotherPlayerData(playerID);
```

### GetPlayerCountInQueue
`public Task<MatchmakingQueueStats> GetPlayerCountInQueue()`

**Purpose:** Reads and returns the player count in queue value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetPlayerCountInQueue();
```

### GetOtherPlayersState
`public Task<List<ValueTuple<PlayerId, AnotherPlayerData>>> GetOtherPlayersState(List<PlayerId> players)`

**Purpose:** Reads and returns the other players state value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetOtherPlayersState(players);
```

### GetMatchmakingWaitTimes
`public Task<MatchmakingWaitTimeStats> GetMatchmakingWaitTimes()`

**Purpose:** Reads and returns the matchmaking wait times value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetMatchmakingWaitTimes();
```

### GetPlayerBadges
`public Task<Badge > GetPlayerBadges()`

**Purpose:** Reads and returns the player badges value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetPlayerBadges();
```

### GetPlayerStats
`public Task<PlayerStatsBase > GetPlayerStats(PlayerId playerID)`

**Purpose:** Reads and returns the player stats value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetPlayerStats(playerID);
```

### GetGameTypeRankInfo
`public Task<GameTypeRankInfo > GetGameTypeRankInfo(PlayerId playerID)`

**Purpose:** Reads and returns the game type rank info value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetGameTypeRankInfo(playerID);
```

### GetRankedLeaderboardCount
`public Task<int> GetRankedLeaderboardCount(string gameType)`

**Purpose:** Reads and returns the ranked leaderboard count value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetRankedLeaderboardCount("example");
```

### GetRankedLeaderboard
`public Task<PlayerLeaderboardData > GetRankedLeaderboard(string gameType, int startIndex, int count)`

**Purpose:** Reads and returns the ranked leaderboard value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetRankedLeaderboard("example", 0, 0);
```

### SendCreateClanMessage
`public void SendCreateClanMessage(string clanName, string clanTag, string clanFaction, string clanSigil)`

**Purpose:** Executes the SendCreateClanMessage logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.SendCreateClanMessage("example", "example", "example", "example");
```

### CanLogin
`public Task<bool> CanLogin()`

**Purpose:** Checks whether the this instance meets the preconditions for login.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.CanLogin();
```

### GetFriendList
`public void GetFriendList()`

**Purpose:** Reads and returns the friend list value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.GetFriendList();
```

### AddFriend
`public void AddFriend(PlayerId friendId, bool dontUseNameForUnknownPlayer)`

**Purpose:** Adds friend to the current collection or state.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.AddFriend(friendId, false);
```

### RemoveFriend
`public void RemoveFriend(PlayerId friendId)`

**Purpose:** Removes friend from the current collection or state.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.RemoveFriend(friendId);
```

### RespondToFriendRequest
`public void RespondToFriendRequest(PlayerId playerId, bool dontUseNameForUnknownPlayer, bool isAccepted, bool isBlocked = false)`

**Purpose:** Executes the RespondToFriendRequest logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.RespondToFriendRequest(playerId, false, false, false);
```

### ReportPlayer
`public void ReportPlayer(string gameId, PlayerId player, string playerName, PlayerReportType type, string message)`

**Purpose:** Executes the ReportPlayer logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.ReportPlayer("example", player, "example", type, "example");
```

### ChangeUsername
`public void ChangeUsername(string username)`

**Purpose:** Executes the ChangeUsername logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.ChangeUsername("example");
```

### AddFriendByUsernameAndId
`public void AddFriendByUsernameAndId(string username, int userId, bool dontUseNameForUnknownPlayer)`

**Purpose:** Adds friend by username and id to the current collection or state.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
lobbyClient.AddFriendByUsernameAndId("example", 0, false);
```

### DoesPlayerWithUsernameAndIdExist
`public Task<bool> DoesPlayerWithUsernameAndIdExist(string username, int userId)`

**Purpose:** Returns a boolean answer to whether player with username and id exist is true for the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.DoesPlayerWithUsernameAndIdExist("example", 0);
```

### IsPlayerClanLeader
`public bool IsPlayerClanLeader(PlayerId playerID)`

**Purpose:** Determines whether the this instance is in the player clan leader state or condition.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.IsPlayerClanLeader(playerID);
```

### IsPlayerClanOfficer
`public bool IsPlayerClanOfficer(PlayerId playerID)`

**Purpose:** Determines whether the this instance is in the player clan officer state or condition.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.IsPlayerClanOfficer(playerID);
```

### UpdateUsedCosmeticItems
`public Task<bool> UpdateUsedCosmeticItems( { "cosmeticId", "isEquipped" })`

**Purpose:** Recalculates and stores the latest representation of used cosmetic items.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.UpdateUsedCosmeticItems("cosmeticId", });
```

### BuyCosmetic
`public Task<ValueTuple<bool, int>> BuyCosmetic(string cosmeticId)`

**Purpose:** Executes the BuyCosmetic logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.BuyCosmetic("example");
```

### GetCosmeticsInfo
`public Task<ValueTuple<bool, List<string>, Dictionary<string, List<string>>>> GetCosmeticsInfo()`

**Purpose:** Reads and returns the cosmetics info value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetCosmeticsInfo();
```

### GetDedicatedCustomServerAuthToken
`public Task<string> GetDedicatedCustomServerAuthToken()`

**Purpose:** Reads and returns the dedicated custom server auth token value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetDedicatedCustomServerAuthToken();
```

### GetOfficialServerProviderName
`public Task<string> GetOfficialServerProviderName()`

**Purpose:** Reads and returns the official server provider name value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetOfficialServerProviderName();
```

### GetPlayerBannerlordID
`public Task<string> GetPlayerBannerlordID(PlayerId playerId)`

**Purpose:** Reads and returns the player bannerlord i d value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetPlayerBannerlordID(playerId);
```

### IsKnownPlayer
`public bool IsKnownPlayer(PlayerId playerID)`

**Purpose:** Determines whether the this instance is in the known player state or condition.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.IsKnownPlayer(playerID);
```

### GetPingToServer
`public Task<long> GetPingToServer(string IpAddress)`

**Purpose:** Reads and returns the ping to server value held by the this instance.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetPingToServer("example");
```

### SendPSPlayerJoinedToPlayerSessionMessage
`public Task<bool> SendPSPlayerJoinedToPlayerSessionMessage(ulong inviterPlayerId)`

**Purpose:** Executes the SendPSPlayerJoinedToPlayerSessionMessage logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.SendPSPlayerJoinedToPlayerSessionMessage(0);
```

### SendPlatformPlayerJoinedToPlayerSessionMessage
`public Task<bool> SendPlatformPlayerJoinedToPlayerSessionMessage(PlayerId inviterPlayerId)`

**Purpose:** Executes the SendPlatformPlayerJoinedToPlayerSessionMessage logic.

```csharp
// Obtain an instance of LobbyClient from the subsystem API first
LobbyClient lobbyClient = ...;
var result = lobbyClient.SendPlatformPlayerJoinedToPlayerSessionMessage(inviterPlayerId);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LobbyClient lobbyClient = ...;
lobbyClient.Logout(logOutReason);
```

## See Also

- [Area Index](../)