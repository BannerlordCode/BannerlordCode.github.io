<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyDesertionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyDesertionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyDesertionModel : MBGameModel<PartyDesertionModel>`
**Base:** `MBGameModel<PartyDesertionModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyDesertionModel.cs`

## Overview

`PartyDesertionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyDesertionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTroopsToDesert
`public abstract TroopRoster GetTroopsToDesert(MobileParty mobileParty)`

**Purpose:** Gets the current value of `troops to desert`.

### GetDesertionChanceForTroop
`public abstract float GetDesertionChanceForTroop(MobileParty mobileParty, in TroopRosterElement troopRosterElement)`

**Purpose:** Gets the current value of `desertion chance for troop`.

### GetMoraleThresholdForTroopDesertion
`public abstract int GetMoraleThresholdForTroopDesertion()`

**Purpose:** Gets the current value of `morale threshold for troop desertion`.

## Usage Example

```csharp
var implementation = new CustomPartyDesertionModel();
```

## See Also

- [Complete Class Catalog](../catalog)