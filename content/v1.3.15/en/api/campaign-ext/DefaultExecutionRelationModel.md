---
title: "DefaultExecutionRelationModel"
description: "Auto-generated class reference for DefaultExecutionRelationModel."
---
# DefaultExecutionRelationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultExecutionRelationModel : ExecutionRelationModel`
**Base:** `ExecutionRelationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultExecutionRelationModel.cs`

## Overview

`DefaultExecutionRelationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultExecutionRelationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HeroKillingHeroClanRelationPenalty` | `public override int HeroKillingHeroClanRelationPenalty { get; }` |
| `HeroKillingHeroFriendRelationPenalty` | `public override int HeroKillingHeroFriendRelationPenalty { get; }` |
| `PlayerExecutingHeroFactionRelationPenaltyDishonorable` | `public override int PlayerExecutingHeroFactionRelationPenaltyDishonorable { get; }` |
| `PlayerExecutingHeroClanRelationPenaltyDishonorable` | `public override int PlayerExecutingHeroClanRelationPenaltyDishonorable { get; }` |
| `PlayerExecutingHeroFriendRelationPenaltyDishonorable` | `public override int PlayerExecutingHeroFriendRelationPenaltyDishonorable { get; }` |
| `PlayerExecutingHeroHonorPenalty` | `public override int PlayerExecutingHeroHonorPenalty { get; }` |
| `PlayerExecutingHeroFactionRelationPenalty` | `public override int PlayerExecutingHeroFactionRelationPenalty { get; }` |
| `PlayerExecutingHeroHonorableNobleRelationPenalty` | `public override int PlayerExecutingHeroHonorableNobleRelationPenalty { get; }` |
| `PlayerExecutingHeroClanRelationPenalty` | `public override int PlayerExecutingHeroClanRelationPenalty { get; }` |
| `PlayerExecutingHeroFriendRelationPenalty` | `public override int PlayerExecutingHeroFriendRelationPenalty { get; }` |

## Key Methods

### GetRelationChangeForExecutingHero
`public override int GetRelationChangeForExecutingHero(Hero victim, Hero hero, out bool showQuickNotification)`

**Purpose:** Reads and returns the relation change for executing hero value held by the this instance.

```csharp
// Obtain an instance of DefaultExecutionRelationModel from the subsystem API first
DefaultExecutionRelationModel defaultExecutionRelationModel = ...;
var result = defaultExecutionRelationModel.GetRelationChangeForExecutingHero(victim, hero, showQuickNotification);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultExecutionRelationModel>(new MyDefaultExecutionRelationModel());
```

## See Also

- [Area Index](../)