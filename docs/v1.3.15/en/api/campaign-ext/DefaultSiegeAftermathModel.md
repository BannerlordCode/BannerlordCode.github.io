<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSiegeAftermathModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSiegeAftermathModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeAftermathModel : SiegeAftermathModel`
**Base:** `SiegeAftermathModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeAftermathModel.cs`

## Overview

`DefaultSiegeAftermathModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSiegeAftermathModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSiegeAftermathTraitXpChangeForPlayer
`public override int GetSiegeAftermathTraitXpChangeForPlayer(TraitObject trait, Settlement devastatedSettlement, SiegeAftermathAction.SiegeAftermath aftermathType)`

**Purpose:** Gets the current value of `siege aftermath trait xp change for player`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSiegeAftermathModel>(new MyDefaultSiegeAftermathModel());
```

## See Also

- [Complete Class Catalog](../catalog)