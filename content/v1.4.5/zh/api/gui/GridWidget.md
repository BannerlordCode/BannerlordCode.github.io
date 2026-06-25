---
title: "GridWidget"
description: "GridWidget 的自动生成类参考。"
---
# GridWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GridWidget : Container`
**Base:** `Container`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/GridWidget.cs`

## 概述

`GridWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `GridWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `GridLayout` | `public GridLayout GridLayout { get; }` |
| `DefaultCellWidth` | `public float DefaultCellWidth { get; set; }` |
| `DefaultCellHeight` | `public float DefaultCellHeight { get; set; }` |
| `RowCount` | `public int RowCount { get; set; }` |
| `ColumnCount` | `public int ColumnCount { get; set; }` |
| `UseDynamicCellWidth` | `public bool UseDynamicCellWidth { get; set; }` |
| `UseDynamicCellHeight` | `public bool UseDynamicCellHeight { get; set; }` |
| `AcceptDropPredicate` | `public override Predicate<Widget> AcceptDropPredicate { get; set; }` |

## 主要方法

### GetDropGizmoPosition
`public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)`

**用途 / Purpose:** 读取并返回当前对象中 「drop gizmo position」 的结果。

```csharp
// 先通过子系统 API 拿到 GridWidget 实例
GridWidget gridWidget = ...;
var result = gridWidget.GetDropGizmoPosition(draggedWidgetPosition);
```

### GetIndexForDrop
`public override int GetIndexForDrop(Vector2 draggedWidgetPosition)`

**用途 / Purpose:** 读取并返回当前对象中 「index for drop」 的结果。

```csharp
// 先通过子系统 API 拿到 GridWidget 实例
GridWidget gridWidget = ...;
var result = gridWidget.GetIndexForDrop(draggedWidgetPosition);
```

### OnChildSelected
`public override void OnChildSelected(Widget widget)`

**用途 / Purpose:** 在 「child selected」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GridWidget 实例
GridWidget gridWidget = ...;
gridWidget.OnChildSelected(widget);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
GridWidget widget = ...;
```

## 参见

- [本区域目录](../)