---
title: "InventoryAlternativeUsageContainer"
description: "InventoryAlternativeUsageContainer 的自动生成类参考。"
---
# InventoryAlternativeUsageContainer

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryAlternativeUsageContainer : Container`
**Base:** `Container`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryAlternativeUsageContainer.cs`

## 概述

`InventoryAlternativeUsageContainer` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ColumnLimit` | `public int ColumnLimit { get; set; }` |
| `CellWidth` | `public float CellWidth { get; set; }` |
| `CellHeight` | `public float CellHeight { get; set; }` |
| `AcceptDropPredicate` | `public override Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `IsDragHovering` | `public override bool IsDragHovering { get; }` |

## 主要方法

### OnChildSelected
`public override void OnChildSelected(Widget widget)`

**用途 / Purpose:** **用途 / Purpose:** 在 child selected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 InventoryAlternativeUsageContainer 实例
InventoryAlternativeUsageContainer inventoryAlternativeUsageContainer = ...;
inventoryAlternativeUsageContainer.OnChildSelected(widget);
```

### GetDropGizmoPosition
`public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 drop gizmo position 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryAlternativeUsageContainer 实例
InventoryAlternativeUsageContainer inventoryAlternativeUsageContainer = ...;
var result = inventoryAlternativeUsageContainer.GetDropGizmoPosition(draggedWidgetPosition);
```

### GetIndexForDrop
`public override int GetIndexForDrop(Vector2 draggedWidgetPosition)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 index for drop 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryAlternativeUsageContainer 实例
InventoryAlternativeUsageContainer inventoryAlternativeUsageContainer = ...;
var result = inventoryAlternativeUsageContainer.GetIndexForDrop(draggedWidgetPosition);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
InventoryAlternativeUsageContainer inventoryAlternativeUsageContainer = ...;
inventoryAlternativeUsageContainer.OnChildSelected(widget);
```

## 参见

- [本区域目录](../)