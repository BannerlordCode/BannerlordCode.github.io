---
title: "SteamPlayerIdExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamPlayerIdExtensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SteamPlayerIdExtensions

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public static class SteamPlayerIdExtensions`
**Area:** campaign-ext

## Overview

`SteamPlayerIdExtensions` lives in `TaleWorlds.PlatformService.GOG`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
SteamPlayerIdExtensions.ToPlayerId(galaxyID);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
