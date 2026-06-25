---
title: "DefaultPartyTrainingModel"
description: "Auto-generated class reference for DefaultPartyTrainingModel."
---
# DefaultPartyTrainingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTrainingModel : PartyTrainingModel`
**Base:** `PartyTrainingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTrainingModel.cs`

## Overview

`DefaultPartyTrainingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyTrainingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetXpReward
`public override int GetXpReward(CharacterObject character)`

**Purpose:** Reads and returns the `xp reward` value held by the current object.

```csharp
// Obtain an instance of DefaultPartyTrainingModel from the subsystem API first
DefaultPartyTrainingModel defaultPartyTrainingModel = ...;
var result = defaultPartyTrainingModel.GetXpReward(character);
```

### GetEffectiveDailyExperience
`public override ExplainedNumber GetEffectiveDailyExperience(MobileParty mobileParty, TroopRosterElement troop)`

**Purpose:** Reads and returns the `effective daily experience` value held by the current object.

```csharp
// Obtain an instance of DefaultPartyTrainingModel from the subsystem API first
DefaultPartyTrainingModel defaultPartyTrainingModel = ...;
var result = defaultPartyTrainingModel.GetEffectiveDailyExperience(mobileParty, troop);
```

### GenerateSharedXp
`public override int GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty)`

**Purpose:** Generates an instance, data, or representation of `shared xp`.

```csharp
// Obtain an instance of DefaultPartyTrainingModel from the subsystem API first
DefaultPartyTrainingModel defaultPartyTrainingModel = ...;
var result = defaultPartyTrainingModel.GenerateSharedXp(troop, 0, mobileParty);
```

### CalculateXpGainFromBattles
`public override ExplainedNumber CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party)`

**Purpose:** Calculates the current value or result of `xp gain from battles`.

```csharp
// Obtain an instance of DefaultPartyTrainingModel from the subsystem API first
DefaultPartyTrainingModel defaultPartyTrainingModel = ...;
var result = defaultPartyTrainingModel.CalculateXpGainFromBattles(troopRosterElement, party);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyTrainingModel>(new MyDefaultPartyTrainingModel());
```

## See Also

- [Area Index](../)