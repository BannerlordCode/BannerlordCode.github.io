---
title: "IMenuContextHandler"
description: "IMenuContextHandler：TaleWorlds.CampaignSystem 的 public 接口；公开成员 11 个（方法 11、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/GameState/IMenuContextHandler.cs。"
---
# IMenuContextHandler

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMenuContextHandler`
**File:** `TaleWorlds.CampaignSystem/GameState/IMenuContextHandler.cs`

## 概述

IMenuContextHandler 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameState/IMenuContextHandler.cs。它是一个 public 接口，继承链为 IMenuContextHandler。public/protected 成员共 11 个：11 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IMenuContextHandler 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameState），继承链 IMenuContextHandler。成员构成以方法为主（方法 11/11，属性 0/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameState/IMenuContextHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnBackgroundMeshNameSet` | `void OnBackgroundMeshNameSet(string name);` | 方法 |
| `OnOpenTownManagement` | `void OnOpenTownManagement();` | 方法 |
| `OnOpenRecruitVolunteers` | `void OnOpenRecruitVolunteers();` | 方法 |
| `OnOpenTournamentLeaderboard` | `void OnOpenTournamentLeaderboard();` | 方法 |
| `OnOpenTroopSelection` | `void OnOpenTroopSelection(TroopRoster fullRoster, TroopRoster initialSelections, List<Ship>eligibleShips, Func<CharacterObject, bool>canChangeStatusOfTroop, Action<TroopRoster>onDone, int maxSelectableTroopCount, int minSelectableTroopCount, bool isNavalRaid);` | 方法 |
| `OnMenuCreate` | `void OnMenuCreate();` | 方法 |
| `OnMenuActivate` | `void OnMenuActivate();` | 方法 |
| `OnMenuRefresh` | `void OnMenuRefresh();` | 方法 |
| `OnHourlyTick` | `void OnHourlyTick();` | 方法 |
| `OnPanelSoundIDSet` | `void OnPanelSoundIDSet(string panelSoundID);` | 方法 |
| `OnAmbientSoundIDSet` | `void OnAmbientSoundIDSet(string ambientSoundID);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerEditorState](../BannerEditorState)
- [同命名空间 BarberState](../BarberState)
- [同命名空间 CharacterDeveloperState](../CharacterDeveloperState)
- [同命名空间 ClanState](../ClanState)
