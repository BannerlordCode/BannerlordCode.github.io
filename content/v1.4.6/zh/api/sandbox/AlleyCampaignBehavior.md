---
title: "AlleyCampaignBehavior"
description: "AlleyCampaignBehavior：SandBox 的 public 类，继承 CampaignBehaviorBase、IAlleyCampaignBehavior；公开成员 18 个（方法 16、属性 1、字段 0）。源文件 SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs。"
---
# AlleyCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class AlleyCampaignBehavior : CampaignBehaviorBase, IAlleyCampaignBehavior, ICampaignBehavior`
**File:** `SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs`

## 概述

AlleyCampaignBehavior 位于 SandBox 模块，源文件 SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase、IAlleyCampaignBehavior、ICampaignBehavior，继承链为 AlleyCampaignBehavior → CampaignBehaviorBase。public/protected 成员共 18 个：16 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AlleyCampaignBehavior 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.CampaignBehaviors），继承链 AlleyCampaignBehavior → CampaignBehaviorBase。成员构成以方法为主（方法 16/18，属性 1/18），对外主要以操作入口暴露。继承链上的 CampaignBehaviorBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | 方法 |
| `AddGameMenus` | `protected void AddGameMenus(CampaignGameStarter campaignGameSystemStarter)` | 方法 |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter campaignGameStarter)` | 方法 |
| `GetIsPlayerAlleyUnderAttack` | `public bool GetIsPlayerAlleyUnderAttack(Alley alley)` | 方法 |
| `GetPlayerOwnedAlleyTroopCount` | `public int GetPlayerOwnedAlleyTroopCount(Alley alley)` | 方法 |
| `GetResponseTimeLeftForAttackInDays` | `public int GetResponseTimeLeftForAttackInDays(Alley alley)` | 方法 |
| `AbandonAlleyFromClanMenu` | `public void AbandonAlleyFromClanMenu(Alley alley)` | 方法 |
| `IsHeroAlleyLeaderOfAnyPlayerAlley` | `public bool IsHeroAlleyLeaderOfAnyPlayerAlley(Hero hero)` | 方法 |
| `List` | `public List<Hero>GetAllAssignedClanMembersForOwnedAlleys()` | 方法 |
| `ChangeAlleyMember` | `public void ChangeAlleyMember(Alley alley, Hero newAlleyLead)` | 方法 |
| `OnPlayerRetreatedFromMission` | `public void OnPlayerRetreatedFromMission()` | 方法 |
| `OnPlayerDiedInMission` | `public void OnPlayerDiedInMission()` | 方法 |
| `GetAssignedClanMemberOfAlley` | `public Hero GetAssignedClanMemberOfAlley(Alley alley)` | 方法 |
| `alley_related_menu_on_init` | `public static void alley_related_menu_on_init(MenuCallbackArgs args)` | 方法 |
| `SaveableTypeDefiner` | `public class AlleyCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | 属性 |
| `SaveableTypeDefiner` | `public class AlleyCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | 嵌套类型 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [同命名空间 BarberCampaignBehavior](../BarberCampaignBehavior)
- [同命名空间 BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
- [同命名空间 CheckpointCampaignBehavior](../CheckpointCampaignBehavior)
