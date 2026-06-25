---
title: "AgentBehaviorManager"
description: "AgentBehaviorManager 的自动生成类参考。"
---
# AgentBehaviorManager

**Namespace:** SandBox.AI
**Module:** SandBox.AI
**Type:** `public class AgentBehaviorManager : IAgentBehaviorManager`
**Base:** `IAgentBehaviorManager`
**File:** `SandBox/AI/AgentBehaviorManager.cs`

## 概述

`AgentBehaviorManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `AgentBehaviorManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddQuestCharacterBehaviors
`public void AddQuestCharacterBehaviors(IAgent agent)`

**用途 / Purpose:** 将 「quest character behaviors」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AgentBehaviorManager 实例
AgentBehaviorManager agentBehaviorManager = ...;
agentBehaviorManager.AddQuestCharacterBehaviors(agent);
```

### AddFirstCompanionBehavior
`public void AddFirstCompanionBehavior(IAgent agent)`

**用途 / Purpose:** 将 「first companion behavior」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AgentBehaviorManager 实例
AgentBehaviorManager agentBehaviorManager = ...;
agentBehaviorManager.AddFirstCompanionBehavior(agent);
```

## 使用示例

```csharp
var manager = AgentBehaviorManager.Current;
```

## 参见

- [本区域目录](../)