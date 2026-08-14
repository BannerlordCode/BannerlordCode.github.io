---
title: "QuestProgressVisualWidget"
description: "QuestProgressVisualWidget 的自动生成类参考。"
---
# QuestProgressVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QuestProgressVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestProgressVisualWidget.cs`

## 概述

`QuestProgressVisualWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `QuestProgressVisualWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
QuestProgressVisualWidget widget = ...;
```

## 参见

- [本区域目录](../)