---
title: "EncounterGameMenuBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncounterGameMenuBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncounterGameMenuBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncounterGameMenuBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/EncounterGameMenuBehavior.cs`

## Overview

`EncounterGameMenuBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### AddCurrentSettlementAsAlreadySneakedIn
`public void AddCurrentSettlementAsAlreadySneakedIn()`

**Purpose:** Adds `current settlement as already sneaked in` to the current collection or state.

### game_menu_captivity_taken_prisoner_cheat_on_consequence
`public static void game_menu_captivity_taken_prisoner_cheat_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_captivity_taken_prisoner_cheat_on_consequence`.

### game_menu_captivity_castle_taken_prisoner_cont_on_condition
`public static bool game_menu_captivity_castle_taken_prisoner_cont_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_captivity_castle_taken_prisoner_cont_on_condition`.

### menu_sneak_into_town_succeeded_continue_on_consequence
`public static void menu_sneak_into_town_succeeded_continue_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `menu_sneak_into_town_succeeded_continue_on_consequence`.

### menu_sneak_into_town_succeeded_continue_on_condition
`public static bool menu_sneak_into_town_succeeded_continue_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `menu_sneak_into_town_succeeded_continue_on_condition`.

### game_menu_sneak_into_town_caught_on_init
`public static void game_menu_sneak_into_town_caught_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_sneak_into_town_caught_on_init`.

### mno_sneak_caught_surrender_on_consequence
`public static void mno_sneak_caught_surrender_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `mno_sneak_caught_surrender_on_consequence`.

### mno_sneak_caught_surrender_on_condition
`public static bool mno_sneak_caught_surrender_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `mno_sneak_caught_surrender_on_condition`.

### game_menu_captivity_taken_prisoner_cheat_on_condition
`public static bool game_menu_captivity_taken_prisoner_cheat_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_captivity_taken_prisoner_cheat_on_condition`.

### game_menu_captivity_castle_taken_prisoner_cont_on_consequence
`public static void game_menu_captivity_castle_taken_prisoner_cont_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_captivity_castle_taken_prisoner_cont_on_consequence`.

### game_request_entry_to_castle_approved_continue_on_consequence
`public static void game_request_entry_to_castle_approved_continue_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_request_entry_to_castle_approved_continue_on_consequence`.

### game_request_entry_to_castle_approved_continue_on_condition
`public static bool game_request_entry_to_castle_approved_continue_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_request_entry_to_castle_approved_continue_on_condition`.

### game_request_entry_to_castle_rejected_continue_on_consequence
`public static void game_request_entry_to_castle_rejected_continue_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_request_entry_to_castle_rejected_continue_on_consequence`.

### menu_castle_entry_denied_on_init
`public static void menu_castle_entry_denied_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `menu_castle_entry_denied_on_init`.

### game_menu_castle_menu_sound_on_init
`public static void game_menu_castle_menu_sound_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_castle_menu_sound_on_init`.

## Usage Example

```csharp
var value = new EncounterGameMenuBehavior();
value.SyncData(dataStore);
```

## See Also

- [Complete Class Catalog](../catalog)