<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeploymentMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DeploymentMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DeploymentMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/DeploymentMissionController.cs`

## Overview

`DeploymentMissionController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Methods

### AfterStart
```csharp
public override void AfterStart()
```

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### FinishDeployment
```csharp
public void FinishDeployment()
```

### OnAgentControllerSetToPlayer
```csharp
public override void OnAgentControllerSetToPlayer(Agent agent)
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

## Usage Example

```csharp
// Typical usage of DeploymentMissionController (Controller)
Mission.Current.GetMissionBehavior<DeploymentMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)