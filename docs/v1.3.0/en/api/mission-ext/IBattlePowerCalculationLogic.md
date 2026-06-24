<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IBattlePowerCalculationLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IBattlePowerCalculationLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IBattlePowerCalculationLogic.cs`

## Overview

`IBattlePowerCalculationLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `IBattlePowerCalculationLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IBattlePowerCalculationLogic implementation = GetBattlePowerCalculationLogicImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)