---
title: "SPScoreboardStatsVM"
description: "SPScoreboardStatsVM 的自动生成类参考。"
---
# SPScoreboardStatsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardStatsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardStatsVM.cs`

## 概述

`SPScoreboardStatsVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NameText` | `public string NameText { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `IsMainParty` | `public bool IsMainParty { get; set; }` |
| `Kill` | `public int Kill { get; set; }` |
| `Dead` | `public int Dead { get; set; }` |
| `Wounded` | `public int Wounded { get; set; }` |
| `Routed` | `public int Routed { get; set; }` |
| `Remaining` | `public int Remaining { get; set; }` |
| `ReadyToUpgrade` | `public int ReadyToUpgrade { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SPScoreboardStatsVM 实例
SPScoreboardStatsVM sPScoreboardStatsVM = ...;
sPScoreboardStatsVM.RefreshValues();
```

### UpdateScores
`public void UpdateScores(int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)`

**用途 / Purpose:** 重新计算并更新 scores 的最新表示。

```csharp
// 先通过子系统 API 拿到 SPScoreboardStatsVM 实例
SPScoreboardStatsVM sPScoreboardStatsVM = ...;
sPScoreboardStatsVM.UpdateScores(0, 0, 0, 0, 0, 0);
```

### IsAnyStatRelevant
`public bool IsAnyStatRelevant()`

**用途 / Purpose:** 判断当前对象是否处于 any stat relevant 状态或条件。

```csharp
// 先通过子系统 API 拿到 SPScoreboardStatsVM 实例
SPScoreboardStatsVM sPScoreboardStatsVM = ...;
var result = sPScoreboardStatsVM.IsAnyStatRelevant();
```

### GetScoreForOneAliveMember
`public SPScoreboardStatsVM GetScoreForOneAliveMember()`

**用途 / Purpose:** 读取并返回当前对象中 score for one alive member 的结果。

```csharp
// 先通过子系统 API 拿到 SPScoreboardStatsVM 实例
SPScoreboardStatsVM sPScoreboardStatsVM = ...;
var result = sPScoreboardStatsVM.GetScoreForOneAliveMember();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SPScoreboardStatsVM sPScoreboardStatsVM = ...;
sPScoreboardStatsVM.RefreshValues();
```

## 参见

- [本区域目录](../)