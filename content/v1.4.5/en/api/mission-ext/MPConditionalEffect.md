---
title: "MPConditionalEffect"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPConditionalEffect`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPConditionalEffect

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPConditionalEffect`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPConditionalEffect.cs`

## Overview

`MPConditionalEffect` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSatisfied` | `public bool IsSatisfied { get; set; }` |
| `Conditions` | `public MBReadOnlyList<MPPerkCondition> Conditions { get; }` |
| `Effects` | `public MBReadOnlyList<MPPerkEffectBase> Effects { get; }` |
| `EventFlags` | `public MPPerkCondition.PerkEventFlags EventFlags { get; }` |
| `IsTickRequired` | `public bool IsTickRequired { get; }` |

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

### Check
`public bool Check(MissionPeer peer)`

**Purpose:** Handles logic related to `check`.

### Check
`public bool Check(Agent agent)`

**Purpose:** Handles logic related to `check`.

### OnEvent
`public void OnEvent(bool isWarmup, MissionPeer peer, ConditionalEffectContainer container)`

**Purpose:** Called when the `event` event is raised.

### OnEvent
`public void OnEvent(bool isWarmup, Agent agent, ConditionalEffectContainer container)`

**Purpose:** Called when the `event` event is raised.

### OnTick
`public void OnTick(bool isWarmup, MissionPeer peer, int tickCount)`

**Purpose:** Called when the `tick` event is raised.

## Usage Example

```csharp
var value = new MPConditionalEffect();
value.GetState(conditionalEffect, agent);
```

## See Also

- [Complete Class Catalog](../catalog)