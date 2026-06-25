---
title: "CommonAIComponent"
description: "Auto-generated class reference for CommonAIComponent."
---
# CommonAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CommonAIComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/CommonAIComponent.cs`

## Overview

`CommonAIComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `CommonAIComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPanicked` | `public bool IsPanicked { get; }` |
| `IsRetreating` | `public bool IsRetreating { get; }` |
| `ReservedRiderAgentIndex` | `public int ReservedRiderAgentIndex { get; }` |
| `InitialMorale` | `public float InitialMorale { get; set; }` |
| `RecoveryMorale` | `public float RecoveryMorale { get; set; }` |
| `Morale` | `public float Morale { get; set; }` |

## Key Methods

### Initialize
`public override void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.Initialize();
```

### OnTickParallel
`public override void OnTickParallel(float dt)`

**Purpose:** Invoked when the `tick parallel` event is raised.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.OnTickParallel(0);
```

### OnTick
`public override void OnTick(float dt)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.OnTick(0);
```

### Panic
`public void Panic()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.Panic();
```

### Retreat
`public void Retreat(bool useCachingSystem = false)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.Retreat(false);
```

### StopRetreating
`public void StopRetreating()`

**Purpose:** Stops the `retreating` flow or state machine.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.StopRetreating();
```

### CanPanic
`public bool CanPanic()`

**Purpose:** Checks whether the current object meets the preconditions for `panic`.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
var result = commonAIComponent.CanPanic();
```

### OnHit
`public override void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)`

**Purpose:** Invoked when the `hit` event is raised.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.OnHit(affectorAgent, 0, affectorWeapon, b, collisionData);
```

### OnAgentRemoved
`public override void OnAgentRemoved()`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.OnAgentRemoved();
```

### OnComponentRemoved
`public override void OnComponentRemoved()`

**Purpose:** Invoked when the `component removed` event is raised.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.OnComponentRemoved();
```

## Usage Example

```csharp
var component = agent.GetComponent<CommonAIComponent>();
```

## See Also

- [Area Index](../)