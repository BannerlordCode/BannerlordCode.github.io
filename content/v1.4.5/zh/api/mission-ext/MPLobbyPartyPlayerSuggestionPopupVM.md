---
title: "MPLobbyPartyPlayerSuggestionPopupVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyPartyPlayerSuggestionPopupVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyPartyPlayerSuggestionPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPartyPlayerSuggestionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyPartyPlayerSuggestionPopupVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OpenWith
`public void OpenWith(PlayerPartySuggestionData data)`

**用途 / Purpose:** 处理 `open with` 相关逻辑。

### Close
`public void Close()`

**用途 / Purpose:** 处理 `close` 相关逻辑。

## 使用示例

```csharp
var value = new MPLobbyPartyPlayerSuggestionPopupVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)