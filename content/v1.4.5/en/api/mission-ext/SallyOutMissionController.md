---
title: "SallyOutMissionController"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SallyOutMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SallyOutMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SallyOutMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SallyOutMissionController.cs`

## Overview

`SallyOutMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `SallyOutMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

### GetBesiegerSiegeEngines
`public static MBReadOnlyList<SiegeWeapon> GetBesiegerSiegeEngines()`

**Purpose:** Gets the current value of `besieger siege engines`.

### DisableSiegeEngines
`public static void DisableSiegeEngines()`

**Purpose:** Handles logic related to `disable siege engines`.

## Usage Example

```csharp
var implementation = new CustomSallyOutMissionController();
```

## See Also

- [Complete Class Catalog](../catalog)