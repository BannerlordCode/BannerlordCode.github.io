---
title: "ClanFriendListService"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanFriendListService`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanFriendListService

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanFriendListService : IFriendListService`
**Base:** `IFriendListService`
**File:** `TaleWorlds.MountAndBlade/ClanFriendListService.cs`

## Overview

`ClanFriendListService` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetUserWithName
`public Task<PlayerId> GetUserWithName(string name)`

**Purpose:** Gets the current value of `user with name`.

### GetPendingRequests
`public IEnumerable<PlayerId> GetPendingRequests()`

**Purpose:** Gets the current value of `pending requests`.

### GetReceivedRequests
`public IEnumerable<PlayerId> GetReceivedRequests()`

**Purpose:** Gets the current value of `received requests`.

### OnClanInfoChanged
`public void OnClanInfoChanged(List<ClanPlayerInfo> playerInfosInClan)`

**Purpose:** Called when the `clan info changed` event is raised.

## Usage Example

```csharp
var value = new ClanFriendListService();
value.GetUserWithName("example");
```

## See Also

- [Complete Class Catalog](../catalog)