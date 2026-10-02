---
title: "MultiplayerItemTabButtonWidget"
description: "MultiplayerItemTabButtonWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ButtonWidget；公开成员 4 个（方法 1、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerItemTabButtonWidget.cs。"
---
# MultiplayerItemTabButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerItemTabButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerItemTabButtonWidget.cs`

## 概述

MultiplayerItemTabButtonWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerItemTabButtonWidget.cs。它是一个 public 类，实现/继承 ButtonWidget，继承链为 MultiplayerItemTabButtonWidget → ButtonWidget。public/protected 成员共 4 个：1 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerItemTabButtonWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer），继承链 MultiplayerItemTabButtonWidget → ButtonWidget。成员构成以属性为主（属性 2/4，方法 1/4），对外主要以状态读取接口暴露。继承链上的 ButtonWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerItemTabButtonWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerItemTabButtonWidget` | `public MultiplayerItemTabButtonWidget(UIContext context) : base(context)` | 构造函数 |
| `RefreshState` | `protected override void RefreshState()` | 方法 |
| `ItemType` | `public string ItemType` | 属性 |
| `IconWidget` | `public BrushWidget IconWidget` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MaterialValueOffsetImageWidget](../MaterialValueOffsetImageWidget)
- [同命名空间 MaterialValueOffsetTextWidget](../MaterialValueOffsetTextWidget)
- [同命名空间 MultiplayerBattleResultColorizedWidget](../MultiplayerBattleResultColorizedWidget)
- [同命名空间 MultiplayerEndOfBattleScreenWidget](../MultiplayerEndOfBattleScreenWidget)
