---
title: "IFriendListService"
description: "Auto-generated class reference for IFriendListService."
---
# IFriendListService

**Namespace:** TaleWorlds.PlatformService
**Module:** TaleWorlds.PlatformService
**Type:** `public interface IFriendListService`
**Base:** none
**File:** `TaleWorlds.PlatformService/IFriendListService.cs`

## Overview

`IFriendListService` lives in `TaleWorlds.PlatformService` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIFriendListService service = ...;
```

## See Also

- [Area Index](../)