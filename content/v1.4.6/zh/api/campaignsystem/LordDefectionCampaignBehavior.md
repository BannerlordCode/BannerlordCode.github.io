---
title: "LordDefectionCampaignBehavior"
description: "LordDefectionCampaignBehavior：TaleWorlds.CampaignSystem 的 public 类，继承 CampaignBehaviorBase；公开成员 17 个（方法 14、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/LordDefectionCampaignBehavior.cs。"
---
# LordDefectionCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class LordDefectionCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/LordDefectionCampaignBehavior.cs`

## 概述

LordDefectionCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/LordDefectionCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 LordDefectionCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 17 个：14 方法、1 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LordDefectionCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 LordDefectionCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 14/17，属性 1/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/LordDefectionCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LordDefectionCampaignBehavior` | `public LordDefectionCampaignBehavior()` | 构造函数 |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | 方法 |
| `ClearPersuasion` | `public void ClearPersuasion()` | 方法 |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter starter)` | 方法 |
| `conversation_lord_player_has_failed_in_defection_on_condition` | `public bool conversation_lord_player_has_failed_in_defection_on_condition()` | 方法 |
| `conversation_lord_recruit_check_if_reservations_met_on_condition` | `public bool conversation_lord_recruit_check_if_reservations_met_on_condition()` | 方法 |
| `conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition` | `public bool conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition()` | 方法 |
| `conversation_lord_defect_to_clan_without_barter_on_consequence` | `public void conversation_lord_defect_to_clan_without_barter_on_consequence()` | 方法 |
| `conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition` | `public bool conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition()` | 方法 |
| `conversation_player_is_asking_to_recruit_enemy_on_condition` | `public bool conversation_player_is_asking_to_recruit_enemy_on_condition()` | 方法 |
| `conversation_player_is_asking_to_recruit_neutral_on_condition` | `public bool conversation_player_is_asking_to_recruit_neutral_on_condition()` | 方法 |
| `conversation_lord_from_ruling_clan_on_condition` | `public bool conversation_lord_from_ruling_clan_on_condition()` | 方法 |
| `conversation_lord_redirects_to_clan_leader_on_condition` | `public bool conversation_lord_redirects_to_clan_leader_on_condition()` | 方法 |
| `SaveableTypeDefiner` | `public class LordDefectionCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | 属性 |
| `SaveableTypeDefiner` | `public class LordDefectionCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
