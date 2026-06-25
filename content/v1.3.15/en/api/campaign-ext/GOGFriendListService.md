---
title: "GOGFriendListService"
description: "Auto-generated class reference for GOGFriendListService."
---
# GOGFriendListService

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class GOGFriendListService : IFriendListService`
**Base:** `IFriendListService`
**File:** `TaleWorlds.PlatformService.GOG/GOGFriendListService.cs`

## Overview

`GOGFriendListService` lives in `TaleWorlds.PlatformService.GOG` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.GOG` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RequestFriendList
`public void RequestFriendList()`

**Purpose:** **Purpose:** Executes the RequestFriendList logic.

```csharp
// Obtain an instance of GOGFriendListService from the subsystem API first
GOGFriendListService gOGFriendListService = ...;
gOGFriendListService.RequestFriendList();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GOGFriendListService gOGFriendListService = ...;
gOGFriendListService.RequestFriendList();
```

## See Also

- [Area Index](../)