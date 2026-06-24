<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StackArray8Agent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StackArray8Agent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct StackArray8Agent`
**Area:** mission-ext

## Overview

`StackArray8Agent` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Main` | `public static Agent Main { get; }` |
| `IsPlayerControlled` | `public bool IsPlayerControlled { get; }` |
| `IsMine` | `public bool IsMine { get; }` |
| `IsMainAgent` | `public bool IsMainAgent { get; }` |
| `IsHuman` | `public bool IsHuman { get; }` |
| `IsMount` | `public bool IsMount { get; }` |
| `IsAIControlled` | `public bool IsAIControlled { get; }` |
| `IsPlayerTroop` | `public bool IsPlayerTroop { get; }` |
| `IsUsingGameObject` | `public bool IsUsingGameObject { get; }` |
| `CanLeadFormationsRemotely` | `public bool CanLeadFormationsRemotely { get; }` |
| `IsDetachableFromFormation` | `public bool IsDetachableFromFormation { get; }` |
| `AgentScale` | `public float AgentScale { get; }` |
| `CrouchMode` | `public bool CrouchMode { get; }` |
| `WalkMode` | `public bool WalkMode { get; }` |
| `Position` | `public Vec3 Position { get; }` |
| `MovementMode` | `public AgentMovementMode MovementMode { get; }` |
| `VisualPosition` | `public Vec3 VisualPosition { get; }` |
| `MovementVelocity` | `public Vec2 MovementVelocity { get; }` |
| `AverageVelocity` | `public Vec3 AverageVelocity { get; }` |
| `MovementDirectionAsAngle` | `public float MovementDirectionAsAngle { get; }` |

## Key Methods

### GetHasOnAiInputSetCallback
`public bool GetHasOnAiInputSetCallback()`

**Purpose:** Gets the current value of `has on ai input set callback`.

### SetHasOnAiInputSetCallback
`public void SetHasOnAiInputSetCallback(bool value)`

**Purpose:** Sets the value or state of `has on ai input set callback`.

### GetMissileRangeWithHeightDifferenceAux
`public float GetMissileRangeWithHeightDifferenceAux(float targetZ)`

**Purpose:** Gets the current value of `missile range with height difference aux`.

### GetSoundAndCollisionInfoClassName
`public string GetSoundAndCollisionInfoClassName()`

**Purpose:** Gets the current value of `sound and collision info class name`.

### UpdateAgentStats
`public void UpdateAgentStats()`

**Purpose:** Updates the state or data of `agent stats`.

### GetWeaponInaccuracy
`public float GetWeaponInaccuracy(EquipmentIndex weaponSlotIndex, int weaponUsageIndex)`

**Purpose:** Gets the current value of `weapon inaccuracy`.

### DebugGetHealth
`public float DebugGetHealth()`

**Purpose:** Handles logic related to `debug get health`.

### SetTargetPosition
`public void SetTargetPosition(Vec2 value)`

**Purpose:** Sets the value or state of `target position`.

### SetTargetZ
`public void SetTargetZ(float targetZ)`

**Purpose:** Sets the value or state of `target z`.

### SetTargetUp
`public void SetTargetUp(in Vec3 targetUp)`

**Purpose:** Sets the value or state of `target up`.

### SetCanLeadFormationsRemotely
`public void SetCanLeadFormationsRemotely(bool value)`

**Purpose:** Sets the value or state of `can lead formations remotely`.

### SetAveragePingInMilliseconds
`public void SetAveragePingInMilliseconds(double averagePingInMilliseconds)`

**Purpose:** Sets the value or state of `average ping in milliseconds`.

### SetTargetPositionAndDirection
`public void SetTargetPositionAndDirection(in Vec2 targetPosition, in Vec3 targetDirection)`

**Purpose:** Sets the value or state of `target position and direction`.

### AddAcceleration
`public void AddAcceleration(in Vec3 acceleration)`

**Purpose:** Adds `acceleration` to the current collection or state.

### SetWeaponGuard
`public void SetWeaponGuard(Agent.UsageDirection direction)`

**Purpose:** Sets the value or state of `weapon guard`.

### SetWatchState
`public void SetWatchState(Agent.WatchState watchState)`

**Purpose:** Sets the value or state of `watch state`.

### IsAlarmStateNormal
`public bool IsAlarmStateNormal()`

**Purpose:** Handles logic related to `is alarm state normal`.

### IsCautious
`public bool IsCautious()`

**Purpose:** Handles logic related to `is cautious`.

### IsPatrollingCautious
`public bool IsPatrollingCautious()`

**Purpose:** Handles logic related to `is patrolling cautious`.

### IsAlarmed
`public bool IsAlarmed()`

**Purpose:** Handles logic related to `is alarmed`.

## Usage Example

```csharp
// First obtain a StackArray8Agent instance from game state, then call one of its public methods
var value = new StackArray8Agent();
value.GetHasOnAiInputSetCallback();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
