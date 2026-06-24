<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DifficultyModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DifficultyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DifficultyModel : MBGameModel<DifficultyModel>`
**Base:** `MBGameModel<DifficultyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DifficultyModel.cs`

## Overview

`DifficultyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DifficultyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPlayerTroopsReceivedDamageMultiplier
`public abstract float GetPlayerTroopsReceivedDamageMultiplier()`

**Purpose:** Gets the current value of `player troops received damage multiplier`.

### GetDamageToPlayerMultiplier
`public abstract float GetDamageToPlayerMultiplier()`

**Purpose:** Gets the current value of `damage to player multiplier`.

### GetPlayerRecruitSlotBonus
`public abstract int GetPlayerRecruitSlotBonus()`

**Purpose:** Gets the current value of `player recruit slot bonus`.

### GetPlayerMapMovementSpeedBonusMultiplier
`public abstract float GetPlayerMapMovementSpeedBonusMultiplier()`

**Purpose:** Gets the current value of `player map movement speed bonus multiplier`.

### GetCombatAIDifficultyMultiplier
`public abstract float GetCombatAIDifficultyMultiplier()`

**Purpose:** Gets the current value of `combat a i difficulty multiplier`.

### GetPersuasionBonusChance
`public abstract float GetPersuasionBonusChance()`

**Purpose:** Gets the current value of `persuasion bonus chance`.

### GetClanMemberDeathChanceMultiplier
`public abstract float GetClanMemberDeathChanceMultiplier()`

**Purpose:** Gets the current value of `clan member death chance multiplier`.

### GetStealthDifficultyMultiplier
`public abstract float GetStealthDifficultyMultiplier()`

**Purpose:** Gets the current value of `stealth difficulty multiplier`.

### GetDisguiseDifficultyMultiplier
`public abstract float GetDisguiseDifficultyMultiplier()`

**Purpose:** Gets the current value of `disguise difficulty multiplier`.

## Usage Example

```csharp
var implementation = new CustomDifficultyModel();
```

## See Also

- [Complete Class Catalog](../catalog)