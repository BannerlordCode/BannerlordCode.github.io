<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoardGameAgentBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameAgentBehavior

**Namespace:** SandBox.Source.Missions.AgentBehaviors
**Module:** SandBox.Source
**Type:** `public class BoardGameAgentBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Source.Missions.AgentBehaviors/BoardGameAgentBehavior.cs`

## 概述

`BoardGameAgentBehavior` 位于 `SandBox.Source.Missions.AgentBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Source.Missions.AgentBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Tick
`public override void Tick(float dt, bool isSimulation)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### ConversationTick
`public override void ConversationTick()`

**用途 / Purpose:** 处理 `conversation tick` 相关逻辑。

### GetDebugInfo
`public override string GetDebugInfo()`

**用途 / Purpose:** 获取 `debug info` 的当前值。

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**用途 / Purpose:** 获取 `availability` 的当前值。

### AddTargetChair
`public static void AddTargetChair(Agent ownerAgent, Chair chair)`

**用途 / Purpose:** 向当前集合/状态中添加 `target chair`。

### RemoveBoardGameBehaviorOfAgent
`public static void RemoveBoardGameBehaviorOfAgent(Agent ownerAgent)`

**用途 / Purpose:** 从当前集合/状态中移除 `board game behavior of agent`。

### IsAgentMovingToChair
`public static bool IsAgentMovingToChair(Agent ownerAgent)`

**用途 / Purpose:** 处理 `is agent moving to chair` 相关逻辑。

## 使用示例

```csharp
var value = new BoardGameAgentBehavior();
value.Tick(0, false);
```

## 参见

- [完整类目录](../catalog)