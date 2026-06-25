---
title: "ConversationMission"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationMission`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationMission

**Namespace:** SandBox.Conversation
**Module:** SandBox.Conversation
**Type:** `public static class ConversationMission`
**Base:** 无
**File:** `SandBox/Conversation/ConversationMission.cs`

## 概述

`ConversationMission` 位于 `SandBox.Conversation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Conversation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OneToOneConversationAgent` | `public static Agent OneToOneConversationAgent { get; }` |
| `OneToOneConversationCharacter` | `public static CharacterObject OneToOneConversationCharacter { get; }` |
| `ConversationAgents` | `public static IEnumerable<Agent> ConversationAgents { get; }` |

## 主要方法

### StartConversationWithAgent
`public static void StartConversationWithAgent(Agent agent)`

**用途 / Purpose:** 处理 `start conversation with agent` 相关逻辑。

## 使用示例

```csharp
ConversationMission.StartConversationWithAgent(agent);
```

## 参见

- [完整类目录](../catalog)