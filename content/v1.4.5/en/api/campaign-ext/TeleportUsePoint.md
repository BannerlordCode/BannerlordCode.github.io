---
title: "TeleportUsePoint"
description: "Auto-generated class reference for TeleportUsePoint."
---
# TeleportUsePoint

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class TeleportUsePoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `Modules.SandBox/SandBox/SandBox.Objects/TeleportUsePoint.cs`

## Overview

`TeleportUsePoint` lives in `SandBox.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsAIMovingTo
`public override bool IsAIMovingTo(Agent agent)`

**Purpose:** Determines whether the current object is in the `a i moving to` state or condition.

```csharp
// Obtain an instance of TeleportUsePoint from the subsystem API first
TeleportUsePoint teleportUsePoint = ...;
var result = teleportUsePoint.IsAIMovingTo(agent);
```

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**Purpose:** Determines whether the current object is in the `usable by agent` state or condition.

```csharp
// Obtain an instance of TeleportUsePoint from the subsystem API first
TeleportUsePoint teleportUsePoint = ...;
var result = teleportUsePoint.IsUsableByAgent(userAgent);
```

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Determines whether the current object is in the `disabled for agent` state or condition.

```csharp
// Obtain an instance of TeleportUsePoint from the subsystem API first
TeleportUsePoint teleportUsePoint = ...;
var result = teleportUsePoint.IsDisabledForAgent(agent);
```

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Invoked when the `use` event is raised.

```csharp
// Obtain an instance of TeleportUsePoint from the subsystem API first
TeleportUsePoint teleportUsePoint = ...;
teleportUsePoint.OnUse(userAgent, 0);
```

### Deactivate
`public void Deactivate()`

**Purpose:** Deactivates the resource, state, or feature represented by the current object.

```csharp
// Obtain an instance of TeleportUsePoint from the subsystem API first
TeleportUsePoint teleportUsePoint = ...;
teleportUsePoint.Deactivate();
```

### Activate
`public void Activate()`

**Purpose:** Activates the resource, state, or feature represented by the current object.

```csharp
// Obtain an instance of TeleportUsePoint from the subsystem API first
TeleportUsePoint teleportUsePoint = ...;
teleportUsePoint.Activate();
```

### OnFocusGain
`public override void OnFocusGain(Agent userAgent)`

**Purpose:** Invoked when the `focus gain` event is raised.

```csharp
// Obtain an instance of TeleportUsePoint from the subsystem API first
TeleportUsePoint teleportUsePoint = ...;
teleportUsePoint.OnFocusGain(userAgent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TeleportUsePoint teleportUsePoint = ...;
teleportUsePoint.IsAIMovingTo(agent);
```

## See Also

- [Area Index](../)