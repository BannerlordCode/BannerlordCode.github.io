---
title: "TrainingIcon"
description: "TrainingIcon 的自动生成类参考。"
---
# TrainingIcon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TrainingIcon : UsableMachine`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/TrainingIcon.cs`

## 概述

`TrainingIcon` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Focused` | `public bool Focused { get; }` |

## 主要方法

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 TrainingIcon 实例
TrainingIcon trainingIcon = ...;
var result = trainingIcon.GetTickRequirement();
```

### SetMarked
`public void SetMarked(bool highlight)`

**用途 / Purpose:** **用途 / Purpose:** 为 marked 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TrainingIcon 实例
TrainingIcon trainingIcon = ...;
trainingIcon.SetMarked(false);
```

### GetIsActivated
`public bool GetIsActivated()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 is activated 的结果。

```csharp
// 先通过子系统 API 拿到 TrainingIcon 实例
TrainingIcon trainingIcon = ...;
var result = trainingIcon.GetIsActivated();
```

### GetTrainingSubTypeTag
`public string GetTrainingSubTypeTag()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 training sub type tag 的结果。

```csharp
// 先通过子系统 API 拿到 TrainingIcon 实例
TrainingIcon trainingIcon = ...;
var result = trainingIcon.GetTrainingSubTypeTag();
```

### DisableIcon
`public void DisableIcon()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DisableIcon 对应的操作。

```csharp
// 先通过子系统 API 拿到 TrainingIcon 实例
TrainingIcon trainingIcon = ...;
trainingIcon.DisableIcon();
```

### EnableIcon
`public void EnableIcon()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EnableIcon 对应的操作。

```csharp
// 先通过子系统 API 拿到 TrainingIcon 实例
TrainingIcon trainingIcon = ...;
trainingIcon.EnableIcon();
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 description text 的结果。

```csharp
// 先通过子系统 API 拿到 TrainingIcon 实例
TrainingIcon trainingIcon = ...;
var result = trainingIcon.GetDescriptionText(gameEntity);
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject = null)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 action text for standing point 的结果。

```csharp
// 先通过子系统 API 拿到 TrainingIcon 实例
TrainingIcon trainingIcon = ...;
var result = trainingIcon.GetActionTextForStandingPoint(null);
```

### OnFocusGain
`public override void OnFocusGain(Agent userAgent)`

**用途 / Purpose:** **用途 / Purpose:** 在 focus gain 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TrainingIcon 实例
TrainingIcon trainingIcon = ...;
trainingIcon.OnFocusGain(userAgent);
```

### OnFocusLose
`public override void OnFocusLose(Agent userAgent)`

**用途 / Purpose:** **用途 / Purpose:** 在 focus lose 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TrainingIcon 实例
TrainingIcon trainingIcon = ...;
trainingIcon.OnFocusLose(userAgent);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TrainingIcon trainingIcon = ...;
trainingIcon.GetTickRequirement();
```

## 参见

- [本区域目录](../)