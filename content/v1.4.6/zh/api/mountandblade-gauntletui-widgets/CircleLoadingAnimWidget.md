---
title: "CircleLoadingAnimWidget"
description: "CircleLoadingAnimWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 12 个（方法 3、属性 7、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircleLoadingAnimWidget.cs。"
---
# CircleLoadingAnimWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CircleLoadingAnimWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircleLoadingAnimWidget.cs`

## 概述

CircleLoadingAnimWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircleLoadingAnimWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 CircleLoadingAnimWidget → Widget。public/protected 成员共 12 个：3 方法、7 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CircleLoadingAnimWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录一致，继承链 CircleLoadingAnimWidget → Widget。成员构成以属性为主（属性 7/12，方法 3/12），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircleLoadingAnimWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NumOfCirclesInASecond` | `public float NumOfCirclesInASecond` | 属性 |
| `FullAlpha` | `public float FullAlpha` | 属性 |
| `CircleRadius` | `public float CircleRadius` | 属性 |
| `StaySeconds` | `public float StaySeconds` | 属性 |
| `FadeInSeconds` | `public float FadeInSeconds` | 属性 |
| `FadeOutSeconds` | `public float FadeOutSeconds` | 属性 |
| `CircleLoadingAnimWidget` | `public CircleLoadingAnimWidget(UIContext context) : base(context)` | 构造函数 |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | 方法 |
| `OnAfterChildRemoved` | `protected override void OnAfterChildRemoved(Widget child, int previousIndexOfChild)` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `VisualState` | `public enum VisualState` | 属性 |
| `VisualState` | `public enum VisualState` | 嵌套类型 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
