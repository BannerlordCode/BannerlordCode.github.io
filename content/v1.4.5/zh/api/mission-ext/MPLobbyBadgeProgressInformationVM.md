---
title: "MPLobbyBadgeProgressInformationVM"
description: "MPLobbyBadgeProgressInformationVM 的自动生成类参考。"
---
# MPLobbyBadgeProgressInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBadgeProgressInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyBadgeProgressInformationVM.cs`

## 概述

`MPLobbyBadgeProgressInformationVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey { get; set; }` |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey { get; set; }` |
| `ShownBadgeCount` | `public int ShownBadgeCount { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CanIncreaseBadgeIndices` | `public bool CanIncreaseBadgeIndices { get; set; }` |
| `CanDecreaseBadgeIndices` | `public bool CanDecreaseBadgeIndices { get; set; }` |
| `ClickToCloseText` | `public string ClickToCloseText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `BadgeGroup` | `public MPLobbyAchievementBadgeGroupVM BadgeGroup { get; set; }` |
| `AvailableBadgeIDs` | `public MBBindingList<StringPairItemVM> AvailableBadgeIDs { get; set; }` |

## 主要方法

### OpenWith
`public void OpenWith(MPLobbyAchievementBadgeGroupVM badgeGroup)`

**用途 / Purpose:** 打开「with」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeProgressInformationVM 实例
MPLobbyBadgeProgressInformationVM mPLobbyBadgeProgressInformationVM = ...;
mPLobbyBadgeProgressInformationVM.OpenWith(badgeGroup);
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 「close popup」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeProgressInformationVM 实例
MPLobbyBadgeProgressInformationVM mPLobbyBadgeProgressInformationVM = ...;
mPLobbyBadgeProgressInformationVM.ExecuteClosePopup();
```

### ExecuteIncreaseActiveBadgeIndices
`public void ExecuteIncreaseActiveBadgeIndices()`

**用途 / Purpose:** 执行 「increase active badge indices」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeProgressInformationVM 实例
MPLobbyBadgeProgressInformationVM mPLobbyBadgeProgressInformationVM = ...;
mPLobbyBadgeProgressInformationVM.ExecuteIncreaseActiveBadgeIndices();
```

### ExecuteDecreaseActiveBadgeIndices
`public void ExecuteDecreaseActiveBadgeIndices()`

**用途 / Purpose:** 执行 「decrease active badge indices」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeProgressInformationVM 实例
MPLobbyBadgeProgressInformationVM mPLobbyBadgeProgressInformationVM = ...;
mPLobbyBadgeProgressInformationVM.ExecuteDecreaseActiveBadgeIndices();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeProgressInformationVM 实例
MPLobbyBadgeProgressInformationVM mPLobbyBadgeProgressInformationVM = ...;
mPLobbyBadgeProgressInformationVM.OnFinalize();
```

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「previous tab input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeProgressInformationVM 实例
MPLobbyBadgeProgressInformationVM mPLobbyBadgeProgressInformationVM = ...;
mPLobbyBadgeProgressInformationVM.SetPreviousTabInputKey(hotKey);
```

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「next tab input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyBadgeProgressInformationVM 实例
MPLobbyBadgeProgressInformationVM mPLobbyBadgeProgressInformationVM = ...;
mPLobbyBadgeProgressInformationVM.SetNextTabInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyBadgeProgressInformationVM mPLobbyBadgeProgressInformationVM = ...;
mPLobbyBadgeProgressInformationVM.OpenWith(badgeGroup);
```

## 参见

- [本区域目录](../)