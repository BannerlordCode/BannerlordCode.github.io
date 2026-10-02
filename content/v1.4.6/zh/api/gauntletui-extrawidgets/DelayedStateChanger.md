---
title: "DelayedStateChanger"
description: "DelayedStateChanger：TaleWorlds.GauntletUI.ExtraWidgets 的 public 类，继承 BrushWidget；公开成员 11 个（方法 3、属性 7、字段 0）。源文件 TaleWorlds.GauntletUI.ExtraWidgets/DelayedStateChanger.cs。"
---
# DelayedStateChanger

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class DelayedStateChanger : BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/DelayedStateChanger.cs`

## 概述

DelayedStateChanger 位于 TaleWorlds.GauntletUI.ExtraWidgets 模块，源文件 TaleWorlds.GauntletUI.ExtraWidgets/DelayedStateChanger.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 DelayedStateChanger → BrushWidget。public/protected 成员共 11 个：3 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DelayedStateChanger 是 TaleWorlds.GauntletUI.ExtraWidgets 的顶层类型，命名空间与模块目录一致，继承链 DelayedStateChanger → BrushWidget。成员构成以属性为主（属性 7/11，方法 3/11），对外主要以状态读取接口暴露。继承链上的 BrushWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.ExtraWidgets/DelayedStateChanger.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DelayedStateChanger` | `public DelayedStateChanger(UIContext context) : base(context)` | 构造函数 |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | 方法 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `Start` | `public void Start()` | 方法 |
| `AutoStart` | `public bool AutoStart` | 属性 |
| `Trigger` | `public bool Trigger` | 属性 |
| `StateResetable` | `public bool StateResetable` | 属性 |
| `IncludeChildren` | `public bool IncludeChildren` | 属性 |
| `Delay` | `public float Delay` | 属性 |
| `State` | `public string State` | 属性 |
| `TargetWidget` | `public Widget TargetWidget` | 属性 |

## 参见

- [↑ gauntletui-extrawidgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [同命名空间 CustomWidgetManager](../CustomWidgetManager)
- [同命名空间 DialogButtonsParentWidget](../DialogButtonsParentWidget)
- [同命名空间 DisabledAlphaChangerWidget](../DisabledAlphaChangerWidget)
