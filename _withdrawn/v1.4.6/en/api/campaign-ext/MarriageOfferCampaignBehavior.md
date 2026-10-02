---
title: "MarriageOfferCampaignBehavior"
description: "MarriageOfferCampaignBehavior: a public class in TaleWorlds.CampaignSystem.CampaignBehaviors, inheriting CampaignBehaviorBase, IMarriageOfferCampaignBehavior; 9 exposed members (9 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/MarriageOfferCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MarriageOfferCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MarriageOfferCampaignBehavior : CampaignBehaviorBase, IMarriageOfferCampaignBehavior, ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/MarriageOfferCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

MarriageOfferCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/MarriageOfferCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, IMarriageOfferCampaignBehavior, ICampaignBehavior; the inheritance chain is MarriageOfferCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 9 public/protected members: 9 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MarriageOfferCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain MarriageOfferCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 9/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/MarriageOfferCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `CreateMarriageOffer` | `public void CreateMarriageOffer(Hero currentOfferedPlayerClanHero, Hero currentOfferedOtherClanHero)` | method |
| `MBBindingList` | `public MBBindingList<TextObject>GetMarriageAcceptedConsequences()` | method |
| `OnMarriageOfferAcceptedOnPopUp` | `public void OnMarriageOfferAcceptedOnPopUp()` | method |
| `OnMarriageOfferedToPlayer` | `public void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)` | method |
| `OnMarriageOfferDeclinedOnPopUp` | `public void OnMarriageOfferDeclinedOnPopUp()` | method |
| `OnMarriageOfferCanceled` | `public void OnMarriageOfferCanceled(Hero suitor, Hero maiden)` | method |
| `IsHeroEngaged` | `public bool IsHeroEngaged(Hero hero)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMarriageOfferCampaignBehavior](../IMarriageOfferCampaignBehavior/)
- [base / interface ICampaignBehavior](../../campaign/ICampaignBehavior/)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
