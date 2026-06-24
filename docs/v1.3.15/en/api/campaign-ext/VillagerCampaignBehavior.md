<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillagerCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillagerCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillagerCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/VillagerCampaignBehavior.cs`

## Overview

`VillagerCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### DailyTick
`public void DailyTick()`

**Purpose:** Handles logic related to `daily tick`.

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `session launched` event is raised.

### taking_food_from_villagers_wait_on_condition
`public bool taking_food_from_villagers_wait_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `taking_food_from_villagers_wait_on_condition`.

### press_into_service_confirm_on_condition
`public bool press_into_service_confirm_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `press_into_service_confirm_on_condition`.

### taking_food_from_villagers_wait_on_consequence
`public void taking_food_from_villagers_wait_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `taking_food_from_villagers_wait_on_consequence`.

## Usage Example

```csharp
var value = new VillagerCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)