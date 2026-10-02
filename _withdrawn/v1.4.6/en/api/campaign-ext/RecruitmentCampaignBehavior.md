---
title: "RecruitmentCampaignBehavior"
description: "RecruitmentCampaignBehavior: a public class in TaleWorlds.CampaignSystem.CampaignBehaviors, inheriting CampaignBehaviorBase; 13 exposed members (7 methods, 3 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/RecruitmentCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RecruitmentCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class RecruitmentCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/RecruitmentCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

RecruitmentCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/RecruitmentCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is RecruitmentCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 13 public/protected members: 7 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RecruitmentCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain RecruitmentCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 7/13, properties 3/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/RecruitmentCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `GetMercenaryData` | `public RecruitmentCampaignBehavior.TownMercenaryData GetMercenaryData(Town town)` | method |
| `HourlyTickParty` | `public void HourlyTickParty(MobileParty mobileParty)` | method |
| `OnBeforeSettlementEntered` | `public void OnBeforeSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)` | method |
| `AddGameMenus` | `protected void AddGameMenus(CampaignGameStarter campaignGameSystemStarter)` | method |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter campaignGameStarter)` | method |
| `SaveableTypeDefiner` | `public class RecruitmentCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | property |
| `TownMercenaryData` | `public class TownMercenaryData` | property |
| `RecruitingDetail` | `public enum RecruitingDetail` | property |
| `SaveableTypeDefiner` | `public class RecruitmentCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | nested type |
| `TownMercenaryData` | `public class TownMercenaryData` | nested type |
| `RecruitingDetail` | `public enum RecruitingDetail` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
