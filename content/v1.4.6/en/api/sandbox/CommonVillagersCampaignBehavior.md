---
title: "CommonVillagersCampaignBehavior"
description: "CommonVillagersCampaignBehavior: a public class in SandBox, inheriting CampaignBehaviorBase; 11 exposed members (7 methods, 0 properties, 4 fields). Source: SandBox/CampaignBehaviors/CommonVillagersCampaignBehavior.cs."
---
# CommonVillagersCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class CommonVillagersCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/CommonVillagersCampaignBehavior.cs`

## Overview

CommonVillagersCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/CommonVillagersCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is CommonVillagersCampaignBehavior → CampaignBehaviorBase. It exposes 11 public/protected members: 7 methods, 4 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CommonVillagersCampaignBehavior is a top-level type in SandBox, namespace differing from (SandBox.CampaignBehaviors) the module directory; inheritance chain CommonVillagersCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 7/11, properties 0/11), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/CommonVillagersCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
