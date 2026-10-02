---
title: "TournamentScreenWidget"
description: "TournamentScreenWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 9 个（方法 1、属性 7、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentScreenWidget.cs。"
---
# TournamentScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TournamentScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentScreenWidget.cs`

## 概述

TournamentScreenWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentScreenWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 TournamentScreenWidget → Widget。public/protected 成员共 9 个：1 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentScreenWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament），继承链 TournamentScreenWidget → Widget。成员构成以属性为主（属性 7/9，方法 1/9），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentScreenWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TournamentScreenWidget` | `public TournamentScreenWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `IsOver` | `public bool IsOver` | 属性 |
| `FlagsSuccess` | `public DelayedStateChanger FlagsSuccess` | 属性 |
| `ShieldStateChanger` | `public DelayedStateChanger ShieldStateChanger` | 属性 |
| `WinnerTextContainer1` | `public DelayedStateChanger WinnerTextContainer1` | 属性 |
| `CharacterContainer` | `public DelayedStateChanger CharacterContainer` | 属性 |
| `RewardsContainer` | `public DelayedStateChanger RewardsContainer` | 属性 |
| `ScoreboardBattleRewardsWidget` | `public ScoreboardBattleRewardsWidget ScoreboardBattleRewardsWidget` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 TournamentMatchWidget](../TournamentMatchWidget)
- [同命名空间 TournamentParticipantBrushWidget](../TournamentParticipantBrushWidget)
