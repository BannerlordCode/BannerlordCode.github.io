---
title: "DynamicObjectAnimationPoint"
description: "DynamicObjectAnimationPoint 的自动生成类参考。"
---
# DynamicObjectAnimationPoint

**Namespace:** SandBox.Objects.AnimationPoints
**Module:** SandBox.Objects
**Type:** `public class DynamicObjectAnimationPoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `Modules.SandBox/SandBox/SandBox.Objects.AnimationPoints/DynamicObjectAnimationPoint.cs`

## 概述

`DynamicObjectAnimationPoint` 位于 `SandBox.Objects.AnimationPoints`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects.AnimationPoints` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsArriveActionFinished` | `public bool IsArriveActionFinished { get; }` |
| `IsActive` | `public bool IsActive { get; }` |

## 主要方法

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 DynamicObjectAnimationPoint 实例
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
var result = dynamicObjectAnimationPoint.GetTickRequirement();
```

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 usable by agent 状态或条件。

```csharp
// 先通过子系统 API 拿到 DynamicObjectAnimationPoint 实例
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
var result = dynamicObjectAnimationPoint.IsUsableByAgent(userAgent);
```

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** **用途 / Purpose:** 在 use 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DynamicObjectAnimationPoint 实例
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
dynamicObjectAnimationPoint.OnUse(userAgent, 0);
```

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 user frame for agent 的结果。

```csharp
// 先通过子系统 API 拿到 DynamicObjectAnimationPoint 实例
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
var result = dynamicObjectAnimationPoint.GetUserFrameForAgent(agent);
```

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 disabled for agent 状态或条件。

```csharp
// 先通过子系统 API 拿到 DynamicObjectAnimationPoint 实例
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
var result = dynamicObjectAnimationPoint.IsDisabledForAgent(agent);
```

### SimulateTick
`public override void SimulateTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SimulateTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 DynamicObjectAnimationPoint 实例
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
dynamicObjectAnimationPoint.SimulateTick(0);
```

### HasAlternative
`public override bool HasAlternative()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 alternative。

```csharp
// 先通过子系统 API 拿到 DynamicObjectAnimationPoint 实例
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
var result = dynamicObjectAnimationPoint.HasAlternative();
```

### OnUserConversationStart
`public override void OnUserConversationStart()`

**用途 / Purpose:** **用途 / Purpose:** 在 user conversation start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DynamicObjectAnimationPoint 实例
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
dynamicObjectAnimationPoint.OnUserConversationStart();
```

### OnUserConversationEnd
`public override void OnUserConversationEnd()`

**用途 / Purpose:** **用途 / Purpose:** 在 user conversation end 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DynamicObjectAnimationPoint 实例
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
dynamicObjectAnimationPoint.OnUserConversationEnd();
```

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** **用途 / Purpose:** 在 use stopped 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DynamicObjectAnimationPoint 实例
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
dynamicObjectAnimationPoint.OnUseStopped(userAgent, false, 0);
```

### SetAgentItemsVisibility
`public void SetAgentItemsVisibility(bool isVisible)`

**用途 / Purpose:** **用途 / Purpose:** 为 agent items visibility 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DynamicObjectAnimationPoint 实例
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
dynamicObjectAnimationPoint.SetAgentItemsVisibility(false);
```

### IsRotationCorrectDuringUsage
`public bool IsRotationCorrectDuringUsage()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 rotation correct during usage 状态或条件。

```csharp
// 先通过子系统 API 拿到 DynamicObjectAnimationPoint 实例
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
var result = dynamicObjectAnimationPoint.IsRotationCorrectDuringUsage();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
dynamicObjectAnimationPoint.GetTickRequirement();
```

## 参见

- [本区域目录](../)