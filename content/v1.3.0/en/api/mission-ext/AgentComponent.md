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

`AgentComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `AgentComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Initialize
`public virtual void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.Initialize();
```

### OnTick
`public virtual void OnTick(float dt)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnTick(0);
```

### OnTickParallel
`public virtual void OnTickParallel(float dt)`

**Purpose:** **Purpose:** Invoked when the tick parallel event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnTickParallel(0);
```

### GetMoraleAddition
`public virtual float GetMoraleAddition()`

**Purpose:** **Purpose:** Reads and returns the morale addition value held by the this instance.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
var result = agentComponent.GetMoraleAddition();
```

### GetMoraleDecreaseConstant
`public virtual float GetMoraleDecreaseConstant()`

**Purpose:** **Purpose:** Reads and returns the morale decrease constant value held by the this instance.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
var result = agentComponent.GetMoraleDecreaseConstant();
```

### OnItemPickup
`public virtual void OnItemPickup(SpawnedItemEntity item)`

**Purpose:** **Purpose:** Invoked when the item pickup event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnItemPickup(item);
```

### OnWeaponDrop
`public virtual void OnWeaponDrop(MissionWeapon droppedWeapon)`

**Purpose:** **Purpose:** Invoked when the weapon drop event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnWeaponDrop(droppedWeapon);
```

### OnStopUsingGameObject
`public virtual void OnStopUsingGameObject()`

**Purpose:** **Purpose:** Invoked when the stop using game object event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnStopUsingGameObject();
```

### OnWeaponHPChanged
`public virtual void OnWeaponHPChanged(ItemObject item, int hitPoints)`

**Purpose:** **Purpose:** Invoked when the weapon h p changed event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnWeaponHPChanged(item, 0);
```

### OnRetreating
`public virtual void OnRetreating()`

**Purpose:** **Purpose:** Invoked when the retreating event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnRetreating();
```

### OnMount
`public virtual void OnMount(Agent mount)`

**Purpose:** **Purpose:** Invoked when the mount event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnMount(mount);
```

### OnDismount
`public virtual void OnDismount(Agent mount)`

**Purpose:** **Purpose:** Invoked when the dismount event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnDismount(mount);
```

### OnHit
`public virtual void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon)`

**Purpose:** **Purpose:** Invoked when the hit event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnHit(affectorAgent, 0, affectorWeapon);
```

### OnDisciplineChanged
`public virtual void OnDisciplineChanged()`

**Purpose:** **Purpose:** Invoked when the discipline changed event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnDisciplineChanged();
```

### OnAgentRemoved
`public virtual void OnAgentRemoved()`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnAgentRemoved();
```

### OnAgentTeleported
`public virtual void OnAgentTeleported()`

**Purpose:** **Purpose:** Invoked when the agent teleported event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnAgentTeleported();
```

### OnAIInputSet
`public virtual void OnAIInputSet(ref Agent.EventControlFlag eventFlag, ref Agent.MovementControlFlag movementFlag, ref Vec2 inputVector)`

**Purpose:** **Purpose:** Invoked when the a i input set event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnAIInputSet(eventFlag, movementFlag, inputVector);
```

### OnComponentRemoved
`public virtual void OnComponentRemoved()`

**Purpose:** **Purpose:** Invoked when the component removed event is raised.

```csharp
// Obtain an instance of AgentComponent from the subsystem API first
AgentComponent agentComponent = ...;
agentComponent.OnComponentRemoved();
```

### OnFormationSet
`public virtual void OnFormationSet()`

**Purpose:** **Purpose:** Invoked when the formation set event is raised.

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