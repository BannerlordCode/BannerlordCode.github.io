---
title: "CircularAutoScrollablePanelWidget"
description: "CircularAutoScrollablePanelWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 19 个（方法 7、属性 10、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircularAutoScrollablePanelWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CircularAutoScrollablePanelWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CircularAutoScrollablePanelWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircularAutoScrollablePanelWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CircularAutoScrollablePanelWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircularAutoScrollablePanelWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 CircularAutoScrollablePanelWidget → Widget → PropertyOwnerObject。public/protected 成员共 19 个：7 方法、10 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CircularAutoScrollablePanelWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets`，继承链 CircularAutoScrollablePanelWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 10/19，方法 7/19），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircularAutoScrollablePanelWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CircularAutoScrollablePanelWidget` | `public CircularAutoScrollablePanelWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OnMouseScroll` | `protected override void OnMouseScroll()` | 方法 |
| `SetScrollMouse` | `public void SetScrollMouse()` | 方法 |
| `OnHoverBegin` | `protected override void OnHoverBegin()` | 方法 |
| `SetHoverBegin` | `public void SetHoverBegin()` | 方法 |
| `OnHoverEnd` | `protected override void OnHoverEnd()` | 方法 |
| `SetHoverEnd` | `public void SetHoverEnd()` | 方法 |
| `InnerPanel` | `public Widget InnerPanel` | 属性 |
| `ClipRect` | `public Widget ClipRect` | 属性 |
| `ScrollRatioPerSecond` | `public float ScrollRatioPerSecond` | 属性 |
| `ScrollPixelsPerSecond` | `public float ScrollPixelsPerSecond` | 属性 |
| `IdleTime` | `public float IdleTime` | 属性 |
| `AutoScrollWhenSelected` | `public bool AutoScrollWhenSelected` | 属性 |
| `AutoScroll` | `public bool AutoScroll` | 属性 |
| `ScrollType` | `public CircularAutoScrollablePanelWidget.ScrollMovementType ScrollType` | 属性 |
| `ShouldResetImmediately` | `public bool ShouldResetImmediately` | 属性 |
| `ScrollMovementType` | `public enum ScrollMovementType` | 属性 |
| `ScrollMovementType` | `public enum ScrollMovementType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget/)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
