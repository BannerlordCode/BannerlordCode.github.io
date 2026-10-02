---
title: "DefaultPrisonerDonationModel"
description: "DefaultPrisonerDonationModel: a public class in TaleWorlds.CampaignSystem, inheriting PrisonerDonationModel; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerDonationModel.cs."
---
# DefaultPrisonerDonationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPrisonerDonationModel : PrisonerDonationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerDonationModel.cs`

## Overview

DefaultPrisonerDonationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerDonationModel.cs. It is a public class, implementing/inheriting PrisonerDonationModel; the inheritance chain is DefaultPrisonerDonationModel → PrisonerDonationModel → MBGameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPrisonerDonationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultPrisonerDonationModel → PrisonerDonationModel → MBGameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerDonationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateRelationGainAfterHeroPrisonerDonate` | `public override float CalculateRelationGainAfterHeroPrisonerDonate(PartyBase donatingParty, Hero donatedHero, Settlement donatedSettlement)` | method |
| `CalculateInfluenceGainAfterPrisonerDonation` | `public override float CalculateInfluenceGainAfterPrisonerDonation(PartyBase donatingParty, CharacterObject donatedPrisoner, Settlement donatedSettlement)` | method |
| `CalculateInfluenceGainAfterTroopDonation` | `public override float CalculateInfluenceGainAfterTroopDonation(PartyBase donatingParty, CharacterObject donatedCharacter, Settlement donatedSettlement)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PrisonerDonationModel](../PrisonerDonationModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
