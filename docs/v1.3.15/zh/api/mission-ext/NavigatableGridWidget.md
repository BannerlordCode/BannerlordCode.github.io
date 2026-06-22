<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NavigatableGridWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NavigatableGridWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NavigatableGridWidget : GridWidget`
**Base:** `GridWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableGridWidget.cs`

## 概述

`NavigatableGridWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ParentPanel` | `public ScrollablePanel ParentPanel { get; set; }` |
| `AutoScrollTopOffset` | `public int AutoScrollTopOffset { get; set; }` |
| `AutoScrollBottomOffset` | `public int AutoScrollBottomOffset { get; set; }` |
| `AutoScrollLeftOffset` | `public int AutoScrollLeftOffset { get; set; }` |
| `AutoScrollRightOffset` | `public int AutoScrollRightOffset { get; set; }` |
| `MinIndex` | `public int MinIndex { get; set; }` |
| `MaxIndex` | `public int MaxIndex { get; set; }` |
| `StepSize` | `public int StepSize { get; set; }` |
| `UseSelfIndexForMinimum` | `public bool UseSelfIndexForMinimum { get; set; }` |
| `EmptyNavigationWidget` | `public Widget EmptyNavigationWidget { get; set; }` |

## 使用示例

```csharp
// NavigatableGridWidget (Widget) 的典型用法
// 声明/访问一个 NavigatableGridWidget
var widget = root.GetChild("navigatableGridWidget");;
```

## 参见

- [完整类目录](../catalog)