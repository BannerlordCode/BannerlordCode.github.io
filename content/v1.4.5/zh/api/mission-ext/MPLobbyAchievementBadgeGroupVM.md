---
title: "MPLobbyAchievementBadgeGroupVM"
description: "MPLobbyAchievementBadgeGroupVM 的自动生成类参考。"
---
# MPLobbyAchievementBadgeGroupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyAchievementBadgeGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyAchievementBadgeGroupVM.cs`

## 概述

`MPLobbyAchievementBadgeGroupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsProgressComplete` | `public bool IsProgressComplete { get; set; }` |
| `ProgressCompletedText` | `public string ProgressCompletedText { get; set; }` |
| `CurrentProgress` | `public int CurrentProgress { get; set; }` |
| `TotalProgress` | `public int TotalProgress { get; set; }` |
| `ShownBadgeItem` | `public MPLobbyBadgeItemVM ShownBadgeItem { get; set; }` |
| `Badges` | `public MBBindingList<MPLobbyBadgeItemVM> Badges { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyAchievementBadgeGroupVM 实例
MPLobbyAchievementBadgeGroupVM mPLobbyAchievementBadgeGroupVM = ...;
mPLobbyAchievementBadgeGroupVM.RefreshValues();
```

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey inspectProgressKey)`

**用途 / Purpose:** **用途 / Purpose:** 使 key bindings 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyAchievementBadgeGroupVM 实例
MPLobbyAchievementBadgeGroupVM mPLobbyAchievementBadgeGroupVM = ...;
mPLobbyAchievementBadgeGroupVM.RefreshKeyBindings(inspectProgressKey);
```

### OnGroupBadgeAdded
`public void OnGroupBadgeAdded(MPLobbyBadgeItemVM badgeItem)`

**用途 / Purpose:** **用途 / Purpose:** 在 group badge added 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyAchievementBadgeGroupVM 实例
MPLobbyAchievementBadgeGroupVM mPLobbyAchievementBadgeGroupVM = ...;
mPLobbyAchievementBadgeGroupVM.OnGroupBadgeAdded(badgeItem);
```

### UpdateBadgeSelection
`public void UpdateBadgeSelection()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 badge selection 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyAchievementBadgeGroupVM 实例
MPLobbyAchievementBadgeGroupVM mPLobbyAchievementBadgeGroupVM = ...;
mPLobbyAchievementBadgeGroupVM.UpdateBadgeSelection();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyAchievementBadgeGroupVM mPLobbyAchievementBadgeGroupVM = ...;
mPLobbyAchievementBadgeGroupVM.RefreshValues();
```

## 参见

- [本区域目录](../)