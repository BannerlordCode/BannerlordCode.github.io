---
title: "WeaponDesignElement"
description: "Auto-generated class reference for WeaponDesignElement."
---
# WeaponDesignElement

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class WeaponDesignElement`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/WeaponDesignElement.cs`

## Overview

`WeaponDesignElement` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
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

**Purpose:** Assigns a new value to `scale` and updates the object's internal state.

```csharp
// Obtain an instance of WeaponDesignElement from the subsystem API first
WeaponDesignElement weaponDesignElement = ...;
weaponDesignElement.SetScale(0);
```

### GetCopy
`public WeaponDesignElement GetCopy()`

**Purpose:** Reads and returns the `copy` value held by the current object.

```csharp
// Obtain an instance of WeaponDesignElement from the subsystem API first
WeaponDesignElement weaponDesignElement = ...;
var result = weaponDesignElement.GetCopy();
```

### GetInvalidPieceForType
`public static WeaponDesignElement GetInvalidPieceForType(CraftingPiece.PieceTypes pieceType)`

**Purpose:** Reads and returns the `invalid piece for type` value held by the current object.

```csharp
// Static call; no instance required
WeaponDesignElement.GetInvalidPieceForType(pieceType);
```

### CreateUsablePiece
`public static WeaponDesignElement CreateUsablePiece(CraftingPiece craftingPiece, int scalePercentage = 100)`

**Purpose:** Constructs a new `usable piece` entity and returns it to the caller.

```csharp
// Static call; no instance required
WeaponDesignElement.CreateUsablePiece(craftingPiece, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WeaponDesignElement weaponDesignElement = ...;
weaponDesignElement.SetScale(0);
```

## See Also

- [Area Index](../)