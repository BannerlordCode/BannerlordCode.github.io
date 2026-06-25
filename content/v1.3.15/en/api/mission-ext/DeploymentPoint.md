---
title: "DeploymentPoint"
description: "Auto-generated class reference for DeploymentPoint."
---
# DeploymentPoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentPoint : SynchedMissionObject`
**Base:** `SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/DeploymentPoint.cs`

## Overview

`DeploymentPoint` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeploymentTargetPosition` | `public Vec3 DeploymentTargetPosition { get; }` |
| `AssociatedWallSegment` | `public WallSegment AssociatedWallSegment { get; }` |
| `DeployableWeapons` | `public IEnumerable<SynchedMissionObject> DeployableWeapons { get; }` |
| `IsDeployed` | `public bool IsDeployed { get; }` |
| `DeployedWeapon` | `public SynchedMissionObject DeployedWeapon { get; }` |
| `DisbandedWeapon` | `public SynchedMissionObject DisbandedWeapon { get; }` |
| `DeployableWeaponTypes` | `public IEnumerable<Type> DeployableWeaponTypes { get; }` |

## Key Methods

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Executes the AfterMissionStart logic.

```csharp
// Obtain an instance of DeploymentPoint from the subsystem API first
DeploymentPoint deploymentPoint = ...;
deploymentPoint.AfterMissionStart();
```

### GetDeploymentOrigin
`public Vec3 GetDeploymentOrigin()`

**Purpose:** Reads and returns the deployment origin value held by the this instance.

```csharp
// Obtain an instance of DeploymentPoint from the subsystem API first
DeploymentPoint deploymentPoint = ...;
var result = deploymentPoint.GetDeploymentOrigin();
```

### GetDeploymentPointState
`public DeploymentPoint.DeploymentPointState GetDeploymentPointState()`

**Purpose:** Reads and returns the deployment point state value held by the this instance.

```csharp
// Obtain an instance of DeploymentPoint from the subsystem API first
DeploymentPoint deploymentPoint = ...;
var result = deploymentPoint.GetDeploymentPointState();
```

### GetDeploymentPointType
`public DeploymentPoint.DeploymentPointType GetDeploymentPointType()`

**Purpose:** Reads and returns the deployment point type value held by the this instance.

```csharp
// Obtain an instance of DeploymentPoint from the subsystem API first
DeploymentPoint deploymentPoint = ...;
var result = deploymentPoint.GetDeploymentPointType();
```

### GetAssociatedSiegeLadders
`public List<SiegeLadder> GetAssociatedSiegeLadders()`

**Purpose:** Reads and returns the associated siege ladders value held by the this instance.

```csharp
// Obtain an instance of DeploymentPoint from the subsystem API first
DeploymentPoint deploymentPoint = ...;
var result = deploymentPoint.GetAssociatedSiegeLadders();
```

### GetWeaponsUnder
`public MBList<SynchedMissionObject> GetWeaponsUnder()`

**Purpose:** Reads and returns the weapons under value held by the this instance.

```csharp
// Obtain an instance of DeploymentPoint from the subsystem API first
DeploymentPoint deploymentPoint = ...;
var result = deploymentPoint.GetWeaponsUnder();
```

### GetSpawnersForEditor
`public IEnumerable<SpawnerBase> GetSpawnersForEditor()`

**Purpose:** Reads and returns the spawners for editor value held by the this instance.

```csharp
// Obtain an instance of DeploymentPoint from the subsystem API first
DeploymentPoint deploymentPoint = ...;
var result = deploymentPoint.GetSpawnersForEditor();
```

### Deploy
`public void Deploy(Type t)`

**Purpose:** Executes the Deploy logic.

```csharp
// Obtain an instance of DeploymentPoint from the subsystem API first
DeploymentPoint deploymentPoint = ...;
deploymentPoint.Deploy(t);
```

### Deploy
`public void Deploy(SiegeWeapon s)`

**Purpose:** Executes the Deploy logic.

```csharp
// Obtain an instance of DeploymentPoint from the subsystem API first
DeploymentPoint deploymentPoint = ...;
deploymentPoint.Deploy(s);
```

### Disband
`public ScriptComponentBehavior Disband()`

**Purpose:** Executes the Disband logic.

```csharp
// Obtain an instance of DeploymentPoint from the subsystem API first
DeploymentPoint deploymentPoint = ...;
var result = deploymentPoint.Disband();
```

### Hide
`public void Hide()`

**Purpose:** Hides the UI or element associated with the this instance.

```csharp
// Obtain an instance of DeploymentPoint from the subsystem API first
DeploymentPoint deploymentPoint = ...;
deploymentPoint.Hide();
```

### Show
`public void Show()`

**Purpose:** Displays the UI or element associated with the this instance.

```csharp
// Obtain an instance of DeploymentPoint from the subsystem API first
DeploymentPoint deploymentPoint = ...;
deploymentPoint.Show();
```

### ToggleWeaponVisibility
`public void ToggleWeaponVisibility(bool visible, SynchedMissionObject weapon)`

**Purpose:** Executes the ToggleWeaponVisibility logic.

```csharp
// Obtain an instance of DeploymentPoint from the subsystem API first
DeploymentPoint deploymentPoint = ...;
deploymentPoint.ToggleWeaponVisibility(false, weapon);
```

### HideAllWeapons
`public void HideAllWeapons()`

**Purpose:** Hides the UI or element associated with all weapons.

```csharp
// Obtain an instance of DeploymentPoint from the subsystem API first
DeploymentPoint deploymentPoint = ...;
deploymentPoint.HideAllWeapons();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DeploymentPoint deploymentPoint = ...;
deploymentPoint.AfterMissionStart();
```

## See Also

- [Area Index](../)