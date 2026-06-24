<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SquareFormation`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SquareFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SquareFormation : LineFormation`
**Base:** `LineFormation`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SquareFormation.cs`

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

**Purpose:** Handles logic related to `clone`.

### DeepCopyFrom
`public override void DeepCopyFrom(IFormationArrangement arrangement)`

**Purpose:** Handles logic related to `deep copy from`.

### FormFromBorderSideWidth
`public void FormFromBorderSideWidth(float borderSideWidth)`

**Purpose:** Handles logic related to `form from border side width`.

### FormFromBorderUnitCountPerSide
`public void FormFromBorderUnitCountPerSide(int unitCountPerSide)`

**Purpose:** Handles logic related to `form from border unit count per side`.

### GetUnitsPerSideFromRankCount
`public int GetUnitsPerSideFromRankCount(int rankCount)`

**Purpose:** Gets the current value of `units per side from rank count`.

### FormFromRankCount
`public void FormFromRankCount(int rankCount)`

**Purpose:** Handles logic related to `form from rank count`.

### GetLocalDirectionOfUnitOrDefault
`public override Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)`

**Purpose:** Gets the current value of `local direction of unit or default`.

### TurnBackwards
`public override void TurnBackwards()`

**Purpose:** Handles logic related to `turn backwards`.

## Usage Example

```csharp
var value = new SquareFormation();
value.Clone(formation);
```

## See Also

- [Complete Class Catalog](../catalog)