---
title: "DefaultEncounter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultEncounter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultEncounter

**Namespace:** TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounter`
**Area:** campaign-ext

## Overview

`DefaultEncounter` lives in `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### game_menu_taken_prisoner_ui_on_init
`public static void game_menu_taken_prisoner_ui_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_taken_prisoner_ui_on_init`.

### game_menu_defeat_and_taken_prisoner_ui_on_init
`public static void game_menu_defeat_and_taken_prisoner_ui_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_defeat_and_taken_prisoner_ui_on_init`.

### game_menu_taken_prisoner_town_ui_on_init
`public static void game_menu_taken_prisoner_town_ui_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_taken_prisoner_town_ui_on_init`.

### game_menu_town_menu_on_init
`public static void game_menu_town_menu_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_menu_on_init`.

### game_menu_attackers_left_on_init
`public static void game_menu_attackers_left_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_attackers_left_on_init`.

### game_menu_new_game_begin_on_init
`public static void game_menu_new_game_begin_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_new_game_begin_on_init`.

### game_menu_kingdom_mno_call_to_arms_on_consequence
`public static void game_menu_kingdom_mno_call_to_arms_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_kingdom_mno_call_to_arms_on_consequence`.

### game_menu_encyclopedia_on_consequence
`public static void game_menu_encyclopedia_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_encyclopedia_on_consequence`.

### game_menu_town_menu_request_meeting_on_init
`public static void game_menu_town_menu_request_meeting_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_menu_request_meeting_on_init`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
DefaultEncounter.game_menu_taken_prisoner_ui_on_init(args);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
