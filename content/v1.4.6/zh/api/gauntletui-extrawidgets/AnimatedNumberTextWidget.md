---
title: "AnimatedNumberTextWidget"
description: "AnimatedNumberTextWidget：TaleWorlds.GauntletUI.ExtraWidgets 的 public 类，继承 TextWidget；公开成员 9 个（方法 3、属性 5、字段 0）。源文件 TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs。"
---
# AnimatedNumberTextWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class AnimatedNumberTextWidget : TextWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs`

## 概述

AnimatedNumberTextWidget 位于 TaleWorlds.GauntletUI.ExtraWidgets 模块，源文件 TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs。它是一个 public 类，实现/继承 TextWidget，继承链为 AnimatedNumberTextWidget → TextWidget。public/protected 成员共 9 个：3 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AnimatedNumberTextWidget 是 TaleWorlds.GauntletUI.ExtraWidgets 的顶层类型，命名空间与模块目录一致，继承链 AnimatedNumberTextWidget → TextWidget。成员构成以属性为主（属性 5/9，方法 3/9），对外主要以状态读取接口暴露。继承链上的 TextWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AnimatedNumberTextWidget` | `public AnimatedNumberTextWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `StartAnimation` | `public void StartAnimation()` | 方法 |
| `Reset` | `public void Reset()` | 方法 |
| `AnimationDelay` | `public float AnimationDelay` | 属性 |
| `AnimationDuration` | `public float AnimationDuration` | 属性 |
| `ReferenceNumber` | `public int ReferenceNumber` | 属性 |
| `Number` | `public int Number` | 属性 |
| `AutoStart` | `public bool AutoStart` | 属性 |

## 参见

- [↑ gauntletui-extrawidgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CustomWidgetManager](../CustomWidgetManager)
- [同命名空间 DelayedStateChanger](../DelayedStateChanger)
- [同命名空间 DialogButtonsParentWidget](../DialogButtonsParentWidget)
- [同命名空间 DisabledAlphaChangerWidget](../DisabledAlphaChangerWidget)
