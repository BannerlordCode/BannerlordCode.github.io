---
title: "MapConversationAgent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapConversationAgent`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapConversationAgent

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapConversationAgent : IAgent`
**Base:** `IAgent`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/MapConversationAgent.cs`

## 概述

`MapConversationAgent` 位于 `TaleWorlds.CampaignSystem.Conversation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Conversation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsEnemyOf
`public bool IsEnemyOf(IAgent agent)`

**用途 / Purpose:** 处理 `is enemy of` 相关逻辑。

### IsFriendOf
`public bool IsFriendOf(IAgent agent)`

**用途 / Purpose:** 处理 `is friend of` 相关逻辑。

### IsActive
`public bool IsActive()`

**用途 / Purpose:** 处理 `is active` 相关逻辑。

### SetAsConversationAgent
`public void SetAsConversationAgent(bool set)`

**用途 / Purpose:** 设置 `as conversation agent` 的值或状态。

### OnConversationStarted
`public void OnConversationStarted()`

**用途 / Purpose:** 当 `conversation started` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MapConversationAgent();
value.IsEnemyOf(agent);
```

## 参见

- [完整类目录](../catalog)