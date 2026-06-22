<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GeneralsAndCaptainsAssignmentLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GeneralsAndCaptainsAssignmentLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GeneralsAndCaptainsAssignmentLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/GeneralsAndCaptainsAssignmentLogic.cs`

## Overview

`GeneralsAndCaptainsAssignmentLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new GeneralsAndCaptainsAssignmentLogic())`; subclass it to customize.

## Key Methods

### AfterStart
```csharp
public override void AfterStart()
```

### OnTeamDeployed
```csharp
public override void OnTeamDeployed(Team team)
```

### OnDeploymentFinished
```csharp
public override void OnDeploymentFinished()
```

## Usage Example

```csharp
// Typical usage of GeneralsAndCaptainsAssignmentLogic (Logic)
Mission.Current.AddMissionBehavior(new GeneralsAndCaptainsAssignmentLogic());
```

## See Also

- [Complete Class Catalog](../catalog)