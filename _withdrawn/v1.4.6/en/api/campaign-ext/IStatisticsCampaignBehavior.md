---
title: "IStatisticsCampaignBehavior"
description: "IStatisticsCampaignBehavior: a public interface in TaleWorlds.CampaignSystem.CampaignBehaviors, inheriting ICampaignBehavior; 43 exposed members (43 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/IStatisticsCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IStatisticsCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IStatisticsCampaignBehavior : ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IStatisticsCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

IStatisticsCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/IStatisticsCampaignBehavior.cs. It is a public interface, implementing/inheriting ICampaignBehavior; the inheritance chain is IStatisticsCampaignBehavior → ICampaignBehavior. It exposes 43 public/protected members: 43 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IStatisticsCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain IStatisticsCampaignBehavior → ICampaignBehavior. The surface is method-led (methods 43/43, properties 0/43), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/IStatisticsCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnDefectionPersuasionSucess` | `void OnDefectionPersuasionSucess();` | method |
| `OnPlayerAcceptedRansomOffer` | `void OnPlayerAcceptedRansomOffer(int ransomPrice);` | method |
| `GetHighestTournamentRank` | `int GetHighestTournamentRank();` | method |
| `GetNumberOfTournamentWins` | `int GetNumberOfTournamentWins();` | method |
| `GetNumberOfChildrenBorn` | `int GetNumberOfChildrenBorn();` | method |
| `GetNumberOfPrisonersRecruited` | `int GetNumberOfPrisonersRecruited();` | method |
| `GetNumberOfTroopsRecruited` | `int GetNumberOfTroopsRecruited();` | method |
| `GetNumberOfClansDefected` | `int GetNumberOfClansDefected();` | method |
| `GetNumberOfIssuesSolved` | `int GetNumberOfIssuesSolved();` | method |
| `GetTotalInfluenceEarned` | `int GetTotalInfluenceEarned();` | method |
| `GetTotalCrimeRatingGained` | `int GetTotalCrimeRatingGained();` | method |
| `GetNumberOfBattlesWon` | `int GetNumberOfBattlesWon();` | method |
| `GetNumberOfBattlesLost` | `int GetNumberOfBattlesLost();` | method |
| `GetLargestBattleWonAsLeader` | `int GetLargestBattleWonAsLeader();` | method |
| `GetLargestArmyFormedByPlayer` | `int GetLargestArmyFormedByPlayer();` | method |
| `GetNumberOfEnemyClansDestroyed` | `int GetNumberOfEnemyClansDestroyed();` | method |
| `GetNumberOfHeroesKilledInBattle` | `int GetNumberOfHeroesKilledInBattle();` | method |
| `GetNumberOfTroopsKnockedOrKilledAsParty` | `int GetNumberOfTroopsKnockedOrKilledAsParty();` | method |
| `GetNumberOfTroopsKnockedOrKilledByPlayer` | `int GetNumberOfTroopsKnockedOrKilledByPlayer();` | method |
| `GetNumberOfHeroPrisonersTaken` | `int GetNumberOfHeroPrisonersTaken();` | method |
| `GetNumberOfTroopPrisonersTaken` | `int GetNumberOfTroopPrisonersTaken();` | method |
| `GetNumberOfTownsCaptured` | `int GetNumberOfTownsCaptured();` | method |
| `GetNumberOfHideoutsCleared` | `int GetNumberOfHideoutsCleared();` | method |
| `GetNumberOfCastlesCaptured` | `int GetNumberOfCastlesCaptured();` | method |
| `GetNumberOfVillagesRaided` | `int GetNumberOfVillagesRaided();` | method |
| `GetNumberOfCraftingPartsUnlocked` | `int GetNumberOfCraftingPartsUnlocked();` | method |
| `GetNumberOfWeaponsCrafted` | `int GetNumberOfWeaponsCrafted();` | method |
| `GetNumberOfCraftingOrdersCompleted` | `int GetNumberOfCraftingOrdersCompleted();` | method |
| `GetNumberOfCompanionsHired` | `int GetNumberOfCompanionsHired();` | method |
| `GetTotalTimePlayedInSeconds` | `ulong GetTotalTimePlayedInSeconds();` | method |
| `GetTotalDenarsEarned` | `ulong GetTotalDenarsEarned();` | method |
| `GetDenarsEarnedFromCaravans` | `ulong GetDenarsEarnedFromCaravans();` | method |
| `GetDenarsEarnedFromWorkshops` | `ulong GetDenarsEarnedFromWorkshops();` | method |
| `GetDenarsEarnedFromRansoms` | `ulong GetDenarsEarnedFromRansoms();` | method |
| `GetDenarsEarnedFromTaxes` | `ulong GetDenarsEarnedFromTaxes();` | method |
| `GetDenarsEarnedFromTributes` | `ulong GetDenarsEarnedFromTributes();` | method |
| `GetDenarsPaidAsTributes` | `ulong GetDenarsPaidAsTributes();` | method |
| `GetTotalTimePlayed` | `CampaignTime GetTotalTimePlayed();` | method |
| `GetTimeSpentAsPrisoner` | `CampaignTime GetTimeSpentAsPrisoner();` | method |
| `int>GetMostExpensiveItemCrafted` | `ValueTuple<string, int>GetMostExpensiveItemCrafted();` | method |
| `TupleElementNames` | `[return: TupleElementNames(new string[]` | method |
| `int>GetCompanionWithMostKills` | `ValueTuple<string, int>GetCompanionWithMostKills();` | method |
| `int>GetCompanionWithMostIssuesSolved` | `ValueTuple<string, int>GetCompanionWithMostIssuesSolved();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ICampaignBehavior](../../campaign/ICampaignBehavior/)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
