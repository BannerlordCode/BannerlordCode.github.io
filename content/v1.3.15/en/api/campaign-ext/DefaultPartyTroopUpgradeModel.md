---
title: "DefaultPartyTroopUpgradeModel"
description: "Auto-generated class reference for DefaultPartyTroopUpgradeModel."
---
# DefaultPartyTroopUpgradeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTroopUpgradeModel : PartyTroopUpgradeModel`
**Base:** `PartyTroopUpgradeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTroopUpgradeModel.cs`

## Overview

`DefaultPartyTroopUpgradeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyTroopUpgradeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CanPartyUpgradeTroopToTarget
`public override bool CanPartyUpgradeTroopToTarget(PartyBase upgradingParty, CharacterObject upgradeableCharacter, CharacterObject upgradeTarget)`

**Purpose:** Checks whether the this instance meets the preconditions for party upgrade troop to target.

```csharp
// Obtain an instance of DefaultPartyTroopUpgradeModel from the subsystem API first
DefaultPartyTroopUpgradeModel defaultPartyTroopUpgradeModel = ...;
var result = defaultPartyTroopUpgradeModel.CanPartyUpgradeTroopToTarget(upgradingParty, upgradeableCharacter, upgradeTarget);
```

### IsTroopUpgradeable
`public override bool IsTroopUpgradeable(PartyBase party, CharacterObject character)`

**Purpose:** Determines whether the this instance is in the troop upgradeable state or condition.

```csharp
// Obtain an instance of DefaultPartyTroopUpgradeModel from the subsystem API first
DefaultPartyTroopUpgradeModel defaultPartyTroopUpgradeModel = ...;
var result = defaultPartyTroopUpgradeModel.IsTroopUpgradeable(party, character);
```

### GetXpCostForUpgrade
`public override int GetXpCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)`

**Purpose:** Reads and returns the xp cost for upgrade value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyTroopUpgradeModel from the subsystem API first
DefaultPartyTroopUpgradeModel defaultPartyTroopUpgradeModel = ...;
var result = defaultPartyTroopUpgradeModel.GetXpCostForUpgrade(party, characterObject, upgradeTarget);
```

### GetGoldCostForUpgrade
`public override ExplainedNumber GetGoldCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)`

**Purpose:** Reads and returns the gold cost for upgrade value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyTroopUpgradeModel from the subsystem API first
DefaultPartyTroopUpgradeModel defaultPartyTroopUpgradeModel = ...;
var result = defaultPartyTroopUpgradeModel.GetGoldCostForUpgrade(party, characterObject, upgradeTarget);
```

### GetSkillXpFromUpgradingTroops
`public override int GetSkillXpFromUpgradingTroops(PartyBase party, CharacterObject troop, int numberOfTroops)`

**Purpose:** Reads and returns the skill xp from upgrading troops value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyTroopUpgradeModel from the subsystem API first
DefaultPartyTroopUpgradeModel defaultPartyTroopUpgradeModel = ...;
var result = defaultPartyTroopUpgradeModel.GetSkillXpFromUpgradingTroops(party, troop, 0);
```

### DoesPartyHaveRequiredItemsForUpgrade
`public override bool DoesPartyHaveRequiredItemsForUpgrade(PartyBase party, CharacterObject upgradeTarget)`

**Purpose:** Returns a boolean answer to whether party have required items for upgrade is true for the this instance.

```csharp
// Obtain an instance of DefaultPartyTroopUpgradeModel from the subsystem API first
DefaultPartyTroopUpgradeModel defaultPartyTroopUpgradeModel = ...;
var result = defaultPartyTroopUpgradeModel.DoesPartyHaveRequiredItemsForUpgrade(party, upgradeTarget);
```

### DoesPartyHaveRequiredPerksForUpgrade
`public override bool DoesPartyHaveRequiredPerksForUpgrade(PartyBase party, CharacterObject character, CharacterObject upgradeTarget, out PerkObject requiredPerk)`

**Purpose:** Returns a boolean answer to whether party have required perks for upgrade is true for the this instance.

```csharp
// Obtain an instance of DefaultPartyTroopUpgradeModel from the subsystem API first
DefaultPartyTroopUpgradeModel defaultPartyTroopUpgradeModel = ...;
var result = defaultPartyTroopUpgradeModel.DoesPartyHaveRequiredPerksForUpgrade(party, character, upgradeTarget, requiredPerk);
```

### GetUpgradeChanceForTroopUpgrade
`public override float GetUpgradeChanceForTroopUpgrade(PartyBase party, CharacterObject troop, int upgradeTargetIndex)`

**Purpose:** Reads and returns the upgrade chance for troop upgrade value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyTroopUpgradeModel from the subsystem API first
DefaultPartyTroopUpgradeModel defaultPartyTroopUpgradeModel = ...;
var result = defaultPartyTroopUpgradeModel.GetUpgradeChanceForTroopUpgrade(party, troop, 0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyTroopUpgradeModel>(new MyDefaultPartyTroopUpgradeModel());
```

## See Also

- [Area Index](../)