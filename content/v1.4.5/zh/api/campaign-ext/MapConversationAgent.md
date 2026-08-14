---
title: "MapConversationAgent"
description: "MapConversationAgent 的自动生成类参考。"
---
# MapConversationAgent

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapConversationAgent : IAgent`
**Base:** `IAgent`
**File:** `TaleWorlds.CampaignSystem/Conversation/MapConversationAgent.cs`

## 概述

`MapConversationAgent` 位于 `TaleWorlds.CampaignSystem.Conversation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Conversation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; }` |
| `State` | `public AgentState State { get; }` |
| `Team` | `public IMissionTeam Team { get; }` |
| `Origin` | `public IAgentOriginBase Origin { get; set; }` |
| `Age` | `public float Age { get; set; }` |

## 主要方法

### IsEnemyOf
`public bool IsEnemyOf(IAgent agent)`

**用途 / Purpose:** 判断当前对象是否处于 enemy of 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapConversationAgent 实例
MapConversationAgent mapConversationAgent = ...;
var result = mapConversationAgent.IsEnemyOf(agent);
```

### IsFriendOf
`public bool IsFriendOf(IAgent agent)`

**用途 / Purpose:** 判断当前对象是否处于 friend of 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapConversationAgent 实例
MapConversationAgent mapConversationAgent = ...;
var result = mapConversationAgent.IsFriendOf(agent);
```

### IsActive
`public bool IsActive()`

**用途 / Purpose:** 判断当前对象是否处于 active 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapConversationAgent 实例
MapConversationAgent mapConversationAgent = ...;
var result = mapConversationAgent.IsActive();
```

### SetAsConversationAgent
`public void SetAsConversationAgent(bool set)`

**用途 / Purpose:** 为 as conversation agent 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapConversationAgent 实例
MapConversationAgent mapConversationAgent = ...;
mapConversationAgent.SetAsConversationAgent(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapConversationAgent mapConversationAgent = ...;
mapConversationAgent.IsEnemyOf(agent);
```

## 参见

- [本区域目录](../)