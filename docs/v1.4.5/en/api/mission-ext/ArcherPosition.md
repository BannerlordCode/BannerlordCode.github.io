<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArcherPosition`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArcherPosition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArcherPosition`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ArcherPosition.cs`

## Overview

`ArcherPosition` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Entity` | `public GameEntity Entity { get; }` |
| `TacticalArcherPosition` | `public TacticalPosition TacticalArcherPosition { get; }` |
| `ConnectedSides` | `public int ConnectedSides { get; }` |

## Key Methods

### GetLastAssignedFormation
`public Formation GetLastAssignedFormation(int teamIndex)`

**Purpose:** Gets the current value of `last assigned formation`.

### IsArcherPositionRelatedToSide
`public bool IsArcherPositionRelatedToSide(FormationAI.BehaviorSide side)`

**Purpose:** Handles logic related to `is archer position related to side`.

### GetArcherPositionClosestSide
`public FormationAI.BehaviorSide GetArcherPositionClosestSide()`

**Purpose:** Gets the current value of `archer position closest side`.

### OnDeploymentFinished
`public void OnDeploymentFinished(SiegeQuerySystem siegeQuerySystem, BattleSideEnum battleSide)`

**Purpose:** Called when the `deployment finished` event is raised.

### SetLastAssignedFormation
`public void SetLastAssignedFormation(int teamIndex, Formation formation)`

**Purpose:** Sets the value or state of `last assigned formation`.

## Usage Example

```csharp
var value = new ArcherPosition();
value.GetLastAssignedFormation(0);
```

## See Also

- [Complete Class Catalog](../catalog)