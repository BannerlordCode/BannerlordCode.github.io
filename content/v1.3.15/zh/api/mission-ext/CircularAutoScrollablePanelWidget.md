---
title: "CircularAutoScrollablePanelWidget"
description: "CircularAutoScrollablePanelWidget 的自动生成类参考。"
---
# CircularAutoScrollablePanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CircularAutoScrollablePanelWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircularAutoScrollablePanelWidget.cs`

## 概述

`CircularAutoScrollablePanelWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CircularAutoScrollablePanelWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `InnerPanel` | `public Widget InnerPanel { get; set; }` |
| `ClipRect` | `public Widget ClipRect { get; set; }` |
| `ScrollRatioPerSecond` | `public float ScrollRatioPerSecond { get; set; }` |
| `ScrollPixelsPerSecond` | `public float ScrollPixelsPerSecond { get; set; }` |
| `IdleTime` | `public float IdleTime { get; set; }` |
| `AutoScrollWhenSelected` | `public bool AutoScrollWhenSelected { get; set; }` |
| `AutoScroll` | `public bool AutoScroll { get; set; }` |
| `ScrollType` | `public CircularAutoScrollablePanelWidget.ScrollMovementType ScrollType { get; set; }` |
| `ShouldResetImmediately` | `public bool ShouldResetImmediately { get; set; }` |

## 主要方法

### SetScrollMouse
`public void SetScrollMouse()`

**用途 / Purpose:** **用途 / Purpose:** 为 scroll mouse 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CircularAutoScrollablePanelWidget 实例
CircularAutoScrollablePanelWidget circularAutoScrollablePanelWidget = ...;
circularAutoScrollablePanelWidget.SetScrollMouse();
```

### SetHoverBegin
`public void SetHoverBegin()`

**用途 / Purpose:** **用途 / Purpose:** 为 hover begin 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CircularAutoScrollablePanelWidget 实例
CircularAutoScrollablePanelWidget circularAutoScrollablePanelWidget = ...;
circularAutoScrollablePanelWidget.SetHoverBegin();
```

### SetHoverEnd
`public void SetHoverEnd()`

**用途 / Purpose:** **用途 / Purpose:** 为 hover end 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CircularAutoScrollablePanelWidget 实例
CircularAutoScrollablePanelWidget circularAutoScrollablePanelWidget = ...;
circularAutoScrollablePanelWidget.SetHoverEnd();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
CircularAutoScrollablePanelWidget widget = ...;
```

## 参见

- [本区域目录](../)