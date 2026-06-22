<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomSallyOutMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomSallyOutMissionController

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomSallyOutMissionController : SallyOutMissionController`
**Base:** `SallyOutMissionController`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSallyOutMissionController.cs`

## Overview

`CustomSallyOutMissionController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Usage Example

```csharp
// Typical usage of CustomSallyOutMissionController (Controller)
Mission.Current.GetMissionBehavior<CustomSallyOutMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)