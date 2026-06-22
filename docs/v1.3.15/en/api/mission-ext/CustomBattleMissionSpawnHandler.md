<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleMissionSpawnHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleMissionSpawnHandler

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleMissionSpawnHandler : CustomMissionSpawnHandler`
**Base:** `CustomMissionSpawnHandler`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomBattleMissionSpawnHandler.cs`

## Overview

`CustomBattleMissionSpawnHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Methods

### AfterStart
```csharp
public override void AfterStart()
```

## Usage Example

```csharp
// Typical usage of CustomBattleMissionSpawnHandler (Handler)
Mission.Current.AddMissionBehavior(new CustomBattleMissionSpawnHandler());
```

## See Also

- [Complete Class Catalog](../catalog)