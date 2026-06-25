---
title: "TalkBehavior"
description: "Auto-generated class reference for TalkBehavior."
---
# TalkBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class TalkBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/TalkBehavior.cs`

## Overview

`TalkBehavior` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of TalkBehavior from the subsystem API first
TalkBehavior talkBehavior = ...;
talkBehavior.Tick(0, false);
```

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** Reads and returns the `availability` value held by the current object.

```csharp
// Obtain an instance of TalkBehavior from the subsystem API first
TalkBehavior talkBehavior = ...;
var result = talkBehavior.GetAvailability(false);
```

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** Reads and returns the `debug info` value held by the current object.

```csharp
// Obtain an instance of TalkBehavior from the subsystem API first
TalkBehavior talkBehavior = ...;
var result = talkBehavior.GetDebugInfo();
```

### Disable
`public void Disable()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TalkBehavior from the subsystem API first
TalkBehavior talkBehavior = ...;
talkBehavior.Disable();
```

### Enable
`public void Enable(bool doNotMove)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TalkBehavior from the subsystem API first
TalkBehavior talkBehavior = ...;
talkBehavior.Enable(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TalkBehavior talkBehavior = ...;
talkBehavior.Tick(0, false);
```

## See Also

- [Area Index](../)