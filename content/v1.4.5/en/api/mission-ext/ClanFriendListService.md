---
title: "ClanFriendListService"
description: "Auto-generated class reference for ClanFriendListService."
---
# ClanFriendListService

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanFriendListService : IFriendListService`
**Base:** `IFriendListService`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ClanFriendListService.cs`

## Overview

`ClanFriendListService` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetUserWithName
`public async Task<PlayerId> GetUserWithName(string name)`

**Purpose:** **Purpose:** Reads and returns the user with name value held by the this instance.

```csharp
// Obtain an instance of ClanFriendListService from the subsystem API first
ClanFriendListService clanFriendListService = ...;
var result = clanFriendListService.GetUserWithName("example");
```

### GetPendingRequests
`public IEnumerable<PlayerId> GetPendingRequests()`

**Purpose:** **Purpose:** Reads and returns the pending requests value held by the this instance.

```csharp
// Obtain an instance of ClanFriendListService from the subsystem API first
ClanFriendListService clanFriendListService = ...;
var result = clanFriendListService.GetPendingRequests();
```

### GetReceivedRequests
`public IEnumerable<PlayerId> GetReceivedRequests()`

**Purpose:** **Purpose:** Reads and returns the received requests value held by the this instance.

```csharp
// Obtain an instance of ClanFriendListService from the subsystem API first
ClanFriendListService clanFriendListService = ...;
var result = clanFriendListService.GetReceivedRequests();
```

### OnClanInfoChanged
`public void OnClanInfoChanged(List<ClanPlayerInfo> playerInfosInClan)`

**Purpose:** **Purpose:** Invoked when the clan info changed event is raised.

```csharp
// Obtain an instance of ClanFriendListService from the subsystem API first
ClanFriendListService clanFriendListService = ...;
clanFriendListService.OnClanInfoChanged(playerInfosInClan);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanFriendListService clanFriendListService = ...;
clanFriendListService.GetUserWithName("example");
```

## See Also

- [Area Index](../)