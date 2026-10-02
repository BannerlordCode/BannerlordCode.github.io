---
title: "GarrisonRecruitmentCampaignBehavior"
description: "GarrisonRecruitmentCampaignBehavior: a public class in TaleWorlds.CampaignSystem.CampaignBehaviors, inheriting CampaignBehaviorBase, IGarrisonRecruitmentBehavior; 5 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/GarrisonRecruitmentCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GarrisonRecruitmentCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GarrisonRecruitmentCampaignBehavior : CampaignBehaviorBase, IGarrisonRecruitmentBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/GarrisonRecruitmentCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

GarrisonRecruitmentCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/GarrisonRecruitmentCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, IGarrisonRecruitmentBehavior; the inheritance chain is GarrisonRecruitmentCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 5 public/protected members: 3 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GarrisonRecruitmentCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain GarrisonRecruitmentCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/GarrisonRecruitmentCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `GetGarrisonChangeExplainedNumber` | `public ExplainedNumber GetGarrisonChangeExplainedNumber(Town town)` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `IComparable` | `public struct VolunteerTroop : IComparable` | property |
| `IComparable` | `public struct VolunteerTroop : IComparable` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IGarrisonRecruitmentBehavior](../IGarrisonRecruitmentBehavior/)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
