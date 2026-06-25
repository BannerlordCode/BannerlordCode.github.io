---
title: "SneakIntoTheVillaMissionController"
description: "SneakIntoTheVillaMissionController 的自动生成类参考。"
---
# SneakIntoTheVillaMissionController

**Namespace:** Storymode.Missions
**Module:** Storymode.Missions
**Type:** `public class SneakIntoTheVillaMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `StoryMode/Storymode/Missions/SneakIntoTheVillaMissionController.cs`

## 概述

`SneakIntoTheVillaMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `SneakIntoTheVillaMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static SneakIntoTheVillaMissionController Instance { get; }` |
| `State` | `public SneakIntoTheVillaMissionController.MissionState State { get; }` |
| `HeadmanAgent` | `public Agent HeadmanAgent { get; }` |

## 主要方法

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SneakIntoTheVillaMissionController 实例
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
sneakIntoTheVillaMissionController.OnMissionTick(0);
```

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 在 created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SneakIntoTheVillaMissionController 实例
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
sneakIntoTheVillaMissionController.OnCreated();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 SneakIntoTheVillaMissionController 实例
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
sneakIntoTheVillaMissionController.AfterStart();
```

### IsStealthTutorialReadyForActivation
`public static bool IsStealthTutorialReadyForActivation(SneakIntoTheVillaMissionController.MissionState missionState)`

**用途 / Purpose:** 判断当前对象是否处于 stealth tutorial ready for activation 状态或条件。

```csharp
// 静态调用，不需要实例
SneakIntoTheVillaMissionController.IsStealthTutorialReadyForActivation(missionState);
```

### IsStealthTutorialReadyForCompletion
`public static bool IsStealthTutorialReadyForCompletion(SneakIntoTheVillaMissionController.MissionState missionState)`

**用途 / Purpose:** 判断当前对象是否处于 stealth tutorial ready for completion 状态或条件。

```csharp
// 静态调用，不需要实例
SneakIntoTheVillaMissionController.IsStealthTutorialReadyForCompletion(missionState);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SneakIntoTheVillaMissionController 实例
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
sneakIntoTheVillaMissionController.OnRemoveBehavior();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SneakIntoTheVillaMissionController 实例
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
sneakIntoTheVillaMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAfterTalkingToPrisoner
`public void OnAfterTalkingToPrisoner()`

**用途 / Purpose:** 在 after talking to prisoner 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SneakIntoTheVillaMissionController 实例
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
sneakIntoTheVillaMissionController.OnAfterTalkingToPrisoner();
```

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 在 object used 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SneakIntoTheVillaMissionController 实例
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
sneakIntoTheVillaMissionController.OnObjectUsed(userAgent, usedObject);
```

### IsTargetAgentDistracted
`public bool IsTargetAgentDistracted()`

**用途 / Purpose:** 判断当前对象是否处于 target agent distracted 状态或条件。

```csharp
// 先通过子系统 API 拿到 SneakIntoTheVillaMissionController 实例
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
var result = sneakIntoTheVillaMissionController.IsTargetAgentDistracted();
```

### IsTargetAgentKilled
`public bool IsTargetAgentKilled()`

**用途 / Purpose:** 判断当前对象是否处于 target agent killed 状态或条件。

```csharp
// 先通过子系统 API 拿到 SneakIntoTheVillaMissionController 实例
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
var result = sneakIntoTheVillaMissionController.IsTargetAgentKilled();
```

### IsMainAgentDraggingTargetBody
`public bool IsMainAgentDraggingTargetBody()`

**用途 / Purpose:** 判断当前对象是否处于 main agent dragging target body 状态或条件。

```csharp
// 先通过子系统 API 拿到 SneakIntoTheVillaMissionController 实例
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
var result = sneakIntoTheVillaMissionController.IsMainAgentDraggingTargetBody();
```

### OnMeleeHit
`public override void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**用途 / Purpose:** 在 melee hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SneakIntoTheVillaMissionController 实例
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
sneakIntoTheVillaMissionController.OnMeleeHit(attacker, victim, false, collisionData);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<SneakIntoTheVillaMissionController>();
```

## 参见

- [本区域目录](../)