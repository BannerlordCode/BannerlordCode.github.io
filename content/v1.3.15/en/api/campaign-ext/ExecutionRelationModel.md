---
title: "ExecutionRelationModel"
description: "Auto-generated class reference for ExecutionRelationModel."
---
# ExecutionRelationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ExecutionRelationModel : MBGameModel<ExecutionRelationModel>`
**Base:** `MBGameModel<ExecutionRelationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ExecutionRelationModel.cs`

## Overview

`ExecutionRelationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ExecutionRelationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HeroKillingHeroClanRelationPenalty` | `public abstract int HeroKillingHeroClanRelationPenalty { get; }` |
| `HeroKillingHeroFriendRelationPenalty` | `public abstract int HeroKillingHeroFriendRelationPenalty { get; }` |
| `PlayerExecutingHeroFactionRelationPenaltyDishonorable` | `public abstract int PlayerExecutingHeroFactionRelationPenaltyDishonorable { get; }` |
| `PlayerExecutingHeroClanRelationPenaltyDishonorable` | `public abstract int PlayerExecutingHeroClanRelationPenaltyDishonorable { get; }` |
| `PlayerExecutingHeroFriendRelationPenaltyDishonorable` | `public abstract int PlayerExecutingHeroFriendRelationPenaltyDishonorable { get; }` |
| `PlayerExecutingHeroHonorPenalty` | `public abstract int PlayerExecutingHeroHonorPenalty { get; }` |
| `PlayerExecutingHeroFactionRelationPenalty` | `public abstract int PlayerExecutingHeroFactionRelationPenalty { get; }` |
| `PlayerExecutingHeroHonorableNobleRelationPenalty` | `public abstract int PlayerExecutingHeroHonorableNobleRelationPenalty { get; }` |
| `PlayerExecutingHeroClanRelationPenalty` | `public abstract int PlayerExecutingHeroClanRelationPenalty { get; }` |
| `PlayerExecutingHeroFriendRelationPenalty` | `public abstract int PlayerExecutingHeroFriendRelationPenalty { get; }` |

## Key Methods

### GetRelationChangeForExecutingHero
`public abstract int GetRelationChangeForExecutingHero(Hero victim, Hero hero, out bool showQuickNotification)`

**Purpose:** **Purpose:** Reads and returns the relation change for executing hero value held by the this instance.

```csharp
// Obtain an instance of ExecutionRelationModel from the subsystem API first
ExecutionRelationModel executionRelationModel = ...;
var result = executionRelationModel.GetRelationChangeForExecutingHero(victim, hero, showQuickNotification);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ExecutionRelationModel instance = ...;
```

## See Also

- [Area Index](../)