<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapNotificationItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapNotificationItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapNotificationItemWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationItemWidget.cs`

## 概述

`MapNotificationItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

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

## 使用示例

```csharp
// MapNotificationItemWidget (Widget) 的典型用法
// 声明/访问一个 MapNotificationItemWidget
var widget = root.GetChild("mapNotificationItemWidget");;
```

## 参见

- [完整类目录](../catalog)