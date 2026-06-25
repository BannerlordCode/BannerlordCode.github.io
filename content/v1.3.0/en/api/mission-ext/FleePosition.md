---
title: "FleePosition"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FleePosition`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FleePosition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FleePosition : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/FleePosition.cs`

## Overview

`FleePosition` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSide
`public BattleSideEnum GetSide()`

**Purpose:** Gets the current value of `side`.

### GetClosestPointToEscape
`public Vec3 GetClosestPointToEscape(Vec2 position)`

**Purpose:** Gets the current value of `closest point to escape`.

## Usage Example

```csharp
var value = new FleePosition();
value.GetSide();
```

## See Also

- [Complete Class Catalog](../catalog)