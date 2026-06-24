<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTroopUpgradeModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyTroopUpgradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTroopUpgradeModel : MBGameModel<PartyTroopUpgradeModel>`
**Base:** `MBGameModel<PartyTroopUpgradeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTroopUpgradeModel.cs`

## Overview

`PartyTroopUpgradeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyTroopUpgradeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CanPartyUpgradeTroopToTarget
`public abstract bool CanPartyUpgradeTroopToTarget(PartyBase party, CharacterObject character, CharacterObject target)`

**Purpose:** Checks whether the current object can `party upgrade troop to target`.

### IsTroopUpgradeable
`public abstract bool IsTroopUpgradeable(PartyBase party, CharacterObject character)`

**Purpose:** Handles logic related to `is troop upgradeable`.

### DoesPartyHaveRequiredItemsForUpgrade
`public abstract bool DoesPartyHaveRequiredItemsForUpgrade(PartyBase party, CharacterObject upgradeTarget)`

**Purpose:** Handles logic related to `does party have required items for upgrade`.

### DoesPartyHaveRequiredPerksForUpgrade
`public abstract bool DoesPartyHaveRequiredPerksForUpgrade(PartyBase party, CharacterObject character, CharacterObject upgradeTarget, out PerkObject requiredPerk)`

**Purpose:** Handles logic related to `does party have required perks for upgrade`.

### GetGoldCostForUpgrade
`public abstract ExplainedNumber GetGoldCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)`

**Purpose:** Gets the current value of `gold cost for upgrade`.

### GetXpCostForUpgrade
`public abstract int GetXpCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)`

**Purpose:** Gets the current value of `xp cost for upgrade`.

### GetSkillXpFromUpgradingTroops
`public abstract int GetSkillXpFromUpgradingTroops(PartyBase party, CharacterObject troop, int numberOfTroops)`

**Purpose:** Gets the current value of `skill xp from upgrading troops`.

### GetUpgradeChanceForTroopUpgrade
`public abstract float GetUpgradeChanceForTroopUpgrade(PartyBase party, CharacterObject troop, int upgradeTargetIndex)`

**Purpose:** Gets the current value of `upgrade chance for troop upgrade`.

## Usage Example

```csharp
var implementation = new CustomPartyTroopUpgradeModel();
```

## See Also

- [Complete Class Catalog](../catalog)