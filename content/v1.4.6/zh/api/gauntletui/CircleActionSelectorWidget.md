---
title: "CircleActionSelectorWidget"
description: "CircleActionSelectorWidget：TaleWorlds.GauntletUI 的 public 类，继承 Widget；公开成员 13 个（方法 5、属性 7、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleActionSelectorWidget.cs。"
---
# CircleActionSelectorWidget

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class CircleActionSelectorWidget : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleActionSelectorWidget.cs`

## 概述

CircleActionSelectorWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleActionSelectorWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 CircleActionSelectorWidget → Widget → PropertyOwnerObject。public/protected 成员共 13 个：5 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CircleActionSelectorWidget 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 CircleActionSelectorWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 7/13，方法 5/13），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleActionSelectorWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CircleActionSelectorWidget` | `public CircleActionSelectorWidget(UIContext context) : base(context)` | 构造函数 |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `AnimateDistanceFromCenterTo` | `public void AnimateDistanceFromCenterTo(float distanceFromCenter, float animationDuration)` | 方法 |
| `TrySetSelectedIndex` | `public bool TrySetSelectedIndex(int index)` | 方法 |
| `OnSelectedIndexChanged` | `protected virtual void OnSelectedIndexChanged(int selectedIndex)` | 方法 |
| `AllowInvalidSelection` | `public bool AllowInvalidSelection` | 属性 |
| `ActivateOnlyWithController` | `public bool ActivateOnlyWithController` | 属性 |
| `IsCircularInputEnabled` | `public bool IsCircularInputEnabled` | 属性 |
| `IsCircularInputDisabled` | `public bool IsCircularInputDisabled` | 属性 |
| `DistanceFromCenterModifier` | `public float DistanceFromCenterModifier` | 属性 |
| `DirectionWidgetDistanceMultiplier` | `public float DirectionWidgetDistanceMultiplier` | 属性 |
| `DirectionWidget` | `public Widget DirectionWidget` | 属性 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlignmentAxis](../AlignmentAxis)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation)
- [同命名空间 AudioProperty](../AudioProperty)
