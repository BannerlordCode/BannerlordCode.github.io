<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapNavigationExtensions`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapNavigationExtensions

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class MapNavigationExtensions`
**Base:** none
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/MapNavigationExtensions.cs`

## Overview

`MapNavigationExtensions` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetPermission
`public static NavigationPermissionItem GetPermission(this INavigationHandler handler, MapNavigationItemType elementType)`

**Purpose:** Gets the current value of `permission`.

### IsActive
`public static bool IsActive(this INavigationHandler handler, MapNavigationItemType elementType)`

**Purpose:** Handles logic related to `is active`.

### OpenQuests
`public static void OpenQuests(this INavigationHandler handler)`

**Purpose:** Handles logic related to `open quests`.

### OpenQuests
`public static void OpenQuests(this INavigationHandler handler, QuestBase quest)`

**Purpose:** Handles logic related to `open quests`.

### OpenQuests
`public static void OpenQuests(this INavigationHandler handler, IssueBase issue)`

**Purpose:** Handles logic related to `open quests`.

### OpenQuests
`public static void OpenQuests(this INavigationHandler handler, JournalLogEntry log)`

**Purpose:** Handles logic related to `open quests`.

### OpenInventory
`public static void OpenInventory(this INavigationHandler handler)`

**Purpose:** Handles logic related to `open inventory`.

### OpenParty
`public static void OpenParty(this INavigationHandler handler)`

**Purpose:** Handles logic related to `open party`.

### OpenCharacterDeveloper
`public static void OpenCharacterDeveloper(this INavigationHandler handler)`

**Purpose:** Handles logic related to `open character developer`.

### OpenCharacterDeveloper
`public static void OpenCharacterDeveloper(this INavigationHandler handler, Hero hero)`

**Purpose:** Handles logic related to `open character developer`.

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler)`

**Purpose:** Handles logic related to `open kingdom`.

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, Army army)`

**Purpose:** Handles logic related to `open kingdom`.

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, Settlement settlement)`

**Purpose:** Handles logic related to `open kingdom`.

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, Clan clan)`

**Purpose:** Handles logic related to `open kingdom`.

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, PolicyObject policy)`

**Purpose:** Handles logic related to `open kingdom`.

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, IFaction faction)`

**Purpose:** Handles logic related to `open kingdom`.

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, KingdomDecision decision)`

**Purpose:** Handles logic related to `open kingdom`.

### OpenClan
`public static void OpenClan(this INavigationHandler handler)`

**Purpose:** Handles logic related to `open clan`.

### OpenClan
`public static void OpenClan(this INavigationHandler handler, Hero hero)`

**Purpose:** Handles logic related to `open clan`.

### OpenClan
`public static void OpenClan(this INavigationHandler handler, PartyBase party)`

**Purpose:** Handles logic related to `open clan`.

### OpenClan
`public static void OpenClan(this INavigationHandler handler, Settlement settlement)`

**Purpose:** Handles logic related to `open clan`.

### OpenClan
`public static void OpenClan(this INavigationHandler handler, Workshop workshop)`

**Purpose:** Handles logic related to `open clan`.

### OpenClan
`public static void OpenClan(this INavigationHandler handler, Alley alley)`

**Purpose:** Handles logic related to `open clan`.

### OpenEscapeMenu
`public static void OpenEscapeMenu(this INavigationHandler handler)`

**Purpose:** Handles logic related to `open escape menu`.

## Usage Example

```csharp
MapNavigationExtensions.GetPermission(handler, elementType);
```

## See Also

- [Complete Class Catalog](../catalog)