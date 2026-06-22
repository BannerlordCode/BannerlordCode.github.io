<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomSiegeMissionSpawnHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomSiegeMissionSpawnHandler

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomSiegeMissionSpawnHandler : CustomMissionSpawnHandler`
**Base:** `CustomMissionSpawnHandler`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSiegeMissionSpawnHandler.cs`

## Overview

`CustomSiegeMissionSpawnHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Methods

### AfterStart
```csharp
public override void AfterStart()
```

## Usage Example

```csharp
// Typical usage of CustomSiegeMissionSpawnHandler (Handler)
Mission.Current.AddMissionBehavior(new CustomSiegeMissionSpawnHandler());
```

## See Also

- [Complete Class Catalog](../catalog)