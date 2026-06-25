---
title: "StandingPointForRangedArea"
description: "Auto-generated class reference for StandingPointForRangedArea."
---
# StandingPointForRangedArea

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StandingPointForRangedArea : StandingPoint`
**Base:** `StandingPoint`
**File:** `TaleWorlds.MountAndBlade/StandingPointForRangedArea.cs`

## Overview

`StandingPointForRangedArea` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DisableScriptedFrameFlags` | `public override Agent.AIScriptedFrameFlags DisableScriptedFrameFlags { get; }` |

## Key Methods

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Determines whether the current object is in the `disabled for agent` state or condition.

```csharp
// Obtain an instance of StandingPointForRangedArea from the subsystem API first
StandingPointForRangedArea standingPointForRangedArea = ...;
var result = standingPointForRangedArea.IsDisabledForAgent(agent);
```

### GetUsageScoreForAgent
`public override float GetUsageScoreForAgent(Agent agent)`

**Purpose:** Reads and returns the `usage score for agent` value held by the current object.

```csharp
// Obtain an instance of StandingPointForRangedArea from the subsystem API first
StandingPointForRangedArea standingPointForRangedArea = ...;
var result = standingPointForRangedArea.GetUsageScoreForAgent(agent);
```

### HasAlternative
`public override bool HasAlternative()`

**Purpose:** Determines whether the current object already holds `alternative`.

```csharp
// Obtain an instance of StandingPointForRangedArea from the subsystem API first
StandingPointForRangedArea standingPointForRangedArea = ...;
var result = standingPointForRangedArea.HasAlternative();
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of StandingPointForRangedArea from the subsystem API first
StandingPointForRangedArea standingPointForRangedArea = ...;
var result = standingPointForRangedArea.GetTickRequirement();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StandingPointForRangedArea standingPointForRangedArea = ...;
standingPointForRangedArea.IsDisabledForAgent(agent);
```

## See Also

- [Area Index](../)