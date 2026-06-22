<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TutorialPanelImageWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialPanelImageWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialPanelImageWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialPanelImageWidget.cs`

## 概述

`TutorialPanelImageWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `TutorialPanel` | `public BrushListPanel TutorialPanel { get; set; }` |

## 使用示例

```csharp
// TutorialPanelImageWidget (Widget) 的典型用法
// 声明/访问一个 TutorialPanelImageWidget
var widget = root.GetChild("tutorialPanelImageWidget");;
```

## 参见

- [完整类目录](../catalog)