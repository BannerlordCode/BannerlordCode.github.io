<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponDesignElement`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponDesignElement

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `WeaponDesignElement` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ScalePercentage` | `public int ScalePercentage { get; }` |
| `ScaleFactor` | `public float ScaleFactor { get; }` |
| `IsPieceScaled` | `public bool IsPieceScaled { get; }` |
| `CraftingPiece` | `public CraftingPiece CraftingPiece { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `ScaledLength` | `public float ScaledLength { get; }` |
| `ScaledWeight` | `public float ScaledWeight { get; }` |
| `ScaledCenterOfMass` | `public float ScaledCenterOfMass { get; }` |
| `ScaledDistanceToNextPiece` | `public float ScaledDistanceToNextPiece { get; }` |
| `ScaledDistanceToPreviousPiece` | `public float ScaledDistanceToPreviousPiece { get; }` |
| `ScaledBladeLength` | `public float ScaledBladeLength { get; }` |
| `ScaledPieceOffset` | `public float ScaledPieceOffset { get; }` |
| `ScaledPreviousPieceOffset` | `public float ScaledPreviousPieceOffset { get; }` |
| `ScaledNextPieceOffset` | `public float ScaledNextPieceOffset { get; }` |


## Key Methods

### SetScale

```csharp
public void SetScale(int scalePercentage)
```

### GetCopy

```csharp
public WeaponDesignElement GetCopy()
```

### GetInvalidPieceForType

```csharp
public static WeaponDesignElement GetInvalidPieceForType(CraftingPiece.PieceTypes pieceType)
```

### CreateUsablePiece

```csharp
public static WeaponDesignElement CreateUsablePiece(CraftingPiece craftingPiece, int scalePercentage = 100)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)