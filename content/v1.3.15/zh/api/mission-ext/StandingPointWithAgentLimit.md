---
title: "StandingPointWithAgentLimit"
description: "StandingPointWithAgentLimit 的自动生成类参考。"
---
# StandingPointWithAgentLimit

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StandingPointWithAgentLimit : StandingPoint`
**Base:** `StandingPoint`
**File:** `TaleWorlds.MountAndBlade/StandingPointWithAgentLimit.cs`

## 概述

`StandingPointWithAgentLimit` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddValidAgent
`public void AddValidAgent(Agent agent)`

**用途 / Purpose:** 将 「valid agent」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 StandingPointWithAgentLimit 实例
StandingPointWithAgentLimit standingPointWithAgentLimit = ...;
standingPointWithAgentLimit.AddValidAgent(agent);
```

### ClearValidAgents
`public void ClearValidAgents()`

**用途 / Purpose:** 清空当前对象中的「valid agents」。

```csharp
// 先通过子系统 API 拿到 StandingPointWithAgentLimit 实例
StandingPointWithAgentLimit standingPointWithAgentLimit = ...;
standingPointWithAgentLimit.ClearValidAgents();
```

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「disabled for agent」 状态或条件。

```csharp
// 先通过子系统 API 拿到 StandingPointWithAgentLimit 实例
StandingPointWithAgentLimit standingPointWithAgentLimit = ...;
var result = standingPointWithAgentLimit.IsDisabledForAgent(agent);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StandingPointWithAgentLimit standingPointWithAgentLimit = ...;
standingPointWithAgentLimit.AddValidAgent(agent);
```

## 参见

- [本区域目录](../)