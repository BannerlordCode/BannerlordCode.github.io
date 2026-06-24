<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingPiece`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingPiece

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class CraftingPiece : MBObjectBase`
**Base:** `MBObjectBase`
**Area:** core-extra

## Overview

`CraftingPiece` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public static CraftingPiece GetInvalidCraftingPiece(CraftingPiece.PieceTypes pieceType)`

**Purpose:** Gets the current value of `invalid crafting piece`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
CraftingPiece.GetInvalidCraftingPiece(pieceType);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
