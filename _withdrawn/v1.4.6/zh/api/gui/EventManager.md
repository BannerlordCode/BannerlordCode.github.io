---
title: "EventManager"
description: "EventManager：TaleWorlds.GauntletUI 的 public 类；公开成员 37 个（方法 8、属性 25、字段 1）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EventManager

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class EventManager`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

EventManager 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs。它是一个 public 类，继承链为 EventManager。public/protected 成员共 37 个：8 方法、25 属性、1 字段、3 事件。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EventManager 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI`，继承链 EventManager。成员构成以属性为主（属性 25/37，方法 8/37），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Time` | `public float Time` | 属性 |
| `UsableArea` | `public Vec2 UsableArea` | 属性 |
| `LeftUsableAreaStart` | `public float LeftUsableAreaStart` | 属性 |
| `TopUsableAreaStart` | `public float TopUsableAreaStart` | 属性 |
| `PageSize` | `public Vector2 PageSize` | 属性 |
| `UIEventManager` | `public static EventManager UIEventManager` | 属性 |
| `MousePositionInReferenceResolution` | `public Vector2 MousePositionInReferenceResolution` | 属性 |
| `IsControllerActive` | `public bool IsControllerActive` | 属性 |
| `Context` | `public UIContext Context` | 属性 |
| `OnDragStarted;` | `public event Action OnDragStarted;` | 事件 |
| `OnDragEnded;` | `public event Action OnDragEnded;` | 事件 |
| `Root` | `public Widget Root` | 属性 |
| `FocusedWidget` | `public Widget FocusedWidget` | 属性 |
| `HoveredWidget` | `public Widget HoveredWidget` | 属性 |
| `List` | `public List<Widget>MouseOveredWidgets` | 属性 |
| `DragHoveredWidget` | `public Widget DragHoveredWidget` | 属性 |
| `DraggedWidget` | `public Widget DraggedWidget` | 属性 |
| `DraggedWidgetPosition` | `public Vector2 DraggedWidgetPosition` | 属性 |
| `LatestMouseDownWidget` | `public Widget LatestMouseDownWidget` | 属性 |
| `LatestMouseUpWidget` | `public Widget LatestMouseUpWidget` | 属性 |
| `LatestMouseAlternateDownWidget` | `public Widget LatestMouseAlternateDownWidget` | 属性 |
| `LatestMouseAlternateUpWidget` | `public Widget LatestMouseAlternateUpWidget` | 属性 |
| `MousePosition` | `public Vector2 MousePosition` | 属性 |
| `LocalFrameNumber` | `public ulong LocalFrameNumber` | 属性 |
| `DeltaMouseScroll` | `public float DeltaMouseScroll` | 属性 |
| `RightStickVerticalScrollAmount` | `public float RightStickVerticalScrollAmount` | 属性 |
| `RightStickHorizontalScrollAmount` | `public float RightStickHorizontalScrollAmount` | 属性 |
| `AddAfterFinalizedCallback` | `public void AddAfterFinalizedCallback(Action callback)` | 方法 |
| `ClearFocus` | `public void ClearFocus()` | 方法 |
| `IsPointInsideUsableArea` | `public bool IsPointInsideUsableArea(Vector2 p)` | 方法 |
| `OnFocusedWidgetChanged;` | `public event Action OnFocusedWidgetChanged;` | 事件 |
| `HitTest` | `public static bool HitTest(Widget widget, Vector2 position)` | 方法 |
| `FocusTest` | `public bool FocusTest(Widget root)` | 方法 |
| `AddLateUpdateAction` | `public void AddLateUpdateAction(Widget owner, Action<float>action, int order)` | 方法 |
| `UpdateLayout` | `public void UpdateLayout()` | 方法 |
| `GetIsHitThisFrame` | `public bool GetIsHitThisFrame()` | 方法 |
| `MinParallelUpdateCount` | `public const int MinParallelUpdateCount` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AlignmentAxis](../AlignmentAxis/)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation/)
- [同命名空间 AudioProperty](../AudioProperty/)
