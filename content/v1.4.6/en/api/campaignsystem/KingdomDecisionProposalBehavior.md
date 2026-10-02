---
title: "KingdomDecisionProposalBehavior"
description: "KingdomDecisionProposalBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/KingdomDecisionProposalBehavior.cs."
---
# KingdomDecisionProposalBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class KingdomDecisionProposalBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/KingdomDecisionProposalBehavior.cs`

## Overview

KingdomDecisionProposalBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/KingdomDecisionProposalBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is KingdomDecisionProposalBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomDecisionProposalBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain KingdomDecisionProposalBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/KingdomDecisionProposalBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TradeAgreementsCampaignBehavior` | `public ITradeAgreementsCampaignBehavior TradeAgreementsCampaignBehavior` | property |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `UpdateKingdomDecisions` | `public void UpdateKingdomDecisions(Kingdom kingdom)` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
