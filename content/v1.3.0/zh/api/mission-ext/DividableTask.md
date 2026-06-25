---
title: "DividableTask"
description: "DividableTask 的自动生成类参考。"
---
# DividableTask

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DividableTask`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/DividableTask.cs`

## 概述

`DividableTask` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ResetTaskStatus
`public void ResetTaskStatus()`

**用途 / Purpose:** 将 「task status」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 DividableTask 实例
DividableTask dividableTask = ...;
dividableTask.ResetTaskStatus();
```

### SetTaskFinished
`public void SetTaskFinished(bool callLastAction = false)`

**用途 / Purpose:** 为 「task finished」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DividableTask 实例
DividableTask dividableTask = ...;
dividableTask.SetTaskFinished(false);
```

### Update
`public bool Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 DividableTask 实例
DividableTask dividableTask = ...;
var result = dividableTask.Update();
```

### SetLastAction
`public void SetLastAction(Action action)`

**用途 / Purpose:** 为 「last action」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DividableTask 实例
DividableTask dividableTask = ...;
dividableTask.SetLastAction(action);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DividableTask dividableTask = ...;
dividableTask.ResetTaskStatus();
```

## 参见

- [本区域目录](../)