---
title: "SteamPlatformServices"
description: "Auto-generated class reference for SteamPlatformServices."
---
# SteamPlatformServices

**Namespace:** TaleWorlds.PlatformService.Steam
**Module:** TaleWorlds.PlatformService
**Type:** `public class SteamPlatformServices : IPlatformServices`
**Base:** `IPlatformServices`
**File:** `bin/TaleWorlds.PlatformService.Steam/TaleWorlds.PlatformService.Steam/SteamPlatformServices.cs`

## Overview

`SteamPlatformServices` lives in `TaleWorlds.PlatformService.Steam` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.Steam` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ClearAvatarCache
`public void ClearAvatarCache()`

**Purpose:** Removes all `avatar cache` from the current object.

```csharp
// Obtain an instance of SteamPlatformServices from the subsystem API first
SteamPlatformServices steamPlatformServices = ...;
steamPlatformServices.ClearAvatarCache();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SteamPlatformServices steamPlatformServices = ...;
steamPlatformServices.ClearAvatarCache();
```

## See Also

- [Area Index](../)