<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeWeapon`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `SiegeWeapon` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ForcedUse` | `public bool ForcedUse { get; }` |
| `IsUsed` | `public bool IsUsed { get; }` |
| `Side` | `public virtual BattleSideEnum Side { get; }` |
| `HitObjectName` | `public override TextObject HitObjectName { get; }` |
| `HasWaitFrame` | `public override bool HasWaitFrame { get; }` |
| `IsDeactivated` | `public override bool IsDeactivated { get; }` |


## Key Methods

### SetForcedUse

```csharp
public void SetForcedUse(bool value)
```

### GetSiegeEngineType

```csharp
public abstract SiegeEngineType GetSiegeEngineType()
```

### GetTickRequirement

```csharp
public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
```

### TickAuxForInit

```csharp
public void TickAuxForInit()
```

### ShouldAutoLeaveDetachmentWhenDisabled

```csharp
public override bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)
```

### AutoAttachUserToFormation

```csharp
public override bool AutoAttachUserToFormation(BattleSideEnum sideEnum)
```

### HasToBeDefendedByUser

```csharp
public override bool HasToBeDefendedByUser(BattleSideEnum sideEnum)
```

### GetTargetEntity

```csharp
public WeakGameEntity GetTargetEntity()
```

### GetTargetingOffset

```csharp
public Vec3 GetTargetingOffset()
```

### GetSide

```csharp
public BattleSideEnum GetSide()
```

### GetTargetGlobalVelocity

```csharp
public Vec3 GetTargetGlobalVelocity()
```

### IsDestructable

```csharp
public bool IsDestructable()
```

### Entity

```csharp
public WeakGameEntity Entity()
```

### ComputeGlobalPhysicsBoundingBoxMinMax

```csharp
public ValueTuple<Vec3, Vec3> ComputeGlobalPhysicsBoundingBoxMinMax()
```

### OnShipCaptured

```csharp
public virtual void OnShipCaptured(BattleSideEnum newDefaultSide)
```

### GetTargetFlags

```csharp
public abstract TargetFlags GetTargetFlags()
```

### GetTargetValue

```csharp
public abstract float GetTargetValue(List<Vec3> weaponPos)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)