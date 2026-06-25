---
title: "MapNotificationView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapNotificationView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapNotificationView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapNotificationView : MapView`
**Base:** `MapView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map/MapNotificationView.cs`

## 概述

`MapNotificationView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MapNotificationView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ResetNotifications
`public virtual void ResetNotifications()`

**用途 / Purpose:** 将 `notifications` 重置为初始状态。

### RegisterMapNotificationType
`public virtual void RegisterMapNotificationType(Type data, Type item)`

**用途 / Purpose:** 处理 `register map notification type` 相关逻辑。

## 使用示例

```csharp
var view = new MapNotificationView();
```

## 参见

- [完整类目录](../catalog)