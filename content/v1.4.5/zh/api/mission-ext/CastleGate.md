---
title: "CastleGate"
description: "CastleGate 的自动生成类参考。"
---
# CastleGate

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CastleGate : UsableMachine, IPointDefendable, ICastleKeyPosition, ITargetable`
**Base:** `UsableMachine`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CastleGate.cs`

## 概述

`CastleGate` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MiddlePosition` | `public TacticalPosition MiddlePosition { get; }` |
| `WaitPosition` | `public TacticalPosition WaitPosition { get; }` |
| `State` | `public GateState State { get; }` |
| `IsGateOpen` | `public bool IsGateOpen { get; set; }` |
| `AttackerSiegeWeapon` | `public IPrimarySiegeWeapon AttackerSiegeWeapon { get; }` |
| `DefencePoints` | `public IEnumerable<DefencePoint> DefencePoints { get; }` |
| `DefenseSide` | `public FormationAI.BehaviorSide DefenseSide { get; }` |

## 主要方法

### GetPosition
`public Vec3 GetPosition()`

**用途 / Purpose:** 读取并返回当前对象中 position 的结果。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
var result = castleGate.GetPosition();
```

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 order 的结果。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
var result = castleGate.GetOrder(side);
```

### SetUsableTeam
`public void SetUsableTeam(Team team)`

**用途 / Purpose:** 为 usable team 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
castleGate.SetUsableTeam(team);
```

### AfterMissionStart
`public override void AfterMissionStart()`

**用途 / Purpose:** 调用 AfterMissionStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
castleGate.AfterMissionStart();
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 读取并返回当前对象中 description text 的结果。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
var result = castleGate.GetDescriptionText(gameEntity);
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** 读取并返回当前对象中 action text for standing point 的结果。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
var result = castleGate.GetActionTextForStandingPoint(usableGameObject);
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** 构建一个新的 a i behavior object 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
var result = castleGate.CreateAIBehaviorObject();
```

### OpenDoorAndDisableGateForCivilianMission
`public void OpenDoorAndDisableGateForCivilianMission()`

**用途 / Purpose:** 打开door and disable gate for civilian mission对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
castleGate.OpenDoorAndDisableGateForCivilianMission();
```

### OpenDoor
`public void OpenDoor()`

**用途 / Purpose:** 打开door对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
castleGate.OpenDoor();
```

### CloseDoor
`public void CloseDoor()`

**用途 / Purpose:** 关闭door对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
castleGate.CloseDoor();
```

### SetAutoOpenState
`public void SetAutoOpenState(bool isEnabled)`

**用途 / Purpose:** 为 auto open state 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
castleGate.SetAutoOpenState(false);
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
var result = castleGate.GetTickRequirement();
```

### GetTargetFlags
`public TargetFlags GetTargetFlags()`

**用途 / Purpose:** 读取并返回当前对象中 target flags 的结果。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
var result = castleGate.GetTargetFlags();
```

### GetTargetValue
`public float GetTargetValue(List<Vec3> weaponPos)`

**用途 / Purpose:** 读取并返回当前对象中 target value 的结果。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
var result = castleGate.GetTargetValue(weaponPos);
```

### GetTargetEntity
`public WeakGameEntity GetTargetEntity()`

**用途 / Purpose:** 读取并返回当前对象中 target entity 的结果。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
var result = castleGate.GetTargetEntity();
```

### GetSide
`public BattleSideEnum GetSide()`

**用途 / Purpose:** 读取并返回当前对象中 side 的结果。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
var result = castleGate.GetSide();
```

### GetTargetGlobalVelocity
`public Vec3 GetTargetGlobalVelocity()`

**用途 / Purpose:** 读取并返回当前对象中 target global velocity 的结果。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
var result = castleGate.GetTargetGlobalVelocity();
```

### IsDestructable
`public bool IsDestructable()`

**用途 / Purpose:** 判断当前对象是否处于 destructable 状态或条件。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
var result = castleGate.IsDestructable();
```

### Entity
`public WeakGameEntity Entity()`

**用途 / Purpose:** 调用 Entity 对应的操作。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
var result = castleGate.Entity();
```

### GetTargetingOffset
`public Vec3 GetTargetingOffset()`

**用途 / Purpose:** 读取并返回当前对象中 targeting offset 的结果。

```csharp
// 先通过子系统 API 拿到 CastleGate 实例
CastleGate castleGate = ...;
var result = castleGate.GetTargetingOffset();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CastleGate castleGate = ...;
castleGate.GetPosition();
```

## 参见

- [本区域目录](../)