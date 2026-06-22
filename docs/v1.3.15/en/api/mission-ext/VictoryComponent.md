<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VictoryComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VictoryComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VictoryComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/VictoryComponent.cs`

## Overview

`VictoryComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<VictoryComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### CheckTimer
```csharp
public bool CheckTimer()
```

### ChangeTimerDuration
```csharp
public void ChangeTimerDuration(float min, float max)
```

## Usage Example

```csharp
// Typical usage of VictoryComponent (Component)
agent.GetComponent<VictoryComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)