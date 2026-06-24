<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamPlatformAvatarService`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SteamPlatformAvatarService

**Namespace:** TaleWorlds.PlatformService.Steam
**Module:** TaleWorlds.PlatformService
**Type:** `public class SteamPlatformAvatarService : IAvatarService`
**Base:** `IAvatarService`
**File:** `TaleWorlds.PlatformService.Steam/SteamPlatformAvatarService.cs`

## Overview

`SteamPlatformAvatarService` lives in `TaleWorlds.PlatformService.Steam` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.Steam` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetPlayerAvatar
`public AvatarData GetPlayerAvatar(PlayerId playerId)`

**Purpose:** Gets the current value of `player avatar`.

### FetchPlayerAvatar
`public void FetchPlayerAvatar(AvatarData avatarData, PlayerId playerId)`

**Purpose:** Handles logic related to `fetch player avatar`.

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### ClearCache
`public void ClearCache()`

**Purpose:** Handles logic related to `clear cache`.

### IsInitialized
`public bool IsInitialized()`

**Purpose:** Handles logic related to `is initialized`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var value = new SteamPlatformAvatarService();
value.GetPlayerAvatar(playerId);
```

## See Also

- [Complete Class Catalog](../catalog)