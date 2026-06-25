---
title: "DefaultPartyDesertionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyDesertionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyDesertionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyDesertionModel : PartyDesertionModel`
**Base:** `PartyDesertionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyDesertionModel.cs`

## Overview

`DefaultPartyDesertionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyDesertionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMoraleThresholdForTroopDesertion
`public override int GetMoraleThresholdForTroopDesertion()`

**Purpose:** Gets the current value of `morale threshold for troop desertion`.

### GetDesertionChanceForTroop
`public override float GetDesertionChanceForTroop(MobileParty mobileParty, in TroopRosterElement troopRosterElement)`

**Purpose:** Gets the current value of `desertion chance for troop`.

### GetTroopsToDesert
`public override TroopRoster GetTroopsToDesert(MobileParty mobileParty)`

**Purpose:** Gets the current value of `troops to desert`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyDesertionModel>(new MyDefaultPartyDesertionModel());
```

## See Also

- [Complete Class Catalog](../catalog)