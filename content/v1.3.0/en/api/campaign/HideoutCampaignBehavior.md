---
title: "HideoutCampaignBehavior"
description: "Auto-generated class reference for HideoutCampaignBehavior."
---
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

**Purpose:** Invoked when the `new game created` event is raised.

```csharp
// Obtain an instance of HideoutCampaignBehavior from the subsystem API first
HideoutCampaignBehavior hideoutCampaignBehavior = ...;
hideoutCampaignBehavior.OnNewGameCreated(campaignGameStarter);
```

### OnGameLoaded
`public void OnGameLoaded(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the `game loaded` event is raised.

```csharp
// Obtain an instance of HideoutCampaignBehavior from the subsystem API first
HideoutCampaignBehavior hideoutCampaignBehavior = ...;
hideoutCampaignBehavior.OnGameLoaded(campaignGameStarter);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of HideoutCampaignBehavior from the subsystem API first
HideoutCampaignBehavior hideoutCampaignBehavior = ...;
hideoutCampaignBehavior.RegisterEvents();
```

### HourlyTickSettlement
`public void HourlyTickSettlement(Settlement settlement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of HideoutCampaignBehavior from the subsystem API first
HideoutCampaignBehavior hideoutCampaignBehavior = ...;
hideoutCampaignBehavior.HourlyTickSettlement(settlement);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of HideoutCampaignBehavior from the subsystem API first
HideoutCampaignBehavior hideoutCampaignBehavior = ...;
hideoutCampaignBehavior.SyncData(dataStore);
```

### GetInitialHideoutPopulation
`public int GetInitialHideoutPopulation()`

**Purpose:** Reads and returns the `initial hideout population` value held by the current object.

```csharp
// Obtain an instance of HideoutCampaignBehavior from the subsystem API first
HideoutCampaignBehavior hideoutCampaignBehavior = ...;
var result = hideoutCampaignBehavior.GetInitialHideoutPopulation();
```

### hideout_wait_menu_on_condition
`public bool hideout_wait_menu_on_condition(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of HideoutCampaignBehavior from the subsystem API first
HideoutCampaignBehavior hideoutCampaignBehavior = ...;
var result = hideoutCampaignBehavior.hideout_wait_menu_on_condition(args);
```

### hideout_wait_menu_on_tick
`public void hideout_wait_menu_on_tick(MenuCallbackArgs args, CampaignTime campaignTime)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of HideoutCampaignBehavior from the subsystem API first
HideoutCampaignBehavior hideoutCampaignBehavior = ...;
hideoutCampaignBehavior.hideout_wait_menu_on_tick(args, campaignTime);
```

### hideout_wait_menu_on_consequence
`public void hideout_wait_menu_on_consequence(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of HideoutCampaignBehavior from the subsystem API first
HideoutCampaignBehavior hideoutCampaignBehavior = ...;
hideoutCampaignBehavior.hideout_wait_menu_on_consequence(args);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HideoutCampaignBehavior hideoutCampaignBehavior = ...;
hideoutCampaignBehavior.OnNewGameCreated(campaignGameStarter);
```

## See Also

- [Area Index](../)