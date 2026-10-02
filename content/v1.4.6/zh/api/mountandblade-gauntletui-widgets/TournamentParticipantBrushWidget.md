---
title: "TournamentParticipantBrushWidget"
description: "TournamentParticipantBrushWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 BrushWidget；公开成员 12 个（方法 4、属性 7、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentParticipantBrushWidget.cs。"
---
# TournamentParticipantBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TournamentParticipantBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentParticipantBrushWidget.cs`

## 概述

TournamentParticipantBrushWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentParticipantBrushWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 TournamentParticipantBrushWidget → BrushWidget。public/protected 成员共 12 个：4 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentParticipantBrushWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament），继承链 TournamentParticipantBrushWidget → BrushWidget。成员构成以属性为主（属性 7/12，方法 4/12），对外主要以状态读取接口暴露。继承链上的 BrushWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentParticipantBrushWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TournamentParticipantBrushWidget` | `public TournamentParticipantBrushWidget(UIContext context) : base(context)` | 构造函数 |
| `OnMousePressed` | `protected override void OnMousePressed()` | 方法 |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | 方法 |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `NameTextWidget` | `public TextWidget NameTextWidget` | 属性 |
| `MatchState` | `public int MatchState` | 属性 |
| `IsDead` | `public bool IsDead` | 属性 |
| `IsMainHero` | `public bool IsMainHero` | 属性 |
| `MainHeroTextBrush` | `public Brush MainHeroTextBrush` | 属性 |
| `NormalTextBrush` | `public Brush NormalTextBrush` | 属性 |
| `OnMission` | `public bool OnMission` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 TournamentMatchWidget](../TournamentMatchWidget)
- [同命名空间 TournamentScreenWidget](../TournamentScreenWidget)
