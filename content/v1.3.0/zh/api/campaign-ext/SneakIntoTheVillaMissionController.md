---
title: "SneakIntoTheVillaMissionController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SneakIntoTheVillaMissionController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 当 `created` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### IsStealthTutorialReadyForActivation
`public static bool IsStealthTutorialReadyForActivation(SneakIntoTheVillaMissionController.MissionState missionState)`

**用途 / Purpose:** 处理 `is stealth tutorial ready for activation` 相关逻辑。

### IsStealthTutorialReadyForCompletion
`public static bool IsStealthTutorialReadyForCompletion(SneakIntoTheVillaMissionController.MissionState missionState)`

**用途 / Purpose:** 处理 `is stealth tutorial ready for completion` 相关逻辑。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnAfterTalkingToPrisoner
`public void OnAfterTalkingToPrisoner()`

**用途 / Purpose:** 当 `after talking to prisoner` 事件触发时调用此方法。

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 当 `object used` 事件触发时调用此方法。

### IsTargetAgentDistracted
`public bool IsTargetAgentDistracted()`

**用途 / Purpose:** 处理 `is target agent distracted` 相关逻辑。

### IsTargetAgentKilled
`public bool IsTargetAgentKilled()`

**用途 / Purpose:** 处理 `is target agent killed` 相关逻辑。

### IsMainAgentDraggingTargetBody
`public bool IsMainAgentDraggingTargetBody()`

**用途 / Purpose:** 处理 `is main agent dragging target body` 相关逻辑。

### OnMeleeHit
`public override void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**用途 / Purpose:** 当 `melee hit` 事件触发时调用此方法。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<SneakIntoTheVillaMissionController>();
```

## 参见

- [完整类目录](../catalog)