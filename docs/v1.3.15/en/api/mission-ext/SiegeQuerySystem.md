<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeQuerySystem`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `SiegeQuerySystem` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `LeftRegionMemberCount` | `public int LeftRegionMemberCount { get; }` |
| `LeftCloseAttackerCount` | `public int LeftCloseAttackerCount { get; }` |
| `MiddleRegionMemberCount` | `public int MiddleRegionMemberCount { get; }` |
| `MiddleCloseAttackerCount` | `public int MiddleCloseAttackerCount { get; }` |
| `RightRegionMemberCount` | `public int RightRegionMemberCount { get; }` |
| `RightCloseAttackerCount` | `public int RightCloseAttackerCount { get; }` |
| `InsideAttackerCount` | `public int InsideAttackerCount { get; }` |
| `LeftDefenderCount` | `public int LeftDefenderCount { get; }` |
| `MiddleDefenderCount` | `public int MiddleDefenderCount { get; }` |
| `RightDefenderCount` | `public int RightDefenderCount { get; }` |
| `LeftDefenderOrigin` | `public Vec3 LeftDefenderOrigin { get; }` |
| `MidDefenderOrigin` | `public Vec3 MidDefenderOrigin { get; }` |
| `RightDefenderOrigin` | `public Vec3 RightDefenderOrigin { get; }` |
| `LeftAttackerOrigin` | `public Vec3 LeftAttackerOrigin { get; }` |
| `MiddleAttackerOrigin` | `public Vec3 MiddleAttackerOrigin { get; }` |
| `RightAttackerOrigin` | `public Vec3 RightAttackerOrigin { get; }` |
| `LeftToMidDir` | `public Vec2 LeftToMidDir { get; }` |
| `MidToLeftDir` | `public Vec2 MidToLeftDir { get; }` |
| `MidToRightDir` | `public Vec2 MidToRightDir { get; }` |
| `RightToMidDir` | `public Vec2 RightToMidDir { get; }` |


## Key Methods

### Expire

```csharp
public void Expire()
```

### DeterminePositionAssociatedSide

```csharp
public int DeterminePositionAssociatedSide(Vec3 position)
```

### AreSidesRelated

```csharp
public static bool AreSidesRelated(FormationAI.BehaviorSide side, int connectedSides)
```

### SideDistance

```csharp
public static int SideDistance(int connectedSides, int side)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)