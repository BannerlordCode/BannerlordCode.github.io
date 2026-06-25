---
title: "MissionScoreboardPlayerSortControllerVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionScoreboardPlayerSortControllerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionScoreboardPlayerSortControllerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardPlayerSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardPlayerSortControllerVM.cs`

## 概述

`MissionScoreboardPlayerSortControllerVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NameText` | `public string NameText { get; set; }` |
| `ScoreText` | `public string ScoreText { get; set; }` |
| `KillText` | `public string KillText { get; set; }` |
| `AssistText` | `public string AssistText { get; set; }` |
| `NameState` | `public int NameState { get; set; }` |
| `ScoreState` | `public int ScoreState { get; set; }` |
| `KillState` | `public int KillState { get; set; }` |
| `AssistState` | `public int AssistState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsScoreSelected` | `public bool IsScoreSelected { get; set; }` |
| `IsKillSelected` | `public bool IsKillSelected { get; set; }` |
| `IsAssistSelected` | `public bool IsAssistSelected { get; set; }` |

## 主要方法

### SetSortMode
`public void SetSortMode(bool isAscending)`

**用途 / Purpose:** 设置 `sort mode` 的值或状态。

### Compare
`public abstract int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### SortByCurrentState
`public void SortByCurrentState()`

**用途 / Purpose:** 处理 `sort by current state` 相关逻辑。

### ExecuteSortByName
`public void ExecuteSortByName()`

**用途 / Purpose:** 执行 `sort by name` 操作或流程。

### ExecuteSortByScore
`public void ExecuteSortByScore()`

**用途 / Purpose:** 执行 `sort by score` 操作或流程。

### ExecuteSortByKill
`public void ExecuteSortByKill()`

**用途 / Purpose:** 执行 `sort by kill` 操作或流程。

### ExecuteSortByAssist
`public void ExecuteSortByAssist()`

**用途 / Purpose:** 执行 `sort by assist` 操作或流程。

## 使用示例

```csharp
var value = new MissionScoreboardPlayerSortControllerVM();
value.SetSortMode(false);
```

## 参见

- [完整类目录](../catalog)