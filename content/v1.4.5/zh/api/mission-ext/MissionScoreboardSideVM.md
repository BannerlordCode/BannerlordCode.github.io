---
title: "MissionScoreboardSideVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionScoreboardSideVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionScoreboardSideVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardSideVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardSideVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### UpdateRoundAttributes
`public void UpdateRoundAttributes()`

**用途 / Purpose:** 更新 `round attributes` 的状态或数据。

### UpdateBotAttributes
`public void UpdateBotAttributes()`

**用途 / Purpose:** 更新 `bot attributes` 的状态或数据。

### UpdatePlayerAttributes
`public void UpdatePlayerAttributes(MissionPeer player)`

**用途 / Purpose:** 更新 `player attributes` 的状态或数据。

### RemovePlayer
`public void RemovePlayer(MissionPeer peer)`

**用途 / Purpose:** 从当前集合/状态中移除 `player`。

### AddPlayer
`public void AddPlayer(MissionPeer peer)`

**用途 / Purpose:** 向当前集合/状态中添加 `player`。

## 使用示例

```csharp
var value = new MissionScoreboardSideVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)