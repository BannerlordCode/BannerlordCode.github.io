---
title: "RundownLineWidget"
description: "RundownLineWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip 的 public 类，继承 ListPanel；公开成员 5 个（方法 1、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownLineWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RundownLineWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class RundownLineWidget : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownLineWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

RundownLineWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownLineWidget.cs。它是一个 public 类，实现/继承 ListPanel，继承链为 RundownLineWidget → ListPanel → Container → Widget → PropertyOwnerObject。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RundownLineWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip`，继承链 RundownLineWidget → ListPanel → Container → Widget → PropertyOwnerObject。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownLineWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NameTextWidget` | `public TextWidget NameTextWidget` | 属性 |
| `ValueTextWidget` | `public TextWidget ValueTextWidget` | 属性 |
| `Value` | `public float Value` | 属性 |
| `RundownLineWidget` | `public RundownLineWidget(UIContext context) : base(context)` | 构造函数 |
| `RefreshValueOffset` | `public void RefreshValueOffset(float columnWidth)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ListPanel](../../gui/ListPanel/)
- [同命名空间 RundownColumnDividerCollectionWidget](../RundownColumnDividerCollectionWidget/)
- [同命名空间 RundownTooltipWidget](../RundownTooltipWidget/)
