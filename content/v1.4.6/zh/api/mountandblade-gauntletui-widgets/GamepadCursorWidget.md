---
title: "GamepadCursorWidget"
description: "GamepadCursorWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 BrushWidget；公开成员 16 个（方法 1、属性 14、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorWidget.cs。"
---
# GamepadCursorWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class GamepadCursorWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorWidget.cs`

## 概述

GamepadCursorWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 GamepadCursorWidget → BrushWidget。public/protected 成员共 16 个：1 方法、14 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GamepadCursorWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录一致，继承链 GamepadCursorWidget → BrushWidget。成员构成以属性为主（属性 14/16，方法 1/16），对外主要以状态读取接口暴露。继承链上的 BrushWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GamepadCursorWidget` | `public GamepadCursorWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `CursorParentWidget` | `public GamepadCursorParentWidget CursorParentWidget` | 属性 |
| `TopLeftMarker` | `public GamepadCursorMarkerWidget TopLeftMarker` | 属性 |
| `TopRightMarker` | `public GamepadCursorMarkerWidget TopRightMarker` | 属性 |
| `BottomLeftMarker` | `public GamepadCursorMarkerWidget BottomLeftMarker` | 属性 |
| `BottomRightMarker` | `public GamepadCursorMarkerWidget BottomRightMarker` | 属性 |
| `HasTarget` | `public bool HasTarget` | 属性 |
| `TargetHasAction` | `public bool TargetHasAction` | 属性 |
| `DefaultOffset` | `public float DefaultOffset` | 属性 |
| `HoverOffset` | `public float HoverOffset` | 属性 |
| `DefaultTargetlessOffset` | `public float DefaultTargetlessOffset` | 属性 |
| `PressOffset` | `public float PressOffset` | 属性 |
| `DefaultSizeX` | `public float DefaultSizeX` | 属性 |
| `DefaultSizeY` | `public float DefaultSizeY` | 属性 |
| `ActionAnimationTime` | `public float ActionAnimationTime` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
