---
title: "ExecutionRelationModel"
description: "ExecutionRelationModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<ExecutionRelationModel>; 11 exposed members (1 methods, 10 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/ExecutionRelationModel.cs."
---
# ExecutionRelationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ExecutionRelationModel : MBGameModel<ExecutionRelationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ExecutionRelationModel.cs`

## Overview

ExecutionRelationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/ExecutionRelationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<ExecutionRelationModel>; the inheritance chain is ExecutionRelationModel → MBGameModel. It exposes 11 public/protected members: 1 methods, 10 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ExecutionRelationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain ExecutionRelationModel → MBGameModel. The surface is property-led (properties 10/11, methods 1/11), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/ExecutionRelationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HeroKillingHeroClanRelationPenalty` | `public abstract int HeroKillingHeroClanRelationPenalty` | property |
| `HeroKillingHeroFriendRelationPenalty` | `public abstract int HeroKillingHeroFriendRelationPenalty` | property |
| `PlayerExecutingHeroFactionRelationPenaltyDishonorable` | `public abstract int PlayerExecutingHeroFactionRelationPenaltyDishonorable` | property |
| `PlayerExecutingHeroClanRelationPenaltyDishonorable` | `public abstract int PlayerExecutingHeroClanRelationPenaltyDishonorable` | property |
| `PlayerExecutingHeroFriendRelationPenaltyDishonorable` | `public abstract int PlayerExecutingHeroFriendRelationPenaltyDishonorable` | property |
| `PlayerExecutingHeroHonorPenalty` | `public abstract int PlayerExecutingHeroHonorPenalty` | property |
| `PlayerExecutingHeroFactionRelationPenalty` | `public abstract int PlayerExecutingHeroFactionRelationPenalty` | property |
| `PlayerExecutingHeroHonorableNobleRelationPenalty` | `public abstract int PlayerExecutingHeroHonorableNobleRelationPenalty` | property |
| `PlayerExecutingHeroClanRelationPenalty` | `public abstract int PlayerExecutingHeroClanRelationPenalty` | property |
| `PlayerExecutingHeroFriendRelationPenalty` | `public abstract int PlayerExecutingHeroFriendRelationPenalty` | property |
| `GetRelationChangeForExecutingHero` | `public abstract int GetRelationChangeForExecutingHero(Hero victim, Hero hero, out bool showQuickNotification);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
