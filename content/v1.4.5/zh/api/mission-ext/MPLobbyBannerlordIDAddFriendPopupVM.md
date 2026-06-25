---
title: "MPLobbyBannerlordIDAddFriendPopupVM"
description: "MPLobbyBannerlordIDAddFriendPopupVM 的自动生成类参考。"
---
# MPLobbyBannerlordIDAddFriendPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBannerlordIDAddFriendPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyBannerlordIDAddFriendPopupVM.cs`

## 概述

`MPLobbyBannerlordIDAddFriendPopupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `AddText` | `public string AddText { get; set; }` |
| `ErrorText` | `public string ErrorText { get; set; }` |
| `BannerlordIDInputText` | `public string BannerlordIDInputText { get; set; }` |

## 主要方法

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open popup 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyBannerlordIDAddFriendPopupVM 实例
MPLobbyBannerlordIDAddFriendPopupVM mPLobbyBannerlordIDAddFriendPopupVM = ...;
mPLobbyBannerlordIDAddFriendPopupVM.ExecuteOpenPopup();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** **用途 / Purpose:** 执行 close popup 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyBannerlordIDAddFriendPopupVM 实例
MPLobbyBannerlordIDAddFriendPopupVM mPLobbyBannerlordIDAddFriendPopupVM = ...;
mPLobbyBannerlordIDAddFriendPopupVM.ExecuteClosePopup();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyBannerlordIDAddFriendPopupVM 实例
MPLobbyBannerlordIDAddFriendPopupVM mPLobbyBannerlordIDAddFriendPopupVM = ...;
mPLobbyBannerlordIDAddFriendPopupVM.RefreshValues();
```

### ExecuteTryAddFriend
`public async void ExecuteTryAddFriend()`

**用途 / Purpose:** **用途 / Purpose:** 执行 try add friend 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyBannerlordIDAddFriendPopupVM 实例
MPLobbyBannerlordIDAddFriendPopupVM mPLobbyBannerlordIDAddFriendPopupVM = ...;
mPLobbyBannerlordIDAddFriendPopupVM.ExecuteTryAddFriend();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyBannerlordIDAddFriendPopupVM 实例
MPLobbyBannerlordIDAddFriendPopupVM mPLobbyBannerlordIDAddFriendPopupVM = ...;
mPLobbyBannerlordIDAddFriendPopupVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyBannerlordIDAddFriendPopupVM 实例
MPLobbyBannerlordIDAddFriendPopupVM mPLobbyBannerlordIDAddFriendPopupVM = ...;
mPLobbyBannerlordIDAddFriendPopupVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyBannerlordIDAddFriendPopupVM 实例
MPLobbyBannerlordIDAddFriendPopupVM mPLobbyBannerlordIDAddFriendPopupVM = ...;
mPLobbyBannerlordIDAddFriendPopupVM.SetDoneInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyBannerlordIDAddFriendPopupVM mPLobbyBannerlordIDAddFriendPopupVM = ...;
mPLobbyBannerlordIDAddFriendPopupVM.ExecuteOpenPopup();
```

## 参见

- [本区域目录](../)