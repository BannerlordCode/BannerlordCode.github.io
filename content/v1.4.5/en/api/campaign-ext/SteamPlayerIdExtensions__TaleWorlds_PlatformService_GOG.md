---
title: "SteamPlayerIdExtensions"
description: "Auto-generated class reference for SteamPlayerIdExtensions."
---
# SteamPlayerIdExtensions

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public static class SteamPlayerIdExtensions`
**Base:** none
**File:** `bin/TaleWorlds.PlatformService.GOG/TaleWorlds.PlatformService.GOG/SteamPlayerIdExtensions.cs`

## Overview

`SteamPlayerIdExtensions` lives in `TaleWorlds.PlatformService.GOG` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.GOG` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToPlayerId
`public static PlayerId ToPlayerId(this GalaxyID galaxyID)`

**Purpose:** Executes the ToPlayerId logic.

```csharp
// Static call; no instance required
SteamPlayerIdExtensions.ToPlayerId(galaxyID);
```

### ToGOGID
`public static GalaxyID ToGOGID(this PlayerId playerId)`

**Purpose:** Executes the ToGOGID logic.

```csharp
// Static call; no instance required
SteamPlayerIdExtensions.ToGOGID(playerId);
```

### IsValidGOGId
`public static bool IsValidGOGId(this PlayerId playerId)`

**Purpose:** Determines whether the this instance is in the valid g o g id state or condition.

```csharp
// Static call; no instance required
SteamPlayerIdExtensions.IsValidGOGId(playerId);
```

## Usage Example

```csharp
SteamPlayerIdExtensions.ToPlayerId(galaxyID);
```

## See Also

- [Area Index](../)