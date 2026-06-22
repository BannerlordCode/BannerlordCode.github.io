<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBMultiplayerData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBMultiplayerData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBMultiplayerData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBMultiplayerData.cs`

## Overview

`MBMultiplayerData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `ServerId` | `public static Guid ServerId { get; set; }` |

## Key Methods

### GetServerId
```csharp
public static string GetServerId()
```

### GetServerName
```csharp
public static string GetServerName()
```

### GetGameModule
```csharp
public static string GetGameModule()
```

### GetGameType
```csharp
public static string GetGameType()
```

### GetMap
```csharp
public static string GetMap()
```

### GetCurrentPlayerCount
```csharp
public static int GetCurrentPlayerCount()
```

### GetPlayerCountLimit
```csharp
public static int GetPlayerCountLimit()
```

### UpdateGameServerInfo
```csharp
public static void UpdateGameServerInfo(string id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port)
```

### GameServerInfoReceivedDelegate
```csharp
public delegate void GameServerInfoReceivedDelegate(CustomBattleId id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port)
```

## Usage Example

```csharp
// Typical usage of MBMultiplayerData (Data)
new MBMultiplayerData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)