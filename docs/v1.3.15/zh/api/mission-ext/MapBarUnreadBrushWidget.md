<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapBarUnreadBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapBarUnreadBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapBarUnreadBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarUnreadBrushWidget.cs`

## 概述

`MapBarUnreadBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsBannerNotification` | `public bool IsBannerNotification { get; set; }` |
| `UnreadTextWidget` | `public TextWidget UnreadTextWidget { get; set; }` |

## 使用示例

```csharp
// MapBarUnreadBrushWidget (Widget) 的典型用法
// 声明/访问一个 MapBarUnreadBrushWidget
var widget = root.GetChild("mapBarUnreadBrushWidget");;
```

## 参见

- [完整类目录](../catalog)