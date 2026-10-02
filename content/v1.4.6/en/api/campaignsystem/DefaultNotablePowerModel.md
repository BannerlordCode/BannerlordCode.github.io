---
title: "DefaultNotablePowerModel"
description: "DefaultNotablePowerModel: a public class in TaleWorlds.CampaignSystem, inheriting NotablePowerModel; 7 exposed members (5 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultNotablePowerModel.cs."
---
# DefaultNotablePowerModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultNotablePowerModel : NotablePowerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultNotablePowerModel.cs`

## Overview

DefaultNotablePowerModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultNotablePowerModel.cs. It is a public class, implementing/inheriting NotablePowerModel; the inheritance chain is DefaultNotablePowerModel → NotablePowerModel → MBGameModel. It exposes 7 public/protected members: 5 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultNotablePowerModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultNotablePowerModel → NotablePowerModel → MBGameModel. The surface is method-led (methods 5/7, properties 2/7), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultNotablePowerModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NotableDisappearPowerLimit` | `public override int NotableDisappearPowerLimit` | property |
| `CalculateDailyPowerChangeForHero` | `public override ExplainedNumber CalculateDailyPowerChangeForHero(Hero hero, bool includeDescriptions = false)` | method |
| `RegularNotableMaxPowerLevel` | `public override int RegularNotableMaxPowerLevel` | property |
| `GetPowerRankName` | `public override TextObject GetPowerRankName(Hero hero)` | method |
| `GetInfluenceBonusToClan` | `public override float GetInfluenceBonusToClan(Hero hero)` | method |
| `GetInitialPower` | `public override int GetInitialPower(Hero hero)` | method |
| `GetInitialNotableSupporterCost` | `public override int GetInitialNotableSupporterCost(Hero hero)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface NotablePowerModel](../NotablePowerModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
