---
title: "PropertyBasedTooltipWidget"
description: "PropertyBasedTooltipWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 TooltipWidget；公开成员 12 个（方法 2、属性 9、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/PropertyBasedTooltipWidget.cs。"
---
# PropertyBasedTooltipWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PropertyBasedTooltipWidget : TooltipWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/PropertyBasedTooltipWidget.cs`

## 概述

PropertyBasedTooltipWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/PropertyBasedTooltipWidget.cs。它是一个 public 类，实现/继承 TooltipWidget，继承链为 PropertyBasedTooltipWidget → TooltipWidget。public/protected 成员共 12 个：2 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PropertyBasedTooltipWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information），继承链 PropertyBasedTooltipWidget → TooltipWidget。成员构成以属性为主（属性 9/12，方法 2/12），对外主要以状态读取接口暴露。继承链上的 TooltipWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/PropertyBasedTooltipWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AllyColor` | `public Color AllyColor` | 属性 |
| `EnemyColor` | `public Color EnemyColor` | 属性 |
| `NeutralColor` | `public Color NeutralColor` | 属性 |
| `PropertyListBackground` | `public Widget PropertyListBackground` | 属性 |
| `PropertyList` | `public ListPanel PropertyList` | 属性 |
| `PropertyBasedTooltipWidget` | `public PropertyBasedTooltipWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `Mode` | `public int Mode` | 属性 |
| `NeutralTroopsTextBrush` | `public Brush NeutralTroopsTextBrush` | 属性 |
| `EnemyTroopsTextBrush` | `public Brush EnemyTroopsTextBrush` | 属性 |
| `AllyTroopsTextBrush` | `public Brush AllyTroopsTextBrush` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GameNotificationWidget](../GameNotificationWidget)
- [同命名空间 MultiSelectionElementsWidget](../MultiSelectionElementsWidget)
- [同命名空间 TooltipPropertyWidget](../TooltipPropertyWidget)
