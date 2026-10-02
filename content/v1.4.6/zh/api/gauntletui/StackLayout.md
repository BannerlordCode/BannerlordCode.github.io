---
title: "StackLayout"
description: "StackLayout：TaleWorlds.GauntletUI 的 public 类，继承 ILayout；公开成员 8 个（方法 5、属性 2、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/StackLayout.cs。"
---
# StackLayout

**Namespace:** `TaleWorlds.GauntletUI.Layout`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class StackLayout : ILayout`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/StackLayout.cs`

## 概述

StackLayout 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/StackLayout.cs。它是一个 public 类，实现/继承 ILayout，继承链为 StackLayout → ILayout。public/protected 成员共 8 个：5 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StackLayout 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.Layout），继承链 StackLayout → ILayout。成员构成以方法为主（方法 5/8，属性 2/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/StackLayout.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultItemDescription` | `public ContainerItemDescription DefaultItemDescription` | 属性 |
| `LayoutMethod` | `public LayoutMethod LayoutMethod` | 属性 |
| `StackLayout` | `public StackLayout()` | 构造函数 |
| `GetItemDescription` | `public ContainerItemDescription GetItemDescription(Widget owner, Widget child, int childIndex)` | 方法 |
| `MeasureChildren` | `public Vector2 MeasureChildren(Widget widget, Vector2 measureSpec, SpriteData spriteData, float renderScale)` | 方法 |
| `OnLayout` | `public void OnLayout(Widget widget, float left, float bottom, float right, float top)` | 方法 |
| `GetIndexForDrop` | `public int GetIndexForDrop(Container widget, Vector2 draggedWidgetPosition)` | 方法 |
| `GetDropGizmoPosition` | `public Vector2 GetDropGizmoPosition(Container widget, Vector2 draggedWidgetPosition)` | 方法 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ILayout](../ILayout)
- [同命名空间 DefaultLayout](../DefaultLayout)
- [同命名空间 DragCarrierLayout](../DragCarrierLayout)
- [同命名空间 GridDirection](../GridDirection)
- [同命名空间 GridHorizontalLayoutMethod](../GridHorizontalLayoutMethod)
