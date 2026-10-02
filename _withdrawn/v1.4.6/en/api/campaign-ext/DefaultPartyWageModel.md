---
title: "DefaultPartyWageModel"
description: "DefaultPartyWageModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting PartyWageModel; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartyWageModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultPartyWageModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyWageModel : PartyWageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyWageModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultPartyWageModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartyWageModel.cs. It is a public class, implementing/inheriting PartyWageModel; the inheritance chain is DefaultPartyWageModel → PartyWageModel → MBGameModel → GameModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartyWageModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultPartyWageModel → PartyWageModel → MBGameModel → GameModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartyWageModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaxWagePaymentLimit` | `public override int MaxWagePaymentLimit` | property |
| `GetCharacterWage` | `public override int GetCharacterWage(CharacterObject character)` | method |
| `GetTotalWage` | `public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)` | method |
| `GetTroopRecruitmentCost` | `public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PartyWageModel](../PartyWageModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
