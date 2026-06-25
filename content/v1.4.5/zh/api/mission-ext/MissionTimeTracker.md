---
title: "MissionTimeTracker"
description: "MissionTimeTracker 的自动生成类参考。"
---
# MissionTimeTracker

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionTimeTracker`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionTimeTracker.cs`

## 概述

`MissionTimeTracker` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NumberOfTicks` | `public long NumberOfTicks { get; }` |
| `DeltaTimeInTicks` | `public long DeltaTimeInTicks { get; }` |

## 主要方法

### Tick
`public void Tick(float seconds)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MissionTimeTracker 实例
MissionTimeTracker missionTimeTracker = ...;
missionTimeTracker.Tick(0);
```

### UpdateSync
`public void UpdateSync(float newValue)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 sync 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionTimeTracker 实例
MissionTimeTracker missionTimeTracker = ...;
missionTimeTracker.UpdateSync(0);
```

### GetLastSyncDifference
`public float GetLastSyncDifference()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 last sync difference 的结果。

```csharp
// 先通过子系统 API 拿到 MissionTimeTracker 实例
MissionTimeTracker missionTimeTracker = ...;
var result = missionTimeTracker.GetLastSyncDifference();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionTimeTracker missionTimeTracker = ...;
missionTimeTracker.Tick(0);
```

## 参见

- [本区域目录](../)