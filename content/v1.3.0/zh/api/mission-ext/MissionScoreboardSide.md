---
title: "MissionScoreboardSide"
description: "MissionScoreboardSide 的自动生成类参考。"
---
# MissionScoreboardSide

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardSide`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs`

## 概述

`MissionScoreboardSide` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentPlayerCount` | `public int CurrentPlayerCount { get; }` |
| `Players` | `public IEnumerable<MissionPeer> Players { get; }` |

## 主要方法

### AddPlayer
`public void AddPlayer(MissionPeer peer)`

**用途 / Purpose:** **用途 / Purpose:** 将 player 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSide 实例
MissionScoreboardSide missionScoreboardSide = ...;
missionScoreboardSide.AddPlayer(peer);
```

### RemovePlayer
`public void RemovePlayer(MissionPeer peer)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 player。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSide 实例
MissionScoreboardSide missionScoreboardSide = ...;
missionScoreboardSide.RemovePlayer(peer);
```

### GetValuesOf
`public string GetValuesOf(MissionPeer peer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 values of 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSide 实例
MissionScoreboardSide missionScoreboardSide = ...;
var result = missionScoreboardSide.GetValuesOf(peer);
```

### GetHeaderNames
`public string GetHeaderNames()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 header names 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSide 实例
MissionScoreboardSide missionScoreboardSide = ...;
var result = missionScoreboardSide.GetHeaderNames();
```

### GetHeaderIds
`public string GetHeaderIds()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 header ids 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSide 实例
MissionScoreboardSide missionScoreboardSide = ...;
var result = missionScoreboardSide.GetHeaderIds();
```

### GetScore
`public int GetScore(MissionPeer peer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 score 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSide 实例
MissionScoreboardSide missionScoreboardSide = ...;
var result = missionScoreboardSide.GetScore(peer);
```

### UpdateHeader
`public void UpdateHeader(MissionScoreboardComponent.ScoreboardHeader headers)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 header 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSide 实例
MissionScoreboardSide missionScoreboardSide = ...;
missionScoreboardSide.UpdateHeader(headers);
```

### Clear
`public void Clear()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSide 实例
MissionScoreboardSide missionScoreboardSide = ...;
missionScoreboardSide.Clear();
```

### CalculateAndGetMVPScoreWithPeer
`public KeyValuePair<MissionPeer, int> CalculateAndGetMVPScoreWithPeer()`

**用途 / Purpose:** **用途 / Purpose:** 计算and get m v p score with peer的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSide 实例
MissionScoreboardSide missionScoreboardSide = ...;
var result = missionScoreboardSide.CalculateAndGetMVPScoreWithPeer();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionScoreboardSide missionScoreboardSide = ...;
missionScoreboardSide.AddPlayer(peer);
```

## 参见

- [本区域目录](../)