<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyTroopUpgradeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Checks whether the current object can `party upgrade troop to target`.

### IsTroopUpgradeable
`public override bool IsTroopUpgradeable(PartyBase party, CharacterObject character)`

**Purpose:** Handles logic related to `is troop upgradeable`.

### GetXpCostForUpgrade
`public override int GetXpCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)`

**Purpose:** Gets the current value of `xp cost for upgrade`.

### GetGoldCostForUpgrade
`public override ExplainedNumber GetGoldCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)`

**Purpose:** Gets the current value of `gold cost for upgrade`.

### GetSkillXpFromUpgradingTroops
`public override int GetSkillXpFromUpgradingTroops(PartyBase party, CharacterObject troop, int numberOfTroops)`

**Purpose:** Gets the current value of `skill xp from upgrading troops`.

### DoesPartyHaveRequiredItemsForUpgrade
`public override bool DoesPartyHaveRequiredItemsForUpgrade(PartyBase party, CharacterObject upgradeTarget)`

**Purpose:** Handles logic related to `does party have required items for upgrade`.

### DoesPartyHaveRequiredPerksForUpgrade
`public override bool DoesPartyHaveRequiredPerksForUpgrade(PartyBase party, CharacterObject character, CharacterObject upgradeTarget, out PerkObject requiredPerk)`

**Purpose:** Handles logic related to `does party have required perks for upgrade`.

### GetUpgradeChanceForTroopUpgrade
`public override float GetUpgradeChanceForTroopUpgrade(PartyBase party, CharacterObject troop, int upgradeTargetIndex)`

**Purpose:** Gets the current value of `upgrade chance for troop upgrade`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyTroopUpgradeModel>(new MyDefaultPartyTroopUpgradeModel());
```

## See Also

- [Complete Class Catalog](../catalog)