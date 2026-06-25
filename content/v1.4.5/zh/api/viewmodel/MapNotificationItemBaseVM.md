---
title: "MapNotificationItemBaseVM"
description: "MapNotificationItemBaseVM 的自动生成类参考。"
---
# MapNotificationItemBaseVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapNotificationItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes/MapNotificationItemBaseVM.cs`

## 概述

`MapNotificationItemBaseVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NavigationHandler` | `public INavigationHandler NavigationHandler { get; }` |
| `Data` | `public InformationData Data { get; }` |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `NotificationIdentifier` | `public string NotificationIdentifier { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ForceInspection` | `public bool ForceInspection { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `SoundId` | `public string SoundId { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapNotificationItemBaseVM 实例
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.RefreshValues();
```

### SetNavigationHandler
`public void SetNavigationHandler(INavigationHandler navigationHandler)`

**用途 / Purpose:** 为 navigation handler 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapNotificationItemBaseVM 实例
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.SetNavigationHandler(navigationHandler);
```

### SetFastMoveCameraToPosition
`public void SetFastMoveCameraToPosition(Action<CampaignVec2> fastMoveCameraToPosition)`

**用途 / Purpose:** 为 fast move camera to position 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapNotificationItemBaseVM 实例
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.SetFastMoveCameraToPosition(fastMoveCameraToPosition);
```

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** 执行 action 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapNotificationItemBaseVM 实例
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.ExecuteAction();
```

### ExecuteRemove
`public void ExecuteRemove()`

**用途 / Purpose:** 执行 remove 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapNotificationItemBaseVM 实例
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.ExecuteRemove();
```

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**用途 / Purpose:** 执行 set focused 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapNotificationItemBaseVM 实例
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.ExecuteSetFocused();
```

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**用途 / Purpose:** 执行 set unfocused 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapNotificationItemBaseVM 实例
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.ExecuteSetUnfocused();
```

### ManualRefreshRelevantStatus
`public virtual void ManualRefreshRelevantStatus()`

**用途 / Purpose:** 调用 ManualRefreshRelevantStatus 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapNotificationItemBaseVM 实例
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.ManualRefreshRelevantStatus();
```

### SetRemoveInputKey
`public void SetRemoveInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 remove input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapNotificationItemBaseVM 实例
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.SetRemoveInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapNotificationItemBaseVM mapNotificationItemBaseVM = ...;
mapNotificationItemBaseVM.RefreshValues();
```

## 参见

- [本区域目录](../)