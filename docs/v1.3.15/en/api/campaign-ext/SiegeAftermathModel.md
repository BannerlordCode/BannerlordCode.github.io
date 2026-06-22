<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeAftermathModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeAftermathModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeAftermathModel : MBGameModel<SiegeAftermathModel>`
**Base:** `MBGameModel<SiegeAftermathModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeAftermathModel.cs`

## Overview

`SiegeAftermathModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SiegeAftermathModel>(new MySiegeAftermathModel())` to change how it computes.

## Key Methods

### GetSiegeAftermathTraitXpChangeForPlayer
```csharp
public abstract int GetSiegeAftermathTraitXpChangeForPlayer(TraitObject trait, Settlement devastatedSettlement, SiegeAftermathAction.SiegeAftermath aftermathType)
```

## Usage Example

```csharp
// Typical usage of SiegeAftermathModel (Model)
Game.Current.ReplaceModel<SiegeAftermathModel>(new MySiegeAftermathModel());
```

## See Also

- [Complete Class Catalog](../catalog)