<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleMissionStarterLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleMissionStarterLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleMissionStarterLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleMissionStarterLogic.cs`

## Overview

`BattleMissionStarterLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new BattleMissionStarterLogic())`; subclass it to customize.

## Key Methods

### AfterStart
```csharp
public override void AfterStart()
```

## Usage Example

```csharp
// Typical usage of BattleMissionStarterLogic (Logic)
Mission.Current.AddMissionBehavior(new BattleMissionStarterLogic());
```

## See Also

- [Complete Class Catalog](../catalog)