<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClearHandInverseKinematicsOnStopUsageComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClearHandInverseKinematicsOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClearHandInverseKinematicsOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ClearHandInverseKinematicsOnStopUsageComponent.cs`

## Overview

`ClearHandInverseKinematicsOnStopUsageComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ClearHandInverseKinematicsOnStopUsageComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var component = agent.GetComponent<ClearHandInverseKinematicsOnStopUsageComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)