---
title: "InventoryAlternativeUsageContainer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryAlternativeUsageContainer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# InventoryAlternativeUsageContainer

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryAlternativeUsageContainer`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory/InventoryAlternativeUsageContainer.cs`

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

### InventoryAlternativeUsageContainer
`public class InventoryAlternativeUsageContainer(UIContext context)`

**用途 / Purpose:** 处理 `inventory alternative usage container` 相关逻辑。

### OnChildSelected
`public override void OnChildSelected(Widget widget)`

**用途 / Purpose:** 当 `child selected` 事件触发时调用此方法。

### GetDropGizmoPosition
`public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)`

**用途 / Purpose:** 获取 `drop gizmo position` 的当前值。

### GetIndexForDrop
`public override int GetIndexForDrop(Vector2 draggedWidgetPosition)`

**用途 / Purpose:** 获取 `index for drop` 的当前值。

## 使用示例

```csharp
var value = new InventoryAlternativeUsageContainer();
value.InventoryAlternativeUsageContainer(context);
```

## 参见

- [完整类目录](../catalog)