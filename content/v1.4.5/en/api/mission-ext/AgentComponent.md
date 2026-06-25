---
title: "AgentComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentComponent`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentComponent.cs`

## Overview

`AgentComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `AgentComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Initialize
`public virtual void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OnTick
`public virtual void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### OnTickParallel
`public virtual void OnTickParallel(float dt)`

**Purpose:** Called when the `tick parallel` event is raised.

### GetMoraleAddition
`public virtual float GetMoraleAddition()`

**Purpose:** Gets the current value of `morale addition`.

### GetMoraleDecreaseConstant
`public virtual float GetMoraleDecreaseConstant()`

**Purpose:** Gets the current value of `morale decrease constant`.

### OnItemPickup
`public virtual void OnItemPickup(SpawnedItemEntity item)`

**Purpose:** Called when the `item pickup` event is raised.

### OnWeaponDrop
`public virtual void OnWeaponDrop(MissionWeapon droppedWeapon)`

**Purpose:** Called when the `weapon drop` event is raised.

### OnStopUsingGameObject
`public virtual void OnStopUsingGameObject()`

**Purpose:** Called when the `stop using game object` event is raised.

### OnWeaponHPChanged
`public virtual void OnWeaponHPChanged(ItemObject item, int hitPoints)`

**Purpose:** Called when the `weapon h p changed` event is raised.

### OnRetreating
`public virtual void OnRetreating()`

**Purpose:** Called when the `retreating` event is raised.

### OnMount
`public virtual void OnMount(Agent mount)`

**Purpose:** Called when the `mount` event is raised.

### OnDismount
`public virtual void OnDismount(Agent mount)`

**Purpose:** Called when the `dismount` event is raised.

### OnHit
`public virtual void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)`

**Purpose:** Called when the `hit` event is raised.

### OnDisciplineChanged
`public virtual void OnDisciplineChanged()`

**Purpose:** Called when the `discipline changed` event is raised.

### OnAgentRemoved
`public virtual void OnAgentRemoved()`

**Purpose:** Called when the `agent removed` event is raised.

### OnAgentTeleported
`public virtual void OnAgentTeleported()`

**Purpose:** Called when the `agent teleported` event is raised.

### OnAIInputSet
`public virtual void OnAIInputSet(ref Agent.EventControlFlag eventFlag, ref Agent.MovementControlFlag movementFlag, ref Vec2 inputVector)`

**Purpose:** Called when the `a i input set` event is raised.

### OnComponentRemoved
`public virtual void OnComponentRemoved()`

**Purpose:** Called when the `component removed` event is raised.

### OnFormationSet
`public virtual void OnFormationSet()`

**Purpose:** Called when the `formation set` event is raised.

## Usage Example

```csharp
var implementation = new CustomAgentComponent();
```

## See Also

- [Complete Class Catalog](../catalog)