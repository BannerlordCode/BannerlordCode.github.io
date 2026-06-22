<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RemoveExtraWeaponOnStopUsageComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RemoveExtraWeaponOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade.Objects.Usables
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RemoveExtraWeaponOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/RemoveExtraWeaponOnStopUsageComponent.cs`

## Overview

`RemoveExtraWeaponOnStopUsageComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<RemoveExtraWeaponOnStopUsageComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Usage Example

```csharp
// Typical usage of RemoveExtraWeaponOnStopUsageComponent (Component)
agent.GetComponent<RemoveExtraWeaponOnStopUsageComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)