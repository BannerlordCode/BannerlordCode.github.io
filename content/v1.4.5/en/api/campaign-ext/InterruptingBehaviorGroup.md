---
title: "InterruptingBehaviorGroup"
description: "Auto-generated class reference for InterruptingBehaviorGroup."
---
# InterruptingBehaviorGroup

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class InterruptingBehaviorGroup : AgentBehaviorGroup`
**Base:** `AgentBehaviorGroup`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/InterruptingBehaviorGroup.cs`

## Overview

`InterruptingBehaviorGroup` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of InterruptingBehaviorGroup from the subsystem API first
InterruptingBehaviorGroup interruptingBehaviorGroup = ...;
interruptingBehaviorGroup.Tick(0, false);
```

### GetScore
`public override float GetScore(bool isSimulation)`

**Purpose:** Reads and returns the score value held by the this instance.

```csharp
// Obtain an instance of InterruptingBehaviorGroup from the subsystem API first
InterruptingBehaviorGroup interruptingBehaviorGroup = ...;
var result = interruptingBehaviorGroup.GetScore(false);
```

### ForceThink
`public override void ForceThink(float inSeconds)`

**Purpose:** Executes the ForceThink logic.

```csharp
// Obtain an instance of InterruptingBehaviorGroup from the subsystem API first
InterruptingBehaviorGroup interruptingBehaviorGroup = ...;
interruptingBehaviorGroup.ForceThink(0);
```

### ConversationTick
`public override void ConversationTick()`

**Purpose:** Executes the ConversationTick logic.

```csharp
// Obtain an instance of InterruptingBehaviorGroup from the subsystem API first
InterruptingBehaviorGroup interruptingBehaviorGroup = ...;
interruptingBehaviorGroup.ConversationTick();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
InterruptingBehaviorGroup interruptingBehaviorGroup = ...;
interruptingBehaviorGroup.Tick(0, false);
```

## See Also

- [Area Index](../)