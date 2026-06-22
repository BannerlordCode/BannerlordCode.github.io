<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SallyOutEndLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SallyOutEndLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SallyOutEndLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SallyOutEndLogic.cs`

## Overview

`SallyOutEndLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new SallyOutEndLogic())`; subclass it to customize.

## Key Methods

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### MissionEnded
```csharp
public override bool MissionEnded(ref MissionResult missionResult)
```

## Usage Example

```csharp
// Typical usage of SallyOutEndLogic (Logic)
Mission.Current.AddMissionBehavior(new SallyOutEndLogic());
```

## See Also

- [Complete Class Catalog](../catalog)