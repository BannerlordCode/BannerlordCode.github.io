---
title: "ConditionalEffectContainer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConditionalEffectContainer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConditionalEffectContainer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConditionalEffectContainer : List<MPConditionalEffect>`
**Base:** `List<MPConditionalEffect>`
**Area:** mission-ext

## Overview

`ConditionalEffectContainer` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Conditions` | `public MBReadOnlyList<MPPerkCondition> Conditions { get; }` |
| `Effects` | `public MBReadOnlyList<MPPerkEffectBase> Effects { get; }` |
| `EventFlags` | `public MPPerkCondition.PerkEventFlags EventFlags { get; }` |
| `IsTickRequired` | `public bool IsTickRequired { get; }` |
| `IsSatisfied` | `public bool IsSatisfied { get; set; }` |

## Key Methods

### Check
`public bool Check(MissionPeer peer)`

**Purpose:** Handles logic related to `check`.

### Check
`public bool Check(Agent agent)`

**Purpose:** Handles logic related to `check`.

### OnEvent
`public void OnEvent(bool isWarmup, MissionPeer peer, MPConditionalEffect.ConditionalEffectContainer container)`

**Purpose:** Called when the `event` event is raised.

### OnEvent
`public void OnEvent(bool isWarmup, Agent agent, MPConditionalEffect.ConditionalEffectContainer container)`

**Purpose:** Called when the `event` event is raised.

### OnTick
`public void OnTick(bool isWarmup, MissionPeer peer, int tickCount)`

**Purpose:** Called when the `tick` event is raised.

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
// First obtain a ConditionalEffectContainer instance from game state, then call one of its public methods
var value = new ConditionalEffectContainer();
value.Check(peer);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
