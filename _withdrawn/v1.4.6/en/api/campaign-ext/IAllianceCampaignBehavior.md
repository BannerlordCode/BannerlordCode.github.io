---
title: "IAllianceCampaignBehavior"
description: "IAllianceCampaignBehavior: a public interface in TaleWorlds.CampaignSystem.CampaignBehaviors; 16 exposed members (16 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/IAllianceCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IAllianceCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IAllianceCampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IAllianceCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

IAllianceCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/IAllianceCampaignBehavior.cs. It is a public interface; the inheritance chain is IAllianceCampaignBehavior. It exposes 16 public/protected members: 16 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IAllianceCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain IAllianceCampaignBehavior. The surface is method-led (methods 16/16, properties 0/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/IAllianceCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnAllianceOfferedToPlayerKingdom` | `void OnAllianceOfferedToPlayerKingdom(Kingdom proposerKingdom);` | method |
| `OnAllianceOfferedToPlayer` | `void OnAllianceOfferedToPlayer(Kingdom proposerKingdom);` | method |
| `OnCallToWarAgreementProposedToPlayerKingdom` | `void OnCallToWarAgreementProposedToPlayerKingdom(Kingdom proposerKingdom, Kingdom kingdomToCallToWarAgainst);` | method |
| `OnCallToWarAgreementProposedByPlayerKingdom` | `void OnCallToWarAgreementProposedByPlayerKingdom(Kingdom proposedKingdom, Kingdom kingdomToCallToWarAgainst);` | method |
| `OnCallToWarAgreementProposedToPlayer` | `void OnCallToWarAgreementProposedToPlayer(Kingdom proposerKingdom, Kingdom kingdomToCallToWarAgainst);` | method |
| `OnCallToWarAgreementProposedByPlayer` | `void OnCallToWarAgreementProposedByPlayer(Kingdom proposedKingdom, Kingdom kingdomToCallToWarAgainst);` | method |
| `IsAllyWithKingdom` | `bool IsAllyWithKingdom(Kingdom kingdom1, Kingdom kingdom2);` | method |
| `StartAlliance` | `void StartAlliance(Kingdom proposerKingdom, Kingdom receiverKingdom);` | method |
| `EndAlliance` | `void EndAlliance(Kingdom kingdom1, Kingdom kingdom2);` | method |
| `HasCalledToWar` | `bool HasCalledToWar(Kingdom callingKingdom, Kingdom calledKingdom);` | method |
| `IsAtWarByCallToWarAgreement` | `bool IsAtWarByCallToWarAgreement(Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, out Kingdom callingKingdom);` | method |
| `StartCallToWarAgreement` | `void StartCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, int callToWarCost, bool isPlayerPaying = false);` | method |
| `EndCallToWarAgreement` | `void EndCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst);` | method |
| `List` | `List<Kingdom>GetKingdomsToCallToWarAgainst(Kingdom callingKingdom, Kingdom calledKingdom);` | method |
| `GetAllianceEndDate` | `CampaignTime GetAllianceEndDate(Kingdom kingdom1, Kingdom kingdom2);` | method |
| `DenyCallToWarAgreement` | `void DenyCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
