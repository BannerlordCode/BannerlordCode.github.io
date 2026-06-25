---
title: "PlayerTownVisitCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerTownVisitCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerTownVisitCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerTownVisitCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/PlayerTownVisitCampaignBehavior.cs`

## Overview

`PlayerTownVisitCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### wait_menu_prisoner_wait_on_init
`public static void wait_menu_prisoner_wait_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `wait_menu_prisoner_wait_on_init`.

### wait_menu_prisoner_settlement_wait_ui_on_init
`public static void wait_menu_prisoner_settlement_wait_ui_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `wait_menu_prisoner_settlement_wait_ui_on_init`.

### wait_menu_prisoner_wait_on_condition
`public static bool wait_menu_prisoner_wait_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `wait_menu_prisoner_wait_on_condition`.

### wait_menu_prisoner_wait_on_tick
`public static void wait_menu_prisoner_wait_on_tick(MenuCallbackArgs args, CampaignTime dt)`

**Purpose:** Handles logic related to `wait_menu_prisoner_wait_on_tick`.

### wait_menu_settlement_wait_on_tick
`public static void wait_menu_settlement_wait_on_tick(MenuCallbackArgs args, CampaignTime dt)`

**Purpose:** Handles logic related to `wait_menu_settlement_wait_on_tick`.

### game_menu_town_manage_town_on_condition
`public static bool game_menu_town_manage_town_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_manage_town_on_condition`.

### game_menu_town_manage_town_cheat_on_condition
`public static bool game_menu_town_manage_town_cheat_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_manage_town_cheat_on_condition`.

### settlement_player_unconscious_continue_on_consequence
`public static void settlement_player_unconscious_continue_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `settlement_player_unconscious_continue_on_consequence`.

### game_menu_town_menu_on_init
`public static void game_menu_town_menu_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_menu_on_init`.

### game_menu_town_menu_arena_on_init
`public static void game_menu_town_menu_arena_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_menu_arena_on_init`.

### game_menu_village_menu_on_init
`public static void game_menu_village_menu_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_village_menu_on_init`.

### game_menu_town_menu_keep_on_init
`public static void game_menu_town_menu_keep_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_menu_keep_on_init`.

### game_menu_ui_town_manage_town_on_consequence
`public static void game_menu_ui_town_manage_town_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_ui_town_manage_town_on_consequence`.

### game_menu_ui_town_castle_manage_town_on_consequence
`public static void game_menu_ui_town_castle_manage_town_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_ui_town_castle_manage_town_on_consequence`.

### game_menu_town_menu_backstreet_sound_on_init
`public static void game_menu_town_menu_backstreet_sound_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_menu_backstreet_sound_on_init`.

### game_menu_town_menu_keep_sound_on_init
`public static void game_menu_town_menu_keep_sound_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_menu_keep_sound_on_init`.

### game_menu_town_menu_sound_on_init
`public static void game_menu_town_menu_sound_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_menu_sound_on_init`.

### game_menu_town_menu_enter_sound_on_init
`public static void game_menu_town_menu_enter_sound_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_menu_enter_sound_on_init`.

### game_menu_village_menu_sound_on_init
`public static void game_menu_village_menu_sound_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_village_menu_sound_on_init`.

### game_menu_village__enter_menu_sound_on_init
`public static void game_menu_village__enter_menu_sound_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_village__enter_menu_sound_on_init`.

## Usage Example

```csharp
var value = new PlayerTownVisitCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)