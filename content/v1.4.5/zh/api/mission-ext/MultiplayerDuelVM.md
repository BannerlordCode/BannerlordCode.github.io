---
title: "MultiplayerDuelVM"
description: "MultiplayerDuelVM 的自动生成类参考。"
---
# MultiplayerDuelVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerDuelVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerDuelVM.cs`

## 概述

`MultiplayerDuelVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `AreOngoingDuelsActive` | `public bool AreOngoingDuelsActive { get; set; }` |
| `IsPlayerInDuel` | `public bool IsPlayerInDuel { get; set; }` |
| `PlayerBounty` | `public int PlayerBounty { get; set; }` |
| `PlayerPrefferedArenaType` | `public int PlayerPrefferedArenaType { get; set; }` |
| `PlayerScoreText` | `public string PlayerScoreText { get; set; }` |
| `RemainingRoundTime` | `public string RemainingRoundTime { get; set; }` |
| `Markers` | `public MissionDuelMarkersVM Markers { get; set; }` |
| `PlayerDuelMatch` | `public DuelMatchVM PlayerDuelMatch { get; set; }` |
| `OngoingDuels` | `public MBBindingList<DuelMatchVM> OngoingDuels { get; set; }` |
| `KillNotifications` | `public MBBindingList<MPDuelKillNotificationItemVM> KillNotifications { get; set; }` |

## 主要方法

### DuelArenaProperties
`public struct DuelArenaProperties(GameEntity flagEntity, int index, TroopType arenaTroopType)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerDuelVM 实例
MultiplayerDuelVM multiplayerDuelVM = ...;
var result = multiplayerDuelVM.DuelArenaProperties(flagEntity, 0, arenaTroopType);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MultiplayerDuelVM 实例
MultiplayerDuelVM multiplayerDuelVM = ...;
multiplayerDuelVM.RefreshValues();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerDuelVM 实例
MultiplayerDuelVM multiplayerDuelVM = ...;
multiplayerDuelVM.Tick(0);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerDuelVM 实例
MultiplayerDuelVM multiplayerDuelVM = ...;
multiplayerDuelVM.OnFinalize();
```

### OnScreenResolutionChanged
`public void OnScreenResolutionChanged()`

**用途 / Purpose:** 在 「screen resolution changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerDuelVM 实例
MultiplayerDuelVM multiplayerDuelVM = ...;
multiplayerDuelVM.OnScreenResolutionChanged();
```

### OnMainAgentRemoved
`public void OnMainAgentRemoved()`

**用途 / Purpose:** 在 「main agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerDuelVM 实例
MultiplayerDuelVM multiplayerDuelVM = ...;
multiplayerDuelVM.OnMainAgentRemoved();
```

### OnMainAgentBuild
`public void OnMainAgentBuild()`

**用途 / Purpose:** 在 「main agent build」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerDuelVM 实例
MultiplayerDuelVM multiplayerDuelVM = ...;
multiplayerDuelVM.OnMainAgentBuild();
```

### GetAgentDefaultPreferredArenaType
`public static TroopType GetAgentDefaultPreferredArenaType(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「agent default preferred arena type」 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerDuelVM.GetAgentDefaultPreferredArenaType(agent);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerDuelVM multiplayerDuelVM = ...;
multiplayerDuelVM.DuelArenaProperties(flagEntity, 0, arenaTroopType);
```

## 参见

- [本区域目录](../)