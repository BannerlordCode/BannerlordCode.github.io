---
title: "MPPerkCondition"
description: "Auto-generated class reference for MPPerkCondition."
---
# MPPerkCondition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPPerkCondition<T> : MPPerkCondition where T : MissionMultiplayerGameModeBase`
**Base:** `MPPerkCondition where T : MissionMultiplayerGameModeBase`
**File:** `TaleWorlds.MountAndBlade/MPPerkCondition.2.cs`

## Overview

`MPPerkCondition` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MPPerkCondition instance = ...;
```

## See Also

- [Area Index](../)