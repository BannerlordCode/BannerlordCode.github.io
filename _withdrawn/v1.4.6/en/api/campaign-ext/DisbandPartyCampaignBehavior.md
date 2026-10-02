---
title: "DisbandPartyCampaignBehavior"
description: "DisbandPartyCampaignBehavior: a public class in TaleWorlds.CampaignSystem.CampaignBehaviors, inheriting CampaignBehaviorBase, IDisbandPartyCampaignBehavior; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/DisbandPartyCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DisbandPartyCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DisbandPartyCampaignBehavior : CampaignBehaviorBase, IDisbandPartyCampaignBehavior, ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/DisbandPartyCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

DisbandPartyCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/DisbandPartyCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, IDisbandPartyCampaignBehavior, ICampaignBehavior; the inheritance chain is DisbandPartyCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DisbandPartyCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain DisbandPartyCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/DisbandPartyCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `IsPartyWaitingForDisband` | `public bool IsPartyWaitingForDisband(MobileParty party)` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IDisbandPartyCampaignBehavior](../IDisbandPartyCampaignBehavior/)
- [base / interface ICampaignBehavior](../../campaign/ICampaignBehavior/)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
