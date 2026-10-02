---
title: "ArenaMasterCampaignBehavior"
description: "ArenaMasterCampaignBehavior: a public class in SandBox.CampaignBehaviors, inheriting CampaignBehaviorBase; 8 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/CampaignBehaviors/ArenaMasterCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ArenaMasterCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class ArenaMasterCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/ArenaMasterCampaignBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ArenaMasterCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/ArenaMasterCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is ArenaMasterCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArenaMasterCampaignBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.CampaignBehaviors`, inheritance chain ArenaMasterCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/ArenaMasterCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior/)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior/)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior/)
- [same namespace CheckpointCampaignBehavior](../CheckpointCampaignBehavior/)
