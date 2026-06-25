---
title: "MobilePartyHelper"
description: "Auto-generated class reference for MobilePartyHelper."
---
# MobilePartyHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class MobilePartyHelper`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/MobilePartyHelper.cs`

## Overview

`MobilePartyHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MobilePartyHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ResumePartyEscortBehaviorDelegate
`public delegate void ResumePartyEscortBehaviorDelegate()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MobilePartyHelper from the subsystem API first
MobilePartyHelper mobilePartyHelper = ...;
mobilePartyHelper.ResumePartyEscortBehaviorDelegate();
```

### SpawnLordParty
`public static MobileParty SpawnLordParty(Hero hero, Settlement spawnSettlement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MobilePartyHelper.SpawnLordParty(hero, spawnSettlement);
```

### SpawnLordParty
`public static MobileParty SpawnLordParty(Hero hero, CampaignVec2 position, float spawnRadius)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MobilePartyHelper.SpawnLordParty(hero, position, 0);
```

### CreateNewClanMobileParty
`public static MobileParty CreateNewClanMobileParty(Hero hero, Clan clan)`

**Purpose:** Constructs a new `new clan mobile party` entity and returns it to the caller.

```csharp
// Static call; no instance required
MobilePartyHelper.CreateNewClanMobileParty(hero, clan);
```

### GetHeroWithHighestSkill
`public static Hero GetHeroWithHighestSkill(MobileParty party, SkillObject skill)`

**Purpose:** Reads and returns the `hero with highest skill` value held by the current object.

```csharp
// Static call; no instance required
MobilePartyHelper.GetHeroWithHighestSkill(party, skill);
```

### GetStrongestAndPriorTroops
`public static TroopRoster GetStrongestAndPriorTroops(MobileParty mobileParty, int maxTroopCount, bool includePlayer)`

**Purpose:** Reads and returns the `strongest and prior troops` value held by the current object.

```csharp
// Static call; no instance required
MobilePartyHelper.GetStrongestAndPriorTroops(mobileParty, 0, false);
```

### GetStrongestAndPriorTroops
`public static TroopRoster GetStrongestAndPriorTroops(FlattenedTroopRoster roster, int maxTroopCount, bool includePlayer)`

**Purpose:** Reads and returns the `strongest and prior troops` value held by the current object.

```csharp
// Static call; no instance required
MobilePartyHelper.GetStrongestAndPriorTroops(roster, 0, false);
```

### GetMaximumXpAmountPartyCanGet
`public static int GetMaximumXpAmountPartyCanGet(MobileParty party)`

**Purpose:** Reads and returns the `maximum xp amount party can get` value held by the current object.

```csharp
// Static call; no instance required
MobilePartyHelper.GetMaximumXpAmountPartyCanGet(party);
```

### PartyAddSharedXp
`public static void PartyAddSharedXp(MobileParty party, float xpToDistribute)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MobilePartyHelper.PartyAddSharedXp(party, 0);
```

### WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath
`public static void WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath(TroopRoster roster, int numberOfMen, float chanceOfDeathPerUnit, out int deathAmount)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MobilePartyHelper.WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath(roster, 0, 0, deathAmount);
```

### CanTroopGainXp
`public static bool CanTroopGainXp(PartyBase owner, CharacterObject character, out int gainableMaxXp)`

**Purpose:** Checks whether the current object meets the preconditions for `troop gain xp`.

```csharp
// Static call; no instance required
MobilePartyHelper.CanTroopGainXp(owner, character, gainableMaxXp);
```

### TryMatchPartySpeedWithItemWeight
`public static void TryMatchPartySpeedWithItemWeight(MobileParty party, float targetPartySpeed, ItemObject itemToUse = null)`

**Purpose:** Attempts to retrieve `match party speed with item weight`, usually returning success through an out parameter.

```csharp
// Static call; no instance required
MobilePartyHelper.TryMatchPartySpeedWithItemWeight(party, 0, null);
```

### GetMainPartySkillCounsellor
`public static Hero GetMainPartySkillCounsellor(SkillObject skill)`

**Purpose:** Reads and returns the `main party skill counsellor` value held by the current object.

```csharp
// Static call; no instance required
MobilePartyHelper.GetMainPartySkillCounsellor(skill);
```

### GetCurrentSettlementOfMobilePartyForAICalculation
`public static Settlement GetCurrentSettlementOfMobilePartyForAICalculation(MobileParty mobileParty)`

**Purpose:** Reads and returns the `current settlement of mobile party for a i calculation` value held by the current object.

```csharp
// Static call; no instance required
MobilePartyHelper.GetCurrentSettlementOfMobilePartyForAICalculation(mobileParty);
```

### GetPlayerPrisonersPlayerCanSell
`public static TroopRoster GetPlayerPrisonersPlayerCanSell()`

**Purpose:** Reads and returns the `player prisoners player can sell` value held by the current object.

```csharp
// Static call; no instance required
MobilePartyHelper.GetPlayerPrisonersPlayerCanSell();
```

### FillPartyManuallyAfterCreation
`public static void FillPartyManuallyAfterCreation(MobileParty mobileParty, PartyTemplateObject partyTemplate, int desiredMenCount)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MobilePartyHelper.FillPartyManuallyAfterCreation(mobileParty, partyTemplate, 0);
```

### CanPartyAttackWithCurrentMorale
`public static bool CanPartyAttackWithCurrentMorale(MobileParty mobileParty)`

**Purpose:** Checks whether the current object meets the preconditions for `party attack with current morale`.

```csharp
// Static call; no instance required
MobilePartyHelper.CanPartyAttackWithCurrentMorale(mobileParty);
```

## Usage Example

```csharp
MobilePartyHelper.Initialize();
```

## See Also

- [Area Index](../)