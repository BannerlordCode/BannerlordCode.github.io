<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CastleGate`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CastleGate

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `CastleGate` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `MiddlePosition` | `public TacticalPosition MiddlePosition { get; }` |
| `WaitPosition` | `public TacticalPosition WaitPosition { get; }` |
| `FocusableObjectType` | `public override FocusableObjectType FocusableObjectType { get; }` |
| `State` | `public CastleGate.GateState State { get; }` |
| `IsGateOpen` | `public bool IsGateOpen { get; set; }` |
| `AttackerSiegeWeapon` | `public IPrimarySiegeWeapon AttackerSiegeWeapon { get; set; }` |
| `DefencePoints` | `public IEnumerable<DefencePoint> DefencePoints { get; set; }` |
| `DefenseSide` | `public FormationAI.BehaviorSide DefenseSide { get; }` |
| `MiddleFrame` | `public WorldFrame MiddleFrame { get; }` |
| `DefenseWaitFrame` | `public WorldFrame DefenseWaitFrame { get; }` |


## Key Methods

### GetPosition

```csharp
public Vec3 GetPosition()
```

### GetOrder

```csharp
public override OrderType GetOrder(BattleSideEnum side)
```

### SetUsableTeam

```csharp
public void SetUsableTeam(Team team)
```

### AfterMissionStart

```csharp
public override void AfterMissionStart()
```

### GetDescriptionText

```csharp
public override TextObject GetDescriptionText(WeakGameEntity gameEntity)
```

### GetActionTextForStandingPoint

```csharp
public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)
```

### CreateAIBehaviorObject

```csharp
public override UsableMachineAIBase CreateAIBehaviorObject()
```

### OpenDoorAndDisableGateForCivilianMission

```csharp
public void OpenDoorAndDisableGateForCivilianMission()
```

### OpenDoor

```csharp
public void OpenDoor()
```

### CloseDoor

```csharp
public void CloseDoor()
```

### SetAutoOpenState

```csharp
public void SetAutoOpenState(bool isEnabled)
```

### GetTickRequirement

```csharp
public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
```

### GetTargetFlags

```csharp
public TargetFlags GetTargetFlags()
```

### GetTargetValue

```csharp
public float GetTargetValue(List<Vec3> weaponPos)
```

### GetTargetEntity

```csharp
public WeakGameEntity GetTargetEntity()
```

### GetSide

```csharp
public BattleSideEnum GetSide()
```

### GetTargetGlobalVelocity

```csharp
public Vec3 GetTargetGlobalVelocity()
```

### IsDestructable

```csharp
public bool IsDestructable()
```

### Entity

```csharp
public WeakGameEntity Entity()
```

### ComputeGlobalPhysicsBoundingBoxMinMax

```csharp
public ValueTuple<Vec3, Vec3> ComputeGlobalPhysicsBoundingBoxMinMax()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)