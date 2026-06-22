<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingPiece`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingPiece

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `CraftingPiece` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `PieceType` | `public CraftingPiece.PieceTypes PieceType { get; }` |
| `MeshName` | `public string MeshName { get; }` |
| `Culture` | `public BasicCultureObject Culture { get; }` |
| `Length` | `public float Length { get; }` |
| `DistanceToNextPiece` | `public float DistanceToNextPiece { get; }` |
| `DistanceToPreviousPiece` | `public float DistanceToPreviousPiece { get; }` |
| `PieceOffset` | `public float PieceOffset { get; }` |
| `PreviousPieceOffset` | `public float PreviousPieceOffset { get; }` |
| `NextPieceOffset` | `public float NextPieceOffset { get; }` |
| `Weight` | `public float Weight { get; }` |
| `Inertia` | `public float Inertia { get; }` |
| `CenterOfMass` | `public float CenterOfMass { get; }` |
| `ArmorBonus` | `public int ArmorBonus { get; }` |
| `SwingDamageBonus` | `public int SwingDamageBonus { get; }` |
| `SwingSpeedBonus` | `public int SwingSpeedBonus { get; }` |
| `ThrustDamageBonus` | `public int ThrustDamageBonus { get; }` |
| `ThrustSpeedBonus` | `public int ThrustSpeedBonus { get; }` |
| `HandlingBonus` | `public int HandlingBonus { get; }` |


## Key Methods

### GetInvalidCraftingPiece

```csharp
public static CraftingPiece GetInvalidCraftingPiece(CraftingPiece.PieceTypes pieceType)
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)