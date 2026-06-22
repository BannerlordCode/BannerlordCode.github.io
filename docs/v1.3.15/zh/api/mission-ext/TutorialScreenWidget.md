<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TutorialScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialScreenWidget.cs`

## 概述

`TutorialScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `LeftItem` | `public TutorialPanelImageWidget LeftItem { get; set; }` |
| `RightItem` | `public TutorialPanelImageWidget RightItem { get; set; }` |
| `BottomItem` | `public TutorialPanelImageWidget BottomItem { get; set; }` |
| `TopItem` | `public TutorialPanelImageWidget TopItem { get; set; }` |
| `LeftTopItem` | `public TutorialPanelImageWidget LeftTopItem { get; set; }` |
| `RightTopItem` | `public TutorialPanelImageWidget RightTopItem { get; set; }` |
| `LeftBottomItem` | `public TutorialPanelImageWidget LeftBottomItem { get; set; }` |
| `RightBottomItem` | `public TutorialPanelImageWidget RightBottomItem { get; set; }` |
| `CenterItem` | `public TutorialPanelImageWidget CenterItem { get; set; }` |
| `ArrowWidget` | `public TutorialArrowWidget ArrowWidget { get; set; }` |

## 使用示例

```csharp
// TutorialScreenWidget (Widget) 的典型用法
// 声明/访问一个 TutorialScreenWidget
var widget = root.GetChild("tutorialScreenWidget");;
```

## 参见

- [完整类目录](../catalog)