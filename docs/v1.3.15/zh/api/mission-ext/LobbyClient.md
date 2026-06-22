<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LobbyClient`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LobbyClient

**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`LobbyClient` 是 `TaleWorlds.MountAndBlade.Diamond` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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


## 主要方法

### Logout

```csharp
public void Logout(TextObject logOutReason)
```

### SetLoadedModules

```csharp
public void SetLoadedModules(string moduleIDs)
```

### GetCustomGameServerList

```csharp
public Task<AvailableCustomGames> GetCustomGameServerList()
```

### QuitFromCustomGame

```csharp
public void QuitFromCustomGame()
```

### QuitFromMatchmakerGame

```csharp
public void QuitFromMatchmakerGame()
```

### RequestJoinCustomGame

```csharp
public Task<bool> RequestJoinCustomGame(CustomBattleId serverId, string password, bool isJoinAsAdmin = false)
```

### RequestJoinPlayerParty

```csharp
public Task<bool> RequestJoinPlayerParty(PlayerId targetPlayer, bool inviteRequest)
```

### CancelFindGame

```csharp
public void CancelFindGame()
```

### FindGame

```csharp
public void FindGame()
```

### FindCustomGame

```csharp
public Task<bool> FindCustomGame(string selectedCustomGameTypes, bool? hasCrossplayPrivilege, string region)
```

### Connect

```csharp
public Task<LobbyClientConnectResult> Connect(ILobbyClientSessionHandler lobbyClientSessionHandler, ILoginAccessProvider lobbyClientLoginAccessProvider, string overridenUserName, bool hasUserGeneratedContentPrivilege, PlatformInitParams initParams, Func<Task<bool>> preLoginTask)
```

### KickPlayer

```csharp
public void KickPlayer(PlayerId id, bool banPlayer)
```

### ChangeRegion

```csharp
public void ChangeRegion(string region)
```

### ChangeGameTypes

```csharp
public void ChangeGameTypes(string gameTypes)
```

### OnConnected

```csharp
public override void OnConnected()
```

### OnCantConnect

```csharp
public override void OnCantConnect()
```

### OnDisconnected

```csharp
public override void OnDisconnected()
```

### RemoveLobbyClientHandler

```csharp
public void RemoveLobbyClientHandler()
```

### SendWhisper

```csharp
public void SendWhisper(string playerName, string message)
```

### FleeBattle

```csharp
public void FleeBattle()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)