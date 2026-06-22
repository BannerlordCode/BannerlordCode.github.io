<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AvatarServices`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AvatarServices

**Namespace:** TaleWorlds.Avatar.PlayerServices
**Module:** TaleWorlds.Avatar
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `AvatarServices` is a class in the `TaleWorlds.Avatar.PlayerServices` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ForcedAvatarCount` | `public static int ForcedAvatarCount { get; }` |


## Key Methods

### GetForcedAvatarIndexOfPlayer

```csharp
public static int GetForcedAvatarIndexOfPlayer(PlayerId playerID)
```

### UpdateAvatarServices

```csharp
public static void UpdateAvatarServices(float dt)
```

### GetPlayerAvatar

```csharp
public static AvatarDataResponse GetPlayerAvatar(PlayerId playerId, int forcedIndex)
```

### AddAvatarService

```csharp
public static void AddAvatarService(PlayerIdProvidedTypes type, IAvatarService avatarService)
```

### ClearAvatarCaches

```csharp
public static void ClearAvatarCaches()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)