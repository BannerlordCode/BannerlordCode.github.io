---
title: "MapEventHelper"
description: "Auto-generated class reference for MapEventHelper."
---
# MapEventHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class MapEventHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/MapEventHelper.cs`

## Overview

`MapEventHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MapEventHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSallyOutDefenderLeader
`public static PartyBase GetSallyOutDefenderLeader()`

**Purpose:** **Purpose:** Reads and returns the sally out defender leader value held by the this instance.

```csharp
// Static call; no instance required
MapEventHelper.GetSallyOutDefenderLeader();
```

### CanMainPartyLeaveBattleCommonCondition
`public static bool CanMainPartyLeaveBattleCommonCondition()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for main party leave battle common condition.

```csharp
// Static call; no instance required
MapEventHelper.CanMainPartyLeaveBattleCommonCondition();
```

### GetEncounteredPartyBase
`public static PartyBase GetEncounteredPartyBase(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** **Purpose:** Reads and returns the encountered party base value held by the this instance.

```csharp
// Static call; no instance required
MapEventHelper.GetEncounteredPartyBase(attackerParty, defenderParty);
```

### OnConversationEnd
`public static void OnConversationEnd()`

**Purpose:** **Purpose:** Invoked when the conversation end event is raised.

```csharp
// Static call; no instance required
MapEventHelper.OnConversationEnd();
```

### GetPriorityListForHideoutMission
`public static FlattenedTroopRoster GetPriorityListForHideoutMission(List<MobileParty> partyList, out int firstPhaseTroopCount)`

**Purpose:** **Purpose:** Reads and returns the priority list for hideout mission value held by the this instance.

```csharp
// Static call; no instance required
MapEventHelper.GetPriorityListForHideoutMission(partyList, firstPhaseTroopCount);
```

## Usage Example

```csharp
MapEventHelper.Initialize();
```

## See Also

- [Area Index](../)