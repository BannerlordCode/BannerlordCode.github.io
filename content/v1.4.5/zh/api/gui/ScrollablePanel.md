---
title: "ScrollablePanel"
description: "ScrollablePanel 的自动生成类参考。"
---
# ScrollablePanel

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ScrollablePanel : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/ScrollablePanel.cs`

## 概述

`ScrollablePanel` 位于 `TaleWorlds.GauntletUI.BaseTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.BaseTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClipRect` | `public Widget ClipRect { get; set; }` |
| `InnerPanel` | `public Widget InnerPanel { get; set; }` |
| `UpdateScrollbarVisibility` | `public bool UpdateScrollbarVisibility { get; set; }` |
| `FixedHeader` | `public Widget FixedHeader { get; set; }` |
| `ScrolledHeader` | `public Widget ScrolledHeader { get; set; }` |
| `AutoHideScrollBars` | `public bool AutoHideScrollBars { get; set; }` |
| `AutoHideScrollBarHandle` | `public bool AutoHideScrollBarHandle { get; set; }` |
| `AutoAdjustScrollbarHandleSize` | `public bool AutoAdjustScrollbarHandleSize { get; set; }` |
| `OnlyAcceptScrollEventIfCanScroll` | `public bool OnlyAcceptScrollEventIfCanScroll { get; set; }` |
| `ReverseInitialScrollBarAlignment` | `public bool ReverseInitialScrollBarAlignment { get; set; }` |
| `HorizontalScrollbar` | `public ScrollbarWidget HorizontalScrollbar { get; set; }` |
| `VerticalScrollbar` | `public ScrollbarWidget VerticalScrollbar { get; set; }` |

## 主要方法

### SetControlledScrollbar
`public void SetControlledScrollbar(ScrollbarWidget scrollbar)`

**用途 / Purpose:** 为 controlled scrollbar 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ScrollablePanel 实例
ScrollablePanel scrollablePanel = ...;
scrollablePanel.SetControlledScrollbar(scrollbar);
```

### StartInterpolation
`public void StartInterpolation(float targetValue, float duration)`

**用途 / Purpose:** 启动interpolation流程或状态机。

```csharp
// 先通过子系统 API 拿到 ScrollablePanel 实例
ScrollablePanel scrollablePanel = ...;
scrollablePanel.StartInterpolation(0, 0);
```

### StopInterpolation
`public void StopInterpolation()`

**用途 / Purpose:** 停止interpolation流程或状态机。

```csharp
// 先通过子系统 API 拿到 ScrollablePanel 实例
ScrollablePanel scrollablePanel = ...;
scrollablePanel.StopInterpolation();
```

### GetValue
`public float GetValue()`

**用途 / Purpose:** 读取并返回当前对象中 value 的结果。

```csharp
// 先通过子系统 API 拿到 ScrollablePanel 实例
ScrollablePanel scrollablePanel = ...;
var result = scrollablePanel.GetValue();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 ScrollablePanel 实例
ScrollablePanel scrollablePanel = ...;
scrollablePanel.Tick(0);
```

### ResetTweenSpeed
`public void ResetTweenSpeed()`

**用途 / Purpose:** 将 tween speed 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 ScrollablePanel 实例
ScrollablePanel scrollablePanel = ...;
scrollablePanel.ResetTweenSpeed();
```

### ScrollToChild
`public void ScrollToChild(Widget targetWidget, AutoScrollParameters scrollParameters = null)`

**用途 / Purpose:** 调用 ScrollToChild 对应的操作。

```csharp
// 先通过子系统 API 拿到 ScrollablePanel 实例
ScrollablePanel scrollablePanel = ...;
scrollablePanel.ScrollToChild(targetWidget, null);
```

### SetVerticalScrollTarget
`public void SetVerticalScrollTarget(float targetValue, float interpolationDuration)`

**用途 / Purpose:** 为 vertical scroll target 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ScrollablePanel 实例
ScrollablePanel scrollablePanel = ...;
scrollablePanel.SetVerticalScrollTarget(0, 0);
```

### SetHorizontalScrollTarget
`public void SetHorizontalScrollTarget(float targetValue, float interpolationDuration)`

**用途 / Purpose:** 为 horizontal scroll target 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ScrollablePanel 实例
ScrollablePanel scrollablePanel = ...;
scrollablePanel.SetHorizontalScrollTarget(0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ScrollablePanel scrollablePanel = ...;
scrollablePanel.SetControlledScrollbar(scrollbar);
```

## 参见

- [本区域目录](../)