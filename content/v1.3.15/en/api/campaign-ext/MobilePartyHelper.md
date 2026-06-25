---
title: "MobilePartyHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MobilePartyHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MobilePartyHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class MobilePartyHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/MobilePartyHelper.cs`

## Overview

`MobilePartyHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MobilePartyHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SpawnLordParty
`public static MobileParty SpawnLordParty(Hero hero, Settlement spawnSettlement)`

**Purpose:** Handles logic related to `spawn lord party`.

### SpawnLordParty
`public static MobileParty SpawnLordParty(Hero hero, CampaignVec2 position, float spawnRadius)`

**Purpose:** Handles logic related to `spawn lord party`.

### CreateNewClanMobileParty
`public static MobileParty CreateNewClanMobileParty(Hero hero, Clan clan)`

**Purpose:** Creates a new `new clan mobile party` instance or object.

### IsHeroAssignableForScoutInParty
`public static bool IsHeroAssignableForScoutInParty(Hero hero, MobileParty party)`

**Purpose:** Handles logic related to `is hero assignable for scout in party`.

### IsHeroAssignableForEngineerInParty
`public static bool IsHeroAssignableForEngineerInParty(Hero hero, MobileParty party)`

**Purpose:** Handles logic related to `is hero assignable for engineer in party`.

### IsHeroAssignableForSurgeonInParty
`public static bool IsHeroAssignableForSurgeonInParty(Hero hero, MobileParty party)`

**Purpose:** Handles logic related to `is hero assignable for surgeon in party`.

### IsHeroAssignableForQuartermasterInParty
`public static bool IsHeroAssignableForQuartermasterInParty(Hero hero, MobileParty party)`

**Purpose:** Handles logic related to `is hero assignable for quartermaster in party`.

### GetHeroWithHighestSkill
`public static Hero GetHeroWithHighestSkill(MobileParty party, SkillObject skill)`

**Purpose:** Gets the current value of `hero with highest skill`.

### GetStrongestAndPriorTroops
`public static TroopRoster GetStrongestAndPriorTroops(MobileParty mobileParty, int maxTroopCount, bool includePlayer)`

**Purpose:** Gets the current value of `strongest and prior troops`.

### GetStrongestAndPriorTroops
`public static TroopRoster GetStrongestAndPriorTroops(FlattenedTroopRoster roster, int maxTroopCount, bool includePlayer)`

**Purpose:** Gets the current value of `strongest and prior troops`.

### GetMaximumXpAmountPartyCanGet
`public static int GetMaximumXpAmountPartyCanGet(MobileParty party)`

**Purpose:** Gets the current value of `maximum xp amount party can get`.

### PartyAddSharedXp
`public static void PartyAddSharedXp(MobileParty party, float xpToDistribute)`

**Purpose:** Handles logic related to `party add shared xp`.

### WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath
`public static void WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath(TroopRoster roster, int numberOfMen, float chanceOfDeathPerUnit, out int deathAmount)`

**Purpose:** Handles logic related to `wound number of non hero troops randomly with chance of death`.

### CanTroopGainXp
`public static bool CanTroopGainXp(PartyBase owner, CharacterObject character, out int gainableMaxXp)`

**Purpose:** Checks whether the current object can `troop gain xp`.

### TryMatchPartySpeedWithItemWeight
`public static void TryMatchPartySpeedWithItemWeight(MobileParty party, float targetPartySpeed, ItemObject itemToUse = null)`

**Purpose:** Attempts to get `match party speed with item weight`, usually returning the result in an out parameter.

### GetMainPartySkillCounsellor
`public static Hero GetMainPartySkillCounsellor(SkillObject skill)`

**Purpose:** Gets the current value of `main party skill counsellor`.

### GetCurrentSettlementOfMobilePartyForAICalculation
`public static Settlement GetCurrentSettlementOfMobilePartyForAICalculation(MobileParty mobileParty)`

**Purpose:** Gets the current value of `current settlement of mobile party for a i calculation`.

### GetPlayerPrisonersPlayerCanSell
`public static TroopRoster GetPlayerPrisonersPlayerCanSell()`

**Purpose:** Gets the current value of `player prisoners player can sell`.

### FillPartyManuallyAfterCreation
`public static void FillPartyManuallyAfterCreation(MobileParty mobileParty, PartyTemplateObject partyTemplate, int desiredMenCount)`

**Purpose:** Handles logic related to `fill party manually after creation`.

### CanPartyAttackWithCurrentMorale
`public static bool CanPartyAttackWithCurrentMorale(MobileParty mobileParty)`

**Purpose:** Checks whether the current object can `party attack with current morale`.

### ResumePartyEscortBehaviorDelegate
`public delegate void ResumePartyEscortBehaviorDelegate()`

**Purpose:** Handles logic related to `resume party escort behavior delegate`.

## Usage Example

```csharp
MobilePartyHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)