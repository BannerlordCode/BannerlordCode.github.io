---
title: "FleeBehavior"
description: "FleeBehavior 的自动生成类参考。"
---
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

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
fleeBehavior.Tick(0, false);
```

### GetDebugInfo
`public override string GetDebugInfo()`

**用途 / Purpose:** 读取并返回当前对象中 「debug info」 的结果。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.GetDebugInfo();
```

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**用途 / Purpose:** 读取并返回当前对象中 「availability」 的结果。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.GetAvailability(false);
```

### TargetReached
`public abstract void TargetReached()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
fleeBehavior.TargetReached();
```

### GoToTarget
`public abstract void GoToTarget()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
fleeBehavior.GoToTarget();
```

### IsGoalAchievable
`public abstract bool IsGoalAchievable()`

**用途 / Purpose:** 判断当前对象是否处于 「goal achievable」 状态或条件。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchievable();
```

### IsGoalAchieved
`public abstract bool IsGoalAchieved()`

**用途 / Purpose:** 判断当前对象是否处于 「goal achieved」 状态或条件。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchieved();
```

### GoToTarget
`public override void GoToTarget()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
fleeBehavior.GoToTarget();
```

### IsGoalAchievable
`public override bool IsGoalAchievable()`

**用途 / Purpose:** 判断当前对象是否处于 「goal achievable」 状态或条件。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchievable();
```

### IsGoalAchieved
`public override bool IsGoalAchieved()`

**用途 / Purpose:** 判断当前对象是否处于 「goal achieved」 状态或条件。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchieved();
```

### TargetReached
`public override void TargetReached()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
fleeBehavior.TargetReached();
```

### GoToTarget
`public override void GoToTarget()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
fleeBehavior.GoToTarget();
```

### IsGoalAchievable
`public override bool IsGoalAchievable()`

**用途 / Purpose:** 判断当前对象是否处于 「goal achievable」 状态或条件。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchievable();
```

### IsGoalAchieved
`public override bool IsGoalAchieved()`

**用途 / Purpose:** 判断当前对象是否处于 「goal achieved」 状态或条件。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchieved();
```

### TargetReached
`public override void TargetReached()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
fleeBehavior.TargetReached();
```

### GoToTarget
`public override void GoToTarget()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
fleeBehavior.GoToTarget();
```

### IsGoalAchievable
`public override bool IsGoalAchievable()`

**用途 / Purpose:** 判断当前对象是否处于 「goal achievable」 状态或条件。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchievable();
```

### IsGoalAchieved
`public override bool IsGoalAchieved()`

**用途 / Purpose:** 判断当前对象是否处于 「goal achieved」 状态或条件。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchieved();
```

### TargetReached
`public override void TargetReached()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
fleeBehavior.TargetReached();
```

### GoToTarget
`public override void GoToTarget()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
fleeBehavior.GoToTarget();
```

### IsGoalAchievable
`public override bool IsGoalAchievable()`

**用途 / Purpose:** 判断当前对象是否处于 「goal achievable」 状态或条件。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchievable();
```

### IsGoalAchieved
`public override bool IsGoalAchieved()`

**用途 / Purpose:** 判断当前对象是否处于 「goal achieved」 状态或条件。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchieved();
```

### TargetReached
`public override void TargetReached()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 FleeBehavior 实例
FleeBehavior fleeBehavior = ...;
fleeBehavior.TargetReached();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FleeBehavior fleeBehavior = ...;
fleeBehavior.Tick(0, false);
```

## 参见

- [本区域目录](../)