---
title: "VillageHostileActionCampaignBehavior"
description: "Auto-generated class reference for VillageHostileActionCampaignBehavior."
---
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

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of VillageHostileActionCampaignBehavior from the subsystem API first
VillageHostileActionCampaignBehavior villageHostileActionCampaignBehavior = ...;
villageHostileActionCampaignBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of VillageHostileActionCampaignBehavior from the subsystem API first
VillageHostileActionCampaignBehavior villageHostileActionCampaignBehavior = ...;
villageHostileActionCampaignBehavior.RegisterEvents();
```

### AddGameMenus
`public void AddGameMenus(CampaignGameStarter campaignGameSystemStarter)`

**Purpose:** Adds game menus to the current collection or state.

```csharp
// Obtain an instance of VillageHostileActionCampaignBehavior from the subsystem API first
VillageHostileActionCampaignBehavior villageHostileActionCampaignBehavior = ...;
villageHostileActionCampaignBehavior.AddGameMenus(campaignGameSystemStarter);
```

### hostile_action_village_on_init
`public static void hostile_action_village_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the hostile_action_village_on_init logic.

```csharp
// Static call; no instance required
VillageHostileActionCampaignBehavior.hostile_action_village_on_init(args);
```

### wait_menu_raiding_village_on_tick
`public static void wait_menu_raiding_village_on_tick(MenuCallbackArgs args, CampaignTime dt)`

**Purpose:** Executes the wait_menu_raiding_village_on_tick logic.

```csharp
// Static call; no instance required
VillageHostileActionCampaignBehavior.wait_menu_raiding_village_on_tick(args, dt);
```

### wait_menu_start_raiding_on_condition
`public static bool wait_menu_start_raiding_on_condition(MenuCallbackArgs args)`

**Purpose:** Executes the wait_menu_start_raiding_on_condition logic.

```csharp
// Static call; no instance required
VillageHostileActionCampaignBehavior.wait_menu_start_raiding_on_condition(args);
```

### wait_menu_end_raiding_on_consequence
`public static void wait_menu_end_raiding_on_consequence(MenuCallbackArgs args)`

**Purpose:** Executes the wait_menu_end_raiding_on_consequence logic.

```csharp
// Static call; no instance required
VillageHostileActionCampaignBehavior.wait_menu_end_raiding_on_consequence(args);
```

### game_menu_village_raid_ended_menu_sound_on_init
`public static void game_menu_village_raid_ended_menu_sound_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_village_raid_ended_menu_sound_on_init logic.

```csharp
// Static call; no instance required
VillageHostileActionCampaignBehavior.game_menu_village_raid_ended_menu_sound_on_init(args);
```

### game_menu_village_menu_on_init
`public static void game_menu_village_menu_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_village_menu_on_init logic.

```csharp
// Static call; no instance required
VillageHostileActionCampaignBehavior.game_menu_village_menu_on_init(args);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VillageHostileActionCampaignBehavior villageHostileActionCampaignBehavior = ...;
villageHostileActionCampaignBehavior.SyncData(dataStore);
```

## See Also

- [Area Index](../)