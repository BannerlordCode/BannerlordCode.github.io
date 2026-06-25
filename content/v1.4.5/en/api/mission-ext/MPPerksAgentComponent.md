---
title: "MPPerksAgentComponent"
description: "Auto-generated class reference for MPPerksAgentComponent."
---
# MPPerksAgentComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerksAgentComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPPerksAgentComponent.cs`

## Overview

`MPPerksAgentComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MPPerksAgentComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMount
`public override void OnMount(Agent mount)`

**Purpose:** Invoked when the mount event is raised.

```csharp
// Obtain an instance of MPPerksAgentComponent from the subsystem API first
MPPerksAgentComponent mPPerksAgentComponent = ...;
mPPerksAgentComponent.OnMount(mount);
```

### OnDismount
`public override void OnDismount(Agent mount)`

**Purpose:** Invoked when the dismount event is raised.

```csharp
// Obtain an instance of MPPerksAgentComponent from the subsystem API first
MPPerksAgentComponent mPPerksAgentComponent = ...;
mPPerksAgentComponent.OnDismount(mount);
```

### OnItemPickup
`public override void OnItemPickup(SpawnedItemEntity item)`

**Purpose:** Invoked when the item pickup event is raised.

```csharp
// Obtain an instance of MPPerksAgentComponent from the subsystem API first
MPPerksAgentComponent mPPerksAgentComponent = ...;
mPPerksAgentComponent.OnItemPickup(item);
```

### OnWeaponDrop
`public override void OnWeaponDrop(MissionWeapon droppedWeapon)`

**Purpose:** Invoked when the weapon drop event is raised.

```csharp
// Obtain an instance of MPPerksAgentComponent from the subsystem API first
MPPerksAgentComponent mPPerksAgentComponent = ...;
mPPerksAgentComponent.OnWeaponDrop(droppedWeapon);
```

### OnAgentRemoved
`public override void OnAgentRemoved()`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MPPerksAgentComponent from the subsystem API first
MPPerksAgentComponent mPPerksAgentComponent = ...;
mPPerksAgentComponent.OnAgentRemoved();
```

## Usage Example

```csharp
var component = agent.GetComponent<MPPerksAgentComponent>();
```

## See Also

- [Area Index](../)