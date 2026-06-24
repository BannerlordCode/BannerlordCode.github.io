<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeLadder`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeLadder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeLadder : SiegeWeapon, IPrimarySiegeWeapon, IOrderableWithInteractionArea, IOrderable, ISpawnable`
**Base:** `SiegeWeapon`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SiegeLadder.cs`

## 概述

`SiegeLadder` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsStateLand` | `public bool IsStateLand { get; }` |
| `State` | `public int State { get; }` |
| `AnimationState` | `public int AnimationState { get; }` |
| `FallAngularSpeed` | `public float FallAngularSpeed { get; }` |
| `LadderFrame` | `public MatrixFrame LadderFrame { get; }` |
| `HasAnimation` | `public bool HasAnimation { get; }` |
| `LadderAnimationIndex` | `public int LadderAnimationIndex { get; }` |
| `LadderAnimationProgress` | `public float LadderAnimationProgress { get; }` |
| `InitialWaitPosition` | `public GameEntity InitialWaitPosition { get; }` |
| `OnWallNavMeshId` | `public int OnWallNavMeshId { get; }` |
| `WeaponSide` | `public FormationAI.BehaviorSide WeaponSide { get; }` |
| `State` | `public LadderState State { get; set; }` |

## 主要方法

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read from network` 相关逻辑。

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**用途 / Purpose:** 获取 `siege engine type` 的当前值。

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**用途 / Purpose:** 获取 `order` 的当前值。

### HasCompletedAction
`public bool HasCompletedAction()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `completed action`。

### IsDisabledForBattleSide
`public override bool IsDisabledForBattleSide(BattleSideEnum sideEnum)`

**用途 / Purpose:** 处理 `is disabled for battle side` 相关逻辑。

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** 创建一个 `a i behavior object` 实例或对象。

### SetUpStateVisibility
`public void SetUpStateVisibility(bool isVisible)`

**用途 / Purpose:** 设置 `up state visibility` 的值或状态。

### SetAbilityOfFaces
`public override void SetAbilityOfFaces(bool enabled)`

**用途 / Purpose:** 设置 `ability of faces` 的值或状态。

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `description text` 的当前值。

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** 获取 `action text for standing point` 的当前值。

### WriteToNetwork
`public override void WriteToNetwork()`

**用途 / Purpose:** 处理 `write to network` 相关逻辑。

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**用途 / Purpose:** 获取 `target flags` 的当前值。

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**用途 / Purpose:** 获取 `target value` 的当前值。

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

**用途 / Purpose:** 设置 `spawned from spawner` 的值或状态。

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord) synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**用途 / Purpose:** 当 `after read from network` 事件触发时调用此方法。

### AssignParametersFromSpawner
`public void AssignParametersFromSpawner(string sideTag, string targetWallSegment, int onWallNavMeshId, float downStateRotationRadian, float upperStateRotationRadian, string barrierTagToRemove, string indestructibleMerlonsTag)`

**用途 / Purpose:** 处理 `assign parameters from spawner` 相关逻辑。

### GetNavmeshFaceIds
`public bool GetNavmeshFaceIds(out List<int> navmeshFaceIds)`

**用途 / Purpose:** 获取 `navmesh face ids` 的当前值。

### OnFormationFrameChanged
`public void OnFormationFrameChanged(Agent agent, bool hasFrame, WorldPosition position)`

**用途 / Purpose:** 当 `formation frame changed` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new SiegeLadder();
value.ReadFromNetwork(bufferReadValid);
```

## 参见

- [完整类目录](../catalog)