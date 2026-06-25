---
title: "AnimationPoint"
description: "AnimationPoint 的自动生成类参考。"
---
# AnimationPoint

**Namespace:** SandBox.Objects.AnimationPoints
**Module:** SandBox.Objects
**Type:** `public class AnimationPoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `SandBox/Objects/AnimationPoints/AnimationPoint.cs`

## 概述

`AnimationPoint` 位于 `SandBox.Objects.AnimationPoints`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects.AnimationPoints` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerStopsUsingWhenInteractsWithOther` | `public override bool PlayerStopsUsingWhenInteractsWithOther { get; }` |
| `IsArriveActionFinished` | `public bool IsArriveActionFinished { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse { get; }` |

## 主要方法

### RequestResync
`public void RequestResync()`

**用途 / Purpose:** 处理与 「request resync」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AnimationPoint 实例
AnimationPoint animationPoint = ...;
animationPoint.RequestResync();
```

### AfterMissionStart
`public override void AfterMissionStart()`

**用途 / Purpose:** 在 「mission start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AnimationPoint 实例
AnimationPoint animationPoint = ...;
animationPoint.AfterMissionStart();
```

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「disabled for agent」 状态或条件。

```csharp
// 先通过子系统 API 拿到 AnimationPoint 实例
AnimationPoint animationPoint = ...;
var result = animationPoint.IsDisabledForAgent(agent);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 「tick requirement」 的结果。

```csharp
// 先通过子系统 API 拿到 AnimationPoint 实例
AnimationPoint animationPoint = ...;
var result = animationPoint.GetTickRequirement();
```

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「user frame for agent」 的结果。

```csharp
// 先通过子系统 API 拿到 AnimationPoint 实例
AnimationPoint animationPoint = ...;
var result = animationPoint.GetUserFrameForAgent(agent);
```

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**用途 / Purpose:** 判断当前对象是否处于 「usable by agent」 状态或条件。

```csharp
// 先通过子系统 API 拿到 AnimationPoint 实例
AnimationPoint animationPoint = ...;
var result = animationPoint.IsUsableByAgent(userAgent);
```

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 「use」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AnimationPoint 实例
AnimationPoint animationPoint = ...;
animationPoint.OnUse(userAgent, 0);
```

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 在 「use stopped」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AnimationPoint 实例
AnimationPoint animationPoint = ...;
animationPoint.OnUseStopped(userAgent, false, 0);
```

### SimulateTick
`public override void SimulateTick(float dt)`

**用途 / Purpose:** 推进 「simulate」 状态的周期性更新。

```csharp
// 先通过子系统 API 拿到 AnimationPoint 实例
AnimationPoint animationPoint = ...;
animationPoint.SimulateTick(0);
```

### HasAlternative
`public override bool HasAlternative()`

**用途 / Purpose:** 判断当前对象是否已经持有 「alternative」。

```csharp
// 先通过子系统 API 拿到 AnimationPoint 实例
AnimationPoint animationPoint = ...;
var result = animationPoint.HasAlternative();
```

### GetRandomWaitInSeconds
`public float GetRandomWaitInSeconds()`

**用途 / Purpose:** 读取并返回当前对象中 「random wait in seconds」 的结果。

```csharp
// 先通过子系统 API 拿到 AnimationPoint 实例
AnimationPoint animationPoint = ...;
var result = animationPoint.GetRandomWaitInSeconds();
```

### GetAlternatives
`public List<AnimationPoint> GetAlternatives()`

**用途 / Purpose:** 读取并返回当前对象中 「alternatives」 的结果。

```csharp
// 先通过子系统 API 拿到 AnimationPoint 实例
AnimationPoint animationPoint = ...;
var result = animationPoint.GetAlternatives();
```

### IsRotationCorrectDuringUsage
`public bool IsRotationCorrectDuringUsage()`

**用途 / Purpose:** 判断当前对象是否处于 「rotation correct during usage」 状态或条件。

```csharp
// 先通过子系统 API 拿到 AnimationPoint 实例
AnimationPoint animationPoint = ...;
var result = animationPoint.IsRotationCorrectDuringUsage();
```

### OnUserConversationStart
`public override void OnUserConversationStart()`

**用途 / Purpose:** 在 「user conversation start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AnimationPoint 实例
AnimationPoint animationPoint = ...;
animationPoint.OnUserConversationStart();
```

### OnUserConversationEnd
`public override void OnUserConversationEnd()`

**用途 / Purpose:** 在 「user conversation end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AnimationPoint 实例
AnimationPoint animationPoint = ...;
animationPoint.OnUserConversationEnd();
```

### SetAgentItemsVisibility
`public void SetAgentItemsVisibility(bool isVisible)`

**用途 / Purpose:** 为 「agent items visibility」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AnimationPoint 实例
AnimationPoint animationPoint = ...;
animationPoint.SetAgentItemsVisibility(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AnimationPoint animationPoint = ...;
animationPoint.RequestResync();
```

## 参见

- [本区域目录](../)