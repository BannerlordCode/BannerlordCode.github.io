<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultHeroAgentLocationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultHeroAgentLocationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroAgentLocationModel : HeroAgentLocationModel`
**Base:** `HeroAgentLocationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroAgentLocationModel.cs`

## Overview

`DefaultHeroAgentLocationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultHeroAgentLocationModel>(new MyDefaultHeroAgentLocationModel())` to change how it computes.

## Key Methods

### WillBeListedInOverlay
```csharp
public override bool WillBeListedInOverlay(LocationCharacter locationCharacter)
```

### GetLocationForHero
```csharp
public override Location GetLocationForHero(Hero hero, Settlement settlement, out HeroAgentLocationModel.HeroLocationDetail heroLocationDetail)
```

## Usage Example

```csharp
// Typical usage of DefaultHeroAgentLocationModel (Model)
Game.Current.ReplaceModel<DefaultHeroAgentLocationModel>(new MyDefaultHeroAgentLocationModel());
```

## See Also

- [Complete Class Catalog](../catalog)