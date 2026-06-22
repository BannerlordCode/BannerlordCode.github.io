<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CaravanBattleMissionHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CaravanBattleMissionHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CaravanBattleMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/CaravanBattleMissionHandler.cs`

## Overview

`CaravanBattleMissionHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Methods

### AfterStart
```csharp
public override void AfterStart()
```

## Usage Example

```csharp
// Typical usage of CaravanBattleMissionHandler (Handler)
Mission.Current.AddMissionBehavior(new CaravanBattleMissionHandler());
```

## See Also

- [Complete Class Catalog](../catalog)