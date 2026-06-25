---
title: "PartyTroopUpgradeModel"
description: "Auto-generated class reference for PartyTroopUpgradeModel."
---
# PartyTroopUpgradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTroopUpgradeModel : MBGameModel<PartyTroopUpgradeModel>`
**Base:** `MBGameModel<PartyTroopUpgradeModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyTroopUpgradeModel.cs`

## Overview

`PartyTroopUpgradeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyTroopUpgradeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CanPartyUpgradeTroopToTarget
`public abstract bool CanPartyUpgradeTroopToTarget(PartyBase party, CharacterObject character, CharacterObject target)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for party upgrade troop to target.

```csharp
// Obtain an instance of PartyTroopUpgradeModel from the subsystem API first
PartyTroopUpgradeModel partyTroopUpgradeModel = ...;
var result = partyTroopUpgradeModel.CanPartyUpgradeTroopToTarget(party, character, target);
```

### IsTroopUpgradeable
`public abstract bool IsTroopUpgradeable(PartyBase party, CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the troop upgradeable state or condition.

```csharp
// Obtain an instance of PartyTroopUpgradeModel from the subsystem API first
PartyTroopUpgradeModel partyTroopUpgradeModel = ...;
var result = partyTroopUpgradeModel.IsTroopUpgradeable(party, character);
```

### DoesPartyHaveRequiredItemsForUpgrade
`public abstract bool DoesPartyHaveRequiredItemsForUpgrade(PartyBase party, CharacterObject upgradeTarget)`

**Purpose:** **Purpose:** Returns a boolean answer to whether party have required items for upgrade is true for the this instance.

```csharp
// Obtain an instance of PartyTroopUpgradeModel from the subsystem API first
PartyTroopUpgradeModel partyTroopUpgradeModel = ...;
var result = partyTroopUpgradeModel.DoesPartyHaveRequiredItemsForUpgrade(party, upgradeTarget);
```

### DoesPartyHaveRequiredPerksForUpgrade
`public abstract bool DoesPartyHaveRequiredPerksForUpgrade(PartyBase party, CharacterObject character, CharacterObject upgradeTarget, out PerkObject requiredPerk)`

**Purpose:** **Purpose:** Returns a boolean answer to whether party have required perks for upgrade is true for the this instance.

```csharp
// Obtain an instance of PartyTroopUpgradeModel from the subsystem API first
PartyTroopUpgradeModel partyTroopUpgradeModel = ...;
var result = partyTroopUpgradeModel.DoesPartyHaveRequiredPerksForUpgrade(party, character, upgradeTarget, requiredPerk);
```

### GetGoldCostForUpgrade
`public abstract ExplainedNumber GetGoldCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)`

**Purpose:** **Purpose:** Reads and returns the gold cost for upgrade value held by the this instance.

```csharp
// Obtain an instance of PartyTroopUpgradeModel from the subsystem API first
PartyTroopUpgradeModel partyTroopUpgradeModel = ...;
var result = partyTroopUpgradeModel.GetGoldCostForUpgrade(party, characterObject, upgradeTarget);
```

### GetXpCostForUpgrade
`public abstract int GetXpCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)`

**Purpose:** **Purpose:** Reads and returns the xp cost for upgrade value held by the this instance.

```csharp
// Obtain an instance of PartyTroopUpgradeModel from the subsystem API first
PartyTroopUpgradeModel partyTroopUpgradeModel = ...;
var result = partyTroopUpgradeModel.GetXpCostForUpgrade(party, characterObject, upgradeTarget);
```

### GetSkillXpFromUpgradingTroops
`public abstract int GetSkillXpFromUpgradingTroops(PartyBase party, CharacterObject troop, int numberOfTroops)`

**Purpose:** **Purpose:** Reads and returns the skill xp from upgrading troops value held by the this instance.

```csharp
// Obtain an instance of PartyTroopUpgradeModel from the subsystem API first
PartyTroopUpgradeModel partyTroopUpgradeModel = ...;
var result = partyTroopUpgradeModel.GetSkillXpFromUpgradingTroops(party, troop, 0);
```

### GetUpgradeChanceForTroopUpgrade
`public abstract float GetUpgradeChanceForTroopUpgrade(PartyBase party, CharacterObject troop, int upgradeTargetIndex)`

**Purpose:** **Purpose:** Reads and returns the upgrade chance for troop upgrade value held by the this instance.

```csharp
// Obtain an instance of PartyTroopUpgradeModel from the subsystem API first
PartyTroopUpgradeModel partyTroopUpgradeModel = ...;
var result = partyTroopUpgradeModel.GetUpgradeChanceForTroopUpgrade(party, troop, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PartyTroopUpgradeModel instance = ...;
```

## See Also

- [Area Index](../)