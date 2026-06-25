---
title: "SiegeTower"
description: "SiegeTower 的自动生成类参考。"
---
# SiegeTower

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeTower : SiegeWeapon, IPathHolder, IPrimarySiegeWeapon, IMoveableSiegeWeapon, ISpawnable`
**Base:** `SiegeWeapon`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SiegeTower.cs`

## 概述

`SiegeTower` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget { get; }` |
| `State` | `public int State { get; }` |
| `FallAngularSpeed` | `public float FallAngularSpeed { get; }` |
| `TotalDistanceTraveled` | `public float TotalDistanceTraveled { get; }` |
| `WeaponSide` | `public FormationAI.BehaviorSide WeaponSide { get; }` |
| `PathEntity` | `public string PathEntity { get; }` |
| `MovementComponent` | `public SiegeWeaponMovementComponent MovementComponent { get; }` |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget { get; set; }` |
| `State` | `public GateState State { get; set; }` |
| `IsDeactivated` | `public override bool IsDeactivated { get; }` |

## 主要方法

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**用途 / Purpose:** 读取「from network」的数据或状态。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
var result = siegeTower.ReadFromNetwork(bufferReadValid);
```

### HasCompletedAction
`public bool HasCompletedAction()`

**用途 / Purpose:** 判断当前对象是否已经持有 「completed action」。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
var result = siegeTower.HasCompletedAction();
```

### GetGateNavMeshId
`public int GetGateNavMeshId()`

**用途 / Purpose:** 读取并返回当前对象中 「gate nav mesh id」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
var result = siegeTower.GetGateNavMeshId();
```

### CollectGetDifficultNavmeshIDs
`public List<int> CollectGetDifficultNavmeshIDs()`

**用途 / Purpose:** 处理与 「collect get difficult navmesh i ds」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
var result = siegeTower.CollectGetDifficultNavmeshIDs();
```

### CollectGetDifficultNavmeshIDsForAttackers
`public List<int> CollectGetDifficultNavmeshIDsForAttackers()`

**用途 / Purpose:** 处理与 「collect get difficult navmesh i ds for attackers」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
var result = siegeTower.CollectGetDifficultNavmeshIDsForAttackers();
```

### CollectGetDifficultNavmeshIDsForDefenders
`public List<int> CollectGetDifficultNavmeshIDsForDefenders()`

**用途 / Purpose:** 处理与 「collect get difficult navmesh i ds for defenders」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
var result = siegeTower.CollectGetDifficultNavmeshIDsForDefenders();
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 读取并返回当前对象中 「description text」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
var result = siegeTower.GetDescriptionText(gameEntity);
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** 读取并返回当前对象中 「action text for standing point」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
var result = siegeTower.GetActionTextForStandingPoint(usableGameObject);
```

### WriteToNetwork
`public override void WriteToNetwork()`

**用途 / Purpose:** 将「to network」写入目标位置。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
siegeTower.WriteToNetwork();
```

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「order」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
var result = siegeTower.GetOrder(side);
```

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**用途 / Purpose:** 读取并返回当前对象中 「target flags」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
var result = siegeTower.GetTargetFlags();
```

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**用途 / Purpose:** 读取并返回当前对象中 「target value」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
var result = siegeTower.GetTargetValue(weaponPos);
```

### Disable
`public override void Disable()`

**用途 / Purpose:** 处理与 「disable」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
siegeTower.Disable();
```

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**用途 / Purpose:** 读取并返回当前对象中 「siege engine type」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
var result = siegeTower.GetSiegeEngineType();
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** 构建一个新的 「a i behavior object」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
var result = siegeTower.CreateAIBehaviorObject();
```

### SetAbilityOfFaces
`public override void SetAbilityOfFaces(bool enabled)`

**用途 / Purpose:** 为 「ability of faces」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
siegeTower.SetAbilityOfFaces(false);
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 「tick requirement」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
var result = siegeTower.GetTickRequirement();
```

### OnDestroyed
`public void OnDestroyed(DestructableComponent destroyedComponent, Agent destroyerAgent, in MissionWeapon weapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)`

**用途 / Purpose:** 在 「destroyed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
siegeTower.OnDestroyed(destroyedComponent, destroyerAgent, weapon, attackerScriptComponentBehavior, 0);
```

### HighlightPath
`public void HighlightPath()`

**用途 / Purpose:** 处理与 「highlight path」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
siegeTower.HighlightPath();
```

### SwitchGhostEntityMovementMode
`public void SwitchGhostEntityMovementMode(bool isGhostEnabled)`

**用途 / Purpose:** 获取或更新 「switch ghost entity movement mode」 的状态。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
siegeTower.SwitchGhostEntityMovementMode(false);
```

### GetInitialFrame
`public MatrixFrame GetInitialFrame()`

**用途 / Purpose:** 读取并返回当前对象中 「initial frame」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
var result = siegeTower.GetInitialFrame();
```

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

**用途 / Purpose:** 为 「spawned from spawner」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
siegeTower.SetSpawnedFromSpawner();
```

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord) synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**用途 / Purpose:** 在 「after read from network」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
siegeTower.OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord, false);
```

### AssignParametersFromSpawner
`public void AssignParametersFromSpawner(string pathEntityName, string targetWallSegment, string sideTag, int soilNavMeshID1, int soilNavMeshID2, int ditchNavMeshID1, int ditchNavMeshID2, int groundToSoilNavMeshID1, int groundToSoilNavMeshID2, int soilGenericNavMeshID, int groundGenericNavMeshID, Mat3 openStateRotation, string barrierTagToRemove)`

**用途 / Purpose:** 处理与 「assign parameters from spawner」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
siegeTower.AssignParametersFromSpawner("example", "example", "example", 0, 0, 0, 0, 0, 0, 0, 0, openStateRotation, "example");
```

### GetNavmeshFaceIds
`public bool GetNavmeshFaceIds(out List<int> navmeshFaceIds)`

**用途 / Purpose:** 读取并返回当前对象中 「navmesh face ids」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
var result = siegeTower.GetNavmeshFaceIds(navmeshFaceIds);
```

### OnFormationFrameChanged
`public void OnFormationFrameChanged(Agent agent, bool hasFrame, WorldPosition frame)`

**用途 / Purpose:** 在 「formation frame changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeTower 实例
SiegeTower siegeTower = ...;
siegeTower.OnFormationFrameChanged(agent, false, frame);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SiegeTower siegeTower = ...;
siegeTower.ReadFromNetwork(bufferReadValid);
```

## 参见

- [本区域目录](../)