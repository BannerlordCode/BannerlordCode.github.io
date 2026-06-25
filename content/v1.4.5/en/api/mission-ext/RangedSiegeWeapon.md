---
title: "RangedSiegeWeapon"
description: "Auto-generated class reference for RangedSiegeWeapon."
---
# RangedSiegeWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class RangedSiegeWeapon : SiegeWeapon`
**Base:** `SiegeWeapon`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/RangedSiegeWeapon.cs`

## Overview

`RangedSiegeWeapon` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `State` | `public int State { get; }` |
| `TargetDirection` | `public float TargetDirection { get; }` |
| `TargetReleaseAngle` | `public float TargetReleaseAngle { get; }` |
| `AmmoCount` | `public int AmmoCount { get; }` |
| `ProjectileIndex` | `public int ProjectileIndex { get; }` |
| `State` | `public WeaponState State { get; set; }` |
| `CameraHolder` | `public GameEntity CameraHolder { get; }` |
| `AmmoCount` | `public int AmmoCount { get; set; }` |
| `PlayerForceUse` | `public bool PlayerForceUse { get; }` |
| `Side` | `public override BattleSideEnum Side { get; }` |

## Key Methods

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** **Purpose:** Reads the data or state of from network.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.ReadFromNetwork(bufferReadValid);
```

### OnSiegeWeaponReloadDone
`public delegate void OnSiegeWeaponReloadDone()`

**Purpose:** **Purpose:** Invoked when the siege weapon reload done event is raised.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.OnSiegeWeaponReloadDone();
```

### SetAmmo
`public virtual void SetAmmo(int ammoLeft)`

**Purpose:** **Purpose:** Assigns a new value to ammo and updates the object's internal state.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.SetAmmo(0);
```

### SetStartAmmo
`public virtual void SetStartAmmo(int ammoLeft)`

**Purpose:** **Purpose:** Assigns a new value to start ammo and updates the object's internal state.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.SetStartAmmo(0);
```

### ChangeProjectileEntityClient
`public void ChangeProjectileEntityClient(int index)`

**Purpose:** **Purpose:** Executes the ChangeProjectileEntityClient logic.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.ChangeProjectileEntityClient(0);
```

### WriteToNetwork
`public override void WriteToNetwork()`

**Purpose:** **Purpose:** Writes to network to the target location.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.WriteToNetwork();
```

### IsInRangeToCheckAlternativePoints
`public override bool IsInRangeToCheckAlternativePoints(Agent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the in range to check alternative points state or condition.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.IsInRangeToCheckAlternativePoints(agent);
```

### GetBestPointAlternativeTo
`public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)`

**Purpose:** **Purpose:** Reads and returns the best point alternative to value held by the this instance.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetBestPointAlternativeTo(standingPoint, agent);
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** **Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetTickRequirement();
```

### GiveInput
`public void GiveInput(float inputX, float inputY)`

**Purpose:** **Purpose:** Executes the GiveInput logic.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.GiveInput(0, 0);
```

### GiveExactInput
`public void GiveExactInput(float targetX, float targetY)`

**Purpose:** **Purpose:** Executes the GiveExactInput logic.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.GiveExactInput(0, 0);
```

### GetTargetReleaseAngle
`public virtual float GetTargetReleaseAngle(Vec3 target)`

**Purpose:** **Purpose:** Reads and returns the target release angle value held by the this instance.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetTargetReleaseAngle(target);
```

### AimAtThreat
`public virtual bool AimAtThreat(Threat threat)`

**Purpose:** **Purpose:** Executes the AimAtThreat logic.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.AimAtThreat(threat);
```

### AimAtTarget
`public bool AimAtTarget(Vec3 target)`

**Purpose:** **Purpose:** Executes the AimAtTarget logic.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.AimAtTarget(target);
```

### CheckIsTargetReached
`public virtual bool CheckIsTargetReached(Vec3 target)`

**Purpose:** **Purpose:** Verifies whether is target reached holds true for the this instance.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.CheckIsTargetReached(target);
```

### GetEstimatedTargetGlobalPoint
`public Vec3 GetEstimatedTargetGlobalPoint(Threat threat)`

**Purpose:** **Purpose:** Reads and returns the estimated target global point value held by the this instance.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetEstimatedTargetGlobalPoint(threat);
```

### GetEstimatedTargetGlobalPointForAgent
`public Vec3 GetEstimatedTargetGlobalPointForAgent(Agent agent)`

**Purpose:** **Purpose:** Reads and returns the estimated target global point for agent value held by the this instance.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetEstimatedTargetGlobalPointForAgent(agent);
```

### AimAtRotation
`public virtual void AimAtRotation(float horizontalRotation, float verticalRotation)`

**Purpose:** **Purpose:** Executes the AimAtRotation logic.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.AimAtRotation(0, 0);
```

### Shoot
`public bool Shoot()`

**Purpose:** **Purpose:** Executes the Shoot logic.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.Shoot();
```

### ManualReload
`public void ManualReload()`

**Purpose:** **Purpose:** Executes the ManualReload logic.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.ManualReload();
```

### AiRequestsShoot
`public void AiRequestsShoot()`

**Purpose:** **Purpose:** Executes the AiRequestsShoot logic.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.AiRequestsShoot();
```

### AiRequestsManualReload
`public void AiRequestsManualReload()`

**Purpose:** **Purpose:** Executes the AiRequestsManualReload logic.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.AiRequestsManualReload();
```

### GetSiegeEngineType
`public abstract override SiegeEngineType GetSiegeEngineType()`

**Purpose:** **Purpose:** Reads and returns the siege engine type value held by the this instance.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetSiegeEngineType();
```

### CanShootAtThreat
`public bool CanShootAtThreat(Threat threat, int attemptCount = 5)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for shoot at threat.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.CanShootAtThreat(threat, 0);
```

### CanShootAtAgent
`public bool CanShootAtAgent(Agent agent, int attemptCount = 5)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for shoot at agent.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.CanShootAtAgent(agent, 0);
```

### GetEstimatedTargetMovementVector
`public virtual Vec3 GetEstimatedTargetMovementVector(Vec3 targetCurrentPosition, Vec3 targetVelocity)`

**Purpose:** **Purpose:** Reads and returns the estimated target movement vector value held by the this instance.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetEstimatedTargetMovementVector(targetCurrentPosition, targetVelocity);
```

### CanShootAtPoint
`public bool CanShootAtPoint(Vec3 target)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for shoot at point.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.CanShootAtPoint(target);
```

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the order value held by the this instance.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetOrder(side);
```

### ProcessTargetValue
`public abstract float ProcessTargetValue(float baseValue, TargetFlags flags)`

**Purpose:** **Purpose:** Executes the ProcessTargetValue logic.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.ProcessTargetValue(0, flags);
```

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord) synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**Purpose:** **Purpose:** Invoked when the after read from network event is raised.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord, false);
```

### GetGlobalVelocity
`public virtual Vec3 GetGlobalVelocity()`

**Purpose:** **Purpose:** Reads and returns the global velocity value held by the this instance.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetGlobalVelocity();
```

### SetPlayerForceUse
`public void SetPlayerForceUse(bool value)`

**Purpose:** **Purpose:** Assigns a new value to player force use and updates the object's internal state.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.SetPlayerForceUse(false);
```

### OnShipCaptured
`public override void OnShipCaptured(BattleSideEnum newDefaultSide)`

**Purpose:** **Purpose:** Invoked when the ship captured event is raised.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.OnShipCaptured(newDefaultSide);
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** **Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of RangedSiegeWeapon from the subsystem API first
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.OnDeploymentFinished();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
RangedSiegeWeapon instance = ...;
```

## See Also

- [Area Index](../)