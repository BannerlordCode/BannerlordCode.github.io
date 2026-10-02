---
title: "MouseWidget"
description: "MouseWidget：TaleWorlds.GauntletUI.ExtraWidgets 的 public 类，继承 Widget；公开成员 11 个（方法 2、属性 8、字段 0）。源文件 TaleWorlds.GauntletUI.ExtraWidgets/MouseWidget.cs。"
---
# MouseWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class MouseWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/MouseWidget.cs`

## 概述

MouseWidget 位于 TaleWorlds.GauntletUI.ExtraWidgets 模块，源文件 TaleWorlds.GauntletUI.ExtraWidgets/MouseWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 MouseWidget → Widget。public/protected 成员共 11 个：2 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MouseWidget 是 TaleWorlds.GauntletUI.ExtraWidgets 的顶层类型，命名空间与模块目录一致，继承链 MouseWidget → Widget。成员构成以属性为主（属性 8/11，方法 2/11），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.ExtraWidgets/MouseWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MouseWidget` | `public MouseWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `UpdatePressedKeys` | `public void UpdatePressedKeys()` | 方法 |
| `LeftMouseButton` | `public Widget LeftMouseButton` | 属性 |
| `RightMouseButton` | `public Widget RightMouseButton` | 属性 |
| `MiddleMouseButton` | `public Widget MiddleMouseButton` | 属性 |
| `MouseX1Button` | `public Widget MouseX1Button` | 属性 |
| `MouseX2Button` | `public Widget MouseX2Button` | 属性 |
| `MouseScrollUp` | `public Widget MouseScrollUp` | 属性 |
| `MouseScrollDown` | `public Widget MouseScrollDown` | 属性 |
| `KeyboardKeys` | `public TextWidget KeyboardKeys` | 属性 |

## 参见

- [↑ gauntletui-extrawidgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [同命名空间 CustomWidgetManager](../CustomWidgetManager)
- [同命名空间 DelayedStateChanger](../DelayedStateChanger)
- [同命名空间 DialogButtonsParentWidget](../DialogButtonsParentWidget)
