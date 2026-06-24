<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GridWidget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GridWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GridWidget : Container`
**Base:** `Container`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/GridWidget.cs`

## 概述

`GridWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `GridWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `GridLayout` | `public GridLayout GridLayout { get; }` |
| `DefaultCellWidth` | `public float DefaultCellWidth { get; set; }` |
| `DefaultScaledCellWidth` | `public float DefaultScaledCellWidth { get; set; }` |
| `DefaultCellHeight` | `public float DefaultCellHeight { get; set; }` |
| `DefaultScaledCellHeight` | `public float DefaultScaledCellHeight { get; set; }` |
| `RowCount` | `public int RowCount { get; set; }` |
| `ColumnCount` | `public int ColumnCount { get; set; }` |
| `UseDynamicCellWidth` | `public bool UseDynamicCellWidth { get; set; }` |
| `UseDynamicCellHeight` | `public bool UseDynamicCellHeight { get; set; }` |
| `AcceptDropPredicate` | `public override Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `IsDragHovering` | `public override bool IsDragHovering { get; }` |

## 主要方法

### GetDropGizmoPosition
`public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)`

**用途 / Purpose:** 获取 `drop gizmo position` 的当前值。

### GetIndexForDrop
`public override int GetIndexForDrop(Vector2 draggedWidgetPosition)`

**用途 / Purpose:** 获取 `index for drop` 的当前值。

### OnChildSelected
`public override void OnChildSelected(Widget widget)`

**用途 / Purpose:** 当 `child selected` 事件触发时调用此方法。

## 使用示例

```csharp
var widget = new GridWidget(context);
```

## 参见

- [完整类目录](../catalog)