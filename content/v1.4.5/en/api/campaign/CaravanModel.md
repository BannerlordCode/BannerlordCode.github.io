---
title: "CaravanModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CaravanModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CaravanModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CaravanModel : MBGameModel<CaravanModel>`
**Base:** `MBGameModel<CaravanModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CaravanModel.cs`

## Overview

`CaravanModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CaravanModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxNumberOfItemsToBuyFromSingleCategory` | `public abstract int MaxNumberOfItemsToBuyFromSingleCategory { get; }` |

## Key Methods

### GetMaxGoldToSpendOnOneItemCategory
`public abstract int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory)`

**Purpose:** Gets the current value of `max gold to spend on one item category`.

### GetInitialTradeGold
`public abstract int GetInitialTradeGold(Hero owner, bool isNavalCaravan, bool eliteCaravan)`

**Purpose:** Gets the current value of `initial trade gold`.

### GetCaravanFormingCost
`public abstract int GetCaravanFormingCost(bool eliteCaravan, bool navalCaravan)`

**Purpose:** Gets the current value of `caravan forming cost`.

### GetPowerChangeAfterCaravanCreation
`public abstract int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty)`

**Purpose:** Gets the current value of `power change after caravan creation`.

### CanHeroCreateCaravan
`public abstract bool CanHeroCreateCaravan(Hero hero)`

**Purpose:** Checks whether the current object can `hero create caravan`.

### GetEliteCaravanSpawnChance
`public abstract float GetEliteCaravanSpawnChance(Hero hero)`

**Purpose:** Gets the current value of `elite caravan spawn chance`.

## Usage Example

```csharp
var implementation = new CustomCaravanModel();
```

## See Also

- [Complete Class Catalog](../catalog)