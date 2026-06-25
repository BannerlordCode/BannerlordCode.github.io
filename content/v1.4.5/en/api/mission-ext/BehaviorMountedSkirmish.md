---
title: "BehaviorMountedSkirmish"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BehaviorMountedSkirmish`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BehaviorMountedSkirmish

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorMountedSkirmish : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BehaviorMountedSkirmish.cs`

## Overview

`BehaviorMountedSkirmish` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTargetPos
`public Vec2 GetTargetPos(Vec2 position, float distance)`

**Purpose:** Gets the current value of `target pos`.

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Handles logic related to `tick occasionally`.

## Usage Example

```csharp
var value = new BehaviorMountedSkirmish();
value.GetTargetPos(position, 0);
```

## See Also

- [Complete Class Catalog](../catalog)