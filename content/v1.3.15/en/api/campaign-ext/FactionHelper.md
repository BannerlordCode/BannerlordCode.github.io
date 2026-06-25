---
title: "FactionHelper"
description: "Auto-generated class reference for FactionHelper."
---
# FactionHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class FactionHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/FactionHelper.cs`

## Overview

`FactionHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `FactionHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### FindPotentialStrength
`public static float FindPotentialStrength(IFaction faction)`

**Purpose:** **Purpose:** Looks up the matching potential strength in the current collection or scope.

```csharp
// Static call; no instance required
FactionHelper.FindPotentialStrength(faction);
```

### GetEnemyKingdoms
`public static IEnumerable<Kingdom> GetEnemyKingdoms(IFaction faction)`

**Purpose:** **Purpose:** Reads and returns the enemy kingdoms value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetEnemyKingdoms(faction);
```

### GetStances
`public static IEnumerable<StanceLink> GetStances(IFaction faction)`

**Purpose:** **Purpose:** Reads and returns the stances value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetStances(faction);
```

### GetPowerRatioToEnemies
`public static float GetPowerRatioToEnemies(Kingdom kingdom)`

**Purpose:** **Purpose:** Reads and returns the power ratio to enemies value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetPowerRatioToEnemies(kingdom);
```

### IsClanNameApplicable
`public static Tuple<bool, string> IsClanNameApplicable(string name)`

**Purpose:** **Purpose:** Determines whether the this instance is in the clan name applicable state or condition.

```csharp
// Static call; no instance required
FactionHelper.IsClanNameApplicable("example");
```

### IsKingdomNameApplicable
`public static Tuple<bool, string> IsKingdomNameApplicable(string name)`

**Purpose:** **Purpose:** Determines whether the this instance is in the kingdom name applicable state or condition.

```csharp
// Static call; no instance required
FactionHelper.IsKingdomNameApplicable("example");
```

### GetPowerRatioToTributePayedKingdoms
`public static float GetPowerRatioToTributePayedKingdoms(Kingdom kingdom)`

**Purpose:** **Purpose:** Reads and returns the power ratio to tribute payed kingdoms value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetPowerRatioToTributePayedKingdoms(kingdom);
```

### CanClanBeGrantedFief
`public static bool CanClanBeGrantedFief(Clan clan)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for clan be granted fief.

```csharp
// Static call; no instance required
FactionHelper.CanClanBeGrantedFief(clan);
```

### CanPlayerEnterFaction
`public static bool CanPlayerEnterFaction(bool asVassal = false)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for player enter faction.

```csharp
// Static call; no instance required
FactionHelper.CanPlayerEnterFaction(false);
```

### GetTotalEnemyKingdomPower
`public static float GetTotalEnemyKingdomPower(Kingdom kingdom)`

**Purpose:** **Purpose:** Reads and returns the total enemy kingdom power value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetTotalEnemyKingdomPower(kingdom);
```

### GetTotalTributePayedKingdomsPower
`public static float GetTotalTributePayedKingdomsPower(Kingdom kingdom)`

**Purpose:** **Purpose:** Reads and returns the total tribute payed kingdoms power value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetTotalTributePayedKingdomsPower(kingdom);
```

### GetKingdomArmies
`public static IEnumerable<Army> GetKingdomArmies(IFaction mapFaction)`

**Purpose:** **Purpose:** Reads and returns the kingdom armies value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetKingdomArmies(mapFaction);
```

### SettlementProsperityEffectOnGarrisonSizeConstant
`public static float SettlementProsperityEffectOnGarrisonSizeConstant(Town town)`

**Purpose:** **Purpose:** Assigns a new value to tlement prosperity effect on garrison size constant and updates the object's internal state.

```csharp
// Static call; no instance required
FactionHelper.SettlementProsperityEffectOnGarrisonSizeConstant(town);
```

### SettlementFoodPotentialEffectOnGarrisonSizeConstant
`public static float SettlementFoodPotentialEffectOnGarrisonSizeConstant(Settlement settlement)`

**Purpose:** **Purpose:** Assigns a new value to tlement food potential effect on garrison size constant and updates the object's internal state.

```csharp
// Static call; no instance required
FactionHelper.SettlementFoodPotentialEffectOnGarrisonSizeConstant(settlement);
```

### OwnerClanEconomyEffectOnGarrisonSizeConstant
`public static float OwnerClanEconomyEffectOnGarrisonSizeConstant(Clan clan)`

**Purpose:** **Purpose:** Executes the OwnerClanEconomyEffectOnGarrisonSizeConstant logic.

```csharp
// Static call; no instance required
FactionHelper.OwnerClanEconomyEffectOnGarrisonSizeConstant(clan);
```

### FindIdealGarrisonStrengthPerWalledCenter
`public static float FindIdealGarrisonStrengthPerWalledCenter(Kingdom kingdom, Clan clan = null)`

**Purpose:** **Purpose:** Looks up the matching ideal garrison strength per walled center in the current collection or scope.

```csharp
// Static call; no instance required
FactionHelper.FindIdealGarrisonStrengthPerWalledCenter(kingdom, null);
```

### FinishAllRelatedHostileActionsOfNobleToFaction
`public static void FinishAllRelatedHostileActionsOfNobleToFaction(Hero noble, IFaction faction)`

**Purpose:** **Purpose:** Concludes the all related hostile actions of noble to faction flow and performs any cleanup.

```csharp
// Static call; no instance required
FactionHelper.FinishAllRelatedHostileActionsOfNobleToFaction(noble, faction);
```

### FinishAllRelatedHostileActionsOfFactionToFaction
`public static void FinishAllRelatedHostileActionsOfFactionToFaction(IFaction faction1, IFaction faction2)`

**Purpose:** **Purpose:** Concludes the all related hostile actions of faction to faction flow and performs any cleanup.

```csharp
// Static call; no instance required
FactionHelper.FinishAllRelatedHostileActionsOfFactionToFaction(faction1, faction2);
```

### FinishAllRelatedHostileActions
`public static void FinishAllRelatedHostileActions(Clan clan1, Clan clan2)`

**Purpose:** **Purpose:** Concludes the all related hostile actions flow and performs any cleanup.

```csharp
// Static call; no instance required
FactionHelper.FinishAllRelatedHostileActions(clan1, clan2);
```

### FinishAllRelatedHostileActions
`public static void FinishAllRelatedHostileActions(Kingdom kingdom1, Kingdom kingdom2)`

**Purpose:** **Purpose:** Concludes the all related hostile actions flow and performs any cleanup.

```csharp
// Static call; no instance required
FactionHelper.FinishAllRelatedHostileActions(kingdom1, kingdom2);
```

### AdjustFactionStancesForClanJoiningKingdom
`public static void AdjustFactionStancesForClanJoiningKingdom(Clan joiningClan, Kingdom kingdomToJoin)`

**Purpose:** **Purpose:** Executes the AdjustFactionStancesForClanJoiningKingdom logic.

```csharp
// Static call; no instance required
FactionHelper.AdjustFactionStancesForClanJoiningKingdom(joiningClan, kingdomToJoin);
```

### GetTermUsedByOtherFaction
`public static TextObject GetTermUsedByOtherFaction(IFaction faction, IFaction otherFaction, bool pejorative)`

**Purpose:** **Purpose:** Reads and returns the term used by other faction value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetTermUsedByOtherFaction(faction, otherFaction, false);
```

### GetFormalNameForFactionCulture
`public static TextObject GetFormalNameForFactionCulture(CultureObject factionCulture)`

**Purpose:** **Purpose:** Reads and returns the formal name for faction culture value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetFormalNameForFactionCulture(factionCulture);
```

### GetInformalNameForFactionCulture
`public static TextObject GetInformalNameForFactionCulture(CultureObject factionCulture)`

**Purpose:** **Purpose:** Reads and returns the informal name for faction culture value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetInformalNameForFactionCulture(factionCulture);
```

### GetAdjectiveForFactionCulture
`public static TextObject GetAdjectiveForFactionCulture(CultureObject factionCulture)`

**Purpose:** **Purpose:** Reads and returns the adjective for faction culture value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetAdjectiveForFactionCulture(factionCulture);
```

### GetAdjectiveForFaction
`public static TextObject GetAdjectiveForFaction(IFaction faction)`

**Purpose:** **Purpose:** Reads and returns the adjective for faction value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetAdjectiveForFaction(faction);
```

### GenerateClanNameforPlayer
`public static TextObject GenerateClanNameforPlayer()`

**Purpose:** **Purpose:** Generates an instance, data, or representation of clan namefor player.

```csharp
// Static call; no instance required
FactionHelper.GenerateClanNameforPlayer();
```

### GetDistanceToClosestNonAllyFortificationOfFaction
`public static float GetDistanceToClosestNonAllyFortificationOfFaction(IFaction faction)`

**Purpose:** **Purpose:** Reads and returns the distance to closest non ally fortification of faction value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetDistanceToClosestNonAllyFortificationOfFaction(faction);
```

### GetMidSettlementOfFaction
`public static Settlement GetMidSettlementOfFaction(IFaction faction)`

**Purpose:** **Purpose:** Reads and returns the mid settlement of faction value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetMidSettlementOfFaction(faction);
```

### GetPossibleKingdomsToDeclareWar
`public static List<IFaction> GetPossibleKingdomsToDeclareWar(Kingdom kingdom)`

**Purpose:** **Purpose:** Reads and returns the possible kingdoms to declare war value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetPossibleKingdomsToDeclareWar(kingdom);
```

### GetPossibleKingdomsToDeclarePeace
`public static List<IFaction> GetPossibleKingdomsToDeclarePeace(Kingdom kingdom)`

**Purpose:** **Purpose:** Reads and returns the possible kingdoms to declare peace value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetPossibleKingdomsToDeclarePeace(kingdom);
```

### GetAllyMinorFactions
`public static IEnumerable<Clan> GetAllyMinorFactions(CharacterObject otherCharacter)`

**Purpose:** **Purpose:** Reads and returns the ally minor factions value held by the this instance.

```csharp
// Static call; no instance required
FactionHelper.GetAllyMinorFactions(otherCharacter);
```

### ChooseHeirClanForFiefs
`public static Clan ChooseHeirClanForFiefs(Clan oldClan)`

**Purpose:** **Purpose:** Executes the ChooseHeirClanForFiefs logic.

```csharp
// Static call; no instance required
FactionHelper.ChooseHeirClanForFiefs(oldClan);
```

### CanPlayerOfferMercenaryService
`public static bool CanPlayerOfferMercenaryService(Kingdom offerKingdom, out List<IFaction> playerWars, out List<IFaction> warsOfFactionToJoin)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for player offer mercenary service.

```csharp
// Static call; no instance required
FactionHelper.CanPlayerOfferMercenaryService(offerKingdom, playerWars, warsOfFactionToJoin);
```

### CanPlayerOfferVassalage
`public static bool CanPlayerOfferVassalage(Kingdom offerKingdom, out List<IFaction> playerWars, out List<IFaction> warsOfFactionToJoin)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for player offer vassalage.

```csharp
// Static call; no instance required
FactionHelper.CanPlayerOfferVassalage(offerKingdom, playerWars, warsOfFactionToJoin);
```

### IsMainClanMemberAvailableForRecall
`public static bool IsMainClanMemberAvailableForRecall(Hero hero, MobileParty targetParty, out TextObject explanation)`

**Purpose:** **Purpose:** Determines whether the this instance is in the main clan member available for recall state or condition.

```csharp
// Static call; no instance required
FactionHelper.IsMainClanMemberAvailableForRecall(hero, targetParty, explanation);
```

### IsMainClanMemberAvailableForPartyLeaderChange
`public static bool IsMainClanMemberAvailableForPartyLeaderChange(Hero hero, bool isSend, MobileParty targetParty, out TextObject explanation)`

**Purpose:** **Purpose:** Determines whether the this instance is in the main clan member available for party leader change state or condition.

```csharp
// Static call; no instance required
FactionHelper.IsMainClanMemberAvailableForPartyLeaderChange(hero, false, targetParty, explanation);
```

### IsMainClanMemberAvailableForSendingSettlement
`public static bool IsMainClanMemberAvailableForSendingSettlement(Hero hero, Settlement targetSettlement, out TextObject explanation)`

**Purpose:** **Purpose:** Determines whether the this instance is in the main clan member available for sending settlement state or condition.

```csharp
// Static call; no instance required
FactionHelper.IsMainClanMemberAvailableForSendingSettlement(hero, targetSettlement, explanation);
```

### IsMainClanMemberAvailableForSendingSettlementAsGovernor
`public static bool IsMainClanMemberAvailableForSendingSettlementAsGovernor(Hero hero, Settlement settlementOfGovernor, out TextObject explanation)`

**Purpose:** **Purpose:** Determines whether the this instance is in the main clan member available for sending settlement as governor state or condition.

```csharp
// Static call; no instance required
FactionHelper.IsMainClanMemberAvailableForSendingSettlementAsGovernor(hero, settlementOfGovernor, explanation);
```

## Usage Example

```csharp
FactionHelper.Initialize();
```

## See Also

- [Area Index](../)