---
title: "IMarriageOfferCampaignBehavior"
description: "IMarriageOfferCampaignBehavior: a public interface in TaleWorlds.CampaignSystem.CampaignBehaviors, inheriting ICampaignBehavior; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/IMarriageOfferCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IMarriageOfferCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMarriageOfferCampaignBehavior : ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IMarriageOfferCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

IMarriageOfferCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/IMarriageOfferCampaignBehavior.cs. It is a public interface, implementing/inheriting ICampaignBehavior; the inheritance chain is IMarriageOfferCampaignBehavior → ICampaignBehavior. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMarriageOfferCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain IMarriageOfferCampaignBehavior → ICampaignBehavior. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/IMarriageOfferCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnMarriageOfferedToPlayer` | `void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden);` | method |
| `OnMarriageOfferCanceled` | `void OnMarriageOfferCanceled(Hero suitor, Hero maiden);` | method |
| `MBBindingList` | `MBBindingList<TextObject>GetMarriageAcceptedConsequences();` | method |
| `OnMarriageOfferAcceptedOnPopUp` | `void OnMarriageOfferAcceptedOnPopUp();` | method |
| `OnMarriageOfferDeclinedOnPopUp` | `void OnMarriageOfferDeclinedOnPopUp();` | method |
| `IsHeroEngaged` | `bool IsHeroEngaged(Hero hero);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ICampaignBehavior](../../campaign/ICampaignBehavior/)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
