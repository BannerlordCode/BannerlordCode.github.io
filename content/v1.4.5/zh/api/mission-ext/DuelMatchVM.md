---
title: "DuelMatchVM"
description: "DuelMatchVM 的自动生成类参考。"
---
# DuelMatchVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelMatchVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions/DuelMatchVM.cs`

## 概述

`DuelMatchVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FirstPlayerPeer` | `public MissionPeer FirstPlayerPeer { get; }` |
| `SecondPlayerPeer` | `public MissionPeer SecondPlayerPeer { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsPreparing` | `public bool IsPreparing { get; set; }` |
| `CountdownMessage` | `public string CountdownMessage { get; set; }` |
| `Score` | `public string Score { get; set; }` |
| `ArenaType` | `public int ArenaType { get; set; }` |
| `FirstPlayerScore` | `public int FirstPlayerScore { get; set; }` |
| `SecondPlayerScore` | `public int SecondPlayerScore { get; set; }` |
| `FirstPlayer` | `public MPPlayerVM FirstPlayer { get; set; }` |
| `SecondPlayer` | `public MPPlayerVM SecondPlayer { get; set; }` |

## 主要方法

### OnDuelPrepStarted
`public void OnDuelPrepStarted(MissionPeer opponentPeer, int prepDuration)`

**用途 / Purpose:** 在 duel prep started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DuelMatchVM 实例
DuelMatchVM duelMatchVM = ...;
duelMatchVM.OnDuelPrepStarted(opponentPeer, 0);
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 DuelMatchVM 实例
DuelMatchVM duelMatchVM = ...;
duelMatchVM.Tick(0);
```

### OnDuelStarted
`public void OnDuelStarted(MissionPeer firstPeer, MissionPeer secondPeer, int arenaType)`

**用途 / Purpose:** 在 duel started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DuelMatchVM 实例
DuelMatchVM duelMatchVM = ...;
duelMatchVM.OnDuelStarted(firstPeer, secondPeer, 0);
```

### OnDuelEnded
`public void OnDuelEnded()`

**用途 / Purpose:** 在 duel ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DuelMatchVM 实例
DuelMatchVM duelMatchVM = ...;
duelMatchVM.OnDuelEnded();
```

### OnPeerScored
`public void OnPeerScored(MissionPeer peer)`

**用途 / Purpose:** 在 peer scored 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DuelMatchVM 实例
DuelMatchVM duelMatchVM = ...;
duelMatchVM.OnPeerScored(peer);
```

### RefreshNames
`public void RefreshNames(bool changeGenericNames = false)`

**用途 / Purpose:** 使 names 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 DuelMatchVM 实例
DuelMatchVM duelMatchVM = ...;
duelMatchVM.RefreshNames(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DuelMatchVM duelMatchVM = ...;
duelMatchVM.OnDuelPrepStarted(opponentPeer, 0);
```

## 参见

- [本区域目录](../)