---
title: "WeaponDesignElement"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponDesignElement`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WeaponDesignElement

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class WeaponDesignElement`
**Base:** none
**File:** `TaleWorlds.Core/WeaponDesignElement.cs`

## Overview

`WeaponDesignElement` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public void SetScale(int scalePercentage)`

**Purpose:** Sets the value or state of `scale`.

### GetCopy
`public WeaponDesignElement GetCopy()`

**Purpose:** Gets the current value of `copy`.

### GetInvalidPieceForType
`public static WeaponDesignElement GetInvalidPieceForType(CraftingPiece.PieceTypes pieceType)`

**Purpose:** Gets the current value of `invalid piece for type`.

### CreateUsablePiece
`public static WeaponDesignElement CreateUsablePiece(CraftingPiece craftingPiece, int scalePercentage = 100)`

**Purpose:** Creates a new `usable piece` instance or object.

## Usage Example

```csharp
var value = new WeaponDesignElement();
value.SetScale(0);
```

## See Also

- [Complete Class Catalog](../catalog)