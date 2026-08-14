---
title: "InventoryItemButtonWidget"
description: "InventoryItemButtonWidget 的自动生成类参考。"
---
# InventoryItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class InventoryItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemButtonWidget.cs`

## 概述

`InventoryItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `InventoryItemButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsRightSide` | `public bool IsRightSide { get; set; }` |
| `ItemType` | `public string ItemType { get; set; }` |
| `EquipmentIndex` | `public int EquipmentIndex { get; set; }` |
| `ScreenWidget` | `public InventoryScreenWidget ScreenWidget { get; }` |

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
InventoryItemButtonWidget instance = ...;
```

## 参见

- [本区域目录](../)