---
title: "MarriageModel"
description: "MarriageModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<MarriageModel>; 10 exposed members (8 methods, 2 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MarriageModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MarriageModel : MBGameModel<MarriageModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

MarriageModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<MarriageModel>; the inheritance chain is MarriageModel → MBGameModel → GameModel. It exposes 10 public/protected members: 8 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MarriageModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain MarriageModel → MBGameModel → GameModel. The surface is method-led (methods 8/10, properties 2/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsCoupleSuitableForMarriage` | `public abstract bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero);` | method |
| `GetEffectiveRelationIncrease` | `public abstract int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero);` | method |
| `GetClanAfterMarriage` | `public abstract Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero);` | method |
| `IsSuitableForMarriage` | `public abstract bool IsSuitableForMarriage(Hero hero);` | method |
| `IsClanSuitableForMarriage` | `public abstract bool IsClanSuitableForMarriage(Clan clan);` | method |
| `NpcCoupleMarriageChance` | `public abstract float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero);` | method |
| `ShouldNpcMarriageBetweenClansBeAllowed` | `public abstract bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan);` | method |
| `List` | `public abstract List<Hero>GetAdultChildrenSuitableForMarriage(Hero hero);` | method |
| `MinimumMarriageAgeMale` | `public abstract int MinimumMarriageAgeMale` | property |
| `MinimumMarriageAgeFemale` | `public abstract int MinimumMarriageAgeFemale` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
