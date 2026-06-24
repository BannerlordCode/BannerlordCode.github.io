<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RangedSiegeWeapon`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RangedSiegeWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class RangedSiegeWeapon : SiegeWeapon`
**Base:** `SiegeWeapon`
**File:** `TaleWorlds.MountAndBlade/RangedSiegeWeapon.cs`

## Overview

`RangedSiegeWeapon` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MultipleFireProjectileId` | `public virtual string MultipleFireProjectileId { get; }` |
| `MultipleFireProjectileFlyingId` | `public virtual string MultipleFireProjectileFlyingId { get; }` |
| `MultipleProjectileId` | `public virtual string MultipleProjectileId { get; }` |
| `MultipleProjectileFlyingId` | `public virtual string MultipleProjectileFlyingId { get; }` |
| `SingleFireProjectileId` | `public virtual string SingleFireProjectileId { get; }` |
| `SingleFireProjectileFlyingId` | `public virtual string SingleFireProjectileFlyingId { get; }` |
| `SingleProjectileId` | `public virtual string SingleProjectileId { get; }` |
| `SingleProjectileFlyingId` | `public virtual string SingleProjectileFlyingId { get; }` |
| `State` | `public RangedSiegeWeapon.WeaponState State { get; set; }` |
| `CanShootAtPointCheckingOffset` | `public virtual Vec3 CanShootAtPointCheckingOffset { get; }` |
| `CameraHolder` | `public GameEntity CameraHolder { get; }` |
| `AmmoCount` | `public int AmmoCount { get; set; }` |
| `DirectionRestriction` | `public virtual float DirectionRestriction { get; }` |
| `PlayerForceUse` | `public bool PlayerForceUse { get; }` |
| `ProjectileEntityCurrentGlobalPosition` | `public virtual Vec3 ProjectileEntityCurrentGlobalPosition { get; }` |
| `Side` | `public override BattleSideEnum Side { get; }` |
| `State` | `public int State { get; }` |
| `TargetDirection` | `public float TargetDirection { get; }` |
| `TargetReleaseAngle` | `public float TargetReleaseAngle { get; }` |
| `AmmoCount` | `public int AmmoCount { get; }` |
| `ProjectileIndex` | `public int ProjectileIndex { get; }` |

## Key Methods

### SetAmmo
`public virtual void SetAmmo(int ammoLeft)`

**Purpose:** Sets the value or state of `ammo`.

### SetStartAmmo
`public virtual void SetStartAmmo(int ammoLeft)`

**Purpose:** Sets the value or state of `start ammo`.

### ChangeProjectileEntityClient
`public void ChangeProjectileEntityClient(int index)`

**Purpose:** Handles logic related to `change projectile entity client`.

### WriteToNetwork
`public override void WriteToNetwork()`

**Purpose:** Handles logic related to `write to network`.

### IsInRangeToCheckAlternativePoints
`public override bool IsInRangeToCheckAlternativePoints(Agent agent)`

**Purpose:** Handles logic related to `is in range to check alternative points`.

### GetBestPointAlternativeTo
`public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)`

**Purpose:** Gets the current value of `best point alternative to`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### GiveInput
`public void GiveInput(float inputX, float inputY)`

**Purpose:** Handles logic related to `give input`.

### GiveExactInput
`public void GiveExactInput(float targetX, float targetY)`

**Purpose:** Handles logic related to `give exact input`.

### GetTargetReleaseAngle
`public virtual float GetTargetReleaseAngle(Vec3 target)`

**Purpose:** Gets the current value of `target release angle`.

### AimAtThreat
`public virtual bool AimAtThreat(Threat threat)`

**Purpose:** Handles logic related to `aim at threat`.

### AimAtTarget
`public bool AimAtTarget(Vec3 target)`

**Purpose:** Handles logic related to `aim at target`.

### CheckIsTargetReached
`public virtual bool CheckIsTargetReached(Vec3 target)`

**Purpose:** Handles logic related to `check is target reached`.

### GetEstimatedTargetGlobalPoint
`public Vec3 GetEstimatedTargetGlobalPoint(Threat threat)`

**Purpose:** Gets the current value of `estimated target global point`.

### GetEstimatedTargetGlobalPointForAgent
`public Vec3 GetEstimatedTargetGlobalPointForAgent(Agent agent)`

**Purpose:** Gets the current value of `estimated target global point for agent`.

### AimAtRotation
`public virtual void AimAtRotation(float horizontalRotation, float verticalRotation)`

**Purpose:** Handles logic related to `aim at rotation`.

### Shoot
`public bool Shoot()`

**Purpose:** Handles logic related to `shoot`.

### ManualReload
`public void ManualReload()`

**Purpose:** Handles logic related to `manual reload`.

### AiRequestsShoot
`public void AiRequestsShoot()`

**Purpose:** Handles logic related to `ai requests shoot`.

### AiRequestsManualReload
`public void AiRequestsManualReload()`

**Purpose:** Handles logic related to `ai requests manual reload`.

### GetSiegeEngineType
`public abstract override SiegeEngineType GetSiegeEngineType()`

**Purpose:** Gets the current value of `siege engine type`.

### CanShootAtBox
`public bool CanShootAtBox(Vec3 boxMin, Vec3 boxMax, uint attempts = 5U)`

**Purpose:** Checks whether the current object can `shoot at box`.

### CanShootAtThreat
`public bool CanShootAtThreat(Threat threat)`

**Purpose:** Checks whether the current object can `shoot at threat`.

### GetEstimatedTargetMovementVector
`public virtual Vec3 GetEstimatedTargetMovementVector(Vec3 targetCurrentPosition, Vec3 targetVelocity)`

**Purpose:** Gets the current value of `estimated target movement vector`.

### CanShootAtAgent
`public bool CanShootAtAgent(Agent agent)`

**Purpose:** Checks whether the current object can `shoot at agent`.

### CanShootAtPoint
`public bool CanShootAtPoint(Vec3 target)`

**Purpose:** Checks whether the current object can `shoot at point`.

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**Purpose:** Gets the current value of `order`.

### ProcessTargetValue
`public abstract float ProcessTargetValue(float baseValue, TargetFlags flags)`

**Purpose:** Handles logic related to `process target value`.

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**Purpose:** Called when the `after read from network` event is raised.

### GetGlobalVelocity
`public virtual Vec3 GetGlobalVelocity()`

**Purpose:** Gets the current value of `global velocity`.

### SetPlayerForceUse
`public void SetPlayerForceUse(bool value)`

**Purpose:** Sets the value or state of `player force use`.

### OnShipCaptured
`public override void OnShipCaptured(BattleSideEnum newDefaultSide)`

**Purpose:** Called when the `ship captured` event is raised.

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read from network`.

### OnSiegeWeaponReloadDone
`public delegate void OnSiegeWeaponReloadDone()`

**Purpose:** Called when the `siege weapon reload done` event is raised.

## Usage Example

```csharp
var implementation = new CustomRangedSiegeWeapon();
```

## See Also

- [Complete Class Catalog](../catalog)