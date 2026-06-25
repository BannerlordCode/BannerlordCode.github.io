---
title: "ConditionalEffectContainer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConditionalEffectContainer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConditionalEffectContainer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConditionalEffectContainer : List<MPConditionalEffect>`
**Base:** `List<MPConditionalEffect>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPConditionalEffect.cs`

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

**Purpose:** Gets the current value of `state`.

### SetState
`public void SetState(MPConditionalEffect conditionalEffect, Agent agent, bool state)`

**Purpose:** Sets the value or state of `state`.

### ResetStates
`public void ResetStates()`

**Purpose:** Resets `states` to its initial state.

## Usage Example

```csharp
var value = new ConditionalEffectContainer();
value.GetState(conditionalEffect, agent);
```

## See Also

- [Complete Class Catalog](../catalog)