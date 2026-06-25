---
title: "ApiAvatarServiceBaseSingleThread"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ApiAvatarServiceBaseSingleThread`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ApiAvatarServiceBaseSingleThread

**Namespace:** TaleWorlds.PlayerServices.Avatar
**Module:** TaleWorlds.PlayerServices
**Type:** `public abstract class ApiAvatarServiceBaseSingleThread : IAvatarService`
**Base:** `IAvatarService`
**File:** `TaleWorlds.PlayerServices/PlayerServices/Avatar/ApiAvatarServiceBaseSingleThread.cs`

## Overview

`ApiAvatarServiceBaseSingleThread` lives in `TaleWorlds.PlayerServices.Avatar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlayerServices.Avatar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### GetPlayerAvatar
`public AvatarData GetPlayerAvatar(PlayerId playerId)`

**Purpose:** Gets the current value of `player avatar`.

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### ClearCache
`public void ClearCache()`

**Purpose:** Handles logic related to `clear cache`.

### IsInitialized
`public bool IsInitialized()`

**Purpose:** Handles logic related to `is initialized`.

## Usage Example

```csharp
var implementation = new CustomApiAvatarServiceBaseSingleThread();
```

## See Also

- [Complete Class Catalog](../catalog)