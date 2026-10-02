---
title: "ScrollablePanel"
description: "ScrollablePanel：TaleWorlds.GauntletUI 的 public 类，继承 Widget；公开成员 33 个（方法 12、属性 15、字段 2）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollablePanel.cs。"
---
# ScrollablePanel

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class ScrollablePanel : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollablePanel.cs`

## 概述

ScrollablePanel 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollablePanel.cs。它是一个 public 类，实现/继承 Widget，继承链为 ScrollablePanel → Widget → PropertyOwnerObject。public/protected 成员共 33 个：12 方法、15 属性、2 字段、1 事件、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ScrollablePanel 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.BaseTypes），继承链 ScrollablePanel → Widget → PropertyOwnerObject。成员构成以属性为主（属性 15/33，方法 12/33），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollablePanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public event Action<float>OnScroll;` | 事件 |
| `ClipRect` | `public Widget ClipRect` | 属性 |
| `InnerPanel` | `public Widget InnerPanel` | 属性 |
| `ActiveScrollbar` | `public ScrollbarWidget ActiveScrollbar` | 属性 |
| `UpdateScrollbarVisibility` | `public bool UpdateScrollbarVisibility` | 属性 |
| `FixedHeader` | `public Widget FixedHeader` | 属性 |
| `ScrolledHeader` | `public Widget ScrolledHeader` | 属性 |
| `ScrollablePanel` | `public ScrollablePanel(UIContext context) : base(context)` | 构造函数 |
| `ResetTweenSpeed` | `public void ResetTweenSpeed()` | 方法 |
| `OnPreviewMouseScroll` | `protected override bool OnPreviewMouseScroll()` | 方法 |
| `OnPreviewRightStickMovement` | `protected override bool OnPreviewRightStickMovement()` | 方法 |
| `OnMouseScroll` | `protected internal override void OnMouseScroll()` | 方法 |
| `OnRightStickMovement` | `protected internal override void OnRightStickMovement()` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `SetActiveCursor` | `protected void SetActiveCursor(UIContext.MouseCursors cursor)` | 方法 |
| `GetScrollYValueForWidget` | `protected float GetScrollYValueForWidget(Widget widget, float widgetTargetYValue, float offset)` | 方法 |
| `GetScrollXValueForWidget` | `protected float GetScrollXValueForWidget(Widget widget, float widgetTargetXValue, float offset)` | 方法 |
| `ScrollToChild` | `public void ScrollToChild(Widget targetWidget, ScrollablePanel.AutoScrollParameters scrollParameters = null)` | 方法 |
| `SetVerticalScrollTarget` | `public void SetVerticalScrollTarget(float targetValue, float interpolationDuration)` | 方法 |
| `SetHorizontalScrollTarget` | `public void SetHorizontalScrollTarget(float targetValue, float interpolationDuration)` | 方法 |
| `AutoHideScrollBars` | `public bool AutoHideScrollBars` | 属性 |
| `AutoHideScrollBarHandle` | `public bool AutoHideScrollBarHandle` | 属性 |
| `AutoAdjustScrollbarHandleSize` | `public bool AutoAdjustScrollbarHandleSize` | 属性 |
| `OnlyAcceptScrollEventIfCanScroll` | `public bool OnlyAcceptScrollEventIfCanScroll` | 属性 |
| `ReverseInitialScrollBarAlignment` | `public bool ReverseInitialScrollBarAlignment` | 属性 |
| `HorizontalScrollbar` | `public ScrollbarWidget HorizontalScrollbar` | 属性 |
| `VerticalScrollbar` | `public ScrollbarWidget VerticalScrollbar` | 属性 |
| `ControllerScrollSpeed` | `public float ControllerScrollSpeed` | 字段 |
| `MouseScrollSpeed` | `public float MouseScrollSpeed` | 字段 |
| `ScrollbarInterpolationController` | `protected class ScrollbarInterpolationController` | 属性 |
| `AutoScrollParameters` | `public class AutoScrollParameters` | 属性 |
| `ScrollbarInterpolationController` | `protected class ScrollbarInterpolationController` | 嵌套类型 |
| `AutoScrollParameters` | `public class AutoScrollParameters` | 嵌套类型 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BasicContainer](../BasicContainer)
- [同命名空间 BrushWidget](../BrushWidget)
- [同命名空间 ButtonType](../ButtonType)
- [同命名空间 ButtonWidget](../ButtonWidget)
