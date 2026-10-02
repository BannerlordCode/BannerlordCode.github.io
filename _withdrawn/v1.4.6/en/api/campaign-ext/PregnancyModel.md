---
title: "PregnancyModel"
description: "PregnancyModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<PregnancyModel>; 6 exposed members (1 methods, 5 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PregnancyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PregnancyModel : MBGameModel<PregnancyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

PregnancyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PregnancyModel>; the inheritance chain is PregnancyModel → MBGameModel → GameModel. It exposes 6 public/protected members: 1 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PregnancyModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain PregnancyModel → MBGameModel → GameModel. The surface is property-led (properties 5/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetDailyChanceOfPregnancyForHero` | `public abstract float GetDailyChanceOfPregnancyForHero(Hero hero);` | method |
| `PregnancyDurationInDays` | `public abstract float PregnancyDurationInDays` | property |
| `MaternalMortalityProbabilityInLabor` | `public abstract float MaternalMortalityProbabilityInLabor` | property |
| `StillbirthProbability` | `public abstract float StillbirthProbability` | property |
| `DeliveringFemaleOffspringProbability` | `public abstract float DeliveringFemaleOffspringProbability` | property |
| `DeliveringTwinsProbability` | `public abstract float DeliveringTwinsProbability` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
