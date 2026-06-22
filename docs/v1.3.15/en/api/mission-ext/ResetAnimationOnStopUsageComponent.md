<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ResetAnimationOnStopUsageComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ResetAnimationOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ResetAnimationOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/ResetAnimationOnStopUsageComponent.cs`

## Overview

`ResetAnimationOnStopUsageComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<ResetAnimationOnStopUsageComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### UpdateSuccessfulResetAction
```csharp
public void UpdateSuccessfulResetAction(ActionIndexCache successfulResetActionCode)
```

## Usage Example

```csharp
// Typical usage of ResetAnimationOnStopUsageComponent (Component)
agent.GetComponent<ResetAnimationOnStopUsageComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)