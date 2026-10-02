---
title: "VassalAndMercenaryOfferCampaignBehavior"
description: "VassalAndMercenaryOfferCampaignBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase, IVassalAndMercenaryOfferCampaignBehavior; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/VassalAndMercenaryOfferCampaignBehavior.cs."
---
# VassalAndMercenaryOfferCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class VassalAndMercenaryOfferCampaignBehavior : CampaignBehaviorBase, IVassalAndMercenaryOfferCampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/VassalAndMercenaryOfferCampaignBehavior.cs`

## Overview

VassalAndMercenaryOfferCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/VassalAndMercenaryOfferCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, IVassalAndMercenaryOfferCampaignBehavior; the inheritance chain is VassalAndMercenaryOfferCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VassalAndMercenaryOfferCampaignBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain VassalAndMercenaryOfferCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/VassalAndMercenaryOfferCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `CancelVassalOrMercenaryServiceOffer` | `public void CancelVassalOrMercenaryServiceOffer(Kingdom kingdom)` | method |
| `CreateMercenaryOffer` | `public void CreateMercenaryOffer(Kingdom kingdom)` | method |
| `CreateVassalOffer` | `public void CreateVassalOffer(Kingdom kingdom)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IVassalAndMercenaryOfferCampaignBehavior](../IVassalAndMercenaryOfferCampaignBehavior)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
