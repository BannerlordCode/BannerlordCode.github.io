---
title: "DefaultTournamentModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultTournamentModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultTournamentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTournamentModel : TournamentModel`
**Base:** `TournamentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs`

## Overview

`DefaultTournamentModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultTournamentModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateTournament
`public override TournamentGame CreateTournament(Town town)`

**Purpose:** Creates a new `tournament` instance or object.

### GetTournamentStartChance
`public override float GetTournamentStartChance(Town town)`

**Purpose:** Gets the current value of `tournament start chance`.

### GetNumLeaderboardVictoriesAtGameStart
`public override int GetNumLeaderboardVictoriesAtGameStart()`

**Purpose:** Gets the current value of `num leaderboard victories at game start`.

### GetTournamentEndChance
`public override float GetTournamentEndChance(TournamentGame tournament)`

**Purpose:** Gets the current value of `tournament end chance`.

### GetTournamentSimulationScore
`public override float GetTournamentSimulationScore(CharacterObject character)`

**Purpose:** Gets the current value of `tournament simulation score`.

### GetRenownReward
`public override int GetRenownReward(Hero winner, Town town)`

**Purpose:** Gets the current value of `renown reward`.

### GetInfluenceReward
`public override int GetInfluenceReward(Hero winner, Town town)`

**Purpose:** Gets the current value of `influence reward`.

### GetSkillXpGainFromTournament
`public override ValueTuple<SkillObject, int> GetSkillXpGainFromTournament(Town town)`

**Purpose:** Gets the current value of `skill xp gain from tournament`.

### GetParticipantArmor
`public override Equipment GetParticipantArmor(CharacterObject participant)`

**Purpose:** Gets the current value of `participant armor`.

### GetRegularRewardItems
`public override MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)`

**Purpose:** Gets the current value of `regular reward items`.

### GetEliteRewardItems
`public override MBList<ItemObject> GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)`

**Purpose:** Gets the current value of `elite reward items`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultTournamentModel>(new MyDefaultTournamentModel());
```

## See Also

- [Complete Class Catalog](../catalog)