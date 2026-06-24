<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeTowerRecord`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeTowerRecord

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct SiegeTowerRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**领域:** mission-ext

## 概述

`SiegeTowerRecord` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public bool HasCompletedAction()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `completed action`。

### GetGateNavMeshId
`public int GetGateNavMeshId()`

**用途 / Purpose:** 获取 `gate nav mesh id` 的当前值。

### CollectGetDifficultNavmeshIDs
`public List<int> CollectGetDifficultNavmeshIDs()`

**用途 / Purpose:** 处理 `collect get difficult navmesh i ds` 相关逻辑。

### CollectGetDifficultNavmeshIDsForAttackers
`public List<int> CollectGetDifficultNavmeshIDsForAttackers()`

**用途 / Purpose:** 处理 `collect get difficult navmesh i ds for attackers` 相关逻辑。

### CollectGetDifficultNavmeshIDsForDefenders
`public List<int> CollectGetDifficultNavmeshIDsForDefenders()`

**用途 / Purpose:** 处理 `collect get difficult navmesh i ds for defenders` 相关逻辑。

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `description text` 的当前值。

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** 获取 `action text for standing point` 的当前值。

### WriteToNetwork
`public override void WriteToNetwork()`

**用途 / Purpose:** 处理 `write to network` 相关逻辑。

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**用途 / Purpose:** 获取 `order` 的当前值。

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**用途 / Purpose:** 获取 `target flags` 的当前值。

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**用途 / Purpose:** 获取 `target value` 的当前值。

### Disable
`public override void Disable()`

**用途 / Purpose:** 处理 `disable` 相关逻辑。

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**用途 / Purpose:** 获取 `siege engine type` 的当前值。

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** 创建一个 `a i behavior object` 实例或对象。

### SetAbilityOfFaces
`public override void SetAbilityOfFaces(bool enabled)`

**用途 / Purpose:** 设置 `ability of faces` 的值或状态。

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### OnDestroyed
`public void OnDestroyed(DestructableComponent destroyedComponent, Agent destroyerAgent, in MissionWeapon weapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)`

**用途 / Purpose:** 当 `destroyed` 事件触发时调用此方法。

### HighlightPath
`public void HighlightPath()`

**用途 / Purpose:** 处理 `highlight path` 相关逻辑。

### SwitchGhostEntityMovementMode
`public void SwitchGhostEntityMovementMode(bool isGhostEnabled)`

**用途 / Purpose:** 处理 `switch ghost entity movement mode` 相关逻辑。

### GetInitialFrame
`public MatrixFrame GetInitialFrame()`

**用途 / Purpose:** 获取 `initial frame` 的当前值。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 SiegeTowerRecord 实例，再调用它的公开方法
var value = new SiegeTowerRecord();
value.HasCompletedAction();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
