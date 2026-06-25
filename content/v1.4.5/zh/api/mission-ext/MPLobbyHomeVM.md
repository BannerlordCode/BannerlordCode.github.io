---
title: "MPLobbyHomeVM"
description: "MPLobbyHomeVM 的自动生成类参考。"
---
# MPLobbyHomeVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyHomeVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home/MPLobbyHomeVM.cs`

## 概述

`MPLobbyHomeVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsMatchFindPossible` | `public bool IsMatchFindPossible { get; set; }` |
| `HasUnofficialModulesLoaded` | `public bool HasUnofficialModulesLoaded { get; set; }` |
| `IsNewsAvailable` | `public bool IsNewsAvailable { get; set; }` |
| `FindGameText` | `public string FindGameText { get; set; }` |
| `MatchFindNotPossibleText` | `public string MatchFindNotPossibleText { get; set; }` |
| `SelectionInfoText` | `public string SelectionInfoText { get; set; }` |
| `OpenProfileText` | `public string OpenProfileText { get; set; }` |
| `Player` | `public MPLobbyPlayerBaseVM Player { get; set; }` |
| `News` | `public MPNewsVM News { get; set; }` |
| `Announcements` | `public MPAnnouncementsVM Announcements { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyHomeVM 实例
MPLobbyHomeVM mPLobbyHomeVM = ...;
mPLobbyHomeVM.RefreshValues();
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyHomeVM 实例
MPLobbyHomeVM mPLobbyHomeVM = ...;
mPLobbyHomeVM.OnTick(0);
```

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData, bool updateRating = true)`

**用途 / Purpose:** 使 player data 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyHomeVM 实例
MPLobbyHomeVM mPLobbyHomeVM = ...;
mPLobbyHomeVM.RefreshPlayerData(playerData, false);
```

### OnMatchSelectionChanged
`public void OnMatchSelectionChanged(string selectionInfo, bool isMatchFindPossible)`

**用途 / Purpose:** 在 match selection changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyHomeVM 实例
MPLobbyHomeVM mPLobbyHomeVM = ...;
mPLobbyHomeVM.OnMatchSelectionChanged("example", false);
```

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**用途 / Purpose:** 在 clan info changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyHomeVM 实例
MPLobbyHomeVM mPLobbyHomeVM = ...;
mPLobbyHomeVM.OnClanInfoChanged();
```

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**用途 / Purpose:** 在 player name updated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyHomeVM 实例
MPLobbyHomeVM mPLobbyHomeVM = ...;
mPLobbyHomeVM.OnPlayerNameUpdated("example");
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyHomeVM 实例
MPLobbyHomeVM mPLobbyHomeVM = ...;
mPLobbyHomeVM.OnFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyHomeVM mPLobbyHomeVM = ...;
mPLobbyHomeVM.RefreshValues();
```

## 参见

- [本区域目录](../)