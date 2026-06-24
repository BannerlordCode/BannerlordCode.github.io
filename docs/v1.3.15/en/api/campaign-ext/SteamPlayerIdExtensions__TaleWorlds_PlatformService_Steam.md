<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamPlayerIdExtensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SteamPlayerIdExtensions

**Namespace:** TaleWorlds.PlatformService.Steam
**Module:** TaleWorlds.PlatformService
**Type:** `public static class SteamPlayerIdExtensions`
**Base:** none
**File:** `TaleWorlds.PlatformService.Steam/SteamPlayerIdExtensions.cs`

## Overview

`SteamPlayerIdExtensions` lives in `TaleWorlds.PlatformService.Steam` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.Steam` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToPlayerId
`public static PlayerId ToPlayerId(this CSteamID steamId)`

**Purpose:** Handles logic related to `to player id`.

### ToSteamId
`public static CSteamID ToSteamId(this PlayerId playerId)`

**Purpose:** Handles logic related to `to steam id`.

### IsValidSteamId
`public static bool IsValidSteamId(this PlayerId playerId)`

**Purpose:** Handles logic related to `is valid steam id`.

## Usage Example

```csharp
SteamPlayerIdExtensions.ToPlayerId(steamId);
```

## See Also

- [Complete Class Catalog](../catalog)