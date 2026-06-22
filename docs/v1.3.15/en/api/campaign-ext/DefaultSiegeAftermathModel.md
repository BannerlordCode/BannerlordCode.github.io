<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSiegeAftermathModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSiegeAftermathModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeAftermathModel : SiegeAftermathModel`
**Base:** `SiegeAftermathModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeAftermathModel.cs`

## Overview

`DefaultSiegeAftermathModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSiegeAftermathModel>(new MyDefaultSiegeAftermathModel())` to change how it computes.

## Key Methods

### GetSiegeAftermathTraitXpChangeForPlayer
```csharp
public override int GetSiegeAftermathTraitXpChangeForPlayer(TraitObject trait, Settlement devastatedSettlement, SiegeAftermathAction.SiegeAftermath aftermathType)
```

## Usage Example

```csharp
// Typical usage of DefaultSiegeAftermathModel (Model)
Game.Current.ReplaceModel<DefaultSiegeAftermathModel>(new MyDefaultSiegeAftermathModel());
```

## See Also

- [Complete Class Catalog](../catalog)