<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapBarUnreadBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapBarUnreadBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapBarUnreadBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar/MapBarUnreadBrushWidget.cs`

## 概述

`MapBarUnreadBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MapBarUnreadBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsBannerNotification` | `public bool IsBannerNotification { get; set; }` |
| `UnreadTextWidget` | `public TextWidget UnreadTextWidget { get; set; }` |

## 使用示例

```csharp
var widget = new MapBarUnreadBrushWidget(context);
```

## 参见

- [完整类目录](../catalog)