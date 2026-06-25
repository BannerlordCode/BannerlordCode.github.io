---
title: "MissionScoreboardVM"
description: "MissionScoreboardVM 的自动生成类参考。"
---
# MissionScoreboardVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardVM.cs`

## 概述

`MissionScoreboardVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `EndOfBattle` | `public MPEndOfBattleVM EndOfBattle { get; set; }` |
| `PlayerActionList` | `public MBBindingList<StringPairItemWithActionVM> PlayerActionList { get; set; }` |
| `Sides` | `public MBBindingList<MissionScoreboardSideVM> Sides { get; set; }` |
| `IsUpdateOver` | `public bool IsUpdateOver { get; set; }` |
| `IsInitalizationOver` | `public bool IsInitalizationOver { get; set; }` |
| `IsMouseEnabled` | `public bool IsMouseEnabled { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsPlayerActionsActive` | `public bool IsPlayerActionsActive { get; set; }` |
| `Spectators` | `public string Spectators { get; set; }` |
| `ShowMouseKey` | `public InputKeyItemVM ShowMouseKey { get; set; }` |
| `MissionName` | `public string MissionName { get; set; }` |
| `GameModeText` | `public string GameModeText { get; set; }` |
| `MapName` | `public string MapName { get; set; }` |
| `ServerName` | `public string ServerName { get; set; }` |
| `IsBotsEnabled` | `public bool IsBotsEnabled { get; set; }` |
| `IsSingleSide` | `public bool IsSingleSide { get; set; }` |
| `ToggleMuteText` | `public string ToggleMuteText { get; set; }` |

## 主要方法

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardVM 实例
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.OnFinalize();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardVM 实例
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.RefreshValues();
```

### SetMouseState
`public void SetMouseState(bool isMouseVisible)`

**用途 / Purpose:** 为 「mouse state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardVM 实例
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.SetMouseState(false);
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardVM 实例
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.Tick(0);
```

### OnPlayerSideChanged
`public void OnPlayerSideChanged(Team curTeam, Team nextTeam, MissionPeer client)`

**用途 / Purpose:** 在 「player side changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardVM 实例
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.OnPlayerSideChanged(curTeam, nextTeam, client);
```

### DecreaseSpectatorCount
`public void DecreaseSpectatorCount(MissionPeer spectatedPeer)`

**用途 / Purpose:** 处理与 「decrease spectator count」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardVM 实例
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.DecreaseSpectatorCount(spectatedPeer);
```

### IncreaseSpectatorCount
`public void IncreaseSpectatorCount(MissionPeer spectatedPeer)`

**用途 / Purpose:** 处理与 「increase spectator count」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardVM 实例
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.IncreaseSpectatorCount(spectatedPeer);
```

### ExecuteToggleMute
`public void ExecuteToggleMute()`

**用途 / Purpose:** 执行 「toggle mute」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionScoreboardVM 实例
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.ExecuteToggleMute();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.OnFinalize();
```

## 参见

- [本区域目录](../)