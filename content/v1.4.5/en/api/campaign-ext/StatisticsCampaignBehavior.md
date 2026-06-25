---
title: "StatisticsCampaignBehavior"
description: "Auto-generated class reference for StatisticsCampaignBehavior."
---
# StatisticsCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class StatisticsCampaignBehavior : CampaignBehaviorBase, IStatisticsCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/StatisticsCampaignBehavior.cs`

## Overview

`StatisticsCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
statisticsCampaignBehavior.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
statisticsCampaignBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
statisticsCampaignBehavior.RegisterEvents();
```

### OnDefectionPersuasionSucess
`public void OnDefectionPersuasionSucess()`

**Purpose:** Invoked when the `defection persuasion sucess` event is raised.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
statisticsCampaignBehavior.OnDefectionPersuasionSucess();
```

### OnPlayerAcceptedRansomOffer
`public void OnPlayerAcceptedRansomOffer(int ransomPrice)`

**Purpose:** Invoked when the `player accepted ransom offer` event is raised.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
statisticsCampaignBehavior.OnPlayerAcceptedRansomOffer(0);
```

### GetHighestTournamentRank
`public int GetHighestTournamentRank()`

**Purpose:** Reads and returns the `highest tournament rank` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetHighestTournamentRank();
```

### GetNumberOfTournamentWins
`public int GetNumberOfTournamentWins()`

**Purpose:** Reads and returns the `number of tournament wins` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfTournamentWins();
```

### GetNumberOfChildrenBorn
`public int GetNumberOfChildrenBorn()`

**Purpose:** Reads and returns the `number of children born` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfChildrenBorn();
```

### GetNumberOfPrisonersRecruited
`public int GetNumberOfPrisonersRecruited()`

**Purpose:** Reads and returns the `number of prisoners recruited` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfPrisonersRecruited();
```

### GetNumberOfTroopsRecruited
`public int GetNumberOfTroopsRecruited()`

**Purpose:** Reads and returns the `number of troops recruited` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfTroopsRecruited();
```

### GetNumberOfClansDefected
`public int GetNumberOfClansDefected()`

**Purpose:** Reads and returns the `number of clans defected` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfClansDefected();
```

### GetNumberOfIssuesSolved
`public int GetNumberOfIssuesSolved()`

**Purpose:** Reads and returns the `number of issues solved` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfIssuesSolved();
```

### GetTotalInfluenceEarned
`public int GetTotalInfluenceEarned()`

**Purpose:** Reads and returns the `total influence earned` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetTotalInfluenceEarned();
```

### GetTotalCrimeRatingGained
`public int GetTotalCrimeRatingGained()`

**Purpose:** Reads and returns the `total crime rating gained` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetTotalCrimeRatingGained();
```

### GetNumberOfBattlesWon
`public int GetNumberOfBattlesWon()`

**Purpose:** Reads and returns the `number of battles won` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfBattlesWon();
```

### GetNumberOfBattlesLost
`public int GetNumberOfBattlesLost()`

**Purpose:** Reads and returns the `number of battles lost` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfBattlesLost();
```

### GetLargestBattleWonAsLeader
`public int GetLargestBattleWonAsLeader()`

**Purpose:** Reads and returns the `largest battle won as leader` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetLargestBattleWonAsLeader();
```

### GetLargestArmyFormedByPlayer
`public int GetLargestArmyFormedByPlayer()`

**Purpose:** Reads and returns the `largest army formed by player` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetLargestArmyFormedByPlayer();
```

### GetNumberOfEnemyClansDestroyed
`public int GetNumberOfEnemyClansDestroyed()`

**Purpose:** Reads and returns the `number of enemy clans destroyed` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfEnemyClansDestroyed();
```

### GetNumberOfHeroesKilledInBattle
`public int GetNumberOfHeroesKilledInBattle()`

**Purpose:** Reads and returns the `number of heroes killed in battle` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfHeroesKilledInBattle();
```

### GetNumberOfTroopsKnockedOrKilledAsParty
`public int GetNumberOfTroopsKnockedOrKilledAsParty()`

**Purpose:** Reads and returns the `number of troops knocked or killed as party` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfTroopsKnockedOrKilledAsParty();
```

### GetNumberOfTroopsKnockedOrKilledByPlayer
`public int GetNumberOfTroopsKnockedOrKilledByPlayer()`

**Purpose:** Reads and returns the `number of troops knocked or killed by player` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfTroopsKnockedOrKilledByPlayer();
```

### GetNumberOfHeroPrisonersTaken
`public int GetNumberOfHeroPrisonersTaken()`

**Purpose:** Reads and returns the `number of hero prisoners taken` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfHeroPrisonersTaken();
```

### GetNumberOfTroopPrisonersTaken
`public int GetNumberOfTroopPrisonersTaken()`

**Purpose:** Reads and returns the `number of troop prisoners taken` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfTroopPrisonersTaken();
```

### GetNumberOfTownsCaptured
`public int GetNumberOfTownsCaptured()`

**Purpose:** Reads and returns the `number of towns captured` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfTownsCaptured();
```

### GetNumberOfHideoutsCleared
`public int GetNumberOfHideoutsCleared()`

**Purpose:** Reads and returns the `number of hideouts cleared` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfHideoutsCleared();
```

### GetNumberOfCastlesCaptured
`public int GetNumberOfCastlesCaptured()`

**Purpose:** Reads and returns the `number of castles captured` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfCastlesCaptured();
```

### GetNumberOfVillagesRaided
`public int GetNumberOfVillagesRaided()`

**Purpose:** Reads and returns the `number of villages raided` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfVillagesRaided();
```

### GetNumberOfCraftingPartsUnlocked
`public int GetNumberOfCraftingPartsUnlocked()`

**Purpose:** Reads and returns the `number of crafting parts unlocked` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfCraftingPartsUnlocked();
```

### GetNumberOfWeaponsCrafted
`public int GetNumberOfWeaponsCrafted()`

**Purpose:** Reads and returns the `number of weapons crafted` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfWeaponsCrafted();
```

### GetNumberOfCraftingOrdersCompleted
`public int GetNumberOfCraftingOrdersCompleted()`

**Purpose:** Reads and returns the `number of crafting orders completed` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfCraftingOrdersCompleted();
```

### GetNumberOfCompanionsHired
`public int GetNumberOfCompanionsHired()`

**Purpose:** Reads and returns the `number of companions hired` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfCompanionsHired();
```

### GetTimeSpentAsPrisoner
`public CampaignTime GetTimeSpentAsPrisoner()`

**Purpose:** Reads and returns the `time spent as prisoner` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetTimeSpentAsPrisoner();
```

### GetTotalTimePlayedInSeconds
`public ulong GetTotalTimePlayedInSeconds()`

**Purpose:** Reads and returns the `total time played in seconds` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetTotalTimePlayedInSeconds();
```

### GetTotalDenarsEarned
`public ulong GetTotalDenarsEarned()`

**Purpose:** Reads and returns the `total denars earned` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetTotalDenarsEarned();
```

### GetDenarsEarnedFromCaravans
`public ulong GetDenarsEarnedFromCaravans()`

**Purpose:** Reads and returns the `denars earned from caravans` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetDenarsEarnedFromCaravans();
```

### GetDenarsEarnedFromWorkshops
`public ulong GetDenarsEarnedFromWorkshops()`

**Purpose:** Reads and returns the `denars earned from workshops` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetDenarsEarnedFromWorkshops();
```

### GetDenarsEarnedFromRansoms
`public ulong GetDenarsEarnedFromRansoms()`

**Purpose:** Reads and returns the `denars earned from ransoms` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetDenarsEarnedFromRansoms();
```

### GetDenarsEarnedFromTaxes
`public ulong GetDenarsEarnedFromTaxes()`

**Purpose:** Reads and returns the `denars earned from taxes` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetDenarsEarnedFromTaxes();
```

### GetDenarsEarnedFromTributes
`public ulong GetDenarsEarnedFromTributes()`

**Purpose:** Reads and returns the `denars earned from tributes` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetDenarsEarnedFromTributes();
```

### GetDenarsPaidAsTributes
`public ulong GetDenarsPaidAsTributes()`

**Purpose:** Reads and returns the `denars paid as tributes` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetDenarsPaidAsTributes();
```

### GetTotalTimePlayed
`public CampaignTime GetTotalTimePlayed()`

**Purpose:** Reads and returns the `total time played` value held by the current object.

```csharp
// Obtain an instance of StatisticsCampaignBehavior from the subsystem API first
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetTotalTimePlayed();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
statisticsCampaignBehavior.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

## See Also

- [Area Index](../)