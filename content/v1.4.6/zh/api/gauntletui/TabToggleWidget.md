---
title: "TabToggleWidget"
description: "TabToggleWidget：TaleWorlds.GauntletUI 的 public 类，继承 ButtonWidget；公开成员 5 个（方法 2、属性 2、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabToggleWidget.cs。"
---
# TabToggleWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class TabToggleWidget : ButtonWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabToggleWidget.cs`

## 概述

TabToggleWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabToggleWidget.cs。它是一个 public 类，实现/继承 ButtonWidget，继承链为 TabToggleWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 5 个：2 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TabToggleWidget 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.BaseTypes），继承链 TabToggleWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以方法为主（方法 2/5，属性 2/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabToggleWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TabControlWidget` | `public TabControl TabControlWidget` | 属性 |
| `TabToggleWidget` | `public TabToggleWidget(UIContext context) : base(context)` | 构造函数 |
| `HandleClick` | `protected override void HandleClick()` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `TabName` | `public string TabName` | 属性 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ButtonWidget](../ButtonWidget)
- [同命名空间 BasicContainer](../BasicContainer)
- [同命名空间 BrushWidget](../BrushWidget)
- [同命名空间 ButtonType](../ButtonType)
- [同命名空间 ButtonWidget](../ButtonWidget)
