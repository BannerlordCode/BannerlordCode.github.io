---
title: "ScriptedMovementComponent"
description: "Auto-generated class reference for ScriptedMovementComponent."
---
# ScriptedMovementComponent

**Namespace:** TaleWorlds.MountAndBlade.AI.AgentComponents
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScriptedMovementComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/AI/AgentComponents/ScriptedMovementComponent.cs`

## Overview

`ScriptedMovementComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ScriptedMovementComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetTargetAgent
`public void SetTargetAgent(Agent targetAgent)`

**Purpose:** **Purpose:** Assigns a new value to target agent and updates the object's internal state.

```csharp
// Obtain an instance of ScriptedMovementComponent from the subsystem API first
ScriptedMovementComponent scriptedMovementComponent = ...;
scriptedMovementComponent.SetTargetAgent(targetAgent);
```

### OnTick
`public override void OnTick(float dt)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of ScriptedMovementComponent from the subsystem API first
ScriptedMovementComponent scriptedMovementComponent = ...;
scriptedMovementComponent.OnTick(0);
```

### ShouldConversationStartWithAgent
`public bool ShouldConversationStartWithAgent()`

**Purpose:** **Purpose:** Executes the ShouldConversationStartWithAgent logic.

```csharp
// Obtain an instance of ScriptedMovementComponent from the subsystem API first
ScriptedMovementComponent scriptedMovementComponent = ...;
var result = scriptedMovementComponent.ShouldConversationStartWithAgent();
```

### Reset
`public void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of ScriptedMovementComponent from the subsystem API first
ScriptedMovementComponent scriptedMovementComponent = ...;
scriptedMovementComponent.Reset();
```

## Usage Example

```csharp
var component = agent.GetComponent<ScriptedMovementComponent>();
```

## See Also

- [Area Index](../)