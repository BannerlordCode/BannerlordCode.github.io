---
title: "StatisticsCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StatisticsCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StatisticsCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class StatisticsCampaignBehavior : CampaignBehaviorBase, IStatisticsCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/StatisticsCampaignBehavior.cs`

## 概述

`StatisticsCampaignBehavior` 位于 `SandBox.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### OnDefectionPersuasionSucess
`public void OnDefectionPersuasionSucess()`

**用途 / Purpose:** 当 `defection persuasion sucess` 事件触发时调用此方法。

### OnPlayerAcceptedRansomOffer
`public void OnPlayerAcceptedRansomOffer(int ransomPrice)`

**用途 / Purpose:** 当 `player accepted ransom offer` 事件触发时调用此方法。

### GetCompanionWithMostKills
`public ValueTuple<string, int> GetCompanionWithMostKills()`

**用途 / Purpose:** 获取 `companion with most kills` 的当前值。

### GetCompanionWithMostIssuesSolved
`public ValueTuple<string, int> GetCompanionWithMostIssuesSolved()`

**用途 / Purpose:** 获取 `companion with most issues solved` 的当前值。

### GetHighestTournamentRank
`public int GetHighestTournamentRank()`

**用途 / Purpose:** 获取 `highest tournament rank` 的当前值。

### GetNumberOfTournamentWins
`public int GetNumberOfTournamentWins()`

**用途 / Purpose:** 获取 `number of tournament wins` 的当前值。

### GetNumberOfChildrenBorn
`public int GetNumberOfChildrenBorn()`

**用途 / Purpose:** 获取 `number of children born` 的当前值。

### GetNumberOfPrisonersRecruited
`public int GetNumberOfPrisonersRecruited()`

**用途 / Purpose:** 获取 `number of prisoners recruited` 的当前值。

### GetNumberOfTroopsRecruited
`public int GetNumberOfTroopsRecruited()`

**用途 / Purpose:** 获取 `number of troops recruited` 的当前值。

### GetNumberOfClansDefected
`public int GetNumberOfClansDefected()`

**用途 / Purpose:** 获取 `number of clans defected` 的当前值。

### GetNumberOfIssuesSolved
`public int GetNumberOfIssuesSolved()`

**用途 / Purpose:** 获取 `number of issues solved` 的当前值。

### GetTotalInfluenceEarned
`public int GetTotalInfluenceEarned()`

**用途 / Purpose:** 获取 `total influence earned` 的当前值。

### GetTotalCrimeRatingGained
`public int GetTotalCrimeRatingGained()`

**用途 / Purpose:** 获取 `total crime rating gained` 的当前值。

### GetNumberOfBattlesWon
`public int GetNumberOfBattlesWon()`

**用途 / Purpose:** 获取 `number of battles won` 的当前值。

### GetNumberOfBattlesLost
`public int GetNumberOfBattlesLost()`

**用途 / Purpose:** 获取 `number of battles lost` 的当前值。

### GetLargestBattleWonAsLeader
`public int GetLargestBattleWonAsLeader()`

**用途 / Purpose:** 获取 `largest battle won as leader` 的当前值。

### GetLargestArmyFormedByPlayer
`public int GetLargestArmyFormedByPlayer()`

**用途 / Purpose:** 获取 `largest army formed by player` 的当前值。

### GetNumberOfEnemyClansDestroyed
`public int GetNumberOfEnemyClansDestroyed()`

**用途 / Purpose:** 获取 `number of enemy clans destroyed` 的当前值。

### GetNumberOfHeroesKilledInBattle
`public int GetNumberOfHeroesKilledInBattle()`

**用途 / Purpose:** 获取 `number of heroes killed in battle` 的当前值。

### GetNumberOfTroopsKnockedOrKilledAsParty
`public int GetNumberOfTroopsKnockedOrKilledAsParty()`

**用途 / Purpose:** 获取 `number of troops knocked or killed as party` 的当前值。

### GetNumberOfTroopsKnockedOrKilledByPlayer
`public int GetNumberOfTroopsKnockedOrKilledByPlayer()`

**用途 / Purpose:** 获取 `number of troops knocked or killed by player` 的当前值。

### GetNumberOfHeroPrisonersTaken
`public int GetNumberOfHeroPrisonersTaken()`

**用途 / Purpose:** 获取 `number of hero prisoners taken` 的当前值。

### GetNumberOfTroopPrisonersTaken
`public int GetNumberOfTroopPrisonersTaken()`

**用途 / Purpose:** 获取 `number of troop prisoners taken` 的当前值。

### GetNumberOfTownsCaptured
`public int GetNumberOfTownsCaptured()`

**用途 / Purpose:** 获取 `number of towns captured` 的当前值。

### GetNumberOfHideoutsCleared
`public int GetNumberOfHideoutsCleared()`

**用途 / Purpose:** 获取 `number of hideouts cleared` 的当前值。

### GetNumberOfCastlesCaptured
`public int GetNumberOfCastlesCaptured()`

**用途 / Purpose:** 获取 `number of castles captured` 的当前值。

### GetNumberOfVillagesRaided
`public int GetNumberOfVillagesRaided()`

**用途 / Purpose:** 获取 `number of villages raided` 的当前值。

### GetNumberOfCraftingPartsUnlocked
`public int GetNumberOfCraftingPartsUnlocked()`

**用途 / Purpose:** 获取 `number of crafting parts unlocked` 的当前值。

### GetNumberOfWeaponsCrafted
`public int GetNumberOfWeaponsCrafted()`

**用途 / Purpose:** 获取 `number of weapons crafted` 的当前值。

### GetNumberOfCraftingOrdersCompleted
`public int GetNumberOfCraftingOrdersCompleted()`

**用途 / Purpose:** 获取 `number of crafting orders completed` 的当前值。

### GetNumberOfCompanionsHired
`public int GetNumberOfCompanionsHired()`

**用途 / Purpose:** 获取 `number of companions hired` 的当前值。

### GetTimeSpentAsPrisoner
`public CampaignTime GetTimeSpentAsPrisoner()`

**用途 / Purpose:** 获取 `time spent as prisoner` 的当前值。

### GetTotalTimePlayedInSeconds
`public ulong GetTotalTimePlayedInSeconds()`

**用途 / Purpose:** 获取 `total time played in seconds` 的当前值。

### GetTotalDenarsEarned
`public ulong GetTotalDenarsEarned()`

**用途 / Purpose:** 获取 `total denars earned` 的当前值。

### GetDenarsEarnedFromCaravans
`public ulong GetDenarsEarnedFromCaravans()`

**用途 / Purpose:** 获取 `denars earned from caravans` 的当前值。

### GetDenarsEarnedFromWorkshops
`public ulong GetDenarsEarnedFromWorkshops()`

**用途 / Purpose:** 获取 `denars earned from workshops` 的当前值。

### GetDenarsEarnedFromRansoms
`public ulong GetDenarsEarnedFromRansoms()`

**用途 / Purpose:** 获取 `denars earned from ransoms` 的当前值。

### GetDenarsEarnedFromTaxes
`public ulong GetDenarsEarnedFromTaxes()`

**用途 / Purpose:** 获取 `denars earned from taxes` 的当前值。

### GetDenarsEarnedFromTributes
`public ulong GetDenarsEarnedFromTributes()`

**用途 / Purpose:** 获取 `denars earned from tributes` 的当前值。

### GetDenarsPaidAsTributes
`public ulong GetDenarsPaidAsTributes()`

**用途 / Purpose:** 获取 `denars paid as tributes` 的当前值。

### GetTotalTimePlayed
`public CampaignTime GetTotalTimePlayed()`

**用途 / Purpose:** 获取 `total time played` 的当前值。

### GetMostExpensiveItemCrafted
`public ValueTuple<string, int> GetMostExpensiveItemCrafted()`

**用途 / Purpose:** 获取 `most expensive item crafted` 的当前值。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new StatisticsCampaignBehavior();
value.SyncData(dataStore);
```

## 参见

- [完整类目录](../catalog)