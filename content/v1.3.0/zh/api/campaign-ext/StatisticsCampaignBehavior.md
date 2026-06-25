---
title: "StatisticsCampaignBehavior"
description: "StatisticsCampaignBehavior 的自动生成类参考。"
---
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

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
statisticsCampaignBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
statisticsCampaignBehavior.RegisterEvents();
```

### OnDefectionPersuasionSucess
`public void OnDefectionPersuasionSucess()`

**用途 / Purpose:** 在 「defection persuasion sucess」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
statisticsCampaignBehavior.OnDefectionPersuasionSucess();
```

### OnPlayerAcceptedRansomOffer
`public void OnPlayerAcceptedRansomOffer(int ransomPrice)`

**用途 / Purpose:** 在 「player accepted ransom offer」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
statisticsCampaignBehavior.OnPlayerAcceptedRansomOffer(0);
```

### GetCompanionWithMostKills
`public ValueTuple<string, int> GetCompanionWithMostKills()`

**用途 / Purpose:** 读取并返回当前对象中 「companion with most kills」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetCompanionWithMostKills();
```

### GetCompanionWithMostIssuesSolved
`public ValueTuple<string, int> GetCompanionWithMostIssuesSolved()`

**用途 / Purpose:** 读取并返回当前对象中 「companion with most issues solved」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetCompanionWithMostIssuesSolved();
```

### GetHighestTournamentRank
`public int GetHighestTournamentRank()`

**用途 / Purpose:** 读取并返回当前对象中 「highest tournament rank」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetHighestTournamentRank();
```

### GetNumberOfTournamentWins
`public int GetNumberOfTournamentWins()`

**用途 / Purpose:** 读取并返回当前对象中 「number of tournament wins」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfTournamentWins();
```

### GetNumberOfChildrenBorn
`public int GetNumberOfChildrenBorn()`

**用途 / Purpose:** 读取并返回当前对象中 「number of children born」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfChildrenBorn();
```

### GetNumberOfPrisonersRecruited
`public int GetNumberOfPrisonersRecruited()`

**用途 / Purpose:** 读取并返回当前对象中 「number of prisoners recruited」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfPrisonersRecruited();
```

### GetNumberOfTroopsRecruited
`public int GetNumberOfTroopsRecruited()`

**用途 / Purpose:** 读取并返回当前对象中 「number of troops recruited」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfTroopsRecruited();
```

### GetNumberOfClansDefected
`public int GetNumberOfClansDefected()`

**用途 / Purpose:** 读取并返回当前对象中 「number of clans defected」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfClansDefected();
```

### GetNumberOfIssuesSolved
`public int GetNumberOfIssuesSolved()`

**用途 / Purpose:** 读取并返回当前对象中 「number of issues solved」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfIssuesSolved();
```

### GetTotalInfluenceEarned
`public int GetTotalInfluenceEarned()`

**用途 / Purpose:** 读取并返回当前对象中 「total influence earned」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetTotalInfluenceEarned();
```

### GetTotalCrimeRatingGained
`public int GetTotalCrimeRatingGained()`

**用途 / Purpose:** 读取并返回当前对象中 「total crime rating gained」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetTotalCrimeRatingGained();
```

### GetNumberOfBattlesWon
`public int GetNumberOfBattlesWon()`

**用途 / Purpose:** 读取并返回当前对象中 「number of battles won」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfBattlesWon();
```

### GetNumberOfBattlesLost
`public int GetNumberOfBattlesLost()`

**用途 / Purpose:** 读取并返回当前对象中 「number of battles lost」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfBattlesLost();
```

### GetLargestBattleWonAsLeader
`public int GetLargestBattleWonAsLeader()`

**用途 / Purpose:** 读取并返回当前对象中 「largest battle won as leader」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetLargestBattleWonAsLeader();
```

### GetLargestArmyFormedByPlayer
`public int GetLargestArmyFormedByPlayer()`

**用途 / Purpose:** 读取并返回当前对象中 「largest army formed by player」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetLargestArmyFormedByPlayer();
```

### GetNumberOfEnemyClansDestroyed
`public int GetNumberOfEnemyClansDestroyed()`

**用途 / Purpose:** 读取并返回当前对象中 「number of enemy clans destroyed」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfEnemyClansDestroyed();
```

### GetNumberOfHeroesKilledInBattle
`public int GetNumberOfHeroesKilledInBattle()`

**用途 / Purpose:** 读取并返回当前对象中 「number of heroes killed in battle」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfHeroesKilledInBattle();
```

### GetNumberOfTroopsKnockedOrKilledAsParty
`public int GetNumberOfTroopsKnockedOrKilledAsParty()`

**用途 / Purpose:** 读取并返回当前对象中 「number of troops knocked or killed as party」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfTroopsKnockedOrKilledAsParty();
```

### GetNumberOfTroopsKnockedOrKilledByPlayer
`public int GetNumberOfTroopsKnockedOrKilledByPlayer()`

**用途 / Purpose:** 读取并返回当前对象中 「number of troops knocked or killed by player」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfTroopsKnockedOrKilledByPlayer();
```

### GetNumberOfHeroPrisonersTaken
`public int GetNumberOfHeroPrisonersTaken()`

**用途 / Purpose:** 读取并返回当前对象中 「number of hero prisoners taken」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfHeroPrisonersTaken();
```

### GetNumberOfTroopPrisonersTaken
`public int GetNumberOfTroopPrisonersTaken()`

**用途 / Purpose:** 读取并返回当前对象中 「number of troop prisoners taken」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfTroopPrisonersTaken();
```

### GetNumberOfTownsCaptured
`public int GetNumberOfTownsCaptured()`

**用途 / Purpose:** 读取并返回当前对象中 「number of towns captured」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfTownsCaptured();
```

### GetNumberOfHideoutsCleared
`public int GetNumberOfHideoutsCleared()`

**用途 / Purpose:** 读取并返回当前对象中 「number of hideouts cleared」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfHideoutsCleared();
```

### GetNumberOfCastlesCaptured
`public int GetNumberOfCastlesCaptured()`

**用途 / Purpose:** 读取并返回当前对象中 「number of castles captured」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfCastlesCaptured();
```

### GetNumberOfVillagesRaided
`public int GetNumberOfVillagesRaided()`

**用途 / Purpose:** 读取并返回当前对象中 「number of villages raided」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfVillagesRaided();
```

### GetNumberOfCraftingPartsUnlocked
`public int GetNumberOfCraftingPartsUnlocked()`

**用途 / Purpose:** 读取并返回当前对象中 「number of crafting parts unlocked」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfCraftingPartsUnlocked();
```

### GetNumberOfWeaponsCrafted
`public int GetNumberOfWeaponsCrafted()`

**用途 / Purpose:** 读取并返回当前对象中 「number of weapons crafted」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfWeaponsCrafted();
```

### GetNumberOfCraftingOrdersCompleted
`public int GetNumberOfCraftingOrdersCompleted()`

**用途 / Purpose:** 读取并返回当前对象中 「number of crafting orders completed」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfCraftingOrdersCompleted();
```

### GetNumberOfCompanionsHired
`public int GetNumberOfCompanionsHired()`

**用途 / Purpose:** 读取并返回当前对象中 「number of companions hired」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetNumberOfCompanionsHired();
```

### GetTimeSpentAsPrisoner
`public CampaignTime GetTimeSpentAsPrisoner()`

**用途 / Purpose:** 读取并返回当前对象中 「time spent as prisoner」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetTimeSpentAsPrisoner();
```

### GetTotalTimePlayedInSeconds
`public ulong GetTotalTimePlayedInSeconds()`

**用途 / Purpose:** 读取并返回当前对象中 「total time played in seconds」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetTotalTimePlayedInSeconds();
```

### GetTotalDenarsEarned
`public ulong GetTotalDenarsEarned()`

**用途 / Purpose:** 读取并返回当前对象中 「total denars earned」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetTotalDenarsEarned();
```

### GetDenarsEarnedFromCaravans
`public ulong GetDenarsEarnedFromCaravans()`

**用途 / Purpose:** 读取并返回当前对象中 「denars earned from caravans」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetDenarsEarnedFromCaravans();
```

### GetDenarsEarnedFromWorkshops
`public ulong GetDenarsEarnedFromWorkshops()`

**用途 / Purpose:** 读取并返回当前对象中 「denars earned from workshops」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetDenarsEarnedFromWorkshops();
```

### GetDenarsEarnedFromRansoms
`public ulong GetDenarsEarnedFromRansoms()`

**用途 / Purpose:** 读取并返回当前对象中 「denars earned from ransoms」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetDenarsEarnedFromRansoms();
```

### GetDenarsEarnedFromTaxes
`public ulong GetDenarsEarnedFromTaxes()`

**用途 / Purpose:** 读取并返回当前对象中 「denars earned from taxes」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetDenarsEarnedFromTaxes();
```

### GetDenarsEarnedFromTributes
`public ulong GetDenarsEarnedFromTributes()`

**用途 / Purpose:** 读取并返回当前对象中 「denars earned from tributes」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetDenarsEarnedFromTributes();
```

### GetDenarsPaidAsTributes
`public ulong GetDenarsPaidAsTributes()`

**用途 / Purpose:** 读取并返回当前对象中 「denars paid as tributes」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetDenarsPaidAsTributes();
```

### GetTotalTimePlayed
`public CampaignTime GetTotalTimePlayed()`

**用途 / Purpose:** 读取并返回当前对象中 「total time played」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetTotalTimePlayed();
```

### GetMostExpensiveItemCrafted
`public ValueTuple<string, int> GetMostExpensiveItemCrafted()`

**用途 / Purpose:** 读取并返回当前对象中 「most expensive item crafted」 的结果。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
var result = statisticsCampaignBehavior.GetMostExpensiveItemCrafted();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StatisticsCampaignBehavior 实例
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
statisticsCampaignBehavior.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StatisticsCampaignBehavior statisticsCampaignBehavior = ...;
statisticsCampaignBehavior.SyncData(dataStore);
```

## 参见

- [本区域目录](../)