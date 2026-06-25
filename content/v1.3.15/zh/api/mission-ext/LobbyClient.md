---
title: "LobbyClient"
description: "LobbyClient 的自动生成类参考。"
---
# LobbyClient

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyClient : Client<LobbyClient>`
**Base:** `Client<LobbyClient>`
**File:** `TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs`

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

## 主要方法

### Logout
`public void Logout(TextObject logOutReason)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.Logout(logOutReason);
```

### SetLoadedModules
`public void SetLoadedModules(string moduleIDs)`

**用途 / Purpose:** 为 「loaded modules」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.SetLoadedModules("example");
```

### GetCustomGameServerList
`public Task<AvailableCustomGames> GetCustomGameServerList()`

**用途 / Purpose:** 读取并返回当前对象中 「custom game server list」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetCustomGameServerList();
```

### QuitFromCustomGame
`public void QuitFromCustomGame()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.QuitFromCustomGame();
```

### QuitFromMatchmakerGame
`public void QuitFromMatchmakerGame()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.QuitFromMatchmakerGame();
```

### RequestJoinCustomGame
`public Task<bool> RequestJoinCustomGame(CustomBattleId serverId, string password, bool isJoinAsAdmin = false)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.RequestJoinCustomGame(serverId, "example", false);
```

### RequestJoinPlayerParty
`public Task<bool> RequestJoinPlayerParty(PlayerId targetPlayer, bool inviteRequest)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.RequestJoinPlayerParty(targetPlayer, false);
```

### CancelFindGame
`public void CancelFindGame()`

**用途 / Purpose:** 检查当前对象是否满足 「cel find game」 的前置条件。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.CancelFindGame();
```

### FindGame
`public void FindGame()`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「game」。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.FindGame();
```

### FindCustomGame
`public Task<bool> FindCustomGame(string selectedCustomGameTypes, bool? hasCrossplayPrivilege, string region)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「custom game」。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.FindCustomGame("example", false, "example");
```

### Connect
`public Task<LobbyClientConnectResult> Connect(ILobbyClientSessionHandler lobbyClientSessionHandler, ILoginAccessProvider lobbyClientLoginAccessProvider, string overridenUserName, bool hasUserGeneratedContentPrivilege, PlatformInitParams initParams, Func<Task<bool>> preLoginTask)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.Connect(lobbyClientSessionHandler, lobbyClientLoginAccessProvider, "example", false, initParams, preLoginTask);
```

### KickPlayer
`public void KickPlayer(PlayerId id, bool banPlayer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.KickPlayer(id, false);
```

### ChangeRegion
`public void ChangeRegion(string region)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.ChangeRegion("example");
```

### ChangeGameTypes
`public void ChangeGameTypes(string gameTypes)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.ChangeGameTypes("example");
```

### OnConnected
`public override void OnConnected()`

**用途 / Purpose:** 在 「connected」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.OnConnected();
```

### OnCantConnect
`public override void OnCantConnect()`

**用途 / Purpose:** 在 「cant connect」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.OnCantConnect();
```

### OnDisconnected
`public override void OnDisconnected()`

**用途 / Purpose:** 在 「disconnected」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.OnDisconnected();
```

### RemoveLobbyClientHandler
`public void RemoveLobbyClientHandler()`

**用途 / Purpose:** 从当前容器或状态中移除 「lobby client handler」。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.RemoveLobbyClientHandler();
```

### SendWhisper
`public void SendWhisper(string playerName, string message)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.SendWhisper("example", "example");
```

### FleeBattle
`public void FleeBattle()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.FleeBattle();
```

### SendPartyMessage
`public void SendPartyMessage(string message)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.SendPartyMessage("example");
```

### RejoinBattle
`public void RejoinBattle()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.RejoinBattle();
```

### OnBattleResultsSeen
`public void OnBattleResultsSeen()`

**用途 / Purpose:** 在 「battle results seen」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.OnBattleResultsSeen();
```

### AcceptClanInvitation
`public void AcceptClanInvitation()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.AcceptClanInvitation();
```

### DeclineClanInvitation
`public void DeclineClanInvitation()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.DeclineClanInvitation();
```

### MarkNotificationAsRead
`public void MarkNotificationAsRead(int notificationID)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.MarkNotificationAsRead(0);
```

### AcceptClanCreationRequest
`public void AcceptClanCreationRequest()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.AcceptClanCreationRequest();
```

### DeclineClanCreationRequest
`public void DeclineClanCreationRequest()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.DeclineClanCreationRequest();
```

### PromoteToClanLeader
`public void PromoteToClanLeader(PlayerId playerId, bool dontUseNameForUnknownPlayer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.PromoteToClanLeader(playerId, false);
```

### KickFromClan
`public void KickFromClan(PlayerId playerId)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.KickFromClan(playerId);
```

### ClanNameExists
`public Task<CheckClanParameterValidResult> ClanNameExists(string clanName)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.ClanNameExists("example");
```

### ClanTagExists
`public Task<CheckClanParameterValidResult> ClanTagExists(string clanTag)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.ClanTagExists("example");
```

### GetClanHomeInfo
`public Task<ClanHomeInfo> GetClanHomeInfo()`

**用途 / Purpose:** 读取并返回当前对象中 「clan home info」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetClanHomeInfo();
```

### JoinChannel
`public void JoinChannel(ChatChannelType channel)`

**用途 / Purpose:** 把若干「channel」连接成一个整体。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.JoinChannel(channel);
```

### AssignAsClanOfficer
`public void AssignAsClanOfficer(PlayerId playerId, bool dontUseNameForUnknownPlayer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.AssignAsClanOfficer(playerId, false);
```

### RemoveClanOfficerRoleForPlayer
`public void RemoveClanOfficerRoleForPlayer(PlayerId playerId)`

**用途 / Purpose:** 从当前容器或状态中移除 「clan officer role for player」。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.RemoveClanOfficerRoleForPlayer(playerId);
```

### LeaveChannel
`public void LeaveChannel(ChatChannelType channel)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.LeaveChannel(channel);
```

### GetClanLeaderboardInfo
`public Task<ClanLeaderboardInfo> GetClanLeaderboardInfo()`

**用途 / Purpose:** 读取并返回当前对象中 「clan leaderboard info」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetClanLeaderboardInfo();
```

### GetPlayerClanInfo
`public Task<ClanInfo> GetPlayerClanInfo(PlayerId playerId)`

**用途 / Purpose:** 读取并返回当前对象中 「player clan info」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetPlayerClanInfo(playerId);
```

### SendClanMessage
`public void SendClanMessage(string message)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.SendClanMessage("example");
```

### GetPremadeGameList
`public Task<PremadeGameList> GetPremadeGameList()`

**用途 / Purpose:** 读取并返回当前对象中 「premade game list」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetPremadeGameList();
```

### GetAvailableScenes
`public Task<AvailableScenes> GetAvailableScenes()`

**用途 / Purpose:** 读取并返回当前对象中 「available scenes」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetAvailableScenes();
```

### GetLobbyNews
`public Task<PublishedLobbyNewsArticle > GetLobbyNews()`

**用途 / Purpose:** 读取并返回当前对象中 「lobby news」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetLobbyNews();
```

### SetClanInformationText
`public void SetClanInformationText(string informationText)`

**用途 / Purpose:** 为 「clan information text」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.SetClanInformationText("example");
```

### AddClanAnnouncement
`public void AddClanAnnouncement(string announcement)`

**用途 / Purpose:** 将 「clan announcement」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.AddClanAnnouncement("example");
```

### EditClanAnnouncement
`public void EditClanAnnouncement(int announcementId, string text)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.EditClanAnnouncement(0, "example");
```

### RemoveClanAnnouncement
`public void RemoveClanAnnouncement(int announcementId)`

**用途 / Purpose:** 从当前容器或状态中移除 「clan announcement」。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.RemoveClanAnnouncement(0);
```

### ChangeClanFaction
`public void ChangeClanFaction(string faction)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.ChangeClanFaction("example");
```

### ChangeClanSigil
`public void ChangeClanSigil(string sigil)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.ChangeClanSigil("example");
```

### DestroyClan
`public void DestroyClan()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.DestroyClan();
```

### InviteToClan
`public void InviteToClan(PlayerId invitedPlayerId, bool dontUseNameForUnknownPlayer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.InviteToClan(invitedPlayerId, false);
```

### CreatePremadeGame
`public void CreatePremadeGame(string name, string gameType, string mapName, string factionA, string factionB, string password, PremadeGameType premadeGameType)`

**用途 / Purpose:** 构建一个新的 「premade game」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.CreatePremadeGame("example", "example", "example", "example", "example", "example", premadeGameType);
```

### CancelCreatingPremadeGame
`public void CancelCreatingPremadeGame()`

**用途 / Purpose:** 检查当前对象是否满足 「cel creating premade game」 的前置条件。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.CancelCreatingPremadeGame();
```

### RequestToJoinPremadeGame
`public void RequestToJoinPremadeGame(Guid gameId, string password)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.RequestToJoinPremadeGame(gameId, "example");
```

### AcceptJoinPremadeGameRequest
`public void AcceptJoinPremadeGameRequest(Guid partyId)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.AcceptJoinPremadeGameRequest(partyId);
```

### DeclineJoinPremadeGameRequest
`public void DeclineJoinPremadeGameRequest(Guid partyId)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.DeclineJoinPremadeGameRequest(partyId);
```

### InviteToParty
`public void InviteToParty(PlayerId playerId, bool dontUseNameForUnknownPlayer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.InviteToParty(playerId, false);
```

### DisbandParty
`public void DisbandParty()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.DisbandParty();
```

### KickPlayerFromParty
`public void KickPlayerFromParty(PlayerId playerId)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.KickPlayerFromParty(playerId);
```

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string name)`

**用途 / Purpose:** 在 「player name updated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.OnPlayerNameUpdated("example");
```

### ToggleUseClanSigil
`public void ToggleUseClanSigil(bool isUsed)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.ToggleUseClanSigil(false);
```

### PromotePlayerToPartyLeader
`public void PromotePlayerToPartyLeader(PlayerId playerId)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.PromotePlayerToPartyLeader(playerId);
```

### ChangeSigil
`public void ChangeSigil(string sigilId)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.ChangeSigil("example");
```

### InviteToPlatformSession
`public Task<bool> InviteToPlatformSession(PlayerId playerId)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.InviteToPlatformSession(playerId);
```

### EndCustomGame
`public void EndCustomGame()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.EndCustomGame();
```

### RegisterCustomGame
`public void RegisterCustomGame(string gameModule, string gameType, string serverName, int maxPlayerCount, string map, string uniqueMapId, string gamePassword, string adminPassword, int port)`

**用途 / Purpose:** 将「custom game」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.RegisterCustomGame("example", "example", "example", 0, "example", "example", "example", "example", 0);
```

### UpdateCustomGameData
`public void UpdateCustomGameData(string newGameType, string newMap, int newCount)`

**用途 / Purpose:** 重新计算并更新 「custom game data」 的最新表示。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.UpdateCustomGameData("example", "example", 0);
```

### ResponseCustomGameClientConnection
`public void ResponseCustomGameClientConnection(PlayerJoinGameResponseDataFromHost playerJoinData)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.ResponseCustomGameClientConnection(playerJoinData);
```

### AcceptPartyInvitation
`public void AcceptPartyInvitation()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.AcceptPartyInvitation();
```

### DeclinePartyInvitation
`public void DeclinePartyInvitation()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.DeclinePartyInvitation();
```

### AcceptPartyJoinRequest
`public void AcceptPartyJoinRequest(PlayerId playerId)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.AcceptPartyJoinRequest(playerId);
```

### DeclinePartyJoinRequest
`public void DeclinePartyJoinRequest(PlayerId playerId, PartyJoinDeclineReason reason)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.DeclinePartyJoinRequest(playerId, reason);
```

### UpdateCharacter
`public void UpdateCharacter(BodyProperties bodyProperties, bool isFemale)`

**用途 / Purpose:** 重新计算并更新 「character」 的最新表示。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.UpdateCharacter(bodyProperties, false);
```

### UpdateShownBadgeId
`public Task<bool> UpdateShownBadgeId(string shownBadgeId)`

**用途 / Purpose:** 重新计算并更新 「shown badge id」 的最新表示。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.UpdateShownBadgeId("example");
```

### GetAnotherPlayerState
`public Task<AnotherPlayerData> GetAnotherPlayerState(PlayerId playerId)`

**用途 / Purpose:** 读取并返回当前对象中 「another player state」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetAnotherPlayerState(playerId);
```

### GetAnotherPlayerData
`public Task<PlayerData> GetAnotherPlayerData(PlayerId playerID)`

**用途 / Purpose:** 读取并返回当前对象中 「another player data」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetAnotherPlayerData(playerID);
```

### GetPlayerCountInQueue
`public Task<MatchmakingQueueStats> GetPlayerCountInQueue()`

**用途 / Purpose:** 读取并返回当前对象中 「player count in queue」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetPlayerCountInQueue();
```

### GetOtherPlayersState
`public Task<List<ValueTuple<PlayerId, AnotherPlayerData>>> GetOtherPlayersState(List<PlayerId> players)`

**用途 / Purpose:** 读取并返回当前对象中 「other players state」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetOtherPlayersState(players);
```

### GetMatchmakingWaitTimes
`public Task<MatchmakingWaitTimeStats> GetMatchmakingWaitTimes()`

**用途 / Purpose:** 读取并返回当前对象中 「matchmaking wait times」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetMatchmakingWaitTimes();
```

### GetPlayerBadges
`public Task<Badge > GetPlayerBadges()`

**用途 / Purpose:** 读取并返回当前对象中 「player badges」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetPlayerBadges();
```

### GetPlayerStats
`public Task<PlayerStatsBase > GetPlayerStats(PlayerId playerID)`

**用途 / Purpose:** 读取并返回当前对象中 「player stats」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetPlayerStats(playerID);
```

### GetGameTypeRankInfo
`public Task<GameTypeRankInfo > GetGameTypeRankInfo(PlayerId playerID)`

**用途 / Purpose:** 读取并返回当前对象中 「game type rank info」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetGameTypeRankInfo(playerID);
```

### GetRankedLeaderboardCount
`public Task<int> GetRankedLeaderboardCount(string gameType)`

**用途 / Purpose:** 读取并返回当前对象中 「ranked leaderboard count」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetRankedLeaderboardCount("example");
```

### GetRankedLeaderboard
`public Task<PlayerLeaderboardData > GetRankedLeaderboard(string gameType, int startIndex, int count)`

**用途 / Purpose:** 读取并返回当前对象中 「ranked leaderboard」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetRankedLeaderboard("example", 0, 0);
```

### SendCreateClanMessage
`public void SendCreateClanMessage(string clanName, string clanTag, string clanFaction, string clanSigil)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.SendCreateClanMessage("example", "example", "example", "example");
```

### CanLogin
`public Task<bool> CanLogin()`

**用途 / Purpose:** 检查当前对象是否满足 「login」 的前置条件。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.CanLogin();
```

### GetFriendList
`public void GetFriendList()`

**用途 / Purpose:** 读取并返回当前对象中 「friend list」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.GetFriendList();
```

### AddFriend
`public void AddFriend(PlayerId friendId, bool dontUseNameForUnknownPlayer)`

**用途 / Purpose:** 将 「friend」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.AddFriend(friendId, false);
```

### RemoveFriend
`public void RemoveFriend(PlayerId friendId)`

**用途 / Purpose:** 从当前容器或状态中移除 「friend」。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.RemoveFriend(friendId);
```

### RespondToFriendRequest
`public void RespondToFriendRequest(PlayerId playerId, bool dontUseNameForUnknownPlayer, bool isAccepted, bool isBlocked = false)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.RespondToFriendRequest(playerId, false, false, false);
```

### ReportPlayer
`public void ReportPlayer(string gameId, PlayerId player, string playerName, PlayerReportType type, string message)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.ReportPlayer("example", player, "example", type, "example");
```

### ChangeUsername
`public void ChangeUsername(string username)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.ChangeUsername("example");
```

### AddFriendByUsernameAndId
`public void AddFriendByUsernameAndId(string username, int userId, bool dontUseNameForUnknownPlayer)`

**用途 / Purpose:** 将 「friend by username and id」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
lobbyClient.AddFriendByUsernameAndId("example", 0, false);
```

### DoesPlayerWithUsernameAndIdExist
`public Task<bool> DoesPlayerWithUsernameAndIdExist(string username, int userId)`

**用途 / Purpose:** 返回「player with username and id exist」对当前对象是否成立的布尔结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.DoesPlayerWithUsernameAndIdExist("example", 0);
```

### IsPlayerClanLeader
`public bool IsPlayerClanLeader(PlayerId playerID)`

**用途 / Purpose:** 判断当前对象是否处于 「player clan leader」 状态或条件。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.IsPlayerClanLeader(playerID);
```

### IsPlayerClanOfficer
`public bool IsPlayerClanOfficer(PlayerId playerID)`

**用途 / Purpose:** 判断当前对象是否处于 「player clan officer」 状态或条件。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.IsPlayerClanOfficer(playerID);
```

### UpdateUsedCosmeticItems
`public Task<bool> UpdateUsedCosmeticItems( { "cosmeticId", "isEquipped" })`

**用途 / Purpose:** 重新计算并更新 「used cosmetic items」 的最新表示。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.UpdateUsedCosmeticItems("cosmeticId", });
```

### BuyCosmetic
`public Task<ValueTuple<bool, int>> BuyCosmetic(string cosmeticId)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.BuyCosmetic("example");
```

### GetCosmeticsInfo
`public Task<ValueTuple<bool, List<string>, Dictionary<string, List<string>>>> GetCosmeticsInfo()`

**用途 / Purpose:** 读取并返回当前对象中 「cosmetics info」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetCosmeticsInfo();
```

### GetDedicatedCustomServerAuthToken
`public Task<string> GetDedicatedCustomServerAuthToken()`

**用途 / Purpose:** 读取并返回当前对象中 「dedicated custom server auth token」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetDedicatedCustomServerAuthToken();
```

### GetOfficialServerProviderName
`public Task<string> GetOfficialServerProviderName()`

**用途 / Purpose:** 读取并返回当前对象中 「official server provider name」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetOfficialServerProviderName();
```

### GetPlayerBannerlordID
`public Task<string> GetPlayerBannerlordID(PlayerId playerId)`

**用途 / Purpose:** 读取并返回当前对象中 「player bannerlord i d」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetPlayerBannerlordID(playerId);
```

### IsKnownPlayer
`public bool IsKnownPlayer(PlayerId playerID)`

**用途 / Purpose:** 判断当前对象是否处于 「known player」 状态或条件。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.IsKnownPlayer(playerID);
```

### GetPingToServer
`public Task<long> GetPingToServer(string IpAddress)`

**用途 / Purpose:** 读取并返回当前对象中 「ping to server」 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.GetPingToServer("example");
```

### SendPSPlayerJoinedToPlayerSessionMessage
`public Task<bool> SendPSPlayerJoinedToPlayerSessionMessage(ulong inviterPlayerId)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.SendPSPlayerJoinedToPlayerSessionMessage(0);
```

### SendPlatformPlayerJoinedToPlayerSessionMessage
`public Task<bool> SendPlatformPlayerJoinedToPlayerSessionMessage(PlayerId inviterPlayerId)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LobbyClient 实例
LobbyClient lobbyClient = ...;
var result = lobbyClient.SendPlatformPlayerJoinedToPlayerSessionMessage(inviterPlayerId);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LobbyClient lobbyClient = ...;
lobbyClient.Logout(logOutReason);
```

## 参见

- [本区域目录](../)