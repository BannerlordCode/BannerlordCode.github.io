---
title: "MPLobbyQueryPopupVM"
description: "MPLobbyQueryPopupVM 的自动生成类参考。"
---
# MPLobbyQueryPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyQueryPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup/MPLobbyQueryPopupVM.cs`

## 概述

`MPLobbyQueryPopupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsInquiry` | `public bool IsInquiry { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Message` | `public string Message { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyQueryPopupVM 实例
MPLobbyQueryPopupVM mPLobbyQueryPopupVM = ...;
mPLobbyQueryPopupVM.RefreshValues();
```

### ShowMessage
`public void ShowMessage(TextObject title, TextObject message)`

**用途 / Purpose:** **用途 / Purpose:** 显示message对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 MPLobbyQueryPopupVM 实例
MPLobbyQueryPopupVM mPLobbyQueryPopupVM = ...;
mPLobbyQueryPopupVM.ShowMessage(title, message);
```

### ShowInquiry
`public void ShowInquiry(TextObject title, TextObject message, Action onAccepted, Action onDeclined)`

**用途 / Purpose:** **用途 / Purpose:** 显示inquiry对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 MPLobbyQueryPopupVM 实例
MPLobbyQueryPopupVM mPLobbyQueryPopupVM = ...;
mPLobbyQueryPopupVM.ShowInquiry(title, message, onAccepted, onDeclined);
```

### ExecuteAccept
`public void ExecuteAccept()`

**用途 / Purpose:** **用途 / Purpose:** 执行 accept 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyQueryPopupVM 实例
MPLobbyQueryPopupVM mPLobbyQueryPopupVM = ...;
mPLobbyQueryPopupVM.ExecuteAccept();
```

### ExecuteDecline
`public void ExecuteDecline()`

**用途 / Purpose:** **用途 / Purpose:** 执行 decline 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyQueryPopupVM 实例
MPLobbyQueryPopupVM mPLobbyQueryPopupVM = ...;
mPLobbyQueryPopupVM.ExecuteDecline();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyQueryPopupVM 实例
MPLobbyQueryPopupVM mPLobbyQueryPopupVM = ...;
mPLobbyQueryPopupVM.SetDoneInputKey(hotkey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyQueryPopupVM 实例
MPLobbyQueryPopupVM mPLobbyQueryPopupVM = ...;
mPLobbyQueryPopupVM.SetCancelInputKey(hotkey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyQueryPopupVM mPLobbyQueryPopupVM = ...;
mPLobbyQueryPopupVM.RefreshValues();
```

## 参见

- [本区域目录](../)