---
title: "MPLobbyInformationPopup"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyInformationPopup`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyInformationPopup

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyInformationPopup : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Popup/MPLobbyInformationPopup.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ShowInformation
`public void ShowInformation(TextObject title, TextObject message)`

**用途 / Purpose:** 处理 `show information` 相关逻辑。

### ShowInformation
`public void ShowInformation(string title, string message)`

**用途 / Purpose:** 处理 `show information` 相关逻辑。

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** 执行 `close` 操作或流程。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

## 使用示例

```csharp
var value = new MPLobbyInformationPopup();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)