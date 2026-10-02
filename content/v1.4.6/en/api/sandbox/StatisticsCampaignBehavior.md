---
title: "StatisticsCampaignBehavior"
description: "StatisticsCampaignBehavior: a public class in SandBox, inheriting CampaignBehaviorBase, IStatisticsCampaignBehavior; 44 exposed members (44 methods, 0 properties, 0 fields). Source: SandBox/CampaignBehaviors/StatisticsCampaignBehavior.cs."
---
# StatisticsCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class StatisticsCampaignBehavior : CampaignBehaviorBase, IStatisticsCampaignBehavior, ICampaignBehavior`
**File:** `SandBox/CampaignBehaviors/StatisticsCampaignBehavior.cs`

## Overview

StatisticsCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/StatisticsCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, IStatisticsCampaignBehavior, ICampaignBehavior; the inheritance chain is StatisticsCampaignBehavior → CampaignBehaviorBase. It exposes 44 public/protected members: 44 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StatisticsCampaignBehavior is a top-level type in SandBox, namespace differing from (SandBox.CampaignBehaviors) the module directory; inheritance chain StatisticsCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 44/44, properties 0/44), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/StatisticsCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `OnDefectionPersuasionSucess` | `public void OnDefectionPersuasionSucess()` | method |
| `OnPlayerAcceptedRansomOffer` | `public void OnPlayerAcceptedRansomOffer(int ransomPrice)` | method |
| `int>GetCompanionWithMostKills` | `public ValueTuple<string, int>GetCompanionWithMostKills()` | method |
| `int>GetCompanionWithMostIssuesSolved` | `public ValueTuple<string, int>GetCompanionWithMostIssuesSolved()` | method |
| `GetHighestTournamentRank` | `public int GetHighestTournamentRank()` | method |
| `GetNumberOfTournamentWins` | `public int GetNumberOfTournamentWins()` | method |
| `GetNumberOfChildrenBorn` | `public int GetNumberOfChildrenBorn()` | method |
| `GetNumberOfPrisonersRecruited` | `public int GetNumberOfPrisonersRecruited()` | method |
| `GetNumberOfTroopsRecruited` | `public int GetNumberOfTroopsRecruited()` | method |
| `GetNumberOfClansDefected` | `public int GetNumberOfClansDefected()` | method |
| `GetNumberOfIssuesSolved` | `public int GetNumberOfIssuesSolved()` | method |
| `GetTotalInfluenceEarned` | `public int GetTotalInfluenceEarned()` | method |
| `GetTotalCrimeRatingGained` | `public int GetTotalCrimeRatingGained()` | method |
| `GetNumberOfBattlesWon` | `public int GetNumberOfBattlesWon()` | method |
| `GetNumberOfBattlesLost` | `public int GetNumberOfBattlesLost()` | method |
| `GetLargestBattleWonAsLeader` | `public int GetLargestBattleWonAsLeader()` | method |
| `GetLargestArmyFormedByPlayer` | `public int GetLargestArmyFormedByPlayer()` | method |
| `GetNumberOfEnemyClansDestroyed` | `public int GetNumberOfEnemyClansDestroyed()` | method |
| `GetNumberOfHeroesKilledInBattle` | `public int GetNumberOfHeroesKilledInBattle()` | method |
| `GetNumberOfTroopsKnockedOrKilledAsParty` | `public int GetNumberOfTroopsKnockedOrKilledAsParty()` | method |
| `GetNumberOfTroopsKnockedOrKilledByPlayer` | `public int GetNumberOfTroopsKnockedOrKilledByPlayer()` | method |
| `GetNumberOfHeroPrisonersTaken` | `public int GetNumberOfHeroPrisonersTaken()` | method |
| `GetNumberOfTroopPrisonersTaken` | `public int GetNumberOfTroopPrisonersTaken()` | method |
| `GetNumberOfTownsCaptured` | `public int GetNumberOfTownsCaptured()` | method |
| `GetNumberOfHideoutsCleared` | `public int GetNumberOfHideoutsCleared()` | method |
| `GetNumberOfCastlesCaptured` | `public int GetNumberOfCastlesCaptured()` | method |
| `GetNumberOfVillagesRaided` | `public int GetNumberOfVillagesRaided()` | method |
| `GetNumberOfCraftingPartsUnlocked` | `public int GetNumberOfCraftingPartsUnlocked()` | method |
| `GetNumberOfWeaponsCrafted` | `public int GetNumberOfWeaponsCrafted()` | method |
| `GetNumberOfCraftingOrdersCompleted` | `public int GetNumberOfCraftingOrdersCompleted()` | method |
| `GetNumberOfCompanionsHired` | `public int GetNumberOfCompanionsHired()` | method |
| `GetTimeSpentAsPrisoner` | `public CampaignTime GetTimeSpentAsPrisoner()` | method |
| `GetTotalTimePlayedInSeconds` | `public ulong GetTotalTimePlayedInSeconds()` | method |
| `GetTotalDenarsEarned` | `public ulong GetTotalDenarsEarned()` | method |
| `GetDenarsEarnedFromCaravans` | `public ulong GetDenarsEarnedFromCaravans()` | method |
| `GetDenarsEarnedFromWorkshops` | `public ulong GetDenarsEarnedFromWorkshops()` | method |
| `GetDenarsEarnedFromRansoms` | `public ulong GetDenarsEarnedFromRansoms()` | method |
| `GetDenarsEarnedFromTaxes` | `public ulong GetDenarsEarnedFromTaxes()` | method |
| `GetDenarsEarnedFromTributes` | `public ulong GetDenarsEarnedFromTributes()` | method |
| `GetDenarsPaidAsTributes` | `public ulong GetDenarsPaidAsTributes()` | method |
| `GetTotalTimePlayed` | `public CampaignTime GetTotalTimePlayed()` | method |
| `int>GetMostExpensiveItemCrafted` | `public ValueTuple<string, int>GetMostExpensiveItemCrafted()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
