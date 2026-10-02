---
title: "ITradeAgreementsCampaignBehavior"
description: "ITradeAgreementsCampaignBehavior: a public interface in TaleWorlds.CampaignSystem.CampaignBehaviors; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/ITradeAgreementsCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ITradeAgreementsCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ITradeAgreementsCampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/ITradeAgreementsCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

ITradeAgreementsCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/ITradeAgreementsCampaignBehavior.cs. It is a public interface; the inheritance chain is ITradeAgreementsCampaignBehavior. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ITradeAgreementsCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain ITradeAgreementsCampaignBehavior. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/ITradeAgreementsCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MakeTradeAgreement` | `void MakeTradeAgreement(Kingdom kingdom1, Kingdom kingdom2, CampaignTime duration);` | method |
| `HasTradeAgreement` | `bool HasTradeAgreement(Kingdom kingdom, Kingdom other, out TradeAgreementsCampaignBehavior.TradeAgreement tradeAgreement);` | method |
| `EndTradeAgreement` | `void EndTradeAgreement(Kingdom kingdom, Kingdom other);` | method |
| `OnTradeAgreementOfferedToPlayer` | `void OnTradeAgreementOfferedToPlayer(Kingdom fromKingdom);` | method |
| `GetTradeAgreementEndDate` | `CampaignTime GetTradeAgreementEndDate(Kingdom kingdom, Kingdom other);` | method |
| `OnTradeGoldDistributedInKingdom` | `void OnTradeGoldDistributedInKingdom(Kingdom kingdom1, Kingdom kingdom2, Clan clan, int share);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
