---
title: "TournamentCampaignBehavior"
description: "TournamentCampaignBehavior：TaleWorlds.CampaignSystem.TournamentGames 的 public 类，继承 CampaignBehaviorBase；公开成员 6 个（方法 6、属性 0、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/TournamentGames/TournamentCampaignBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TournamentCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentCampaignBehavior.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

TournamentCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/TournamentGames/TournamentCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 TournamentCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentCampaignBehavior 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.TournamentGames`，继承链 TournamentCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/TournamentGames/TournamentCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | 方法 |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter campaignGameSystemStarter)` | 方法 |
| `AddGameMenus` | `protected void AddGameMenus(CampaignGameStarter campaignGameSystemStarter)` | 方法 |
| `game_menu_ui_town_arena_see_leaderboard_on_consequence` | `public static void game_menu_ui_town_arena_see_leaderboard_on_consequence(MenuCallbackArgs args)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CampaignBehaviorBase](../CampaignBehaviorBase/)
- [同命名空间 FightTournamentGame](../FightTournamentGame/)
- [同命名空间 ITournamentManager](../ITournamentManager/)
- [同命名空间 TournamentGame](../TournamentGame/)
- [同命名空间 TournamentManager](../TournamentManager/)
