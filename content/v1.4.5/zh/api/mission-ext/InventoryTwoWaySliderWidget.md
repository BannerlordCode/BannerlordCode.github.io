---
title: "InventoryTwoWaySliderWidget"
description: "InventoryTwoWaySliderWidget 的自动生成类参考。"
---
# InventoryTwoWaySliderWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryTwoWaySliderWidget : TwoWaySliderWidget`
**Base:** `TwoWaySliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryTwoWaySliderWidget.cs`

## 概述

`InventoryTwoWaySliderWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `InventoryTwoWaySliderWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsExtended` | `public bool IsExtended { get; set; }` |
| `IncreaseStockButtonWidget` | `public ButtonWidget IncreaseStockButtonWidget { get; set; }` |
| `DecreaseStockButtonWidget` | `public ButtonWidget DecreaseStockButtonWidget { get; set; }` |
| `IsRightSide` | `public bool IsRightSide { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
InventoryTwoWaySliderWidget widget = ...;
```

## 参见

- [本区域目录](../)