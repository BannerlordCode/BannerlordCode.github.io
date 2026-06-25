---
title: "FriendListService"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FriendListService`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FriendListService

**Namespace:** TaleWorlds.PlatformService
**Module:** TaleWorlds.PlatformService
**Type:** `public static class FriendListService`
**Area:** campaign-ext

## Overview

`FriendListService` lives in `TaleWorlds.PlatformService`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.PlatformService` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAllFriendsInAllPlatforms
`public static IEnumerable<PlayerId> GetAllFriendsInAllPlatforms()`

**Purpose:** Gets the current value of `all friends in all platforms`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
FriendListService.GetAllFriendsInAllPlatforms();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
