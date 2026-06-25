---
title: "MapNotificationItemWidget"
description: "MapNotificationItemWidget 的自动生成类参考。"
---
# MapNotificationItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapNotificationItemWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification/MapNotificationItemWidget.cs`

## 概述

`MapNotificationItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MapNotificationItemWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsFocusItem` | `public bool IsFocusItem { get; set; }` |
| `DefaultWidth` | `public float DefaultWidth { get; set; }` |
| `ExtendedWidth` | `public float ExtendedWidth { get; set; }` |
| `RemoveNotificationButtonWidget` | `public ButtonWidget RemoveNotificationButtonWidget { get; set; }` |
| `NotificationRingImageWidget` | `public Widget NotificationRingImageWidget { get; set; }` |
| `IsInspectionForced` | `public bool IsInspectionForced { get; set; }` |
| `NotificationType` | `public string NotificationType { get; set; }` |
| `DefaultWidthSprite` | `public Sprite DefaultWidthSprite { get; set; }` |
| `ExtendedWidthSprite` | `public Sprite ExtendedWidthSprite { get; set; }` |
| `NotificationRingWidget` | `public Widget NotificationRingWidget { get; set; }` |
| `NotificationExtensionWidget` | `public Widget NotificationExtensionWidget { get; set; }` |
| `NotificationTextContainerWidget` | `public Widget NotificationTextContainerWidget { get; set; }` |
| `NotificationDescriptionText` | `public RichTextWidget NotificationDescriptionText { get; set; }` |
| `RemoveButtonVisualWidget` | `public InputKeyVisualWidget RemoveButtonVisualWidget { get; set; }` |

## 主要方法

### MapNotificationItemWidget
`public class MapNotificationItemWidget(UIContext context)`

**用途 / Purpose:** 调用 MapNotificationItemWidget 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapNotificationItemWidget 实例
MapNotificationItemWidget mapNotificationItemWidget = ...;
var result = mapNotificationItemWidget.MapNotificationItemWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MapNotificationItemWidget widget = ...;
```

## 参见

- [本区域目录](../)