---
title: "MPLobbyGameSearchVM"
description: "MPLobbyGameSearchVM 的自动生成类参考。"
---
# MPLobbyGameSearchVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyGameSearchVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyGameSearchVM.cs`

## 概述

`MPLobbyGameSearchVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CustomGameMode` | `public MPCustomGameVM.CustomGameMode CustomGameMode { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CanEnterPracticeBattle` | `public bool CanEnterPracticeBattle { get; set; }` |
| `CanCancelSearch` | `public bool CanCancelSearch { get; set; }` |
| `ShowStats` | `public bool ShowStats { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `GameTypesText` | `public string GameTypesText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `PracticeText` | `public string PracticeText { get; set; }` |
| `AverageWaitingTime` | `public string AverageWaitingTime { get; set; }` |
| `AverageWaitingTimeDescription` | `public string AverageWaitingTimeDescription { get; set; }` |
| `CurrentWaitingTime` | `public string CurrentWaitingTime { get; set; }` |
| `CurrentWaitingTimeDescription` | `public string CurrentWaitingTimeDescription { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyGameSearchVM 实例
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.RefreshValues();
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyGameSearchVM 实例
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.OnTick(0);
```

### SetEnabled
`public void SetEnabled(bool enabled)`

**用途 / Purpose:** 为 enabled 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyGameSearchVM 实例
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.SetEnabled(false);
```

### UpdateData
`public void UpdateData(MatchmakingWaitTimeStats matchmakingWaitTimeStats, string gameTypeInfo)`

**用途 / Purpose:** 重新计算并更新 data 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyGameSearchVM 实例
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.UpdateData(matchmakingWaitTimeStats, "example");
```

### UpdatePremadeGameData
`public void UpdatePremadeGameData()`

**用途 / Purpose:** 重新计算并更新 premade game data 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyGameSearchVM 实例
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.UpdatePremadeGameData();
```

### OnJoinPremadeGameRequestSuccessful
`public void OnJoinPremadeGameRequestSuccessful()`

**用途 / Purpose:** 在 join premade game request successful 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyGameSearchVM 实例
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.OnJoinPremadeGameRequestSuccessful();
```

### OnRequestedToCancelSearchBattle
`public void OnRequestedToCancelSearchBattle()`

**用途 / Purpose:** 在 requested to cancel search battle 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyGameSearchVM 实例
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.OnRequestedToCancelSearchBattle();
```

### UpdateCanCancel
`public void UpdateCanCancel()`

**用途 / Purpose:** 重新计算并更新 can cancel 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyGameSearchVM 实例
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.UpdateCanCancel();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyGameSearchVM mPLobbyGameSearchVM = ...;
mPLobbyGameSearchVM.RefreshValues();
```

## 参见

- [本区域目录](../)