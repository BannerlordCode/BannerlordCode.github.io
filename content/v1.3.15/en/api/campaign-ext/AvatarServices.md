---
title: "AvatarServices"
description: "Auto-generated class reference for AvatarServices."
---
# AvatarServices

**Namespace:** TaleWorlds.Avatar.PlayerServices
**Module:** TaleWorlds.Avatar
**Type:** `public static class AvatarServices`
**Base:** none
**File:** `TaleWorlds.PlayerServices/Avatar/PlayerServices/AvatarServices.cs`

## Overview

`AvatarServices` lives in `TaleWorlds.Avatar.PlayerServices` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Avatar.PlayerServices` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ForcedAvatarCount` | `public static int ForcedAvatarCount { get; }` |

## Key Methods

### GetForcedAvatarIndexOfPlayer
`public static int GetForcedAvatarIndexOfPlayer(PlayerId playerID)`

**Purpose:** Reads and returns the `forced avatar index of player` value held by the current object.

```csharp
// Static call; no instance required
AvatarServices.GetForcedAvatarIndexOfPlayer(playerID);
```

### UpdateAvatarServices
`public static void UpdateAvatarServices(float dt)`

**Purpose:** Recalculates and stores the latest representation of `avatar services`.

```csharp
// Static call; no instance required
AvatarServices.UpdateAvatarServices(0);
```

### GetPlayerAvatar
`public static AvatarDataResponse GetPlayerAvatar(PlayerId playerId, int forcedIndex)`

**Purpose:** Reads and returns the `player avatar` value held by the current object.

```csharp
// Static call; no instance required
AvatarServices.GetPlayerAvatar(playerId, 0);
```

### AddAvatarService
`public static void AddAvatarService(PlayerIdProvidedTypes type, IAvatarService avatarService)`

**Purpose:** Adds `avatar service` to the current collection or state.

```csharp
// Static call; no instance required
AvatarServices.AddAvatarService(type, avatarService);
```

### ClearAvatarCaches
`public static void ClearAvatarCaches()`

**Purpose:** Removes all `avatar caches` from the current object.

```csharp
// Static call; no instance required
AvatarServices.ClearAvatarCaches();
```

## Usage Example

```csharp
AvatarServices.GetForcedAvatarIndexOfPlayer(playerID);
```

## See Also

- [Area Index](../)