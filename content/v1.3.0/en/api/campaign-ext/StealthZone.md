---
title: "StealthZone"
description: "Auto-generated class reference for StealthZone."
---
# StealthZone

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class StealthZone`
**Base:** none
**File:** `SandBox/Objects/StealthZone.cs`

## Overview

`StealthZone` lives in `SandBox.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AreAgentsActive` | `public bool AreAgentsActive { get; }` |
| `UseVolumeBox` | `public bool UseVolumeBox { get; }` |
| `EliminatedAgents` | `public int EliminatedAgents { get; }` |
| `Agents` | `public List<Agent> Agents { get; }` |
| `VolumeBox` | `public VolumeBox VolumeBox { get; }` |

## Key Methods

### SetStealthAgents
`public void SetStealthAgents(List<Agent> agents)`

**Purpose:** Assigns a new value to `stealth agents` and updates the object's internal state.

```csharp
// Obtain an instance of StealthZone from the subsystem API first
StealthZone stealthZone = ...;
stealthZone.SetStealthAgents(agents);
```

### Tick
`public void Tick()`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of StealthZone from the subsystem API first
StealthZone stealthZone = ...;
stealthZone.Tick();
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of StealthZone from the subsystem API first
StealthZone stealthZone = ...;
stealthZone.OnAgentRemoved(affectedAgent, affectorAgent);
```

### IsAgentInside
`public bool IsAgentInside(Agent agent)`

**Purpose:** Determines whether the current object is in the `agent inside` state or condition.

```csharp
// Obtain an instance of StealthZone from the subsystem API first
StealthZone stealthZone = ...;
var result = stealthZone.IsAgentInside(agent);
```

### OnPlayerFlees
`public void OnPlayerFlees()`

**Purpose:** Invoked when the `player flees` event is raised.

```csharp
// Obtain an instance of StealthZone from the subsystem API first
StealthZone stealthZone = ...;
stealthZone.OnPlayerFlees();
```

### ResetEvents
`public void ResetEvents()`

**Purpose:** Returns `events` to its default or initial condition.

```csharp
// Obtain an instance of StealthZone from the subsystem API first
StealthZone stealthZone = ...;
stealthZone.ResetEvents();
```

### DisableAll
`public void DisableAll()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of StealthZone from the subsystem API first
StealthZone stealthZone = ...;
stealthZone.DisableAll();
```

### StealthZoneEvent
`public delegate void StealthZoneEvent()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of StealthZone from the subsystem API first
StealthZone stealthZone = ...;
stealthZone.StealthZoneEvent();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StealthZone stealthZone = ...;
stealthZone.SetStealthAgents(agents);
```

## See Also

- [Area Index](../)