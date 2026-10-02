---
title: "EncounterGameMenuBehavior"
description: "EncounterGameMenuBehavior：TaleWorlds.CampaignSystem 的 public 类，继承 CampaignBehaviorBase；公开成员 18 个（方法 18、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/EncounterGameMenuBehavior.cs。"
---
# EncounterGameMenuBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class EncounterGameMenuBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/EncounterGameMenuBehavior.cs`

## 概述

EncounterGameMenuBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/EncounterGameMenuBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 EncounterGameMenuBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 18 个：18 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncounterGameMenuBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 EncounterGameMenuBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 18/18，属性 0/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/EncounterGameMenuBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `AddCurrentSettlementAsAlreadySneakedIn` | `public void AddCurrentSettlementAsAlreadySneakedIn()` | 方法 |
| `game_menu_captivity_taken_prisoner_cheat_on_consequence` | `public static void game_menu_captivity_taken_prisoner_cheat_on_consequence(MenuCallbackArgs args)` | 方法 |
| `game_menu_captivity_castle_taken_prisoner_cont_on_condition` | `public static bool game_menu_captivity_castle_taken_prisoner_cont_on_condition(MenuCallbackArgs args)` | 方法 |
| `menu_sneak_into_town_succeeded_continue_on_consequence` | `public static void menu_sneak_into_town_succeeded_continue_on_consequence(MenuCallbackArgs args)` | 方法 |
| `menu_sneak_into_town_succeeded_continue_on_condition` | `public static bool menu_sneak_into_town_succeeded_continue_on_condition(MenuCallbackArgs args)` | 方法 |
| `game_menu_sneak_into_town_caught_on_init` | `public static void game_menu_sneak_into_town_caught_on_init(MenuCallbackArgs args)` | 方法 |
| `mno_sneak_caught_surrender_on_consequence` | `public static void mno_sneak_caught_surrender_on_consequence(MenuCallbackArgs args)` | 方法 |
| `mno_sneak_caught_surrender_on_condition` | `public static bool mno_sneak_caught_surrender_on_condition(MenuCallbackArgs args)` | 方法 |
| `game_menu_captivity_taken_prisoner_cheat_on_condition` | `public static bool game_menu_captivity_taken_prisoner_cheat_on_condition(MenuCallbackArgs args)` | 方法 |
| `game_menu_captivity_castle_taken_prisoner_cont_on_consequence` | `public static void game_menu_captivity_castle_taken_prisoner_cont_on_consequence(MenuCallbackArgs args)` | 方法 |
| `game_request_entry_to_castle_approved_continue_on_consequence` | `public static void game_request_entry_to_castle_approved_continue_on_consequence(MenuCallbackArgs args)` | 方法 |
| `game_request_entry_to_castle_approved_continue_on_condition` | `public static bool game_request_entry_to_castle_approved_continue_on_condition(MenuCallbackArgs args)` | 方法 |
| `game_request_entry_to_castle_rejected_continue_on_consequence` | `public static void game_request_entry_to_castle_rejected_continue_on_consequence(MenuCallbackArgs args)` | 方法 |
| `menu_castle_entry_denied_on_init` | `public static void menu_castle_entry_denied_on_init(MenuCallbackArgs args)` | 方法 |
| `game_menu_castle_menu_sound_on_init` | `public static void game_menu_castle_menu_sound_on_init(MenuCallbackArgs args)` | 方法 |
| `game_menu_encounter_naval_disengaged_init` | `public static void game_menu_encounter_naval_disengaged_init(MenuCallbackArgs args)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
