---
title: "NotablePowerModel"
description: "NotablePowerModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<NotablePowerModel>; 7 exposed members (5 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/NotablePowerModel.cs."
---
# NotablePowerModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class NotablePowerModel : MBGameModel<NotablePowerModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/NotablePowerModel.cs`

## Overview

NotablePowerModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/NotablePowerModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<NotablePowerModel>; the inheritance chain is NotablePowerModel → MBGameModel. It exposes 7 public/protected members: 5 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NotablePowerModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain NotablePowerModel → MBGameModel. The surface is method-led (methods 5/7, properties 2/7), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/NotablePowerModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegularNotableMaxPowerLevel` | `public abstract int RegularNotableMaxPowerLevel` | property |
| `NotableDisappearPowerLimit` | `public abstract int NotableDisappearPowerLimit` | property |
| `CalculateDailyPowerChangeForHero` | `public abstract ExplainedNumber CalculateDailyPowerChangeForHero(Hero hero, bool includeDescriptions = false);` | method |
| `GetPowerRankName` | `public abstract TextObject GetPowerRankName(Hero hero);` | method |
| `GetInfluenceBonusToClan` | `public abstract float GetInfluenceBonusToClan(Hero hero);` | method |
| `GetInitialPower` | `public abstract int GetInitialPower(Hero hero);` | method |
| `GetInitialNotableSupporterCost` | `public abstract int GetInitialNotableSupporterCost(Hero hero);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
