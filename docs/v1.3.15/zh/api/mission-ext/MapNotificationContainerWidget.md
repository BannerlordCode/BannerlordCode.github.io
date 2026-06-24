<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapNotificationContainerWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapNotificationContainerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapNotificationContainerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationContainerWidget.cs`

## 概述

`MapNotificationContainerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MapNotificationContainerWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MoreTextWidgetContainer` | `public BrushWidget MoreTextWidgetContainer { get; set; }` |
| `MoreTextWidget` | `public TextWidget MoreTextWidget { get; set; }` |
| `MaxAmountOfNotificationsToShow` | `public int MaxAmountOfNotificationsToShow { get; set; }` |

## 使用示例

```csharp
var widget = new MapNotificationContainerWidget(context);
```

## 参见

- [完整类目录](../catalog)