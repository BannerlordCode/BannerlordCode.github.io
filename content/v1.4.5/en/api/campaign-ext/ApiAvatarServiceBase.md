---
title: "ApiAvatarServiceBase"
description: "Auto-generated class reference for ApiAvatarServiceBase."
---
# ApiAvatarServiceBase

**Namespace:** TaleWorlds.PlayerServices.Avatar
**Module:** TaleWorlds.PlayerServices
**Type:** `public abstract class ApiAvatarServiceBase : IAvatarService`
**Base:** `IAvatarService`
**File:** `bin/TaleWorlds.PlayerServices/TaleWorlds.PlayerServices.Avatar/ApiAvatarServiceBase.cs`

## Overview

`ApiAvatarServiceBase` lives in `TaleWorlds.PlayerServices.Avatar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlayerServices.Avatar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of ApiAvatarServiceBase from the subsystem API first
ApiAvatarServiceBase apiAvatarServiceBase = ...;
apiAvatarServiceBase.Tick(0);
```

### GetPlayerAvatar
`public AvatarData GetPlayerAvatar(PlayerId playerId)`

**Purpose:** **Purpose:** Reads and returns the player avatar value held by the this instance.

```csharp
// Obtain an instance of ApiAvatarServiceBase from the subsystem API first
ApiAvatarServiceBase apiAvatarServiceBase = ...;
var result = apiAvatarServiceBase.GetPlayerAvatar(playerId);
```

### Initialize
`public void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of ApiAvatarServiceBase from the subsystem API first
ApiAvatarServiceBase apiAvatarServiceBase = ...;
apiAvatarServiceBase.Initialize();
```

### ClearCache
`public void ClearCache()`

**Purpose:** **Purpose:** Removes all cache from the this instance.

```csharp
// Obtain an instance of ApiAvatarServiceBase from the subsystem API first
ApiAvatarServiceBase apiAvatarServiceBase = ...;
apiAvatarServiceBase.ClearCache();
```

### IsInitialized
`public bool IsInitialized()`

**Purpose:** **Purpose:** Determines whether the this instance is in the initialized state or condition.

```csharp
// Obtain an instance of ApiAvatarServiceBase from the subsystem API first
ApiAvatarServiceBase apiAvatarServiceBase = ...;
var result = apiAvatarServiceBase.IsInitialized();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ApiAvatarServiceBase instance = ...;
```

## See Also

- [Area Index](../)