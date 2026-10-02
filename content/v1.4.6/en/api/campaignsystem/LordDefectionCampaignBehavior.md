---
title: "LordDefectionCampaignBehavior"
description: "LordDefectionCampaignBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase; 17 exposed members (14 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/LordDefectionCampaignBehavior.cs."
---
# LordDefectionCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class LordDefectionCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/LordDefectionCampaignBehavior.cs`

## Overview

LordDefectionCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/LordDefectionCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is LordDefectionCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 17 public/protected members: 14 methods, 1 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LordDefectionCampaignBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain LordDefectionCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 14/17, properties 1/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/LordDefectionCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LordDefectionCampaignBehavior` | `public LordDefectionCampaignBehavior()` | constructor |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | method |
| `ClearPersuasion` | `public void ClearPersuasion()` | method |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter starter)` | method |
| `conversation_lord_player_has_failed_in_defection_on_condition` | `public bool conversation_lord_player_has_failed_in_defection_on_condition()` | method |
| `conversation_lord_recruit_check_if_reservations_met_on_condition` | `public bool conversation_lord_recruit_check_if_reservations_met_on_condition()` | method |
| `conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition` | `public bool conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition()` | method |
| `conversation_lord_defect_to_clan_without_barter_on_consequence` | `public void conversation_lord_defect_to_clan_without_barter_on_consequence()` | method |
| `conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition` | `public bool conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition()` | method |
| `conversation_player_is_asking_to_recruit_enemy_on_condition` | `public bool conversation_player_is_asking_to_recruit_enemy_on_condition()` | method |
| `conversation_player_is_asking_to_recruit_neutral_on_condition` | `public bool conversation_player_is_asking_to_recruit_neutral_on_condition()` | method |
| `conversation_lord_from_ruling_clan_on_condition` | `public bool conversation_lord_from_ruling_clan_on_condition()` | method |
| `conversation_lord_redirects_to_clan_leader_on_condition` | `public bool conversation_lord_redirects_to_clan_leader_on_condition()` | method |
| `SaveableTypeDefiner` | `public class LordDefectionCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | property |
| `SaveableTypeDefiner` | `public class LordDefectionCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
