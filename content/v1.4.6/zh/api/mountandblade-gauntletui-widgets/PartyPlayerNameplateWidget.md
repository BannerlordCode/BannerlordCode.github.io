---
title: "PartyPlayerNameplateWidget"
description: "PartyPlayerNameplateWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 PartyNameplateWidget；公开成员 5 个（方法 2、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyPlayerNameplateWidget.cs。"
---
# PartyPlayerNameplateWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyPlayerNameplateWidget : PartyNameplateWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyPlayerNameplateWidget.cs`

## 概述

PartyPlayerNameplateWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyPlayerNameplateWidget.cs。它是一个 public 类，实现/继承 PartyNameplateWidget，继承链为 PartyPlayerNameplateWidget → PartyNameplateWidget → Widget。public/protected 成员共 5 个：2 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyPlayerNameplateWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate），继承链 PartyPlayerNameplateWidget → PartyNameplateWidget → Widget。成员构成以方法为主（方法 2/5，属性 2/5），对外主要以操作入口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyPlayerNameplateWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyPlayerNameplateWidget` | `public PartyPlayerNameplateWidget(UIContext context) : base(context)` | 构造函数 |
| `UpdateNameplatesVisibility` | `protected override void UpdateNameplatesVisibility(float dt)` | 方法 |
| `UpdateNameplatesScreenPosition` | `protected override void UpdateNameplatesScreenPosition()` | 方法 |
| `IsPrisoner` | `public bool IsPrisoner` | 属性 |
| `MainPartyArrowWidget` | `public Widget MainPartyArrowWidget` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 PartyNameplateWidget](../PartyNameplateWidget)
- [同命名空间 PartyNameplateWidget](../PartyNameplateWidget)
- [同命名空间 SettlementNameplateEventVisualBrushWidget](../SettlementNameplateEventVisualBrushWidget)
- [同命名空间 SettlementNameplateItemWidget](../SettlementNameplateItemWidget)
- [同命名空间 SettlementNameplateManagerWidget](../SettlementNameplateManagerWidget)
