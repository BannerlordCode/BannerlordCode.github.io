---
title: "DefaultMarriageModel"
description: "DefaultMarriageModel: a public class in TaleWorlds.CampaignSystem, inheriting MarriageModel; 10 exposed members (8 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs."
---
# DefaultMarriageModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMarriageModel : MarriageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs`

## Overview

DefaultMarriageModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs. It is a public class, implementing/inheriting MarriageModel; the inheritance chain is DefaultMarriageModel → MarriageModel → MBGameModel. It exposes 10 public/protected members: 8 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMarriageModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultMarriageModel → MarriageModel → MBGameModel. The surface is method-led (methods 8/10, properties 2/10), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MarriageModel](../MarriageModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
