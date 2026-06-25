---
title: "NavigatableGridWidget"
description: "NavigatableGridWidget 的自动生成类参考。"
---
# NavigatableGridWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NavigatableGridWidget : GridWidget`
**Base:** `GridWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableGridWidget.cs`

## 概述

`NavigatableGridWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `NavigatableGridWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ParentPanel` | `public ScrollablePanel ParentPanel { get; set; }` |
| `AutoScrollTopOffset` | `public int AutoScrollTopOffset { get; set; }` |
| `AutoScrollBottomOffset` | `public int AutoScrollBottomOffset { get; set; }` |
| `AutoScrollLeftOffset` | `public int AutoScrollLeftOffset { get; set; }` |
| `AutoScrollRightOffset` | `public int AutoScrollRightOffset { get; set; }` |
| `MinIndex` | `public int MinIndex { get; set; }` |
| `MaxIndex` | `public int MaxIndex { get; set; }` |
| `StepSize` | `public int StepSize { get; set; }` |
| `UseSelfIndexForMinimum` | `public bool UseSelfIndexForMinimum { get; set; }` |
| `EmptyNavigationWidget` | `public Widget EmptyNavigationWidget { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
NavigatableGridWidget widget = ...;
```

## 参见

- [本区域目录](../)