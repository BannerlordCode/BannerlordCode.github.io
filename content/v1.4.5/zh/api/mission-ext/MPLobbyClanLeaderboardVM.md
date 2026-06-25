---
title: "MPLobbyClanLeaderboardVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyClanLeaderboardVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClanLeaderboardVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanLeaderboardVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanLeaderboardVM.cs`

## 概述

`MPLobbyClanLeaderboardVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDataLoading` | `public bool IsDataLoading { get; set; }` |
| `LeaderboardText` | `public string LeaderboardText { get; set; }` |
| `ClansText` | `public string ClansText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `GamesWonText` | `public string GamesWonText { get; set; }` |
| `GamesLostText` | `public string GamesLostText { get; set; }` |
| `NextText` | `public string NextText { get; set; }` |
| `PreviousText` | `public string PreviousText { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `ClanItems` | `public MBBindingList<MPLobbyClanItemVM> ClanItems { get; set; }` |
| `SortController` | `public MPLobbyClanLeaderboardSortControllerVM SortController { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**用途 / Purpose:** 执行 `open popup` 操作或流程。

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 `close popup` 操作或流程。

## 使用示例

```csharp
var value = new MPLobbyClanLeaderboardVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)