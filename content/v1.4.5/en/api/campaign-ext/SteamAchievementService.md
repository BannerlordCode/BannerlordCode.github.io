---
title: "SteamAchievementService"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamAchievementService`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamAchievementService

**Namespace:** TaleWorlds.PlatformService.Steam
**Module:** TaleWorlds.PlatformService
**Type:** `public class SteamAchievementService : IAchievementService`
**Base:** `IAchievementService`
**File:** `Bannerlord.Source/bin/TaleWorlds.PlatformService.Steam/TaleWorlds.PlatformService.Steam/SteamAchievementService.cs`

## Overview

`SteamAchievementService` lives in `TaleWorlds.PlatformService.Steam` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.Steam` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

## Usage Example

```csharp
var value = new SteamAchievementService();
value.Tick(0);
```

## See Also

- [Complete Class Catalog](../catalog)