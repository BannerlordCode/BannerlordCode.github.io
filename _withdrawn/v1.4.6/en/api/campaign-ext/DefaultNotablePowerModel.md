---
title: "DefaultNotablePowerModel"
description: "DefaultNotablePowerModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting NotablePowerModel; 7 exposed members (5 methods, 2 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultNotablePowerModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultNotablePowerModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultNotablePowerModel : NotablePowerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultNotablePowerModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultNotablePowerModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultNotablePowerModel.cs. It is a public class, implementing/inheriting NotablePowerModel; the inheritance chain is DefaultNotablePowerModel → NotablePowerModel → MBGameModel → GameModel. It exposes 7 public/protected members: 5 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultNotablePowerModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultNotablePowerModel → NotablePowerModel → MBGameModel → GameModel. The surface is method-led (methods 5/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultNotablePowerModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NotableDisappearPowerLimit` | `public override int NotableDisappearPowerLimit` | property |
| `CalculateDailyPowerChangeForHero` | `public override ExplainedNumber CalculateDailyPowerChangeForHero(Hero hero, bool includeDescriptions = false)` | method |
| `RegularNotableMaxPowerLevel` | `public override int RegularNotableMaxPowerLevel` | property |
| `GetPowerRankName` | `public override TextObject GetPowerRankName(Hero hero)` | method |
| `GetInfluenceBonusToClan` | `public override float GetInfluenceBonusToClan(Hero hero)` | method |
| `GetInitialPower` | `public override int GetInitialPower(Hero hero)` | method |
| `GetInitialNotableSupporterCost` | `public override int GetInitialNotableSupporterCost(Hero hero)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface NotablePowerModel](../NotablePowerModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
