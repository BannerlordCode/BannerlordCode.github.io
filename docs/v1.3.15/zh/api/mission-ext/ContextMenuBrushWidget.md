<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ContextMenuBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ContextMenuBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ContextMenuBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuBrushWidget.cs`

## 概述

`ContextMenuBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `HorizontalPadding` | `public float HorizontalPadding { get; set; }` |
| `VerticalPadding` | `public float VerticalPadding { get; set; }` |
| `IsActivated` | `public bool IsActivated { get; set; }` |
| `ActionListPanel` | `public ListPanel ActionListPanel { get; set; }` |
| `ScrollPanelToWatch` | `public ScrollablePanel ScrollPanelToWatch { get; set; }` |

## 使用示例

```csharp
// ContextMenuBrushWidget (Widget) 的典型用法
// 声明/访问一个 ContextMenuBrushWidget
var widget = root.GetChild("contextMenuBrushWidget");;
```

## 参见

- [完整类目录](../catalog)