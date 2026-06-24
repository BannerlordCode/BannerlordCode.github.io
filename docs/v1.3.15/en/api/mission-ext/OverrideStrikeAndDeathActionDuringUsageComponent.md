<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OverrideStrikeAndDeathActionDuringUsageComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OverrideStrikeAndDeathActionDuringUsageComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OverrideStrikeAndDeathActionDuringUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/OverrideStrikeAndDeathActionDuringUsageComponent.cs`

## Overview

`OverrideStrikeAndDeathActionDuringUsageComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `OverrideStrikeAndDeathActionDuringUsageComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var component = agent.GetComponent<OverrideStrikeAndDeathActionDuringUsageComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)