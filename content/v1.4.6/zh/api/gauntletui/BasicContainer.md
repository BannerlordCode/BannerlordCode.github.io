---
title: "BasicContainer"
description: "BasicContainer：TaleWorlds.GauntletUI 的 public 类，继承 Container；公开成员 6 个（方法 3、属性 2、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BasicContainer.cs。"
---
# BasicContainer

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class BasicContainer : Container`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BasicContainer.cs`

## 概述

BasicContainer 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BasicContainer.cs。它是一个 public 类，实现/继承 Container，继承链为 BasicContainer → Container → Widget → PropertyOwnerObject。public/protected 成员共 6 个：3 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BasicContainer 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.BaseTypes），继承链 BasicContainer → Container → Widget → PropertyOwnerObject。成员构成以方法为主（方法 3/6，属性 2/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BasicContainer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BasicContainer` | `public BasicContainer(UIContext context) : base(context)` | 构造函数 |
| `Predicate` | `public override Predicate<Widget>AcceptDropPredicate` | 属性 |
| `GetDropGizmoPosition` | `public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)` | 方法 |
| `GetIndexForDrop` | `public override int GetIndexForDrop(Vector2 draggedWidgetPosition)` | 方法 |
| `IsDragHovering` | `public override bool IsDragHovering` | 属性 |
| `OnChildSelected` | `public override void OnChildSelected(Widget widget)` | 方法 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 Container](../Container)
- [同命名空间 BrushWidget](../BrushWidget)
- [同命名空间 ButtonType](../ButtonType)
- [同命名空间 ButtonWidget](../ButtonWidget)
- [同命名空间 Container](../Container)
