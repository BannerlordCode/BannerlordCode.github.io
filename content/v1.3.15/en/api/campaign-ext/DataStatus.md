---
title: "DataStatus"
description: "Auto-generated class reference for DataStatus."
---
# DataStatus

**Namespace:** TaleWorlds.PlayerServices.Avatar
**Module:** TaleWorlds.PlayerServices
**Type:** `public enum DataStatus`
**Base:** none
**File:** `TaleWorlds.PlayerServices/PlayerServices/Avatar/AvatarData.cs`

## Overview

`DataStatus` lives in `TaleWorlds.PlayerServices.Avatar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlayerServices.Avatar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DataStatus instance = ...;
```

## See Also

- [Area Index](../)