---
title: "GOGAvatarService"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GOGAvatarService`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GOGAvatarService

**Namespace:** TaleWorlds.PlayerServices.Avatar
**Module:** TaleWorlds.PlayerServices
**Type:** `public class GOGAvatarService : IAvatarService`
**Base:** `IAvatarService`
**File:** `Bannerlord.Source/bin/TaleWorlds.PlayerServices/TaleWorlds.PlayerServices.Avatar/GOGAvatarService.cs`

## Overview

`GOGAvatarService` lives in `TaleWorlds.PlayerServices.Avatar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlayerServices.Avatar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### ClearCache
`public void ClearCache()`

**Purpose:** Handles logic related to `clear cache`.

### GetPlayerAvatar
`public AvatarData GetPlayerAvatar(PlayerId playerId)`

**Purpose:** Gets the current value of `player avatar`.

### IsInitialized
`public bool IsInitialized()`

**Purpose:** Handles logic related to `is initialized`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var value = new GOGAvatarService();
value.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)