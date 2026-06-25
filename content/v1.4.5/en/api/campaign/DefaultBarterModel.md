---
title: "DefaultBarterModel"
description: "Auto-generated class reference for DefaultBarterModel."
---
# DefaultBarterModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBarterModel : BarterModel`
**Base:** `BarterModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBarterModel.cs`

## Overview

`DefaultBarterModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultBarterModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateOverpayRelationIncreaseCosts
`public override int CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)`

**Purpose:** Calculates the current value or result of overpay relation increase costs.

```csharp
// Obtain an instance of DefaultBarterModel from the subsystem API first
DefaultBarterModel defaultBarterModel = ...;
var result = defaultBarterModel.CalculateOverpayRelationIncreaseCosts(hero, 0);
```

### GetBarterPenalty
`public override ExplainedNumber GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)`

**Purpose:** Reads and returns the barter penalty value held by the this instance.

```csharp
// Obtain an instance of DefaultBarterModel from the subsystem API first
DefaultBarterModel defaultBarterModel = ...;
var result = defaultBarterModel.GetBarterPenalty(faction, itemBarterable, otherHero, otherParty);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBarterModel>(new MyDefaultBarterModel());
```

## See Also

- [Area Index](../)