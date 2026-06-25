---
title: "EncounterGameMenuBehavior"
description: "Auto-generated class reference for EncounterGameMenuBehavior."
---
# EncounterGameMenuBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncounterGameMenuBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/EncounterGameMenuBehavior.cs`

## Overview

`EncounterGameMenuBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of EncounterGameMenuBehavior from the subsystem API first
EncounterGameMenuBehavior encounterGameMenuBehavior = ...;
encounterGameMenuBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of EncounterGameMenuBehavior from the subsystem API first
EncounterGameMenuBehavior encounterGameMenuBehavior = ...;
encounterGameMenuBehavior.RegisterEvents();
```

### AddCurrentSettlementAsAlreadySneakedIn
`public void AddCurrentSettlementAsAlreadySneakedIn()`

**Purpose:** Adds current settlement as already sneaked in to the current collection or state.

```csharp
// Obtain an instance of EncounterGameMenuBehavior from the subsystem API first
EncounterGameMenuBehavior encounterGameMenuBehavior = ...;
encounterGameMenuBehavior.AddCurrentSettlementAsAlreadySneakedIn();
```

### game_menu_captivity_taken_prisoner_cheat_on_consequence
`public static void game_menu_captivity_taken_prisoner_cheat_on_consequence(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_captivity_taken_prisoner_cheat_on_consequence logic.

```csharp
// Static call; no instance required
EncounterGameMenuBehavior.game_menu_captivity_taken_prisoner_cheat_on_consequence(args);
```

### game_menu_captivity_castle_taken_prisoner_cont_on_condition
`public static bool game_menu_captivity_castle_taken_prisoner_cont_on_condition(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_captivity_castle_taken_prisoner_cont_on_condition logic.

```csharp
// Static call; no instance required
EncounterGameMenuBehavior.game_menu_captivity_castle_taken_prisoner_cont_on_condition(args);
```

### menu_sneak_into_town_succeeded_continue_on_consequence
`public static void menu_sneak_into_town_succeeded_continue_on_consequence(MenuCallbackArgs args)`

**Purpose:** Executes the menu_sneak_into_town_succeeded_continue_on_consequence logic.

```csharp
// Static call; no instance required
EncounterGameMenuBehavior.menu_sneak_into_town_succeeded_continue_on_consequence(args);
```

### menu_sneak_into_town_succeeded_continue_on_condition
`public static bool menu_sneak_into_town_succeeded_continue_on_condition(MenuCallbackArgs args)`

**Purpose:** Executes the menu_sneak_into_town_succeeded_continue_on_condition logic.

```csharp
// Static call; no instance required
EncounterGameMenuBehavior.menu_sneak_into_town_succeeded_continue_on_condition(args);
```

### game_menu_sneak_into_town_caught_on_init
`public static void game_menu_sneak_into_town_caught_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_sneak_into_town_caught_on_init logic.

```csharp
// Static call; no instance required
EncounterGameMenuBehavior.game_menu_sneak_into_town_caught_on_init(args);
```

### mno_sneak_caught_surrender_on_consequence
`public static void mno_sneak_caught_surrender_on_consequence(MenuCallbackArgs args)`

**Purpose:** Executes the mno_sneak_caught_surrender_on_consequence logic.

```csharp
// Static call; no instance required
EncounterGameMenuBehavior.mno_sneak_caught_surrender_on_consequence(args);
```

### mno_sneak_caught_surrender_on_condition
`public static bool mno_sneak_caught_surrender_on_condition(MenuCallbackArgs args)`

**Purpose:** Executes the mno_sneak_caught_surrender_on_condition logic.

```csharp
// Static call; no instance required
EncounterGameMenuBehavior.mno_sneak_caught_surrender_on_condition(args);
```

### game_menu_captivity_taken_prisoner_cheat_on_condition
`public static bool game_menu_captivity_taken_prisoner_cheat_on_condition(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_captivity_taken_prisoner_cheat_on_condition logic.

```csharp
// Static call; no instance required
EncounterGameMenuBehavior.game_menu_captivity_taken_prisoner_cheat_on_condition(args);
```

### game_menu_captivity_castle_taken_prisoner_cont_on_consequence
`public static void game_menu_captivity_castle_taken_prisoner_cont_on_consequence(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_captivity_castle_taken_prisoner_cont_on_consequence logic.

```csharp
// Static call; no instance required
EncounterGameMenuBehavior.game_menu_captivity_castle_taken_prisoner_cont_on_consequence(args);
```

### game_request_entry_to_castle_approved_continue_on_consequence
`public static void game_request_entry_to_castle_approved_continue_on_consequence(MenuCallbackArgs args)`

**Purpose:** Executes the game_request_entry_to_castle_approved_continue_on_consequence logic.

```csharp
// Static call; no instance required
EncounterGameMenuBehavior.game_request_entry_to_castle_approved_continue_on_consequence(args);
```

### game_request_entry_to_castle_approved_continue_on_condition
`public static bool game_request_entry_to_castle_approved_continue_on_condition(MenuCallbackArgs args)`

**Purpose:** Executes the game_request_entry_to_castle_approved_continue_on_condition logic.

```csharp
// Static call; no instance required
EncounterGameMenuBehavior.game_request_entry_to_castle_approved_continue_on_condition(args);
```

### game_request_entry_to_castle_rejected_continue_on_consequence
`public static void game_request_entry_to_castle_rejected_continue_on_consequence(MenuCallbackArgs args)`

**Purpose:** Executes the game_request_entry_to_castle_rejected_continue_on_consequence logic.

```csharp
// Static call; no instance required
EncounterGameMenuBehavior.game_request_entry_to_castle_rejected_continue_on_consequence(args);
```

### menu_castle_entry_denied_on_init
`public static void menu_castle_entry_denied_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the menu_castle_entry_denied_on_init logic.

```csharp
// Static call; no instance required
EncounterGameMenuBehavior.menu_castle_entry_denied_on_init(args);
```

### game_menu_castle_menu_sound_on_init
`public static void game_menu_castle_menu_sound_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_castle_menu_sound_on_init logic.

```csharp
// Static call; no instance required
EncounterGameMenuBehavior.game_menu_castle_menu_sound_on_init(args);
```

### game_menu_encounter_naval_disengaged_init
`public static void game_menu_encounter_naval_disengaged_init(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_encounter_naval_disengaged_init logic.

```csharp
// Static call; no instance required
EncounterGameMenuBehavior.game_menu_encounter_naval_disengaged_init(args);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncounterGameMenuBehavior encounterGameMenuBehavior = ...;
encounterGameMenuBehavior.SyncData(dataStore);
```

## See Also

- [Area Index](../)