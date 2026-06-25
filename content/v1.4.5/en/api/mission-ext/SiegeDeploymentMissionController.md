---
title: "SiegeDeploymentMissionController"
description: "Auto-generated class reference for SiegeDeploymentMissionController."
---
# SiegeDeploymentMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeDeploymentMissionController : DeploymentMissionController`
**Base:** `DeploymentMissionController`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SiegeDeploymentMissionController.cs`

## Overview

`SiegeDeploymentMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `SiegeDeploymentMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of SiegeDeploymentMissionController from the subsystem API first
SiegeDeploymentMissionController siegeDeploymentMissionController = ...;
siegeDeploymentMissionController.OnBehaviorInitialize();
```

### GetSiegeMissiles
`public List<ItemObject> GetSiegeMissiles()`

**Purpose:** **Purpose:** Reads and returns the siege missiles value held by the this instance.

```csharp
// Obtain an instance of SiegeDeploymentMissionController from the subsystem API first
SiegeDeploymentMissionController siegeDeploymentMissionController = ...;
var result = siegeDeploymentMissionController.GetSiegeMissiles();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<SiegeDeploymentMissionController>();
```

## See Also

- [Area Index](../)