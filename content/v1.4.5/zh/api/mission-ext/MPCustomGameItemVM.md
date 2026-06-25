---
title: "MPCustomGameItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPCustomGameItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPCustomGameItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCustomGameItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame/MPCustomGameItemVM.cs`

## 概述

`MPCustomGameItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameServerInfo` | `public GameServerEntry GameServerInfo { get; set; }` |
| `PremadeGameInfo` | `public PremadeGameEntry PremadeGameInfo { get; set; }` |
| `IsPasswordProtected` | `public bool IsPasswordProtected { get; set; }` |
| `IsFavorite` | `public bool IsFavorite { get; set; }` |
| `IsClanMatchItem` | `public bool IsClanMatchItem { get; set; }` |
| `IsOfficialServer` | `public bool IsOfficialServer { get; set; }` |
| `IsByOfficialServerProvider` | `public bool IsByOfficialServerProvider { get; set; }` |
| `IsCommunityServer` | `public bool IsCommunityServer { get; set; }` |
| `IsPingInfoAvailable` | `public bool IsPingInfoAvailable { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `PlayerCount` | `public int PlayerCount { get; set; }` |
| `MaxPlayerCount` | `public int MaxPlayerCount { get; set; }` |
| `HostText` | `public string HostText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `GameTypeText` | `public string GameTypeText { get; set; }` |
| `PlayerCountText` | `public string PlayerCountText { get; set; }` |
| `PingText` | `public string PingText { get; set; }` |
| `FirstFactionName` | `public string FirstFactionName { get; set; }` |
| `SecondFactionName` | `public string SecondFactionName { get; set; }` |
| `RegionName` | `public string RegionName { get; set; }` |
| `PremadeMatchTypeText` | `public string PremadeMatchTypeText { get; set; }` |
| `LoadedModulesHint` | `public BasicTooltipViewModel LoadedModulesHint { get; set; }` |

## 主要方法

### UpdateIsFavorite
`public void UpdateIsFavorite()`

**用途 / Purpose:** 更新 `is favorite` 的状态或数据。

### ExecuteSelect
`public void ExecuteSelect()`

**用途 / Purpose:** 执行 `select` 操作或流程。

### ExecuteFavorite
`public void ExecuteFavorite()`

**用途 / Purpose:** 执行 `favorite` 操作或流程。

### ExecuteJoin
`public void ExecuteJoin()`

**用途 / Purpose:** 执行 `join` 操作或流程。

### ExecuteViewHostOptions
`public void ExecuteViewHostOptions()`

**用途 / Purpose:** 执行 `view host options` 操作或流程。

## 使用示例

```csharp
var value = new MPCustomGameItemVM();
value.UpdateIsFavorite();
```

## 参见

- [完整类目录](../catalog)