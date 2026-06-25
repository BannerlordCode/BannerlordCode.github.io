---
title: "DebugSiegeBehavior"
description: "Auto-generated class reference for DebugSiegeBehavior."
---
# DebugSiegeBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class DebugSiegeBehavior`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/DebugSiegeBehavior.cs`

## Overview

`DebugSiegeBehavior` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SiegeDebug
`public static void SiegeDebug(UsableMachine usableMachine)`

**Purpose:** Executes the SiegeDebug logic.

```csharp
// Static call; no instance required
DebugSiegeBehavior.SiegeDebug(usableMachine);
```

## Usage Example

```csharp
DebugSiegeBehavior.SiegeDebug(usableMachine);
```

## See Also

- [Area Index](../)