---
title: "SettlementNameplateItemWidget"
description: "SettlementNameplateItemWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 13 个（方法 1、属性 11、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateItemWidget.cs。"
---
# SettlementNameplateItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SettlementNameplateItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateItemWidget.cs`

## 概述

SettlementNameplateItemWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateItemWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 SettlementNameplateItemWidget → Widget。public/protected 成员共 13 个：1 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementNameplateItemWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate），继承链 SettlementNameplateItemWidget → Widget。成员构成以属性为主（属性 11/13，方法 1/13），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateItemWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementNameplateItemWidget` | `public SettlementNameplateItemWidget(UIContext context) : base(context)` | 构造函数 |
| `IsOverWidget` | `public bool IsOverWidget` | 属性 |
| `QuestType` | `public int QuestType` | 属性 |
| `IssueType` | `public int IssueType` | 属性 |
| `ParallelUpdate` | `public void ParallelUpdate(float dt)` | 方法 |
| `InspectedIconWidget` | `public Widget InspectedIconWidget` | 属性 |
| `PortIconWidget` | `public Widget PortIconWidget` | 属性 |
| `SettlementPartiesGridWidget` | `public GridWidget SettlementPartiesGridWidget` | 属性 |
| `MapEventVisualWidget` | `public MapEventVisualBrushWidget MapEventVisualWidget` | 属性 |
| `WidgetToShow` | `public Widget WidgetToShow` | 属性 |
| `SettlementBannerWidget` | `public MaskedTextureWidget SettlementBannerWidget` | 属性 |
| `SettlementNameTextWidget` | `public TextWidget SettlementNameTextWidget` | 属性 |
| `ParleyIconWidget` | `public Widget ParleyIconWidget` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 PartyNameplateWidget](../PartyNameplateWidget)
- [同命名空间 PartyPlayerNameplateWidget](../PartyPlayerNameplateWidget)
- [同命名空间 SettlementNameplateEventVisualBrushWidget](../SettlementNameplateEventVisualBrushWidget)
- [同命名空间 SettlementNameplateManagerWidget](../SettlementNameplateManagerWidget)
