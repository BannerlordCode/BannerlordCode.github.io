---
title: "PowerLevelComparerWidget"
description: "PowerLevelComparerWidget 的自动生成类参考。"
---
# PowerLevelComparerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PowerLevelComparerWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay/PowerLevelComparerWidget.cs`

## 概述

`PowerLevelComparerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `PowerLevelComparerWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsCenterSeperatorEnabled` | `public bool IsCenterSeperatorEnabled { get; set; }` |
| `CenterSpace` | `public float CenterSpace { get; set; }` |
| `DefenderPower` | `public double DefenderPower { get; set; }` |
| `AttackerPower` | `public double AttackerPower { get; set; }` |
| `InitialAttackerBattlePower` | `public double InitialAttackerBattlePower { get; set; }` |
| `InitialDefenderBattlePower` | `public double InitialDefenderBattlePower { get; set; }` |
| `AttackerPowerWidget` | `public Widget AttackerPowerWidget { get; set; }` |
| `DefenderPowerWidget` | `public Widget DefenderPowerWidget { get; set; }` |
| `PowerListPanel` | `public ListPanel PowerListPanel { get; set; }` |
| `AttackerPowerListPanel` | `public ListPanel AttackerPowerListPanel { get; set; }` |
| `DefenderPowerListPanel` | `public ListPanel DefenderPowerListPanel { get; set; }` |
| `CenterSeperatorWidget` | `public Widget CenterSeperatorWidget { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
PowerLevelComparerWidget widget = ...;
```

## 参见

- [本区域目录](../)