---
title: "FactionDiscontinuationCampaignBehavior"
description: "FactionDiscontinuationCampaignBehavior: a public class in TaleWorlds.CampaignSystem.CampaignBehaviors, inheriting CampaignBehaviorBase; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/FactionDiscontinuationCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FactionDiscontinuationCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class FactionDiscontinuationCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/FactionDiscontinuationCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

FactionDiscontinuationCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/FactionDiscontinuationCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is FactionDiscontinuationCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FactionDiscontinuationCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain FactionDiscontinuationCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/FactionDiscontinuationCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `OnSettlementOwnerChanged` | `public void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)` | method |
| `OnClanChangedKingdom` | `public void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail detail, bool showNotification = true)` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
