<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EpicPlatformAvatarService`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EpicPlatformAvatarService

**Namespace:** TaleWorlds.PlatformService.Epic
**Module:** TaleWorlds.PlatformService
**Type:** `public class EpicPlatformAvatarService : IAvatarService`
**Base:** `IAvatarService`
**File:** `Bannerlord.Source/bin/TaleWorlds.PlatformService.Epic/TaleWorlds.PlatformService.Epic/EpicPlatformAvatarService.cs`

## Overview

`EpicPlatformAvatarService` lives in `TaleWorlds.PlatformService.Epic` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.Epic` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetPlayerAvatar
`public AvatarData GetPlayerAvatar(PlayerId playerId)`

**Purpose:** Gets the current value of `player avatar`.

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### IsInitialized
`public bool IsInitialized()`

**Purpose:** Handles logic related to `is initialized`.

### ClearCache
`public void ClearCache()`

**Purpose:** Handles logic related to `clear cache`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var value = new EpicPlatformAvatarService();
value.GetPlayerAvatar(playerId);
```

## See Also

- [Complete Class Catalog](../catalog)