---
title: "VillageHostileActionCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillageHostileActionCampaignBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VillageHostileActionCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageHostileActionCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/VillageHostileActionCampaignBehavior.cs`

## Overview

`VillageHostileActionCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### AddGameMenus
`public void AddGameMenus(CampaignGameStarter campaignGameSystemStarter)`

**Purpose:** Adds `game menus` to the current collection or state.

### hostile_action_village_on_init
`public static void hostile_action_village_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `hostile_action_village_on_init`.

### wait_menu_raiding_village_on_tick
`public static void wait_menu_raiding_village_on_tick(MenuCallbackArgs args, CampaignTime dt)`

**Purpose:** Handles logic related to `wait_menu_raiding_village_on_tick`.

### wait_menu_start_raiding_on_condition
`public static bool wait_menu_start_raiding_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `wait_menu_start_raiding_on_condition`.

### wait_menu_end_raiding_on_consequence
`public static void wait_menu_end_raiding_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `wait_menu_end_raiding_on_consequence`.

### game_menu_village_raid_ended_menu_sound_on_init
`public static void game_menu_village_raid_ended_menu_sound_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_village_raid_ended_menu_sound_on_init`.

### game_menu_village_menu_on_init
`public static void game_menu_village_menu_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_village_menu_on_init`.

## Usage Example

```csharp
var value = new VillageHostileActionCampaignBehavior();
value.SyncData(dataStore);
```

## See Also

- [Complete Class Catalog](../catalog)