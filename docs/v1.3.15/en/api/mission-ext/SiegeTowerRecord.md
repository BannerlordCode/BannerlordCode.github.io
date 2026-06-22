<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeTowerRecord`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeTowerRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `SiegeTowerRecord` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TargetCastlePosition` | `public MissionObject TargetCastlePosition { get; }` |
| `WeaponSide` | `public FormationAI.BehaviorSide WeaponSide { get; }` |
| `PathEntity` | `public string PathEntity { get; }` |
| `EditorGhostEntityMove` | `public bool EditorGhostEntityMove { get; }` |
| `SiegeWeaponPriority` | `public float SiegeWeaponPriority { get; }` |
| `OverTheWallNavMeshID` | `public int OverTheWallNavMeshID { get; }` |
| `MovementComponent` | `public SiegeWeaponMovementComponent MovementComponent { get; }` |
| `HoldLadders` | `public bool HoldLadders { get; }` |
| `SendLadders` | `public bool SendLadders { get; }` |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget { get; set; }` |
| `State` | `public SiegeTower.GateState State { get; set; }` |
| `IsDeactivated` | `public override bool IsDeactivated { get; }` |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget { get; }` |
| `State` | `public int State { get; }` |
| `FallAngularSpeed` | `public float FallAngularSpeed { get; }` |
| `TotalDistanceTraveled` | `public float TotalDistanceTraveled { get; }` |


## Key Methods

### HasCompletedAction

```csharp
public bool HasCompletedAction()
```

### GetGateNavMeshId

```csharp
public int GetGateNavMeshId()
```

### CollectGetDifficultNavmeshIDs

```csharp
public List<int> CollectGetDifficultNavmeshIDs()
```

### CollectGetDifficultNavmeshIDsForAttackers

```csharp
public List<int> CollectGetDifficultNavmeshIDsForAttackers()
```

### CollectGetDifficultNavmeshIDsForDefenders

```csharp
public List<int> CollectGetDifficultNavmeshIDsForDefenders()
```

### GetDescriptionText

```csharp
public override TextObject GetDescriptionText(WeakGameEntity gameEntity)
```

### GetActionTextForStandingPoint

```csharp
public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)
```

### WriteToNetwork

```csharp
public override void WriteToNetwork()
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

### Disable

```csharp
public override void Disable()
```

### GetSiegeEngineType

```csharp
public override SiegeEngineType GetSiegeEngineType()
```

### CreateAIBehaviorObject

```csharp
public override UsableMachineAIBase CreateAIBehaviorObject()
```

### SetAbilityOfFaces

```csharp
public override void SetAbilityOfFaces(bool enabled)
```

### GetTickRequirement

```csharp
public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
```

### OnDestroyed

```csharp
public void OnDestroyed(DestructableComponent destroyedComponent, Agent destroyerAgent, in MissionWeapon weapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)
```

### HighlightPath

```csharp
public void HighlightPath()
```

### SwitchGhostEntityMovementMode

```csharp
public void SwitchGhostEntityMovementMode(bool isGhostEnabled)
```

### GetInitialFrame

```csharp
public MatrixFrame GetInitialFrame()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)