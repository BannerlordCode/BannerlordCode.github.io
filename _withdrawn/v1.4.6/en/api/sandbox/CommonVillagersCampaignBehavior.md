---
title: "CommonVillagersCampaignBehavior"
description: "CommonVillagersCampaignBehavior: a public class in SandBox.CampaignBehaviors, inheriting CampaignBehaviorBase; 11 exposed members (7 methods, 0 properties, 4 fields). Canonical bucket sandbox. Source: SandBox/CampaignBehaviors/CommonVillagersCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CommonVillagersCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class CommonVillagersCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/CommonVillagersCampaignBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CommonVillagersCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/CommonVillagersCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is CommonVillagersCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 11 public/protected members: 7 methods, 4 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CommonVillagersCampaignBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.CampaignBehaviors`, inheritance chain CommonVillagersCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 7/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/CommonVillagersCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | method |
| `OnSettlementOwnerChanged` | `public void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)` | method |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter campaignGameStarter)` | method |
| `conversation_town_or_village_escort_complete_on_condition` | `public bool conversation_town_or_village_escort_complete_on_condition()` | method |
| `conversation_town_or_village_escort_complete_on_consequence` | `public void conversation_town_or_village_escort_complete_on_consequence()` | method |
| `VillagerSpawnPercentageMale` | `public const float VillagerSpawnPercentageMale` | field |
| `VillagerSpawnPercentageFemale` | `public const float VillagerSpawnPercentageFemale` | field |
| `VillagerSpawnPercentageLimited` | `public const float VillagerSpawnPercentageLimited` | field |
| `VillageOtherPeopleSpawnPercentage` | `public const float VillageOtherPeopleSpawnPercentage` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior/)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior/)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior/)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior/)
