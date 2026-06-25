---
title: "BehaviorProtectGeneral"
description: "Auto-generated class reference for BehaviorProtectGeneral."
---
# BehaviorProtectGeneral

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorProtectGeneral : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorProtectGeneral.cs`

## Overview

`BehaviorProtectGeneral` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NavmeshlessTargetPositionPenalty` | `public override float NavmeshlessTargetPositionPenalty { get; }` |

## Key Methods

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** **Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorProtectGeneral from the subsystem API first
BehaviorProtectGeneral behaviorProtectGeneral = ...;
behaviorProtectGeneral.TickOccasionally();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent agent)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of BehaviorProtectGeneral from the subsystem API first
BehaviorProtectGeneral behaviorProtectGeneral = ...;
behaviorProtectGeneral.OnAgentRemoved(agent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BehaviorProtectGeneral behaviorProtectGeneral = ...;
behaviorProtectGeneral.TickOccasionally();
```

## See Also

- [Area Index](../)