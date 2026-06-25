---
title: "PartyTrainingModel"
description: "Auto-generated class reference for PartyTrainingModel."
---
# PartyTrainingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTrainingModel : MBGameModel<PartyTrainingModel>`
**Base:** `MBGameModel<PartyTrainingModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyTrainingModel.cs`

## Overview

`PartyTrainingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyTrainingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GenerateSharedXp
`public abstract int GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty)`

**Purpose:** **Purpose:** Generates an instance, data, or representation of shared xp.

```csharp
// Obtain an instance of PartyTrainingModel from the subsystem API first
PartyTrainingModel partyTrainingModel = ...;
var result = partyTrainingModel.GenerateSharedXp(troop, 0, mobileParty);
```

### CalculateXpGainFromBattles
`public abstract ExplainedNumber CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party)`

**Purpose:** **Purpose:** Calculates the current value or result of xp gain from battles.

```csharp
// Obtain an instance of PartyTrainingModel from the subsystem API first
PartyTrainingModel partyTrainingModel = ...;
var result = partyTrainingModel.CalculateXpGainFromBattles(troopRosterElement, party);
```

### GetXpReward
`public abstract int GetXpReward(CharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the xp reward value held by the this instance.

```csharp
// Obtain an instance of PartyTrainingModel from the subsystem API first
PartyTrainingModel partyTrainingModel = ...;
var result = partyTrainingModel.GetXpReward(character);
```

### GetEffectiveDailyExperience
`public abstract ExplainedNumber GetEffectiveDailyExperience(MobileParty party, TroopRosterElement troop)`

**Purpose:** **Purpose:** Reads and returns the effective daily experience value held by the this instance.

```csharp
// Obtain an instance of PartyTrainingModel from the subsystem API first
PartyTrainingModel partyTrainingModel = ...;
var result = partyTrainingModel.GetEffectiveDailyExperience(party, troop);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PartyTrainingModel instance = ...;
```

## See Also

- [Area Index](../)