---
title: "BannerlordFriendListService"
description: "Auto-generated class reference for BannerlordFriendListService."
---
# BannerlordFriendListService

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerlordFriendListService : IFriendListService`
**Base:** `IFriendListService`
**File:** `TaleWorlds.MountAndBlade/BannerlordFriendListService.cs`

## Overview

`BannerlordFriendListService` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnFriendListReceived
`public void OnFriendListReceived(FriendInfo friends)`

**Purpose:** Invoked when the `friend list received` event is raised.

```csharp
// Obtain an instance of BannerlordFriendListService from the subsystem API first
BannerlordFriendListService bannerlordFriendListService = ...;
bannerlordFriendListService.OnFriendListReceived(friends);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerlordFriendListService bannerlordFriendListService = ...;
bannerlordFriendListService.OnFriendListReceived(friends);
```

## See Also

- [Area Index](../)