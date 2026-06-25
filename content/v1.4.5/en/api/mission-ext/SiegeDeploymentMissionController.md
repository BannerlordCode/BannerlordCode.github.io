---
title: "SiegeDeploymentMissionController"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeDeploymentMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeDeploymentMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeDeploymentMissionController : DeploymentMissionController`
**Base:** `DeploymentMissionController`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SiegeDeploymentMissionController.cs`

## Overview

`SiegeDeploymentMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `SiegeDeploymentMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### GetSiegeMissiles
`public List<ItemObject> GetSiegeMissiles()`

**Purpose:** Gets the current value of `siege missiles`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<SiegeDeploymentMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)