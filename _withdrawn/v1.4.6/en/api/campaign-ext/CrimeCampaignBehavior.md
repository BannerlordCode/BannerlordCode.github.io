---
title: "CrimeCampaignBehavior"
description: "CrimeCampaignBehavior: a public class in TaleWorlds.CampaignSystem.CampaignBehaviors, inheriting CampaignBehaviorBase; 19 exposed members (19 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/CrimeCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CrimeCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CrimeCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CrimeCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

CrimeCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/CrimeCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is CrimeCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 19 public/protected members: 19 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CrimeCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain CrimeCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 19/19, properties 0/19), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/CrimeCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `game_menu_town_criminal_on_init` | `public static void game_menu_town_criminal_on_init(MenuCallbackArgs args)` | method |
| `town_inside_criminal_on_init` | `public static void town_inside_criminal_on_init(MenuCallbackArgs args)` | method |
| `town_discuss_criminal_surrender_on_init` | `public static void town_discuss_criminal_surrender_on_init(MenuCallbackArgs args)` | method |
| `criminal_inside_menu_pay_by_punishment_on_condition` | `public static bool criminal_inside_menu_pay_by_punishment_on_condition(MenuCallbackArgs args)` | method |
| `criminal_inside_menu_pay_by_punishment_on_consequence` | `public static void criminal_inside_menu_pay_by_punishment_on_consequence(MenuCallbackArgs args)` | method |
| `criminal_inside_menu_give_money_on_condition` | `public static bool criminal_inside_menu_give_money_on_condition(MenuCallbackArgs args)` | method |
| `criminal_inside_menu_give_money_on_consequence` | `public static void criminal_inside_menu_give_money_on_consequence(MenuCallbackArgs args)` | method |
| `criminal_inside_menu_give_influence_on_condition` | `public static bool criminal_inside_menu_give_influence_on_condition(MenuCallbackArgs args)` | method |
| `criminal_inside_menu_give_influence_on_consequence` | `public static void criminal_inside_menu_give_influence_on_consequence(MenuCallbackArgs args)` | method |
| `criminal_inside_menu_give_punishment_and_money_on_condition` | `public static bool criminal_inside_menu_give_punishment_and_money_on_condition(MenuCallbackArgs args)` | method |
| `criminal_inside_menu_give_punishment_and_money_on_consequence` | `public static void criminal_inside_menu_give_punishment_and_money_on_consequence(MenuCallbackArgs args)` | method |
| `criminal_inside_menu_give_your_life_on_condition` | `public static bool criminal_inside_menu_give_your_life_on_condition(MenuCallbackArgs args)` | method |
| `criminal_inside_menu_give_your_life_on_consequence` | `public static void criminal_inside_menu_give_your_life_on_consequence(MenuCallbackArgs args)` | method |
| `criminal_inside_menu_ignore_charges_on_condition` | `public static bool criminal_inside_menu_ignore_charges_on_condition(MenuCallbackArgs args)` | method |
| `criminal_inside_menu_ignore_charges_on_consequence` | `public static void criminal_inside_menu_ignore_charges_on_consequence(MenuCallbackArgs args)` | method |
| `town_discuss_criminal_surrender_back_on_consequence` | `public static void town_discuss_criminal_surrender_back_on_consequence(MenuCallbackArgs args)` | method |
| `town_discuss_criminal_surrender_on_condition` | `public static bool town_discuss_criminal_surrender_on_condition(MenuCallbackArgs args)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
