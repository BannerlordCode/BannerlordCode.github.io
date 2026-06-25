---
title: "FriendListService"
description: "Auto-generated class reference for FriendListService."
---
# FriendListService

**Namespace:** TaleWorlds.PlatformService
**Module:** TaleWorlds.PlatformService
**Type:** `public static class FriendListService`
**Base:** none
**File:** `TaleWorlds.PlatformService/FriendListService.cs`

## Overview

`FriendListService` lives in `TaleWorlds.PlatformService` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAllFriendsInAllPlatforms
`public static IEnumerable<PlayerId> GetAllFriendsInAllPlatforms()`

**Purpose:** **Purpose:** Reads and returns the all friends in all platforms value held by the this instance.

```csharp
// Static call; no instance required
FriendListService.GetAllFriendsInAllPlatforms();
```

## Usage Example

```csharp
FriendListService.GetAllFriendsInAllPlatforms();
```

## See Also

- [Area Index](../)