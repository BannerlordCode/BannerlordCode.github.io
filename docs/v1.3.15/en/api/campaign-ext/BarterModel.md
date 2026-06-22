<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BarterModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BarterModel : MBGameModel<BarterModel>`
**Base:** `MBGameModel<BarterModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BarterModel.cs`

## Overview

`BarterModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<BarterModel>(new MyBarterModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `BarterCooldownWithHeroInDays` | `public abstract int BarterCooldownWithHeroInDays { get; }` |
| `MaximumPercentageOfNpcGoldToSpendAtBarter` | `public abstract float MaximumPercentageOfNpcGoldToSpendAtBarter { get; }` |

## Key Methods

### CalculateOverpayRelationIncreaseCosts
```csharp
public abstract int CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)
```

### GetBarterPenalty
```csharp
public abstract ExplainedNumber GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)
```

## Usage Example

```csharp
// Typical usage of BarterModel (Model)
Game.Current.ReplaceModel<BarterModel>(new MyBarterModel());
```

## See Also

- [Complete Class Catalog](../catalog)