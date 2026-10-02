---
title: "DefaultPartyWageModel"
description: "DefaultPartyWageModel: a public class in TaleWorlds.CampaignSystem, inheriting PartyWageModel; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartyWageModel.cs."
---
# DefaultPartyWageModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyWageModel : PartyWageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyWageModel.cs`

## Overview

DefaultPartyWageModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartyWageModel.cs. It is a public class, implementing/inheriting PartyWageModel; the inheritance chain is DefaultPartyWageModel → PartyWageModel → MBGameModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartyWageModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultPartyWageModel → PartyWageModel → MBGameModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartyWageModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxWagePaymentLimit` | `public override int MaxWagePaymentLimit` | property |
| `GetCharacterWage` | `public override int GetCharacterWage(CharacterObject character)` | method |
| `GetTotalWage` | `public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)` | method |
| `GetTroopRecruitmentCost` | `public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PartyWageModel](../PartyWageModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
