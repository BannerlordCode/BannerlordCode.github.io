---
title: "AgentComponent"
description: "Auto-generated class reference for AgentComponent."
---
# AgentComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentComponent`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AgentComponent.cs`

## Overview

The base class for every piece of behaviour you can bolt onto a live `Agent`. It is abstract but has no abstract members — all twenty-one of its hooks are `virtual` with empty bodies, so you override only what you need and inherit no-ops for the rest. It holds exactly one field, `protected readonly Agent Agent` (`AgentComponent.cs:114`), assigned by the protected constructor (`AgentComponent.cs:11`-`AgentComponent.cs:13`). The lifecycle is: `Initialize` once, then `OnTick`/`OnTickParallel` every frame, then agent events, then `OnComponentRemoved` when the agent drops it.

## Mental Model

Think of it as a subscription with a guaranteed `Agent` handle. The class exists so the engine can iterate a heterogeneous list without knowing any concrete type — `Agent.Components` (`Agent.cs:264`) is a flat read-only list that the mission ticks and queries. Two hooks are not really events but queries: `GetMoraleAddition` (`AgentComponent.cs:32`) and `GetMoraleDecreaseConstant` (`AgentComponent.cs:38`), both of which return a neutral default (`0f` and `1f`) rather than zero, so a component that overrides neither contributes nothing rather than breaking morale. `OnAIInputSet` (`AgentComponent.cs:99`) is the other unusual one — it takes three `ref` parameters (`Agent.EventControlFlag`, `Agent.MovementControlFlag`, `Vec2`) that it is expected to write, making it a vote on what the agent does next rather than a notification.

## How to use

**Getting one.** Construct it with the agent you are attaching it to and hand it to `Agent.AddComponent` (`Agent.cs:4600`). Read it back with `Agent.GetComponent<T>()` (`Agent.cs:3107`) or iterate `Agent.Components` (`Agent.cs:264`).

**Typical use.**

```csharp
public sealed class MyModRetaliationComponent : AgentComponent
{
    private float _accumulatedDamage;

    public MyModRetaliationComponent(Agent agent) : base(agent) { }  // ctor at AgentComponent.cs:11

    public override void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon)
    {
        _accumulatedDamage += damage;                                 // AgentComponent.cs:79
    }

    // InitializeMorale sums this across EVERY component (CommonAIComponent.cs:82), once.
    public override float GetMoraleAddition()
    {
        return _accumulatedDamage > 50f ? 10f : 0f;                   // AgentComponent.cs:32
    }

    // The only cleanup hook - RemoveComponent calls it (Agent.cs:4622).
    public override void OnComponentRemoved()
    {
        _accumulatedDamage = 0f;                                      // AgentComponent.cs:104
    }
}

agent.AddComponent(new MyModRetaliationComponent(agent));            // Agent.cs:4600
MyModRetaliationComponent mine = agent.GetComponent<MyModRetaliationComponent>();  // Agent.cs:3107
```

**Watch out.** `GetMoraleAddition` is not read continuously — `CommonAIComponent.InitializeMorale` sums it over `Agent.Components` exactly once when morale is first set up (`CommonAIComponent.cs:82`) and then clamps the total into 15-100 (`CommonAIComponent.cs:85`). A component that accumulates damage and raises its return value later has no effect at all, because the sum was already taken; and a large return value from one component is silently clipped by the clamp instead of being reported. Separately, the default `OnComponentRemoved` body is empty (`AgentComponent.cs:104`) — it is the only teardown hook and `RemoveComponent` calls it for you (`Agent.cs:4622`), so if you cache an agent, a subsystem or a mission reference in `Initialize` (`AgentComponent.cs:17`), that reference outlives your own component unless you clear it here.

## Key Methods

### Initialize
`public virtual void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.Initialize();
```

### OnTick
`public virtual void OnTick(float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnTick(0);
```

### OnTickParallel
`public virtual void OnTickParallel(float dt)`

**Purpose:** Invoked when the tick parallel event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnTickParallel(0);
```

### GetMoraleAddition
`public virtual float GetMoraleAddition()`

**Purpose:** Reads and returns the morale addition value held by the this instance.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
var result = agentComponent.GetMoraleAddition();
```

### GetMoraleDecreaseConstant
`public virtual float GetMoraleDecreaseConstant()`

**Purpose:** Reads and returns the morale decrease constant value held by the this instance.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
var result = agentComponent.GetMoraleDecreaseConstant();
```

### OnItemPickup
`public virtual void OnItemPickup(SpawnedItemEntity item)`

**Purpose:** Invoked when the item pickup event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnItemPickup(item);
```

### OnWeaponDrop
`public virtual void OnWeaponDrop(MissionWeapon droppedWeapon)`

**Purpose:** Invoked when the weapon drop event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnWeaponDrop(droppedWeapon);
```

### OnStopUsingGameObject
`public virtual void OnStopUsingGameObject()`

**Purpose:** Invoked when the stop using game object event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnStopUsingGameObject();
```

### OnWeaponHPChanged
`public virtual void OnWeaponHPChanged(ItemObject item, int hitPoints)`

**Purpose:** Invoked when the weapon h p changed event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnWeaponHPChanged(item, 0);
```

### OnRetreating
`public virtual void OnRetreating()`

**Purpose:** Invoked when the retreating event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnRetreating();
```

### OnMount
`public virtual void OnMount(Agent mount)`

**Purpose:** Invoked when the mount event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnMount(mount);
```

### OnDismount
`public virtual void OnDismount(Agent mount)`

**Purpose:** Invoked when the dismount event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnDismount(mount);
```

### OnHit
`public virtual void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon)`

**Purpose:** Invoked when the hit event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnHit(affectorAgent, 0, affectorWeapon);
```

### OnDisciplineChanged
`public virtual void OnDisciplineChanged()`

**Purpose:** Invoked when the discipline changed event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnDisciplineChanged();
```

### OnAgentRemoved
`public virtual void OnAgentRemoved()`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnAgentRemoved();
```

### OnAgentTeleported
`public virtual void OnAgentTeleported()`

**Purpose:** Invoked when the agent teleported event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnAgentTeleported();
```

### OnAIInputSet
`public virtual void OnAIInputSet(ref Agent.EventControlFlag eventFlag, ref Agent.MovementControlFlag movementFlag, ref Vec2 inputVector)`

**Purpose:** Invoked when the a i input set event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnAIInputSet(eventFlag, movementFlag, inputVector);
```

### OnComponentRemoved
`public virtual void OnComponentRemoved()`

**Purpose:** Invoked when the component removed event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnComponentRemoved();
```

### OnFormationSet
`public virtual void OnFormationSet()`

**Purpose:** Invoked when the formation set event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnFormationSet();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
AgentComponent instance = ...;
```

## See Also

- [Area Index](../)
- [Agent](../../mission/Agent)
- [CommonAIComponent](../CommonAIComponent)