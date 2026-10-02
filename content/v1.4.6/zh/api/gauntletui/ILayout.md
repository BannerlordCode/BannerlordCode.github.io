---
title: "ILayout"
description: "ILayout：TaleWorlds.GauntletUI 的 public 接口；公开成员 2 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/ILayout.cs。"
---
# ILayout

**Namespace:** `TaleWorlds.GauntletUI.Layout`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public interface ILayout`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/ILayout.cs`

## 概述

ILayout 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/ILayout.cs。它是一个 public 接口，继承链为 ILayout。public/protected 成员共 2 个：2 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ILayout 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.Layout），继承链 ILayout。成员构成以方法为主（方法 2/2，属性 0/2），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/ILayout.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MeasureChildren` | `Vector2 MeasureChildren(Widget widget, Vector2 measureSpec, SpriteData spriteData, float renderScale);` | 方法 |
| `OnLayout` | `void OnLayout(Widget widget, float left, float bottom, float right, float top);` | 方法 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DefaultLayout](../DefaultLayout)
- [同命名空间 DragCarrierLayout](../DragCarrierLayout)
- [同命名空间 GridDirection](../GridDirection)
- [同命名空间 GridHorizontalLayoutMethod](../GridHorizontalLayoutMethod)
