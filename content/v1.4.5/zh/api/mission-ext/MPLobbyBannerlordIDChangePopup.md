---
title: "MPLobbyBannerlordIDChangePopup"
description: "MPLobbyBannerlordIDChangePopup 的自动生成类参考。"
---
# MPLobbyBannerlordIDChangePopup

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBannerlordIDChangePopup : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyBannerlordIDChangePopup.cs`

## 概述

`MPLobbyBannerlordIDChangePopup` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `BannerlordIDInputText` | `public string BannerlordIDInputText { get; set; }` |
| `ChangeBannerlordIDText` | `public string ChangeBannerlordIDText { get; set; }` |
| `TypeYourNameText` | `public string TypeYourNameText { get; set; }` |
| `RequestSentText` | `public string RequestSentText { get; set; }` |
| `HasRequestSent` | `public bool HasRequestSent { get; set; }` |
| `ErrorText` | `public string ErrorText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyBannerlordIDChangePopup 实例
MPLobbyBannerlordIDChangePopup mPLobbyBannerlordIDChangePopup = ...;
mPLobbyBannerlordIDChangePopup.RefreshValues();
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**用途 / Purpose:** 执行 「open popup」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyBannerlordIDChangePopup 实例
MPLobbyBannerlordIDChangePopup mPLobbyBannerlordIDChangePopup = ...;
mPLobbyBannerlordIDChangePopup.ExecuteOpenPopup();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 「close popup」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyBannerlordIDChangePopup 实例
MPLobbyBannerlordIDChangePopup mPLobbyBannerlordIDChangePopup = ...;
mPLobbyBannerlordIDChangePopup.ExecuteClosePopup();
```

### ExecuteApply
`public async void ExecuteApply()`

**用途 / Purpose:** 执行 「apply」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyBannerlordIDChangePopup 实例
MPLobbyBannerlordIDChangePopup mPLobbyBannerlordIDChangePopup = ...;
mPLobbyBannerlordIDChangePopup.ExecuteApply();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyBannerlordIDChangePopup 实例
MPLobbyBannerlordIDChangePopup mPLobbyBannerlordIDChangePopup = ...;
mPLobbyBannerlordIDChangePopup.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「cancel input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyBannerlordIDChangePopup 实例
MPLobbyBannerlordIDChangePopup mPLobbyBannerlordIDChangePopup = ...;
mPLobbyBannerlordIDChangePopup.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyBannerlordIDChangePopup 实例
MPLobbyBannerlordIDChangePopup mPLobbyBannerlordIDChangePopup = ...;
mPLobbyBannerlordIDChangePopup.SetDoneInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyBannerlordIDChangePopup mPLobbyBannerlordIDChangePopup = ...;
mPLobbyBannerlordIDChangePopup.RefreshValues();
```

## 参见

- [本区域目录](../)