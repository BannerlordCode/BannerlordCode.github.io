---
title: "MapNotificationVM"
description: "MapNotificationVM 的自动生成类参考。"
---
# MapNotificationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map/MapNotificationVM.cs`

## 概述

`MapNotificationVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey { get; set; }` |
| `FocusedNotificationItem` | `public MapNotificationItemBaseVM FocusedNotificationItem { get; set; }` |
| `NotificationItems` | `public MBBindingList<MapNotificationItemBaseVM> NotificationItems { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapNotificationVM 实例
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.RefreshValues();
```

### RegisterMapNotificationType
`public void RegisterMapNotificationType(Type data, Type item)`

**用途 / Purpose:** **用途 / Purpose:** 将map notification type注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 MapNotificationVM 实例
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.RegisterMapNotificationType(data, item);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapNotificationVM 实例
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.OnFinalize();
```

### OnFrameTick
`public void OnFrameTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 frame tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapNotificationVM 实例
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.OnFrameTick(0);
```

### OnMenuModeTick
`public void OnMenuModeTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 menu mode tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapNotificationVM 实例
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.OnMenuModeTick(0);
```

### AddMapNotification
`public void AddMapNotification(InformationData data)`

**用途 / Purpose:** **用途 / Purpose:** 将 map notification 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MapNotificationVM 实例
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.AddMapNotification(data);
```

### RemoveAllNotifications
`public void RemoveAllNotifications()`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 all notifications。

```csharp
// 先通过子系统 API 拿到 MapNotificationVM 实例
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.RemoveAllNotifications();
```

### SetRemoveInputKey
`public void SetRemoveInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 remove input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapNotificationVM 实例
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.SetRemoveInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapNotificationVM mapNotificationVM = ...;
mapNotificationVM.RefreshValues();
```

## 参见

- [本区域目录](../)