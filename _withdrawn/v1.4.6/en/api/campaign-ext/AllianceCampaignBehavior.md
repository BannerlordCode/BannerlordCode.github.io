---
title: "AllianceCampaignBehavior"
description: "AllianceCampaignBehavior: a public class in TaleWorlds.CampaignSystem.CampaignBehaviors, inheriting CampaignBehaviorBase, IAllianceCampaignBehavior; 20 exposed members (18 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AllianceCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AllianceCampaignBehavior : CampaignBehaviorBase, IAllianceCampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

AllianceCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, IAllianceCampaignBehavior; the inheritance chain is AllianceCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 20 public/protected members: 18 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AllianceCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain AllianceCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 18/20, properties 1/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnAllianceOfferedToPlayer` | `public void OnAllianceOfferedToPlayer(Kingdom offeringKingdom)` | method |
| `OnAllianceOfferedToPlayerKingdom` | `public void OnAllianceOfferedToPlayerKingdom(Kingdom offeringKingdom)` | method |
| `OnCallToWarAgreementProposedToPlayer` | `public void OnCallToWarAgreementProposedToPlayer(Kingdom proposerKingdom, Kingdom kingdomToCallToWarAgainst)` | method |
| `OnCallToWarAgreementProposedToPlayerKingdom` | `public void OnCallToWarAgreementProposedToPlayerKingdom(Kingdom proposerKingdom, Kingdom kingdomToCallToWarAgainst)` | method |
| `OnCallToWarAgreementProposedByPlayer` | `public void OnCallToWarAgreementProposedByPlayer(Kingdom proposedKingdom, Kingdom kingdomToCallToWarAgainst)` | method |
| `GetAllianceEndDate` | `public CampaignTime GetAllianceEndDate(Kingdom kingdom1, Kingdom kingdom2)` | method |
| `OnCallToWarAgreementProposedByPlayerKingdom` | `public void OnCallToWarAgreementProposedByPlayerKingdom(Kingdom proposedKingdom, Kingdom kingdomToCallToWarAgainst)` | method |
| `IsAllyWithKingdom` | `public bool IsAllyWithKingdom(Kingdom kingdom1, Kingdom kingdom2)` | method |
| `StartAlliance` | `public void StartAlliance(Kingdom proposerKingdom, Kingdom receiverKingdom)` | method |
| `EndAlliance` | `public void EndAlliance(Kingdom kingdom1, Kingdom kingdom2)` | method |
| `HasCalledToWar` | `public bool HasCalledToWar(Kingdom callingKingdom, Kingdom calledKingdom)` | method |
| `IsAtWarByCallToWarAgreement` | `public bool IsAtWarByCallToWarAgreement(Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, out Kingdom callingKingdom)` | method |
| `StartCallToWarAgreement` | `public void StartCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, int callToWarCost, bool isPlayerPaying = false)` | method |
| `EndCallToWarAgreement` | `public void EndCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)` | method |
| `DenyCallToWarAgreement` | `public void DenyCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom)` | method |
| `List` | `public List<Kingdom>GetKingdomsToCallToWarAgainst(Kingdom callingKingdom, Kingdom calledKingdom)` | method |
| `SaveableTypeDefiner` | `public class AllianceCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | property |
| `SaveableTypeDefiner` | `public class AllianceCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IAllianceCampaignBehavior](../IAllianceCampaignBehavior/)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
- [same namespace BanditSpawnCampaignBehavior](../BanditSpawnCampaignBehavior/)
