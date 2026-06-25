---
title: "BattleDeploymentMissionController"
description: "Auto-generated class reference for BattleDeploymentMissionController."
---
# BattleDeploymentMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleDeploymentMissionController : DeploymentMissionController`
**Base:** `DeploymentMissionController`
**File:** `TaleWorlds.MountAndBlade/BattleDeploymentMissionController.cs`

## Overview

`BattleDeploymentMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `BattleDeploymentMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of BattleDeploymentMissionController from the subsystem API first
BattleDeploymentMissionController battleDeploymentMissionController = ...;
battleDeploymentMissionController.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of BattleDeploymentMissionController from the subsystem API first
BattleDeploymentMissionController battleDeploymentMissionController = ...;
battleDeploymentMissionController.OnRemoveBehavior();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<BattleDeploymentMissionController>();
```

## See Also

- [Area Index](../)