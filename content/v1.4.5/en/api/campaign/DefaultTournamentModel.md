---
title: "DefaultTournamentModel"
description: "Auto-generated class reference for DefaultTournamentModel."
---
# DefaultTournamentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTournamentModel : TournamentModel`
**Base:** `TournamentModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultTournamentModel.cs`

## Overview

`DefaultTournamentModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultTournamentModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateTournament
`public override TournamentGame CreateTournament(Town town)`

**Purpose:** Constructs a new `tournament` entity and returns it to the caller.

```csharp
// Obtain an instance of DefaultTournamentModel from the subsystem API first
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.CreateTournament(town);
```

### GetTournamentStartChance
`public override float GetTournamentStartChance(Town town)`

**Purpose:** Reads and returns the `tournament start chance` value held by the current object.

```csharp
// Obtain an instance of DefaultTournamentModel from the subsystem API first
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetTournamentStartChance(town);
```

### GetNumLeaderboardVictoriesAtGameStart
`public override int GetNumLeaderboardVictoriesAtGameStart()`

**Purpose:** Reads and returns the `num leaderboard victories at game start` value held by the current object.

```csharp
// Obtain an instance of DefaultTournamentModel from the subsystem API first
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetNumLeaderboardVictoriesAtGameStart();
```

### GetTournamentEndChance
`public override float GetTournamentEndChance(TournamentGame tournament)`

**Purpose:** Reads and returns the `tournament end chance` value held by the current object.

```csharp
// Obtain an instance of DefaultTournamentModel from the subsystem API first
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetTournamentEndChance(tournament);
```

### GetTournamentSimulationScore
`public override float GetTournamentSimulationScore(CharacterObject character)`

**Purpose:** Reads and returns the `tournament simulation score` value held by the current object.

```csharp
// Obtain an instance of DefaultTournamentModel from the subsystem API first
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetTournamentSimulationScore(character);
```

### GetRenownReward
`public override int GetRenownReward(Hero winner, Town town)`

**Purpose:** Reads and returns the `renown reward` value held by the current object.

```csharp
// Obtain an instance of DefaultTournamentModel from the subsystem API first
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetRenownReward(winner, town);
```

### GetInfluenceReward
`public override int GetInfluenceReward(Hero winner, Town town)`

**Purpose:** Reads and returns the `influence reward` value held by the current object.

```csharp
// Obtain an instance of DefaultTournamentModel from the subsystem API first
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetInfluenceReward(winner, town);
```

### GetParticipantArmor
`public override Equipment GetParticipantArmor(CharacterObject participant)`

**Purpose:** Reads and returns the `participant armor` value held by the current object.

```csharp
// Obtain an instance of DefaultTournamentModel from the subsystem API first
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetParticipantArmor(participant);
```

### GetRegularRewardItems
`public override MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)`

**Purpose:** Reads and returns the `regular reward items` value held by the current object.

```csharp
// Obtain an instance of DefaultTournamentModel from the subsystem API first
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetRegularRewardItems(town, 0, 0);
```

### GetEliteRewardItems
`public override MBList<ItemObject> GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)`

**Purpose:** Reads and returns the `elite reward items` value held by the current object.

```csharp
// Obtain an instance of DefaultTournamentModel from the subsystem API first
DefaultTournamentModel defaultTournamentModel = ...;
var result = defaultTournamentModel.GetEliteRewardItems(town, 0, 0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultTournamentModel>(new MyDefaultTournamentModel());
```

## See Also

- [Area Index](../)