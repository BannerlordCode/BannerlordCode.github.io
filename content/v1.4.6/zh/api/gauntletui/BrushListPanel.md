---
title: "BrushListPanel"
description: "BrushListPanel：TaleWorlds.GauntletUI 的 public 类，继承 ListPanel；公开成员 13 个（方法 8、属性 4、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushListPanel.cs。"
---
# BrushListPanel

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class BrushListPanel : ListPanel`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushListPanel.cs`

## 概述

BrushListPanel 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushListPanel.cs。它是一个 public 类，实现/继承 ListPanel，继承链为 BrushListPanel → ListPanel → Container → Widget → PropertyOwnerObject。public/protected 成员共 13 个：8 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BrushListPanel 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 BrushListPanel → ListPanel → Container → Widget → PropertyOwnerObject。成员构成以方法为主（方法 8/13，属性 4/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushListPanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Brush` | `public Brush Brush` | 属性 |
| `ReadOnlyBrush` | `public Brush ReadOnlyBrush` | 属性 |
| `Sprite` | `public new Sprite Sprite` | 属性 |
| `BrushRenderer` | `public BrushRenderer BrushRenderer` | 属性 |
| `BrushListPanel` | `public BrushListPanel(UIContext context) : base(context)` | 构造函数 |
| `UpdateBrushes` | `public override void UpdateBrushes(float dt)` | 方法 |
| `SetState` | `public override void SetState(string stateName)` | 方法 |
| `RefreshState` | `protected override void RefreshState()` | 方法 |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | 方法 |
| `IsBrushUpdateNeeded` | `protected bool IsBrushUpdateNeeded()` | 方法 |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | 方法 |
| `UpdateAnimationPropertiesSubTask` | `public override void UpdateAnimationPropertiesSubTask(float alphaFactor)` | 方法 |
| `OnBrushChanged` | `public virtual void OnBrushChanged()` | 方法 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ListPanel](../ListPanel)
- [同命名空间 AlignmentAxis](../AlignmentAxis)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation)
- [同命名空间 AudioProperty](../AudioProperty)
