---
title: "DefaultMarriageModel"
description: "DefaultMarriageModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting MarriageModel; 10 exposed members (8 methods, 2 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultMarriageModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMarriageModel : MarriageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultMarriageModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs. It is a public class, implementing/inheriting MarriageModel; the inheritance chain is DefaultMarriageModel → MarriageModel → MBGameModel → GameModel. It exposes 10 public/protected members: 8 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMarriageModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultMarriageModel → MarriageModel → MBGameModel → GameModel. The surface is method-led (methods 8/10, properties 2/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MinimumMarriageAgeMale` | `public override int MinimumMarriageAgeMale` | property |
| `MinimumMarriageAgeFemale` | `public override int MinimumMarriageAgeFemale` | property |
| `IsCoupleSuitableForMarriage` | `public override bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)` | method |
| `IsClanSuitableForMarriage` | `public override bool IsClanSuitableForMarriage(Clan clan)` | method |
| `NpcCoupleMarriageChance` | `public override float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero)` | method |
| `ShouldNpcMarriageBetweenClansBeAllowed` | `public override bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan)` | method |
| `List` | `public override List<Hero>GetAdultChildrenSuitableForMarriage(Hero hero)` | method |
| `GetEffectiveRelationIncrease` | `public override int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero)` | method |
| `IsSuitableForMarriage` | `public override bool IsSuitableForMarriage(Hero maidenOrSuitor)` | method |
| `GetClanAfterMarriage` | `public override Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MarriageModel](../MarriageModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
