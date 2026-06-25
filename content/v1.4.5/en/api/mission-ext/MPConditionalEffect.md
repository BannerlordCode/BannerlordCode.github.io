---
title: "MPConditionalEffect"
description: "Auto-generated class reference for MPConditionalEffect."
---
# MPConditionalEffect

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPConditionalEffect`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPConditionalEffect.cs`

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

**Purpose:** **Purpose:** Reads and returns the state value held by the this instance.

```csharp
// Obtain an instance of MPConditionalEffect from the subsystem API first
MPConditionalEffect mPConditionalEffect = ...;
var result = mPConditionalEffect.GetState(conditionalEffect, agent);
```

### SetState
`public void SetState(MPConditionalEffect conditionalEffect, Agent agent, bool state)`

**Purpose:** **Purpose:** Assigns a new value to state and updates the object's internal state.

```csharp
// Obtain an instance of MPConditionalEffect from the subsystem API first
MPConditionalEffect mPConditionalEffect = ...;
mPConditionalEffect.SetState(conditionalEffect, agent, false);
```

### ResetStates
`public void ResetStates()`

**Purpose:** **Purpose:** Returns states to its default or initial condition.

```csharp
// Obtain an instance of MPConditionalEffect from the subsystem API first
MPConditionalEffect mPConditionalEffect = ...;
mPConditionalEffect.ResetStates();
```

### Check
`public bool Check(MissionPeer peer)`

**Purpose:** **Purpose:** Verifies whether the this instance meets the specified condition.

```csharp
// Obtain an instance of MPConditionalEffect from the subsystem API first
MPConditionalEffect mPConditionalEffect = ...;
var result = mPConditionalEffect.Check(peer);
```

### Check
`public bool Check(Agent agent)`

**Purpose:** **Purpose:** Verifies whether the this instance meets the specified condition.

```csharp
// Obtain an instance of MPConditionalEffect from the subsystem API first
MPConditionalEffect mPConditionalEffect = ...;
var result = mPConditionalEffect.Check(agent);
```

### OnEvent
`public void OnEvent(bool isWarmup, MissionPeer peer, ConditionalEffectContainer container)`

**Purpose:** **Purpose:** Invoked when the event event is raised.

```csharp
// Obtain an instance of MPConditionalEffect from the subsystem API first
MPConditionalEffect mPConditionalEffect = ...;
mPConditionalEffect.OnEvent(false, peer, container);
```

### OnEvent
`public void OnEvent(bool isWarmup, Agent agent, ConditionalEffectContainer container)`

**Purpose:** **Purpose:** Invoked when the event event is raised.

```csharp
// Obtain an instance of MPConditionalEffect from the subsystem API first
MPConditionalEffect mPConditionalEffect = ...;
mPConditionalEffect.OnEvent(false, agent, container);
```

### OnTick
`public void OnTick(bool isWarmup, MissionPeer peer, int tickCount)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of MPConditionalEffect from the subsystem API first
MPConditionalEffect mPConditionalEffect = ...;
mPConditionalEffect.OnTick(false, peer, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPConditionalEffect mPConditionalEffect = ...;
mPConditionalEffect.GetState(conditionalEffect, agent);
```

## See Also

- [Area Index](../)