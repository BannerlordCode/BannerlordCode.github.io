<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultDifficultyModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultDifficultyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDifficultyModel : DifficultyModel`
**Base:** `DifficultyModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultDifficultyModel.cs`

## Overview

`DefaultDifficultyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDifficultyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPlayerTroopsReceivedDamageMultiplier
`public override float GetPlayerTroopsReceivedDamageMultiplier()`

**Purpose:** Gets the current value of `player troops received damage multiplier`.

### GetPlayerRecruitSlotBonus
`public override int GetPlayerRecruitSlotBonus()`

**Purpose:** Gets the current value of `player recruit slot bonus`.

### GetPlayerMapMovementSpeedBonusMultiplier
`public override float GetPlayerMapMovementSpeedBonusMultiplier()`

**Purpose:** Gets the current value of `player map movement speed bonus multiplier`.

### GetStealthDifficultyMultiplier
`public override float GetStealthDifficultyMultiplier()`

**Purpose:** Gets the current value of `stealth difficulty multiplier`.

### GetDisguiseDifficultyMultiplier
`public override float GetDisguiseDifficultyMultiplier()`

**Purpose:** Gets the current value of `disguise difficulty multiplier`.

### GetCombatAIDifficultyMultiplier
`public override float GetCombatAIDifficultyMultiplier()`

**Purpose:** Gets the current value of `combat a i difficulty multiplier`.

### GetPersuasionBonusChance
`public override float GetPersuasionBonusChance()`

**Purpose:** Gets the current value of `persuasion bonus chance`.

### GetClanMemberDeathChanceMultiplier
`public override float GetClanMemberDeathChanceMultiplier()`

**Purpose:** Gets the current value of `clan member death chance multiplier`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultDifficultyModel>(new MyDefaultDifficultyModel());
```

## See Also

- [Complete Class Catalog](../catalog)