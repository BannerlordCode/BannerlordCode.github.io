<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AvatarServices`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AvatarServices

**Namespace:** TaleWorlds.Avatar.PlayerServices
**Module:** TaleWorlds.Avatar
**Type:** `public static class AvatarServices`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.PlayerServices/TaleWorlds.Avatar.PlayerServices/AvatarServices.cs`

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

**Purpose:** Gets the current value of `forced avatar index of player`.

### UpdateAvatarServices
`public static void UpdateAvatarServices(float dt)`

**Purpose:** Updates the state or data of `avatar services`.

### GetPlayerAvatar
`public static AvatarDataResponse GetPlayerAvatar(PlayerId playerId, int forcedIndex)`

**Purpose:** Gets the current value of `player avatar`.

### AddAvatarService
`public static void AddAvatarService(PlayerIdProvidedTypes type, IAvatarService avatarService)`

**Purpose:** Adds `avatar service` to the current collection or state.

### ClearAvatarCaches
`public static void ClearAvatarCaches()`

**Purpose:** Handles logic related to `clear avatar caches`.

## Usage Example

```csharp
AvatarServices.GetForcedAvatarIndexOfPlayer(playerID);
```

## See Also

- [Complete Class Catalog](../catalog)