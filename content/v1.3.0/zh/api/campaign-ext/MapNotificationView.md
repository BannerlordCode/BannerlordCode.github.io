---
title: "MapNotificationView"
description: "MapNotificationView 的自动生成类参考。"
---
# MapNotificationView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapNotificationView : MapView`
**Base:** `MapView`
**File:** `SandBox.View/Map/MapNotificationView.cs`

## 概述

`MapNotificationView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MapNotificationView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ResetNotifications
`public virtual void ResetNotifications()`

**用途 / Purpose:** 将 notifications 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MapNotificationView 实例
MapNotificationView mapNotificationView = ...;
mapNotificationView.ResetNotifications();
```

### RegisterMapNotificationType
`public virtual void RegisterMapNotificationType(Type data, Type item)`

**用途 / Purpose:** 将map notification type注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 MapNotificationView 实例
MapNotificationView mapNotificationView = ...;
mapNotificationView.RegisterMapNotificationType(data, item);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MapNotificationView view = ...;
```

## 参见

- [本区域目录](../)