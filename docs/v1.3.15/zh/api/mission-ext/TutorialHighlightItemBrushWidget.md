<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TutorialHighlightItemBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialHighlightItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialHighlightItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialHighlightItemBrushWidget.cs`

## 概述

`TutorialHighlightItemBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `CustomSizeSyncTarget` | `public Widget CustomSizeSyncTarget { get; set; }` |
| `DoNotOverrideWidth` | `public bool DoNotOverrideWidth { get; set; }` |
| `DoNotOverrideHeight` | `public bool DoNotOverrideHeight { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; }` |
| `HighlightFrameWidget` | `public TutorialHighlightItemBrushWidget HighlightFrameWidget { get; }` |

## 使用示例

```csharp
// TutorialHighlightItemBrushWidget (Widget) 的典型用法
// 声明/访问一个 TutorialHighlightItemBrushWidget
var widget = root.GetChild("tutorialHighlightItemBrushWidget");;
```

## 参见

- [完整类目录](../catalog)