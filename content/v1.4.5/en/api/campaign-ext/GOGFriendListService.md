---
title: "GOGFriendListService"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GOGFriendListService`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GOGFriendListService

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class GOGFriendListService : IFriendListService`
**Base:** `IFriendListService`
**File:** `Bannerlord.Source/bin/TaleWorlds.PlatformService.GOG/TaleWorlds.PlatformService.GOG/GOGFriendListService.cs`

## Overview

`GOGFriendListService` lives in `TaleWorlds.PlatformService.GOG` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.GOG` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RequestFriendList
`public void RequestFriendList()`

**Purpose:** Handles logic related to `request friend list`.

## Usage Example

```csharp
var value = new GOGFriendListService();
value.RequestFriendList();
```

## See Also

- [Complete Class Catalog](../catalog)