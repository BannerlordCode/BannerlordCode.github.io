---
title: "PrisonerDonationModel"
description: "PrisonerDonationModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<PrisonerDonationModel>; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerDonationModel.cs."
---
# PrisonerDonationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PrisonerDonationModel : MBGameModel<PrisonerDonationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerDonationModel.cs`

## Overview

PrisonerDonationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerDonationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PrisonerDonationModel>; the inheritance chain is PrisonerDonationModel → MBGameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PrisonerDonationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain PrisonerDonationModel → MBGameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerDonationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateRelationGainAfterHeroPrisonerDonate` | `public abstract float CalculateRelationGainAfterHeroPrisonerDonate(PartyBase donatingParty, Hero donatedHero, Settlement donatedSettlement);` | method |
| `CalculateInfluenceGainAfterPrisonerDonation` | `public abstract float CalculateInfluenceGainAfterPrisonerDonation(PartyBase donatingParty, CharacterObject donatedPrisoner, Settlement donatedSettlement);` | method |
| `CalculateInfluenceGainAfterTroopDonation` | `public abstract float CalculateInfluenceGainAfterTroopDonation(PartyBase donatingParty, CharacterObject donatedTroop, Settlement donatedSettlement);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
