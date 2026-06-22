<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionOptionsComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionOptionsComponent

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOptionsComponent : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/MissionOptionsComponent.cs`

## Overview

`MissionOptionsComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MissionOptionsComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### OnAddOptionsUIHandler
```csharp
public void OnAddOptionsUIHandler()
```

## Usage Example

```csharp
// Typical usage of MissionOptionsComponent (Component)
agent.GetComponent<MissionOptionsComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)