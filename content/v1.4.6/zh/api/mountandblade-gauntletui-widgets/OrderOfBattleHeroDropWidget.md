---
title: "OrderOfBattleHeroDropWidget"
description: "OrderOfBattleHeroDropWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ButtonWidget；公开成员 5 个（方法 3、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleHeroDropWidget.cs。"
---
# OrderOfBattleHeroDropWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OrderOfBattleHeroDropWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleHeroDropWidget.cs`

## 概述

OrderOfBattleHeroDropWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleHeroDropWidget.cs。它是一个 public 类，实现/继承 ButtonWidget，继承链为 OrderOfBattleHeroDropWidget → ButtonWidget。public/protected 成员共 5 个：3 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderOfBattleHeroDropWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle），继承链 OrderOfBattleHeroDropWidget → ButtonWidget。成员构成以方法为主（方法 3/5，属性 1/5），对外主要以操作入口暴露。继承链上的 ButtonWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleHeroDropWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderOfBattleHeroDropWidget` | `public OrderOfBattleHeroDropWidget(UIContext context) : base(context)` | 构造函数 |
| `OnPreviewDrop` | `protected override bool OnPreviewDrop()` | 方法 |
| `HandleClick` | `protected override void HandleClick()` | 方法 |
| `OnPreviewDragHover` | `protected override bool OnPreviewDragHover()` | 方法 |
| `FormationClass` | `public int FormationClass` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 OrderOfBattleFormationClassBrushWidget](../OrderOfBattleFormationClassBrushWidget)
- [同命名空间 OrderOfBattleFormationClassContainerWidget](../OrderOfBattleFormationClassContainerWidget)
- [同命名空间 OrderOfBattleFormationClassLockBrushWidget](../OrderOfBattleFormationClassLockBrushWidget)
- [同命名空间 OrderOfBattleFormationFilterVisualBrushWidget](../OrderOfBattleFormationFilterVisualBrushWidget)
