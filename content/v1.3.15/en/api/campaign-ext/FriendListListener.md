---
title: "FriendListListener"
description: "Auto-generated class reference for FriendListListener."
---
# FriendListListener

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class FriendListListener : IFriendListListener`
**Base:** `IFriendListListener`
**File:** `TaleWorlds.PlatformService.GOG/FriendListListener.cs`

## Overview

`FriendListListener` lives in `TaleWorlds.PlatformService.GOG` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.GOG` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GotResult` | `public bool GotResult { get; }` |

## Key Methods

### OnFriendListRetrieveSuccess
`public override void OnFriendListRetrieveSuccess()`

**Purpose:** Invoked when the `friend list retrieve success` event is raised.

```csharp
// Obtain an instance of FriendListListener from the subsystem API first
FriendListListener friendListListener = ...;
friendListListener.OnFriendListRetrieveSuccess();
```

### OnFriendListRetrieveFailure
`public override void OnFriendListRetrieveFailure(IFriendListListener.FailureReason failureReason)`

**Purpose:** Invoked when the `friend list retrieve failure` event is raised.

```csharp
// Obtain an instance of FriendListListener from the subsystem API first
FriendListListener friendListListener = ...;
friendListListener.OnFriendListRetrieveFailure(failureReason);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FriendListListener friendListListener = ...;
friendListListener.OnFriendListRetrieveSuccess();
```

## See Also

- [Area Index](../)