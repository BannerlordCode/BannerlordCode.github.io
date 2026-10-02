---
title: "EncounterGameMenuBehavior"
description: "EncounterGameMenuBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase; 18 exposed members (18 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/EncounterGameMenuBehavior.cs."
---
# EncounterGameMenuBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class EncounterGameMenuBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/EncounterGameMenuBehavior.cs`

## Overview

EncounterGameMenuBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/EncounterGameMenuBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is EncounterGameMenuBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 18 public/protected members: 18 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncounterGameMenuBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain EncounterGameMenuBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 18/18, properties 0/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/EncounterGameMenuBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `AddCurrentSettlementAsAlreadySneakedIn` | `public void AddCurrentSettlementAsAlreadySneakedIn()` | method |
| `game_menu_captivity_taken_prisoner_cheat_on_consequence` | `public static void game_menu_captivity_taken_prisoner_cheat_on_consequence(MenuCallbackArgs args)` | method |
| `game_menu_captivity_castle_taken_prisoner_cont_on_condition` | `public static bool game_menu_captivity_castle_taken_prisoner_cont_on_condition(MenuCallbackArgs args)` | method |
| `menu_sneak_into_town_succeeded_continue_on_consequence` | `public static void menu_sneak_into_town_succeeded_continue_on_consequence(MenuCallbackArgs args)` | method |
| `menu_sneak_into_town_succeeded_continue_on_condition` | `public static bool menu_sneak_into_town_succeeded_continue_on_condition(MenuCallbackArgs args)` | method |
| `game_menu_sneak_into_town_caught_on_init` | `public static void game_menu_sneak_into_town_caught_on_init(MenuCallbackArgs args)` | method |
| `mno_sneak_caught_surrender_on_consequence` | `public static void mno_sneak_caught_surrender_on_consequence(MenuCallbackArgs args)` | method |
| `mno_sneak_caught_surrender_on_condition` | `public static bool mno_sneak_caught_surrender_on_condition(MenuCallbackArgs args)` | method |
| `game_menu_captivity_taken_prisoner_cheat_on_condition` | `public static bool game_menu_captivity_taken_prisoner_cheat_on_condition(MenuCallbackArgs args)` | method |
| `game_menu_captivity_castle_taken_prisoner_cont_on_consequence` | `public static void game_menu_captivity_castle_taken_prisoner_cont_on_consequence(MenuCallbackArgs args)` | method |
| `game_request_entry_to_castle_approved_continue_on_consequence` | `public static void game_request_entry_to_castle_approved_continue_on_consequence(MenuCallbackArgs args)` | method |
| `game_request_entry_to_castle_approved_continue_on_condition` | `public static bool game_request_entry_to_castle_approved_continue_on_condition(MenuCallbackArgs args)` | method |
| `game_request_entry_to_castle_rejected_continue_on_consequence` | `public static void game_request_entry_to_castle_rejected_continue_on_consequence(MenuCallbackArgs args)` | method |
| `menu_castle_entry_denied_on_init` | `public static void menu_castle_entry_denied_on_init(MenuCallbackArgs args)` | method |
| `game_menu_castle_menu_sound_on_init` | `public static void game_menu_castle_menu_sound_on_init(MenuCallbackArgs args)` | method |
| `game_menu_encounter_naval_disengaged_init` | `public static void game_menu_encounter_naval_disengaged_init(MenuCallbackArgs args)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
