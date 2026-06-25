---
title: "BatteringRam"
description: "BatteringRam 的自动生成类参考。"
---
# BatteringRam

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BatteringRam : SiegeWeapon, IPathHolder, IPrimarySiegeWeapon, IMoveableSiegeWeapon, ISpawnable`
**Base:** `SiegeWeapon`
**File:** `TaleWorlds.MountAndBlade/BatteringRam.cs`

## 概述

`BatteringRam` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### HasCompletedAction
`public bool HasCompletedAction()`

**用途 / Purpose:** 判断当前对象是否已经持有 「completed action」。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
var result = batteringRam.HasCompletedAction();
```

### Disable
`public override void Disable()`

**用途 / Purpose:** 处理与 「disable」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
batteringRam.Disable();
```

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**用途 / Purpose:** 读取并返回当前对象中 「siege engine type」 的结果。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
var result = batteringRam.GetSiegeEngineType();
```

### GetInitialFrame
`public MatrixFrame GetInitialFrame()`

**用途 / Purpose:** 读取并返回当前对象中 「initial frame」 的结果。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
var result = batteringRam.GetInitialFrame();
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 「tick requirement」 的结果。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
var result = batteringRam.GetTickRequirement();
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** 构建一个新的 「a i behavior object」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
var result = batteringRam.CreateAIBehaviorObject();
```

### WriteToNetwork
`public override void WriteToNetwork()`

**用途 / Purpose:** 将「to network」写入目标位置。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
batteringRam.WriteToNetwork();
```

### HighlightPath
`public void HighlightPath()`

**用途 / Purpose:** 处理与 「highlight path」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
batteringRam.HighlightPath();
```

### SwitchGhostEntityMovementMode
`public void SwitchGhostEntityMovementMode(bool isGhostEnabled)`

**用途 / Purpose:** 获取或更新 「switch ghost entity movement mode」 的状态。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
batteringRam.SwitchGhostEntityMovementMode(false);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 读取并返回当前对象中 「description text」 的结果。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
var result = batteringRam.GetDescriptionText(gameEntity);
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** 读取并返回当前对象中 「action text for standing point」 的结果。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
var result = batteringRam.GetActionTextForStandingPoint(usableGameObject);
```

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「order」 的结果。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
var result = batteringRam.GetOrder(side);
```

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**用途 / Purpose:** 读取并返回当前对象中 「target flags」 的结果。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
var result = batteringRam.GetTargetFlags();
```

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**用途 / Purpose:** 读取并返回当前对象中 「target value」 的结果。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
var result = batteringRam.GetTargetValue(weaponPos);
```

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

**用途 / Purpose:** 为 「spawned from spawner」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
batteringRam.SetSpawnedFromSpawner();
```

### AssignParametersFromSpawner
`public void AssignParametersFromSpawner(string gateTag, string sideTag, int bridgeNavMeshID1, int bridgeNavMeshID2, int ditchNavMeshID1, int ditchNavMeshID2, int groundToBridgeNavMeshID1, int groundToBridgeNavMeshID2, string pathEntityName)`

**用途 / Purpose:** 处理与 「assign parameters from spawner」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
batteringRam.AssignParametersFromSpawner("example", "example", 0, 0, 0, 0, 0, 0, "example");
```

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**用途 / Purpose:** 在 「after read from network」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
batteringRam.OnAfterReadFromNetwork(valueTuple<BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord, false);
```

### GetNavmeshFaceIds
`public bool GetNavmeshFaceIds(out List<int> navmeshFaceIds)`

**用途 / Purpose:** 读取并返回当前对象中 「navmesh face ids」 的结果。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
var result = batteringRam.GetNavmeshFaceIds(navmeshFaceIds);
```

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**用途 / Purpose:** 读取「from network」的数据或状态。

```csharp
// 先通过子系统 API 拿到 BatteringRam 实例
BatteringRam batteringRam = ...;
var result = batteringRam.ReadFromNetwork(bufferReadValid);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BatteringRam batteringRam = ...;
batteringRam.HasCompletedAction();
```

## 参见

- [本区域目录](../)