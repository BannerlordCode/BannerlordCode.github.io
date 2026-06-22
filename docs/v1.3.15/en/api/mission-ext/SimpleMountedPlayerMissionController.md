<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SimpleMountedPlayerMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SimpleMountedPlayerMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SimpleMountedPlayerMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/SimpleMountedPlayerMissionController.cs`

## Overview

`SimpleMountedPlayerMissionController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Methods

### AfterStart
```csharp
public override void AfterStart()
```

### MissionEnded
```csharp
public override bool MissionEnded(ref MissionResult missionResult)
```

## Usage Example

```csharp
// Typical usage of SimpleMountedPlayerMissionController (Controller)
Mission.Current.GetMissionBehavior<SimpleMountedPlayerMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)