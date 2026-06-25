---
title: "SallyOutMissionController"
description: "Auto-generated class reference for SallyOutMissionController."
---
# SallyOutMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SallyOutMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SallyOutMissionController.cs`

## Overview

`SallyOutMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `SallyOutMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BesiegerSiegeEngines` | `public MBReadOnlyList<SiegeWeapon> BesiegerSiegeEngines { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of SallyOutMissionController from the subsystem API first
SallyOutMissionController sallyOutMissionController = ...;
sallyOutMissionController.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SallyOutMissionController from the subsystem API first
SallyOutMissionController sallyOutMissionController = ...;
sallyOutMissionController.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of SallyOutMissionController from the subsystem API first
SallyOutMissionController sallyOutMissionController = ...;
sallyOutMissionController.OnMissionTick(0);
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Invoked when the `deployment finished` event is raised.

```csharp
// Obtain an instance of SallyOutMissionController from the subsystem API first
SallyOutMissionController sallyOutMissionController = ...;
sallyOutMissionController.OnDeploymentFinished();
```

### GetBesiegerSiegeEngines
`public static MBReadOnlyList<SiegeWeapon> GetBesiegerSiegeEngines()`

**Purpose:** Reads and returns the `besieger siege engines` value held by the current object.

```csharp
// Static call; no instance required
SallyOutMissionController.GetBesiegerSiegeEngines();
```

### DisableSiegeEngines
`public static void DisableSiegeEngines()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
SallyOutMissionController.DisableSiegeEngines();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SallyOutMissionController instance = ...;
```

## See Also

- [Area Index](../)