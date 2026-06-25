---
title: "FleeBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FleeBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FleeBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class FleeBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/FleeBehavior.cs`

## 概述

`FleeBehavior` 位于 `SandBox.Missions.AgentBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.AgentBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Savior` | `public Agent Savior { get; }` |
| `EscapePortal` | `public Passage EscapePortal { get; }` |
| `Position` | `public Vec3 Position { get; }` |

## 主要方法

### Tick
`public override void Tick(float dt, bool isSimulation)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### GetDebugInfo
`public override string GetDebugInfo()`

**用途 / Purpose:** 获取 `debug info` 的当前值。

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**用途 / Purpose:** 获取 `availability` 的当前值。

### TargetReached
`public abstract void TargetReached()`

**用途 / Purpose:** 处理 `target reached` 相关逻辑。

### GoToTarget
`public abstract void GoToTarget()`

**用途 / Purpose:** 处理 `go to target` 相关逻辑。

### IsGoalAchievable
`public abstract bool IsGoalAchievable()`

**用途 / Purpose:** 处理 `is goal achievable` 相关逻辑。

### IsGoalAchieved
`public abstract bool IsGoalAchieved()`

**用途 / Purpose:** 处理 `is goal achieved` 相关逻辑。

### GoToTarget
`public override void GoToTarget()`

**用途 / Purpose:** 处理 `go to target` 相关逻辑。

### IsGoalAchievable
`public override bool IsGoalAchievable()`

**用途 / Purpose:** 处理 `is goal achievable` 相关逻辑。

### IsGoalAchieved
`public override bool IsGoalAchieved()`

**用途 / Purpose:** 处理 `is goal achieved` 相关逻辑。

### TargetReached
`public override void TargetReached()`

**用途 / Purpose:** 处理 `target reached` 相关逻辑。

### GoToTarget
`public override void GoToTarget()`

**用途 / Purpose:** 处理 `go to target` 相关逻辑。

### IsGoalAchievable
`public override bool IsGoalAchievable()`

**用途 / Purpose:** 处理 `is goal achievable` 相关逻辑。

### IsGoalAchieved
`public override bool IsGoalAchieved()`

**用途 / Purpose:** 处理 `is goal achieved` 相关逻辑。

### TargetReached
`public override void TargetReached()`

**用途 / Purpose:** 处理 `target reached` 相关逻辑。

### GoToTarget
`public override void GoToTarget()`

**用途 / Purpose:** 处理 `go to target` 相关逻辑。

### IsGoalAchievable
`public override bool IsGoalAchievable()`

**用途 / Purpose:** 处理 `is goal achievable` 相关逻辑。

### IsGoalAchieved
`public override bool IsGoalAchieved()`

**用途 / Purpose:** 处理 `is goal achieved` 相关逻辑。

### TargetReached
`public override void TargetReached()`

**用途 / Purpose:** 处理 `target reached` 相关逻辑。

### GoToTarget
`public override void GoToTarget()`

**用途 / Purpose:** 处理 `go to target` 相关逻辑。

### IsGoalAchievable
`public override bool IsGoalAchievable()`

**用途 / Purpose:** 处理 `is goal achievable` 相关逻辑。

### IsGoalAchieved
`public override bool IsGoalAchieved()`

**用途 / Purpose:** 处理 `is goal achieved` 相关逻辑。

### TargetReached
`public override void TargetReached()`

**用途 / Purpose:** 处理 `target reached` 相关逻辑。

## 使用示例

```csharp
var value = new FleeBehavior();
value.Tick(0, false);
```

## 参见

- [完整类目录](../catalog)