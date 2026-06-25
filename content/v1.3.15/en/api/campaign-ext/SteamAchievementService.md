---
title: "SteamAchievementService"
description: "Auto-generated class reference for SteamAchievementService."
---
# SteamAchievementService

**Namespace:** TaleWorlds.PlatformService.Steam
**Module:** TaleWorlds.PlatformService
**Type:** `public class SteamAchievementService : IAchievementService`
**Base:** `IAchievementService`
**File:** `TaleWorlds.PlatformService.Steam/SteamAchievementService.cs`

## Overview

`SteamAchievementService` lives in `TaleWorlds.PlatformService.Steam` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.Steam` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of SteamAchievementService from the subsystem API first
SteamAchievementService steamAchievementService = ...;
steamAchievementService.Tick(0);
```

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of SteamAchievementService from the subsystem API first
SteamAchievementService steamAchievementService = ...;
steamAchievementService.Initialize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SteamAchievementService steamAchievementService = ...;
steamAchievementService.Tick(0);
```

## See Also

- [Area Index](../)