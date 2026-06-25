---
title: "TournamentModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TournamentModel : MBGameModel<TournamentModel>`
**Base:** `MBGameModel<TournamentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TournamentModel.cs`

## Overview

`TournamentModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `TournamentModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTournamentStartChance
`public abstract float GetTournamentStartChance(Town town)`

**Purpose:** Gets the current value of `tournament start chance`.

### CreateTournament
`public abstract TournamentGame CreateTournament(Town town)`

**Purpose:** Creates a new `tournament` instance or object.

### GetTournamentEndChance
`public abstract float GetTournamentEndChance(TournamentGame tournament)`

**Purpose:** Gets the current value of `tournament end chance`.

### GetNumLeaderboardVictoriesAtGameStart
`public abstract int GetNumLeaderboardVictoriesAtGameStart()`

**Purpose:** Gets the current value of `num leaderboard victories at game start`.

### GetTournamentSimulationScore
`public abstract float GetTournamentSimulationScore(CharacterObject character)`

**Purpose:** Gets the current value of `tournament simulation score`.

### GetRenownReward
`public abstract int GetRenownReward(Hero winner, Town town)`

**Purpose:** Gets the current value of `renown reward`.

### GetInfluenceReward
`public abstract int GetInfluenceReward(Hero winner, Town town)`

**Purpose:** Gets the current value of `influence reward`.

### GetSkillXpGainFromTournament
`public abstract ValueTuple<SkillObject, int> GetSkillXpGainFromTournament(Town town)`

**Purpose:** Gets the current value of `skill xp gain from tournament`.

### GetParticipantArmor
`public abstract Equipment GetParticipantArmor(CharacterObject participant)`

**Purpose:** Gets the current value of `participant armor`.

### GetRegularRewardItems
`public abstract MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)`

**Purpose:** Gets the current value of `regular reward items`.

### GetEliteRewardItems
`public abstract MBList<ItemObject> GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)`

**Purpose:** Gets the current value of `elite reward items`.

## Usage Example

```csharp
var implementation = new CustomTournamentModel();
```

## See Also

- [Complete Class Catalog](../catalog)