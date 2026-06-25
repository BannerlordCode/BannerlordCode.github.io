---
title: "EpicFriendListService"
description: "Auto-generated class reference for EpicFriendListService."
---
# EpicFriendListService

**Namespace:** TaleWorlds.PlatformService.Epic
**Module:** TaleWorlds.PlatformService
**Type:** `public class EpicFriendListService : IFriendListService`
**Base:** `IFriendListService`
**File:** `TaleWorlds.PlatformService.Epic/EpicFriendListService.cs`

## Overview

`EpicFriendListService` lives in `TaleWorlds.PlatformService.Epic` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.Epic` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### UserStatusChanged
`public void UserStatusChanged(PlayerId playerId)`

**Purpose:** Executes the UserStatusChanged logic.

```csharp
// Obtain an instance of EpicFriendListService from the subsystem API first
EpicFriendListService epicFriendListService = ...;
epicFriendListService.UserStatusChanged(playerId);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EpicFriendListService epicFriendListService = ...;
epicFriendListService.UserStatusChanged(playerId);
```

## See Also

- [Area Index](../)