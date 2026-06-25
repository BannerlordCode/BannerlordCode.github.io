---
title: "MPLobbyClanLeaderboardVM"
description: "MPLobbyClanLeaderboardVM 的自动生成类参考。"
---
# MPLobbyClanLeaderboardVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanLeaderboardVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanLeaderboardVM.cs`

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

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanLeaderboardVM 实例
MPLobbyClanLeaderboardVM mPLobbyClanLeaderboardVM = ...;
mPLobbyClanLeaderboardVM.RefreshValues();
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**用途 / Purpose:** 执行 「open popup」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanLeaderboardVM 实例
MPLobbyClanLeaderboardVM mPLobbyClanLeaderboardVM = ...;
mPLobbyClanLeaderboardVM.ExecuteOpenPopup();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 「close popup」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanLeaderboardVM 实例
MPLobbyClanLeaderboardVM mPLobbyClanLeaderboardVM = ...;
mPLobbyClanLeaderboardVM.ExecuteClosePopup();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyClanLeaderboardVM mPLobbyClanLeaderboardVM = ...;
mPLobbyClanLeaderboardVM.RefreshValues();
```

## 参见

- [本区域目录](../)