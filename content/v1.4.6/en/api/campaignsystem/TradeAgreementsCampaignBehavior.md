---
title: "TradeAgreementsCampaignBehavior"
description: "TradeAgreementsCampaignBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase, ITradeAgreementsCampaignBehavior; 13 exposed members (9 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/TradeAgreementsCampaignBehavior.cs."
---
# TradeAgreementsCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TradeAgreementsCampaignBehavior : CampaignBehaviorBase, ITradeAgreementsCampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/TradeAgreementsCampaignBehavior.cs`

## Overview

TradeAgreementsCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/TradeAgreementsCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, ITradeAgreementsCampaignBehavior; the inheritance chain is TradeAgreementsCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 13 public/protected members: 9 methods, 2 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TradeAgreementsCampaignBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain TradeAgreementsCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 9/13, properties 2/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/TradeAgreementsCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `OnTradeAgreementOfferedToPlayer` | `public void OnTradeAgreementOfferedToPlayer(Kingdom fromKingdom)` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `MakeTradeAgreement` | `public void MakeTradeAgreement(Kingdom kingdom1, Kingdom kingdom2, CampaignTime duration)` | method |
| `EndTradeAgreementsOfKingdom` | `public void EndTradeAgreementsOfKingdom(Kingdom kingdom)` | method |
| `EndTradeAgreement` | `public void EndTradeAgreement(Kingdom kingdom1, Kingdom kingdom2)` | method |
| `HasTradeAgreement` | `public bool HasTradeAgreement(Kingdom kingdom1, Kingdom kingdom2, out TradeAgreementsCampaignBehavior.TradeAgreement tradeAgreement)` | method |
| `GetTradeAgreementEndDate` | `public CampaignTime GetTradeAgreementEndDate(Kingdom kingdom1, Kingdom kingdom2)` | method |
| `OnTradeGoldDistributedInKingdom` | `public void OnTradeGoldDistributedInKingdom(Kingdom kingdom1, Kingdom kingdom2, Clan clan, int share)` | method |
| `SaveableTypeDefiner` | `public class TradeAgreementsCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | property |
| `TradeAgreement` | `public struct TradeAgreement` | property |
| `SaveableTypeDefiner` | `public class TradeAgreementsCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | nested type |
| `TradeAgreement` | `public struct TradeAgreement` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ITradeAgreementsCampaignBehavior](../ITradeAgreementsCampaignBehavior)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
