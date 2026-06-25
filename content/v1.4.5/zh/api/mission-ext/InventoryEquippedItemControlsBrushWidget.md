---
title: "InventoryEquippedItemControlsBrushWidget"
description: "InventoryEquippedItemControlsBrushWidget 的自动生成类参考。"
---
# InventoryEquippedItemControlsBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryEquippedItemControlsBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory/InventoryEquippedItemControlsBrushWidget.cs`

## 概述

`InventoryEquippedItemControlsBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `InventoryEquippedItemControlsBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ForcedScopeCollection` | `public NavigationForcedScopeCollectionTargeter ForcedScopeCollection { get; set; }` |
| `NavigationScope` | `public NavigationScopeTargeter NavigationScope { get; set; }` |
| `ItemWidget` | `public InventoryItemButtonWidget ItemWidget { get; set; }` |

## 主要方法

### ButtonClickEventHandler
`public delegate void ButtonClickEventHandler(Widget itemWidget)`

**用途 / Purpose:** 处理与 「button click event handler」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 InventoryEquippedItemControlsBrushWidget 实例
InventoryEquippedItemControlsBrushWidget inventoryEquippedItemControlsBrushWidget = ...;
inventoryEquippedItemControlsBrushWidget.ButtonClickEventHandler(itemWidget);
```

### ShowPanel
`public void ShowPanel()`

**用途 / Purpose:** 显示「panel」对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 InventoryEquippedItemControlsBrushWidget 实例
InventoryEquippedItemControlsBrushWidget inventoryEquippedItemControlsBrushWidget = ...;
inventoryEquippedItemControlsBrushWidget.ShowPanel();
```

### HidePanel
`public void HidePanel()`

**用途 / Purpose:** 隐藏「panel」对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 InventoryEquippedItemControlsBrushWidget 实例
InventoryEquippedItemControlsBrushWidget inventoryEquippedItemControlsBrushWidget = ...;
inventoryEquippedItemControlsBrushWidget.HidePanel();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
InventoryEquippedItemControlsBrushWidget widget = ...;
```

## 参见

- [本区域目录](../)