---
title: "PassageUsePoint"
description: "PassageUsePoint 的自动生成类参考。"
---
# PassageUsePoint

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class PassageUsePoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `SandBox/Objects/PassageUsePoint.cs`

## 概述

`PassageUsePoint` 位于 `SandBox.Objects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MovingAgents` | `public MBReadOnlyList<Agent> MovingAgents { get; }` |
| `MovingAgent` | `public override Agent MovingAgent { get; }` |
| `ToLocation` | `public Location ToLocation { get; }` |
| `HasAIMovingTo` | `public override bool HasAIMovingTo { get; }` |
| `FocusableObjectType` | `public override FocusableObjectType FocusableObjectType { get; }` |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse { get; }` |

## 主要方法

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「disabled for agent」 状态或条件。

```csharp
// 先通过子系统 API 拿到 PassageUsePoint 实例
PassageUsePoint passageUsePoint = ...;
var result = passageUsePoint.IsDisabledForAgent(agent);
```

### AfterMissionStart
`public override void AfterMissionStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 PassageUsePoint 实例
PassageUsePoint passageUsePoint = ...;
passageUsePoint.AfterMissionStart();
```

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 「use」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PassageUsePoint 实例
PassageUsePoint passageUsePoint = ...;
passageUsePoint.OnUse(userAgent, 0);
```

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 在 「use stopped」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PassageUsePoint 实例
PassageUsePoint passageUsePoint = ...;
passageUsePoint.OnUseStopped(userAgent, false, 0);
```

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**用途 / Purpose:** 判断当前对象是否处于 「usable by agent」 状态或条件。

```csharp
// 先通过子系统 API 拿到 PassageUsePoint 实例
PassageUsePoint passageUsePoint = ...;
var result = passageUsePoint.IsUsableByAgent(userAgent);
```

### GetMovingAgentCount
`public override int GetMovingAgentCount()`

**用途 / Purpose:** 读取并返回当前对象中 「moving agent count」 的结果。

```csharp
// 先通过子系统 API 拿到 PassageUsePoint 实例
PassageUsePoint passageUsePoint = ...;
var result = passageUsePoint.GetMovingAgentCount();
```

### GetMovingAgentWithIndex
`public override Agent GetMovingAgentWithIndex(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「moving agent with index」 的结果。

```csharp
// 先通过子系统 API 拿到 PassageUsePoint 实例
PassageUsePoint passageUsePoint = ...;
var result = passageUsePoint.GetMovingAgentWithIndex(0);
```

### AddMovingAgent
`public override void AddMovingAgent(Agent movingAgent)`

**用途 / Purpose:** 将 「moving agent」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PassageUsePoint 实例
PassageUsePoint passageUsePoint = ...;
passageUsePoint.AddMovingAgent(movingAgent);
```

### RemoveMovingAgent
`public override void RemoveMovingAgent(Agent movingAgent)`

**用途 / Purpose:** 从当前容器或状态中移除 「moving agent」。

```csharp
// 先通过子系统 API 拿到 PassageUsePoint 实例
PassageUsePoint passageUsePoint = ...;
passageUsePoint.RemoveMovingAgent(movingAgent);
```

### IsAIMovingTo
`public override bool IsAIMovingTo(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「a i moving to」 状态或条件。

```csharp
// 先通过子系统 API 拿到 PassageUsePoint 实例
PassageUsePoint passageUsePoint = ...;
var result = passageUsePoint.IsAIMovingTo(agent);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PassageUsePoint passageUsePoint = ...;
passageUsePoint.IsDisabledForAgent(agent);
```

## 参见

- [本区域目录](../)