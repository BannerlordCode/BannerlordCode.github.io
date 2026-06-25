---
title: "GOGAvatarService"
description: "Auto-generated class reference for GOGAvatarService."
---
# GOGAvatarService

**Namespace:** TaleWorlds.PlayerServices.Avatar
**Module:** TaleWorlds.PlayerServices
**Type:** `public class GOGAvatarService : IAvatarService`
**Base:** `IAvatarService`
**File:** `TaleWorlds.PlayerServices/PlayerServices/Avatar/GOGAvatarService.cs`

## Overview

`GOGAvatarService` lives in `TaleWorlds.PlayerServices.Avatar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlayerServices.Avatar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of GOGAvatarService from the subsystem API first
GOGAvatarService gOGAvatarService = ...;
gOGAvatarService.Initialize();
```

### ClearCache
`public void ClearCache()`

**Purpose:** Removes all `cache` from the current object.

```csharp
// Obtain an instance of GOGAvatarService from the subsystem API first
GOGAvatarService gOGAvatarService = ...;
gOGAvatarService.ClearCache();
```

### GetPlayerAvatar
`public AvatarData GetPlayerAvatar(PlayerId playerId)`

**Purpose:** Reads and returns the `player avatar` value held by the current object.

```csharp
// Obtain an instance of GOGAvatarService from the subsystem API first
GOGAvatarService gOGAvatarService = ...;
var result = gOGAvatarService.GetPlayerAvatar(playerId);
```

### IsInitialized
`public bool IsInitialized()`

**Purpose:** Determines whether the current object is in the `initialized` state or condition.

```csharp
// Obtain an instance of GOGAvatarService from the subsystem API first
GOGAvatarService gOGAvatarService = ...;
var result = gOGAvatarService.IsInitialized();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of GOGAvatarService from the subsystem API first
GOGAvatarService gOGAvatarService = ...;
gOGAvatarService.Tick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GOGAvatarService gOGAvatarService = ...;
gOGAvatarService.Initialize();
```

## See Also

- [Area Index](../)