<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TacticalPosition`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TacticalPosition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TacticalPosition : MissionObject`
**Base:** `MissionObject`
**File:** `TaleWorlds.MountAndBlade/TacticalPosition.cs`

## Overview

`TacticalPosition` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public WorldPosition Position { get; set; }` |
| `Direction` | `public Vec2 Direction { get; set; }` |
| `Width` | `public float Width { get; }` |
| `Slope` | `public float Slope { get; }` |
| `IsInsurmountable` | `public bool IsInsurmountable { get; }` |
| `IsOuterEdge` | `public bool IsOuterEdge { get; set; }` |
| `LinkedTacticalPositions` | `public List<TacticalPosition> LinkedTacticalPositions { get; set; }` |
| `TacticalPositionType` | `public TacticalPosition.TacticalPositionTypeEnum TacticalPositionType { get; }` |
| `TacticalRegionMembership` | `public TacticalRegion.TacticalRegionTypeEnum TacticalRegionMembership { get; }` |
| `TacticalPositionSide` | `public FormationAI.BehaviorSide TacticalPositionSide { get; }` |

## Key Methods

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Handles logic related to `after mission start`.

### SetWidth
`public void SetWidth(float width)`

**Purpose:** Sets the value or state of `width`.

## Usage Example

```csharp
var value = new TacticalPosition();
value.AfterMissionStart();
```

## See Also

- [Complete Class Catalog](../catalog)