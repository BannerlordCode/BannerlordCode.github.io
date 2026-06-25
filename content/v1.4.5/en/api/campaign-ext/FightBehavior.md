---
title: "FightBehavior"
description: "Auto-generated class reference for FightBehavior."
---
# FightBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class FightBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/FightBehavior.cs`

## Overview

`FightBehavior` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** **Purpose:** Reads and returns the availability value held by the this instance.

```csharp
// Obtain an instance of FightBehavior from the subsystem API first
FightBehavior fightBehavior = ...;
var result = fightBehavior.GetAvailability(false);
```

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** **Purpose:** Reads and returns the debug info value held by the this instance.

```csharp
// Obtain an instance of FightBehavior from the subsystem API first
FightBehavior fightBehavior = ...;
var result = fightBehavior.GetDebugInfo();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FightBehavior fightBehavior = ...;
fightBehavior.GetAvailability(false);
```

## See Also

- [Area Index](../)