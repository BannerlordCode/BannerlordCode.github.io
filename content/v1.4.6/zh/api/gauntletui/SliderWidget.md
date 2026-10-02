---
title: "SliderWidget"
description: "SliderWidget：TaleWorlds.GauntletUI 的 public 类，继承 ImageWidget；公开成员 28 个（方法 8、属性 19、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/SliderWidget.cs。"
---
# SliderWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class SliderWidget : ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/SliderWidget.cs`

## 概述

SliderWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/SliderWidget.cs。它是一个 public 类，实现/继承 ImageWidget，继承链为 SliderWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 28 个：8 方法、19 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SliderWidget 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.BaseTypes），继承链 SliderWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 19/28，方法 8/28），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/SliderWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UpdateValueOnScroll` | `public bool UpdateValueOnScroll` | 属性 |
| `SliderWidget` | `public SliderWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnParallelUpdate` | `protected override void OnParallelUpdate(float dt)` | 方法 |
| `OnMousePressed` | `protected internal override void OnMousePressed()` | 方法 |
| `OnMouseReleased` | `protected internal override void OnMouseReleased(bool isFromInput)` | 方法 |
| `OnMouseMove` | `protected internal override void OnMouseMove()` | 方法 |
| `OnValueIntChanged` | `protected internal virtual void OnValueIntChanged(int value)` | 方法 |
| `OnValueFloatChanged` | `protected internal virtual void OnValueFloatChanged(float value)` | 方法 |
| `OnPreviewMouseScroll` | `protected override bool OnPreviewMouseScroll()` | 方法 |
| `IsDiscrete` | `public bool IsDiscrete` | 属性 |
| `Locked` | `public bool Locked` | 属性 |
| `UpdateValueOnRelease` | `public bool UpdateValueOnRelease` | 属性 |
| `UpdateValueContinuously` | `public bool UpdateValueContinuously` | 属性 |
| `AlignmentAxis` | `public AlignmentAxis AlignmentAxis` | 属性 |
| `ReverseDirection` | `public bool ReverseDirection` | 属性 |
| `Filler` | `public Widget Filler` | 属性 |
| `HandleExtension` | `public Widget HandleExtension` | 属性 |
| `ValueFloat` | `public float ValueFloat` | 属性 |
| `ValueInt` | `public int ValueInt` | 属性 |
| `MinValueFloat` | `public float MinValueFloat` | 属性 |
| `MaxValueFloat` | `public float MaxValueFloat` | 属性 |
| `MinValueInt` | `public int MinValueInt` | 属性 |
| `MaxValueInt` | `public int MaxValueInt` | 属性 |
| `DiscreteIncrementInterval` | `public int DiscreteIncrementInterval` | 属性 |
| `DoNotUpdateHandleSize` | `public bool DoNotUpdateHandleSize` | 属性 |
| `Handle` | `public Widget Handle` | 属性 |
| `SliderArea` | `public Widget SliderArea` | 属性 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ImageWidget](../ImageWidget)
- [同命名空间 BasicContainer](../BasicContainer)
- [同命名空间 BrushWidget](../BrushWidget)
- [同命名空间 ButtonType](../ButtonType)
- [同命名空间 ButtonWidget](../ButtonWidget)
