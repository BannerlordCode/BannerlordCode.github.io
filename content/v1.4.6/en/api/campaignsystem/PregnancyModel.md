---
title: "PregnancyModel"
description: "PregnancyModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<PregnancyModel>; 6 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs."
---
# PregnancyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PregnancyModel : MBGameModel<PregnancyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs`

## Overview

PregnancyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PregnancyModel>; the inheritance chain is PregnancyModel → MBGameModel. It exposes 6 public/protected members: 1 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PregnancyModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain PregnancyModel → MBGameModel. The surface is property-led (properties 5/6, methods 1/6), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetDailyChanceOfPregnancyForHero` | `public abstract float GetDailyChanceOfPregnancyForHero(Hero hero);` | method |
| `PregnancyDurationInDays` | `public abstract float PregnancyDurationInDays` | property |
| `MaternalMortalityProbabilityInLabor` | `public abstract float MaternalMortalityProbabilityInLabor` | property |
| `StillbirthProbability` | `public abstract float StillbirthProbability` | property |
| `DeliveringFemaleOffspringProbability` | `public abstract float DeliveringFemaleOffspringProbability` | property |
| `DeliveringTwinsProbability` | `public abstract float DeliveringTwinsProbability` | property |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
