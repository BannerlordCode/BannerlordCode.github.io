---
title: "BarterModel"
description: "Auto-generated class reference for BarterModel."
---
# BarterModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BarterModel : MBGameModel<BarterModel>`
**Base:** `MBGameModel<BarterModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BarterModel.cs`

## Overview

`BarterModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BarterModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BarterCooldownWithHeroInDays` | `public abstract int BarterCooldownWithHeroInDays { get; }` |
| `MaximumPercentageOfNpcGoldToSpendAtBarter` | `public abstract float MaximumPercentageOfNpcGoldToSpendAtBarter { get; }` |

## Key Methods

### CalculateOverpayRelationIncreaseCosts
`public abstract int CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)`

**Purpose:** Calculates the current value or result of overpay relation increase costs.

```csharp
// Obtain an instance of BarterModel from the subsystem API first
BarterModel barterModel = ...;
var result = barterModel.CalculateOverpayRelationIncreaseCosts(hero, 0);
```

### GetBarterPenalty
`public abstract ExplainedNumber GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)`

**Purpose:** Reads and returns the barter penalty value held by the this instance.

```csharp
// Obtain an instance of BarterModel from the subsystem API first
BarterModel barterModel = ...;
var result = barterModel.GetBarterPenalty(faction, itemBarterable, otherHero, otherParty);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BarterModel instance = ...;
```

## See Also

- [Area Index](../)