<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroAgentLocationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HeroAgentLocationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeroAgentLocationModel : MBGameModel<HeroAgentLocationModel>`
**Base:** `MBGameModel<HeroAgentLocationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroAgentLocationModel.cs`

## Overview

`HeroAgentLocationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `HeroAgentLocationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### WillBeListedInOverlay
`public abstract bool WillBeListedInOverlay(LocationCharacter locationCharacter)`

**Purpose:** Handles logic related to `will be listed in overlay`.

### GetLocationForHero
`public abstract Location GetLocationForHero(Hero hero, Settlement settlement, out HeroAgentLocationModel.HeroLocationDetail heroSpawnDetail)`

**Purpose:** Gets the current value of `location for hero`.

## Usage Example

```csharp
var implementation = new CustomHeroAgentLocationModel();
```

## See Also

- [Complete Class Catalog](../catalog)