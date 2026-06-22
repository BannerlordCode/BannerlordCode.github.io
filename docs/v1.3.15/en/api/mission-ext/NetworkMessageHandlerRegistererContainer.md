<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NetworkMessageHandlerRegistererContainer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NetworkMessageHandlerRegistererContainer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `NetworkMessageHandlerRegistererContainer` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsServer` | `public static bool IsServer { get; }` |
| `IsServerOrRecorder` | `public static bool IsServerOrRecorder { get; }` |
| `IsClient` | `public static bool IsClient { get; }` |
| `IsReplay` | `public static bool IsReplay { get; }` |
| `IsClientOrReplay` | `public static bool IsClientOrReplay { get; }` |
| `IsDedicatedServer` | `public static bool IsDedicatedServer { get; }` |
| `MultiplayerDisabled` | `public static bool MultiplayerDisabled { get; }` |
| `IsMultiplayer` | `public static bool IsMultiplayer { get; }` |
| `IsMultiplayerOrReplay` | `public static bool IsMultiplayerOrReplay { get; }` |
| `IsSessionActive` | `public static bool IsSessionActive { get; }` |
| `NetworkPeersIncludingDisconnectedPeers` | `public static IEnumerable<NetworkCommunicator> NetworkPeersIncludingDisconnectedPeers { get; }` |
| `VirtualPlayers` | `public static VirtualPlayer VirtualPlayers { get; }` |
| `NetworkPeers` | `public static List<NetworkCommunicator> NetworkPeers { get; }` |
| `DisconnectedNetworkPeers` | `public static List<NetworkCommunicator> DisconnectedNetworkPeers { get; }` |
| `NetworkPeerCount` | `public static int NetworkPeerCount { get; }` |
| `NetworkPeersValid` | `public static bool NetworkPeersValid { get; }` |
| `NetworkComponents` | `public static List<UdpNetworkComponent> NetworkComponents { get; }` |
| `NetworkHandlers` | `public static List<IUdpNetworkHandler> NetworkHandlers { get; }` |
| `MyPeer` | `public static NetworkCommunicator MyPeer { get; }` |
| `IsMyPeerReady` | `public static bool IsMyPeerReady { get; }` |


## Key Methods

### ClearAllPeers

```csharp
public static void ClearAllPeers()
```

### FindNetworkPeer

```csharp
public static NetworkCommunicator FindNetworkPeer(int index)
```

### Initialize

```csharp
public static void Initialize(IGameNetworkHandler handler)
```

### EndMultiplayer

```csharp
public static void EndMultiplayer()
```

### StartReplay

```csharp
public static void StartReplay()
```

### EndReplay

```csharp
public static void EndReplay()
```

### PreStartMultiplayerOnServer

```csharp
public static void PreStartMultiplayerOnServer()
```

### StartMultiplayerOnServer

```csharp
public static void StartMultiplayerOnServer(int port)
```

### HandleConsoleCommand

```csharp
public static void HandleConsoleCommand(string command)
```

### GetActiveUdpSessionsIpAddress

```csharp
public static string GetActiveUdpSessionsIpAddress()
```

### AddNewPlayerOnServer

```csharp
public static ICommunicator AddNewPlayerOnServer(PlayerConnectionInfo playerConnectionInfo, bool serverPeer, bool isAdmin)
```

### AddNewPlayersOnServer

```csharp
public static GameNetwork.AddPlayersResult AddNewPlayersOnServer(PlayerConnectionInfo playerConnectionInfos, bool serverPeer)
```

### ClientFinishedLoading

```csharp
public static void ClientFinishedLoading(NetworkCommunicator networkPeer)
```

### BeginModuleEventAsClient

```csharp
public static void BeginModuleEventAsClient()
```

### EndModuleEventAsClient

```csharp
public static void EndModuleEventAsClient()
```

### BeginModuleEventAsClientUnreliable

```csharp
public static void BeginModuleEventAsClientUnreliable()
```

### EndModuleEventAsClientUnreliable

```csharp
public static void EndModuleEventAsClientUnreliable()
```

### BeginModuleEventAsServer

```csharp
public static void BeginModuleEventAsServer(NetworkCommunicator communicator)
```

### BeginModuleEventAsServerUnreliable

```csharp
public static void BeginModuleEventAsServerUnreliable(NetworkCommunicator communicator)
```

### BeginModuleEventAsServer

```csharp
public static void BeginModuleEventAsServer(VirtualPlayer peer)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)