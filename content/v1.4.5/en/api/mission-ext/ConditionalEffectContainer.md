---
title: "ConditionalEffectContainer"
description: "Auto-generated class reference for ConditionalEffectContainer."
---
# ConditionalEffectContainer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConditionalEffectContainer : List<MPConditionalEffect>`
**Base:** `List<MPConditionalEffect>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPConditionalEffect.cs`

## Overview

`ConditionalEffectContainer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSatisfied` | `public bool IsSatisfied { get; set; }` |

## Key Methods

### GetState
`public bool GetState(MPConditionalEffect conditionalEffect, Agent agent)`

**Purpose:** Reads and returns the state value held by the this instance.

```csharp
// Obtain an instance of ConditionalEffectContainer from the subsystem API first
ConditionalEffectContainer conditionalEffectContainer = ...;
var result = conditionalEffectContainer.GetState(conditionalEffect, agent);
```

### SetState
`public void SetState(MPConditionalEffect conditionalEffect, Agent agent, bool state)`

**Purpose:** Assigns a new value to state and updates the object's internal state.

```csharp
// Obtain an instance of ConditionalEffectContainer from the subsystem API first
ConditionalEffectContainer conditionalEffectContainer = ...;
conditionalEffectContainer.SetState(conditionalEffect, agent, false);
```

### ResetStates
`public void ResetStates()`

**Purpose:** Returns states to its default or initial condition.

```csharp
// Obtain an instance of ConditionalEffectContainer from the subsystem API first
ConditionalEffectContainer conditionalEffectContainer = ...;
conditionalEffectContainer.ResetStates();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ConditionalEffectContainer conditionalEffectContainer = ...;
conditionalEffectContainer.GetState(conditionalEffect, agent);
```

## See Also

- [Area Index](../)