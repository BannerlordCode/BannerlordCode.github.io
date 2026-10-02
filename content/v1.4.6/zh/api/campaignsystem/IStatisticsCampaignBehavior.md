---
title: "IStatisticsCampaignBehavior"
description: "IStatisticsCampaignBehavior：TaleWorlds.CampaignSystem 的 public 接口，继承 ICampaignBehavior；公开成员 43 个（方法 43、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/IStatisticsCampaignBehavior.cs。"
---
# IStatisticsCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IStatisticsCampaignBehavior : ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IStatisticsCampaignBehavior.cs`

## 概述

IStatisticsCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/IStatisticsCampaignBehavior.cs。它是一个 public 接口，实现/继承 ICampaignBehavior，继承链为 IStatisticsCampaignBehavior → ICampaignBehavior。public/protected 成员共 43 个：43 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IStatisticsCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 IStatisticsCampaignBehavior → ICampaignBehavior。成员构成以方法为主（方法 43/43，属性 0/43），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/IStatisticsCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnDefectionPersuasionSucess` | `void OnDefectionPersuasionSucess();` | 方法 |
| `OnPlayerAcceptedRansomOffer` | `void OnPlayerAcceptedRansomOffer(int ransomPrice);` | 方法 |
| `GetHighestTournamentRank` | `int GetHighestTournamentRank();` | 方法 |
| `GetNumberOfTournamentWins` | `int GetNumberOfTournamentWins();` | 方法 |
| `GetNumberOfChildrenBorn` | `int GetNumberOfChildrenBorn();` | 方法 |
| `GetNumberOfPrisonersRecruited` | `int GetNumberOfPrisonersRecruited();` | 方法 |
| `GetNumberOfTroopsRecruited` | `int GetNumberOfTroopsRecruited();` | 方法 |
| `GetNumberOfClansDefected` | `int GetNumberOfClansDefected();` | 方法 |
| `GetNumberOfIssuesSolved` | `int GetNumberOfIssuesSolved();` | 方法 |
| `GetTotalInfluenceEarned` | `int GetTotalInfluenceEarned();` | 方法 |
| `GetTotalCrimeRatingGained` | `int GetTotalCrimeRatingGained();` | 方法 |
| `GetNumberOfBattlesWon` | `int GetNumberOfBattlesWon();` | 方法 |
| `GetNumberOfBattlesLost` | `int GetNumberOfBattlesLost();` | 方法 |
| `GetLargestBattleWonAsLeader` | `int GetLargestBattleWonAsLeader();` | 方法 |
| `GetLargestArmyFormedByPlayer` | `int GetLargestArmyFormedByPlayer();` | 方法 |
| `GetNumberOfEnemyClansDestroyed` | `int GetNumberOfEnemyClansDestroyed();` | 方法 |
| `GetNumberOfHeroesKilledInBattle` | `int GetNumberOfHeroesKilledInBattle();` | 方法 |
| `GetNumberOfTroopsKnockedOrKilledAsParty` | `int GetNumberOfTroopsKnockedOrKilledAsParty();` | 方法 |
| `GetNumberOfTroopsKnockedOrKilledByPlayer` | `int GetNumberOfTroopsKnockedOrKilledByPlayer();` | 方法 |
| `GetNumberOfHeroPrisonersTaken` | `int GetNumberOfHeroPrisonersTaken();` | 方法 |
| `GetNumberOfTroopPrisonersTaken` | `int GetNumberOfTroopPrisonersTaken();` | 方法 |
| `GetNumberOfTownsCaptured` | `int GetNumberOfTownsCaptured();` | 方法 |
| `GetNumberOfHideoutsCleared` | `int GetNumberOfHideoutsCleared();` | 方法 |
| `GetNumberOfCastlesCaptured` | `int GetNumberOfCastlesCaptured();` | 方法 |
| `GetNumberOfVillagesRaided` | `int GetNumberOfVillagesRaided();` | 方法 |
| `GetNumberOfCraftingPartsUnlocked` | `int GetNumberOfCraftingPartsUnlocked();` | 方法 |
| `GetNumberOfWeaponsCrafted` | `int GetNumberOfWeaponsCrafted();` | 方法 |
| `GetNumberOfCraftingOrdersCompleted` | `int GetNumberOfCraftingOrdersCompleted();` | 方法 |
| `GetNumberOfCompanionsHired` | `int GetNumberOfCompanionsHired();` | 方法 |
| `GetTotalTimePlayedInSeconds` | `ulong GetTotalTimePlayedInSeconds();` | 方法 |
| `GetTotalDenarsEarned` | `ulong GetTotalDenarsEarned();` | 方法 |
| `GetDenarsEarnedFromCaravans` | `ulong GetDenarsEarnedFromCaravans();` | 方法 |
| `GetDenarsEarnedFromWorkshops` | `ulong GetDenarsEarnedFromWorkshops();` | 方法 |
| `GetDenarsEarnedFromRansoms` | `ulong GetDenarsEarnedFromRansoms();` | 方法 |
| `GetDenarsEarnedFromTaxes` | `ulong GetDenarsEarnedFromTaxes();` | 方法 |
| `GetDenarsEarnedFromTributes` | `ulong GetDenarsEarnedFromTributes();` | 方法 |
| `GetDenarsPaidAsTributes` | `ulong GetDenarsPaidAsTributes();` | 方法 |
| `GetTotalTimePlayed` | `CampaignTime GetTotalTimePlayed();` | 方法 |
| `GetTimeSpentAsPrisoner` | `CampaignTime GetTimeSpentAsPrisoner();` | 方法 |
| `int>GetMostExpensiveItemCrafted` | `ValueTuple<string, int>GetMostExpensiveItemCrafted();` | 方法 |
| `TupleElementNames` | `[return: TupleElementNames(new string[]` | 方法 |
| `int>GetCompanionWithMostKills` | `ValueTuple<string, int>GetCompanionWithMostKills();` | 方法 |
| `int>GetCompanionWithMostIssuesSolved` | `ValueTuple<string, int>GetCompanionWithMostIssuesSolved();` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ICampaignBehavior](../ICampaignBehavior)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
