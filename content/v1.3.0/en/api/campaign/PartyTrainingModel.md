---
title: "PartyTrainingModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTrainingModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyTrainingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTrainingModel : MBGameModel<PartyTrainingModel>`
**Base:** `MBGameModel<PartyTrainingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTrainingModel.cs`

## Overview

`PartyTrainingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyTrainingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GenerateSharedXp
`public abstract int GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty)`

**Purpose:** Handles logic related to `generate shared xp`.

### CalculateXpGainFromBattles
`public abstract ExplainedNumber CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party)`

**Purpose:** Handles logic related to `calculate xp gain from battles`.

### GetXpReward
`public abstract int GetXpReward(CharacterObject character)`

**Purpose:** Gets the current value of `xp reward`.

### GetEffectiveDailyExperience
`public abstract ExplainedNumber GetEffectiveDailyExperience(MobileParty party, TroopRosterElement troop)`

**Purpose:** Gets the current value of `effective daily experience`.

## Usage Example

```csharp
var implementation = new CustomPartyTrainingModel();
```

## See Also

- [Complete Class Catalog](../catalog)