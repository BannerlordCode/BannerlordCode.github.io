<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultKingdomCreationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultKingdomCreationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultKingdomCreationModel : KingdomCreationModel`
**Base:** `KingdomCreationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomCreationModel.cs`

## Overview

`DefaultKingdomCreationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultKingdomCreationModel>(new MyDefaultKingdomCreationModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumClanTierToCreateKingdom` | `public override int MinimumClanTierToCreateKingdom { get; }` |
| `MinimumNumberOfSettlementsOwnedToCreateKingdom` | `public override int MinimumNumberOfSettlementsOwnedToCreateKingdom { get; }` |
| `MinimumTroopCountToCreateKingdom` | `public override int MinimumTroopCountToCreateKingdom { get; }` |
| `MaximumNumberOfInitialPolicies` | `public override int MaximumNumberOfInitialPolicies { get; }` |

## Key Methods

### IsPlayerKingdomCreationPossible
```csharp
public override bool IsPlayerKingdomCreationPossible(out List<TextObject> explanations)
```

### IsPlayerKingdomAbdicationPossible
```csharp
public override bool IsPlayerKingdomAbdicationPossible(out List<TextObject> explanations)
```

### GetAvailablePlayerKingdomCultures
```csharp
public override IEnumerable<CultureObject> GetAvailablePlayerKingdomCultures()
```

## Usage Example

```csharp
// Typical usage of DefaultKingdomCreationModel (Model)
Game.Current.ReplaceModel<DefaultKingdomCreationModel>(new MyDefaultKingdomCreationModel());
```

## See Also

- [Complete Class Catalog](../catalog)