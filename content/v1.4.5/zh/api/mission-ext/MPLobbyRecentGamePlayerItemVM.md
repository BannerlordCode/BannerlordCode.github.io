---
title: "MPLobbyRecentGamePlayerItemVM"
description: "MPLobbyRecentGamePlayerItemVM 的自动生成类参考。"
---
# MPLobbyRecentGamePlayerItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRecentGamePlayerItemVM : MPLobbyPlayerBaseVM`
**Base:** `MPLobbyPlayerBaseVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRecentGamePlayerItemVM.cs`

## 概述

`MPLobbyRecentGamePlayerItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `KillCount` | `public int KillCount { get; set; }` |
| `DeathCount` | `public int DeathCount { get; set; }` |
| `AssistCount` | `public int AssistCount { get; set; }` |

## 主要方法

### MPLobbyRecentGamePlayerItemVM
`public unsafe MPLobbyRecentGamePlayerItemVM(PlayerId playerId, MatchHistoryData matchOfThePlayer, Action<MPLobbyRecentGamePlayerItemVM> onActivatePlayerActions)`

**用途 / Purpose:** 调用 MPLobbyRecentGamePlayerItemVM 对应的操作。

```csharp
// 先通过子系统 API 拿到 MPLobbyRecentGamePlayerItemVM 实例
MPLobbyRecentGamePlayerItemVM mPLobbyRecentGamePlayerItemVM = ...;
var result = mPLobbyRecentGamePlayerItemVM.MPLobbyRecentGamePlayerItemVM(playerId, matchOfThePlayer, onActivatePlayerActions);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyRecentGamePlayerItemVM 实例
MPLobbyRecentGamePlayerItemVM mPLobbyRecentGamePlayerItemVM = ...;
mPLobbyRecentGamePlayerItemVM.RefreshValues();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyRecentGamePlayerItemVM mPLobbyRecentGamePlayerItemVM = ...;
mPLobbyRecentGamePlayerItemVM.MPLobbyRecentGamePlayerItemVM(playerId, matchOfThePlayer, onActivatePlayerActions);
```

## 参见

- [本区域目录](../)