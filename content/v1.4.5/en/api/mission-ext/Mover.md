---
title: "Mover"
description: "Auto-generated class reference for Mover."
---
# Mover

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Mover : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mover.cs`

## Overview

`Mover` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** **Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of Mover from the subsystem API first
Mover mover = ...;
var result = mover.GetTickRequirement();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Mover mover = ...;
mover.GetTickRequirement();
```

## See Also

- [Area Index](../)