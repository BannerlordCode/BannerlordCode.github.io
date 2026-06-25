---
title: "CautiousBehavior"
description: "Auto-generated class reference for CautiousBehavior."
---
# CautiousBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class CautiousBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/CautiousBehavior.cs`

## Overview

`CautiousBehavior` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of CautiousBehavior from the subsystem API first
CautiousBehavior cautiousBehavior = ...;
cautiousBehavior.Tick(0, false);
```

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** Reads and returns the availability value held by the this instance.

```csharp
// Obtain an instance of CautiousBehavior from the subsystem API first
CautiousBehavior cautiousBehavior = ...;
var result = cautiousBehavior.GetAvailability(false);
```

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** Reads and returns the debug info value held by the this instance.

```csharp
// Obtain an instance of CautiousBehavior from the subsystem API first
CautiousBehavior cautiousBehavior = ...;
var result = cautiousBehavior.GetDebugInfo();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CautiousBehavior cautiousBehavior = ...;
cautiousBehavior.Tick(0, false);
```

## See Also

- [Area Index](../)