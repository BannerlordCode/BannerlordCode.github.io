<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentLastHitInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentLastHitInfo

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `AgentLastHitInfo` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public bool GetHasOnAiInputSetCallback()
```

### SetHasOnAiInputSetCallback

```csharp
public void SetHasOnAiInputSetCallback(bool value)
```

### GetMissileRangeWithHeightDifferenceAux

```csharp
public float GetMissileRangeWithHeightDifferenceAux(float targetZ)
```

### GetSoundAndCollisionInfoClassName

```csharp
public string GetSoundAndCollisionInfoClassName()
```

### UpdateAgentStats

```csharp
public void UpdateAgentStats()
```

### GetWeaponInaccuracy

```csharp
public float GetWeaponInaccuracy(EquipmentIndex weaponSlotIndex, int weaponUsageIndex)
```

### DebugGetHealth

```csharp
public float DebugGetHealth()
```

### SetTargetPosition

```csharp
public void SetTargetPosition(Vec2 value)
```

### SetTargetZ

```csharp
public void SetTargetZ(float targetZ)
```

### SetTargetUp

```csharp
public void SetTargetUp(in Vec3 targetUp)
```

### SetCanLeadFormationsRemotely

```csharp
public void SetCanLeadFormationsRemotely(bool value)
```

### SetAveragePingInMilliseconds

```csharp
public void SetAveragePingInMilliseconds(double averagePingInMilliseconds)
```

### SetTargetPositionAndDirection

```csharp
public void SetTargetPositionAndDirection(in Vec2 targetPosition, in Vec3 targetDirection)
```

### AddAcceleration

```csharp
public void AddAcceleration(in Vec3 acceleration)
```

### SetWeaponGuard

```csharp
public void SetWeaponGuard(Agent.UsageDirection direction)
```

### SetWatchState

```csharp
public void SetWatchState(Agent.WatchState watchState)
```

### IsAlarmStateNormal

```csharp
public bool IsAlarmStateNormal()
```

### IsCautious

```csharp
public bool IsCautious()
```

### IsPatrollingCautious

```csharp
public bool IsPatrollingCautious()
```

### IsAlarmed

```csharp
public bool IsAlarmed()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)