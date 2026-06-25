---
title: "AgentVisualsCreator"
description: "AgentVisualsCreator 的自动生成类参考。"
---
# AgentVisualsCreator

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVisualsCreator : IAgentVisualCreator`
**Base:** `IAgentVisualCreator`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/AgentVisualsCreator.cs`

## 概述

`AgentVisualsCreator` 位于 `TaleWorlds.MountAndBlade.View`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Create
`public IAgentVisual Create(AgentVisualsData data, string name, bool needBatchedVersionForWeaponMeshes, bool forceUseFaceCache)`

**用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 先通过子系统 API 拿到 AgentVisualsCreator 实例
AgentVisualsCreator agentVisualsCreator = ...;
var result = agentVisualsCreator.Create(data, "example", false, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AgentVisualsCreator agentVisualsCreator = ...;
agentVisualsCreator.Create(data, "example", false, false);
```

## 参见

- [本区域目录](../)