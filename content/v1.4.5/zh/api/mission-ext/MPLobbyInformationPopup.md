---
title: "MPLobbyInformationPopup"
description: "MPLobbyInformationPopup 的自动生成类参考。"
---
# MPLobbyInformationPopup

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyInformationPopup : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup/MPLobbyInformationPopup.cs`

## 概述

`MPLobbyInformationPopup` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Message` | `public string Message { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyInformationPopup 实例
MPLobbyInformationPopup mPLobbyInformationPopup = ...;
mPLobbyInformationPopup.RefreshValues();
```

### ShowInformation
`public void ShowInformation(TextObject title, TextObject message)`

**用途 / Purpose:** 显示「information」对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 MPLobbyInformationPopup 实例
MPLobbyInformationPopup mPLobbyInformationPopup = ...;
mPLobbyInformationPopup.ShowInformation(title, message);
```

### ShowInformation
`public void ShowInformation(string title, string message)`

**用途 / Purpose:** 显示「information」对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 MPLobbyInformationPopup 实例
MPLobbyInformationPopup mPLobbyInformationPopup = ...;
mPLobbyInformationPopup.ShowInformation("example", "example");
```

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** 执行 「close」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyInformationPopup 实例
MPLobbyInformationPopup mPLobbyInformationPopup = ...;
mPLobbyInformationPopup.ExecuteClose();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyInformationPopup 实例
MPLobbyInformationPopup mPLobbyInformationPopup = ...;
mPLobbyInformationPopup.SetDoneInputKey(hotkey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyInformationPopup mPLobbyInformationPopup = ...;
mPLobbyInformationPopup.RefreshValues();
```

## 参见

- [本区域目录](../)