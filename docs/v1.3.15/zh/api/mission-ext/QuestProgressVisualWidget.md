<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestProgressVisualWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestProgressVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QuestProgressVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestProgressVisualWidget.cs`

## 概述

`QuestProgressVisualWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `BarWidget` | `public Widget BarWidget { get; set; }` |
| `SliderWidget` | `public Widget SliderWidget { get; set; }` |
| `CheckboxVisualWidget` | `public Widget CheckboxVisualWidget { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `ProgressStoneWidth` | `public float ProgressStoneWidth { get; set; }` |
| `ProgressStoneHeight` | `public float ProgressStoneHeight { get; set; }` |
| `CurrentProgress` | `public int CurrentProgress { get; set; }` |
| `TargetProgress` | `public int TargetProgress { get; set; }` |
| `HorizontalSpacingBetweenStones` | `public int HorizontalSpacingBetweenStones { get; set; }` |

## 使用示例

```csharp
// QuestProgressVisualWidget (Widget) 的典型用法
// 声明/访问一个 QuestProgressVisualWidget
var widget = root.GetChild("questProgressVisualWidget");;
```

## 参见

- [完整类目录](../catalog)