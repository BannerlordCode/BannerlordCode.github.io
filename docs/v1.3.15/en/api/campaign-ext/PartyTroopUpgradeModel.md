<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTroopUpgradeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTroopUpgradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTroopUpgradeModel : MBGameModel<PartyTroopUpgradeModel>`
**Base:** `MBGameModel<PartyTroopUpgradeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTroopUpgradeModel.cs`

## Overview

`PartyTroopUpgradeModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PartyTroopUpgradeModel>(new MyPartyTroopUpgradeModel())` to change how it computes.

## Key Methods

### CanPartyUpgradeTroopToTarget
```csharp
public abstract bool CanPartyUpgradeTroopToTarget(PartyBase party, CharacterObject character, CharacterObject target)
```

### IsTroopUpgradeable
```csharp
public abstract bool IsTroopUpgradeable(PartyBase party, CharacterObject character)
```

### DoesPartyHaveRequiredItemsForUpgrade
```csharp
public abstract bool DoesPartyHaveRequiredItemsForUpgrade(PartyBase party, CharacterObject upgradeTarget)
```

### DoesPartyHaveRequiredPerksForUpgrade
```csharp
public abstract bool DoesPartyHaveRequiredPerksForUpgrade(PartyBase party, CharacterObject character, CharacterObject upgradeTarget, out PerkObject requiredPerk)
```

### GetGoldCostForUpgrade
```csharp
public abstract ExplainedNumber GetGoldCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)
```

### GetXpCostForUpgrade
```csharp
public abstract int GetXpCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)
```

### GetSkillXpFromUpgradingTroops
```csharp
public abstract int GetSkillXpFromUpgradingTroops(PartyBase party, CharacterObject troop, int numberOfTroops)
```

### GetUpgradeChanceForTroopUpgrade
```csharp
public abstract float GetUpgradeChanceForTroopUpgrade(PartyBase party, CharacterObject troop, int upgradeTargetIndex)
```

## Usage Example

```csharp
// Typical usage of PartyTroopUpgradeModel (Model)
Game.Current.ReplaceModel<PartyTroopUpgradeModel>(new MyPartyTroopUpgradeModel());
```

## See Also

- [Complete Class Catalog](../catalog)