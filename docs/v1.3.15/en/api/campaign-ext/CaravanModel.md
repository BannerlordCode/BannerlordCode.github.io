<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CaravanModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CaravanModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CaravanModel : MBGameModel<CaravanModel>`
**Base:** `MBGameModel<CaravanModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs`

## Overview

`CaravanModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CaravanModel>(new MyCaravanModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxNumberOfItemsToBuyFromSingleCategory` | `public abstract int MaxNumberOfItemsToBuyFromSingleCategory { get; }` |

## Key Methods

### GetMaxGoldToSpendOnOneItemCategory
```csharp
public abstract int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory)
```

### GetInitialTradeGold
```csharp
public abstract int GetInitialTradeGold(Hero owner, bool isNavalCaravan, bool eliteCaravan)
```

### GetCaravanFormingCost
```csharp
public abstract int GetCaravanFormingCost(bool eliteCaravan, bool navalCaravan)
```

### GetPowerChangeAfterCaravanCreation
```csharp
public abstract int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty)
```

### CanHeroCreateCaravan
```csharp
public abstract bool CanHeroCreateCaravan(Hero hero)
```

### GetEliteCaravanSpawnChance
```csharp
public abstract float GetEliteCaravanSpawnChance(Hero hero)
```

## Usage Example

```csharp
// Typical usage of CaravanModel (Model)
Game.Current.ReplaceModel<CaravanModel>(new MyCaravanModel());
```

## See Also

- [Complete Class Catalog](../catalog)