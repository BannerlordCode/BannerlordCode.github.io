---
title: "SiegeLadder"
description: "SiegeLadder 的自动生成类参考。"
---
# SiegeLadder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeLadder : SiegeWeapon, IPrimarySiegeWeapon, IOrderableWithInteractionArea, IOrderable, ISpawnable`
**Base:** `SiegeWeapon`
**File:** `TaleWorlds.MountAndBlade/SiegeLadder.cs`

## 概述

`SiegeLadder` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `InitialWaitPosition` | `public GameEntity InitialWaitPosition { get; }` |
| `OnWallNavMeshId` | `public int OnWallNavMeshId { get; }` |
| `TargetCastlePosition` | `public MissionObject TargetCastlePosition { get; }` |
| `WeaponSide` | `public FormationAI.BehaviorSide WeaponSide { get; }` |
| `SiegeWeaponPriority` | `public float SiegeWeaponPriority { get; }` |
| `OverTheWallNavMeshID` | `public int OverTheWallNavMeshID { get; }` |
| `State` | `public SiegeLadder.LadderState State { get; set; }` |
| `HoldLadders` | `public bool HoldLadders { get; }` |
| `SendLadders` | `public bool SendLadders { get; }` |
| `IsStateLand` | `public bool IsStateLand { get; }` |
| `State` | `public int State { get; }` |
| `AnimationState` | `public int AnimationState { get; }` |
| `FallAngularSpeed` | `public float FallAngularSpeed { get; }` |
| `LadderFrame` | `public MatrixFrame LadderFrame { get; }` |
| `HasAnimation` | `public bool HasAnimation { get; }` |
| `LadderAnimationIndex` | `public int LadderAnimationIndex { get; }` |
| `LadderAnimationProgress` | `public float LadderAnimationProgress { get; }` |

## 主要方法

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege engine type 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
var result = siegeLadder.GetSiegeEngineType();
```

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 order 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
var result = siegeLadder.GetOrder(side);
```

### HasCompletedAction
`public bool HasCompletedAction()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 completed action。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
var result = siegeLadder.HasCompletedAction();
```

### IsDisabledForBattleSide
`public override bool IsDisabledForBattleSide(BattleSideEnum sideEnum)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 disabled for battle side 状态或条件。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
var result = siegeLadder.IsDisabledForBattleSide(sideEnum);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
var result = siegeLadder.GetTickRequirement();
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 a i behavior object 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
var result = siegeLadder.CreateAIBehaviorObject();
```

### SetUpStateVisibility
`public void SetUpStateVisibility(bool isVisible)`

**用途 / Purpose:** **用途 / Purpose:** 为 up state visibility 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
siegeLadder.SetUpStateVisibility(false);
```

### SetAbilityOfFaces
`public override void SetAbilityOfFaces(bool enabled)`

**用途 / Purpose:** **用途 / Purpose:** 为 ability of faces 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
siegeLadder.SetAbilityOfFaces(false);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 description text 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
var result = siegeLadder.GetDescriptionText(gameEntity);
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 action text for standing point 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
var result = siegeLadder.GetActionTextForStandingPoint(usableGameObject);
```

### WriteToNetwork
`public override void WriteToNetwork()`

**用途 / Purpose:** **用途 / Purpose:** 将to network写入目标位置。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
siegeLadder.WriteToNetwork();
```

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 target flags 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
var result = siegeLadder.GetTargetFlags();
```

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 target value 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
var result = siegeLadder.GetTargetValue(weaponPos);
```

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

**用途 / Purpose:** **用途 / Purpose:** 为 spawned from spawner 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
siegeLadder.SetSpawnedFromSpawner();
```

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord)`

**用途 / Purpose:** **用途 / Purpose:** 在 after read from network 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
siegeLadder.OnAfterReadFromNetwork(valueTuple<BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord);
```

### AssignParametersFromSpawner
`public void AssignParametersFromSpawner(string sideTag, string targetWallSegment, int onWallNavMeshId, float downStateRotationRadian, float upperStateRotationRadian, string barrierTagToRemove, string indestructibleMerlonsTag)`

**用途 / Purpose:** **用途 / Purpose:** 调用 AssignParametersFromSpawner 对应的操作。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
siegeLadder.AssignParametersFromSpawner("example", "example", 0, 0, 0, "example", "example");
```

### GetNavmeshFaceIds
`public bool GetNavmeshFaceIds(out List<int> navmeshFaceIds)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 navmesh face ids 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
var result = siegeLadder.GetNavmeshFaceIds(navmeshFaceIds);
```

### OnFormationFrameChanged
`public void OnFormationFrameChanged(Agent agent, bool hasFrame, WorldPosition position)`

**用途 / Purpose:** **用途 / Purpose:** 在 formation frame changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
siegeLadder.OnFormationFrameChanged(agent, false, position);
```

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**用途 / Purpose:** **用途 / Purpose:** 读取from network的数据或状态。

```csharp
// 先通过子系统 API 拿到 SiegeLadder 实例
SiegeLadder siegeLadder = ...;
var result = siegeLadder.ReadFromNetwork(bufferReadValid);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SiegeLadder siegeLadder = ...;
siegeLadder.GetSiegeEngineType();
```

## 参见

- [本区域目录](../)