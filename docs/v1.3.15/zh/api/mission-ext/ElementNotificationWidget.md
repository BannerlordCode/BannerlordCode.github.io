<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ElementNotificationWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ElementNotificationWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ElementNotificationWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/ElementNotificationWidget.cs`

## 概述

`ElementNotificationWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ElementID` | `public string ElementID { get; set; }` |
| `ElementToHighlight` | `public Widget ElementToHighlight { get; set; }` |
| `TutorialFrameWidget` | `public TutorialHighlightItemBrushWidget TutorialFrameWidget { get; set; }` |

## 使用示例

```csharp
// ElementNotificationWidget (Widget) 的典型用法
// 声明/访问一个 ElementNotificationWidget
var widget = root.GetChild("elementNotificationWidget");;
```

## 参见

- [完整类目录](../catalog)