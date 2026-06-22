<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WallSegment`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WallSegment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `WallSegment` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `MiddlePosition` | `public TacticalPosition MiddlePosition { get; }` |
| `WaitPosition` | `public TacticalPosition WaitPosition { get; }` |
| `AttackerWaitPosition` | `public TacticalPosition AttackerWaitPosition { get; }` |
| `AttackerSiegeWeapon` | `public IPrimarySiegeWeapon AttackerSiegeWeapon { get; }` |
| `DefencePoints` | `public IEnumerable<DefencePoint> DefencePoints { get; }` |
| `IsBreachedWall` | `public bool IsBreachedWall { get; }` |
| `MiddleFrame` | `public WorldFrame MiddleFrame { get; }` |
| `DefenseWaitFrame` | `public WorldFrame DefenseWaitFrame { get; }` |
| `AttackerWaitFrame` | `public WorldFrame AttackerWaitFrame { get; }` |
| `DefenseSide` | `public FormationAI.BehaviorSide DefenseSide { get; }` |


## Key Methods

### GetPosition

```csharp
public Vec3 GetPosition()
```

### OnChooseUsedWallSegment

```csharp
public void OnChooseUsedWallSegment(bool isBroken)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)