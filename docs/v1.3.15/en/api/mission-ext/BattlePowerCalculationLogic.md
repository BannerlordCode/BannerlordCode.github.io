<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattlePowerCalculationLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattlePowerCalculationLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePowerCalculationLogic : MissionLogic, IBattlePowerCalculationLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattlePowerCalculationLogic.cs`

## Overview

`BattlePowerCalculationLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new BattlePowerCalculationLogic())`; subclass it to customize.

## Key Methods

### GetTotalTeamPower
```csharp
public float GetTotalTeamPower(Team team)
```

## Usage Example

```csharp
// Typical usage of BattlePowerCalculationLogic (Logic)
Mission.Current.AddMissionBehavior(new BattlePowerCalculationLogic());
```

## See Also

- [Complete Class Catalog](../catalog)