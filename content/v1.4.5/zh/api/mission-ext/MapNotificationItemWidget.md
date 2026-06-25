---
title: "MapNotificationItemWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapNotificationItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapNotificationItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapNotificationItemWidget`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification/MapNotificationItemWidget.cs`

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

**用途 / Purpose:** 处理 `map notification item widget` 相关逻辑。

## 使用示例

```csharp
var widget = new MapNotificationItemWidget(context);
```

## 参见

- [完整类目录](../catalog)