---
title: "ArenaMasterCampaignBehavior"
description: "ArenaMasterCampaignBehavior: a public class in SandBox, inheriting CampaignBehaviorBase; 8 exposed members (8 methods, 0 properties, 0 fields). Source: SandBox/CampaignBehaviors/ArenaMasterCampaignBehavior.cs."
---
# ArenaMasterCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class ArenaMasterCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/ArenaMasterCampaignBehavior.cs`

## Overview

ArenaMasterCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/ArenaMasterCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is ArenaMasterCampaignBehavior → CampaignBehaviorBase. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArenaMasterCampaignBehavior is a top-level type in SandBox, namespace differing from (SandBox.CampaignBehaviors) the module directory; inheritance chain ArenaMasterCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/ArenaMasterCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | method |
| `OnSettlementEntered` | `public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)` | method |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter campaignGameStarter)` | method |
| `conversation_tournament_soon_on_condition` | `public static bool conversation_tournament_soon_on_condition()` | method |
| `conversation_arena_join_tournament_on_consequence` | `public static void conversation_arena_join_tournament_on_consequence()` | method |
| `conversation_arena_join_fight_on_consequence` | `public static void conversation_arena_join_fight_on_consequence()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
- [same namespace CheckpointCampaignBehavior](../CheckpointCampaignBehavior)
