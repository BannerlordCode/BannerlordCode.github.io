---
title: "StatisticsCampaignBehavior"
description: "StatisticsCampaignBehavior：SandBox 的 public 类，继承 CampaignBehaviorBase、IStatisticsCampaignBehavior；公开成员 44 个（方法 44、属性 0、字段 0）。源文件 SandBox/CampaignBehaviors/StatisticsCampaignBehavior.cs。"
---
# StatisticsCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class StatisticsCampaignBehavior : CampaignBehaviorBase, IStatisticsCampaignBehavior, ICampaignBehavior`
**File:** `SandBox/CampaignBehaviors/StatisticsCampaignBehavior.cs`

## 概述

StatisticsCampaignBehavior 位于 SandBox 模块，源文件 SandBox/CampaignBehaviors/StatisticsCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase、IStatisticsCampaignBehavior、ICampaignBehavior，继承链为 StatisticsCampaignBehavior → CampaignBehaviorBase。public/protected 成员共 44 个：44 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StatisticsCampaignBehavior 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.CampaignBehaviors），继承链 StatisticsCampaignBehavior → CampaignBehaviorBase。成员构成以方法为主（方法 44/44，属性 0/44），对外主要以操作入口暴露。继承链上的 CampaignBehaviorBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/CampaignBehaviors/StatisticsCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `OnDefectionPersuasionSucess` | `public void OnDefectionPersuasionSucess()` | 方法 |
| `OnPlayerAcceptedRansomOffer` | `public void OnPlayerAcceptedRansomOffer(int ransomPrice)` | 方法 |
| `int>GetCompanionWithMostKills` | `public ValueTuple<string, int>GetCompanionWithMostKills()` | 方法 |
| `int>GetCompanionWithMostIssuesSolved` | `public ValueTuple<string, int>GetCompanionWithMostIssuesSolved()` | 方法 |
| `GetHighestTournamentRank` | `public int GetHighestTournamentRank()` | 方法 |
| `GetNumberOfTournamentWins` | `public int GetNumberOfTournamentWins()` | 方法 |
| `GetNumberOfChildrenBorn` | `public int GetNumberOfChildrenBorn()` | 方法 |
| `GetNumberOfPrisonersRecruited` | `public int GetNumberOfPrisonersRecruited()` | 方法 |
| `GetNumberOfTroopsRecruited` | `public int GetNumberOfTroopsRecruited()` | 方法 |
| `GetNumberOfClansDefected` | `public int GetNumberOfClansDefected()` | 方法 |
| `GetNumberOfIssuesSolved` | `public int GetNumberOfIssuesSolved()` | 方法 |
| `GetTotalInfluenceEarned` | `public int GetTotalInfluenceEarned()` | 方法 |
| `GetTotalCrimeRatingGained` | `public int GetTotalCrimeRatingGained()` | 方法 |
| `GetNumberOfBattlesWon` | `public int GetNumberOfBattlesWon()` | 方法 |
| `GetNumberOfBattlesLost` | `public int GetNumberOfBattlesLost()` | 方法 |
| `GetLargestBattleWonAsLeader` | `public int GetLargestBattleWonAsLeader()` | 方法 |
| `GetLargestArmyFormedByPlayer` | `public int GetLargestArmyFormedByPlayer()` | 方法 |
| `GetNumberOfEnemyClansDestroyed` | `public int GetNumberOfEnemyClansDestroyed()` | 方法 |
| `GetNumberOfHeroesKilledInBattle` | `public int GetNumberOfHeroesKilledInBattle()` | 方法 |
| `GetNumberOfTroopsKnockedOrKilledAsParty` | `public int GetNumberOfTroopsKnockedOrKilledAsParty()` | 方法 |
| `GetNumberOfTroopsKnockedOrKilledByPlayer` | `public int GetNumberOfTroopsKnockedOrKilledByPlayer()` | 方法 |
| `GetNumberOfHeroPrisonersTaken` | `public int GetNumberOfHeroPrisonersTaken()` | 方法 |
| `GetNumberOfTroopPrisonersTaken` | `public int GetNumberOfTroopPrisonersTaken()` | 方法 |
| `GetNumberOfTownsCaptured` | `public int GetNumberOfTownsCaptured()` | 方法 |
| `GetNumberOfHideoutsCleared` | `public int GetNumberOfHideoutsCleared()` | 方法 |
| `GetNumberOfCastlesCaptured` | `public int GetNumberOfCastlesCaptured()` | 方法 |
| `GetNumberOfVillagesRaided` | `public int GetNumberOfVillagesRaided()` | 方法 |
| `GetNumberOfCraftingPartsUnlocked` | `public int GetNumberOfCraftingPartsUnlocked()` | 方法 |
| `GetNumberOfWeaponsCrafted` | `public int GetNumberOfWeaponsCrafted()` | 方法 |
| `GetNumberOfCraftingOrdersCompleted` | `public int GetNumberOfCraftingOrdersCompleted()` | 方法 |
| `GetNumberOfCompanionsHired` | `public int GetNumberOfCompanionsHired()` | 方法 |
| `GetTimeSpentAsPrisoner` | `public CampaignTime GetTimeSpentAsPrisoner()` | 方法 |
| `GetTotalTimePlayedInSeconds` | `public ulong GetTotalTimePlayedInSeconds()` | 方法 |
| `GetTotalDenarsEarned` | `public ulong GetTotalDenarsEarned()` | 方法 |
| `GetDenarsEarnedFromCaravans` | `public ulong GetDenarsEarnedFromCaravans()` | 方法 |
| `GetDenarsEarnedFromWorkshops` | `public ulong GetDenarsEarnedFromWorkshops()` | 方法 |
| `GetDenarsEarnedFromRansoms` | `public ulong GetDenarsEarnedFromRansoms()` | 方法 |
| `GetDenarsEarnedFromTaxes` | `public ulong GetDenarsEarnedFromTaxes()` | 方法 |
| `GetDenarsEarnedFromTributes` | `public ulong GetDenarsEarnedFromTributes()` | 方法 |
| `GetDenarsPaidAsTributes` | `public ulong GetDenarsPaidAsTributes()` | 方法 |
| `GetTotalTimePlayed` | `public CampaignTime GetTotalTimePlayed()` | 方法 |
| `int>GetMostExpensiveItemCrafted` | `public ValueTuple<string, int>GetMostExpensiveItemCrafted()` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [同命名空间 ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [同命名空间 BarberCampaignBehavior](../BarberCampaignBehavior)
- [同命名空间 BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
