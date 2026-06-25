---
title: "MPLobbyClanSendPostPopupVM"
description: "MPLobbyClanSendPostPopupVM 的自动生成类参考。"
---
# MPLobbyClanSendPostPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanSendPostPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanSendPostPopupVM.cs`

## 概述

`MPLobbyClanSendPostPopupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `PostData` | `public string PostData { get; set; }` |
| `SendText` | `public string SendText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanSendPostPopupVM 实例
MPLobbyClanSendPostPopupVM mPLobbyClanSendPostPopupVM = ...;
mPLobbyClanSendPostPopupVM.RefreshValues();
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open popup 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanSendPostPopupVM 实例
MPLobbyClanSendPostPopupVM mPLobbyClanSendPostPopupVM = ...;
mPLobbyClanSendPostPopupVM.ExecuteOpenPopup();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** **用途 / Purpose:** 执行 close popup 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanSendPostPopupVM 实例
MPLobbyClanSendPostPopupVM mPLobbyClanSendPostPopupVM = ...;
mPLobbyClanSendPostPopupVM.ExecuteClosePopup();
```

### ExecuteSend
`public void ExecuteSend()`

**用途 / Purpose:** **用途 / Purpose:** 执行 send 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanSendPostPopupVM 实例
MPLobbyClanSendPostPopupVM mPLobbyClanSendPostPopupVM = ...;
mPLobbyClanSendPostPopupVM.ExecuteSend();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanSendPostPopupVM 实例
MPLobbyClanSendPostPopupVM mPLobbyClanSendPostPopupVM = ...;
mPLobbyClanSendPostPopupVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanSendPostPopupVM 实例
MPLobbyClanSendPostPopupVM mPLobbyClanSendPostPopupVM = ...;
mPLobbyClanSendPostPopupVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanSendPostPopupVM 实例
MPLobbyClanSendPostPopupVM mPLobbyClanSendPostPopupVM = ...;
mPLobbyClanSendPostPopupVM.SetDoneInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyClanSendPostPopupVM mPLobbyClanSendPostPopupVM = ...;
mPLobbyClanSendPostPopupVM.RefreshValues();
```

## 参见

- [本区域目录](../)