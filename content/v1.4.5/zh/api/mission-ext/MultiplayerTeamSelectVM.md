---
title: "MultiplayerTeamSelectVM"
description: "MultiplayerTeamSelectVM 的自动生成类参考。"
---
# MultiplayerTeamSelectVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTeamSelectVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection/MultiplayerTeamSelectVM.cs`

## 概述

`MultiplayerTeamSelectVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Team1` | `public TeamSelectTeamInstanceVM Team1 { get; set; }` |
| `Team2` | `public TeamSelectTeamInstanceVM Team2 { get; set; }` |
| `TeamSpectators` | `public TeamSelectTeamInstanceVM TeamSpectators { get; set; }` |
| `TeamSelectTitle` | `public string TeamSelectTitle { get; set; }` |
| `IsRoundCountdownAvailable` | `public bool IsRoundCountdownAvailable { get; set; }` |
| `RemainingRoundTime` | `public string RemainingRoundTime { get; set; }` |
| `GamemodeLbl` | `public string GamemodeLbl { get; set; }` |
| `AutoassignLbl` | `public string AutoassignLbl { get; set; }` |
| `IsCancelDisabled` | `public bool IsCancelDisabled { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectVM 实例
MultiplayerTeamSelectVM multiplayerTeamSelectVM = ...;
multiplayerTeamSelectVM.RefreshValues();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectVM 实例
MultiplayerTeamSelectVM multiplayerTeamSelectVM = ...;
multiplayerTeamSelectVM.Tick(0);
```

### RefreshDisabledTeams
`public void RefreshDisabledTeams(List<Team> disabledTeams)`

**用途 / Purpose:** 使 「disabled teams」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectVM 实例
MultiplayerTeamSelectVM multiplayerTeamSelectVM = ...;
multiplayerTeamSelectVM.RefreshDisabledTeams(disabledTeams);
```

### RefreshPlayerAndBotCount
`public void RefreshPlayerAndBotCount(int playersCountOne, int playersCountTwo, int botsCountOne, int botsCountTwo)`

**用途 / Purpose:** 使 「player and bot count」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectVM 实例
MultiplayerTeamSelectVM multiplayerTeamSelectVM = ...;
multiplayerTeamSelectVM.RefreshPlayerAndBotCount(0, 0, 0, 0);
```

### RefreshFriendsPerTeam
`public void RefreshFriendsPerTeam(IEnumerable<MissionPeer> friendsTeamOne, IEnumerable<MissionPeer> friendsTeamTwo)`

**用途 / Purpose:** 使 「friends per team」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectVM 实例
MultiplayerTeamSelectVM multiplayerTeamSelectVM = ...;
multiplayerTeamSelectVM.RefreshFriendsPerTeam(friendsTeamOne, friendsTeamTwo);
```

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 「cancel」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectVM 实例
MultiplayerTeamSelectVM multiplayerTeamSelectVM = ...;
multiplayerTeamSelectVM.ExecuteCancel();
```

### ExecuteAutoAssign
`public void ExecuteAutoAssign()`

**用途 / Purpose:** 执行 「auto assign」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectVM 实例
MultiplayerTeamSelectVM multiplayerTeamSelectVM = ...;
multiplayerTeamSelectVM.ExecuteAutoAssign();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerTeamSelectVM multiplayerTeamSelectVM = ...;
multiplayerTeamSelectVM.RefreshValues();
```

## 参见

- [本区域目录](../)