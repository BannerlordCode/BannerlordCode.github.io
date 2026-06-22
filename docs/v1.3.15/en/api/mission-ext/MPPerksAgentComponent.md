<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPPerksAgentComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPPerksAgentComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerksAgentComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/MPPerksAgentComponent.cs`

## Overview

`MPPerksAgentComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MPPerksAgentComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### OnMount
```csharp
public override void OnMount(Agent mount)
```

### OnDismount
```csharp
public override void OnDismount(Agent mount)
```

### OnItemPickup
```csharp
public override void OnItemPickup(SpawnedItemEntity item)
```

### OnWeaponDrop
```csharp
public override void OnWeaponDrop(MissionWeapon droppedWeapon)
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved()
```

## Usage Example

```csharp
// Typical usage of MPPerksAgentComponent (Component)
agent.GetComponent<MPPerksAgentComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)