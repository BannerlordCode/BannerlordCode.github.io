---
title: "ForcedAvatarService"
description: "Auto-generated class reference for ForcedAvatarService."
---
# ForcedAvatarService

**Namespace:** TaleWorlds.PlayerServices.Avatar
**Module:** TaleWorlds.PlayerServices
**Type:** `internal class ForcedAvatarService : IAvatarService`
**Base:** `IAvatarService`
**File:** `bin/TaleWorlds.PlayerServices/TaleWorlds.PlayerServices.Avatar/ForcedAvatarService.cs`

## Overview

`ForcedAvatarService` lives in `TaleWorlds.PlayerServices.Avatar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlayerServices.Avatar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetPlayerAvatar
`public AvatarData GetPlayerAvatar(PlayerId playerId)`

**Purpose:** Reads and returns the player avatar value held by the this instance.

```csharp
// Obtain an instance of ForcedAvatarService from the subsystem API first
ForcedAvatarService forcedAvatarService = ...;
var result = forcedAvatarService.GetPlayerAvatar(playerId);
```

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of ForcedAvatarService from the subsystem API first
ForcedAvatarService forcedAvatarService = ...;
forcedAvatarService.Initialize();
```

### IsInitialized
`public bool IsInitialized()`

**Purpose:** Determines whether the this instance is in the initialized state or condition.

```csharp
// Obtain an instance of ForcedAvatarService from the subsystem API first
ForcedAvatarService forcedAvatarService = ...;
var result = forcedAvatarService.IsInitialized();
```

### ClearCache
`public void ClearCache()`

**Purpose:** Removes all cache from the this instance.

```csharp
// Obtain an instance of ForcedAvatarService from the subsystem API first
ForcedAvatarService forcedAvatarService = ...;
forcedAvatarService.ClearCache();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of ForcedAvatarService from the subsystem API first
ForcedAvatarService forcedAvatarService = ...;
forcedAvatarService.Tick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ForcedAvatarService forcedAvatarService = ...;
forcedAvatarService.GetPlayerAvatar(playerId);
```

## See Also

- [Area Index](../)