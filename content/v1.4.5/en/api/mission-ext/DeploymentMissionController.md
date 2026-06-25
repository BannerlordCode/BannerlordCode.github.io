---
title: "DeploymentMissionController"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeploymentMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DeploymentMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DeploymentMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DeploymentMissionController.cs`

## Overview

`DeploymentMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `DeploymentMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TeamSetupOver` | `public bool TeamSetupOver { get; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### FinishDeployment
`public void FinishDeployment()`

**Purpose:** Handles logic related to `finish deployment`.

### OnAgentControllerSetToPlayer
`public override void OnAgentControllerSetToPlayer(Agent agent)`

**Purpose:** Called when the `agent controller set to player` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
var implementation = new CustomDeploymentMissionController();
```

## See Also

- [Complete Class Catalog](../catalog)