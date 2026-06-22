<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroAgentLocationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroAgentLocationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeroAgentLocationModel : MBGameModel<HeroAgentLocationModel>`
**Base:** `MBGameModel<HeroAgentLocationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroAgentLocationModel.cs`

## Overview

`HeroAgentLocationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<HeroAgentLocationModel>(new MyHeroAgentLocationModel())` to change how it computes.

## Key Methods

### WillBeListedInOverlay
```csharp
public abstract bool WillBeListedInOverlay(LocationCharacter locationCharacter)
```

### GetLocationForHero
```csharp
public abstract Location GetLocationForHero(Hero hero, Settlement settlement, out HeroAgentLocationModel.HeroLocationDetail heroSpawnDetail)
```

## Usage Example

```csharp
// Typical usage of HeroAgentLocationModel (Model)
Game.Current.ReplaceModel<HeroAgentLocationModel>(new MyHeroAgentLocationModel());
```

## See Also

- [Complete Class Catalog](../catalog)