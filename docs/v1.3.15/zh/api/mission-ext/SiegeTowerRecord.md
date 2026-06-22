<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeTowerRecord`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeTowerRecord

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`SiegeTowerRecord` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

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


## 主要方法

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

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)