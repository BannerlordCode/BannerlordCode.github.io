<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DebugAgentTeleporterMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DebugAgentTeleporterMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DebugAgentTeleporterMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/DebugAgentTeleporterMissionController.cs`

## Overview

`DebugAgentTeleporterMissionController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Methods

### AfterStart
```csharp
public override void AfterStart()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

## Usage Example

```csharp
// Typical usage of DebugAgentTeleporterMissionController (Controller)
Mission.Current.GetMissionBehavior<DebugAgentTeleporterMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)