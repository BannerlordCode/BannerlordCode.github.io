---
title: "DropdownWidget"
description: "DropdownWidget 的自动生成类参考。"
---
# DropdownWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DropdownWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/DropdownWidget.cs`

## 概述

`DropdownWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `DropdownWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TextWidget` | `public Widget TextWidget { get; set; }` |
| `DoNotHandleDropdownListPanel` | `public bool DoNotHandleDropdownListPanel { get; set; }` |
| `ScrollablePanel` | `public ScrollablePanel ScrollablePanel { get; set; }` |
| `Button` | `public ButtonWidget Button { get; set; }` |
| `ListPanel` | `public ListPanel ListPanel { get; set; }` |
| `IsOpen` | `public bool IsOpen { get; set; }` |
| `ListPanelValue` | `public int ListPanelValue { get; set; }` |
| `CurrentSelectedIndex` | `public int CurrentSelectedIndex { get; set; }` |

## 主要方法

### OnButtonClick
`public void OnButtonClick(Widget widget)`

**用途 / Purpose:** 在 button click 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DropdownWidget 实例
DropdownWidget dropdownWidget = ...;
dropdownWidget.OnButtonClick(widget);
```

### UpdateButtonText
`public void UpdateButtonText(string text)`

**用途 / Purpose:** 重新计算并更新 button text 的最新表示。

```csharp
// 先通过子系统 API 拿到 DropdownWidget 实例
DropdownWidget dropdownWidget = ...;
dropdownWidget.UpdateButtonText("example");
```

### OnListItemAdded
`public void OnListItemAdded(Widget parentWidget, Widget newChild)`

**用途 / Purpose:** 在 list item added 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DropdownWidget 实例
DropdownWidget dropdownWidget = ...;
dropdownWidget.OnListItemAdded(parentWidget, newChild);
```

### OnListItemRemoved
`public void OnListItemRemoved(Widget removedItem, Widget removedChild)`

**用途 / Purpose:** 在 list item removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DropdownWidget 实例
DropdownWidget dropdownWidget = ...;
dropdownWidget.OnListItemRemoved(removedItem, removedChild);
```

### OnSelectionChanged
`public void OnSelectionChanged(Widget widget)`

**用途 / Purpose:** 在 selection changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DropdownWidget 实例
DropdownWidget dropdownWidget = ...;
dropdownWidget.OnSelectionChanged(widget);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
DropdownWidget widget = ...;
```

## 参见

- [本区域目录](../)