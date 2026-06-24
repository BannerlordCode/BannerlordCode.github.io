<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BatteringRam`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BatteringRam

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BatteringRam : SiegeWeapon, IPathHolder, IPrimarySiegeWeapon, IMoveableSiegeWeapon, ISpawnable`
**Base:** `SiegeWeapon`
**File:** `TaleWorlds.MountAndBlade/BatteringRam.cs`

## Overview

`BatteringRam` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MovementComponent` | `public SiegeWeaponMovementComponent MovementComponent { get; }` |
| `WeaponSide` | `public FormationAI.BehaviorSide WeaponSide { get; }` |
| `PathEntity` | `public string PathEntity { get; }` |
| `EditorGhostEntityMove` | `public bool EditorGhostEntityMove { get; set; }` |
| `State` | `public BatteringRam.RamState State { get; set; }` |
| `TargetCastlePosition` | `public MissionObject TargetCastlePosition { get; }` |
| `SiegeWeaponPriority` | `public float SiegeWeaponPriority { get; }` |
| `OverTheWallNavMeshID` | `public int OverTheWallNavMeshID { get; }` |
| `HoldLadders` | `public bool HoldLadders { get; }` |
| `SendLadders` | `public bool SendLadders { get; set; }` |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget { get; set; }` |
| `IsDeactivated` | `public override bool IsDeactivated { get; }` |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget { get; }` |
| `State` | `public int State { get; }` |
| `TotalDistanceTraveled` | `public float TotalDistanceTraveled { get; }` |

## Key Methods

### HasCompletedAction
`public bool HasCompletedAction()`

**Purpose:** Checks whether the current object has/contains `completed action`.

### Disable
`public override void Disable()`

**Purpose:** Handles logic related to `disable`.

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**Purpose:** Gets the current value of `siege engine type`.

### GetInitialFrame
`public MatrixFrame GetInitialFrame()`

**Purpose:** Gets the current value of `initial frame`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Creates a new `a i behavior object` instance or object.

### WriteToNetwork
`public override void WriteToNetwork()`

**Purpose:** Handles logic related to `write to network`.

### HighlightPath
`public void HighlightPath()`

**Purpose:** Handles logic related to `highlight path`.

### SwitchGhostEntityMovementMode
`public void SwitchGhostEntityMovementMode(bool isGhostEnabled)`

**Purpose:** Handles logic related to `switch ghost entity movement mode`.

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Gets the current value of `action text for standing point`.

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**Purpose:** Gets the current value of `order`.

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**Purpose:** Gets the current value of `target flags`.

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**Purpose:** Gets the current value of `target value`.

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

**Purpose:** Sets the value or state of `spawned from spawner`.

### AssignParametersFromSpawner
`public void AssignParametersFromSpawner(string gateTag, string sideTag, int bridgeNavMeshID1, int bridgeNavMeshID2, int ditchNavMeshID1, int ditchNavMeshID2, int groundToBridgeNavMeshID1, int groundToBridgeNavMeshID2, string pathEntityName)`

**Purpose:** Handles logic related to `assign parameters from spawner`.

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord)`

**Purpose:** Called when the `after read from network` event is raised.

### GetNavmeshFaceIds
`public bool GetNavmeshFaceIds(out List<int> navmeshFaceIds)`

**Purpose:** Gets the current value of `navmesh face ids`.

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read from network`.

## Usage Example

```csharp
var value = new BatteringRam();
value.HasCompletedAction();
```

## See Also

- [Complete Class Catalog](../catalog)