---
title: "PartyWageModel"
description: "Auto-generated class reference for PartyWageModel."
---
# PartyWageModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyWageModel : MBGameModel<PartyWageModel>`
**Base:** `MBGameModel<PartyWageModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyWageModel.cs`

## Overview

`PartyWageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyWageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxWagePaymentLimit` | `public abstract int MaxWagePaymentLimit { get; }` |

## Key Methods

### GetCharacterWage
`public abstract int GetCharacterWage(CharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the character wage value held by the this instance.

```csharp
// Obtain an instance of PartyWageModel from the subsystem API first
PartyWageModel partyWageModel = ...;
var result = partyWageModel.GetCharacterWage(character);
```

### GetTotalWage
`public abstract ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Reads and returns the total wage value held by the this instance.

```csharp
// Obtain an instance of PartyWageModel from the subsystem API first
PartyWageModel partyWageModel = ...;
var result = partyWageModel.GetTotalWage(mobileParty, troopRoster, false);
```

### GetTroopRecruitmentCost
`public abstract ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)`

**Purpose:** **Purpose:** Reads and returns the troop recruitment cost value held by the this instance.

```csharp
// Obtain an instance of PartyWageModel from the subsystem API first
PartyWageModel partyWageModel = ...;
var result = partyWageModel.GetTroopRecruitmentCost(troop, buyerHero, false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PartyWageModel instance = ...;
```

## See Also

- [Area Index](../)