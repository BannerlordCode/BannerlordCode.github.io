<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LobbyClient`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LobbyClient

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `LobbyClient` is a class in the `TaleWorlds.MountAndBlade.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)