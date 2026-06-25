---
title: "MPLobbyPartyPlayerSuggestionPopupVM"
description: "MPLobbyPartyPlayerSuggestionPopupVM 的自动生成类参考。"
---
# MPLobbyPartyPlayerSuggestionPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPartyPlayerSuggestionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyPartyPlayerSuggestionPopupVM.cs`

## 概述

`MPLobbyPartyPlayerSuggestionPopupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; }` |
| `PlayerName` | `public string PlayerName { get; }` |
| `SuggestingPlayerId` | `public PlayerId SuggestingPlayerId { get; }` |
| `SuggestingPlayerName` | `public string SuggestingPlayerName { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DoYouWantToInviteText` | `public string DoYouWantToInviteText { get; set; }` |
| `PlayerSuggestedText` | `public string PlayerSuggestedText { get; set; }` |
| `SuggestedPlayer` | `public MPLobbyPlayerBaseVM SuggestedPlayer { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyPartyPlayerSuggestionPopupVM 实例
MPLobbyPartyPlayerSuggestionPopupVM mPLobbyPartyPlayerSuggestionPopupVM = ...;
mPLobbyPartyPlayerSuggestionPopupVM.RefreshValues();
```

### OpenWith
`public void OpenWith(PlayerPartySuggestionData data)`

**用途 / Purpose:** 打开with对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPLobbyPartyPlayerSuggestionPopupVM 实例
MPLobbyPartyPlayerSuggestionPopupVM mPLobbyPartyPlayerSuggestionPopupVM = ...;
mPLobbyPartyPlayerSuggestionPopupVM.OpenWith(data);
```

### Close
`public void Close()`

**用途 / Purpose:** 关闭当前对象代表的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPLobbyPartyPlayerSuggestionPopupVM 实例
MPLobbyPartyPlayerSuggestionPopupVM mPLobbyPartyPlayerSuggestionPopupVM = ...;
mPLobbyPartyPlayerSuggestionPopupVM.Close();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyPartyPlayerSuggestionPopupVM mPLobbyPartyPlayerSuggestionPopupVM = ...;
mPLobbyPartyPlayerSuggestionPopupVM.RefreshValues();
```

## 参见

- [本区域目录](../)