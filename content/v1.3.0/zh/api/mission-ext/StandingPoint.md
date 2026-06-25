---
title: "StandingPoint"
description: "StandingPoint 的自动生成类参考。"
---
# StandingPoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StandingPoint : UsableMissionObject`
**Base:** `UsableMissionObject`
**File:** `TaleWorlds.MountAndBlade/StandingPoint.cs`

## 概述

`StandingPoint` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DisableScriptedFrameFlags` | `public virtual Agent.AIScriptedFrameFlags DisableScriptedFrameFlags { get; }` |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse { get; set; }` |
| `FavoredUser` | `public Agent FavoredUser { get; set; }` |
| `PlayerStopsUsingWhenInteractsWithOther` | `public virtual bool PlayerStopsUsingWhenInteractsWithOther { get; }` |
| `UseOwnPositionInsteadOfWorldPosition` | `public bool UseOwnPositionInsteadOfWorldPosition { get; }` |
| `CustomPlayerInteractionDistance` | `public float CustomPlayerInteractionDistance { get; }` |
| `this` | `public StandingPoint this { get; }` |

## 主要方法

### OnParentMachinePhysicsStateChanged
`public void OnParentMachinePhysicsStateChanged()`

**用途 / Purpose:** 在 「parent machine physics state changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StandingPoint 实例
StandingPoint standingPoint = ...;
standingPoint.OnParentMachinePhysicsStateChanged();
```

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「disabled for agent」 状态或条件。

```csharp
// 先通过子系统 API 拿到 StandingPoint 实例
StandingPoint standingPoint = ...;
var result = standingPoint.IsDisabledForAgent(agent);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 「tick requirement」 的结果。

```csharp
// 先通过子系统 API 拿到 StandingPoint 实例
StandingPoint standingPoint = ...;
var result = standingPoint.GetTickRequirement();
```

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 「use」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StandingPoint 实例
StandingPoint standingPoint = ...;
standingPoint.OnUse(userAgent, 0);
```

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 在 「use stopped」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StandingPoint 实例
StandingPoint standingPoint = ...;
standingPoint.OnUseStopped(userAgent, false, 0);
```

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「user frame for agent」 的结果。

```csharp
// 先通过子系统 API 拿到 StandingPoint 实例
StandingPoint standingPoint = ...;
var result = standingPoint.GetUserFrameForAgent(agent);
```

### HasAlternative
`public virtual bool HasAlternative()`

**用途 / Purpose:** 判断当前对象是否已经持有 「alternative」。

```csharp
// 先通过子系统 API 拿到 StandingPoint 实例
StandingPoint standingPoint = ...;
var result = standingPoint.HasAlternative();
```

### GetUsageScoreForAgent
`public virtual float GetUsageScoreForAgent(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「usage score for agent」 的结果。

```csharp
// 先通过子系统 API 拿到 StandingPoint 实例
StandingPoint standingPoint = ...;
var result = standingPoint.GetUsageScoreForAgent(agent);
```

### GetUsageScoreForAgent
`public virtual float GetUsageScoreForAgent(ValueTuple<Agent, float> agentPair)`

**用途 / Purpose:** 读取并返回当前对象中 「usage score for agent」 的结果。

```csharp
// 先通过子系统 API 拿到 StandingPoint 实例
StandingPoint standingPoint = ...;
var result = standingPoint.GetUsageScoreForAgent(valueTuple<Agent, 0);
```

### SetupOnUsingStoppedBehavior
`public void SetupOnUsingStoppedBehavior(bool autoAttach, Action<Agent, bool> action)`

**用途 / Purpose:** 为 「up on using stopped behavior」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 StandingPoint 实例
StandingPoint standingPoint = ...;
standingPoint.SetupOnUsingStoppedBehavior(false, action<Agent, false);
```

### OnEndMission
`public override void OnEndMission()`

**用途 / Purpose:** 在 「end mission」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StandingPoint 实例
StandingPoint standingPoint = ...;
standingPoint.OnEndMission();
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 读取并返回当前对象中 「description text」 的结果。

```csharp
// 先通过子系统 API 拿到 StandingPoint 实例
StandingPoint standingPoint = ...;
var result = standingPoint.GetDescriptionText(gameEntity);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StandingPoint standingPoint = ...;
standingPoint.OnParentMachinePhysicsStateChanged();
```

## 参见

- [本区域目录](../)