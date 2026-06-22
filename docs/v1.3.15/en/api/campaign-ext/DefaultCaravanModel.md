<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCaravanModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCaravanModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCaravanModel : CaravanModel`
**Base:** `CaravanModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs`

## Overview

`DefaultCaravanModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultCaravanModel>(new MyDefaultCaravanModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxNumberOfItemsToBuyFromSingleCategory` | `public override int MaxNumberOfItemsToBuyFromSingleCategory { get; }` |

## Key Methods

### GetEliteCaravanSpawnChance
```csharp
public override float GetEliteCaravanSpawnChance(Hero hero)
```

### GetPowerChangeAfterCaravanCreation
```csharp
public override int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty)
```

### CanHeroCreateCaravan
```csharp
public override bool CanHeroCreateCaravan(Hero hero)
```

### GetCaravanFormingCost
```csharp
public override int GetCaravanFormingCost(bool largerCaravan, bool navalCaravan)
```

### GetInitialTradeGold
```csharp
public override int GetInitialTradeGold(Hero owner, bool navalCaravan, bool largeCaravan)
```

### GetMaxGoldToSpendOnOneItemCategory
```csharp
public override int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory)
```

## Usage Example

```csharp
// Typical usage of DefaultCaravanModel (Model)
Game.Current.ReplaceModel<DefaultCaravanModel>(new MyDefaultCaravanModel());
```

## See Also

- [Complete Class Catalog](../catalog)