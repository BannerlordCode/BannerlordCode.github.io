<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PerkSelectionBarWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PerkSelectionBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PerkSelectionBarWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkSelectionBarWidget.cs`

## 概述

`PerkSelectionBarWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ProgressClip` | `public Widget ProgressClip { get; set; }` |
| `PercentageIndicatorWidget` | `public Widget PercentageIndicatorWidget { get; set; }` |
| `FullLearningRateClip` | `public Widget FullLearningRateClip { get; set; }` |
| `SeperatorContainer` | `public Widget SeperatorContainer { get; set; }` |
| `FullLearningRateClipInnerContent` | `public Widget FullLearningRateClipInnerContent { get; set; }` |
| `PerksList` | `public Widget PerksList { get; set; }` |
| `PercentageIndicatorTextWidget` | `public TextWidget PercentageIndicatorTextWidget { get; set; }` |
| `MaxLevel` | `public int MaxLevel { get; set; }` |
| `FullLearningRateLevel` | `public int FullLearningRateLevel { get; set; }` |
| `Level` | `public int Level { get; set; }` |

## 使用示例

```csharp
// PerkSelectionBarWidget (Widget) 的典型用法
// 声明/访问一个 PerkSelectionBarWidget
var widget = root.GetChild("perkSelectionBarWidget");;
```

## 参见

- [完整类目录](../catalog)