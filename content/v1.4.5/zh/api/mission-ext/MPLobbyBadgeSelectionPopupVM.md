---
title: "MPLobbyBadgeSelectionPopupVM"
description: "MPLobbyBadgeSelectionPopupVM 的自动生成类参考。"
---
# MPLobbyBadgeSelectionPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBadgeSelectionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyBadgeSelectionPopupVM.cs`

## 概述

`MPLobbyBadgeSelectionPopupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActiveNotifications` | `public List<LobbyNotification> ActiveNotifications { get; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `HasNotifications` | `public bool HasNotifications { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `BadgesText` | `public string BadgesText { get; set; }` |
| `SpecialBadgesText` | `public string SpecialBadgesText { get; set; }` |
| `AchievementBadgesText` | `public string AchievementBadgesText { get; set; }` |
| `Badges` | `public MBBindingList<MPLobbyBadgeItemVM> Badges { get; set; }` |
| `AchivementBadgeGroups` | `public MBBindingList<MPLobbyAchievementBadgeGroupVM> AchivementBadgeGroups { get; set; }` |
| `InspectedBadge` | `public MPLobbyBadgeItemVM InspectedBadge { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeSelectionPopupVM 实例
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.RefreshValues();
```

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**用途 / Purpose:** **用途 / Purpose:** 使 player data 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeSelectionPopupVM 实例
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.RefreshPlayerData(playerData);
```

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey inspectProgressKey)`

**用途 / Purpose:** **用途 / Purpose:** 使 key bindings 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeSelectionPopupVM 实例
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.RefreshKeyBindings(inspectProgressKey);
```

### UpdateBadges
`public async void UpdateBadges(bool shouldClear = false)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 badges 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeSelectionPopupVM 实例
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.UpdateBadges(false);
```

### UpdateBadgeSelection
`public void UpdateBadgeSelection()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 badge selection 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeSelectionPopupVM 实例
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.UpdateBadgeSelection();
```

### OnNotificationReceived
`public void OnNotificationReceived(LobbyNotification notification)`

**用途 / Purpose:** **用途 / Purpose:** 在 notification received 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeSelectionPopupVM 实例
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.OnNotificationReceived(notification);
```

### OnBadgeInspected
`public void OnBadgeInspected(MPLobbyBadgeItemVM badge)`

**用途 / Purpose:** **用途 / Purpose:** 在 badge inspected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeSelectionPopupVM 实例
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.OnBadgeInspected(badge);
```

### Open
`public void Open()`

**用途 / Purpose:** **用途 / Purpose:** 打开当前对象代表的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeSelectionPopupVM 实例
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.Open();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** **用途 / Purpose:** 执行 close popup 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeSelectionPopupVM 实例
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.ExecuteClosePopup();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeSelectionPopupVM 实例
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeSelectionPopupVM 实例
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.SetCancelInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyBadgeSelectionPopupVM mPLobbyBadgeSelectionPopupVM = ...;
mPLobbyBadgeSelectionPopupVM.RefreshValues();
```

## 参见

- [本区域目录](../)