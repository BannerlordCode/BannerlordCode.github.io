<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TutorialObjectiveMouseParentWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialObjectiveMouseParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialObjectiveMouseParentWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial/TutorialObjectiveMouseParentWidget.cs`

## 概述

`TutorialObjectiveMouseParentWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `TutorialObjectiveMouseParentWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
var widget = new TutorialObjectiveMouseParentWidget(context);
```

## 参见

- [完整类目录](../catalog)