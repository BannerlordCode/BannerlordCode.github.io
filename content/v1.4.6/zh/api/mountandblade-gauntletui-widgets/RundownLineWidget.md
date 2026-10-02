---
title: "RundownLineWidget"
description: "RundownLineWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ListPanel；公开成员 5 个（方法 1、属性 3、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownLineWidget.cs。"
---
# RundownLineWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class RundownLineWidget : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownLineWidget.cs`

## 概述

RundownLineWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownLineWidget.cs。它是一个 public 类，实现/继承 ListPanel，继承链为 RundownLineWidget → ListPanel。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RundownLineWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip），继承链 RundownLineWidget → ListPanel。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。继承链上的 ListPanel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownLineWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NameTextWidget` | `public TextWidget NameTextWidget` | 属性 |
| `ValueTextWidget` | `public TextWidget ValueTextWidget` | 属性 |
| `Value` | `public float Value` | 属性 |
| `RundownLineWidget` | `public RundownLineWidget(UIContext context) : base(context)` | 构造函数 |
| `RefreshValueOffset` | `public void RefreshValueOffset(float columnWidth)` | 方法 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 RundownColumnDividerCollectionWidget](../RundownColumnDividerCollectionWidget)
- [同命名空间 RundownTooltipWidget](../RundownTooltipWidget)
