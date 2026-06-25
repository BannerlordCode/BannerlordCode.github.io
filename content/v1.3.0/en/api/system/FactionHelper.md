---
title: "FactionHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FactionHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `find potential strength`.

### GetEnemyKingdoms
`public static IEnumerable<Kingdom> GetEnemyKingdoms(IFaction faction)`

**Purpose:** Gets the current value of `enemy kingdoms`.

### GetStances
`public static IEnumerable<StanceLink> GetStances(IFaction faction)`

**Purpose:** Gets the current value of `stances`.

### GetPowerRatioToEnemies
`public static float GetPowerRatioToEnemies(Kingdom kingdom)`

**Purpose:** Gets the current value of `power ratio to enemies`.

### IsClanNameApplicable
`public static Tuple<bool, string> IsClanNameApplicable(string name)`

**Purpose:** Handles logic related to `is clan name applicable`.

### IsKingdomNameApplicable
`public static Tuple<bool, string> IsKingdomNameApplicable(string name)`

**Purpose:** Handles logic related to `is kingdom name applicable`.

### GetPowerRatioToTributePayedKingdoms
`public static float GetPowerRatioToTributePayedKingdoms(Kingdom kingdom)`

**Purpose:** Gets the current value of `power ratio to tribute payed kingdoms`.

### CanClanBeGrantedFief
`public static bool CanClanBeGrantedFief(Clan clan)`

**Purpose:** Checks whether the current object can `clan be granted fief`.

### CanPlayerEnterFaction
`public static bool CanPlayerEnterFaction(bool asVassal = false)`

**Purpose:** Checks whether the current object can `player enter faction`.

### GetTotalEnemyKingdomPower
`public static float GetTotalEnemyKingdomPower(Kingdom kingdom)`

**Purpose:** Gets the current value of `total enemy kingdom power`.

### GetTotalTributePayedKingdomsPower
`public static float GetTotalTributePayedKingdomsPower(Kingdom kingdom)`

**Purpose:** Gets the current value of `total tribute payed kingdoms power`.

### GetKingdomArmies
`public static IEnumerable<Army> GetKingdomArmies(IFaction mapFaction)`

**Purpose:** Gets the current value of `kingdom armies`.

### SettlementProsperityEffectOnGarrisonSizeConstant
`public static float SettlementProsperityEffectOnGarrisonSizeConstant(Town town)`

**Purpose:** Sets the value or state of `tlement prosperity effect on garrison size constant`.

### SettlementFoodPotentialEffectOnGarrisonSizeConstant
`public static float SettlementFoodPotentialEffectOnGarrisonSizeConstant(Settlement settlement)`

**Purpose:** Sets the value or state of `tlement food potential effect on garrison size constant`.

### OwnerClanEconomyEffectOnGarrisonSizeConstant
`public static float OwnerClanEconomyEffectOnGarrisonSizeConstant(Clan clan)`

**Purpose:** Handles logic related to `owner clan economy effect on garrison size constant`.

### FindIdealGarrisonStrengthPerWalledCenter
`public static float FindIdealGarrisonStrengthPerWalledCenter(Kingdom kingdom, Clan clan = null)`

**Purpose:** Handles logic related to `find ideal garrison strength per walled center`.

### FinishAllRelatedHostileActionsOfNobleToFaction
`public static void FinishAllRelatedHostileActionsOfNobleToFaction(Hero noble, IFaction faction)`

**Purpose:** Handles logic related to `finish all related hostile actions of noble to faction`.

### FinishAllRelatedHostileActionsOfFactionToFaction
`public static void FinishAllRelatedHostileActionsOfFactionToFaction(IFaction faction1, IFaction faction2)`

**Purpose:** Handles logic related to `finish all related hostile actions of faction to faction`.

### FinishAllRelatedHostileActions
`public static void FinishAllRelatedHostileActions(Clan clan1, Clan clan2)`

**Purpose:** Handles logic related to `finish all related hostile actions`.

### FinishAllRelatedHostileActions
`public static void FinishAllRelatedHostileActions(Kingdom kingdom1, Kingdom kingdom2)`

**Purpose:** Handles logic related to `finish all related hostile actions`.

### AdjustFactionStancesForClanJoiningKingdom
`public static void AdjustFactionStancesForClanJoiningKingdom(Clan joiningClan, Kingdom kingdomToJoin)`

**Purpose:** Handles logic related to `adjust faction stances for clan joining kingdom`.

### GetTermUsedByOtherFaction
`public static TextObject GetTermUsedByOtherFaction(IFaction faction, IFaction otherFaction, bool pejorative)`

**Purpose:** Gets the current value of `term used by other faction`.

### GetFormalNameForFactionCulture
`public static TextObject GetFormalNameForFactionCulture(CultureObject factionCulture)`

**Purpose:** Gets the current value of `formal name for faction culture`.

### GetInformalNameForFactionCulture
`public static TextObject GetInformalNameForFactionCulture(CultureObject factionCulture)`

**Purpose:** Gets the current value of `informal name for faction culture`.

### GetAdjectiveForFactionCulture
`public static TextObject GetAdjectiveForFactionCulture(CultureObject factionCulture)`

**Purpose:** Gets the current value of `adjective for faction culture`.

### GetAdjectiveForFaction
`public static TextObject GetAdjectiveForFaction(IFaction faction)`

**Purpose:** Gets the current value of `adjective for faction`.

### GenerateClanNameforPlayer
`public static TextObject GenerateClanNameforPlayer()`

**Purpose:** Handles logic related to `generate clan namefor player`.

### GetDistanceToClosestNonAllyFortificationOfFaction
`public static float GetDistanceToClosestNonAllyFortificationOfFaction(IFaction faction)`

**Purpose:** Gets the current value of `distance to closest non ally fortification of faction`.

### GetMidSettlementOfFaction
`public static Settlement GetMidSettlementOfFaction(IFaction faction)`

**Purpose:** Gets the current value of `mid settlement of faction`.

### GetPossibleKingdomsToDeclareWar
`public static List<IFaction> GetPossibleKingdomsToDeclareWar(Kingdom kingdom)`

**Purpose:** Gets the current value of `possible kingdoms to declare war`.

### GetPossibleKingdomsToDeclarePeace
`public static List<IFaction> GetPossibleKingdomsToDeclarePeace(Kingdom kingdom)`

**Purpose:** Gets the current value of `possible kingdoms to declare peace`.

### GetAllyMinorFactions
`public static IEnumerable<Clan> GetAllyMinorFactions(CharacterObject otherCharacter)`

**Purpose:** Gets the current value of `ally minor factions`.

### ChooseHeirClanForFiefs
`public static Clan ChooseHeirClanForFiefs(Clan oldClan)`

**Purpose:** Handles logic related to `choose heir clan for fiefs`.

### CanPlayerOfferMercenaryService
`public static bool CanPlayerOfferMercenaryService(Kingdom offerKingdom, out List<IFaction> playerWars, out List<IFaction> warsOfFactionToJoin)`

**Purpose:** Checks whether the current object can `player offer mercenary service`.

### CanPlayerOfferVassalage
`public static bool CanPlayerOfferVassalage(Kingdom offerKingdom, out List<IFaction> playerWars, out List<IFaction> warsOfFactionToJoin)`

**Purpose:** Checks whether the current object can `player offer vassalage`.

### IsMainClanMemberAvailableForRecall
`public static bool IsMainClanMemberAvailableForRecall(Hero hero, MobileParty targetParty, out TextObject explanation)`

**Purpose:** Handles logic related to `is main clan member available for recall`.

### IsMainClanMemberAvailableForPartyLeaderChange
`public static bool IsMainClanMemberAvailableForPartyLeaderChange(Hero hero, bool isSend, MobileParty targetParty, out TextObject explanation)`

**Purpose:** Handles logic related to `is main clan member available for party leader change`.

### IsMainClanMemberAvailableForSendingSettlement
`public static bool IsMainClanMemberAvailableForSendingSettlement(Hero hero, Settlement targetSettlement, out TextObject explanation)`

**Purpose:** Handles logic related to `is main clan member available for sending settlement`.

### IsMainClanMemberAvailableForSendingSettlementAsGovernor
`public static bool IsMainClanMemberAvailableForSendingSettlementAsGovernor(Hero hero, Settlement settlementOfGovernor, out TextObject explanation)`

**Purpose:** Handles logic related to `is main clan member available for sending settlement as governor`.

## Usage Example

```csharp
FactionHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)