---
title: "CoreManaged"
description: "Auto-generated class reference for CoreManaged."
---
# CoreManaged

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CoreManaged : IManagedComponent`
**Base:** `IManagedComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CoreManaged.cs`

## Overview

`CoreManaged` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Start
`public static void Start()`

**Purpose:** Starts the current object's flow or state machine.

```csharp
// Static call; no instance required
CoreManaged.Start();
```

## Usage Example

```csharp
CoreManaged.Start();
```

## See Also

- [Area Index](../)