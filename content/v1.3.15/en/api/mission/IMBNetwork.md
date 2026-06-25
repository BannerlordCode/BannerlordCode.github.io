---
title: "IMBNetwork"
description: "Auto-generated class reference for IMBNetwork."
---
# IMBNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal interface IMBNetwork`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IMBNetwork.cs`

## Overview

`IMBNetwork` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIMBNetwork service = ...;
```

## See Also

- [Area Index](../)