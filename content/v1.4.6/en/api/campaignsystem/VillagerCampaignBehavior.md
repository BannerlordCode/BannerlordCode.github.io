---
title: "VillagerCampaignBehavior"
description: "VillagerCampaignBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase; 10 exposed members (8 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/VillagerCampaignBehavior.cs."
---
# VillagerCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class VillagerCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/VillagerCampaignBehavior.cs`

## Overview

VillagerCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/VillagerCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is VillagerCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 10 public/protected members: 8 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VillagerCampaignBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain VillagerCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 8/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/VillagerCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `DailyTick` | `public void DailyTick()` | method |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | method |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter campaignGameSystemStarter)` | method |
| `taking_food_from_villagers_wait_on_condition` | `public bool taking_food_from_villagers_wait_on_condition(MenuCallbackArgs args)` | method |
| `press_into_service_confirm_on_condition` | `public bool press_into_service_confirm_on_condition(MenuCallbackArgs args)` | method |
| `taking_food_from_villagers_wait_on_consequence` | `public void taking_food_from_villagers_wait_on_consequence(MenuCallbackArgs args)` | method |
| `SaveableTypeDefiner` | `public class VillagerCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | property |
| `SaveableTypeDefiner` | `public class VillagerCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
