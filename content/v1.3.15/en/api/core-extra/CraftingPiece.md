---
title: "CraftingPiece"
description: "Auto-generated class reference for CraftingPiece."
---
# CraftingPiece

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class CraftingPiece : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/CraftingPiece.cs`

## Overview

`CraftingPiece` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
| `AccuracyBonus` | `public int AccuracyBonus { get; }` |
| `PieceTier` | `public int PieceTier { get; }` |
| `FullScale` | `public bool FullScale { get; }` |
| `ItemHolsterPosShift` | `public Vec3 ItemHolsterPosShift { get; }` |
| `Appearance` | `public float Appearance { get; }` |
| `IsGivenByDefault` | `public bool IsGivenByDefault { get; }` |
| `IsHiddenOnDesigner` | `public bool IsHiddenOnDesigner { get; }` |
| `IsUnique` | `public bool IsUnique { get; }` |
| `ItemUsageFeaturesToExclude` | `public string ItemUsageFeaturesToExclude { get; }` |
| `MaterialsUsed` | `public MBReadOnlyList<ValueTuple<CraftingMaterials, int>> MaterialsUsed { get; }` |
| `IsEmptyPiece` | `public bool IsEmptyPiece { get; }` |
| `CraftingCost` | `public int CraftingCost { get; }` |
| `RequiredSkillValue` | `public int RequiredSkillValue { get; }` |
| `BladeData` | `public BladeData BladeData { get; }` |
| `All` | `public static MBReadOnlyList<CraftingPiece> All { get; }` |

## Key Methods

### GetInvalidCraftingPiece
`public static CraftingPiece GetInvalidCraftingPiece(CraftingPiece.PieceTypes pieceType)`

**Purpose:** Reads and returns the `invalid crafting piece` value held by the current object.

```csharp
// Static call; no instance required
CraftingPiece.GetInvalidCraftingPiece(pieceType);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of CraftingPiece from the subsystem API first
CraftingPiece craftingPiece = ...;
craftingPiece.Deserialize(objectManager, node);
```

## Usage Example

```csharp
CraftingPiece.GetInvalidCraftingPiece(pieceType);
```

## See Also

- [Area Index](../)