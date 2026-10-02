---
title: "PlayerTownVisitCampaignBehavior"
description: "PlayerTownVisitCampaignBehavior: a public class in TaleWorlds.CampaignSystem.CampaignBehaviors, inheriting CampaignBehaviorBase; 23 exposed members (23 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/PlayerTownVisitCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerTownVisitCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PlayerTownVisitCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/PlayerTownVisitCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

PlayerTownVisitCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/PlayerTownVisitCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is PlayerTownVisitCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 23 public/protected members: 23 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerTownVisitCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain PlayerTownVisitCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 23/23, properties 0/23), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/PlayerTownVisitCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `AddGameMenus` | `protected void AddGameMenus(CampaignGameStarter campaignGameSystemStarter)` | method |
| `wait_menu_prisoner_wait_on_init` | `public static void wait_menu_prisoner_wait_on_init(MenuCallbackArgs args)` | method |
| `wait_menu_prisoner_settlement_wait_ui_on_init` | `public static void wait_menu_prisoner_settlement_wait_ui_on_init(MenuCallbackArgs args)` | method |
| `wait_menu_prisoner_wait_on_condition` | `public static bool wait_menu_prisoner_wait_on_condition(MenuCallbackArgs args)` | method |
| `wait_menu_prisoner_wait_on_tick` | `public static void wait_menu_prisoner_wait_on_tick(MenuCallbackArgs args, CampaignTime dt)` | method |
| `wait_menu_settlement_wait_on_tick` | `public static void wait_menu_settlement_wait_on_tick(MenuCallbackArgs args, CampaignTime dt)` | method |
| `game_menu_town_manage_town_on_condition` | `public static bool game_menu_town_manage_town_on_condition(MenuCallbackArgs args)` | method |
| `game_menu_town_manage_town_cheat_on_condition` | `public static bool game_menu_town_manage_town_cheat_on_condition(MenuCallbackArgs args)` | method |
| `settlement_player_unconscious_continue_on_consequence` | `public static void settlement_player_unconscious_continue_on_consequence(MenuCallbackArgs args)` | method |
| `game_menu_town_menu_on_init` | `public static void game_menu_town_menu_on_init(MenuCallbackArgs args)` | method |
| `game_menu_town_menu_arena_on_init` | `public static void game_menu_town_menu_arena_on_init(MenuCallbackArgs args)` | method |
| `game_menu_village_menu_on_init` | `public static void game_menu_village_menu_on_init(MenuCallbackArgs args)` | method |
| `game_menu_town_menu_keep_on_init` | `public static void game_menu_town_menu_keep_on_init(MenuCallbackArgs args)` | method |
| `game_menu_ui_town_manage_town_on_consequence` | `public static void game_menu_ui_town_manage_town_on_consequence(MenuCallbackArgs args)` | method |
| `game_menu_ui_town_castle_manage_town_on_consequence` | `public static void game_menu_ui_town_castle_manage_town_on_consequence(MenuCallbackArgs args)` | method |
| `game_menu_town_menu_backstreet_sound_on_init` | `public static void game_menu_town_menu_backstreet_sound_on_init(MenuCallbackArgs args)` | method |
| `game_menu_town_menu_keep_sound_on_init` | `public static void game_menu_town_menu_keep_sound_on_init(MenuCallbackArgs args)` | method |
| `game_menu_town_menu_sound_on_init` | `public static void game_menu_town_menu_sound_on_init(MenuCallbackArgs args)` | method |
| `game_menu_town_menu_enter_sound_on_init` | `public static void game_menu_town_menu_enter_sound_on_init(MenuCallbackArgs args)` | method |
| `game_menu_village_menu_sound_on_init` | `public static void game_menu_village_menu_sound_on_init(MenuCallbackArgs args)` | method |
| `game_menu_village__enter_menu_sound_on_init` | `public static void game_menu_village__enter_menu_sound_on_init(MenuCallbackArgs args)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
