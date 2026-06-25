---
title: "VillagerCampaignBehavior"
description: "Auto-generated class reference for VillagerCampaignBehavior."
---
# VillagerCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillagerCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/VillagerCampaignBehavior.cs`

## Overview

`VillagerCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of VillagerCampaignBehavior from the subsystem API first
VillagerCampaignBehavior villagerCampaignBehavior = ...;
villagerCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of VillagerCampaignBehavior from the subsystem API first
VillagerCampaignBehavior villagerCampaignBehavior = ...;
villagerCampaignBehavior.SyncData(dataStore);
```

### DailyTick
`public void DailyTick()`

**Purpose:** Executes the DailyTick logic.

```csharp
// Obtain an instance of VillagerCampaignBehavior from the subsystem API first
VillagerCampaignBehavior villagerCampaignBehavior = ...;
villagerCampaignBehavior.DailyTick();
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the session launched event is raised.

```csharp
// Obtain an instance of VillagerCampaignBehavior from the subsystem API first
VillagerCampaignBehavior villagerCampaignBehavior = ...;
villagerCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

### taking_food_from_villagers_wait_on_condition
`public bool taking_food_from_villagers_wait_on_condition(MenuCallbackArgs args)`

**Purpose:** Executes the taking_food_from_villagers_wait_on_condition logic.

```csharp
// Obtain an instance of VillagerCampaignBehavior from the subsystem API first
VillagerCampaignBehavior villagerCampaignBehavior = ...;
var result = villagerCampaignBehavior.taking_food_from_villagers_wait_on_condition(args);
```

### press_into_service_confirm_on_condition
`public bool press_into_service_confirm_on_condition(MenuCallbackArgs args)`

**Purpose:** Executes the press_into_service_confirm_on_condition logic.

```csharp
// Obtain an instance of VillagerCampaignBehavior from the subsystem API first
VillagerCampaignBehavior villagerCampaignBehavior = ...;
var result = villagerCampaignBehavior.press_into_service_confirm_on_condition(args);
```

### taking_food_from_villagers_wait_on_consequence
`public void taking_food_from_villagers_wait_on_consequence(MenuCallbackArgs args)`

**Purpose:** Executes the taking_food_from_villagers_wait_on_consequence logic.

```csharp
// Obtain an instance of VillagerCampaignBehavior from the subsystem API first
VillagerCampaignBehavior villagerCampaignBehavior = ...;
villagerCampaignBehavior.taking_food_from_villagers_wait_on_consequence(args);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VillagerCampaignBehavior villagerCampaignBehavior = ...;
villagerCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)