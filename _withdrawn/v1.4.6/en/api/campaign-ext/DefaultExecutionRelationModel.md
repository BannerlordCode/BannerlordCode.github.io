---
title: "DefaultExecutionRelationModel"
description: "DefaultExecutionRelationModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting ExecutionRelationModel; 11 exposed members (1 methods, 10 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultExecutionRelationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultExecutionRelationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultExecutionRelationModel : ExecutionRelationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultExecutionRelationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultExecutionRelationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultExecutionRelationModel.cs. It is a public class, implementing/inheriting ExecutionRelationModel; the inheritance chain is DefaultExecutionRelationModel → ExecutionRelationModel → MBGameModel → GameModel. It exposes 11 public/protected members: 1 methods, 10 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultExecutionRelationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultExecutionRelationModel → ExecutionRelationModel → MBGameModel → GameModel. The surface is property-led (properties 10/11, methods 1/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultExecutionRelationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `HeroKillingHeroClanRelationPenalty` | `public override int HeroKillingHeroClanRelationPenalty` | property |
| `HeroKillingHeroFriendRelationPenalty` | `public override int HeroKillingHeroFriendRelationPenalty` | property |
| `PlayerExecutingHeroFactionRelationPenaltyDishonorable` | `public override int PlayerExecutingHeroFactionRelationPenaltyDishonorable` | property |
| `PlayerExecutingHeroClanRelationPenaltyDishonorable` | `public override int PlayerExecutingHeroClanRelationPenaltyDishonorable` | property |
| `PlayerExecutingHeroFriendRelationPenaltyDishonorable` | `public override int PlayerExecutingHeroFriendRelationPenaltyDishonorable` | property |
| `PlayerExecutingHeroHonorPenalty` | `public override int PlayerExecutingHeroHonorPenalty` | property |
| `PlayerExecutingHeroFactionRelationPenalty` | `public override int PlayerExecutingHeroFactionRelationPenalty` | property |
| `PlayerExecutingHeroHonorableNobleRelationPenalty` | `public override int PlayerExecutingHeroHonorableNobleRelationPenalty` | property |
| `PlayerExecutingHeroClanRelationPenalty` | `public override int PlayerExecutingHeroClanRelationPenalty` | property |
| `PlayerExecutingHeroFriendRelationPenalty` | `public override int PlayerExecutingHeroFriendRelationPenalty` | property |
| `GetRelationChangeForExecutingHero` | `public override int GetRelationChangeForExecutingHero(Hero victim, Hero hero, out bool showQuickNotification)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ExecutionRelationModel](../ExecutionRelationModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
