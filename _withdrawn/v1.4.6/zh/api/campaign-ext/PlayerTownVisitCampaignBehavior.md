---
title: "PlayerTownVisitCampaignBehavior"
description: "PlayerTownVisitCampaignBehavior：TaleWorlds.CampaignSystem.CampaignBehaviors 的 public 类，继承 CampaignBehaviorBase；公开成员 23 个（方法 23、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/PlayerTownVisitCampaignBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerTownVisitCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PlayerTownVisitCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/PlayerTownVisitCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## 概述

PlayerTownVisitCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/PlayerTownVisitCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 PlayerTownVisitCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 23 个：23 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PlayerTownVisitCampaignBehavior 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`），命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors`，继承链 PlayerTownVisitCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 23/23，属性 0/23），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/PlayerTownVisitCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `AddGameMenus` | `protected void AddGameMenus(CampaignGameStarter campaignGameSystemStarter)` | 方法 |
| `wait_menu_prisoner_wait_on_init` | `public static void wait_menu_prisoner_wait_on_init(MenuCallbackArgs args)` | 方法 |
| `wait_menu_prisoner_settlement_wait_ui_on_init` | `public static void wait_menu_prisoner_settlement_wait_ui_on_init(MenuCallbackArgs args)` | 方法 |
| `wait_menu_prisoner_wait_on_condition` | `public static bool wait_menu_prisoner_wait_on_condition(MenuCallbackArgs args)` | 方法 |
| `wait_menu_prisoner_wait_on_tick` | `public static void wait_menu_prisoner_wait_on_tick(MenuCallbackArgs args, CampaignTime dt)` | 方法 |
| `wait_menu_settlement_wait_on_tick` | `public static void wait_menu_settlement_wait_on_tick(MenuCallbackArgs args, CampaignTime dt)` | 方法 |
| `game_menu_town_manage_town_on_condition` | `public static bool game_menu_town_manage_town_on_condition(MenuCallbackArgs args)` | 方法 |
| `game_menu_town_manage_town_cheat_on_condition` | `public static bool game_menu_town_manage_town_cheat_on_condition(MenuCallbackArgs args)` | 方法 |
| `settlement_player_unconscious_continue_on_consequence` | `public static void settlement_player_unconscious_continue_on_consequence(MenuCallbackArgs args)` | 方法 |
| `game_menu_town_menu_on_init` | `public static void game_menu_town_menu_on_init(MenuCallbackArgs args)` | 方法 |
| `game_menu_town_menu_arena_on_init` | `public static void game_menu_town_menu_arena_on_init(MenuCallbackArgs args)` | 方法 |
| `game_menu_village_menu_on_init` | `public static void game_menu_village_menu_on_init(MenuCallbackArgs args)` | 方法 |
| `game_menu_town_menu_keep_on_init` | `public static void game_menu_town_menu_keep_on_init(MenuCallbackArgs args)` | 方法 |
| `game_menu_ui_town_manage_town_on_consequence` | `public static void game_menu_ui_town_manage_town_on_consequence(MenuCallbackArgs args)` | 方法 |
| `game_menu_ui_town_castle_manage_town_on_consequence` | `public static void game_menu_ui_town_castle_manage_town_on_consequence(MenuCallbackArgs args)` | 方法 |
| `game_menu_town_menu_backstreet_sound_on_init` | `public static void game_menu_town_menu_backstreet_sound_on_init(MenuCallbackArgs args)` | 方法 |
| `game_menu_town_menu_keep_sound_on_init` | `public static void game_menu_town_menu_keep_sound_on_init(MenuCallbackArgs args)` | 方法 |
| `game_menu_town_menu_sound_on_init` | `public static void game_menu_town_menu_sound_on_init(MenuCallbackArgs args)` | 方法 |
| `game_menu_town_menu_enter_sound_on_init` | `public static void game_menu_town_menu_enter_sound_on_init(MenuCallbackArgs args)` | 方法 |
| `game_menu_village_menu_sound_on_init` | `public static void game_menu_village_menu_sound_on_init(MenuCallbackArgs args)` | 方法 |
| `game_menu_village__enter_menu_sound_on_init` | `public static void game_menu_village__enter_menu_sound_on_init(MenuCallbackArgs args)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CampaignBehaviorBase](../../campaign/CampaignBehaviorBase/)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior/)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
