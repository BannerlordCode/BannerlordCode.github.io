<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamPlatformServices`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamPlatformServices

**Namespace:** TaleWorlds.PlatformService.Steam
**Module:** TaleWorlds.PlatformService
**Type:** `public class SteamPlatformServices : IPlatformServices`
**Base:** `IPlatformServices`
**File:** `Bannerlord.Source/bin/TaleWorlds.PlatformService.Steam/TaleWorlds.PlatformService.Steam/SteamPlatformServices.cs`

## Overview

`SteamPlatformServices` lives in `TaleWorlds.PlatformService.Steam` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.Steam` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ClearAvatarCache
`public void ClearAvatarCache()`

**Purpose:** Handles logic related to `clear avatar cache`.

## Usage Example

```csharp
var value = new SteamPlatformServices();
value.ClearAvatarCache();
```

## See Also

- [Complete Class Catalog](../catalog)