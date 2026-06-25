---
title: "IncrementalTimer"
description: "Auto-generated class reference for IncrementalTimer."
---
# IncrementalTimer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class IncrementalTimer`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IncrementalTimer.cs`

## Overview

`IncrementalTimer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TimerCounter` | `public float TimerCounter { get; }` |

## Key Methods

### Check
`public bool Check()`

**Purpose:** Verifies whether the current object meets the specified condition.

```csharp
// Obtain an instance of IncrementalTimer from the subsystem API first
IncrementalTimer incrementalTimer = ...;
var result = incrementalTimer.Check();
```

### HasEnded
`public bool HasEnded()`

**Purpose:** Determines whether the current object already holds `ended`.

```csharp
// Obtain an instance of IncrementalTimer from the subsystem API first
IncrementalTimer incrementalTimer = ...;
var result = incrementalTimer.HasEnded();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
IncrementalTimer incrementalTimer = ...;
incrementalTimer.Check();
```

## See Also

- [Area Index](../)