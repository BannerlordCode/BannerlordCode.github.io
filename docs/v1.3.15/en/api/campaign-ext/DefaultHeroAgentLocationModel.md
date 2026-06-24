<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultHeroAgentLocationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultHeroAgentLocationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroAgentLocationModel : HeroAgentLocationModel`
**Base:** `HeroAgentLocationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroAgentLocationModel.cs`

## Overview

`DefaultHeroAgentLocationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultHeroAgentLocationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### WillBeListedInOverlay
`public override bool WillBeListedInOverlay(LocationCharacter locationCharacter)`

**Purpose:** Handles logic related to `will be listed in overlay`.

### GetLocationForHero
`public override Location GetLocationForHero(Hero hero, Settlement settlement, out HeroAgentLocationModel.HeroLocationDetail heroLocationDetail)`

**Purpose:** Gets the current value of `location for hero`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultHeroAgentLocationModel>(new MyDefaultHeroAgentLocationModel());
```

## See Also

- [Complete Class Catalog](../catalog)