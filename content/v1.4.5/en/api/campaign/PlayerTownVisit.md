---
title: "PlayerTownVisit"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerTownVisit`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerTownVisit

**Namespace:** TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerTownVisit`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers/PlayerTownVisit.cs`

## Overview

`PlayerTownVisit` lives in `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### game_menu_town_menu_on_init
`public static void game_menu_town_menu_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_menu_on_init`.

### game_menu_town_manage_town_on_consequence
`public static void game_menu_town_manage_town_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_manage_town_on_consequence`.

### game_menu_town_castle_manage_town_on_consequence
`public static void game_menu_town_castle_manage_town_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_castle_manage_town_on_consequence`.

### game_menu_castle_manage_castle_on_consequence
`public static void game_menu_castle_manage_castle_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_castle_manage_castle_on_consequence`.

## Usage Example

```csharp
PlayerTownVisit.game_menu_town_menu_on_init(args);
```

## See Also

- [Complete Class Catalog](../catalog)