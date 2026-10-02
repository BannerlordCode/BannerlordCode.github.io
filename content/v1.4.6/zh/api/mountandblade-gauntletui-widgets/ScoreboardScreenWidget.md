---
title: "ScoreboardScreenWidget"
description: "ScoreboardScreenWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 24 个（方法 1、属性 22、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardScreenWidget.cs。"
---
# ScoreboardScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ScoreboardScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardScreenWidget.cs`

## 概述

ScoreboardScreenWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardScreenWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 ScoreboardScreenWidget → Widget。public/protected 成员共 24 个：1 方法、22 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ScoreboardScreenWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard），继承链 ScoreboardScreenWidget → Widget。成员构成以属性为主（属性 22/24，方法 1/24），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardScreenWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ScoreboardScreenWidget` | `public ScoreboardScreenWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `ShowScoreboard` | `public bool ShowScoreboard` | 属性 |
| `IsOver` | `public bool IsOver` | 属性 |
| `BattleResult` | `public int BattleResult` | 属性 |
| `IsMainCharacterDead` | `public bool IsMainCharacterDead` | 属性 |
| `IsSimulation` | `public bool IsSimulation` | 属性 |
| `IsMouseEnabled` | `public bool IsMouseEnabled` | 属性 |
| `ScrollablePanel` | `public ScrollablePanel ScrollablePanel` | 属性 |
| `ScrollGradient` | `public Widget ScrollGradient` | 属性 |
| `ControlButtonsPanel` | `public Widget ControlButtonsPanel` | 属性 |
| `InputKeysPanel` | `public ListPanel InputKeysPanel` | 属性 |
| `ShowMouseIconWidget` | `public Widget ShowMouseIconWidget` | 属性 |
| `FastForwardWidget` | `public Widget FastForwardWidget` | 属性 |
| `QuitButton` | `public ButtonWidget QuitButton` | 属性 |
| `ShowScoreboardToggle` | `public ButtonWidget ShowScoreboardToggle` | 属性 |
| `BattleRewardsWidget` | `public ScoreboardBattleRewardsWidget BattleRewardsWidget` | 属性 |
| `FlagsSuccess` | `public DelayedStateChanger FlagsSuccess` | 属性 |
| `FlagsRetreat` | `public DelayedStateChanger FlagsRetreat` | 属性 |
| `FlagsDefeat` | `public DelayedStateChanger FlagsDefeat` | 属性 |
| `ShieldStateChanger` | `public DelayedStateChanger ShieldStateChanger` | 属性 |
| `ShipsStateChanger` | `public DelayedStateChanger ShipsStateChanger` | 属性 |
| `TitleStateChanger` | `public DelayedStateChanger TitleStateChanger` | 属性 |
| `TitleBackgroundStateChanger` | `public DelayedStateChanger TitleBackgroundStateChanger` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ScoreboardBattleResultTitleBackgroundWidget](../ScoreboardBattleResultTitleBackgroundWidget)
- [同命名空间 ScoreboardBattleRewardsWidget](../ScoreboardBattleRewardsWidget)
- [同命名空间 ScoreboardGainedSkillsListPanel](../ScoreboardGainedSkillsListPanel)
- [同命名空间 ScoreboardShipsNavigatableGridWidget](../ScoreboardShipsNavigatableGridWidget)
