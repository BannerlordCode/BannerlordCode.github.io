---
title: "MissionScoreboardSideVM"
description: "MissionScoreboardSideVM 的自动生成类参考。"
---
# MissionScoreboardSideVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardSideVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardSideVM.cs`

## 概述

`MissionScoreboardSideVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Players` | `public MBBindingList<MissionScoreboardPlayerVM> Players { get; set; }` |
| `EntryProperties` | `public MBBindingList<MissionScoreboardHeaderItemVM> EntryProperties { get; set; }` |
| `PlayerSortController` | `public MissionScoreboardPlayerSortControllerVM PlayerSortController { get; set; }` |
| `IsSingleSide` | `public bool IsSingleSide { get; set; }` |
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |
| `IsSecondSide` | `public bool IsSecondSide { get; set; }` |
| `ShowAttackerOrDefenderIcons` | `public bool ShowAttackerOrDefenderIcons { get; set; }` |
| `IsAttacker` | `public bool IsAttacker { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `PlayersText` | `public string PlayersText { get; set; }` |
| `CultureId` | `public string CultureId { get; set; }` |
| `RoundsWon` | `public int RoundsWon { get; set; }` |
| `TeamColor` | `public string TeamColor { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSideVM 实例
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.RefreshValues();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSideVM 实例
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.Tick(0);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSideVM 实例
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.OnFinalize();
```

### UpdateRoundAttributes
`public void UpdateRoundAttributes()`

**用途 / Purpose:** 重新计算并更新 round attributes 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSideVM 实例
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.UpdateRoundAttributes();
```

### UpdateBotAttributes
`public void UpdateBotAttributes()`

**用途 / Purpose:** 重新计算并更新 bot attributes 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSideVM 实例
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.UpdateBotAttributes();
```

### UpdatePlayerAttributes
`public void UpdatePlayerAttributes(MissionPeer player)`

**用途 / Purpose:** 重新计算并更新 player attributes 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSideVM 实例
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.UpdatePlayerAttributes(player);
```

### RemovePlayer
`public void RemovePlayer(MissionPeer peer)`

**用途 / Purpose:** 从当前容器或状态中移除 player。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSideVM 实例
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.RemovePlayer(peer);
```

### AddPlayer
`public void AddPlayer(MissionPeer peer)`

**用途 / Purpose:** 将 player 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardSideVM 实例
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.AddPlayer(peer);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.RefreshValues();
```

## 参见

- [本区域目录](../)