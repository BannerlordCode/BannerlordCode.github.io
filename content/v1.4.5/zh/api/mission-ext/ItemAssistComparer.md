---
title: "ItemAssistComparer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemAssistComparer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ItemAssistComparer

**命名空间:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class ItemAssistComparer : ItemComparerBase`
**Base:** `ItemComparerBase`
**领域:** mission-ext

## 概述

`ItemAssistComparer` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先从游戏状态中拿到一个 ItemAssistComparer 实例，再调用它的公开方法
var value = new ItemAssistComparer();
value.SetSortMode(false);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
