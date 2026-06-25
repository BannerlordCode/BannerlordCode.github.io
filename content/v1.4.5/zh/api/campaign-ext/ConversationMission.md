---
title: "ConversationMission"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationMission`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationMission

**命名空间:** SandBox.Conversation
**模块:** SandBox.Conversation
**类型:** `public static class ConversationMission`
**领域:** campaign-ext

## 概述

`ConversationMission` 位于 `SandBox.Conversation`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

**用途 / Purpose:** 处理 `start conversation with agent` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
ConversationMission.StartConversationWithAgent(agent);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
