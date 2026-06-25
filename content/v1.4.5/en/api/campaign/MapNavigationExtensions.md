---
title: "MapNavigationExtensions"
description: "Auto-generated class reference for MapNavigationExtensions."
---
# MapNavigationExtensions

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class MapNavigationExtensions`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem/MapNavigationExtensions.cs`

## Overview

`MapNavigationExtensions` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetPermission
`public static NavigationPermissionItem GetPermission(this INavigationHandler handler, MapNavigationItemType elementType)`

**Purpose:** **Purpose:** Reads and returns the permission value held by the this instance.

```csharp
// Static call; no instance required
MapNavigationExtensions.GetPermission(handler, elementType);
```

### IsActive
`public static bool IsActive(this INavigationHandler handler, MapNavigationItemType elementType)`

**Purpose:** **Purpose:** Determines whether the this instance is in the active state or condition.

```csharp
// Static call; no instance required
MapNavigationExtensions.IsActive(handler, elementType);
```

### OpenQuests
`public static void OpenQuests(this INavigationHandler handler)`

**Purpose:** **Purpose:** Opens the resource or UI associated with quests.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenQuests(handler);
```

### OpenQuests
`public static void OpenQuests(this INavigationHandler handler, QuestBase quest)`

**Purpose:** **Purpose:** Opens the resource or UI associated with quests.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenQuests(handler, quest);
```

### OpenQuests
`public static void OpenQuests(this INavigationHandler handler, IssueBase issue)`

**Purpose:** **Purpose:** Opens the resource or UI associated with quests.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenQuests(handler, issue);
```

### OpenQuests
`public static void OpenQuests(this INavigationHandler handler, JournalLogEntry log)`

**Purpose:** **Purpose:** Opens the resource or UI associated with quests.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenQuests(handler, log);
```

### OpenInventory
`public static void OpenInventory(this INavigationHandler handler)`

**Purpose:** **Purpose:** Opens the resource or UI associated with inventory.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenInventory(handler);
```

### OpenParty
`public static void OpenParty(this INavigationHandler handler)`

**Purpose:** **Purpose:** Opens the resource or UI associated with party.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenParty(handler);
```

### OpenCharacterDeveloper
`public static void OpenCharacterDeveloper(this INavigationHandler handler)`

**Purpose:** **Purpose:** Opens the resource or UI associated with character developer.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenCharacterDeveloper(handler);
```

### OpenCharacterDeveloper
`public static void OpenCharacterDeveloper(this INavigationHandler handler, Hero hero)`

**Purpose:** **Purpose:** Opens the resource or UI associated with character developer.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenCharacterDeveloper(handler, hero);
```

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler)`

**Purpose:** **Purpose:** Opens the resource or UI associated with kingdom.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenKingdom(handler);
```

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, Army army)`

**Purpose:** **Purpose:** Opens the resource or UI associated with kingdom.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenKingdom(handler, army);
```

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, Settlement settlement)`

**Purpose:** **Purpose:** Opens the resource or UI associated with kingdom.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenKingdom(handler, settlement);
```

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, Clan clan)`

**Purpose:** **Purpose:** Opens the resource or UI associated with kingdom.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenKingdom(handler, clan);
```

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, PolicyObject policy)`

**Purpose:** **Purpose:** Opens the resource or UI associated with kingdom.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenKingdom(handler, policy);
```

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, IFaction faction)`

**Purpose:** **Purpose:** Opens the resource or UI associated with kingdom.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenKingdom(handler, faction);
```

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, KingdomDecision decision)`

**Purpose:** **Purpose:** Opens the resource or UI associated with kingdom.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenKingdom(handler, decision);
```

### OpenClan
`public static void OpenClan(this INavigationHandler handler)`

**Purpose:** **Purpose:** Opens the resource or UI associated with clan.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenClan(handler);
```

### OpenClan
`public static void OpenClan(this INavigationHandler handler, Hero hero)`

**Purpose:** **Purpose:** Opens the resource or UI associated with clan.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenClan(handler, hero);
```

### OpenClan
`public static void OpenClan(this INavigationHandler handler, PartyBase party)`

**Purpose:** **Purpose:** Opens the resource or UI associated with clan.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenClan(handler, party);
```

### OpenClan
`public static void OpenClan(this INavigationHandler handler, Settlement settlement)`

**Purpose:** **Purpose:** Opens the resource or UI associated with clan.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenClan(handler, settlement);
```

### OpenClan
`public static void OpenClan(this INavigationHandler handler, Workshop workshop)`

**Purpose:** **Purpose:** Opens the resource or UI associated with clan.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenClan(handler, workshop);
```

### OpenClan
`public static void OpenClan(this INavigationHandler handler, Alley alley)`

**Purpose:** **Purpose:** Opens the resource or UI associated with clan.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenClan(handler, alley);
```

### OpenEscapeMenu
`public static void OpenEscapeMenu(this INavigationHandler handler)`

**Purpose:** **Purpose:** Opens the resource or UI associated with escape menu.

```csharp
// Static call; no instance required
MapNavigationExtensions.OpenEscapeMenu(handler);
```

## Usage Example

```csharp
MapNavigationExtensions.GetPermission(handler, elementType);
```

## See Also

- [Area Index](../)