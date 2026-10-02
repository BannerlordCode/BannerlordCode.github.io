---
title: "ScoreboardGainedSkillsListPanel"
description: "ScoreboardGainedSkillsListPanel：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard 的 public 类，继承 ListPanel；公开成员 3 个（方法 2、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardGainedSkillsListPanel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ScoreboardGainedSkillsListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ScoreboardGainedSkillsListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardGainedSkillsListPanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ScoreboardGainedSkillsListPanel 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardGainedSkillsListPanel.cs。它是一个 public 类，实现/继承 ListPanel，继承链为 ScoreboardGainedSkillsListPanel → ListPanel → Container → Widget → PropertyOwnerObject。public/protected 成员共 3 个：2 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ScoreboardGainedSkillsListPanel 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard`，继承链 ScoreboardGainedSkillsListPanel → ListPanel → Container → Widget → PropertyOwnerObject。成员构成以方法为主（方法 2/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardGainedSkillsListPanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ScoreboardGainedSkillsListPanel` | `public ScoreboardGainedSkillsListPanel(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `SetCurrentUnit` | `public void SetCurrentUnit(ScoreboardSkillItemHoverToggleWidget unit)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ListPanel](../../gui/ListPanel/)
- [同命名空间 ScoreboardBattleResultTitleBackgroundWidget](../ScoreboardBattleResultTitleBackgroundWidget/)
- [同命名空间 ScoreboardBattleRewardsWidget](../ScoreboardBattleRewardsWidget/)
- [同命名空间 ScoreboardScreenWidget](../ScoreboardScreenWidget/)
- [同命名空间 ScoreboardShipsNavigatableGridWidget](../ScoreboardShipsNavigatableGridWidget/)
