---
title: "FollowAgentBehavior"
description: "FollowAgentBehavior 的自动生成类参考。"
---
# FollowAgentBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class FollowAgentBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/FollowAgentBehavior.cs`

## 概述

`FollowAgentBehavior` 位于 `SandBox.Missions.AgentBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.AgentBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetTargetAgent
`public void SetTargetAgent(Agent agent)`

**用途 / Purpose:** 为 「target agent」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FollowAgentBehavior 实例
FollowAgentBehavior followAgentBehavior = ...;
followAgentBehavior.SetTargetAgent(agent);
```

### Tick
`public override void Tick(float dt, bool isSimulation)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 FollowAgentBehavior 实例
FollowAgentBehavior followAgentBehavior = ...;
followAgentBehavior.Tick(0, false);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FollowAgentBehavior 实例
FollowAgentBehavior followAgentBehavior = ...;
followAgentBehavior.OnAgentRemoved(agent);
```

### GetDebugInfo
`public override string GetDebugInfo()`

**用途 / Purpose:** 读取并返回当前对象中 「debug info」 的结果。

```csharp
// 先通过子系统 API 拿到 FollowAgentBehavior 实例
FollowAgentBehavior followAgentBehavior = ...;
var result = followAgentBehavior.GetDebugInfo();
```

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**用途 / Purpose:** 读取并返回当前对象中 「availability」 的结果。

```csharp
// 先通过子系统 API 拿到 FollowAgentBehavior 实例
FollowAgentBehavior followAgentBehavior = ...;
var result = followAgentBehavior.GetAvailability(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FollowAgentBehavior followAgentBehavior = ...;
followAgentBehavior.SetTargetAgent(agent);
```

## 参见

- [本区域目录](../)