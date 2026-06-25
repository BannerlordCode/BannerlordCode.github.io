---
title: "MPPerksAgentComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPPerksAgentComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPPerksAgentComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerksAgentComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPPerksAgentComponent.cs`

## Overview

`MPPerksAgentComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MPPerksAgentComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMount
`public override void OnMount(Agent mount)`

**Purpose:** Called when the `mount` event is raised.

### OnDismount
`public override void OnDismount(Agent mount)`

**Purpose:** Called when the `dismount` event is raised.

### OnItemPickup
`public override void OnItemPickup(SpawnedItemEntity item)`

**Purpose:** Called when the `item pickup` event is raised.

### OnWeaponDrop
`public override void OnWeaponDrop(MissionWeapon droppedWeapon)`

**Purpose:** Called when the `weapon drop` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved()`

**Purpose:** Called when the `agent removed` event is raised.

## Usage Example

```csharp
var component = agent.GetComponent<MPPerksAgentComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)