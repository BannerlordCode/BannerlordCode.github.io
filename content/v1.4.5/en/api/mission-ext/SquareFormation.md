---
title: "SquareFormation"
description: "Auto-generated class reference for SquareFormation."
---
# SquareFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SquareFormation : LineFormation`
**Base:** `LineFormation`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SquareFormation.cs`

## Overview

`SquareFormation` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Width` | `public override float Width { get; set; }` |
| `MinimumWidth` | `public override float MinimumWidth { get; }` |

## Key Methods

### Clone
`public override IFormationArrangement Clone(IFormation formation)`

**Purpose:** Duplicates the current object's state and returns a new instance.

```csharp
// Obtain an instance of SquareFormation from the subsystem API first
SquareFormation squareFormation = ...;
var result = squareFormation.Clone(formation);
```

### DeepCopyFrom
`public override void DeepCopyFrom(IFormationArrangement arrangement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SquareFormation from the subsystem API first
SquareFormation squareFormation = ...;
squareFormation.DeepCopyFrom(arrangement);
```

### FormFromBorderSideWidth
`public void FormFromBorderSideWidth(float borderSideWidth)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SquareFormation from the subsystem API first
SquareFormation squareFormation = ...;
squareFormation.FormFromBorderSideWidth(0);
```

### FormFromBorderUnitCountPerSide
`public void FormFromBorderUnitCountPerSide(int unitCountPerSide)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SquareFormation from the subsystem API first
SquareFormation squareFormation = ...;
squareFormation.FormFromBorderUnitCountPerSide(0);
```

### GetUnitsPerSideFromRankCount
`public int GetUnitsPerSideFromRankCount(int rankCount)`

**Purpose:** Reads and returns the `units per side from rank count` value held by the current object.

```csharp
// Obtain an instance of SquareFormation from the subsystem API first
SquareFormation squareFormation = ...;
var result = squareFormation.GetUnitsPerSideFromRankCount(0);
```

### FormFromRankCount
`public void FormFromRankCount(int rankCount)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SquareFormation from the subsystem API first
SquareFormation squareFormation = ...;
squareFormation.FormFromRankCount(0);
```

### GetLocalDirectionOfUnitOrDefault
`public override Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)`

**Purpose:** Reads and returns the `local direction of unit or default` value held by the current object.

```csharp
// Obtain an instance of SquareFormation from the subsystem API first
SquareFormation squareFormation = ...;
var result = squareFormation.GetLocalDirectionOfUnitOrDefault(unit);
```

### TurnBackwards
`public override void TurnBackwards()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SquareFormation from the subsystem API first
SquareFormation squareFormation = ...;
squareFormation.TurnBackwards();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SquareFormation squareFormation = ...;
squareFormation.Clone(formation);
```

## See Also

- [Area Index](../)