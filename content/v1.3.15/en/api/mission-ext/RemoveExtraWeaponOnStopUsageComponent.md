---
title: "RemoveExtraWeaponOnStopUsageComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RemoveExtraWeaponOnStopUsageComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RemoveExtraWeaponOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade.Objects.Usables
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RemoveExtraWeaponOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/RemoveExtraWeaponOnStopUsageComponent.cs`

## Overview

`RemoveExtraWeaponOnStopUsageComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `RemoveExtraWeaponOnStopUsageComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var component = agent.GetComponent<RemoveExtraWeaponOnStopUsageComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)