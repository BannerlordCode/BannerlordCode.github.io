---
title: "EpicPlatformAvatarService"
description: "Auto-generated class reference for EpicPlatformAvatarService."
---
# EpicPlatformAvatarService

**Namespace:** TaleWorlds.PlatformService.Epic
**Module:** TaleWorlds.PlatformService
**Type:** `public class EpicPlatformAvatarService : IAvatarService`
**Base:** `IAvatarService`
**File:** `TaleWorlds.PlatformService.Epic/EpicPlatformAvatarService.cs`

## Overview

`EpicPlatformAvatarService` lives in `TaleWorlds.PlatformService.Epic` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.Epic` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetPlayerAvatar
`public AvatarData GetPlayerAvatar(PlayerId playerId)`

**Purpose:** **Purpose:** Reads and returns the player avatar value held by the this instance.

```csharp
// Obtain an instance of EpicPlatformAvatarService from the subsystem API first
EpicPlatformAvatarService epicPlatformAvatarService = ...;
var result = epicPlatformAvatarService.GetPlayerAvatar(playerId);
```

### Initialize
`public void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of EpicPlatformAvatarService from the subsystem API first
EpicPlatformAvatarService epicPlatformAvatarService = ...;
epicPlatformAvatarService.Initialize();
```

### IsInitialized
`public bool IsInitialized()`

**Purpose:** **Purpose:** Determines whether the this instance is in the initialized state or condition.

```csharp
// Obtain an instance of EpicPlatformAvatarService from the subsystem API first
EpicPlatformAvatarService epicPlatformAvatarService = ...;
var result = epicPlatformAvatarService.IsInitialized();
```

### ClearCache
`public void ClearCache()`

**Purpose:** **Purpose:** Removes all cache from the this instance.

```csharp
// Obtain an instance of EpicPlatformAvatarService from the subsystem API first
EpicPlatformAvatarService epicPlatformAvatarService = ...;
epicPlatformAvatarService.ClearCache();
```

### Tick
`public void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of EpicPlatformAvatarService from the subsystem API first
EpicPlatformAvatarService epicPlatformAvatarService = ...;
epicPlatformAvatarService.Tick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EpicPlatformAvatarService epicPlatformAvatarService = ...;
epicPlatformAvatarService.GetPlayerAvatar(playerId);
```

## See Also

- [Area Index](../)