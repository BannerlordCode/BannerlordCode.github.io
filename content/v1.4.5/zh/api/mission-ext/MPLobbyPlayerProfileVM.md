---
title: "MPLobbyPlayerProfileVM"
description: "MPLobbyPlayerProfileVM 的自动生成类参考。"
---
# MPLobbyPlayerProfileVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPlayerProfileVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyPlayerProfileVM.cs`

## 概述

`MPLobbyPlayerProfileVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDataLoading` | `public bool IsDataLoading { get; set; }` |
| `StatsTitleText` | `public string StatsTitleText { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `Player` | `public MPLobbyPlayerBaseVM Player { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerProfileVM 实例
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerProfileVM 实例
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.OnFinalize();
```

### SetPlayerID
`public async void SetPlayerID(PlayerId playerID)`

**用途 / Purpose:** **用途 / Purpose:** 为 player i d 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerProfileVM 实例
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.SetPlayerID(playerID);
```

### OpenWith
`public void OpenWith(PlayerId playerID)`

**用途 / Purpose:** **用途 / Purpose:** 打开with对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerProfileVM 实例
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.OpenWith(playerID);
```

### UpdatePlayerData
`public void UpdatePlayerData(PlayerData playerData, bool updateStatistics = false, bool updateRating = false)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 player data 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerProfileVM 实例
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.UpdatePlayerData(playerData, false, false);
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** **用途 / Purpose:** 执行 close popup 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerProfileVM 实例
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.ExecuteClosePopup();
```

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**用途 / Purpose:** **用途 / Purpose:** 在 clan info changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerProfileVM 实例
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.OnClanInfoChanged();
```

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**用途 / Purpose:** **用途 / Purpose:** 在 player name updated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyPlayerProfileVM 实例
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.OnPlayerNameUpdated("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyPlayerProfileVM mPLobbyPlayerProfileVM = ...;
mPLobbyPlayerProfileVM.RefreshValues();
```

## 参见

- [本区域目录](../)