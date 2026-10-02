---
title: "ScoreboardGainedSkillsListPanel"
description: "ScoreboardGainedSkillsListPanel：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ListPanel；公开成员 3 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardGainedSkillsListPanel.cs。"
---
# ScoreboardGainedSkillsListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ScoreboardGainedSkillsListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardGainedSkillsListPanel.cs`

## 概述

ScoreboardGainedSkillsListPanel 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardGainedSkillsListPanel.cs。它是一个 public 类，实现/继承 ListPanel，继承链为 ScoreboardGainedSkillsListPanel → ListPanel。public/protected 成员共 3 个：2 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ScoreboardGainedSkillsListPanel 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard），继承链 ScoreboardGainedSkillsListPanel → ListPanel。成员构成以方法为主（方法 2/3，属性 0/3），对外主要以操作入口暴露。继承链上的 ListPanel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardGainedSkillsListPanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ScoreboardGainedSkillsListPanel` | `public ScoreboardGainedSkillsListPanel(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `SetCurrentUnit` | `public void SetCurrentUnit(ScoreboardSkillItemHoverToggleWidget unit)` | 方法 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ScoreboardBattleResultTitleBackgroundWidget](../ScoreboardBattleResultTitleBackgroundWidget)
- [同命名空间 ScoreboardBattleRewardsWidget](../ScoreboardBattleRewardsWidget)
- [同命名空间 ScoreboardScreenWidget](../ScoreboardScreenWidget)
- [同命名空间 ScoreboardShipsNavigatableGridWidget](../ScoreboardShipsNavigatableGridWidget)
