---
title: "CastleGate"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CastleGate`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CastleGate

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CastleGate : UsableMachine, IPointDefendable, ICastleKeyPosition, ITargetable`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/CastleGate.cs`

## 概述

`CastleGate` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public Vec3 GetPosition()`

**用途 / Purpose:** 获取 `position` 的当前值。

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**用途 / Purpose:** 获取 `order` 的当前值。

### SetUsableTeam
`public void SetUsableTeam(Team team)`

**用途 / Purpose:** 设置 `usable team` 的值或状态。

### AfterMissionStart
`public override void AfterMissionStart()`

**用途 / Purpose:** 处理 `after mission start` 相关逻辑。

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `description text` 的当前值。

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** 获取 `action text for standing point` 的当前值。

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** 创建一个 `a i behavior object` 实例或对象。

### OpenDoorAndDisableGateForCivilianMission
`public void OpenDoorAndDisableGateForCivilianMission()`

**用途 / Purpose:** 处理 `open door and disable gate for civilian mission` 相关逻辑。

### OpenDoor
`public void OpenDoor()`

**用途 / Purpose:** 处理 `open door` 相关逻辑。

### CloseDoor
`public void CloseDoor()`

**用途 / Purpose:** 处理 `close door` 相关逻辑。

### SetAutoOpenState
`public void SetAutoOpenState(bool isEnabled)`

**用途 / Purpose:** 设置 `auto open state` 的值或状态。

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### GetTargetFlags
`public TargetFlags GetTargetFlags()`

**用途 / Purpose:** 获取 `target flags` 的当前值。

### GetTargetValue
`public float GetTargetValue(List<Vec3> weaponPos)`

**用途 / Purpose:** 获取 `target value` 的当前值。

### GetTargetEntity
`public WeakGameEntity GetTargetEntity()`

**用途 / Purpose:** 获取 `target entity` 的当前值。

### GetSide
`public BattleSideEnum GetSide()`

**用途 / Purpose:** 获取 `side` 的当前值。

### GetTargetGlobalVelocity
`public Vec3 GetTargetGlobalVelocity()`

**用途 / Purpose:** 获取 `target global velocity` 的当前值。

### IsDestructable
`public bool IsDestructable()`

**用途 / Purpose:** 处理 `is destructable` 相关逻辑。

### Entity
`public WeakGameEntity Entity()`

**用途 / Purpose:** 处理 `entity` 相关逻辑。

### ComputeGlobalPhysicsBoundingBoxMinMax
`public ValueTuple<Vec3, Vec3> ComputeGlobalPhysicsBoundingBoxMinMax()`

**用途 / Purpose:** 处理 `compute global physics bounding box min max` 相关逻辑。

### GetTargetingOffset
`public Vec3 GetTargetingOffset()`

**用途 / Purpose:** 获取 `targeting offset` 的当前值。

## 使用示例

```csharp
var value = new CastleGate();
value.GetPosition();
```

## 参见

- [完整类目录](../catalog)