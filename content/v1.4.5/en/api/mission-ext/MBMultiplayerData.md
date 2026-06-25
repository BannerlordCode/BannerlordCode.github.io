---
title: "MBMultiplayerData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBMultiplayerData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBMultiplayerData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBMultiplayerData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBMultiplayerData.cs`

## Overview

`MBMultiplayerData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MBMultiplayerData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ServerId` | `public static Guid ServerId { get; set; }` |

## Key Methods

### GameServerInfoReceivedDelegate
`public delegate void GameServerInfoReceivedDelegate(CustomBattleId id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port)`

**Purpose:** Handles logic related to `game server info received delegate`.

### GetServerId
`public static string GetServerId()`

**Purpose:** Gets the current value of `server id`.

### GetServerName
`public static string GetServerName()`

**Purpose:** Gets the current value of `server name`.

### GetGameModule
`public static string GetGameModule()`

**Purpose:** Gets the current value of `game module`.

### GetGameType
`public static string GetGameType()`

**Purpose:** Gets the current value of `game type`.

### GetMap
`public static string GetMap()`

**Purpose:** Gets the current value of `map`.

### GetCurrentPlayerCount
`public static int GetCurrentPlayerCount()`

**Purpose:** Gets the current value of `current player count`.

### GetPlayerCountLimit
`public static int GetPlayerCountLimit()`

**Purpose:** Gets the current value of `player count limit`.

### UpdateGameServerInfo
`public static void UpdateGameServerInfo(string id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port)`

**Purpose:** Updates the state or data of `game server info`.

## Usage Example

```csharp
var value = new MBMultiplayerData();
```

## See Also

- [Complete Class Catalog](../catalog)