<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapEventHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class MapEventHelper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/MapEventHelper.cs`

## Overview

`MapEventHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MapEventHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetRaidContext
`public static bool GetRaidContext(MapEvent mapEvent, out BattleSideEnum raiderSide, out bool raiderHasSeaPresence, out bool raiderHasLandPresence, out bool villageFactionSideHasSeaPresence, out bool villageFactionSideHasLandPresence, out bool wasEverInLootingPhase)`

**Purpose:** Gets the current value of `raid context`.

### IsNavalRaid
`public static bool IsNavalRaid(MapEvent mapEvent)`

**Purpose:** Handles logic related to `is naval raid`.

### GetSallyOutDefenderLeader
`public static PartyBase GetSallyOutDefenderLeader()`

**Purpose:** Gets the current value of `sally out defender leader`.

### CanMainPartyLeaveBattleCommonCondition
`public static bool CanMainPartyLeaveBattleCommonCondition()`

**Purpose:** Checks whether the current object can `main party leave battle common condition`.

### GetEncounteredPartyBase
`public static PartyBase GetEncounteredPartyBase(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Gets the current value of `encountered party base`.

### OnConversationEnd
`public static void OnConversationEnd()`

**Purpose:** Called when the `conversation end` event is raised.

### GetPriorityListForHideoutMission
`public static FlattenedTroopRoster GetPriorityListForHideoutMission(List<MobileParty> partyList, out int firstPhaseTroopCount)`

**Purpose:** Gets the current value of `priority list for hideout mission`.

## Usage Example

```csharp
MapEventHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)