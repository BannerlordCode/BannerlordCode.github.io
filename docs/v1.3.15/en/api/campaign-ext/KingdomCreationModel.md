<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomCreationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomCreationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomCreationModel : MBGameModel<KingdomCreationModel>`
**Base:** `MBGameModel<KingdomCreationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomCreationModel.cs`

## Overview

`KingdomCreationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<KingdomCreationModel>(new MyKingdomCreationModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumClanTierToCreateKingdom` | `public abstract int MinimumClanTierToCreateKingdom { get; }` |
| `MinimumNumberOfSettlementsOwnedToCreateKingdom` | `public abstract int MinimumNumberOfSettlementsOwnedToCreateKingdom { get; }` |
| `MinimumTroopCountToCreateKingdom` | `public abstract int MinimumTroopCountToCreateKingdom { get; }` |
| `MaximumNumberOfInitialPolicies` | `public abstract int MaximumNumberOfInitialPolicies { get; }` |

## Key Methods

### IsPlayerKingdomCreationPossible
```csharp
public abstract bool IsPlayerKingdomCreationPossible(out List<TextObject> explanations)
```

### IsPlayerKingdomAbdicationPossible
```csharp
public abstract bool IsPlayerKingdomAbdicationPossible(out List<TextObject> explanations)
```

### GetAvailablePlayerKingdomCultures
```csharp
public abstract IEnumerable<CultureObject> GetAvailablePlayerKingdomCultures()
```

## Usage Example

```csharp
// Typical usage of KingdomCreationModel (Model)
Game.Current.ReplaceModel<KingdomCreationModel>(new MyKingdomCreationModel());
```

## See Also

- [Complete Class Catalog](../catalog)