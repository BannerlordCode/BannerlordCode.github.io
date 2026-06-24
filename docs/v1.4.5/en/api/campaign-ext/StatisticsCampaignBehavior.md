<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StatisticsCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StatisticsCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class StatisticsCampaignBehavior : CampaignBehaviorBase, IStatisticsCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.CampaignBehaviors/StatisticsCampaignBehavior.cs`

## Overview

`StatisticsCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### OnDefectionPersuasionSucess
`public void OnDefectionPersuasionSucess()`

**Purpose:** Called when the `defection persuasion sucess` event is raised.

### OnPlayerAcceptedRansomOffer
`public void OnPlayerAcceptedRansomOffer(int ransomPrice)`

**Purpose:** Called when the `player accepted ransom offer` event is raised.

### GetHighestTournamentRank
`public int GetHighestTournamentRank()`

**Purpose:** Gets the current value of `highest tournament rank`.

### GetNumberOfTournamentWins
`public int GetNumberOfTournamentWins()`

**Purpose:** Gets the current value of `number of tournament wins`.

### GetNumberOfChildrenBorn
`public int GetNumberOfChildrenBorn()`

**Purpose:** Gets the current value of `number of children born`.

### GetNumberOfPrisonersRecruited
`public int GetNumberOfPrisonersRecruited()`

**Purpose:** Gets the current value of `number of prisoners recruited`.

### GetNumberOfTroopsRecruited
`public int GetNumberOfTroopsRecruited()`

**Purpose:** Gets the current value of `number of troops recruited`.

### GetNumberOfClansDefected
`public int GetNumberOfClansDefected()`

**Purpose:** Gets the current value of `number of clans defected`.

### GetNumberOfIssuesSolved
`public int GetNumberOfIssuesSolved()`

**Purpose:** Gets the current value of `number of issues solved`.

### GetTotalInfluenceEarned
`public int GetTotalInfluenceEarned()`

**Purpose:** Gets the current value of `total influence earned`.

### GetTotalCrimeRatingGained
`public int GetTotalCrimeRatingGained()`

**Purpose:** Gets the current value of `total crime rating gained`.

### GetNumberOfBattlesWon
`public int GetNumberOfBattlesWon()`

**Purpose:** Gets the current value of `number of battles won`.

### GetNumberOfBattlesLost
`public int GetNumberOfBattlesLost()`

**Purpose:** Gets the current value of `number of battles lost`.

### GetLargestBattleWonAsLeader
`public int GetLargestBattleWonAsLeader()`

**Purpose:** Gets the current value of `largest battle won as leader`.

### GetLargestArmyFormedByPlayer
`public int GetLargestArmyFormedByPlayer()`

**Purpose:** Gets the current value of `largest army formed by player`.

### GetNumberOfEnemyClansDestroyed
`public int GetNumberOfEnemyClansDestroyed()`

**Purpose:** Gets the current value of `number of enemy clans destroyed`.

### GetNumberOfHeroesKilledInBattle
`public int GetNumberOfHeroesKilledInBattle()`

**Purpose:** Gets the current value of `number of heroes killed in battle`.

### GetNumberOfTroopsKnockedOrKilledAsParty
`public int GetNumberOfTroopsKnockedOrKilledAsParty()`

**Purpose:** Gets the current value of `number of troops knocked or killed as party`.

### GetNumberOfTroopsKnockedOrKilledByPlayer
`public int GetNumberOfTroopsKnockedOrKilledByPlayer()`

**Purpose:** Gets the current value of `number of troops knocked or killed by player`.

### GetNumberOfHeroPrisonersTaken
`public int GetNumberOfHeroPrisonersTaken()`

**Purpose:** Gets the current value of `number of hero prisoners taken`.

### GetNumberOfTroopPrisonersTaken
`public int GetNumberOfTroopPrisonersTaken()`

**Purpose:** Gets the current value of `number of troop prisoners taken`.

### GetNumberOfTownsCaptured
`public int GetNumberOfTownsCaptured()`

**Purpose:** Gets the current value of `number of towns captured`.

### GetNumberOfHideoutsCleared
`public int GetNumberOfHideoutsCleared()`

**Purpose:** Gets the current value of `number of hideouts cleared`.

### GetNumberOfCastlesCaptured
`public int GetNumberOfCastlesCaptured()`

**Purpose:** Gets the current value of `number of castles captured`.

### GetNumberOfVillagesRaided
`public int GetNumberOfVillagesRaided()`

**Purpose:** Gets the current value of `number of villages raided`.

### GetNumberOfCraftingPartsUnlocked
`public int GetNumberOfCraftingPartsUnlocked()`

**Purpose:** Gets the current value of `number of crafting parts unlocked`.

### GetNumberOfWeaponsCrafted
`public int GetNumberOfWeaponsCrafted()`

**Purpose:** Gets the current value of `number of weapons crafted`.

### GetNumberOfCraftingOrdersCompleted
`public int GetNumberOfCraftingOrdersCompleted()`

**Purpose:** Gets the current value of `number of crafting orders completed`.

### GetNumberOfCompanionsHired
`public int GetNumberOfCompanionsHired()`

**Purpose:** Gets the current value of `number of companions hired`.

### GetTimeSpentAsPrisoner
`public CampaignTime GetTimeSpentAsPrisoner()`

**Purpose:** Gets the current value of `time spent as prisoner`.

### GetTotalTimePlayedInSeconds
`public ulong GetTotalTimePlayedInSeconds()`

**Purpose:** Gets the current value of `total time played in seconds`.

### GetTotalDenarsEarned
`public ulong GetTotalDenarsEarned()`

**Purpose:** Gets the current value of `total denars earned`.

### GetDenarsEarnedFromCaravans
`public ulong GetDenarsEarnedFromCaravans()`

**Purpose:** Gets the current value of `denars earned from caravans`.

### GetDenarsEarnedFromWorkshops
`public ulong GetDenarsEarnedFromWorkshops()`

**Purpose:** Gets the current value of `denars earned from workshops`.

### GetDenarsEarnedFromRansoms
`public ulong GetDenarsEarnedFromRansoms()`

**Purpose:** Gets the current value of `denars earned from ransoms`.

### GetDenarsEarnedFromTaxes
`public ulong GetDenarsEarnedFromTaxes()`

**Purpose:** Gets the current value of `denars earned from taxes`.

### GetDenarsEarnedFromTributes
`public ulong GetDenarsEarnedFromTributes()`

**Purpose:** Gets the current value of `denars earned from tributes`.

### GetDenarsPaidAsTributes
`public ulong GetDenarsPaidAsTributes()`

**Purpose:** Gets the current value of `denars paid as tributes`.

### GetTotalTimePlayed
`public CampaignTime GetTotalTimePlayed()`

**Purpose:** Gets the current value of `total time played`.

## Usage Example

```csharp
var value = new StatisticsCampaignBehavior();
value.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

## See Also

- [Complete Class Catalog](../catalog)