---
title: "OrderOfBattleFormationFilterVisualBrushWidget"
description: "OrderOfBattleFormationFilterVisualBrushWidget 的自动生成类参考。"
---
# OrderOfBattleFormationFilterVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationFilterVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle/OrderOfBattleFormationFilterVisualBrushWidget.cs`

## 概述

`OrderOfBattleFormationFilterVisualBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `OrderOfBattleFormationFilterVisualBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FormationFilter` | `public int FormationFilter { get; set; }` |
| `UnsetBrush` | `public Brush UnsetBrush { get; set; }` |
| `SpearBrush` | `public Brush SpearBrush { get; set; }` |
| `ShieldBrush` | `public Brush ShieldBrush { get; set; }` |
| `ThrownBrush` | `public Brush ThrownBrush { get; set; }` |
| `HeavyBrush` | `public Brush HeavyBrush { get; set; }` |
| `HighTierBrush` | `public Brush HighTierBrush { get; set; }` |
| `LowTierBrush` | `public Brush LowTierBrush { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
OrderOfBattleFormationFilterVisualBrushWidget widget = ...;
```

## 参见

- [本区域目录](../)