---
title: "MissionConversationLogic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionConversationLogic`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionConversationLogic

**Namespace:** SandBox.Conversation.MissionLogics
**Module:** SandBox.Conversation
**Type:** `public class MissionConversationLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Conversation/MissionLogics/MissionConversationLogic.cs`

## 概述

`MissionConversationLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionConversationLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static MissionConversationLogic Current { get; }` |
| `State` | `public MissionState State { get; }` |
| `ConversationManager` | `public ConversationManager ConversationManager { get; }` |
| `IsReadyForConversation` | `public bool IsReadyForConversation { get; }` |
| `ConversationAgent` | `public Agent ConversationAgent { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### SetSpawnArea
`public void SetSpawnArea(Alley alley)`

**用途 / Purpose:** 设置 `spawn area` 的值或状态。

### SetSpawnArea
`public void SetSpawnArea(Workshop workshop)`

**用途 / Purpose:** 设置 `spawn area` 的值或状态。

### SetSpawnArea
`public void SetSpawnArea(string customTag)`

**用途 / Purpose:** 设置 `spawn area` 的值或状态。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `agent interaction` 事件触发时调用此方法。

### StartConversation
`public void StartConversation(Agent agent, bool setActionsInstantly, bool isInitialization = false)`

**用途 / Purpose:** 处理 `start conversation` 相关逻辑。

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** 处理 `is there agent action` 相关逻辑。

### OnRenderingStarted
`public override void OnRenderingStarted()`

**用途 / Purpose:** 当 `rendering started` 事件触发时调用此方法。

### DisableStartConversation
`public void DisableStartConversation(bool isDisabled)`

**用途 / Purpose:** 处理 `disable start conversation` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionConversationLogic());
```

## 参见

- [完整类目录](../catalog)