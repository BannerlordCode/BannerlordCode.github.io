<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeDeploymentMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeDeploymentMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeDeploymentMissionController : DeploymentMissionController`
**Base:** `DeploymentMissionController`
**File:** `TaleWorlds.MountAndBlade/SiegeDeploymentMissionController.cs`

## Overview

`SiegeDeploymentMissionController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### GetSiegeMissiles
```csharp
public List<ItemObject> GetSiegeMissiles()
```

## Usage Example

```csharp
// Typical usage of SiegeDeploymentMissionController (Controller)
Mission.Current.GetMissionBehavior<SiegeDeploymentMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)