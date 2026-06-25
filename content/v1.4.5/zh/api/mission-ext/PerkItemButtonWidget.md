---
title: "PerkItemButtonWidget"
description: "PerkItemButtonWidget 的自动生成类参考。"
---
# PerkItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PerkItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper/PerkItemButtonWidget.cs`

## 概述

`PerkItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `PerkItemButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `NotEarnedPerkBrush` | `public Brush NotEarnedPerkBrush { get; set; }` |
| `EarnedNotSelectedPerkBrush` | `public Brush EarnedNotSelectedPerkBrush { get; set; }` |
| `EarnedActivePerkBrush` | `public Brush EarnedActivePerkBrush { get; set; }` |
| `EarnedNotActivePerkBrush` | `public Brush EarnedNotActivePerkBrush { get; set; }` |
| `EarnedPreviousPerkNotSelectedPerkBrush` | `public Brush EarnedPreviousPerkNotSelectedPerkBrush { get; set; }` |
| `PerkVisualWidgetParent` | `public BrushWidget PerkVisualWidgetParent { get; set; }` |
| `Level` | `public int Level { get; set; }` |
| `PerkVisualWidget` | `public Widget PerkVisualWidget { get; set; }` |
| `PerkState` | `public int PerkState { get; set; }` |
| `AlternativeType` | `public int AlternativeType { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
PerkItemButtonWidget widget = ...;
```

## 参见

- [本区域目录](../)