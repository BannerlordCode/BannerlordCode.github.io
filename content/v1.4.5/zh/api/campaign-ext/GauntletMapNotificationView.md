---
title: "GauntletMapNotificationView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletMapNotificationView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapNotificationView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapNotificationView : MapNotificationView`
**Base:** `MapNotificationView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapNotificationView.cs`

## 概述

`GauntletMapNotificationView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletMapNotificationView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### RegisterMapNotificationType
`public override void RegisterMapNotificationType(Type data, Type item)`

**用途 / Purpose:** 处理 `register map notification type` 相关逻辑。

### ResetNotifications
`public override void ResetNotifications()`

**用途 / Purpose:** 将 `notifications` 重置为初始状态。

## 使用示例

```csharp
var view = new GauntletMapNotificationView();
```

## 参见

- [完整类目录](../catalog)