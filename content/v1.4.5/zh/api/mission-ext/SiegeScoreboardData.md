---
title: "SiegeScoreboardData"
description: "SiegeScoreboardData 的自动生成类参考。"
---
# SiegeScoreboardData

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeScoreboardData : IScoreboardData`
**Base:** `IScoreboardData`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/SiegeScoreboardData.cs`

## 概述

`SiegeScoreboardData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `SiegeScoreboardData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetScoreboardHeaders
`public ScoreboardHeader GetScoreboardHeaders()`

**用途 / Purpose:** 读取并返回当前对象中 「scoreboard headers」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeScoreboardData 实例
SiegeScoreboardData siegeScoreboardData = ...;
var result = siegeScoreboardData.GetScoreboardHeaders();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
SiegeScoreboardData entry = ...;
```

## 参见

- [本区域目录](../)