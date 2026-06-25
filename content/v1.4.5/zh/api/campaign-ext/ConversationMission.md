---
title: "ConversationMission"
description: "ConversationMission 的自动生成类参考。"
---
# ConversationMission

**Namespace:** SandBox.Conversation
**Module:** SandBox.Conversation
**Type:** `public static class ConversationMission`
**Base:** 无
**File:** `Modules.SandBox/SandBox/SandBox.Conversation/ConversationMission.cs`

## 概述

`ConversationMission` 位于 `SandBox.Conversation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Conversation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OneToOneConversationAgent` | `public static Agent OneToOneConversationAgent { get; }` |
| `CurrentSpeakerAgent` | `public static Agent CurrentSpeakerAgent { get; }` |
| `ConversationAgents` | `public static IEnumerable<Agent> ConversationAgents { get; }` |

## 主要方法

### StartConversationWithAgent
`public static void StartConversationWithAgent(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 启动conversation with agent流程或状态机。

```csharp
// 静态调用，不需要实例
ConversationMission.StartConversationWithAgent(agent);
```

## 使用示例

```csharp
ConversationMission.StartConversationWithAgent(agent);
```

## 参见

- [本区域目录](../)