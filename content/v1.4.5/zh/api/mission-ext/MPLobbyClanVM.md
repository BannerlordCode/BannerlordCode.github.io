---
title: "MPLobbyClanVM"
description: "MPLobbyClanVM 的自动生成类参考。"
---
# MPLobbyClanVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanVM.cs`

## 概述

`MPLobbyClanVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `SelectedSubPageIndex` | `public int SelectedSubPageIndex { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `ClanOverview` | `public MPLobbyClanOverviewVM ClanOverview { get; set; }` |
| `ClanRoster` | `public MPLobbyClanRosterVM ClanRoster { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanVM 实例
MPLobbyClanVM mPLobbyClanVM = ...;
mPLobbyClanVM.RefreshValues();
```

### OnClanInfoChanged
`public async void OnClanInfoChanged()`

**用途 / Purpose:** 在 「clan info changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanVM 实例
MPLobbyClanVM mPLobbyClanVM = ...;
mPLobbyClanVM.OnClanInfoChanged();
```

### TrySetClanSubPage
`public async void TrySetClanSubPage(ClanSubPages newPage)`

**用途 / Purpose:** 尝试获取 「set clan sub page」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanVM 实例
MPLobbyClanVM mPLobbyClanVM = ...;
mPLobbyClanVM.TrySetClanSubPage(newPage);
```

### OnNotificationReceived
`public void OnNotificationReceived(LobbyNotification notification)`

**用途 / Purpose:** 在 「notification received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanVM 实例
MPLobbyClanVM mPLobbyClanVM = ...;
mPLobbyClanVM.OnNotificationReceived(notification);
```

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**用途 / Purpose:** 在 「player name updated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanVM 实例
MPLobbyClanVM mPLobbyClanVM = ...;
mPLobbyClanVM.OnPlayerNameUpdated("example");
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**用途 / Purpose:** 执行 「open popup」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanVM 实例
MPLobbyClanVM mPLobbyClanVM = ...;
mPLobbyClanVM.ExecuteOpenPopup();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 「close popup」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanVM 实例
MPLobbyClanVM mPLobbyClanVM = ...;
mPLobbyClanVM.ExecuteClosePopup();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyClanVM mPLobbyClanVM = ...;
mPLobbyClanVM.RefreshValues();
```

## 参见

- [本区域目录](../)