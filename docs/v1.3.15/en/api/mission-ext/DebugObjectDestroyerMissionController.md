<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DebugObjectDestroyerMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DebugObjectDestroyerMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DebugObjectDestroyerMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/DebugObjectDestroyerMissionController.cs`

## Overview

`DebugObjectDestroyerMissionController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Methods

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

## Usage Example

```csharp
// Typical usage of DebugObjectDestroyerMissionController (Controller)
Mission.Current.GetMissionBehavior<DebugObjectDestroyerMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)