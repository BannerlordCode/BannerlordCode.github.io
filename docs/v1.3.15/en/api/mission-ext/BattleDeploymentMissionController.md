<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleDeploymentMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleDeploymentMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleDeploymentMissionController : DeploymentMissionController`
**Base:** `DeploymentMissionController`
**File:** `TaleWorlds.MountAndBlade/BattleDeploymentMissionController.cs`

## Overview

`BattleDeploymentMissionController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

## Usage Example

```csharp
// Typical usage of BattleDeploymentMissionController (Controller)
Mission.Current.GetMissionBehavior<BattleDeploymentMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)