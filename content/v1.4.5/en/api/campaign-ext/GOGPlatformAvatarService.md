---
title: "GOGPlatformAvatarService"
description: "Auto-generated class reference for GOGPlatformAvatarService."
---
# GOGPlatformAvatarService

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class GOGPlatformAvatarService : IAvatarService`
**Base:** `IAvatarService`
**File:** `bin/TaleWorlds.PlatformService.GOG/TaleWorlds.PlatformService.GOG/GOGPlatformAvatarService.cs`

## Overview

`GOGPlatformAvatarService` lives in `TaleWorlds.PlatformService.GOG` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.GOG` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetPlayerAvatar
`public AvatarData GetPlayerAvatar(PlayerId playerId)`

**Purpose:** Reads and returns the `player avatar` value held by the current object.

```csharp
// Obtain an instance of GOGPlatformAvatarService from the subsystem API first
GOGPlatformAvatarService gOGPlatformAvatarService = ...;
var result = gOGPlatformAvatarService.GetPlayerAvatar(playerId);
```

### FetchPlayerAvatar
`public async void FetchPlayerAvatar(AvatarData avatarData, PlayerId playerId)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GOGPlatformAvatarService from the subsystem API first
GOGPlatformAvatarService gOGPlatformAvatarService = ...;
gOGPlatformAvatarService.FetchPlayerAvatar(avatarData, playerId);
```

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of GOGPlatformAvatarService from the subsystem API first
GOGPlatformAvatarService gOGPlatformAvatarService = ...;
gOGPlatformAvatarService.Initialize();
```

### ClearCache
`public void ClearCache()`

**Purpose:** Removes all `cache` from the current object.

```csharp
// Obtain an instance of GOGPlatformAvatarService from the subsystem API first
GOGPlatformAvatarService gOGPlatformAvatarService = ...;
gOGPlatformAvatarService.ClearCache();
```

### IsInitialized
`public bool IsInitialized()`

**Purpose:** Determines whether the current object is in the `initialized` state or condition.

```csharp
// Obtain an instance of GOGPlatformAvatarService from the subsystem API first
GOGPlatformAvatarService gOGPlatformAvatarService = ...;
var result = gOGPlatformAvatarService.IsInitialized();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of GOGPlatformAvatarService from the subsystem API first
GOGPlatformAvatarService gOGPlatformAvatarService = ...;
gOGPlatformAvatarService.Tick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GOGPlatformAvatarService gOGPlatformAvatarService = ...;
gOGPlatformAvatarService.GetPlayerAvatar(playerId);
```

## See Also

- [Area Index](../)