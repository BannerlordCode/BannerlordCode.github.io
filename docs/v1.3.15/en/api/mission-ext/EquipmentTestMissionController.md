<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EquipmentTestMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EquipmentTestMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EquipmentTestMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/EquipmentTestMissionController.cs`

## Overview

`EquipmentTestMissionController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Methods

### AfterStart
```csharp
public override void AfterStart()
```

## Usage Example

```csharp
// Typical usage of EquipmentTestMissionController (Controller)
Mission.Current.GetMissionBehavior<EquipmentTestMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)