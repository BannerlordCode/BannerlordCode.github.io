<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BatteringRam`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BatteringRam

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `BatteringRam` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public bool HasCompletedAction()
```

### Disable

```csharp
public override void Disable()
```

### GetSiegeEngineType

```csharp
public override SiegeEngineType GetSiegeEngineType()
```

### GetInitialFrame

```csharp
public MatrixFrame GetInitialFrame()
```

### GetTickRequirement

```csharp
public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
```

### CreateAIBehaviorObject

```csharp
public override UsableMachineAIBase CreateAIBehaviorObject()
```

### WriteToNetwork

```csharp
public override void WriteToNetwork()
```

### HighlightPath

```csharp
public void HighlightPath()
```

### SwitchGhostEntityMovementMode

```csharp
public void SwitchGhostEntityMovementMode(bool isGhostEnabled)
```

### GetDescriptionText

```csharp
public override TextObject GetDescriptionText(WeakGameEntity gameEntity)
```

### GetActionTextForStandingPoint

```csharp
public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)
```

### GetOrder

```csharp
public override OrderType GetOrder(BattleSideEnum side)
```

### GetTargetFlags

```csharp
public override TargetFlags GetTargetFlags()
```

### GetTargetValue

```csharp
public override float GetTargetValue(List<Vec3> weaponPos)
```

### SetSpawnedFromSpawner

```csharp
public void SetSpawnedFromSpawner()
```

### AssignParametersFromSpawner

```csharp
public void AssignParametersFromSpawner(string gateTag, string sideTag, int bridgeNavMeshID1, int bridgeNavMeshID2, int ditchNavMeshID1, int ditchNavMeshID2, int groundToBridgeNavMeshID1, int groundToBridgeNavMeshID2, string pathEntityName)
```

### OnAfterReadFromNetwork

```csharp
public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)
```

### GetNavmeshFaceIds

```csharp
public bool GetNavmeshFaceIds(out List<int> navmeshFaceIds)
```

### ReadFromNetwork

```csharp
public bool ReadFromNetwork(ref bool bufferReadValid)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)