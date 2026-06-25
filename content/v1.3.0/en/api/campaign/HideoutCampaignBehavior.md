---
title: "HideoutCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutCampaignBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HideoutCampaignBehavior : CampaignBehaviorBase, IHideoutCampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/HideoutCampaignBehavior.cs`

## Overview

`HideoutCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnNewGameCreated
`public void OnNewGameCreated(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `new game created` event is raised.

### OnGameLoaded
`public void OnGameLoaded(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `game loaded` event is raised.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### HourlyTickSettlement
`public void HourlyTickSettlement(Settlement settlement)`

**Purpose:** Handles logic related to `hourly tick settlement`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### GetInitialHideoutPopulation
`public int GetInitialHideoutPopulation()`

**Purpose:** Gets the current value of `initial hideout population`.

### hideout_wait_menu_on_condition
`public bool hideout_wait_menu_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `hideout_wait_menu_on_condition`.

### hideout_wait_menu_on_tick
`public void hideout_wait_menu_on_tick(MenuCallbackArgs args, CampaignTime campaignTime)`

**Purpose:** Handles logic related to `hideout_wait_menu_on_tick`.

### hideout_wait_menu_on_consequence
`public void hideout_wait_menu_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `hideout_wait_menu_on_consequence`.

## Usage Example

```csharp
var value = new HideoutCampaignBehavior();
value.OnNewGameCreated(campaignGameStarter);
```

## See Also

- [Complete Class Catalog](../catalog)