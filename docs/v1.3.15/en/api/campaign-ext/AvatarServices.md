<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AvatarServices`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AvatarServices

**Namespace:** TaleWorlds.Avatar.PlayerServices
**Module:** TaleWorlds.Avatar
**Type:** `public static class AvatarServices`
**Area:** campaign-ext

## Overview

`AvatarServices` lives in `TaleWorlds.Avatar.PlayerServices`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
AvatarServices.GetForcedAvatarIndexOfPlayer(playerID);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
