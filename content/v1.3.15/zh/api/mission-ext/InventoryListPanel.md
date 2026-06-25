---
title: "InventoryListPanel"
description: "InventoryListPanel 的自动生成类参考。"
---
# InventoryListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryListPanel : NavigatableListPanel`
**Base:** `NavigatableListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryListPanel.cs`

## 概述

`InventoryListPanel` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SortByTypeBtn` | `public ButtonWidget SortByTypeBtn { get; set; }` |
| `SortByNameBtn` | `public ButtonWidget SortByNameBtn { get; set; }` |
| `SortByQuantityBtn` | `public ButtonWidget SortByQuantityBtn { get; set; }` |
| `SortByCostBtn` | `public ButtonWidget SortByCostBtn { get; set; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
InventoryListPanel instance = ...;
```

## 参见

- [本区域目录](../)