<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBarterModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBarterModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBarterModel : BarterModel`
**Base:** `BarterModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBarterModel.cs`

## Overview

`DefaultBarterModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultBarterModel>(new MyDefaultBarterModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `BarterCooldownWithHeroInDays` | `public override int BarterCooldownWithHeroInDays { get; }` |
| `MaximumPercentageOfNpcGoldToSpendAtBarter` | `public override float MaximumPercentageOfNpcGoldToSpendAtBarter { get; }` |

## Key Methods

### CalculateOverpayRelationIncreaseCosts
```csharp
public override int CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)
```

### GetBarterPenalty
```csharp
public override ExplainedNumber GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)
```

## Usage Example

```csharp
// Typical usage of DefaultBarterModel (Model)
Game.Current.ReplaceModel<DefaultBarterModel>(new MyDefaultBarterModel());
```

## See Also

- [Complete Class Catalog](../catalog)