<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TutorialDirectionArrowWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialDirectionArrowWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialDirectionArrowWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialDirectionArrowWidget.cs`

## 概述

`TutorialDirectionArrowWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ArrowState` | `public string ArrowState { get; set; }` |
| `HorizontalArrowWidget` | `public BrushWidget HorizontalArrowWidget { get; set; }` |
| `VerticalArrowWidget` | `public BrushWidget VerticalArrowWidget { get; set; }` |

## 使用示例

```csharp
// TutorialDirectionArrowWidget (Widget) 的典型用法
// 声明/访问一个 TutorialDirectionArrowWidget
var widget = root.GetChild("tutorialDirectionArrowWidget");;
```

## 参见

- [完整类目录](../catalog)