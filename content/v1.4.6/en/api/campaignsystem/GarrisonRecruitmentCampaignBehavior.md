---
title: "GarrisonRecruitmentCampaignBehavior"
description: "GarrisonRecruitmentCampaignBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase, IGarrisonRecruitmentBehavior; 5 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/GarrisonRecruitmentCampaignBehavior.cs."
---
# GarrisonRecruitmentCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GarrisonRecruitmentCampaignBehavior : CampaignBehaviorBase, IGarrisonRecruitmentBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/GarrisonRecruitmentCampaignBehavior.cs`

## Overview

GarrisonRecruitmentCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/GarrisonRecruitmentCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, IGarrisonRecruitmentBehavior; the inheritance chain is GarrisonRecruitmentCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 5 public/protected members: 3 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GarrisonRecruitmentCampaignBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain GarrisonRecruitmentCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/GarrisonRecruitmentCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `GetGarrisonChangeExplainedNumber` | `public ExplainedNumber GetGarrisonChangeExplainedNumber(Town town)` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `IComparable` | `public struct VolunteerTroop : IComparable` | property |
| `IComparable` | `public struct VolunteerTroop : IComparable` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IGarrisonRecruitmentBehavior](../IGarrisonRecruitmentBehavior)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
