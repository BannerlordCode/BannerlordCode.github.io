---
title: "MissionScoreboardPlayerSortControllerVM"
description: "MissionScoreboardPlayerSortControllerVM 的自动生成类参考。"
---
# MissionScoreboardPlayerSortControllerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardPlayerSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardPlayerSortControllerVM.cs`

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

**用途 / Purpose:** 为 「sort mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardPlayerSortControllerVM 实例
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
missionScoreboardPlayerSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardPlayerSortControllerVM 实例
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
var result = missionScoreboardPlayerSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardPlayerSortControllerVM 实例
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
var result = missionScoreboardPlayerSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardPlayerSortControllerVM 实例
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
var result = missionScoreboardPlayerSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardPlayerSortControllerVM 实例
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
var result = missionScoreboardPlayerSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardPlayerSortControllerVM 实例
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
var result = missionScoreboardPlayerSortControllerVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardPlayerSortControllerVM 实例
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
missionScoreboardPlayerSortControllerVM.RefreshValues();
```

### SortByCurrentState
`public void SortByCurrentState()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardPlayerSortControllerVM 实例
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
missionScoreboardPlayerSortControllerVM.SortByCurrentState();
```

### ExecuteSortByName
`public void ExecuteSortByName()`

**用途 / Purpose:** 执行 「sort by name」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardPlayerSortControllerVM 实例
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
missionScoreboardPlayerSortControllerVM.ExecuteSortByName();
```

### ExecuteSortByScore
`public void ExecuteSortByScore()`

**用途 / Purpose:** 执行 「sort by score」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardPlayerSortControllerVM 实例
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
missionScoreboardPlayerSortControllerVM.ExecuteSortByScore();
```

### ExecuteSortByKill
`public void ExecuteSortByKill()`

**用途 / Purpose:** 执行 「sort by kill」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardPlayerSortControllerVM 实例
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
missionScoreboardPlayerSortControllerVM.ExecuteSortByKill();
```

### ExecuteSortByAssist
`public void ExecuteSortByAssist()`

**用途 / Purpose:** 执行 「sort by assist」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardPlayerSortControllerVM 实例
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
missionScoreboardPlayerSortControllerVM.ExecuteSortByAssist();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
missionScoreboardPlayerSortControllerVM.SetSortMode(false);
```

## 参见

- [本区域目录](../)