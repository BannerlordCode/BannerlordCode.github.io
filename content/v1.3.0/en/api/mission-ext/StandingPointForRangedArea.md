---
title: "StandingPointForRangedArea"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StandingPointForRangedArea`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `is disabled for agent`.

### GetUsageScoreForAgent
`public override float GetUsageScoreForAgent(Agent agent)`

**Purpose:** Gets the current value of `usage score for agent`.

### HasAlternative
`public override bool HasAlternative()`

**Purpose:** Checks whether the current object has/contains `alternative`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

## Usage Example

```csharp
var value = new StandingPointForRangedArea();
value.IsDisabledForAgent(agent);
```

## See Also

- [Complete Class Catalog](../catalog)