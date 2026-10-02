---
title: "BoardGameCampaignBehavior"
description: "BoardGameCampaignBehavior：SandBox 的 public 类，继承 CampaignBehaviorBase；公开成员 11 个（方法 10、属性 1、字段 0）。源文件 SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs。"
---
# BoardGameCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class BoardGameCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs`

## 概述

BoardGameCampaignBehavior 位于 SandBox 模块，源文件 SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 BoardGameCampaignBehavior → CampaignBehaviorBase。public/protected 成员共 11 个：10 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BoardGameCampaignBehavior 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.CampaignBehaviors），继承链 BoardGameCampaignBehavior → CampaignBehaviorBase。成员构成以方法为主（方法 10/11，属性 1/11），对外主要以操作入口暴露。继承链上的 CampaignBehaviorBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<Settlement>WonBoardGamesInOneWeekInSettlement` | 属性 |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | 方法 |
| `InitializeConversationVars` | `public void InitializeConversationVars()` | 方法 |
| `OnMissionStarted` | `public void OnMissionStarted(IMission mission)` | 方法 |
| `OnHeroKilled` | `public void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` | 方法 |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter campaignGameStarter)` | 方法 |
| `taverngamehost_player_sitting_now_on_condition` | `public static bool taverngamehost_player_sitting_now_on_condition()` | 方法 |
| `PlayerWonAgainstTavernChampion` | `public void PlayerWonAgainstTavernChampion()` | 方法 |
| `SetBetAmount` | `public void SetBetAmount(int bet)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [同命名空间 ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [同命名空间 BarberCampaignBehavior](../BarberCampaignBehavior)
- [同命名空间 CheckpointCampaignBehavior](../CheckpointCampaignBehavior)
