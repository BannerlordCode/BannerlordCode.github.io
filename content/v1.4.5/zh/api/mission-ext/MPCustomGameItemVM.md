---
title: "MPCustomGameItemVM"
description: "MPCustomGameItemVM 的自动生成类参考。"
---
# MPCustomGameItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCustomGameItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame/MPCustomGameItemVM.cs`

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

**用途 / Purpose:** 重新计算并更新 「is favorite」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPCustomGameItemVM 实例
MPCustomGameItemVM mPCustomGameItemVM = ...;
mPCustomGameItemVM.UpdateIsFavorite();
```

### ExecuteSelect
`public void ExecuteSelect()`

**用途 / Purpose:** 执行 「select」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCustomGameItemVM 实例
MPCustomGameItemVM mPCustomGameItemVM = ...;
mPCustomGameItemVM.ExecuteSelect();
```

### ExecuteFavorite
`public void ExecuteFavorite()`

**用途 / Purpose:** 执行 「favorite」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCustomGameItemVM 实例
MPCustomGameItemVM mPCustomGameItemVM = ...;
mPCustomGameItemVM.ExecuteFavorite();
```

### ExecuteJoin
`public void ExecuteJoin()`

**用途 / Purpose:** 执行 「join」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCustomGameItemVM 实例
MPCustomGameItemVM mPCustomGameItemVM = ...;
mPCustomGameItemVM.ExecuteJoin();
```

### ExecuteViewHostOptions
`public void ExecuteViewHostOptions()`

**用途 / Purpose:** 执行 「view host options」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCustomGameItemVM 实例
MPCustomGameItemVM mPCustomGameItemVM = ...;
mPCustomGameItemVM.ExecuteViewHostOptions();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPCustomGameItemVM mPCustomGameItemVM = ...;
mPCustomGameItemVM.UpdateIsFavorite();
```

## 参见

- [本区域目录](../)