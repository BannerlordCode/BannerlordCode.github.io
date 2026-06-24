<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionPathGenerationLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionPathGenerationLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionPathGenerationLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs`

## Overview

`MissionPathGenerationLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionPathGenerationLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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

### Clone
`public MissionPathGenerationLogic.PointOfInterestScorePair Clone()`

**Purpose:** Handles logic related to `clone`.

### AddToData
`public void AddToData(MissionPathGenerationLogic.PointOfInterestBaseData pointOfInterestToAdd)`

**Purpose:** Adds `to data` to the current collection or state.

### IsDataEqualTo
`public bool IsDataEqualTo(MissionPathGenerationLogic.PointOfInterestScorePair other, MissionPathGenerationLogic.PointOfInterestBaseData newDataToAdd)`

**Purpose:** Handles logic related to `is data equal to`.

### IsBetterThan
`public bool IsBetterThan(MissionPathGenerationLogic.PointOfInterestScorePair other)`

**Purpose:** Handles logic related to `is better than`.

### IsSufficient
`public bool IsSufficient()`

**Purpose:** Handles logic related to `is sufficient`.

### ReOrderDataAccordingToPathRatios
`public void ReOrderDataAccordingToPathRatios()`

**Purpose:** Handles logic related to `re order data according to path ratios`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionPathGenerationLogic());
```

## See Also

- [Complete Class Catalog](../catalog)