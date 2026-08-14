---
title: "PerkSelectionBarWidget"
description: "PerkSelectionBarWidget 的自动生成类参考。"
---
# PerkSelectionBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PerkSelectionBarWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkSelectionBarWidget.cs`

## 概述

`PerkSelectionBarWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `PerkSelectionBarWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
PerkSelectionBarWidget widget = ...;
```

## 参见

- [本区域目录](../)