---
title: "PlayerTownVisitCampaignBehavior"
description: "Auto-generated class reference for PlayerTownVisitCampaignBehavior."
---
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

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of PlayerTownVisitCampaignBehavior from the subsystem API first
PlayerTownVisitCampaignBehavior playerTownVisitCampaignBehavior = ...;
playerTownVisitCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of PlayerTownVisitCampaignBehavior from the subsystem API first
PlayerTownVisitCampaignBehavior playerTownVisitCampaignBehavior = ...;
playerTownVisitCampaignBehavior.SyncData(dataStore);
```

### wait_menu_prisoner_wait_on_init
`public static void wait_menu_prisoner_wait_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the wait_menu_prisoner_wait_on_init logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.wait_menu_prisoner_wait_on_init(args);
```

### wait_menu_prisoner_settlement_wait_ui_on_init
`public static void wait_menu_prisoner_settlement_wait_ui_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the wait_menu_prisoner_settlement_wait_ui_on_init logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.wait_menu_prisoner_settlement_wait_ui_on_init(args);
```

### wait_menu_prisoner_wait_on_condition
`public static bool wait_menu_prisoner_wait_on_condition(MenuCallbackArgs args)`

**Purpose:** Executes the wait_menu_prisoner_wait_on_condition logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.wait_menu_prisoner_wait_on_condition(args);
```

### wait_menu_prisoner_wait_on_tick
`public static void wait_menu_prisoner_wait_on_tick(MenuCallbackArgs args, CampaignTime dt)`

**Purpose:** Executes the wait_menu_prisoner_wait_on_tick logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.wait_menu_prisoner_wait_on_tick(args, dt);
```

### wait_menu_settlement_wait_on_tick
`public static void wait_menu_settlement_wait_on_tick(MenuCallbackArgs args, CampaignTime dt)`

**Purpose:** Executes the wait_menu_settlement_wait_on_tick logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.wait_menu_settlement_wait_on_tick(args, dt);
```

### game_menu_town_manage_town_on_condition
`public static bool game_menu_town_manage_town_on_condition(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_town_manage_town_on_condition logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.game_menu_town_manage_town_on_condition(args);
```

### game_menu_town_manage_town_cheat_on_condition
`public static bool game_menu_town_manage_town_cheat_on_condition(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_town_manage_town_cheat_on_condition logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.game_menu_town_manage_town_cheat_on_condition(args);
```

### settlement_player_unconscious_continue_on_consequence
`public static void settlement_player_unconscious_continue_on_consequence(MenuCallbackArgs args)`

**Purpose:** Executes the settlement_player_unconscious_continue_on_consequence logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.settlement_player_unconscious_continue_on_consequence(args);
```

### game_menu_town_menu_on_init
`public static void game_menu_town_menu_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_town_menu_on_init logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.game_menu_town_menu_on_init(args);
```

### game_menu_town_menu_arena_on_init
`public static void game_menu_town_menu_arena_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_town_menu_arena_on_init logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.game_menu_town_menu_arena_on_init(args);
```

### game_menu_village_menu_on_init
`public static void game_menu_village_menu_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_village_menu_on_init logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.game_menu_village_menu_on_init(args);
```

### game_menu_town_menu_keep_on_init
`public static void game_menu_town_menu_keep_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_town_menu_keep_on_init logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.game_menu_town_menu_keep_on_init(args);
```

### game_menu_ui_town_manage_town_on_consequence
`public static void game_menu_ui_town_manage_town_on_consequence(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_ui_town_manage_town_on_consequence logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.game_menu_ui_town_manage_town_on_consequence(args);
```

### game_menu_ui_town_castle_manage_town_on_consequence
`public static void game_menu_ui_town_castle_manage_town_on_consequence(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_ui_town_castle_manage_town_on_consequence logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.game_menu_ui_town_castle_manage_town_on_consequence(args);
```

### game_menu_town_menu_backstreet_sound_on_init
`public static void game_menu_town_menu_backstreet_sound_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_town_menu_backstreet_sound_on_init logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.game_menu_town_menu_backstreet_sound_on_init(args);
```

### game_menu_town_menu_keep_sound_on_init
`public static void game_menu_town_menu_keep_sound_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_town_menu_keep_sound_on_init logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.game_menu_town_menu_keep_sound_on_init(args);
```

### game_menu_town_menu_sound_on_init
`public static void game_menu_town_menu_sound_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_town_menu_sound_on_init logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.game_menu_town_menu_sound_on_init(args);
```

### game_menu_town_menu_enter_sound_on_init
`public static void game_menu_town_menu_enter_sound_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_town_menu_enter_sound_on_init logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.game_menu_town_menu_enter_sound_on_init(args);
```

### game_menu_village_menu_sound_on_init
`public static void game_menu_village_menu_sound_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_village_menu_sound_on_init logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.game_menu_village_menu_sound_on_init(args);
```

### game_menu_village__enter_menu_sound_on_init
`public static void game_menu_village__enter_menu_sound_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_village__enter_menu_sound_on_init logic.

```csharp
// Static call; no instance required
PlayerTownVisitCampaignBehavior.game_menu_village__enter_menu_sound_on_init(args);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerTownVisitCampaignBehavior playerTownVisitCampaignBehavior = ...;
playerTownVisitCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)