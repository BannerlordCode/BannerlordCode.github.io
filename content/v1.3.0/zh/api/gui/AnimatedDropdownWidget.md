---
title: "AnimatedDropdownWidget"
description: "AnimatedDropdownWidget 的自动生成类参考。"
---
# AnimatedDropdownWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AnimatedDropdownWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimatedDropdownWidget.cs`

## 概述

`AnimatedDropdownWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `AnimatedDropdownWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TextWidget` | `public Widget TextWidget { get; set; }` |
| `ScrollbarWidget` | `public ScrollbarWidget ScrollbarWidget { get; set; }` |
| `Button` | `public ButtonWidget Button { get; set; }` |
| `DropdownContainerWidget` | `public Widget DropdownContainerWidget { get; set; }` |
| `DropdownClipWidget` | `public Widget DropdownClipWidget { get; set; }` |
| `ListPanel` | `public ListPanel ListPanel { get; set; }` |
| `ListPanelValue` | `public int ListPanelValue { get; set; }` |
| `CurrentSelectedIndex` | `public int CurrentSelectedIndex { get; set; }` |
| `UpdateSelectedItem` | `public bool UpdateSelectedItem { get; set; }` |

## 主要方法

### OnButtonClick
`public void OnButtonClick(Widget widget)`

**用途 / Purpose:** **用途 / Purpose:** 在 button click 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AnimatedDropdownWidget 实例
AnimatedDropdownWidget animatedDropdownWidget = ...;
animatedDropdownWidget.OnButtonClick(widget);
```

### UpdateButtonText
`public void UpdateButtonText(string text)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 button text 的最新表示。

```csharp
// 先通过子系统 API 拿到 AnimatedDropdownWidget 实例
AnimatedDropdownWidget animatedDropdownWidget = ...;
animatedDropdownWidget.UpdateButtonText("example");
```

### OnListChanged
`public void OnListChanged(Widget widget)`

**用途 / Purpose:** **用途 / Purpose:** 在 list changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AnimatedDropdownWidget 实例
AnimatedDropdownWidget animatedDropdownWidget = ...;
animatedDropdownWidget.OnListChanged(widget);
```

### OnListChanged
`public void OnListChanged(Widget parentWidget, Widget addedWidget)`

**用途 / Purpose:** **用途 / Purpose:** 在 list changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AnimatedDropdownWidget 实例
AnimatedDropdownWidget animatedDropdownWidget = ...;
animatedDropdownWidget.OnListChanged(parentWidget, addedWidget);
```

### OnSelectionChanged
`public void OnSelectionChanged(Widget widget)`

**用途 / Purpose:** **用途 / Purpose:** 在 selection changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AnimatedDropdownWidget 实例
AnimatedDropdownWidget animatedDropdownWidget = ...;
animatedDropdownWidget.OnSelectionChanged(widget);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
AnimatedDropdownWidget widget = ...;
```

## 参见

- [本区域目录](../)