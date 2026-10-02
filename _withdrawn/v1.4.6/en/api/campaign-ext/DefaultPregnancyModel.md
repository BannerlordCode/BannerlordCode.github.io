---
title: "DefaultPregnancyModel"
description: "DefaultPregnancyModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting PregnancyModel; 6 exposed members (1 methods, 5 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPregnancyModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultPregnancyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPregnancyModel : PregnancyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPregnancyModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultPregnancyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPregnancyModel.cs. It is a public class, implementing/inheriting PregnancyModel; the inheritance chain is DefaultPregnancyModel → PregnancyModel → MBGameModel → GameModel. It exposes 6 public/protected members: 1 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPregnancyModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultPregnancyModel → PregnancyModel → MBGameModel → GameModel. The surface is property-led (properties 5/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPregnancyModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PregnancyDurationInDays` | `public override float PregnancyDurationInDays` | property |
| `MaternalMortalityProbabilityInLabor` | `public override float MaternalMortalityProbabilityInLabor` | property |
| `StillbirthProbability` | `public override float StillbirthProbability` | property |
| `DeliveringFemaleOffspringProbability` | `public override float DeliveringFemaleOffspringProbability` | property |
| `DeliveringTwinsProbability` | `public override float DeliveringTwinsProbability` | property |
| `GetDailyChanceOfPregnancyForHero` | `public override float GetDailyChanceOfPregnancyForHero(Hero hero)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PregnancyModel](../PregnancyModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
