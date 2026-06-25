---
title: "PartyDesertionModel"
description: "Auto-generated class reference for PartyDesertionModel."
---
# PartyDesertionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyDesertionModel : MBGameModel<PartyDesertionModel>`
**Base:** `MBGameModel<PartyDesertionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyDesertionModel.cs`

## Overview

`PartyDesertionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyDesertionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTroopsToDesert
`public abstract TroopRoster GetTroopsToDesert(MobileParty mobileParty)`

**Purpose:** Reads and returns the troops to desert value held by the this instance.

```csharp
// Obtain an instance of PartyDesertionModel from the subsystem API first
PartyDesertionModel partyDesertionModel = ...;
var result = partyDesertionModel.GetTroopsToDesert(mobileParty);
```

### GetDesertionChanceForTroop
`public abstract float GetDesertionChanceForTroop(MobileParty mobileParty, in TroopRosterElement troopRosterElement)`

**Purpose:** Reads and returns the desertion chance for troop value held by the this instance.

```csharp
// Obtain an instance of PartyDesertionModel from the subsystem API first
PartyDesertionModel partyDesertionModel = ...;
var result = partyDesertionModel.GetDesertionChanceForTroop(mobileParty, troopRosterElement);
```

### GetMoraleThresholdForTroopDesertion
`public abstract int GetMoraleThresholdForTroopDesertion()`

**Purpose:** Reads and returns the morale threshold for troop desertion value held by the this instance.

```csharp
// Obtain an instance of PartyDesertionModel from the subsystem API first
PartyDesertionModel partyDesertionModel = ...;
var result = partyDesertionModel.GetMoraleThresholdForTroopDesertion();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PartyDesertionModel instance = ...;
```

## See Also

- [Area Index](../)