<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GridWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GridWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GridWidget : Container`
**Base:** `Container`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/GridWidget.cs`

## 概述

`GridWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `DefaultCellWidth` | `public float DefaultCellWidth { get { return this._defaultCellWidth; }` |
| `DefaultScaledCellWidth` | `public float DefaultScaledCellWidth { get { return this.DefaultCellWidth * base._scaleToUse; }` |
| `DefaultCellHeight` | `public float DefaultCellHeight { get { return this._defaultCellHeight; }` |
| `DefaultScaledCellHeight` | `public float DefaultScaledCellHeight { get { return this.DefaultCellHeight * base._scaleToUse; }` |
| `RowCount` | `public int RowCount { get { return this._rowCount; }` |
| `ColumnCount` | `public int ColumnCount { get { return this._columnCount; }` |
| `UseDynamicCellWidth` | `public bool UseDynamicCellWidth { get { return this._useDynamicCellWidth; }` |
| `UseDynamicCellHeight` | `public bool UseDynamicCellHeight { get { return this._useDynamicCellHeight; }` |
| `AcceptDropPredicate` | `public override Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `IsDragHovering` | `public override bool IsDragHovering { get { return false; }` |

## 主要方法

### GetDropGizmoPosition
```csharp
public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)
```

### GetIndexForDrop
```csharp
public override int GetIndexForDrop(Vector2 draggedWidgetPosition)
```

### OnChildSelected
```csharp
public override void OnChildSelected(Widget widget)
```

## 使用示例

```csharp
// GridWidget (Widget) 的典型用法
// 声明/访问一个 GridWidget
var widget = root.GetChild("gridWidget");;
```

## 参见

- [完整类目录](../catalog)