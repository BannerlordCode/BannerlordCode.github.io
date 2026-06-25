---
title: "SteamPlayerIdExtensions__TaleWorlds_PlatformService_GOG"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamPlayerIdExtensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamPlayerIdExtensions

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public static class SteamPlayerIdExtensions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.PlatformService.GOG/TaleWorlds.PlatformService.GOG/SteamPlayerIdExtensions.cs`

## Overview

`SteamPlayerIdExtensions` lives in `TaleWorlds.PlatformService.GOG` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.GOG` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToPlayerId
`public static PlayerId ToPlayerId(this GalaxyID galaxyID)`

**Purpose:** Handles logic related to `to player id`.

### ToGOGID
`public static GalaxyID ToGOGID(this PlayerId playerId)`

**Purpose:** Handles logic related to `to g o g i d`.

### IsValidGOGId
`public static bool IsValidGOGId(this PlayerId playerId)`

**Purpose:** Handles logic related to `is valid g o g id`.

## Usage Example

```csharp
SteamPlayerIdExtensions.ToPlayerId(galaxyID);
```

## See Also

- [Complete Class Catalog](../catalog)