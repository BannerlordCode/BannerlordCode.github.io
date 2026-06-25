---
title: "InventoryTupleExtensionControlsWidget"
description: "InventoryTupleExtensionControlsWidget 的自动生成类参考。"
---
# InventoryTupleExtensionControlsWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryTupleExtensionControlsWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory/InventoryTupleExtensionControlsWidget.cs`

## 概述

`InventoryTupleExtensionControlsWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `InventoryTupleExtensionControlsWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `NavigationParent` | `public Widget NavigationParent { get; set; }` |
| `IsExtended` | `public bool IsExtended { get; set; }` |
| `TransferSlider` | `public Widget TransferSlider { get; set; }` |
| `IncreaseDecreaseButtonsParent` | `public Widget IncreaseDecreaseButtonsParent { get; set; }` |
| `ButtonCarrier` | `public Widget ButtonCarrier { get; set; }` |

## 主要方法

### BuildNavigationData
`public void BuildNavigationData()`

**用途 / Purpose:** **用途 / Purpose:** 组装并返回navigation data的构建结果。

```csharp
// 先通过子系统 API 拿到 InventoryTupleExtensionControlsWidget 实例
InventoryTupleExtensionControlsWidget inventoryTupleExtensionControlsWidget = ...;
inventoryTupleExtensionControlsWidget.BuildNavigationData();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
InventoryTupleExtensionControlsWidget widget = ...;
```

## 参见

- [本区域目录](../)