---
title: "DefaultPartyDesertionModel"
description: "Auto-generated class reference for DefaultPartyDesertionModel."
---
# DefaultPartyDesertionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyDesertionModel : PartyDesertionModel`
**Base:** `PartyDesertionModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyDesertionModel.cs`

## Overview

`DefaultPartyDesertionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyDesertionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMoraleThresholdForTroopDesertion
`public override int GetMoraleThresholdForTroopDesertion()`

**Purpose:** Reads and returns the `morale threshold for troop desertion` value held by the current object.

```csharp
// Obtain an instance of DefaultPartyDesertionModel from the subsystem API first
DefaultPartyDesertionModel defaultPartyDesertionModel = ...;
var result = defaultPartyDesertionModel.GetMoraleThresholdForTroopDesertion();
```

### GetDesertionChanceForTroop
`public override float GetDesertionChanceForTroop(MobileParty mobileParty, in TroopRosterElement troopRosterElement)`

**Purpose:** Reads and returns the `desertion chance for troop` value held by the current object.

```csharp
// Obtain an instance of DefaultPartyDesertionModel from the subsystem API first
DefaultPartyDesertionModel defaultPartyDesertionModel = ...;
var result = defaultPartyDesertionModel.GetDesertionChanceForTroop(mobileParty, troopRosterElement);
```

### GetTroopsToDesert
`public override TroopRoster GetTroopsToDesert(MobileParty mobileParty)`

**Purpose:** Reads and returns the `troops to desert` value held by the current object.

```csharp
// Obtain an instance of DefaultPartyDesertionModel from the subsystem API first
DefaultPartyDesertionModel defaultPartyDesertionModel = ...;
var result = defaultPartyDesertionModel.GetTroopsToDesert(mobileParty);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyDesertionModel>(new MyDefaultPartyDesertionModel());
```

## See Also

- [Area Index](../)