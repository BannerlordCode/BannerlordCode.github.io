<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CastleGate`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CastleGate

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`CastleGate` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)