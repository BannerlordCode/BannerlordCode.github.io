<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomCreationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomCreationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomCreationModel : MBGameModel<KingdomCreationModel>`
**Base:** `MBGameModel<KingdomCreationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomCreationModel.cs`

## Overview

`KingdomCreationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `KingdomCreationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumClanTierToCreateKingdom` | `public abstract int MinimumClanTierToCreateKingdom { get; }` |
| `MinimumNumberOfSettlementsOwnedToCreateKingdom` | `public abstract int MinimumNumberOfSettlementsOwnedToCreateKingdom { get; }` |
| `MinimumTroopCountToCreateKingdom` | `public abstract int MinimumTroopCountToCreateKingdom { get; }` |
| `MaximumNumberOfInitialPolicies` | `public abstract int MaximumNumberOfInitialPolicies { get; }` |

## Key Methods

### IsPlayerKingdomCreationPossible
`public abstract bool IsPlayerKingdomCreationPossible(out List<TextObject> explanations)`

**Purpose:** Handles logic related to `is player kingdom creation possible`.

### IsPlayerKingdomAbdicationPossible
`public abstract bool IsPlayerKingdomAbdicationPossible(out List<TextObject> explanations)`

**Purpose:** Handles logic related to `is player kingdom abdication possible`.

### GetAvailablePlayerKingdomCultures
`public abstract IEnumerable<CultureObject> GetAvailablePlayerKingdomCultures()`

**Purpose:** Gets the current value of `available player kingdom cultures`.

## Usage Example

```csharp
var implementation = new CustomKingdomCreationModel();
```

## See Also

- [Complete Class Catalog](../catalog)