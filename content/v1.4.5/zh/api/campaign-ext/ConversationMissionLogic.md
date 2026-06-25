---
title: "ConversationMissionLogic"
description: "ConversationMissionLogic 的自动生成类参考。"
---
# ConversationMissionLogic

**Namespace:** SandBox.Conversation.MissionLogics
**Module:** SandBox.Conversation
**Type:** `public class ConversationMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Conversation.MissionLogics/ConversationMissionLogic.cs`

## 概述

`ConversationMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `ConversationMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `OtherSideConversationData` | `public ConversationCharacterData OtherSideConversationData { get; }` |
| `PlayerConversationData` | `public ConversationCharacterData PlayerConversationData { get; }` |
| `IsMultiAgentConversation` | `public bool IsMultiAgentConversation { get; }` |

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 ConversationMissionLogic 实例
ConversationMissionLogic conversationMissionLogic = ...;
conversationMissionLogic.AfterStart();
```

### OnRenderingStarted
`public override void OnRenderingStarted()`

**用途 / Purpose:** **用途 / Purpose:** 在 rendering started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ConversationMissionLogic 实例
ConversationMissionLogic conversationMissionLogic = ...;
conversationMissionLogic.OnRenderingStarted();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ConversationMissionLogic 实例
ConversationMissionLogic conversationMissionLogic = ...;
conversationMissionLogic.OnMissionTick(0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<ConversationMissionLogic>();
```

## 参见

- [本区域目录](../)