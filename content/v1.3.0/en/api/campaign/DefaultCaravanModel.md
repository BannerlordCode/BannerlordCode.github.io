---
title: "DefaultCaravanModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCaravanModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultCaravanModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCaravanModel : CaravanModel`
**Base:** `CaravanModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs`

## Overview

`DefaultCaravanModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCaravanModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxNumberOfItemsToBuyFromSingleCategory` | `public override int MaxNumberOfItemsToBuyFromSingleCategory { get; }` |

## Key Methods

### GetEliteCaravanSpawnChance
`public override float GetEliteCaravanSpawnChance(Hero hero)`

**Purpose:** Gets the current value of `elite caravan spawn chance`.

### GetPowerChangeAfterCaravanCreation
`public override int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty)`

**Purpose:** Gets the current value of `power change after caravan creation`.

### CanHeroCreateCaravan
`public override bool CanHeroCreateCaravan(Hero hero)`

**Purpose:** Checks whether the current object can `hero create caravan`.

### GetCaravanFormingCost
`public override int GetCaravanFormingCost(bool largerCaravan, bool navalCaravan)`

**Purpose:** Gets the current value of `caravan forming cost`.

### GetInitialTradeGold
`public override int GetInitialTradeGold(Hero owner, bool navalCaravan, bool largeCaravan)`

**Purpose:** Gets the current value of `initial trade gold`.

### GetMaxGoldToSpendOnOneItemCategory
`public override int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory)`

**Purpose:** Gets the current value of `max gold to spend on one item category`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCaravanModel>(new MyDefaultCaravanModel());
```

## See Also

- [Complete Class Catalog](../catalog)