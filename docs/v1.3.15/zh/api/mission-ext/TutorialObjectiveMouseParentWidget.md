<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TutorialObjectiveMouseParentWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialObjectiveMouseParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialObjectiveMouseParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveMouseParentWidget.cs`

## 概述

`TutorialObjectiveMouseParentWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `MouseBodyWidget` | `public BrushWidget MouseBodyWidget { get; set; }` |
| `MouseLeftClickWidget` | `public BrushWidget MouseLeftClickWidget { get; set; }` |
| `MouseRightClickWidget` | `public BrushWidget MouseRightClickWidget { get; set; }` |
| `MouseMiddleClickWidget` | `public BrushWidget MouseMiddleClickWidget { get; set; }` |
| `KeyId` | `public string KeyId { get; set; }` |
| `MovementType` | `public int MovementType { get; set; }` |

## 使用示例

```csharp
// TutorialObjectiveMouseParentWidget (Widget) 的典型用法
// 声明/访问一个 TutorialObjectiveMouseParentWidget
var widget = root.GetChild("tutorialObjectiveMouseParentWidget");;
```

## 参见

- [完整类目录](../catalog)