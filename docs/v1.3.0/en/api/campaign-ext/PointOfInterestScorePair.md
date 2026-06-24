<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PointOfInterestScorePair`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PointOfInterestScorePair

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class PointOfInterestScorePair`
**Area:** campaign-ext

## Overview

`PointOfInterestScorePair` lives in `SandBox.Missions.MissionLogics`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.Missions.MissionLogics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Data` | `public List<MissionPathGenerationLogic.PointOfInterestBaseData> Data { get; }` |

## Key Methods

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Called when the `object used` event is raised.

### InitializeBehavior
`public void InitializeBehavior()`

**Purpose:** Initializes the state, resources, or bindings for `behavior`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### GetAllPossiblePaths
`public List<MissionPathGenerationLogic.PointOfInterestScorePair> GetAllPossiblePaths()`

**Purpose:** Gets the current value of `all possible paths`.

### IsOnLeftSide
`public bool IsOnLeftSide(Vec2 lineA, Vec2 lineB, Vec2 point)`

**Purpose:** Handles logic related to `is on left side`.

### ReverseClone
`public MissionPathGenerationLogic.NavigationPathData ReverseClone()`

**Purpose:** Handles logic related to `reverse clone`.

### InitializeUsablePoints
`public void InitializeUsablePoints(List<UsableMachine> allUsableMachines)`

**Purpose:** Initializes the state, resources, or bindings for `usable points`.

### GetPointOfInterestType
`public abstract MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**Purpose:** Gets the current value of `point of interest type`.

### GetPositionAndRadiusPairs
`public abstract List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**Purpose:** Gets the current value of `position and radius pairs`.

### IsInRadius
`public abstract bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Handles logic related to `is in radius`.

### GetLocationRatio
`public abstract float GetLocationRatio()`

**Purpose:** Gets the current value of `location ratio`.

### GetPointOfInterestType
`public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**Purpose:** Gets the current value of `point of interest type`.

### GetPositionAndRadiusPairs
`public override List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**Purpose:** Gets the current value of `position and radius pairs`.

### IsInRadius
`public override bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Handles logic related to `is in radius`.

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** Gets the current value of `location ratio`.

### GetPointOfInterestType
`public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**Purpose:** Gets the current value of `point of interest type`.

### GetPositionAndRadiusPairs
`public override List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**Purpose:** Gets the current value of `position and radius pairs`.

### IsInRadius
`public override bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Handles logic related to `is in radius`.

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** Gets the current value of `location ratio`.

### GetPointOfInterestType
`public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**Purpose:** Gets the current value of `point of interest type`.

## Usage Example

```csharp
// First obtain a PointOfInterestScorePair instance from game state, then call one of its public methods
var value = new PointOfInterestScorePair();
value.OnObjectUsed(userAgent, usedObject);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
