---
title: "MBMultiplayerData"
description: "Auto-generated class reference for MBMultiplayerData."
---
# MBMultiplayerData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBMultiplayerData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBMultiplayerData.cs`

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

**Purpose:** **Purpose:** Executes the GameServerInfoReceivedDelegate logic.

```csharp
// Obtain an instance of MBMultiplayerData from the subsystem API first
MBMultiplayerData mBMultiplayerData = ...;
mBMultiplayerData.GameServerInfoReceivedDelegate(id, "example", "example", "example", "example", 0, 0, "example", 0);
```

### GetServerId
`public static string GetServerId()`

**Purpose:** **Purpose:** Reads and returns the server id value held by the this instance.

```csharp
// Static call; no instance required
MBMultiplayerData.GetServerId();
```

### GetServerName
`public static string GetServerName()`

**Purpose:** **Purpose:** Reads and returns the server name value held by the this instance.

```csharp
// Static call; no instance required
MBMultiplayerData.GetServerName();
```

### GetGameModule
`public static string GetGameModule()`

**Purpose:** **Purpose:** Reads and returns the game module value held by the this instance.

```csharp
// Static call; no instance required
MBMultiplayerData.GetGameModule();
```

### GetGameType
`public static string GetGameType()`

**Purpose:** **Purpose:** Reads and returns the game type value held by the this instance.

```csharp
// Static call; no instance required
MBMultiplayerData.GetGameType();
```

### GetMap
`public static string GetMap()`

**Purpose:** **Purpose:** Reads and returns the map value held by the this instance.

```csharp
// Static call; no instance required
MBMultiplayerData.GetMap();
```

### GetCurrentPlayerCount
`public static int GetCurrentPlayerCount()`

**Purpose:** **Purpose:** Reads and returns the current player count value held by the this instance.

```csharp
// Static call; no instance required
MBMultiplayerData.GetCurrentPlayerCount();
```

### GetPlayerCountLimit
`public static int GetPlayerCountLimit()`

**Purpose:** **Purpose:** Reads and returns the player count limit value held by the this instance.

```csharp
// Static call; no instance required
MBMultiplayerData.GetPlayerCountLimit();
```

### UpdateGameServerInfo
`public static void UpdateGameServerInfo(string id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of game server info.

```csharp
// Static call; no instance required
MBMultiplayerData.UpdateGameServerInfo("example", "example", "example", "example", "example", 0, 0, "example", 0);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
MBMultiplayerData entry = ...;
```

## See Also

- [Area Index](../)