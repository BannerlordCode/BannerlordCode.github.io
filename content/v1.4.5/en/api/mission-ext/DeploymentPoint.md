---
title: "DeploymentPoint"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeploymentPoint`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DeploymentPoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentPoint : SynchedMissionObject`
**Base:** `SynchedMissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DeploymentPoint.cs`

## Overview

`DeploymentPoint` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeploymentTargetPosition` | `public Vec3 DeploymentTargetPosition { get; }` |
| `AssociatedWallSegment` | `public WallSegment AssociatedWallSegment { get; }` |
| `DeployedWeapon` | `public SynchedMissionObject DeployedWeapon { get; }` |
| `DisbandedWeapon` | `public SynchedMissionObject DisbandedWeapon { get; }` |

## Key Methods

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Handles logic related to `after mission start`.

### GetDeploymentOrigin
`public Vec3 GetDeploymentOrigin()`

**Purpose:** Gets the current value of `deployment origin`.

### GetDeploymentPointState
`public DeploymentPointState GetDeploymentPointState()`

**Purpose:** Gets the current value of `deployment point state`.

### GetDeploymentPointType
`public DeploymentPointType GetDeploymentPointType()`

**Purpose:** Gets the current value of `deployment point type`.

### GetAssociatedSiegeLadders
`public List<SiegeLadder> GetAssociatedSiegeLadders()`

**Purpose:** Gets the current value of `associated siege ladders`.

### GetWeaponsUnder
`public MBList<SynchedMissionObject> GetWeaponsUnder()`

**Purpose:** Gets the current value of `weapons under`.

### GetSpawnersForEditor
`public IEnumerable<SpawnerBase> GetSpawnersForEditor()`

**Purpose:** Gets the current value of `spawners for editor`.

### Deploy
`public void Deploy(Type t)`

**Purpose:** Handles logic related to `deploy`.

### Deploy
`public void Deploy(SiegeWeapon s)`

**Purpose:** Handles logic related to `deploy`.

### Disband
`public ScriptComponentBehavior Disband()`

**Purpose:** Handles logic related to `disband`.

### Hide
`public void Hide()`

**Purpose:** Handles logic related to `hide`.

### Show
`public void Show()`

**Purpose:** Handles logic related to `show`.

### ToggleWeaponVisibility
`public void ToggleWeaponVisibility(bool visible, SynchedMissionObject weapon)`

**Purpose:** Handles logic related to `toggle weapon visibility`.

### HideAllWeapons
`public void HideAllWeapons()`

**Purpose:** Handles logic related to `hide all weapons`.

## Usage Example

```csharp
var value = new DeploymentPoint();
value.AfterMissionStart();
```

## See Also

- [Complete Class Catalog](../catalog)