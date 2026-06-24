<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CircularFormation`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CircularFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CircularFormation : LineFormation`
**Base:** `LineFormation`
**File:** `TaleWorlds.MountAndBlade/CircularFormation.cs`

## Overview

`CircularFormation` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Width` | `public override float Width { get; set; }` |
| `Depth` | `public override float Depth { get; }` |
| `MinimumWidth` | `public override float MinimumWidth { get; }` |
| `MaximumWidth` | `public override float MaximumWidth { get; }` |

## Key Methods

### Clone
`public override IFormationArrangement Clone(IFormation formation)`

**Purpose:** Handles logic related to `clone`.

### GetLocalDirectionOfUnitOrDefault
`public override Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)`

**Purpose:** Gets the current value of `local direction of unit or default`.

### GetCircumferenceFromRankCount
`public float GetCircumferenceFromRankCount(int rankCount)`

**Purpose:** Gets the current value of `circumference from rank count`.

### FormFromCircumference
`public void FormFromCircumference(float circumference)`

**Purpose:** Handles logic related to `form from circumference`.

## Usage Example

```csharp
var value = new CircularFormation();
value.Clone(formation);
```

## See Also

- [Complete Class Catalog](../catalog)