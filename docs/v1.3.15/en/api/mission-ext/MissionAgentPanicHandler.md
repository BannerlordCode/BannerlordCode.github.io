<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentPanicHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionAgentPanicHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentPanicHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionAgentPanicHandler.cs`

## Overview

`MissionAgentPanicHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionAgentPanicHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentPanicked
`public override void OnAgentPanicked(Agent agent)`

**Purpose:** Called when the `agent panicked` event is raised.

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Called when the `pre mission tick` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionAgentPanicHandler());
```

## See Also

- [Complete Class Catalog](../catalog)