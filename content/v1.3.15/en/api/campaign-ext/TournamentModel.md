---
title: "TournamentModel"
description: "Auto-generated class reference for TournamentModel."
---
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

**Purpose:** Reads and returns the `tournament start chance` value held by the current object.

```csharp
// Obtain an instance of TournamentModel from the subsystem API first
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetTournamentStartChance(town);
```

### CreateTournament
`public abstract TournamentGame CreateTournament(Town town)`

**Purpose:** Constructs a new `tournament` entity and returns it to the caller.

```csharp
// Obtain an instance of TournamentModel from the subsystem API first
TournamentModel tournamentModel = ...;
var result = tournamentModel.CreateTournament(town);
```

### GetTournamentEndChance
`public abstract float GetTournamentEndChance(TournamentGame tournament)`

**Purpose:** Reads and returns the `tournament end chance` value held by the current object.

```csharp
// Obtain an instance of TournamentModel from the subsystem API first
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetTournamentEndChance(tournament);
```

### GetNumLeaderboardVictoriesAtGameStart
`public abstract int GetNumLeaderboardVictoriesAtGameStart()`

**Purpose:** Reads and returns the `num leaderboard victories at game start` value held by the current object.

```csharp
// Obtain an instance of TournamentModel from the subsystem API first
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetNumLeaderboardVictoriesAtGameStart();
```

### GetTournamentSimulationScore
`public abstract float GetTournamentSimulationScore(CharacterObject character)`

**Purpose:** Reads and returns the `tournament simulation score` value held by the current object.

```csharp
// Obtain an instance of TournamentModel from the subsystem API first
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetTournamentSimulationScore(character);
```

### GetRenownReward
`public abstract int GetRenownReward(Hero winner, Town town)`

**Purpose:** Reads and returns the `renown reward` value held by the current object.

```csharp
// Obtain an instance of TournamentModel from the subsystem API first
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetRenownReward(winner, town);
```

### GetInfluenceReward
`public abstract int GetInfluenceReward(Hero winner, Town town)`

**Purpose:** Reads and returns the `influence reward` value held by the current object.

```csharp
// Obtain an instance of TournamentModel from the subsystem API first
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetInfluenceReward(winner, town);
```

### GetSkillXpGainFromTournament
`public abstract ValueTuple<SkillObject, int> GetSkillXpGainFromTournament(Town town)`

**Purpose:** Reads and returns the `skill xp gain from tournament` value held by the current object.

```csharp
// Obtain an instance of TournamentModel from the subsystem API first
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetSkillXpGainFromTournament(town);
```

### GetParticipantArmor
`public abstract Equipment GetParticipantArmor(CharacterObject participant)`

**Purpose:** Reads and returns the `participant armor` value held by the current object.

```csharp
// Obtain an instance of TournamentModel from the subsystem API first
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetParticipantArmor(participant);
```

### GetRegularRewardItems
`public abstract MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)`

**Purpose:** Reads and returns the `regular reward items` value held by the current object.

```csharp
// Obtain an instance of TournamentModel from the subsystem API first
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetRegularRewardItems(town, 0, 0);
```

### GetEliteRewardItems
`public abstract MBList<ItemObject> GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)`

**Purpose:** Reads and returns the `elite reward items` value held by the current object.

```csharp
// Obtain an instance of TournamentModel from the subsystem API first
TournamentModel tournamentModel = ...;
var result = tournamentModel.GetEliteRewardItems(town, 0, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TournamentModel instance = ...;
```

## See Also

- [Area Index](../)