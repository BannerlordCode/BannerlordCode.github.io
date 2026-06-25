---
title: "DefaultPartyWageModel"
description: "Auto-generated class reference for DefaultPartyWageModel."
---
# DefaultPartyWageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyWageModel : PartyWageModel`
**Base:** `PartyWageModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyWageModel.cs`

## Overview

`DefaultPartyWageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyWageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCharacterWage
`public override int GetCharacterWage(CharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the character wage value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyWageModel from the subsystem API first
DefaultPartyWageModel defaultPartyWageModel = ...;
var result = defaultPartyWageModel.GetCharacterWage(character);
```

### GetTotalWage
`public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Reads and returns the total wage value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyWageModel from the subsystem API first
DefaultPartyWageModel defaultPartyWageModel = ...;
var result = defaultPartyWageModel.GetTotalWage(mobileParty, troopRoster, false);
```

### GetTroopRecruitmentCost
`public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)`

**Purpose:** **Purpose:** Reads and returns the troop recruitment cost value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyWageModel from the subsystem API first
DefaultPartyWageModel defaultPartyWageModel = ...;
var result = defaultPartyWageModel.GetTroopRecruitmentCost(troop, buyerHero, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyWageModel>(new MyDefaultPartyWageModel());
```

## See Also

- [Area Index](../)