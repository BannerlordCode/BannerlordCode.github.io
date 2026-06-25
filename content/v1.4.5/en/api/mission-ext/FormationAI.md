---
title: "FormationAI"
description: "Auto-generated class reference for FormationAI."
---
# FormationAI

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationAI`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormationAI.cs`

## Overview

`FormationAI` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveBehavior` | `public BehaviorComponent ActiveBehavior { get; }` |
| `Side` | `public BehaviorSide Side { get; set; }` |
| `IsMainFormation` | `public bool IsMainFormation { get; set; }` |

## Key Methods

### AddAiBehavior
`public void AddAiBehavior(BehaviorComponent behaviorComponent)`

**Purpose:** Adds ai behavior to the current collection or state.

```csharp
// Obtain an instance of FormationAI from the subsystem API first
FormationAI formationAI = ...;
formationAI.AddAiBehavior(behaviorComponent);
```

### AddSpecialBehavior
`public void AddSpecialBehavior(BehaviorComponent behavior, bool purgePreviousSpecialBehaviors = false)`

**Purpose:** Adds special behavior to the current collection or state.

```csharp
// Obtain an instance of FormationAI from the subsystem API first
FormationAI formationAI = ...;
formationAI.AddSpecialBehavior(behavior, false);
```

### Tick
`public void Tick()`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of FormationAI from the subsystem API first
FormationAI formationAI = ...;
formationAI.Tick();
```

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of FormationAI from the subsystem API first
FormationAI formationAI = ...;
formationAI.OnDeploymentFinished();
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of FormationAI from the subsystem API first
FormationAI formationAI = ...;
formationAI.OnAgentRemoved(agent);
```

### GetBehaviorAtIndex
`public BehaviorComponent GetBehaviorAtIndex(int index)`

**Purpose:** Reads and returns the behavior at index value held by the this instance.

```csharp
// Obtain an instance of FormationAI from the subsystem API first
FormationAI formationAI = ...;
var result = formationAI.GetBehaviorAtIndex(0);
```

### DebugMore
`public void DebugMore()`

**Purpose:** Executes the DebugMore logic.

```csharp
// Obtain an instance of FormationAI from the subsystem API first
FormationAI formationAI = ...;
formationAI.DebugMore();
```

### DebugScores
`public void DebugScores()`

**Purpose:** Executes the DebugScores logic.

```csharp
// Obtain an instance of FormationAI from the subsystem API first
FormationAI formationAI = ...;
formationAI.DebugScores();
```

### ResetBehaviorWeights
`public void ResetBehaviorWeights()`

**Purpose:** Returns behavior weights to its default or initial condition.

```csharp
// Obtain an instance of FormationAI from the subsystem API first
FormationAI formationAI = ...;
formationAI.ResetBehaviorWeights();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FormationAI formationAI = ...;
formationAI.AddAiBehavior(behaviorComponent);
```

## See Also

- [Area Index](../)