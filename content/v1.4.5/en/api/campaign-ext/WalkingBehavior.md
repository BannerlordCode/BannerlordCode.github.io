---
title: "WalkingBehavior"
description: "Auto-generated class reference for WalkingBehavior."
---
# WalkingBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class WalkingBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/WalkingBehavior.cs`

## Overview

`WalkingBehavior` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetIndoorWandering
`public void SetIndoorWandering(bool isActive)`

**Purpose:** **Purpose:** Assigns a new value to indoor wandering and updates the object's internal state.

```csharp
// Obtain an instance of WalkingBehavior from the subsystem API first
WalkingBehavior walkingBehavior = ...;
walkingBehavior.SetIndoorWandering(false);
```

### SetOutdoorWandering
`public void SetOutdoorWandering(bool isActive)`

**Purpose:** **Purpose:** Assigns a new value to outdoor wandering and updates the object's internal state.

```csharp
// Obtain an instance of WalkingBehavior from the subsystem API first
WalkingBehavior walkingBehavior = ...;
walkingBehavior.SetOutdoorWandering(false);
```

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of WalkingBehavior from the subsystem API first
WalkingBehavior walkingBehavior = ...;
walkingBehavior.Tick(0, false);
```

### ConversationTick
`public override void ConversationTick()`

**Purpose:** **Purpose:** Executes the ConversationTick logic.

```csharp
// Obtain an instance of WalkingBehavior from the subsystem API first
WalkingBehavior walkingBehavior = ...;
walkingBehavior.ConversationTick();
```

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** **Purpose:** Reads and returns the availability value held by the this instance.

```csharp
// Obtain an instance of WalkingBehavior from the subsystem API first
WalkingBehavior walkingBehavior = ...;
var result = walkingBehavior.GetAvailability(false);
```

### SetCustomWanderTarget
`public override void SetCustomWanderTarget(UsableMachine customUsableMachine)`

**Purpose:** **Purpose:** Assigns a new value to custom wander target and updates the object's internal state.

```csharp
// Obtain an instance of WalkingBehavior from the subsystem API first
WalkingBehavior walkingBehavior = ...;
walkingBehavior.SetCustomWanderTarget(customUsableMachine);
```

### OnSpecialTargetChanged
`public override void OnSpecialTargetChanged()`

**Purpose:** **Purpose:** Invoked when the special target changed event is raised.

```csharp
// Obtain an instance of WalkingBehavior from the subsystem API first
WalkingBehavior walkingBehavior = ...;
walkingBehavior.OnSpecialTargetChanged();
```

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** **Purpose:** Reads and returns the debug info value held by the this instance.

```csharp
// Obtain an instance of WalkingBehavior from the subsystem API first
WalkingBehavior walkingBehavior = ...;
var result = walkingBehavior.GetDebugInfo();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WalkingBehavior walkingBehavior = ...;
walkingBehavior.SetIndoorWandering(false);
```

## See Also

- [Area Index](../)