---
title: "AgentBehaviorGroup"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentBehaviorGroup`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AgentBehaviorGroup

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public abstract class AgentBehaviorGroup`
**Base:** 无
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/AgentBehaviorGroup.cs`

## 概述

`AgentBehaviorGroup` 位于 `SandBox.Missions.AgentBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.AgentBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ScriptedBehavior` | `public AgentBehavior ScriptedBehavior { get; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `Mission` | `public Mission Mission { get; }` |

## 主要方法

### DisableScriptedBehavior
`public void DisableScriptedBehavior()`

**用途 / Purpose:** 处理 `disable scripted behavior` 相关逻辑。

### DisableAllBehaviors
`public void DisableAllBehaviors()`

**用途 / Purpose:** 处理 `disable all behaviors` 相关逻辑。

### GetActiveBehavior
`public AgentBehavior GetActiveBehavior()`

**用途 / Purpose:** 获取 `active behavior` 的当前值。

### Tick
`public virtual void Tick(float dt, bool isSimulation)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### ConversationTick
`public virtual void ConversationTick()`

**用途 / Purpose:** 处理 `conversation tick` 相关逻辑。

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### GetScore
`public virtual float GetScore(bool isSimulation)`

**用途 / Purpose:** 获取 `score` 的当前值。

### ForceThink
`public virtual void ForceThink(float inSeconds)`

**用途 / Purpose:** 处理 `force think` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomAgentBehaviorGroup();
```

## 参见

- [完整类目录](../catalog)