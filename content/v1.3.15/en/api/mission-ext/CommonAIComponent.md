---
title: "CommonAIComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CommonAIComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OnTickParallel
`public override void OnTickParallel(float dt)`

**Purpose:** Called when the `tick parallel` event is raised.

### OnTick
`public override void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### Panic
`public void Panic()`

**Purpose:** Handles logic related to `panic`.

### Retreat
`public void Retreat(bool useCachingSystem = false)`

**Purpose:** Handles logic related to `retreat`.

### StopRetreating
`public void StopRetreating()`

**Purpose:** Handles logic related to `stop retreating`.

### CanPanic
`public bool CanPanic()`

**Purpose:** Checks whether the current object can `panic`.

### OnHit
`public override void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)`

**Purpose:** Called when the `hit` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved()`

**Purpose:** Called when the `agent removed` event is raised.

### OnComponentRemoved
`public override void OnComponentRemoved()`

**Purpose:** Called when the `component removed` event is raised.

## Usage Example

```csharp
var component = agent.GetComponent<CommonAIComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)