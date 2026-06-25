---
title: "BasicMissionTimer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BasicMissionTimer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BasicMissionTimer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicMissionTimer`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BasicMissionTimer.cs`

## Overview

`BasicMissionTimer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ElapsedTime` | `public float ElapsedTime { get; }` |

## Key Methods

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### Set
`public void Set(float newElapsedTime)`

**Purpose:** Sets the value or state of `set`.

## Usage Example

```csharp
var value = new BasicMissionTimer();
value.Reset();
```

## See Also

- [Complete Class Catalog](../catalog)