---
title: "MissionTimer"
description: "MissionTimer 的自动生成类参考。"
---
# MissionTimer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionTimer`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MissionTimer.cs`

## 概述

`MissionTimer` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetStartTime
`public MissionTime GetStartTime()`

**用途 / Purpose:** 读取并返回当前对象中 start time 的结果。

```csharp
// 先通过子系统 API 拿到 MissionTimer 实例
MissionTimer missionTimer = ...;
var result = missionTimer.GetStartTime();
```

### GetTimerDuration
`public float GetTimerDuration()`

**用途 / Purpose:** 读取并返回当前对象中 timer duration 的结果。

```csharp
// 先通过子系统 API 拿到 MissionTimer 实例
MissionTimer missionTimer = ...;
var result = missionTimer.GetTimerDuration();
```

### GetRemainingTimeInSeconds
`public float GetRemainingTimeInSeconds(bool synched = false)`

**用途 / Purpose:** 读取并返回当前对象中 remaining time in seconds 的结果。

```csharp
// 先通过子系统 API 拿到 MissionTimer 实例
MissionTimer missionTimer = ...;
var result = missionTimer.GetRemainingTimeInSeconds(false);
```

### Check
`public bool Check(bool reset = false)`

**用途 / Purpose:** 检查当前对象是否满足指定条件。

```csharp
// 先通过子系统 API 拿到 MissionTimer 实例
MissionTimer missionTimer = ...;
var result = missionTimer.Check(false);
```

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MissionTimer 实例
MissionTimer missionTimer = ...;
missionTimer.Reset();
```

### Set
`public void Set(float timeInSeconds)`

**用途 / Purpose:** 为当前对象的属性或状态赋新值。

```csharp
// 先通过子系统 API 拿到 MissionTimer 实例
MissionTimer missionTimer = ...;
missionTimer.Set(0);
```

### SetDuration
`public void SetDuration(float duration)`

**用途 / Purpose:** 为 duration 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionTimer 实例
MissionTimer missionTimer = ...;
missionTimer.SetDuration(0);
```

### CreateSynchedTimerClient
`public static MissionTimer CreateSynchedTimerClient(float startTimeInSeconds, float duration)`

**用途 / Purpose:** 构建一个新的 synched timer client 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MissionTimer.CreateSynchedTimerClient(0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionTimer missionTimer = ...;
missionTimer.GetStartTime();
```

## 参见

- [本区域目录](../)