---
title: "FloatInputTextWidget"
description: "FloatInputTextWidget：TaleWorlds.GauntletUI 的 public 类，继承 EditableTextWidget；公开成员 9 个（方法 3、属性 5、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/FloatInputTextWidget.cs。"
---
# FloatInputTextWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class FloatInputTextWidget : EditableTextWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/FloatInputTextWidget.cs`

## 概述

FloatInputTextWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/FloatInputTextWidget.cs。它是一个 public 类，实现/继承 EditableTextWidget，继承链为 FloatInputTextWidget → EditableTextWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 9 个：3 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FloatInputTextWidget 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.BaseTypes），继承链 FloatInputTextWidget → EditableTextWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 5/9，方法 3/9），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/FloatInputTextWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EnableClamp` | `public bool EnableClamp` | 属性 |
| `UpdateValueOnDone` | `public bool UpdateValueOnDone` | 属性 |
| `FloatInputTextWidget` | `public FloatInputTextWidget(UIContext context) : base(context)` | 构造函数 |
| `HandleInput` | `public override void HandleInput(IReadOnlyList<int>lastKeysPressed)` | 方法 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `SetAllText` | `public override void SetAllText(string text)` | 方法 |
| `FloatText` | `public float FloatText` | 属性 |
| `MaxFloat` | `public float MaxFloat` | 属性 |
| `MinFloat` | `public float MinFloat` | 属性 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 EditableTextWidget](../EditableTextWidget)
- [同命名空间 BasicContainer](../BasicContainer)
- [同命名空间 BrushWidget](../BrushWidget)
- [同命名空间 ButtonType](../ButtonType)
- [同命名空间 ButtonWidget](../ButtonWidget)
